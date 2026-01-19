---
title: Dev Log August + September 2025
author: Brendan Murphy
description: "What I built in the months August + September 2025"
image:
  url: "/Devlog Sep 2025.png"
  alt: "Devlog Semp 2025"
pubDate: 2025-09-29
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
bookOfTheMonth:
  title: "Isles of the Emberdark"
  author: "Brandon Sanderson"
  coverUrl: "https://firebasestorage.googleapis.com/v0/b/booksite-2aa2a.appspot.com/o/1179741_undefined.jpeg?alt=media&token=2b0aeb45-b858-4f4a-ae34-f72e324a4549"
  description: "This was a fun one for me. It was simple read that expanded a world I love reading."
---

Final update of the summer! Nothing extremely substantial, with any of my side projects. Some polish on the book track site, some refactoring on the game, and a small return to an old side project. 

## Book Tracker Project

![Home Page](/Down-the-hall.PNG "Home Page")

### Overview/Thoughts

Again a solid couple months with no real outages. I think that this project is in a good spot and every time I've hopped in to add or fix something, it has been relatively painless. I did a handful of things to have fewer breaking bugs such as error catching around my third party services. There are two things still hanging over my head at the moment. First would caching. I actually took some time to dig in here and found a better way to go about this. When refactoring the stats page, I realized that caching made dynamic date ranges impossible. So through some trial and error I found a way to do some cache invalidation consistently. So, at some point I'll need to implement these change to other parts of the app. The other big thing is my free tier with vercel. They have timeout issues that I now regularly run into while deployed. The main issue is it seems the start up time counts against the time outs. So since, I have slow start ups + limited time outs from vercel's free tier, I'm either going to have to pay or migrate if I'm ever going to have other people use this. Because for me it's no big deal, I just see an error screen and refresh the page and it loads fine. But communicating that to my less techy family members seems untenable. This is sort of a crappy spot to be where I feel sort of locked in on a side project, but for now I'm just going to let this sit.

### Goals

Nothing too crazy here, similar to the last handful of goals:

- Make Caching not suck on pages that aren't stats
- Mobile view clean up
- Figure out the timeout stuff
- Alerts (actually know when something breaks)

### Links

Check out the site and repo!  
[Down The Hall](https://down-the-hall.vercel.app/)  
[Repo](https://github.com/bmurf17/down-the-hall)

## Quest

![Quest](/Quest.PNG "Quest")

### Overview/Thoughts

Not as much time was spent here throughout my past two months, but I think that over the next few months I might be more focused here. Again, one big piece of this is just managing data. I added a connection to superbase for this, and I might make a separate website that is just a level management portal. I think that might be overkill, but hey it sounds fun to me. I'm also at the point where I'm considering learning some new tech to build the management website, but who knows.  

### Goals

Again goals for this project have always been sort of squishy as it is still so new that whenever I do anything with it I notice things that need to be figured out before I do what I actually listed as a goal. So that being said don't expected the things on this list to actually get done.

- Management Portal
- Combat Targeting
- Figure out best practices with Zustand
- Consistent UI (build own components)
- Export/Import Game State

[Repo](https://github.com/bmurf17/quest)

## Story Time

### Overview/Thoughts

I think inspired by my need for a management website I revisited a pretty old side project I had. The thought for this one was I'd create a website to help keep me organized for writing a book (which idk I don't think I'll do but wanted to build). I sort of revisited it to see if I could convert what I had back into a management site for the quest game. Unfournately, probably not, but I messed with it for awhile and fixed some things up, so maybe one day I'll come back to this project.

### Goals

Idk if I'll spend that much time with this project, but hey it was cool to revisit and maybe I'll mess with it going forward.

[Repo](https://github.com/bmurf17/story-time)



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
