# docker image

## **TL;DR**
---

Manage Docker images.

See also: docker build, docker import, and docker pull.

More information: <https://docs.docker.com/reference/cli/docker/image/>.

```sh
# List local Docker images:
docker image ls

# Delete unused local Docker images:
docker image prune

# Delete all unused images (not just those without a tag):
docker image prune --all

# Show the history of a local Docker image:
docker image history <image>
```


## Image interaction
---


```sh
docker image pull <IMAGE>.      # downloads an image to the local cache
docker build -t <TAG> .         # builds an image from a Dockerfile located in the current folder

docker image ls                 # lists the images in the local cache
docker images                   # lists the images in the local cache

docker image rm <IMAGE>         # deletes an image from the local cache
docker rmi <IMAGE>              # deletes an image from the local cache

docker image inspect <IMAGE>    # shows information about an image
```