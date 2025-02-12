# `knockd`

> Reference: [Arch Wiki: Port Knocking With a daemon helper](https://wiki.archlinux.org/index.php/Port_knocking#With_a_daemon_helper)


In this page, I will secure SSH (port 22) with a **port knocking scheme**.

TODO: refactor this page


> `knockd` works only if the INPUT chain policy is set to ACCEPT.



```sh
apt install -y knockd
```


```sh
iptables -F
iptables -P INPUT ACCEPT
iptables -I INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j REJECT
```



```sh
root@host:~# iptables -L
# Warning: iptables-legacy tables present, use iptables-legacy to see them
Chain INPUT (policy ACCEPT)
target     prot opt source               destination         
ACCEPT     all  --  anywhere             anywhere             state RELATED,ESTABLISHED
REJECT     tcp  --  anywhere             anywhere             tcp dpt:22 reject-with icmp-port-unreachable

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination         

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination         

```



If we want the following port knocking sequence **4000, 3000, 2000** before giving access to SSH.

To create a port knocking sequence, we must define an entry in the `/etc/knockd.conf` file.

```sh
nano -l /etc/knockd.conf
```
```conf
[options]
  logfile = /var/log/knockd.log

[opencloseSSH]
  sequence      = 4000:tcp,3000:tcp,2000:tcp
  seq_timeout   = 15
  tcpflags      = syn
  start_command = /usr/sbin/iptables -I INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
  cmd_timeout   = 5
  stop_command  = /usr/sbin/iptables -D INPUT -s %IP% -p tcp --dport 22 -j ACCEPT
```


> Before editing the `/etc/knockd.conf`, make sure that the `knockd` is stoped.


It is very important to edit the `/etc/default/knockd` file:
- Specify the **network interface** on which `knockd` will listen
- Set START_KNOCKD to 1


```sh
nano -l /etc/default/knockd
```
```sh
# control if we start knockd at init or not
# 1 = start
# anything else = don't start
# PLEASE EDIT /etc/knockd.conf BEFORE ENABLING
START_KNOCKD=1

# command line options
KNOCKD_OPTS="-i eth0"
```


```sh
systemctl enable knockd
systemctl start knockd
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

