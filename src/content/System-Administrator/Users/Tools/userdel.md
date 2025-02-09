# `userdel`

## **TL;DR**
---

Remove a user account or remove a user from a group.

More information: <https://manned.org/userdel>.


```sh
# Remove a user:
sudo userdel username

# Remove a user in other root directory:
sudo userdel -R|--root path/to/other/root username

# Remove a user along with the home directory and mail spool:
sudo userdel -r|--remove username
```
