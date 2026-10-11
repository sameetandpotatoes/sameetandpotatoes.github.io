---
title: "Power of POW"
pubDate: 2014-07-31
description: "Pow is a zero-config Rack server for OS X that serves local Rails apps from a simple symlink — no starting servers by hand — and can share your localhost with collaborators for free."
tags: ["rails", "development", "tools"]
---

Many developers have heard of services like forwardhq to share their localhost with collaborators or for mobile testing. Yet many of them don’t even know that Pow, a Rack server for OS X, allows you to do that for free. Setting it up is so simple, and you can just symlink your Rails directories to ~/.pow

For local development, you simply head to http://myapp.dev

This is good for testing apps locally, as you don’t even have to start the Rails server for your app. You simply head to the URL, and it just works. However, as Pow is a Rack server, it can host your app and share it, so you can also access it at: http://myapp.localipaddress.xip.io:20559

Why is this better? Well, you can also navigate to the above URL on your iPad, an iPhone Simulator, to test your app on mobile devices without pushing it up to Heroku. And it’s instant. Make a change in your Rails app and you can see the change straight away on your device.

Pow is awesome.
