---
title: 'Docker Setup Instruction'
date: 2024-02-23
permalink: /posts/2024/23/docker_setup_instruction/
tags:
  - tools
---

This guide provides instructions on installing the Docker engine on Ubuntu, alongside essential commands for frequent use. It also covers setting up environments for PyTorch and TensorFlow, optimizing GPU usage, and managing the export and import of containers. 

# 1. Install Docker Engine on Ubuntu

## 1.1 Prerequisites

### 1.1.1 OS requirements

To install Docker Engine, you need the 64-bit version of one of these Ubuntu versions:

- Ubuntu Lunar 23.04
- Ubuntu Kinetic 22.10
- Ubuntu Jammy 22.04 (LTS)
- Ubuntu Focal 20.04 (LTS)

Docker Engine for Ubuntu is compatible with x86_64 (or amd64), armhf, arm64, s390x, and ppc64le (ppc64el) architectures.

```shell
# check ubuntu version
lsb_release -a
```

```shell
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 22.04.2 LTS
Release:	    22.04
Codename:	    jammy
```

### 1.1.2 Uninstall conflicting packages

```shell
for pkg in docker.io docker-doc docker-compose docker-compose-v2 podman-docker containerd runc; do sudo apt-get remove $pkg; done
```

`apt-get` might report that you have none of these packages installed.

If the following results appear:

```shell
You might want to run 'apt --fix-broken install' to correct these.
The following packages have unmet dependencies:
 nvidia-dkms-535 : Depends: nvidia-kernel-common-535 (>= 535.104.05) but 535.86.10-0ubuntu1 is to be installed
 nvidia-driver-535 : Depends: libnvidia-gl-535 (= 535.104.05-0ubuntu0.22.04.4) but 535.86.10-0ubuntu1 is to be installed
                     Depends: nvidia-kernel-common-535 (>= 535.104.05) but 535.86.10-0ubuntu1 is to be installed
                     Recommends: libnvidia-compute-535:i386 (= 535.104.05-0ubuntu0.22.04.4)
                     Recommends: libnvidia-decode-535:i386 (= 535.104.05-0ubuntu0.22.04.4)
                     Recommends: libnvidia-encode-535:i386 (= 535.104.05-0ubuntu0.22.04.4)
                     Recommends: libnvidia-fbc1-535:i386 (= 535.104.05-0ubuntu0.22.04.4)
                     Recommends: libnvidia-gl-535:i386 (= 535.104.05-0ubuntu0.22.04.4)
E: Unmet dependencies. Try 'apt --fix-broken install' with no packages (or specify a solution).
```

Try:

```shell
# First
sudo apt update && sudo apt upgrade -y
# Second
sudo apt --fix-broken install
# Third
sudo apt autoremove
```

## 1.2 Installation

