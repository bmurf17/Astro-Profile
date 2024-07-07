---
layout: ../../layouts/MarkdownPostLayout.astro
title: Dev Log June 2024
author: Brendan Murphy
description: "What I built this month"
image:
  url: "/Dev log june.png"
  alt: "Devlog june 2024"
pubDate: 2023-08-14
tags: ["next.js", "react", neon]
---
Another Month in the books and more stuff to report on being Built. If you are unfamiliar with the idea of a dev log check out this great example a video based one

[Example from Challacade](https://www.youtube.com/watch?v=kTFPczDJIno)

## Book Tracker Projects
This month I was able to do a much better job of tracking my changes because I made a branch for the month. Then at the end of the month to remember everything I did all I needed to do was make a pr from june into main. You can check out the code diff [here](https://github.com/bmurf17/down-the-hall/pull/1)

The key highlights I'd say are that I'm actually pulling and displaying info that I'm planning on using. The track page page now pulls and displays info from the db hosted out in Neon, and the find page pulls info from the google books api. This was just also nice to be able to open the communication to these data sources. Because at least for the book tracking portion, these are the only two sources of data I'm planning on interacting with. 

Another thing that I want to shout out is that I've got the website deployed! Check it out here [Down The Hall](https://down-the-hall.vercel.app/). There isn't any way for a user to track their info so really the only thing that a user can do is search from the find page. But as I keep developing I'm planning on deploy every month when I do my write ups here.

Next month I want to focus on making it so that I can use the app for myself to track my reading and want to read lists. I think being able to get some writing to my db + working on the filtering of the different lists will be a big next step. 


[Repo](https://github.com/bmurf17/down-the-hall)
