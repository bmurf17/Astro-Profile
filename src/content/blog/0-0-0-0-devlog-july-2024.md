---
title: Dev Log July 2024
author: Brendan Murphy
description: "What I built this month"
image:
  url: "/Devlog July 2024.png"
  alt: "Devlog July 2024"
pubDate: 2024-07-31
tags: ["next.js", "react", "neon", "drizzle"]
---

Another Month in the books and more stuff to report on being Built. If you are unfamiliar with the idea of a dev log check out this great example a video based one

[Example from Challacade](https://www.youtube.com/watch?v=kTFPczDJIno)

## Book Tracker Project

Like last month I created a branch to track my changes which again really helped me remember how much I was able to do this month. The keys from this month are I was able to start actually writing to the db, integrating a better api for books, and create the stub for the book details page. See the dif [Here](https://github.com/bmurf17/down-the-hall/pull/2)

Writing to the db was not too bad. Using neon and drizzle made the writing pretty smooth. The one snafu I ran into was when I was trying to generate a row for the author while adding a book if the author did not exist. I had to write a much more SQL like statement as opposed to just using the libraries I had. It was good to sort of flex that muscle which I don't use a ton. The other big thing with actually writing to the db forced me to revalidate some of my queries. It was one of those things that took me a little while to figure out, but after I dove into the next.js docs on retrieving and fetching I was able to get it working smoothly.

Next I was starting to bump into a bit of a limitation with the google books api. It just didn't really have that much data that was worth displaying in my app. It was great for getting me off the ground, but it didn't have information about if a book was in a series and couldn't differentiate between different book editions for things like page count. It just got to be pretty difficult to do something like display the book details page. So I ended up moving over to use hardcovers api. It has a lot more info and has been treating me well so far. The main thing with changing apis though is this is my first time retrieving data from a Graph QL api. It isn't too different, but it is nice to be exposing myself to new tech.

Finally the last thing I want to highlight is the book details page. Nothing too crazy here, but I think it really tested my css. I'm not someone who uses absolute and relative styling often, but using an example I was able to get a cool looking book details page that I think will work well for me.

Next month I don't have any obvious goals outside of making the app serve me on my reading journey. So a couple of things that are on my mind is, displaying more info on book like the series, messing with track page to have more details, and finally maybe having some data visualizations on how my reading looks. I have a couple other ideas that might take priority depending on how my August knows.

[Down The Hall](https://down-the-hall.vercel.app/).
[Repo](https://github.com/bmurf17/down-the-hall)
