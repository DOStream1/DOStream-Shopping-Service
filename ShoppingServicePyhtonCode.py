import sys
import requests
import json

# Check if the base URL is provided as a command-line argument
if len(sys.argv) < 2:
    print("Usage: python your_shopping_script.py <base_url>")
    sys.exit(1)

# Get the base URL from the command-line argument
base_url = sys.argv[1]

def get_headers():
    # Define your headers here
    headers = {
        'Authorization': """Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3Q0QHRlc3QuY29tIiwiX2lkIjoiNjU2ZjQ2NTI0ZGEwMGQwMDE3NmQwZTRkIiwiaWF0IjoxNzAxNzkxMzE0LCJleHAiOjE3MDQzODMzMTR9.doBeXKaajbI72bkRpHx6pIXXno6wt87B-dI43hX3UP0""",
        'Content-Type': 'application/json'
    }
    return headers

# Function to make a POST request
def post_request(endpoint, payload):
    url = f"{base_url}/{endpoint}"
    headers = get_headers()
    response = requests.post(url, headers=headers, data=payload)
    with open("output.txt", "a") as output_file:
        output_file.write(f"URL: {url}\n")
        output_file.write(f"Response: {response.text}\n\n")

# Function to make a GET request
def get_request(endpoint):
    url = f"{base_url}/{endpoint}"
    headers = get_headers()
    response = requests.get(url, headers=headers)
    with open("output.txt", "a") as output_file:
        output_file.write(f"URL: {url}\n")
        output_file.write(f"Response: {response.text}\n\n")

# Example usage for shopping:

# PUT request to /cart
payload_add_to_cart = json.dumps({
    "_id": "612cbc9ff201aa8b286fcd13",
    "qty": 3
})
post_request("cart", payload_add_to_cart)

# GET request to /cart
get_request("cart")

# DELETE request to /cart/<product_id>
get_request("cart/612cbc9ff201aa8b286fcd13")

# POST request to /order
payload_create_order = json.dumps({
    "items": [
        {"product_id": "612cbc9ff201aa8b286fcd13", "quantity": 2},
        {"product_id": "611e0109b81af50c9ea7a478", "quantity": 1}
    ],
    "total_price": 1200
})
post_request("order", payload_create_order)

# GET request to /order/history
get_request("order/history")

# GET request to /order/<order_id>
get_request("order/612cbc9ff201aa8b286fcd13")
