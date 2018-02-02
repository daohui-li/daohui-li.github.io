---
layout:     post
title:      "Virtual Box in Windows PC"
date:       2018-01-23
author:     "Daohui Li"
header-img: "img/study.jpg"
---

<h1 style="text-decoration:underline;">Table of Content</h1>
* TOC
{: toc}
<hr/>

# Introduction 

[VirtualBox](https://www.virtualbox.org/) is a virtualization product developed and maintained by Oracle. It is a type 2 hypervisor to running guest OS in a host machine (type 1 hypervisor, such as VMWare, runs guest OS directly on the hardware, and thus is also called bare metal hypervisor). The advantage of using _virtualBox_ is that in addition to the host machine, one can run multiple guests boxes simultaneously. 

# Install and Setup VirtualBox

The host box is a laptop which runs 64-bit Windows 10 Pro OS with i5-3210M CPU, 8GB RAM and 240 GB SSD hard disk. The laptop's BIOS must have _Intel Virtualization_ feature must be enabled, otherwise, 64-bit OS images cannot be deployed in _VirtualBox_.

The _VirtualBox_ is downloaded from [Oracle site](https://www.virtualbox.org/wiki/Downloads), and deployed on the PC. The default deployment location is C:\Program Files\Oracle\VirtualBox. The standalone GUI application is VirtualBox.exe. 

# Use VirtualBox

As the host in a Windows 10 and the Linux OS does not require licenses, the guests are all running in Linux OS. Two approaches have been used in installing guest boxes: installing Linux OS based on distribution images in ISO format, or simply importing prepackaged VM images in OVF format. 

## Installing Linux OS based on the distribution images

Three Linux OS distributions were installed:

| Name | Download site | Comments |
| Ubuntu Server | https://www.ubuntu.com/download/server | a distribution which has larger user base and supported by Canonical Ltd |
| CentOS | https://www.centos.org/download/ | The distribution closely mirrors RedHat, which is a commercial product packaged and supported by RedHat |
| Arch Linux | https://www.archlinux.org/download/ | Simple and lightweight, but installation and configuration are more involved |

Because of limited hard drive size and because the Linux is accessed via _Putty_, desktop component is not installed. The installations of the three distriutions were straightforward by 

1. launch _VirtualBox_ and click the _New_ button to launch _Create Virtual Machine_ dialog box. The _Export Mode_ is used so that attributes can be explicitly specified (instead of using values chosen by _VirtualBox_):
| Attribute | Value | Comment |
| Memory | 3072 MB | Allocating large enough memory to enhance the performance |
| Storage | 24 GB | Samba server is enabled so that the host machine's memory can be used if needed; also specify the corresponding ISO file |
| Network | NAT | A separate network is later attached in Adapter 2 for communication between Guest boxes and Host (see below). *Note*: if the network is IPv4 based network, _Bridge Adapter_ will be good choice; _Bridge Adapter_ does not handle IPv6 well. |
2. start the newly created guest machine and follow the installation instructions (for both _Ubuntu_ and _CentOs_; _Arch Linux_'s installation procedure is listed in the appendix)
3. shutdown the guest machine and remove the IOS file (by clicking the file under Optical Drive) to complete the installation

## Importing Prepacked VM images

When a virtual machine requires multiple components required to be installed and configured, it will be more convenient to download the prepacked VM image and import the image to create the desired virtual machine. For example, instead of installing and configuring _Hadoop_ and related components, which may take 1 day or more accordingly to literature, the VM image was downloaded from [Cloudera's Quick Start](https://www.cloudera.com/downloads/quickstart_vms/5-12.html) and a guest machine was successfully created based on the image. 

# Configuration of Guest Box (TODO)

## Networking

When the network is *not* IPv4 based, guest machines cannot communicate with one another or with host when the network uses _Bridged Adapter_. The problem seems related to the [issue](https://www.virtualbox.org/ticket/14212) that the adapter cannot handle NS packets. To *work around* this issue, a private network was created using _VirtualBox_. The private network is defined as _192.168.100.0/24_. The value is chosen so that it will be less likely conflicting with other local or private networks. The host machine's IP is _192.168.100.1_.

The network is added to each guest machine as the second adapter (with the first adapter being NAT). Each guest machine will have another external network interface (total 3, including loopback network) as seen in the output of _ip link list_, and needs configuration to enable the new interface:

- Arch Linux:
 1. copy /etc/netctl/examples/ethernet-static to /etc/netctl/<interface-name>, while _<interface-name>_ is the name of the new interface, e.g., _enp0s8_. The copied file is updated with _Address_ specified as the fixed address in the new network, e.g., _192.168.100.101_.
 2. start the network interface: _netctl start <interface-name>_
 3. allow the network interface enabled at boot up: _netctl enable <interface-name>_

# Appendix: Installing Arch-Linux

Below is the procedure of installing Arch Linux OS:
* fdisk -l  # to list disks, shall have two (use dos disk label)
* cfdisk /dev/sda  # /dev/sda is the one with HD size
* Choose dos as label type (gpt, if harddrive size > 2TB)
* Two (primary) partitions /dev/sda1 #(500MB), /dev/sda2 (bootable)
* Write to HD (for both partitions)
* mkfs.ext4 /dev/sda2  # create file system
* mount /dev/sda2 /mnt # mount /dev/sda2
* mkswap /dev/sda1  # create swap
* swapon /dev/sda1  # to enable swap
* pacstrap /mnt base base-devel  # download and installing base dev package 
* arch-chroot /mnt  # change root to /mnt
* passwd  # 
* vi /etc/locale.gen
 * Uncomment en_US entries (2)
* locale-gen  # generate locale
* ln -s /usr/share/zoneinfo/US/CentraL /etc/localtime # setup timezone
* echo arch > /etc/hostname # setup hostname
* pacman -S grub-bios  # fetch grub-bios, may need run pacman -Sy prior
* grub-install /dev/sda  # notice /dev/sda
* mkinitcpio -p linux  # create an initial ramdisk
* grub-mkconfig -o /boot/grub/grub.cfg  #
* exit  # out of chroot
* genfstab /mnt >> /mnt/etc/fstab # record mount point to fstab
* umount /mnt # unmount /mnt





