---
layout: ../../layouts/MarkdownPostLayout.astro
title: Dev Log August 2024
author: Brendan Murphy
description: "What I built this month"
image:
  url: "/Devlog August 2024.png"
  alt: "Devlog Agust 2024"
pubDate: 2024-08-31
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
---

BIG month for development on my end, and I’ve been making some great progress. The highlights would be the new image flow, trending data, user activity log, and some small cleanups.

[Check the diff](https://github.com/bmurf17/down-the-hall/pull/3)

## Book Tracker Project

This month I had a nice moment of panic. I opened the site, and not a single image was loading. I hadn't made any changes to how images were loaded or anything, but when I looked, I was now getting unauthorized errors when going to the image URLs. It turns out that the service I was using had changed the way they were serving images. The service [Hardcover](https://hardcover.app) needed to change the way they handled images because they were attacked by some service making millions of requests, which was costing them a good chunk of money. This forced me to revisit how I was loading images on my site. First, I needed to fix the issue of hotlinking images (I didn't know what hotlinking was, but I learned I shouldn’t be doing it). Then I had to adjust how I was retrieving the image data from Hardcover.

To get rid of the need for hotlinking, I figured out that the best solution would be to store the images in a storage system that I control. I considered a couple of options but ultimately ended up using Firebase for image storage. I've used Firebase a handful of times and again wanted to go with something that has a hobby/free tier.

Next, with the problem of retrieving these images, I was able to handle the upload to Firebase all in one new(ish) function. Now, wherever there is a need for an image, I first check my Firebase storage, and if there is no image, I reach out to Hardcover, grab the image, and save its data to Firebase.

Side note: there is a potential problem for my side app. I am very dependent on multiple free services that, at any point, could remove their hobby tiers. I’ve been burned by this before—@Railway and @Heroku. I think I’m fine and comfortable with it, but I’m also trying to build my system to be provider-agnostic, so if one of these free tiers goes away, I’m not screwed.

Moving away from free-tier dread and back to new features, I was finally able to put together some data to display on the “Home” page. It took me a little while to figure out what was worth putting on a home page that would be useful to users who aren’t just me. So, I settled on a Trending Data tab and a User Log tab.

The Trending Data tab was a big one for me. It was a challenge to figure out how to pull the data I needed from the API I’m using. For me, GraphQL is still a tool I’m not 100% comfortable with, and this query really tested me. I think I’ll still have to mess around with it, but the query currently requires me to hit the API three times. I’ve been experimenting with ways to improve it, and I’m not done yet—I’ll probably have to continue tweaking it.

The other tab (User Log) for the home page was a lot more fun to build. It was a nice balance of figuring out the best way to track and display the data. I think it still has a lot of work to be done and a couple of bugs to fix (like the author name not showing up), but I’m excited to have some things displayed on the home page!

Just to end with some things I'm thinking to update going into next month: mobile styling, multi user support, and track view having some more details. The stretch goal that I still haven't fully wrapped my mind around is how I'm going to track and display user statistics.

Check the site and repo out!
[Down The Hall](https://down-the-hall.vercel.app/).
[Repo](https://github.com/bmurf17/down-the-hall)
