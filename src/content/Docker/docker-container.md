# docker container

## **TL;DR**
---

Manage Docker containers.

More information: <https://docs.docker.com/reference/cli/docker/container/>.


```sh
# List currently running Docker containers:
docker container ls

# Start one or more stopped containers:
docker container start <container1_name> <container2_name>

# Kill one or more running containers:
docker container kill <container_name>

# Stop one or more running containers:
docker container stop <container_name>

# Pause all processes within one or more containers:
docker container pause <container_name>

# Display detailed information on one or more containers:
docker container inspect <container_name>

# Export a container's filesystem as a tar archive:
docker container export <container_name>

# Create a new image from a container's changes:
docker container commit <container_name>
```



## Container interaction
---


```sh
docker container run <IMAGE> [COMMAND]    # runs a container and optionally sends it a starting command
docker container run -it <IMAGE>          # runs a container in interactive mode
docker container run -d <IMAGE>           # runs a container in the background (as a daemon)

docker exec -it <IMAGE> <COMMAND>         # starts a terminal in a running container and executes a command

docker container ls                       # lists all running containers
docker container ls -a                    # lists all containers that were run or are running
docker container inspect <ID>             # shows information about a container

docker attach <ID>                        # attaches to a container
docker stop <ID>                          # stops a container
docker restart <ID>                       # restarts a container
docker rm <ID>                            # deletes a container

docker ps                                 # lists running containers
docker logs <ID>                          # shows logs from a container
docker top <ID>                           # shows the processes running in a container
```

> The difference between the `exec` and `attach` commands (which might appear similar)
> is that `attach` associates a terminal to a container, which means that,
> when we exit that terminal, we also exit the container.
> This is not the case for the `exec` command.