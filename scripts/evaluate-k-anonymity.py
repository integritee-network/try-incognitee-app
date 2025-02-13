import os
import matplotlib.pyplot as plt
from pymongo import MongoClient
from collections import defaultdict, Counter
import networkx as nx
import numpy as np
# Load environment variables from .env file


# MongoDB connection URL
MONGODB_URL = os.getenv("MONGODB_URL")

# Connect to MongoDB
client = MongoClient(MONGODB_URL)
db = client["asset-hub-polkadot"]
collection = db["events"]

# Queries
shielding_query = {
    "section": "balances",
    "method": "Transfer",
    "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9"
}
unshielding_query = {
    "section": "balances",
    "method": "Transfer",
    "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9"
}

# Fetch data from MongoDB
shielding_events = list(collection.find(shielding_query))
unshielding_events = list(collection.find(unshielding_query))

G = nx.DiGraph()

# Calculate net transfers
net_transfers = defaultdict(int)
for event in shielding_events:
    from_address = event["data"]["from"][:8]
    to_address = event["data"]["to"][:8]
    amount = int(event["data"]["amount"].replace(",", "")) / 10**10
    net_transfers[(from_address, to_address)] += amount

for event in unshielding_events:
    from_address = event["data"]["from"][:8]
    to_address = event["data"]["to"][:8]
    amount = int(event["data"]["amount"].replace(",", "")) / 10**10
    net_transfers[(to_address, from_address)] -= amount

# Add nodes and consolidated edges to the graph
for (from_address, to_address), net_amount in net_transfers.items():
    if net_amount > 0:
        G.add_node(from_address)
        G.add_node(to_address)
        G.add_edge(from_address, to_address, weight=np.round(net_amount, 3))
    if net_amount < 0:
        G.add_node(from_address)
        G.add_node(to_address)
        G.add_edge(to_address, from_address, weight=np.round(net_amount, 3))

# Determine node colors and sizes
node_colors = []
node_sizes = []
for node in G.nodes():
    if node == "14UsSvuF":
        node_colors.append('black')
        node_sizes.append(3000)  # Double the size of other nodes
    elif G.in_degree(node) > 0 and G.out_degree(node) == 0:
        node_colors.append('green')
        node_sizes.append(500)
    else:
        node_colors.append('skyblue')
        node_sizes.append(500)

# Sort nodes by total edge weight
node_weights = {node: sum(abs(G[u][v]['weight']) for u, v in G.edges(node)) for node in G.nodes()}
sorted_nodes = sorted(node_weights, key=node_weights.get, reverse=True)

# Manually set positions: center the black node and distribute others in a circle
pos = {}
center_node = "14UsSvuF"
pos[center_node] = (0, 0)
radius = 10
angle_step = 2 * np.pi / (len(G.nodes) - 1)
angle = 0

for node in sorted_nodes:
    if node != center_node:
        pos[node] = (radius * np.cos(angle), radius * np.sin(angle))
        angle += angle_step

# Draw the graph with manually set positions
plt.figure(figsize=(16, 12))
nx.draw(G, pos, with_labels=True, node_size=node_sizes, node_color=node_colors, font_size=10, font_weight="bold", edge_color="gray")
edge_colors = ['red' if G[u][v]['weight'] < 0 else 'gray' for u, v in G.edges()]
nx.draw_networkx_edges(G, pos, edge_color=edge_colors)
labels = nx.get_edge_attributes(G, 'weight')
nx.draw_networkx_edge_labels(G, pos, edge_labels=labels)
plt.title("Shielding and Unshielding Events Directed Graph")
plt.show(block=False)

# Calculate x-values and y-values for the second figure
positive_net_amounts = sorted(set(amount for amount in net_transfers.values() if amount > 0))
y_values = [sum(1 for amount in net_transfers.values() if amount > x) for x in positive_net_amounts]

# Plot unshielding amount vs best case k-anonymity
plt.style.use('dark_background')
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(positive_net_amounts, y_values, marker='o', color='cyan')
ax.set_xscale('log')
ax.set_xlabel("Unshielding Amount [DOT]", color='gray')
ax.set_ylabel("k-Anonymity Estimate", color='gray')
ax.set_title("Unshielding Amount vs k-Anonymity", color='gray')
ax.grid(True, color='gray')
ax.set_xticks([0.1, 1, 10, 100])
ax.set_xticklabels(['0.1', '1', '10', '100'], color='gray')
ax.tick_params(axis='y', colors='gray')
for spine in ax.spines.values():
    spine.set_edgecolor('gray')
plt.savefig('plot.png', transparent=True)
plt.show()


# # Extract data.from accounts from shielding events
# shielding_from_accounts = {event["data"]["from"] for event in shielding_events}
#
# # Filter unshielding events
# unlinked_unshielding_events = [
#     event for event in unshielding_events if event["data"]["to"] not in shielding_from_accounts
# ]
#
# # Preprocess shielding events
# shielding_sums = defaultdict(int)
# for event in shielding_events:
#     shielding_sums[event["data"]["from"]] += int(event["data"]["amount"].replace(",",""))
#
# # Preprocess unshielding events
# unshielding_sums = defaultdict(int)
# for event in unlinked_unshielding_events:
#     unshielding_sums[event["data"]["to"]] += int(event["data"]["amount"].replace(",",""))
#
# # Calculate unperformed unshields
# unperformed_unshields = {address: shielding_sums[address] - unshielding_sums[address] for address in shielding_sums}
# # Extract amounts
# unburned_shielding_amounts = [amount / 10**10 for amount in unperformed_unshields.values()]
# unlinked_unshielding_amounts = [amount / 10**10 for amount in unshielding_sums.values()]
#
# print("unburned shielding amounts:")
# print(unburned_shielding_amounts)
#
# print("unlinked unshielding amounts:")
# print(unlinked_unshielding_amounts)
