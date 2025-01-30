# `nmap`

> ⚠️ `nmap` is illegal! Don't run it on networks you don't own and you aren't authorized to scan!


## **TL;DR**
---

Network exploration tool and security/port scanner.

Some features (e.g. SYN scan) activate only when nmap is run with root privileges.

More information: <https://nmap.org/book/man.html>.


```sh
# Scan the top 1000 ports of a remote host with various [v]erbosity levels:
nmap -v1|2|3 ip_or_hostname

# Run a ping sweep over an entire subnet or individual hosts very aggressively:
nmap -T5 -sn 192.168.0.0/24|ip_or_hostname1,ip_or_hostname2,...

# Enable OS detection, version detection, script scanning, and traceroute of hosts from a file:
sudo nmap -A -iL path/to/file.txt

# Scan a specific list of ports (use -p- for all ports from 1 to 65535):
nmap -p port1,port2,... ip_or_host1,ip_or_host2,...

# Perform service and version detection of the top 1000 ports using default NSE scripts, writing results (-oA) to output files:
nmap -sC -sV -oA top-1000-ports ip_or_host1,ip_or_host2,...

# Scan target(s) carefully using default and safe NSE scripts:
nmap --script "default and safe" ip_or_host1,ip_or_host2,...

# Scan for web servers running on standard ports 80 and 443 using all available http-* NSE scripts:
nmap --script "http-*" ip_or_host1,ip_or_host2,... -p 80,443

# Attempt evading IDS/IPS detection by using an extremely slow scan (-T0), decoy source addresses (-D), [f]ragmented packets, random data and other methods:
sudo nmap -T0 -D decoy_ip1,decoy_ip2,... --source-port 53 -f --data-length 16 -Pn ip_or_host
```


## Common Used Options
---

| Option              | Description |
| :---                | :---        |
| `-sL`               | List Scan - simply list targets to scan |
| `-sn`               | Ping Scan - disable port scan |
| ` -p <port ranges>` | Only scan specified ports |
| `-sV`               | Probe open ports to determine service/version info |
| `-O`                | Enable OS detection | 
| `-T<0-5>`           | Set timing template (higher is faster) |
| `-n/-R`             | Never do DNS resolution/Always resolve [default: sometimes] |
| `--spoof-mac <mac address/prefix/vendor name>` | Spoof your MAC address |
| `-v` | Increase verbosity level (use `-vv` or more for greater effect) |
| `-d` | Increase debugging level (use `-dd` or more for greater effect) |
| `-6` | Enable IPv6 scanning | 
| `-A` | Enable OS detection, version detection, script scanning, and traceroute |

