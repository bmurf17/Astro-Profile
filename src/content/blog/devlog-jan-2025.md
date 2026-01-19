---
title: Dev Log January 2024
author: Brendan Murphy
description: "What I built this month, January 2025"
image:
  url: "/Devlog Jan 2025.png"
  alt: "Devlog January 2025"
pubDate: 2025-01-26
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
bookOfTheMonth:
  title: "This is how you Lose the Time War"
  author: "Amal El-Mohtar & Max Gladstone"
  coverUrl: "https://m.media-amazon.com/images/I/71w0e6zz+VL._SY522_.jpg"
  description: "This book was incredible. Time-traveling pen pals who both write beautifully. One of my favorite books in a long time."
---

I'm proud of the work I was able to create this month. I made progress on a couple of different fronts, and I'm excited to share it all.

## Book Tracker Project

![Users Page](/Users-Page.PNG "Users Page")

### Updates

Last month, I mentioned that the service I use for getting book info drastically changed. And by "drastically changed," I mean it removed fuzzy search from their query options. As someone who rarely knows the full official title of the books I want to read, this meant my site became much harder to use. As a result, I focused on integrating another service to supply book data. Not a fun fix by any stretch of the imagination, but it was necessary.

I've mentioned this before, but using a bunch of free services for this website means I'm always at risk of these kinds of changes. That leads to jumping into service migrations, mitigating impacts, or accepting behavioral changes. Luckily, this fix wasn’t huge, but my search is now slower and less accurate based on my initial tests. I'll have to revisit it eventually, but for now, it's good enough.

The other, more fun update is the ability to see what other people are reading. Right now, the only people using my app are my wife and me, but if someone else joins, I’ll see them on the new page. The main issue I had with this feature was figuring out how and when to add a user to the database. Using Clerk for authentication has been super nice and easy, but I didn’t see a simple way to bind an action to user sign-in (which is when I wanted to add a user to the database). So, my next-best solution was to add a user when they add a book. I haven’t tested this super thoroughly yet, but I can’t think of any reason why this wouldn’t work well.

### Goals

I feel really good about where **Down the Hall (DTH)** is right now. I'm able to use it and get about 85% of what I want out of a book-tracking site. There’s still some polish I’d like to add, like caching, pagination, and improved search functionality. But nothing feels super high-priority at the moment. Over the next few months, I think my work here will be lighter as I focus on developing new skills that could be useful for DTH or come up with fresh, high-priority ideas.

### Links

[Check the diff: Part 1 - Fixing Search](https://github.com/bmurf17/down-the-hall/pull/13)

[Check the diff: Part 2 - Users Page](https://github.com/bmurf17/down-the-hall/pull/14)

Check out the site and repo!  
[Down The Hall](https://down-the-hall.vercel.app/)  
[Repo](https://github.com/bmurf17/down-the-hall)

## New Project

![Quest](/Quest.PNG "Quest")

As you can probably guess from the screenshot, I’m trying to make a game! I’ve tried making games before but have never gotten anything to a “playable” state. I’m hoping that, like how writing about my book site motivated me to follow through and create something I’m proud of, I can do the same for this game.

Right now, my idea for the game is pretty high-level, and I’ll need to narrow it down eventually. My goal is to create a clone of the old web-based game [Sorcery Quest](https://sorceryquest.fandom.com/wiki/Sorcery_Quest_Wiki). Growing up, I played a lot of games by this studio (Edgebee), but since they went out of business and their servers shut down, there’s no way to play these games anymore. So, I thought I’d try to rebuild it to the best of my abilities.

For technical details, the only things I know for sure are that I’m going to use React to keep it web-based. I think a state management library like Zustand will be incredibly helpful for managing game state. Beyond that, I’m still figuring things out. I want to decide on a good hosting approach and whether I’ll save player info or just keep everything local for the players. As I build, I may encounter constraints with React that push me toward other tools, but for now, this project might become the main focus of my development time.

[Repo](https://github.com/bmurf17/quest)

## Other

![D3 in Action](https://m.media-amazon.com/images/I/71Udk4SaNwL._SY522_.jpg)

Finally, I want to share how learning D3 has been going. I’m working my way through the above textbook to learn some fundamentals. It’s been a long time since I’ve used a textbook, but it’s helping me learn quickly. I still have a long way to go before I can start creating cool graphs and adding things to Down the Hall, but for now, I’m happy to be making progress. Below is a progress bar showing how many chapters I’ve completed so far!  
<br>  
<progress value="3" max="15"></progress> 3/15

Here’s the link to this project if it interests you:  
[Repo](https://github.com/bmurf17/Astro-Profile)
