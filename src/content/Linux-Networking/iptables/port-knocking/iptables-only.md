# iptables only


> Reference: [Arch Wiki: Port Knocking With iptables only](https://wiki.archlinux.org/index.php/Port_knocking#With_iptables_only)

In this page, I will secure SSH (port 22) with a **port knocking scheme**.


TODO: refactor this page


If we want the following port knocking sequence **4000, 3000, 2000** before giving access to SSH:

```sh
#!/bin/bash

# Flush existing rules and set default policies
iptables -F
iptables -X
iptables -P INPUT DROP
iptables -P FORWARD DROP
iptables -P OUTPUT ACCEPT

# Create custom chains
iptables -N TRAFFIC
iptables -N SSH-INPUT
iptables -N SSH-INPUTTWO

# Apply rules to INPUT chain
iptables -A INPUT -j TRAFFIC

# TRAFFIC chain rules for Port Knocking
iptables -A TRAFFIC -p icmp --icmp-type any -j ACCEPT
iptables -A TRAFFIC -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A TRAFFIC -m state --state NEW -m tcp -p tcp --dport 22 -m recent --rcheck --seconds 30 --name SSH2 -j ACCEPT
iptables -A TRAFFIC -m state --state NEW -m tcp -p tcp -m recent --name SSH2 --remove -j REJECT
iptables -A TRAFFIC -m state --state NEW -m tcp -p tcp --dport 2000 -m recent --rcheck --name SSH1 -j SSH-INPUTTWO
iptables -A TRAFFIC -m state --state NEW -m tcp -p tcp -m recent --name SSH1 --remove -j REJECT
iptables -A TRAFFIC -m state --state NEW -m tcp -p tcp --dport 3000 -m recent --rcheck --name SSH0 -j SSH-INPUT
iptables -A TRAFFIC -m state --state NEW -m tcp -p tcp -m recent --name SSH0 --remove -j REJECT
iptables -A TRAFFIC -m state --state NEW -m tcp -p tcp --dport 4000 -m recent --name SSH0 --set -j REJECT

# SSH-INPUT chain rules
iptables -A SSH-INPUT -m recent --name SSH1 --set -j REJECT
iptables -A SSH-INPUTTWO -m recent --name SSH2 --set -j REJECT

# Drop any unmatched traffic
iptables -A TRAFFIC -j REJECT
```


To gain access to the SSH service,
`netcat` tool can be used for completing the port sequence:

```sh
nc -z green 4000
nc -z green 3000
nc -z green 2000
ssh student@green
```

> `ssh student@green -p 4000/3000/2000/22` won't work, since SSH will eventually give timeout.

