# `GRE` (Generic Routing Encapsulation)


> Read more here:
> - <https://community.hetzner.com/tutorials/linux-setup-gre-tunnel>
> - <https://bitlaunch.io/blog/what-is-a-gre-tunnel-and-how-to-set-one-up/>
> - <https://docs.nvidia.com/networking-ethernet-software/cumulus-linux-51/Layer-3/GRE-Tunneling/>



## Steps
---

1. Load the GRE module (if not already loaded)

```sh
sudo modprobe ip_gre
```


2. Create the GRE tunnel interface

```sh
sudo ip link add gre1 type gretap local <LOCAL_IP> remote <REMOTE_IP>
```


- For a pure **IP over GRE** (without Ethernet header, use):

```sh
sudo ip tunnel add gre1 mode gre local <LOCAL_IP> remote <REMOTE_IP> ttl 255
```


3. Assign an IP address on the GRE interface

```sh
sudo ip addr add <TUNNEL_IP>/<mask> dev gre1
```


4. Bring UP the GRE interface

```sh
sudo ip link set gre1 up
```



5. Add a route (if needed)


```sh
sudo ip route add <DEST_NETWORK> via <TUNNEL_IP> dev gre1
```


## Scripts
---


On server 1:
```sh
sudo ip tunnel add gre1 mode gre local 198.51.100.1 remote 203.0.113.1 ttl 255
sudo ip addr add 10.0.0.1/30 dev gre1
sudo ip link set gre1 up
```

On server 2:
```sh
sudo ip tunnel add gre1 mode gre local 203.0.113.1 remote 198.51.100.1 ttl 255
sudo ip addr add 10.0.0.2/30 dev gre1
sudo ip link set gre1 up
```

> The code is from [here](https://community.hetzner.com/tutorials/linux-setup-gre-tunnel).


