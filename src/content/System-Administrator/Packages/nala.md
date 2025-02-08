# `nala`

## **TL;DR**
---

Package management utility with better formatting.

Front-end for the python-apt API.

More information: <https://gitlab.com/volian/nala>.


```sh
# Install a package, or update it to the latest available version:
sudo nala install package

# Remove a package:
sudo nala remove package

# Remove a package and its configuration files:
nala purge package

# Search package names and descriptions using a word, regex (default) or glob:
nala search "pattern"

# Update the list of available packages and upgrade the system:
sudo nala upgrade

# Remove all unused packages and dependencies from your system:
sudo nala autoremove

# Fetch fast mirrors to improve download speeds:
sudo nala fetch

# Display the history of all transactions:
nala history
```



## Stop using APT
---


<iframe width=600px height="350px" aspect-ratio=16/9 src="https://www.youtube.com/embed/oroSkR4Nn_w" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>



## Install nala
---

> Check out this link: <https://gitlab.com/volian/nala/-/wikis/Installation>.

Nala is officially in the testing and sid repos.

```sh
sudo apt install nala
```


The following command will setup the repository and install Nala for you:

```sh
curl https://gitlab.com/volian/volian-archive/-/raw/main/install-nala.sh | bash
```

> note: Ubuntu 20.04, 22.04 and Debian Bullseye this script may fail. If it does run


```sh
sudo apt install -t nala nala
```





## Results for `nala`
---



Fetch fast mirrors to improve download speed


```sh
$ sudo nala fetch
```


**Result**:


<br>
<img alt="img" src="Images/nala/nala_fetch (in progress).png" height=auto width=auto>
<img alt="img" src="Images/nala/nala_fetch (completed).png" height=auto width=auto>
<br>



```sh
$ sudo nala install -y curl wget gcc
```


**Result**:

<br>
<img alt="img" src="Images/nala/nala_install_curl_wget_gcc%20(in%20progress).png" height=auto width=auto>
<img alt="img" src="Images/nala/nala_install_curl_wget_gcc%20(completed).png" height=auto width=auto>
<br>

Much better! Right?!






