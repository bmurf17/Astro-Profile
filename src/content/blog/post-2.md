---
title: Astro
author: Brendan Murphy
description: "This is about what I've learned diving into Astro."
image:
  url: "https://avatars.githubusercontent.com/u/44914786?s=200&v=4"
  alt: "Thumbnails of websites from the Astro Showcase site."
pubDate: 2023-05-08
tags: ["astro"]
---

I got a chance to spend some time jumping into astro these past few weeks. There have been some things that I have found that I like and some things that might not be the best for some projects. But to start...

## What is Astro

![Astro Logo](https://www.agnosticui.com/assets/astro-logo-light.58b44881.svg "Title")

Astro is a web framework designed for speed. It is meant to be an "all in one" framework that allows you build with any UI components or libraries.

## Benefits of Astro

![Stock Up](https://s.yimg.com/ny/api/res/1.2/w4KEU31yD3DHxJzybeLKSw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://media.zenfs.com/en/Benzinga/28d3456dc6efb7cd97eaea4be8253a69 "Up Arrow")

One of the cooler things about Astro is that you can build components using any UI library (ex React, Angular, etc). I was dubious that this would be performant, but the react components in my app did not effect my lighthouse score that much. I can see a big benefit in having the ability to bring in multiple compoent libraries if you have a team that has a bunch of different skill sets.

Another thing that was super nice about astro is that I was able to go from new project to developing super quickly. It isn't like react where you have to pull in a bunch of dev dependinces or angular that can sometimes be hard to intergrate with tools like tailwind. Astro is super simple and makes it so that anything you want to pull in is super simple and easy to use in the project.

## Drawbacks

![Drawbacks](https://document360.com/wp-content/uploads/2018/09/The-Biggest-Drawbacks-of-Using-Wiki-as-Knowledge-Base-Software-Document360-scaled.jpg "Drawbacks")

The main drawback I can see with Astro would be if you are trying to build an app with a lot of different features that have to interact with each other. Astro does not seem to really have any sort of state managment tool at this point in time. I think this is sort of the intention though. Astro markets itself as framework that is "content-focused". So if you are looking for a feature rich app, I would recommend looking elsewhere.

## Conclusion

![Astro Logo 2](https://miro.medium.com/v2/resize:fit:720/format:webp/1*oDgPd01FKboRjQA19CZYIw.png "Astro")

I think that astro will be something I am reaching for going forward. If I ever want to build some sort of blog, landing page, or marketing website, astro would probably be my first choice. I hope this helps you incase you would like to try using astro in the future!

You can check out my first astro project here: [My Astro Profile](https://github.com/bmurf17/Astro-Profile). <- This website you're looking at!

You should check out the [Astro Docs](https://astro.build/)
