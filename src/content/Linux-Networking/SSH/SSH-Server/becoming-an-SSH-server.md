# How to become an SSH Server


For becoming a **SSH server**, we need to have `openssh-server` CLI tool installed.

| CLI Tool | Description |
| :---: | :--- |
| `openssh-server` | Is used to accept SSH connections |
| `openssh-client` | Is used to make SSH connection (when running `ssh` commands) |

We can that by running the following command:
```sh
dpkg -l | grep openssh-server
```

**If not**, it can be installed by:
```sh
sudo apt update && sudo apt install -y openssh-server
```

> Use the package manager of your OS.

It will automatically create configuration files like `etc/ssh/sshd_config`.

