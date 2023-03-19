+++
title = "SOA Made Simple"
date = "2017-03-30T14:33:10-05:00"
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


Over the past two semesters, in the midst of learning algorithms, artificial intelligence search and probabilistic reasoning, low level C systems programming, and a whole lot more (10 classes, 8 CS, 2 STATS), I also got involved in an entirely unexpected open source venture: Arbor.

But first, let’s talk about Project Groot. Project Groot is a venture by UIUC’s Association for Computing Machinery (ACM) to rebuild our organization’s website. Now, there were several issues we had long identified and complained about with the old system:

Hard to maintain. There was a massive, monolithic codebase that was written by a few students who had long graduated, so nobody knew how to maintain it anymore.
Scalability issues. If we wanted to add a new feature, it required a lot of planning, debugging, and understanding the architecture
Outdated. There were a bunch of outdated features that were adding a lot of unnecessary complexity to our code.
Code. The code is written in one language / framework, and people have to either learn the language or not contribute at all (most students tended to choose the latter).
So, we knew we had all of these issues, many of which sound familiar to anyone who has worked in the industry on legacy code. Our proposal to fix these issues was to redesign an application around a service oriented architecture (SOA).

What does this mean?
The system breaks down into two groups: clients and services. Every service (or microservice) can be thought of as a completely separate application running on a separate process. To prevent client (and service) developers to manage an ever-increasing list of services and their APIs, these microservices communicate to clients (and potentially other services) through an API Gateway. This gateway exposes all the services as a unified RESTful API while managing application level security, inter-service communication, and all routing of requests.

This proves to be advantageous in several key areas:

Services became much more simple. They manage one part of the website, and just that.
Services can become replaceable and easier to recreate, update, or take out entirely.
The API Gateway inherently serves as a documented, structured way of letting code maintainers know what routes are available from each service.
This gateway became so important and central to our platform that we decided to open source it. Since it reminded us of branching out, we called it Arbor. Take a look at some sample code for registering a microservice in the framework:



Links
Link to the full whitepaper: Project Groot, Designed to Be Replaced.
Link to the Go microservice framework that was developed: arbor
