# Local Port Forwarding

> Seach for **`-L` flag** in the SSH manual page.


- **-L [bind_address:]port:host:hostport**
- **-L [bind_address:]port:remote_socket**
- **-L local_socket:host:hostport**
- **-L local_socket:remote_socket**


## How to SSH Tunnel (simple example)
---

<iframe width="750px" height="425px" src="https://www.youtube.com/embed/x1yQF1789cE" title="How to SSH Tunnel (simple example)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



## Local Port Forwading for [OpenStack](https://cloud.grid.pub.ro/project/)
---



Let's say that I created in OpenStack a VM that hosts a website.
The problem is that the VM does not provide a graphical interface, it's just the terminal.


Using **(local) port forwarding**, I can tunnnel the traffic coming from a port on the remote VM
through a (local) port on my local machine.

Just run one of the below commands (they are eqivalent):


```sh
ssh -J <moodle-username>@fep.grid.pub.ro -L localhost:<port-local>:<IP-VM>:<port-VM> -T -N student@<IP-VM> 
ssh -J <moodle-username>@fep.grid.pub.ro -L <port-local>:<IP-VM>:<port-VM> -T -N student@<IP-VM> 

ssh -J <moodle-username>@fep.grid.pub.ro -L localhost:<port-local>:localhost:<port-VM> -T -N student@<IP-VM> 
ssh -J <moodle-username>@fep.grid.pub.ro -L <port-local>:localhost:<port-VM> -T -N student@<IP-VM> 
```

> In the port-binding part, the IP of the VM can be replaced wtih ***localhost***.





If the process running at that port on the remote station is a website,
I can see it in my own **browser**, at the folloing URL: `http://localhost:<port-local>`
(just type `localhost:<port-local>` in the browser).