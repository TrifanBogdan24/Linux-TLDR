# `gpg`

Table of Conents:

- [`gpg`](#gpg)
  - [Installation](#installation)
  - [**TL;DR**](#tldr)
  - [List public keys](#list-public-keys)
  - [List secret keys](#list-secret-keys)
  - [Exporting GPG keys](#exporting-gpg-keys)
    - [Export public key](#export-public-key)
    - [Export private key](#export-private-key)
  - [Import a public key](#import-a-public-key)
  - [Sign a public key](#sign-a-public-key)
  - [Delete GPG keys](#delete-gpg-keys)
  - [Edit a key](#edit-a-key)
  - [Grant **encryption** capabilities to a **key-pair**](#grant-encryption-capabilities-to-a-key-pair)
  - [Encrypt a file with GPG](#encrypt-a-file-with-gpg)
  - [Decrypt a file with GPG](#decrypt-a-file-with-gpg)

## Installation
---


Ob Ubuntu/Debian:
```sh
sudo apt update && sudo apt -y install gnupg rng-tools
```


> `RNG` is a service that adds **entropy** during key generation with GPG.

Verify RNG to be **active**:

```sh
sudo systemctl status rng-tools
```


## **TL;DR**
---

GNU Privacy Guard.

See gpg2 for GNU Privacy Guard 2. Most operating systems symlink gpg to gpg2.

More information: <https://gnupg.org>.

```sh
# Create a GPG public and private key interactively:
gpg --full-generate-key

# Sign doc.txt without encryption (writes output to doc.txt.asc):
gpg --clearsign doc.txt

# Encrypt and sign doc.txt for alice@example.com and bob@example.com (output to doc.txt.gpg):
gpg --encrypt --sign --recipient alice@example.com --recipient bob@example.com doc.txt

# Encrypt doc.txt with only a passphrase (output to doc.txt.gpg):
gpg --symmetric doc.txt

# Decrypt doc.txt.gpg (output to stdout):
gpg --decrypt doc.txt.gpg

# Import a public key:
gpg --import public.gpg

# Export public key for alice@example.com (output to stdout):
gpg --export --armor alice@example.com

# Export private key for alice@example.com (output to stdout):
gpg --export-secret-keys --armor alice@example.com
```


## List public keys
---


> ```sh
> gpg --list-keys
> ```

```sh
green@isc-vm:~$ gpg --list-keys
/home/green/.gnupg/pubring.kbx
------------------------------
pub   rsa4096 2025-02-14 [SC] [expires: 2025-02-28]
      136E3F0C4558CE824270B63FAE8FA41610D6234C
uid           [ultimate] green <green@cs.pub.ro>

pub   rsa4096 2025-02-14 [SC] [expires: 2025-02-28]
      5CF475123632668B9F639813D13A27F88794CC12
uid           [ unknown] reduser <red@cs.pub.ro>
```

Let's look at the first key and explain the format:
- **pub**: public key
- `136E3F0C4558CE824270B63FAE8FA41610D6234C`: is the **fingerprint** (key ID)
- `[SC]`: key capabilities (`S` - **signing**, `C` - **certification**)
- **uid**: user associated with the key, including trust level and email
  - `[ultimate]` and `[unkown]` are **trust levels** 


To list only a specific key:

```sh
gpg --list-key <keyID|mail>   
```


## List secret keys
---


> ```sh
> gpg --list-secret-keys
> ```

```sh
green@isc-vm:~$ gpg --list-secret-keys
/home/green/.gnupg/pubring.kbx
------------------------------
sec   rsa4096 2025-02-14 [SC] [expires: 2025-02-28]
      136E3F0C4558CE824270B63FAE8FA41610D6234C
uid           [ultimate] green <green@cs.pub.ro>
```

> In this example, the **key ID** is `136E3F0C4558CE824270B63FAE8FA41610D6234C`.


To list only a specific key:

```sh
gpg --list-secret <keyID|mail>   
```




## Exporting GPG keys
---


| Option | Description |
| :---: | :--- |
| `--export` | Exports the **public key** |
| `--export-secret-key` | Exports the **secret key** |
| `--armor` | Ensures the output is **ASCII-armored**<br>(i.e., Base64-encoded text rather than binary) |


> `.asc` file extension stands for **"ASCII armored"**

### Export public key
---

- To **stdout**:
```sh
gpg --export --armor <keyID|mail>
```


- To a **file**:
```sh
gpg --export --armor <keyID|mail> > /path/to/exported-public-key.asc
```



The `public key` looks like:
```
-----BEGIN PGP PUBLIC KEY BLOCK-----

....

-----END PGP PUBLIC KEY BLOCK-----
```


### Export private key
---

- To **stdout**:
```sh
gpg --export-secret-key --armor <keyID|mail>
```


- To a **file**:
```sh
gpg --export-secret-key --armor <keyID|mail> > /path/to/exported-private-key.asc
```

The `private key` looks like:
```
-----BEGIN PGP PRIVATE KEY BLOCK-----

....


-----END PGP PRIVATE KEY BLOCK-----
```




## Import a public key
---


```sh
gpg --import /path/to/imported-public-key.asc
```

> After importing the key you should list it and double check that it was stored in the public ring.



## Sign a public key
---

> Look for the `--sign-key` option in the [manual](https://www.gnupg.org/documentation/manuals/gnupg24/gpg.1.html).

```sh
gpg --sign-key <keyID|mail>
```



## Delete GPG keys
---


```sh
gpg --delete-key <keyID|mail>             # Deletes only public key
gpg --delete-private-key <keyID|mail>     # Deletes only private key
gpg --delete-keys <keyID|mail>            # Deletes both public and private key
```

| Option                 | Description |
| :---                   | :--- |
| `--delete-private-key` | Deletes only the **private key** |
| `--delete-key`         | Deletes only the **public key**<br>Throws an error if the private key still exists |
| `--delete-keys`        | Deletes both **private and public keys** (simultanously) |



## Edit a key
---

```sh
gpg --edit-key <mail>
# or
gpg --edit-key <key-ID>
```



## Grant **encryption** capabilities to a **key-pair**
---

When creating a key-pair with `gpg --list-keys`,
by default, it will have `[SC]` (**signing** and **certification**) only.


> Changing the **roles** of the `public key` also involves modifying the `private key` as well 🙂.<br>

If we want to encrypt data/files with the key, we must **manually grant encryption role**:

```sh
$ gpg --edit-key <key-ID|mail>
gpg> addkey    # Choose RSA (encrypt only)
gpg> save
```



And verify again:

> The **key ID** in the below example is `3F02B56EAF1570792C194ABD0DB15707A553AA81`.


```sh
blue@isc-vm:~$ gpg --list-keys
/home/blue/.gnupg/pubring.kbx
-----------------------------
pub   rsa4096 2025-02-14 [SC] [expires: 2025-02-28]
      3F02B56EAF1570792C194ABD0DB15707A553AA81
uid           [ultimate] blue-user <blue@cs.pub.ro>
sub   rsa4096 2025-02-14 [E] [expires: 2025-02-28]
```

> `[E]` stands for **encryption role**.


## Encrypt a file with GPG
---

```sh
gpg --encrypt --recipient <keyID|mail> letter.txt
```

> ⚠️ Redirection doesn't work.

> ⚠️ In this case, `letter.txt.gpg` will be automatically created.


## Decrypt a file with GPG
---


```sh
gpg --decrypt secret.txt.gpg
```

> ⚠️ Redirection doesn't work.

> ⚠️ It will print the decrypted text to `stdout`, as long as details of the encryption key.