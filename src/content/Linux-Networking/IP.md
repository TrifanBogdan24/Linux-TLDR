# IP





## **TL;DR**
---

Show/manipulate routing, devices, policy routing and tunnels.

Some subcommands such as address have their own usage documentation.

More information: <https://www.manned.org/ip.8>.


```sh
# List interfaces with detailed info:
ip address

# List interfaces with brief network layer info:
ip -brief address

# List interfaces with brief link layer info:
ip -brief link

# Display the routing table:
ip route

# Show neighbors (ARP table):
ip neighbour

# Make an interface up/down:
ip link set interface up|down

# Add/Delete an IP address to an interface:
ip addr add/del ip/mask dev interface

# Add a default route:
ip route add default via ip dev interface
```