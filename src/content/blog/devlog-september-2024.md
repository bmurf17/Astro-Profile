---
title: Dev Log September 2024
author: Brendan Murphy
description: "What I built this month September 2024"
image:
  url: "/Devlog September 2024.png"
  alt: "Devlog September 2024"
pubDate: 2024-09-27
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
---

This month had some fun building, but it was also a month where I hit a bit of a wall with my side app. It was a combination of being slightly busier, the tasks I had getting harder, and not getting a quick payoff from the tasks I was doing. I think that's why I chose to change up the home page on my portfolio. It was an easy, visible win and gave me quick satisfaction. Let's dive in a little bit on what I worked on this month.

[Check the diff](https://github.com/bmurf17/down-the-hall/pull/4)

## Book Tracker Project

### User Auth

![Clerk](/clerk.jfif "Clerk")

This has been a big one I've wanted to knock out for a while. I think this project would be significantly cooler if I could get some of my friends to start using it. I was happy that auth was easier than I thought it was going to be. In the past, I tried to do auth in Next apps using NextAuth, and it had always been slightly harder than I wanted it to be. This time, I tried out Clerk, and let me tell you, Clerk was SOOO easy to get set up with my current setup. I was able to pull in the Clerk stuff and get it working in just two short sittings. This was one of those things that was cool and easy enough that I'll be leaning on it going forward.

### Start of the Stats Page

![Stats](/Stats-Page.PNG "Stats")

This is another big-ticket item I want to get into my app. I think tracking some of my book reading in a cool and interesting way is going to be the thing that actually brings me back to my book tracker. This is just the first part of having some tracking, but it seems like it’s going to be a bigger undertaking than I thought. This is just the start of it, but more stats to come.

### Book Details Improvements

![Book Details](/Book-details.PNG "Book Details")

This is another half-baked change, but it is slightly better than it was last month. The main thing I changed is the tabs at the bottom of the page. I'm still trying to figure out the best way to structure the tabs. I have the start of the notes tab going, but the design still needs a little more fleshing out in terms of both styles and database storage.

### Misc

![Mobile View](/Mobile-view.PNG)
Time for the lightning round of small changes that are big enough to mention but not large enough for their own section. I cleaned up the mobile styling a little bit (see pic above). As referenced in older devlogs, my GraphQL skills are novice at best, but I was able to improve my queries a bit. Because my page loads were really bugging me (I think this is something I need to investigate further), I added page transitions to try and make it feel a bit smoother. Lastly, the side nav menu used to stay open when I switched pages. This started to bug me, so I fixed that one up real quick.

### Goals

For this next month, I think I'll be working on a lot of similar features and clean up. The goal is to just see one or two of these through to be in a usable state.

Check the site and repo out!
[Down The Hall](https://down-the-hall.vercel.app/).
[Repo](https://github.com/bmurf17/down-the-hall)
