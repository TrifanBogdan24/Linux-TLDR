# `ip link`


## **TL;DR**
---

Manage network interfaces.

More information: <https://manned.org/ip-link>.


```sh
# Show information about all network interfaces:
ip link

# Show information about a specific network interface:
ip link show <ethN>

# Bring a network interface up or down:
ip link set <ethN> <up|down>

# Give a meaningful name to a network interface:
ip link set <ethN> alias "LAN Interface"

# Change the MAC address of a network interface:
ip link set <ethN> address ff:ff:ff:ff:ff:ff

# Change the MTU size for a network interface to use jumbo frames:
ip link set <ethN> mtu 9000
```


## Long and short version
---


| Long version | Short Version |
| :--- | :--- |
| `ip link` | `ip l` or `ip li` |

