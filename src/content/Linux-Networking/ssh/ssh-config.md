# SSH config file

Find more here <https://collectiveidea.com/blog/archives/2011/02/04/how-to-ssh-aliases/>.



```sh
nano -l ~/.ssh/config
```


This **configuration file** is used to create **SSH aliases**.



```config
Host example
  HostName example.com
  User exampleuser
```


Using the alias:

```sh
ssh example
```


Do you have a multi-server infrastructure that you log into consistently?


```config
Host project.web1
  HostName web1.project.com
  User webadmin

Host project.web2
  HostName web2.project.com
  User webadmin

Host project.db1
  HostName db1.project.com
  User webadmin

Host project.util1
  HostName util1.project.com
  User webadmin

Host project.stage
  HostName stage.project.com
  User webadmin
```



```sh
ssh project.web1
ssh project.db1
....


# you always have the option of overriding at the command line.
ssh [email protected]
```

You can also specify the host by IP directly:
```config
Host example
  HostName 127.0.0.1
  User exampleuser
```

And you can use different SSH keys:
```config
Host example2
  Hostname example.com
  User exampleuser
  IdentityFile ~/.ssh/another_ssh.identity
```




## My Personal SSH Config for [OpenStack](https://cloud.grid.pub.ro/)
---

```config
Host open_stack
	User student
	HostName <IP-VM>
	ProxyJump <moodle-username>@fep.grid.pub.ro 
```

