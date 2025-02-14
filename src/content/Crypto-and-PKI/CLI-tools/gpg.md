# `gpg`


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

If we want to encrypt data/files with the key, we must **manually grant encryption role**:

```sh
$ gpg --edit-key <key-ID>
gpg> addkey
gpg> save
```

Example:

```sh
blue@isc-vm:~$ gpg --list-keys
/home/blue/.gnupg/pubring.kbx
-----------------------------
pub   rsa4096 2025-02-14 [SC] [expires: 2025-02-28]
      3F02B56EAF1570792C194ABD0DB15707A553AA81
uid           [ultimate] blue-user <blue@cs.pub.ro>

blue@isc-vm:~$ gpg --edit-key 3F02B56EAF1570792C194ABD0DB15707A553AA81
gpg (GnuPG) 2.2.27; Copyright (C) 2021 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Secret key is available.

sec  rsa4096/0DB15707A553AA81
     created: 2025-02-14  expires: 2025-02-28  usage: SC  
     trust: ultimate      validity: ultimate
[ultimate] (1). blue-user <blue@cs.pub.ro>

gpg> addkey
Please select what kind of key you want:
   (3) DSA (sign only)
   (4) RSA (sign only)
   (5) Elgamal (encrypt only)
   (6) RSA (encrypt only)
  (14) Existing key from card
Your selection? 6
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (3072) 4096
Requested keysize is 4096 bits
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
Key is valid for? (0) 2w
Key expires at Fri 28 Feb 2025 01:37:39 PM EET
Is this correct? (y/N) y
Really create? (y/N) y
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.

sec  rsa4096/0DB15707A553AA81
     created: 2025-02-14  expires: 2025-02-28  usage: SC  
     trust: ultimate      validity: ultimate
ssb  rsa4096/0091BAA27E90895D
     created: 2025-02-14  expires: 2025-02-28  usage: E   
[ultimate] (1). blue-user <blue@cs.pub.ro>

gpg> save

```

> The **key ID** in the above examples is `3F02B56EAF1570792C194ABD0DB15707A553AA81`.


And verify again:


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
