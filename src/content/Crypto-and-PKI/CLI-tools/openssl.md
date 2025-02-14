# OpenSSL

> **SSL** = Secure Socket Layer

## Decrypting an (encrypted) file
---


The letter was encrypted with the following keys:

```sh
$ ls
letter.enc  private.pem  public.pem
```


In order to decrypt it:

```sh
openssl rsautl -decrypt -oaep -inkey private.pem -in letter.enc -out letter.txt
```

> **OAEP** = Optimal Asymmetric Encryption Padding

