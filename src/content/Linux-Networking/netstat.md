# `netstat`


## **TL;DR**
---

Display network-related information such as open connections, open socket ports, etc.
See also: ss.

More information: <https://manned.org/netstat>.

```sh
# List all ports:
netstat --all

# List all listening ports:
netstat --listening

# List listening TCP ports:
netstat --tcp

# Display PID and program names:
netstat --program

# List information continuously:
netstat --continuous

# List routes and do not resolve IP addresses to hostnames:
netstat --route --numeric

# List listening TCP and UDP ports (+ user and process if you're root):
netstat --listening --program --numeric --tcp --udp --extend
```


## Options
---


| [OPTION]      | Command          | Description                                                                                                 |
| :---          | :---             | :---                                                                                                        |
| `-a`          | `netstat -a`     | Displays all active ports                                                                                   |
| `-e`          | `netstat -e`     | Shows statistics about your network connection (received and sent data packets, etc.)                       |
| `-i`          | `netstat -i`     | Brings up the netstat overview menu                                                                         |
| `-n`          | `netstat -n`     | Numerical display of addresses and port numbers                                                             |
| `-p protocol` | `netstat -p TCP` | Displays the connections for the specified protocol, in this case TCP (also possible: UDP, TCPv6, or UDPv6) |
| `-q`          | `netstat -q`     | Lists all connections, all listening TCP ports, and all open TCP ports that are not listening               |
| `-r`          | `netstat -r`     | Displays the IP routing table                                                                               |
| `-s`          | `netstat -s`     | Retrieves statistics about the important network protocols such as TCP, IP, or UDP                          |


## All in one go
---

```sh
netstat -tulpan
```

> `-n` flag disables **DNS resolution**, meaning that IP addresses will be displayed instead of names and the ouput will be printed faster.



```sh
# With DNS resolution
netstat -tulpa
```