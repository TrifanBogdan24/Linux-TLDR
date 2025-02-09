# Change user's default shell


## STEP 1: List available shells
---


```sh
$ cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/usr/bin/sh
/bin/bash
/usr/bin/bash
/bin/rbash
/usr/bin/rbash
/usr/bin/dash
/bin/zsh
/usr/bin/zsh
/usr/bin/tmux
```



## STEP 2: Actually change default shell
---

- Method 1: using `usermod` utility

```sh
sudo usermod --shell /bin/bash <username>
```


- Method 2: using `chsh` utility
  - > This method also modifies the `/etc/passwd` file 😊

```sh
sudo chsh -s /bin/bash <username>
```


- Method 2: modify the `/etc/passwd` file (but be careful)

```sh
sudo nano -l /etc/passwd
```


## STEP 3: **logout**
---

> **logout**/**exit** the shell, and next time you open a new shell,
> you should see the changes applied.

```sh
logout
```


```sh
exit
```


## STEP 4: Verify
---


Run the following commands:

```sh
$ echo $SHELL
/bin/zsh
```


or: 

```sh
$ grep "$USER" /etc/passwd
student:x:1000:1000:student:/home/student:/bin/zsh
```

or:

```sh
$ ps -p $$
    PID TTY          TIME CMD
  16256 pts/0    00:00:00 zsh
```