# `ssh-keygen`

## **TL;DR**
---


Generate SSH keys used for authentication, password-less logins, and other things.

More information: <https://man.openbsd.org/ssh-keygen>.



```sh
# Generate a key interactively:
ssh-keygen

# Generate an ed25519 key with 32 key derivation function rounds and save the key to a specific file:
ssh-keygen -t ed25519 -a 32 -f ~/.ssh/filename

# Generate an RSA 4096-bit key with email as a comment:
ssh-keygen -t rsa -b 4096 -C "comment|email"

# Remove the keys of a host from the known_hosts file (useful when a known host has a new key):
ssh-keygen -R remote_host

# Retrieve the fingerprint of a key in MD5 Hex:
ssh-keygen -l -E md5 -f ~/.ssh/filename

# Change the password of a key:
ssh-keygen -p -f ~/.ssh/filename

# Change the type of the key format (for example from OPENSSH format to PEM), the file will be rewritten in-place:
ssh-keygen -p -N "" -m PEM -f ~/.ssh/OpenSSH_private_key

# Retrieve public key from secret key:
ssh-keygen -y -f ~/.ssh/OpenSSH_private_key
```


## Options
---


| Option | Description |
| :---   | :--- |
| `-t type` | Specifies the type of key to create.<br>Exameples: `rsa`, `ed25519`, `dsa` ... |    
| `-N "passphrase"` | Protect the **private key** with a password |
| `-p` | Change the password of a **private key** (in **stdin**) |
| `-p -P old_passwd -N new_passwd` | Change the password of a **private key** |
| `-a rounds` | Num of KDF rounds used to protect the private key.<br>More rounds = better security; slower key generation. |
| `-f filename` | Specifies the filename of the **private key** file |
| `-b num_bits` | Specifies  the  number of bits in the key to create |
| `-C comment` | Places a comment at the **end** of the **public key** <br>(it overrides **user@hostname**) | 

> A *passphrase* is similar to a *password*

> **KDF** stadn for Key Derivation Function


## All in one go
---

Generating a **SSH key pair** programatically, without asking anything from the **stdin**.


```sh
ssh-keygen -t ed25519 -N "" -f ~/.ssh/path
```

...Or, using RSA:

```sh
ssh-keygen -t rsa -b 4096 -N "" -f ~/.ssh/path
```

> **-N** option is used to specify a **passphrase** (a *password*). It adds more security.