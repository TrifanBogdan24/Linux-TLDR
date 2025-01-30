# `scp` (Secure Copy)


## **TL;DR**
---


```sh
# Copy a local file to a remote host:
scp path/to/local_file remote_host:path/to/remote_file

# Use a specific port when connecting to the remote host:
scp -P port path/to/local_file remote_host:path/to/remote_file

# Copy a file from a remote host to a local directory:
scp remote_host:path/to/remote_file path/to/local_directory

# Recursively copy the contents of a directory from a remote host to a local directory:
scp -r remote_host:path/to/remote_directory path/to/local_directory

# Copy a file between two remote hosts transferring through the local host:
scp -3 host1:path/to/remote_file host2:path/to/remote_directory

# Use a specific username when connecting to the remote host:
scp path/to/local_file remote_username@remote_host:path/to/remote_directory

# Use a specific SSH private key for authentication with the remote host:
scp -i ~/.ssh/private_key path/to/local_file remote_host:path/to/remote_file

# Use a specific proxy when connecting to the remote host:
scp -J proxy_username@proxy_host path/to/local_file remote_host:path/to/remote_file
```


## Options
---


| Option         |   Description                         |
| :---           |  :---                                 |
| `scp -r`	     |  Recursively copy entire directories  |
| `scp -C`	     |  Compresses data                      |
| `scp -v`	     |  Prints verbose info                  |
| `scp -P 8080`	 |  Uses a specific Port                 |
| `scp -B`	     |  Batch mode (*Prevents password*)     |
| `scp -p`	     |  Preserves times and modes            |


## SSH for [OpenStack](https://cloud.grid.pub.ro/)
---


**Upload** a file on OpenStack:

```sh
scp -J <moodle-username>@fep.grid.pub.ro <PATH_LOCAL_FILE> student@<IP-VM>:<PATH_REMOTE_DIR>
```


**Download** a file from OpenStack:


```sh
scp -J <moodle-username>@fep.grid.pub.ro student@<IP-VM>:<PATH_REMOTE_FILE> <PATH_LOCAL_FILE>
```