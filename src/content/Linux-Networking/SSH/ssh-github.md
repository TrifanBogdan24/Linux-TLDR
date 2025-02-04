# `SSH` for GitHub


<iframe width="500" height="300" src="https://www.youtube.com/embed/X40b9x9BFGo" title="🐱Generate a New SSH Key and Add it to your GitHub" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Push and Clone using SSH (instead of HTTPS)
---

Generate a SSH key pair:

```sh
ssh-keygen -t ed25519 -N "" -f ~/.ssh/github
```

Copy the **public key**:

```sh
cat ~/.ssh/github.pub
```

Add the **public key** in **Settings -> SSH and GPG keys -> New SSH key**.


Test the SSH connection

```sh
ssh -i ~/.ssh/github -T git@github.com
```

When you run the command for the first time, you will see something like:

```
> The authenticity of host 'github.com (IP ADDRESS)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> Are you sure you want to continue connecting (yes/no)?
```

If the above command runs successfully, it will prompt:

```
Hi <UserName>! You've successfully authenticated, but GitHub does not provide shell access.
```

SSH config entry for GitHub:

```sh
nano -l ~/.ssh/config
```

```config
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/github
  IdentitiesOnly yes
```


## Replacing remote origin to use SSH (insteado of HTTPS)
---


> **TL;DR**: `git remote set-url origin git@github.com:<UserName>/<RepoName>.git`

If the repository currenlty uses **HTTPS**, don't worry, we can change that.


```sh
$ git remote -v
origin  https://github.com/<UserName>/<RepoName>.git (fetch)
origin  https://github.com/<UserName>/<RepoName>.git (push
```


```sh
git remote set-url origin git@github.com:<UserName>/<RepoName>.git
```


```sh
$ git remote -v
origin  git@github.com:<UserName>/<RepoName>.git (fetch)
origin  git@github.com:<UserName>/<RepoName>.git (push
```

> NOTE: `<...>` are placeholders.