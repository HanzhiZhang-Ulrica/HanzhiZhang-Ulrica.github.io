---
title: 'TACC Longstar6 Instruction'
date: 2025-03-04
permalink: /posts/2025/03/04/TACC_Longstar6_instruction/
tags:
  - tools

---

This is the quick start instruction for beginners on Texas Advanced Computing Center (TACC) Longstar6 High Performance Computing (HPC) Systems. For more details information, please refer to [the official website](https://tacc.utexas.edu/).

At first, you should have an account for TACC. [Log In or Create Account](https://tacc.utexas.edu/portal/login). 

Remember your **username** and **password**. Only when you have/are added to certain project, you have access to corresponding system. For this document, we use [Longstar6](https://tacc.utexas.edu/systems/lonestar6/) system.

## 0. Not the First Time Cheat Sheet

1. **Login:** `ssh <username>@ls6.tacc.utexas.edu`
2. **Go to work directory:** `cd $WORK`
3. **File Transfer:** Use `scp` or `rsync`
4. **Environment setup:** `source ~/.bashrc`
5. **Interactive Job Session:** `srun --partition=gpu-a100-dev --nodes=1 --time=00:30:00 --ntasks=1 --pty bash`

## 1. Access the System

The `ssh` command (SSH protocol) is the standard way to connect to Lonestar6 (**`ls6.tacc.utexas.edu`**). SSH also includes support for the file transfer utilities `scp` and `sftp`.

The Linux command line:

```shell
localhost$ ssh <username>@ls6.tacc.utexas.edu
```

The above command will rotate connections across all available login nodes, `login1-login3`, and route your connection to one of them. To connect to a specific login node, use its full domain name:

```shell
localhost$ ssh <username>@login2.ls6.tacc.utexas.edu
```

To connect with X11 support on Lonestar6 (usually required for applications with graphical user interfaces), use the `-X` or `-Y` switch:

```shell
localhost$ ssh -X <username>@ls6.tacc.utexas.edu
```

To report a connection problem, execute the `ssh` command with the `-vvv` option and include the verbose output when submitting a help ticket. **Do not run the `ssh-keygen` command on Lonestar6.**

**SSH Config Example:**

```shell
Host TACC
    HostName ls6.tacc.utexas.edu
    User <username>
```

When connecting, you'll be asked to enter your password and TACC Token Code.

```shell
To access the system:

1) If not using ssh-keys, please enter your TACC password at the password prompt
2) At the TACC Token prompt, enter your 6-digit code followed by <return>.

If you are facing issues logging in, please use our login wizard at
https://accounts.tacc.utexas.edu/login_support to troubleshoot.

(<username>@ls6.tacc.utexas.edu) Password: <your password>
(<username>@ls6.tacc.utexas.edu) TACC Token Code: <Duo Mobile Token>
```

## 2. Working Directory

Lonestar6's startup mechanisms define corresponding account-level environment variables `$HOME`, `$SCRATCH` and `$WORK` that store the paths to directories that you own on each of these file systems.

Your home directory `$HOME` do not have enough space, go to your account-specific working directory `$WORK` once you login.

```shell
$ cd $WORK
$ pwd
/work/<number>/<username>/ls6
```

| File System     | Quota                                        | Key Features                                                 |
| --------------- | -------------------------------------------- | ------------------------------------------------------------ |
| `$HOME`         | 10 GB                                        | 200,000 files **Not intended for parallel or high-intensity file operations.** NFS file system Backed up regularly. Overall capacity 7 TB Not purged. |
| `$WORK`         | 1 TB 3,000,000 files Across all TACC systems | **Not intended for high-intensity file operations or jobs involving very large files.** Lustre file system On the Global Shared File System that is mounted on most TACC systems. See Stockyard system description for more information. Defaults: 1 stripe, 1MB stripe size Not backed up. Not purged. |
| `$SCRATCH`      | none                                         | Overall capacity 8 PB Defaults: 4 targets, 512 KB chunk size Not backed up **Files are [subject to purge](https://docs.tacc.utexas.edu/hpc/lonestar6/#scratchpolicy) if access time\* is more than 10 days old.**[*](https://docs.tacc.utexas.edu/hpc/lonestar6/#sup1) |
| `/tmp` on nodes | 288 GB                                       | Data purged at the end of each job. Access is local to the node. Data in /tmp is not shared across nodes. |

## 3. File Transfer

You can transfer files between Lonestar6 and Linux-based systems using either [`scp`](http://linux.com/learn/intro-to-linux/2017/2/how-securely-transfer-files-between-servers-scp) or [`rsync`](http://linux.com/learn/get-know-rsync). Both `scp` and `rsync` are available in the Mac Terminal app. Windows SSH clients typically include `scp`-based file transfer capabilities.

**Using `scp`**

```shell
scp <local_file> <username>@ls6.tacc.utexas.edu:$WORK
```

**Using `rsync` (for large or multiple files)**

```shell
rsync -av <local_dir> <username>@ls6.tacc.utexas.edu:$WORK
```

For a more user-friendly experience, consider using an application like [Termius](https://termius.com/) or cloud storage platforms such as [GitHub](https://github.com/) or [Dropbox](https://www.dropbox.com/). For example

```shell
$ git clone <github repository link>
$ # Or
$ wget -O <file name> <dropbox link>
```

## 4. Environment Setup

Put all your customizations in `~/.bashrc`. Take mine as an example, anything that default in `$HOME`, change it to `$WORK` 

```shell
export PYTHONPATH="$WORK/python-packages:$PYTHONPATH"
export NLTK_DATA=$WORK/python-packages/nltk_data
export HF_HOME=$WORK/huggingface_cache/
export PATH=$WORK/python3.11/bin:$PATH
export PIP_CACHE_DIR=$WORK/.cache/pip
```

After making these changes, run `source ~/.bashrc` to apply them.

Take your time with this step to ensure your environment is set up correctly. If needed, consider using AI tools for assistance.

## 5. Running Jobs

Longstar6 uses the [**S**imple **L**inux **U**tility for **R**esource **M**anagement (Slurm)](https://slurm.schedmd.com/documentation.html) batch environment

| Queue Name       | Min/Max Nodes per Job (assoc'd cores)* | Max Job Duration | Max Nodes per User | Max Jobs per User | Charge Rate (per node-hour) |
| ---------------- | -------------------------------------- | ---------------- | ------------------ | ----------------- | --------------------------- |
| `development`    | 4 nodes (512 cores)                    | 2 hours          | 6                  | 1                 | 1 SU                        |
| `gpu-a100`       | 8 nodes (1024 cores)                   | 48 hours         | 12                 | 8                 | 4 SUs                       |
| `gpu-a100-dev`   | 2 nodes (256 cores)                    | 2 hours          | 2                  | 1                 | 4 SUs                       |
| `gpu-a100-small` | 1 node                                 | 48 hours         | 2                  | 2                 | 1.5 SUs                     |
| `gpu-h100`       | 1 node                                 | 48 hours         | 1                  | 1                 | 6 SUs                       |
| `large`          | 65/256 nodes (65536 cores)             | 48 hours         | 256                | 1                 | 1 SU                        |
| `normal`         | 1/64 nodes (8192 cores)                | 48 hours         | 75                 | 20                | 1 SU                        |
| `vm-small`       | 1/1 node (16 cores)                    | 48 hours         | 4                  | 4                 | 0.143 SU                    |

\* Access to the `large` queue is restricted. To request more nodes than are available in the normal queue, submit a consulting (help desk) ticket through the TACC User Portal. Include in your request reasonable evidence of your readiness to run under the conditions you're requesting. In most cases this should include your own strong or weak scaling results from Lonestar6.

** The `gpu-a100-small` and `vm-small` queues contain virtual nodes with fewer resources (cores) than the nodes in the other queues.

Copy and customize the following scripts to specify and refine your job's requirements.

- specify the maximum run time with the `-t` option.
- specify number of nodes needed with the `-N` option
- specify total number of MPI tasks with the `-n` option
- specify the project to be charged with the `-A` option.

An example for the Interactive Job Session:

```shell
$ srun --partition=gpu-a100-dev --nodes=1 --time=00:30:00 --ntasks=1 --pty bash
$ # Or simply
$ srun -p gpu-a100-dev -N 1 -t 00:30:00 -n 1 --pty bash
```

### Slurm Cheat Sheet

#### Basic Commands

| Command                       | Description                            |
| ----------------------------- | -------------------------------------- |
| `sinfo`                       | Show partitions and node status.       |
| `squeue`                      | List queued and running jobs.          |
| `squeue -u $USER`             | Show your jobs.                        |
| `sbatch script.sh`            | Submit a batch job.                    |
| `srun`                        | Run a command or script interactively. |
| `scancel JOBID`               | Cancel a job.                          |
| `sacct`                       | Show completed jobs.                   |
| `scontrol show job JOBID`     | Detailed job info.                     |
| `scontrol show node NODENAME` | Node details.                          |
| `seff JOBID`                  | Job efficiency details (if available). |

#### **Job Monitoring**

| Command                                               | Description            |
| ----------------------------------------------------- | ---------------------- |
| `squeue`                                              | List all jobs.         |
| `squeue -u $USER`                                     | Your jobs only.        |
| `scontrol show job JOBID`                             | Detailed job info.     |
| `sacct -u $USER`                                      | Completed job history. |
| `sacct -j JOBID --format=JobID,JobName,State,Elapsed` | Summary for a job.     |

####  **Resource Specifications**

| Option                   | Description                            |
| ------------------------ | -------------------------------------- |
| `--nodes=2`              | Request 2 nodes.                       |
| `--ntasks=4`             | Request 4 tasks (MPI).                 |
| `--cpus-per-task=2`      | Request 2 CPU cores per task (OpenMP). |
| `--gres=gpu:2`           | Request 2 GPUs per node.               |
| `--mem=16G`              | Request 16 GB RAM per node.            |
| `--time=02:00:00`        | Max runtime of 2 hours.                |
| `--partition=gpu-a100`   | Specify partition/queue.               |
| `--account=your_account` | Charge to a specific account.          |