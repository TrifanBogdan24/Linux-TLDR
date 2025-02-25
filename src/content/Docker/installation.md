# Installing Docker


## Docker Engine
---
- It's the **core** container runtime that allows you to build, run, and manage containers.
- Includes the **Docker daemon**, REST API, and `CLI` tools.
- Runs on **Linux** by default, but can also be used on Windows and macOS (via WSL2 or a VM).
- Typically used on **servers** or **production environments** where you don’t need a graphical interface.



## Docker Desktop
---
- A **full package** that includes Docker Engine along with a `GUI` and other tools.
- Available for **Windows** and **macOS** (uses a lightweight VM to run Docker Engine).
- Includes additional features like **Kubernetes integration**, **Docker Compose**, and **Volume Management UI**.
- Primarily designed for **developers** working on their local machines.



## Install Docker Engine the easy way (link from [wg-easy repo](https://github.com/wg-easy/wg-easy))
---


```sh
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker $(whoami)
exit        # Close the shell, so modifications take effect
```