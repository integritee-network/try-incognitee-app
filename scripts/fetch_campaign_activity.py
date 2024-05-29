#!/usr/bin/env python3
#
# ./fetch_contributions <fund index> <subscan api key>
#
import requests
import csv
import sys

if len(sys.argv) < 2:
    print("Usage: ./fetch_campaign_activity.py <subscan api key>")
    sys.exit()

api_key = sys.argv[1]

vault_address = '5CBWPstfcW7dPYGdUG4kVDZSQq9Q9Ed65LT2Eu1inhJRoY8e'

with open(f'campaign-activity.csv', 'w', newline='') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')

    page = 0
    total_transferred = 0

    while True:
        response = requests.post('https://paseo.api.subscan.io/api/v2/scan/transfers',
                                 headers={
                                     'Content-Type': 'application/json',
                                     'X-API-Key': api_key,
                                     'Accept': 'application/json',
                                 },
                                 json={
                                     'address': vault_address,
                                     'direction': "all",
                                     'success': True,
                                     'row': 100,
                                     'page': page,
                                 }
                                 )
        transfers = response.json()['data']['transfers']
        if transfers is None:
            break

        print(f"page : {page} - nr of transfers: {len(transfers)}")
        if page == 0:
            print(transfers)

        for transfer in transfers:
            print(f"{transfer['amount']}, {str(transfer['from'])}, {str(transfer['to'])}")
            total_transferred += float(transfer['amount'])
            writer.writerow([transfer.get('block_num'),
                             str(transfer.get('from')),
                             str(transfer.get('to')),
                             str(transfer.get('amount'))])

        page += 1

print(f"total transferred: {total_transferred}")
