# `wg-easy`



Read the official [wg-easy repo](https://github.com/wg-easy/wg-easy).

Is the **Web GUI for WireGuard**.

![img](https://github.com/wg-easy/wg-easy/raw/master/assets/screenshot.png)


## 1. Install Docker
---

```sh
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker $(whoami)
exit        # Close the shell, so modifications take effect
```

## 2. Generate bcrypt password hash
---


You will most likely need to [read this](https://github.com/wg-easy/wg-easy/blob/master/How_to_generate_an_bcrypt_hash.md)
in order to generate that **hashed password**.

> Read it carefely 🙂. Everything you need is already there.


```sh
docker run ghcr.io/wg-easy/wg-easy wgpw YOUR_PASSWORD
PASSWORD_HASH='$2b$12$coPqCsPtcFO.Ab99xylBNOW4.Iu7OOA2/ZIboHN6/oyxca3MWo7fW' // literally YOUR_PASSWORD
```


## 3. Port Forwarding
---

`wg-easy` uses:
- **51820 UDP port**
- **51821 TPC port**


Make sure to configure on your (home) router **port forwarding** rules 
that allow connections on these specific ports towards the device running the **WireGuard** server.



## 4. Deploy WireGuard Easy

### Using `docker` CLI
---


```sh
docker run --detach \
  --name wg-easy \
  --env LANG=de \
  --env WG_HOST=<🚨YOUR_SERVER_IP> \
  --env PASSWORD_HASH='<🚨YOUR_ADMIN_PASSWORD_HASH>' \
  --env PORT=51821 \
  --env WG_PORT=51820 \
  --volume ~/.wg-easy:/etc/wireguard \
  --publish 51820:51820/udp \
  --publish 51821:51821/tcp \
  --cap-add NET_ADMIN \
  --cap-add SYS_MODULE \
  --sysctl 'net.ipv4.conf.all.src_valid_mark=1' \
  --sysctl 'net.ipv4.ip_forward=1' \
  --restart unless-stopped \
  ghcr.io/wg-easy/wg-easy
```


### Using `docker compose`
----

Source of information is at [this link](https://docs.techdox.nz/wgeasy/).

```sh
nano -l docker-compose.yml   # This is a sample
```
```sh
version: '3.8'
services:
  wg-easy:
    image: ghcr.io/wg-easy/wg-easy  # The Docker image to use.
    container_name: wg-easy         # Name of the container.
    environment:                    # Environment variables to configure the instance.
      - LANG=en                     # Language settings.
      - WG_HOST=<Your IP/Domain>    # Public IP or domain name where WG-Easy is accessible.
      - PASSWORD_HASH='<🚨YOUR_ADMIN_PASSWORD_HASH>' # Bcrypt hash for Web UI login.
      - PORT=51821                  # Port for the web interface.
      - WG_PORT=51820               # WireGuard port for VPN traffic.
    volumes:
      - ./wg-easy/:/etc/wireguard   # Volume mapping for WireGuard configuration files.
    ports:
      - "51820:51820/udp"           # UDP port used by WireGuard.
      - "51821:51821/tcp"           # TCP port for accessing the web interface.
    cap_add:                        # Capabilities required for managing networking features.
      - NET_ADMIN
      - SYS_MODULE
    sysctls:                        # Kernel parameters that need to be set for WireGuard.
      - net.ipv4.conf.all.src_valid_mark=1
      - net.ipv4.ip_forward=1
    restart: unless-stopped         # Ensures the container restarts automatically unless manually stopped.
```

```sh
mkdir -p wg-easy
```

```sh
docker compose up -d                 # Deployment
```

