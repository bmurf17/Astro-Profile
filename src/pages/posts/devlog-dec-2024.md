---
layout: ../../layouts/TwoColumnLayout.astro
title: Dev Log December 2024
author: Brendan Murphy
description: "What I built this month December 2024"
image:
  url: "/Devlog December 2024.png"
  alt: "Devlog December 2024"
pubDate: 2024-10-24
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
bookOfTheMonth:
  title: "Wind & Truth"
  author: "Brandon Sanderson"
  coverUrl: "https://m.media-amazon.com/images/I/510p-qEUbDL._SY445_SX342_PQ37_.jpg"
  description: "The only book I read this month lol. I was happy to conclude one of my favoirte series, but sort of disappointed in the book as a whole."
---

Another month, another update. This December has been great in terms of things to write in a dev log. Ups Downs and some fun things to look forward to. On top of that it was a classic, work a ton in the first few weeks and then nothing around Christmas

[Check the diff pt 1](https://github.com/bmurf17/down-the-hall/pull/11)

## Book Tracker Project

![Goals](/Goals.PNG "Goals")

### Updates

This month had its ups and downs, so I'll start with the ups! I added a goals page to my site. This was a classic "end-of-the-year" moment, where everyone was talking about their Goodreads yearly goals. I figured it was the perfect time to introduce this feature. I'm really proud of this page—it was an impromptu addition, and I was able to implement it quickly.

Another big win this month was adding a search bar to the navigation bar, allowing you to search and add items from any page. This was a feature request from my wife, and I think it turned out to be a real win. It didn’t require a ton of work, but I loved being able to add this functionality.

Now for the main "L" this month: the API I use for book information made a key change that broke the fuzzy search functionality. They removed ilike and iregex from their queries. After reading their reasoning, it makes sense—but for my use case, it’s a bit of a setback. Until I figure out a workaround or switch to a new API, the search feature will require the full title to return the needed results.

Check the site and repo out!
[Down The Hall](https://down-the-hall.vercel.app/).
[Repo](https://github.com/bmurf17/down-the-hall)

## Other things

Not much to say here especially with the holiday season, there has not been as much effort spent here. I'm still poking around D3 and considering some other side projects to learn some new things and keep building.