- Docker Engine comes bundled with [Docker Desktop for Linux](https://docs.docker.com/desktop/install/linux-install/). This is the easiest and quickest way to get started.
- Set up and install Docker Engine from **Docker's Apt repository**.

### 1.2.1 Docker's Apt repository

Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker repository. Afterward, you can install and update Docker from the repository.

1. Set up Docker's Apt repository.

```shell
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add the repository to Apt sources:
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
```

2. Install the Docker packages.

```shell
# Latest Version
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
# Specific Version
# List the available versions:
apt-cache madison docker-ce | awk '{ print $3 }'
# Select the desired version and install:
VERSION_STRING=5:24.0.0-1~ubuntu.22.04~jammy
sudo apt-get install docker-ce=$VERSION_STRING docker-ce-cli=$VERSION_STRING containerd.io docker-buildx-plugin docker-compose-plugin
```

3. Verify that the Docker Engine installation is successful by running the `hello-world` image.

```shell
sudo docker run hello-world
```

## 1.3 Upgrade and Uninstall

### 1.3.1 Upgrade Docker Engine

To upgrade Docker Engine, follow step 2 of the **installation instructions**, choosing the new version you want to install.

### 1.3.2 Uninstall Docker Engine

1. Uninstall the Docker Engine, CLI, containerd, and Docker Compose packages:

```shell
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin docker-ce-rootless-extras
```

2. Images, containers, volumes, or custom configuration files on your host aren't automatically removed. To delete all images, containers, and volumes:

```shell
sudo rm -rf /var/lib/docker
sudo rm -rf /var/lib/containerd
```

You have to delete any edited configuration files manually.

# 2 Fundamental Commands

- display the containers currently running:

```shell
docker ps
```

- display all the containers (even those not running anymore):

```shell
docker ps -a 
```

- display the images locally saved:

```shell
docker images
```

- remove a docker container:

```shell
docker stop container_name # if container is running
docker rm container_name
```

- remove all docker containers (not running anymore):

```shell
docker container prune
```

- remove an image:

```shell
docker rmi image_name
```

- remove all docker images (be very careful with this one!):

```shell
docker image prune -a
```

# 3 PyTorch on Docker

## 3.1 PyTorch Image

In Github, there are some repositories created by good developers. [PyTorch Docker image](https://github.com/anibali/docker-pytorch) is repository has many PyTorch images for most of the previous versions with compatible CUDA versions.

```shell
# docker pull image_name:image_tag
docker pull pytorch/pytorch:latest
docker pull pytorch/pytorch:2.1.0-cuda12.1-cudnn8-runtime
docker pull pytorch/pytorch:2.1.0-cuda12.1-cudnn8-devel
```

The latest image comes with the latest stable versions of PyTorch, CUDA and cuDNN. There are also other tags of the form `X-cuda-Y-cudnn-Z-runtime/devel`, where X is the pytorch version, Y is the CUDA version and Z is the cuDNN version. The images tagged with devel come preinstalled with various compiler configurations.

# 4 TensorFlow on Docker

TensorFlow provides [a number of images](https://hub.docker.com/r/tensorflow/tensorflow/tags/) depending on your use case such as latest, nightly and devel. Assuming you have Docker installed on your computer we can download these images using commands such as 

```shell
docker pull tensorflow/tensorflow 
docker pull tensorflow/tensorflow:latest-gpu
```

These commands will install the latest stable release and the latest GPU compatible release respectively. For more detailed instructions please refer to the [official documentation](https://www.tensorflow.org/install/docker).

# 5 Using GPU on PyTorch Image

## 5.1 Prerequisites

Create an environment where the host can use the GPU. To test the installation, run:

```shell
nvidia-smi
```

## 5.2 Installing Nvidia Container Toolkit

Docker containers share your host’s kernel but bring their own operating system and software packages. This means they lack the NVIDIA drivers used to interface with your GPU. Docker doesn’t even add GPUs to containers by default, so a plain Docker run won’t see your hardware at all.

To get your GPU to work, you’ll have to install the drivers within your image and then instruct Docker to add GPU devices to your containers at runtime.

You’ll add NVIDIA Container Toolkit to your machine to enable your docker container to use your GPUs. This integrates into Docker Engine to automatically configure your containers for GPU support.

Setup the package repository and the GPG key:

```shell
distribution=$(. /etc/os-release;echo  $ID$VERSION_ID)
curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add -  
curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list
```

Install the `nvidia-container-toolkit` package (and dependencies) after updating the package listing:

```shell
sudo apt-get update
sudo apt-get install -y nvidia-container-toolkit
```

Now, configure the Docker daemon to recognize the NVIDIA Container Runtime:

```shell
sudo nvidia-ctk runtime configure --runtime=docker
```

Restart the Docker daemon to complete the installation after setting the default runtime:

```shell
sudo systemctl restart docker
```

At this point, the NVIDIA Container Toolkit is up and running, you’re ready to test its operation.

## 5.3 Docker with GPU

Docker doesn’t provide your system’s GPUs by default, you need to create containers with the `--gpus` flag for your hardware to show up. The `nvidia/cuda` images are preconfigured with the CUDA binaries and GPU tools.

```shell
sudo docker run -t -i -d --gpus all pytorch/pytorch
```

`docker run` = `docker pull` + `docker create` + `docker start`

You'll get the CONTAINER ID like:

```shell
4056fed7496b7b88872f43f6087c7b76415eceff06f86a72f61f994b0357da63
```

Enter the container:

```shell
sudo docker exec -it 4056 /bin/bash # 4056 is the CONTAINER ID
```

To check if Docker can access your GPU, run the `nvidia-smi` command in your container.

```shell
nvidia-gpu
```

# 6 Docker Export and Import

If you want to save the entire image, including all its history and tags, then you should use the `docker save` and `docker load` commands. And if you just want to save the current state of a container, then you should use the `docker export` and `docker import` commands.

## 6.1 Docker Container Export and Import

This operation will package all the image layers and metadata into a tar file. You can then use the docker load command to import this tar file into any Docker environment.

```shell
sudo docker export <container ID> > mycontainer.tar
# sudo docker export e2ca7008de40 > hallu_container.tar
```

This approach is primarily used to share or migrate an entire image, including all versions, tags, and history.

### 6.1.2 Import and Use

Import as an image

```shell
sudo docker import mycontainer.tar <image name>
# sudo docker import hallu_container.tar hallu_backup
```

Create a container with the same command as original one

```shell
sudo docker run <image name> /bin/bash
# sudo docker run -t -i -d --gpus all hallu_backup:latest /bin/bash
```

## 6.2 Docker Image Export and Import

The docker export command exports the file system of a running container to a tar file. You can then use the docker import command to import this tar file as a new image.

```shell
sudo docker save -o <save path>/myimage.tar myimage:latest
```

```shell
sudo docker load -i <path>/myimage.tar
```

This approach is primarily used to share or migrate the current state of a container. This does not include the container's history or metadata, such as environment variables, so it is often used to take a snapshot of the container.

# References

1. [Install Docker Engine on Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
2. [Why use Docker containers for machine learning development?](https://aws.amazon.com/blogs/opensource/why-use-docker-containers-for-machine-learning-development/)
3. [Using Docker for Deep Learning projects](https://towardsdatascience.com/using-docker-for-deep-learning-projects-fa51d2c4f64c)
4. [PyTorch With Docker](https://medium.com/@zaher88abd/pytorch-with-docker-b791edd67850)
5. [pytorch/pytorch](https://hub.docker.com/r/pytorch/pytorch/tags)
6. [Setting Up TensorFlow And PyTorch Using GPU On Docker](https://wandb.ai/wandb_fc/tips/reports/Setting-Up-TensorFlow-And-PyTorch-Using-GPU-On-Docker--VmlldzoxNjU5Mzky)
7. [TensorFlow Docker](https://www.tensorflow.org/install/docker)
8. [How to Install PyTorch on the GPU with Docker](https://saturncloud.io/blog/how-to-install-pytorch-on-the-gpu-with-docker/)

