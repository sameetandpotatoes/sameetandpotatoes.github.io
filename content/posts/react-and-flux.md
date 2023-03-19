+++
title = "React + Flux + Backbone = Fluxbone!"
date = "2015-07-09T14:33:10-05:00"
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

This summer I’ve been interning at SimpleRelevance as a front end engineer. SimpleRelevance is a recommendation engine that uses machine learning and predictive analytics to enhance the digital marketing of other companies.

Aside from mobile responsiveness, snappy AJAX forms, and some WordPress database migrations, one of my bigger projects has been rebuilding the website dashboard that presents key data to clients regarding how SimpleRelevance’s personalized marketing is generating more revenue and customer activity for clients. You can print and download graphs and charts, search through users and view their recommended items, and filter items by their attributes.

The original dashboard was written in Backbone.JS, a popular JavaScript framework, but it took only one look at the code before I knew that I had to rewrite it. There was reused code everywhere, and comments in almost every controller warning, and even apologizing, to the reader about the many “code hacks”. And frankly, it was slow.

I was encouraged to look at React.JS instead, a JavaScript library specialized for user interfaces. React keeps track of two DOMs. Whenever it has to render the view, it compares changes between the two DOMs and only renders the changes from the virtual to the shadow DOM. In other words, React’s speed really shines when the website constantly updates the DOM, because it’s much faster than other methods that rerender the entire view. React is great for reusing code, and this works best when the app can be organized in a tree layout, with children as descendent React classes.

But wait, React only functions as the V in MVC. We still need Backbone for the models and collections. But with React, we can implement Backbone more effectively.

Part of the issue before was that data was mutating everywhere, and there were “little hacks” in place as part of laziness to write more code. React JS has its own solution. React JS is coupled with Flux, an architecture that emphasizes unidirectional data flow. Instead of models, views, and controllers, Flux has actions, dispatchers, stores, and views. Actions are triggered by interactions with the view. Actions invoke a dispatcher, which acts as a central hub that broadcasts payloads to register callbacks. Stores handle the changes in data and the actions and updating the store’s state. The store emits a change event so that React knows it has to re render the view.

Wait, so where does Backbone come in? Well, in integrating React and Backbone, the Backbone collection becomes the Flux store. In other words, the state of a component in React becomes the Backbone collection for that component.

Pretty cool, huh?
