---
title: Dev Log Feb + March 2024
author: Brendan Murphy
description: "What I built this month, February + March 2025"
image:
  url: "/Devlog Feb 2025.png"
  alt: "Devlog Feb 2025"
pubDate: 2025-03-26
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
bookOfTheMonth:
  title: "Piranesi"
  author: "Susanna Clarke"
  coverUrl: "https://m.media-amazon.com/images/I/51Ks3oKIX8L._SY445_SX342_.jpg"
  description: "This book was right up my alley. I love when a book string you along with mystery and this book did that incredbily well"
---

This devlog I'm combining February and March. February was a pretty slow month in terms of dev stuff and figured it was worth just taking a month off from writing and combining it with March. So let's just jump into it, and share what I built.

## Book Tracker Project

![Home Page](/Update-Home.PNG "Home Page")

### Updates

Another devlog, another update on search. Hardcover, my main book information provider in the past, was not perfect. It just isn't an API that encourages a brand new book tracker; they want to push you towards using their UI, which makes a ton of sense for them but has forced me to overhaul search. There were just too many times where I was hanging in a bookstore trying to add something to my TBR and Down the Hall wasn't working.

To explain how search works now, I first query Open Library to get the relevant ISBNs and some basic info like title and author name. Then I go to Google Books and ingest additional data that I couldn't get from Open Library. Finally, I go to Hardcover, and if I can get results, I use them; if not, I use the Open Library + Google Books results. I think I'll forever be tweaking the search in terms of who I use for data, how I ingest it, and what I display. But for a month, I've at least tried to up the durability.

The other update to Down the Hall would be the main home page. It is still a work in progress, as I think I'll be playing with it as I keep using the app. I still want to decide what I'm going to display on this first page, what works best if I get more users, and if there is any UX that can be improved by having more controls on the first page. For now though I've added what the user is currently reading + their reading goal.

### Goals

Down the Hall is a project I'm never going to be able to quit. I have said multiple times in this blog that maybe it will shift more to "maintenance" mode, and I will probably say it again. Just as a disclaimer: don't believe me when I say that. I keep coming up with more ideas for this project or new ways to improve existing functionality. I'll list my current top-of-todo-list goals, but who knows how much of this will get done anytime soon with new ideas and other projects on my mind:

- Charts moved to D3
- Ingest more search data for new stats charts
- Users can change book info (cover, date read, page count)
- Notes + Characters overhaul
  - Miro board behavior for more options + tracking
  - OCR notes by hand
- Update series view to be more accurate
- Actually figure out next caching
- Error handling (be more durable)
- Alerts (actually know when something breaks)

### Links

[Check the diff: Part 1 - Fixing Search pt1 ](https://github.com/bmurf17/down-the-hall/pull/16)

[Check the diff: Part 2 - Fixing Search pt2 + Home Page](https://github.com/bmurf17/down-the-hall/pull/17)

Check out the site and repo!  
[Down The Hall](https://down-the-hall.vercel.app/)  
[Repo](https://github.com/bmurf17/down-the-hall)

## Quest

![CreateChar](/Create-Char.PNG "CreateChar")

Some nice ground-level changes were made here. I was able to set up a few standalone feature components that I don't have much to say about, but I'm happy to have mocked up the start of creating characters and the home screen. Not a ton done here, but I'm happy to keep making good progress.

[Repo](https://github.com/bmurf17/quest)

## D3

![CreateChar](/d3-line-and-donut.PNG "CreateChar")

Finally, just an update on learning D3. I'm continuing to work my way through some exercises in the D3.js in Action book and learning more and more. I'm hoping soon to convert some of my Chart.js charts to D3 in Down the Hall. Other than that, I'm learning scales and some cool techniques.
<br>  
<progress value="5" max="15"></progress> 5/15

Here’s the link to this whole website if it interests you:  
[Repo](https://github.com/bmurf17/Astro-Profile)
