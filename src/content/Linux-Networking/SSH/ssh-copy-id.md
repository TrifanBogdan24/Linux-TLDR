# `ssh-copy-id`


Is used to copy a **SSH public key** in the `~/.ssh/authorized_keys` file of a remote computer (creating the file and directory, if necesary).

> ⚠️ DON'T copy the **private key**!

> ⚠️ Copy only the `public key` (it has **`.pub` extension**)!



## **TL;DR**
---


Install your public key in a remote machine's authorized_keys.

More information: <https://manned.org/ssh-copy-id>.


```sh
# Copy your keys to the remote machine:
ssh-copy-id username@remote_host

# Copy the given public key to the remote:
ssh-copy-id -i path/to/certificate username@remote_host

# Copy the given public key to the remote with specific port:
ssh-copy-id -i path/to/certificate -p port username@remote_host
```




```sh
ssh-copy-id -i <PUB_KEY> <user>@<IP/hostname>
```


## Troubleshooting
---


In case `ssh-copy-id` fails, you have to manually copy the **public key**
on the `/home/<USER>/authorized_keys` file of the remote computer.


```sh
nano -l ~/.ssh/authorized_keys
```



## Default keys for SSH
---


When no key is specified with the `-i` flag,
`ssh-copy-id` copies the default public key from the user's SSH directory.
It follows this priority order:
1. **~/.ssh/id_rsa.pub** (if exists)
2. **~/.ssh/id_ecdsa.pub** (if exists)
3. **~/.ssh/id_ed25519.pub** (if exists)
4. **~/.ssh/id_dsa.pub** (if exists) – deprecated and less secure
5. Any other **id_*.pub** key found in **~/.ssh/**

> If no public key is found, `ssh-copy-id` will prompt you to generate one using `ssh-keygen`.