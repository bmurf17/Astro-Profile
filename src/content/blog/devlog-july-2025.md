---
layout: ../../layouts/TwoColumnLayout.astro
title: Dev Log June + July 2025
author: Brendan Murphy
description: "What I built this month, June + July 2025"
image:
  url: "/Devlog July 2025.png"
  alt: "Devlog July 2025"
pubDate: 2025-07-26
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
bookOfTheMonth:
  title: "Breakfast of Champions"
  author: "Kurt Vonnegut"
  coverUrl: "https://firebasestorage.googleapis.com/v0/b/booksite-2aa2a.appspot.com/o/1747336618960_Breakfast%20of%20Champions.jpeg?alt=media&token=de32c98c-05cd-43ee-a4ba-d685637d693d"
  description: "One of the weirder Vonnegut books I've read but still had that edge and humor that makes his books click for me."
---

A small summer update from me! This summer has been a lot of fun and I've been enjoying being able to spend a lot of time outside. On a rare day though when it's too hot or rainy, I do spend a little bit of time on the side projects. So, just going to give quick check ins on those.

## Book Tracker Project

![Home Page](/Down-the-hall.PNG "Home Page")

### Overview/Thoughts

Remarkably, I don't think this website crashed these past two months! In all reality it very well could have and I just blocked it out. The main point is that I'm no longer chasing around crashes for the sight every time on of my integrations changes something with their system. There were still bugs I had to squash here and there + some books that were not getting found with my search method that had to be tweaked, but overall I'm to a spot where I can use this as my personal book tracker without much trouble.

### Goals

If you compare these goals to the onces I had last month you might notice that they are the exact same. I didn't work too hard towards any of these goals outside of some small caching changes + mobile view clean ups. I still have some cool ideas for this app that I'll want to develop one day, but for now just getting this to be solid is my goal.

- Make Caching not suck
- Mobile view clean up
- Get a few close people to test it
- Error handling (be more durable)
- Alerts (actually know when something breaks)

### Links

Check out the site and repo!  
[Down The Hall](https://down-the-hall.vercel.app/)  
[Repo](https://github.com/bmurf17/down-the-hall)

## Quest

![Quest](/Quest.PNG "Quest")

### Overview/Thoughts

Most of my personal dev time was spent with this. The idea of making a game is just always going to be fun for me and something I sink time into every once in awhile. I realized a hard part this time though, and it is asset management. I was getting to the point where I had a little bit of a flow going and decided to figure out a way to build it into my app. Just writing JSON and managing all of it was going to become a nightmare soon and actually making some management screens is a nice easy low effort summer thing so far. I still am considering if I could store some stuff in sqlite, but I'm focused more on just getting the basic flow down then figuring out if a json object or actual db makes more sense.

### Goals

This new list is not going to be very reflective of what I actually work on over the next few months, but at least some ideas of what I'll jump on depending on timing, but who knows I actually did a decent job of knocking out last devlog's goals.

- Room Management
- Combat Targeting
- Figure out best practices with Zustand
- Consistent UI (build own components)
- Export/Import Game State

[Repo](https://github.com/bmurf17/quest)

## D3

![d3](/d3-line-and-donut.PNG "d3")

No real updates on making it through my d3 book. I've messed with d3 a little bit in Down The Hall, but I probably won't really work through the book again any time soon. I think I might try and build some things for Down the Hall in the future, but for now this is a low priority for me.
<br>  
<progress value="5" max="15"></progress> 5/15

## Portfolio

![this](/New-Home.PNG "this")

Lastly is this website you are looking at! Again this is more of a creative/design/styling canvas for me right now. I haven't spent much time here but I have some ideas of how to adjust the site to be a little more fun/interesting and also learn a few things while I'm at it. But for now not much change that will be reflected in the UI.

Here’s the link to this whole website if it interests you:  
[Repo](https://github.com/bmurf17/Astro-Profile)
