# SSH Agent

Sub-commands:
- `ssh-agent`
- `ssh-add`


## **TL;DR** | `ssh-agent`
---


Spawn an SSH Agent process.

An SSH Agent holds SSH keys decrypted in memory until removed or the process is killed.

See also ssh-add, which can add and manage keys held by an SSH Agent.

More information: <https://man.openbsd.org/ssh-agent>.

```sh
# Start an SSH Agent for the current shell:
eval $(ssh-agent)

# Kill the currently running agent:
ssh-agent -k
```



| Command |	Output Format | Portability |
| :---    | :--- | :--- |
| `eval $(ssh-agent)` | Depends on the shell | Less portable |
| `eval "$(ssh-agent -s)"` | Bourne shell compatible | More portable |




## **TL;DR** | `ssh-add`
---

Manage loaded SSH keys in the `ssh-agent`.

Ensure that `ssh-agent` is up and running for the keys to be loaded in it.

More information: <https://man.openbsd.org/ssh-add>.

```sh
# Add the default SSH keys in ~/.ssh to the ssh-agent:
ssh-add

# Add a specific key to the ssh-agent:
ssh-add path/to/private_key

# List fingerprints of currently loaded keys:
ssh-add -l

# Delete a key from the ssh-agent:
ssh-add -d path/to/private_key

# Delete all currently loaded keys from the ssh-agent:
ssh-add -D

# Add a key to the ssh-agent and the keychain:
ssh-add -K path/to/private_key
```


`ssh-add -L` is equivalent to `ssh-add -l`.


## Staring SSH Agent and adding all keys
---

> **TL;DR**.
> Start SSH Agent and load all `private keys` from the `~/.ssh/` directory using the following **oneliner**:
> ```sh
> eval "$(ssh-agent -s)" && ssh-add $(find ~/.ssh/ -type f -name "*.pub" | sed 's/\.pub$//')
> ```


When no other options are specified, `ssh-add` loads in memory
only the **default SSH keys** (`rsa`, `ed25519`, `dsa` ...).


```sh
student@vm-rl:~$ ls ~/.ssh/
authorized_keys  host1.pub        host2.pub        host3.pub        host4.pub        id_ed25519.pub   id_rsa.pub       
host1            host2            host3            host4            id_ed25519       id_rsa           
student@vm-rl:~$ ssh-add 
Identity added: /home/student/.ssh/id_rsa (student@vm-rl)
Identity added: /home/student/.ssh/id_ed25519 (student@vm-rl)
student@vm-rl:~$ ssh-add -L
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCZ2UMxyZGubkX7zd3w3Xr5AXwByYh/s3RL23+SMAvrPuxDv9a2ris3BGf7ZkN28lbNK3BSB53LIhqFhEn8qhpoBRHDHQ7CCOWCAAkcjiHnfpBA1oubQGVGHN5wpniRmbJxzXp69CBwvgSm2yans/19n1AHVFvnWJ6K/nF9NzeQTiydWZjNsVQ1t9IomFbJZUtNVNVjXn9XCFwBSmEIccLfZaw6x9mKwZT5ZasUFne88rSFjJFu/ozEXz19R29m60Ap70O1f68Uu10UKAS1WkwryRzoa4zof2997mvgxUKMAFxmKwpSeLPol/F7H/bdbNrItQ8sGYo5ujpiG5YtfbySyfGJ/cp2jxM5VhiIvbIpPqErucB0StV5bkOtVcvzIXl2LyjJI0Q92cea8J20bp2p1Vp3ZEHxUsOTPDllmUOqoWqqQujorklmiJYI+MppgD5rgkSzjMuKwnjUj/q8pQMYITploQmKNXrcFgruP4bXO3A45322Tve0tWPoBhlaa58= student@vm-rl
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKskdadKpwnemb7jnnOh4qdyUumO1jep7Qa79Age99MC student@vm-rl
```


To automatically add all SSH private keys, run these commands:




```sh
student@vm-rl:~$ ssh-agent -k
unset SSH_AUTH_SOCK;
unset SSH_AGENT_PID;
echo Agent pid 515 killed;
student@vm-rl:~$ eval "$(ssh-agent -s)"
Agent pid 524
student@vm-rl:~$ ssh-add $(find ~/.ssh/ -type f -name "*.pub" | sed 's/\.pub$//')
Identity added: /home/student/.ssh/host1 (student@vm-rl)
Identity added: /home/student/.ssh/host2 (student@vm-rl)
Identity added: /home/student/.ssh/host3 (student@vm-rl)
Identity added: /home/student/.ssh/host4 (student@vm-rl)
Identity added: /home/student/.ssh/id_ed25519 (student@vm-rl)
Identity added: /home/student/.ssh/id_rsa (student@vm-rl)
student@vm-rl:~$ ssh-add -L
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAID2t5Cx4H3fvrzjD7twAcge6jV87mtUmmItL8PHeQEkb student@vm-rl
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIFBSHgh4t/oYT6zy6WF1ODtcCcc7LGpvwAr052mK/mko student@vm-rl
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEIbMLWygMVf7lbu0uAnI/UXpWigxx4JGvC+W31XtujR student@vm-rl
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAPmUWeQYJzBL3aMwk5vK9neMgqhKMyVMZIGFA9Brdm5 student@vm-rl
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIKskdadKpwnemb7jnnOh4qdyUumO1jep7Qa79Age99MC student@vm-rl
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCZ2UMxyZGubkX7zd3w3Xr5AXwByYh/s3RL23+SMAvrPuxDv9a2ris3BGf7ZkN28lbNK3BSB53LIhqFhEn8qhpoBRHDHQ7CCOWCAAkcjiHnfpBA1oubQGVGHN5wpniRmbJxzXp69CBwvgSm2yans/19n1AHVFvnWJ6K/nF9NzeQTiydWZjNsVQ1t9IomFbJZUtNVNVjXn9XCFwBSmEIccLfZaw6x9mKwZT5ZasUFne88rSFjJFu/ozEXz19R29m60Ap70O1f68Uu10UKAS1WkwryRzoa4zof2997mvgxUKMAFxmKwpSeLPol/F7H/bdbNrItQ8sGYo5ujpiG5YtfbySyfGJ/cp2jxM5VhiIvbIpPqErucB0StV5bkOtVcvzIXl2LyjJI0Q92cea8J20bp2p1Vp3ZEHxUsOTPDllmUOqoWqqQujorklmiJYI+MppgD5rgkSzjMuKwnjUj/q8pQMYITploQmKNXrcFgruP4bXO3A45322Tve0tWPoBhlaa58= student@vm-rl
```

> ```sh
> ssh-add $(find ~/.ssh/ -type f -name "*.pub" | sed 's/\.pub$//')
> ```
> The **oneliner** was tested and works in **bash** and **zsh**.

