import os
import matplotlib.pyplot as plt
from pymongo import MongoClient
from collections import defaultdict, Counter
import networkx as nx
import numpy as np
import csv
import json

# Load environment variables from .env file

#token = "DOT"
#token = "ETH"
#token = "USDC.e"
#token = "USDT.e"
#token = "EURC.e"
#token = "WBTC.e"
token = "PEPE.e"

with open('../lib/polkadotPeopleIdentities.json', 'r') as f:
    identities = json.load(f)
    address_to_username = {entry['address']: entry['username'] for entry in identities}

with open('./incognitoIdentities.json', 'r') as f2:
    other_identities = json.load(f2)
    address_to_username.update({entry['address']: entry['username'] for entry in other_identities})

# MongoDB connection URL
MONGODB_URL = os.getenv("MONGODB_URL")

# Connect to MongoDB
client = MongoClient(MONGODB_URL, socketTimeoutMS=30000)
db = client["asset-hub-polkadot"]
collection = db["events"]

queries = {
    "DOT": {
        "decimals": "10",
        "shielding_query": {
            "section": "balances",
            "method": "Transfer",
            "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9"
        },
        "unshielding_query": {
            "section": "balances",
            "method": "Transfer",
            "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9"
        }
    },
    "ETH": {
        "decimals": "18",
        "shielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X1": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        }
                    ]
                }
            }
        },
        "unshielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X1": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        }
                    ]
                }
            }
        }
    },
    "USDC.e": {
        "decimals": "6",
        "shielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                            }
                        }
                    ]
                }
            }
        },
        "unshielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
                            }
                        }
                    ]
                }
            }
        }
    },
    "EURC.e": {
        "decimals": "6",
        "shielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0x1abaea1f7c830bd89acc67ec4af516284b1bc33c"
                            }
                        }
                    ]
                }
            }
        },
        "unshielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0x1abaea1f7c830bd89acc67ec4af516284b1bc33c"
                            }
                        }
                    ]
                }
            }
        }
    },
    "USDT.e": {
        "decimals": "6",
        "shielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0xdac17f958d2ee523a2206206994597c13d831ec7"
                            }
                        }
                    ]
                }
            }
        },
        "unshielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0xdac17f958d2ee523a2206206994597c13d831ec7"
                            }
                        }
                    ]
                }
            }
        }
    },
    "WBTC.e": {
        "decimals": "8",
        "shielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
                            }
                        }
                    ]
                }
            }
        },
        "unshielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
                            }
                        }
                    ]
                }
            }
        }
    },
    "PEPE.e": {
        "decimals": "18",
        "shielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.to": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0x6982508145454ce325ddbe47a25d4ec3d2311933"
                            }
                        }
                    ]
                }
            }
        },
        "unshielding_query": {
            "section": "foreignAssets",
            "method": "Transferred",
            "data.from": "14UsSvuFHWMTNhjkHcRt9gw1TogeWzg6zydVsHqK9EXhWHy9",
            "data.assetId": {
                "parents": "2",
                "interior": {
                    "X2": [
                        {
                            "GlobalConsensus": {
                                "Ethereum": {
                                    "chainId": "1"
                                }
                            }
                        },
                        {
                            "AccountKey20": {
                                "network": None,
                                "key": "0x6982508145454ce325ddbe47a25d4ec3d2311933"
                            }
                        }
                    ]
                }
            }
        }
    }
}

# Select the appropriate queries based on the token value
shielding_query = queries[token]["shielding_query"]
unshielding_query = queries[token]["unshielding_query"]
decimals = int(queries[token]["decimals"])

# Fetch data from MongoDB
shielding_events = list(collection.find(shielding_query))
unshielding_events = list(collection.find(unshielding_query))

print(f"Found {len(shielding_events)} shielding events for " + token)
print(f"Found {len(unshielding_events)} unshielding events for " + token)

G = nx.DiGraph()

# Calculate net transfers
net_transfers = defaultdict(int)
gross_shielded = 0
gross_unshielded = 0

with open('shielding_events.csv', 'w', newline='') as shield_file, open('unshielding_events.csv', 'w', newline='') as unshield_file:
    shield_writer = csv.writer(shield_file)
    unshield_writer = csv.writer(unshield_file)
    shield_writer.writerow(['owner', 'from_address', 'to_address', 'amount'])
    unshield_writer.writerow(['owner', 'from_address', 'to_address', 'amount'])
    for event in shielding_events:
        from_address = event["data"]["from"] # [:8]
        to_address = event["data"]["to"] # [:8]
        amount = int(str(event["data"]["amount"]).replace(",", "")) / 10**decimals
        gross_shielded += amount
        net_transfers[(from_address, to_address)] += amount
        shield_writer.writerow([event["data"]["from"], event["data"]["to"], amount])

    for event in unshielding_events:
        from_address = event["data"]["from"] #[:8]
        to_address = event["data"]["to"] #[:8]
        amount = int(str(event["data"]["amount"]).replace(",", "")) / 10**decimals
        gross_unshielded += amount
        net_transfers[(to_address, from_address)] -= amount
        unshield_writer.writerow([event["data"]["from"], event["data"]["to"], amount])

with open('net_shielding_by_address.csv', 'w', newline='') as net_file:
    net_writer = csv.writer(net_file)
    net_writer.writerow(['owner', 'from_address', 'to_address', 'net_amount'])
    for (from_address, to_address), net_amount in net_transfers.items():
        username = address_to_username.get(from_address, '')
        net_writer.writerow([username, from_address, to_address, net_amount])

print(f"Gross shielded amount: {gross_shielded} " + token)
print(f"Gross unshielded amount: {gross_unshielded} " + token)

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
y_values = [1+sum(1 for amount in net_transfers.values() if amount > x) for x in positive_net_amounts]

# Plot unshielding amount vs best case k-anonymity
plt.style.use('dark_background')
fig, ax = plt.subplots(figsize=(10, 6))
ax.plot(positive_net_amounts, y_values, marker='o', color='cyan')
ax.set_xscale('log')
ax.set_xlabel(f'Unshielding Amount [{token}]', color='gray')
ax.set_ylabel("k-Anonymity Estimate", color='gray')
ax.set_title("Unshielding Amount vs k-Anonymity", color='gray')
ax.grid(True, color='gray')
ax.set_xticks([0.1, 1, 10, 100, 1000])
ax.set_xticklabels(['0.1', '1', '10', '100', '1000'], color='gray')
ax.tick_params(axis='y', colors='gray')
for spine in ax.spines.values():
    spine.set_edgecolor('gray')
plt.savefig(f'k-anonymity-{token}.png', transparent=True)
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
