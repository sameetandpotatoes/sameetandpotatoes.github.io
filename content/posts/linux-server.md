+++
title = "A Mini Introduction to Linux Servers"
date = "2013-12-12T14:33:10-05:00"
author = "Sameet Sapra"
authorTwitter = "" #do not include @
cover = ""
tags = ["", ""]
keywords = ["", ""]
description = ""
showFullContent = false
readingTime = true
hideComments = false
color = "" #color from the theme settings
+++


Linux is a wonderful operating system, full of features for everyone to tinker with. With a Linux server, you are essentially expanding these features into your intranet (yes intranet), to wirelessly stream to every device in your home, to host web servers, and more. Here’s how I set mine up:

Download and install a Linux distro. I picked Ubuntu (12.04 at the time) for its ease of installation, but you can just as easily pick Fedora, Debian, or go for a pure command line approach with a distro such as Gentoo.

To access it from another computer, install ssh, and allow screen sharing. With these steps, you can now manage your server from another computer. All you need for the fastest server possible (besides SSD’s hooked up in Raid 0 of course) is an Ethernet connection from your server to your router.

On your router configuration page, choose a static IP Address. It’s extremely important to do this so that your router chooses the same IP Address every time your server turns on.

If you are using the Linux server for file sharing and remote downloading, you probably want to mount a drive and sharing it in your intranet. This part can be tricky if you have more than one physical hard drive in your system and you want to maximize space. In this case, you need to look into Logical Volume Manager (LVM). With this, I was able to “trick” Linux into thinking my two 250 GB hard drives were one 500 GB hard drive. I wanted to do this because I wanted to combine my total storage into one drive.

With your now maximized space, to share your network drive, you need to install Samba File Server. When installing Samba, make sure you specify that all users can read and write to the network drive without a password. In other words, unless you explicitly want a password on your network drive, you should allow anyone to add files to it.

If you want to be able to access your content from anywhere in the world, you need to set up an Apache web server (by installing and specifying your network drive as the root folder). Then, on your router’s configuration page, you need to open the port that the Apache web server is running on (80 for http; 443 for https). Be warned: you need to specify a password for the Apache web server, otherwise anyone from around the world can download your content if they have your public IP address.

Some tools you may want to consider for your new Linux server:

Air PlayIt Server: With the compatible iPad/iPhone app, your Linux server can “serve” those Apple products.
PS3MediaServer: Just as the name says, your PS3 can also recognize the Linux server and wirelessly stream to it.
Wake On Lan: With WOL enabled in your computer’s BIOS, an iPhone app, such as mWOL, can wake up your server from the touch of a button. Obviously, you need to be on the same network as the server. You can even set this up to be automated, so that your server wakes up at 9:00 AM every day, ready to stream.
And that’s it! This setup worked pretty well for me to remotely download and serve all sorts of content directly from the server.
