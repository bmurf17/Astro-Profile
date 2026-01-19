---
title: Dev Log October 2024
author: Brendan Murphy
description: "What I built this month October 2024"
image:
  url: "/Devlog October 2024.png"
  alt: "Devlog October 2024"
pubDate: 2024-09-27
tags: ["next.js", "react", "neon", "drizzle", "firebase"]
bookOfTheMonth:
  title: "Go Up For Glory"
  author: "Bill Russell"
  coverUrl: "https://m.media-amazon.com/images/I/91njwhGWC1L._AC_UF1000,1000_QL80_.jpg"
  description: "This was my favorite book of the month! I'm a big Bill Russell fan, and it was great to dive into his story."
---

This was a great month of development. I think this month I was able to do a bit more work polishing up the app with things like loading, toasts, and some small bug fixes. I think this month didn't have any crazy cool feature development, but adding some quality of life changes makes me like using the app a bit better. Also, I'm planning on cleaning up this portfolio website slowly but surely. There are a lot of small things I can do to just make this site a little cleaner and more fun for me.

[Check the diff](https://github.com/bmurf17/down-the-hall/pull/5)

## Book Tracker Project

### Updates

This month was much more focused on polishing up some existing features as opposed to really any new features. For example, the notes per book didn't really work all that well. I took a couple of sittings this month to clean that up, and now note keeping works. Keeping in line with small improvements, I cleaned up the tracking page to allow for the sorting button to actually work. It wasn't a huge lift and again just continued to clean up. Then just getting some toasts and loading states going was very nice. I was always kind of frustrated by not having any feedback on the website, so I went ahead and cleaned it up.

### Overall Thoughts

Part of the goal with this project was to build something cool using newer tech like Next.js. I think this far into the project I've started to notice a couple of issues with Next. My biggest complaint is going to be slow dev time + page transitions being really slow. I don't know if I have something configured wrong, but it is really, really slow. The other thing that has been tough is caching. I've had to do some pretty gross stuff to get cache to revalidate (like router.refresh()). I think that this has been a fun experiment, but probably not something to use for all projects going forward.

### Goals

![Book Of The Month](https://res.cloudinary.com/practicaldev/image/fetch/s--KkP4AuFt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png "Book of the Month")

I think I'm approaching a pretty good stopping point on development for this app. I've had a lot of fun building it, but I think I'm going to take a little break sometime soon to explore different projects + tech. I have plans to keep developing the app as time goes on to be able to really maintain a side project, but I think soon here I'm going to shift some of my focus to new-ish projects. Before I step away, the main things I want to try incorporating are some way to view a series, character tracking (similar to notes), and just some polish. If I'm going to step away from this app for a little while, I need to make sure it works and has the features that I need for it to serve my use. There are a couple of things like users being able to see each other's lists and such that maybe I'll sneak in before I step away, but the goal is to shift this to maintenance mode until I feel the need to get back into it.

Check the site and repo out!
[Down The Hall](https://down-the-hall.vercel.app/).
[Repo](https://github.com/bmurf17/down-the-hall)

## Portfolio

![Book Of The Month](/Book-of-the-month.PNG "Book of the Month")

As I mentioned above in the goals section of the book tracker, that project is just getting a little stale for me. So I'm going to try and do one cool-ish thing on the portfolio a month. For this month, that would be adding my book of the month to new dev logs! If you're looking at this on mobile it's not going to show up, but I'm excited to just add a little pizzazz to the blog posts

[Repo](https://github.com/bmurf17/Astro-Profile)
