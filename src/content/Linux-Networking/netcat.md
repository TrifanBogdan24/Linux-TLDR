# `netcat` (a.k.a `nc`)


## **TL;DR**

Redirect I/O into a network stream through this versatile tool.

More information: <https://manned.org/nc>.


```sh
# Start a listener on the specified TCP port and send a file into it:
nc -l -p port < filename

# Connect to a target listener on the specified port and receive a file from it:
nc host port > received_filename

# Scan the open TCP ports of a specified host:
nc -v -z -w timeout_in_seconds host start_port-end_port

# Start a listener on the specified TCP port and provide your local shell access to the connected party (this is dangerous and can be abused):
nc -l -p port -e shell_executable

# Connect to a target listener and provide your local shell access to the remote party (this is dangerous and can be abused):
nc host port -e shell_executable

# Act as a proxy and forward data from a local TCP port to the given remote host:
nc -l -p local_port | nc host remote_port

# Send an HTTP GET request:
echo -e "GET / HTTP/1.1\nHost: host\n\n" | nc host 80
```



## File Transfer


> Source from: <https://www.youtube.com/shorts/1j17UBGqSog?feature=share>.

<iframe width=600px height="350px" aspect-ratio=16/9 src="https://www.youtube.com/embed/1j17UBGqSog" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



Firstly, we need to run this on the **receiver**:

```sh
netcat -l 1234 > SECRETS.txt
```

Then the **sender** will type:

```sh
cat SECRETS.txt | netcat <IP-Receiver> 1234 -q 0
```

The **-q 0** flag closes the connection when the transfer if complete.


Also, don't forget to verify the **hashes** of the files, using a CLI tool loke `sha512sum`.

> During a network file transfer, `netcat` doesn't perform **integrity check**.
> There is the *small chance* that the file was not transfered correctly.
> It is a good practice to calculate a **checksum**.


```sh
# Both on sender and receiver
shat512sum SECRETS.txt
```


## Options


| Flag | Example Command              | Description                            |
| :--- | :---                         | :---                                   |
| `-h` | `nc -h`                      | Help                                   |
| `-z` | `nc -z 192.168.1.9 1-100`    | Port scan for a host or IP address     |
| `-v` | `nc -zv 192.168.1.9 1-100`   | Provide verbose output                 |
| `-n` | `nc -zn 192.168.1.9 1-100`   | Fast scan by disabling DNS resolution  |
| `-l` | `nc -lp 8000`                | TCP Listen mode (for inbound connects) |
| `-w` | `nc -w 180 192.168.1.9 8000` | Define timeout value                   |
| `-k` | `nc -kl 8000`                | Continue listening after disconnection |
| `-u` | `nc -u 192.168.1.9 8000`     | Use UDP instead of TCP                 |
| `-q` | `nc -q 1 192.168.1.9 8000`   | Client stay up after EOF               |
| `-4` | `nc -4 -l 8000`              | IPv4 only                              |
| `-6` | `nc -6 -l 8000`              | IPv6 only                              |
