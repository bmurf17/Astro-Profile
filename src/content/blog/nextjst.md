---
title: Next.JS
author: Brendan Murphy
description: "Learning Next and comparing it React"
image:
  url: "https://res.cloudinary.com/practicaldev/image/fetch/s--KkP4AuFt--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ql92zpsre2li58mpjpsa.png"
  alt: "Next JS logo"
pubDate: 2023-08-14
tags: ["next.js", "ssr", "react"]
---

Almost every tech voice I listen to has been putting content out about Server Side Rendering (SSR). Whether I’m reading blogs, watching videos, or listening to podcasts, I can not escape talk of SSR. As someone who mainly focuses in the React ecosystem, I have heard SSR tied heavily to the meta framework Next.js. I decided that it was time for me to dive into the world of SSR by comparing Next to React and developing something using Next.

## Next vs React

![Next vs React](https://mobisoftinfotech.com/resources/wp-content/uploads/2022/05/og-next-js-vs-react.png "Next vs React")

I’m going to start off by diving into the Pros I see for React followed by the Pros I’ve seen with Next then I’ll dive into one thing that could be a pro or a con depending on your situation.

## React Pros

1. **Better Search Engine Optimization (SEO)**

This first pro is sort of a 3 in 1. React has been around for awhile. With that, React has built out a large pool of developer who have built a strong community and extensive tooling. If you have a general react question, you can probably find someone who has ran into and documented their solution to the problem. Where if you are using Next, you are not going to have as many resources. On top of this, if you are using Next 13 you are going to have even fewer resources in terms of libraries and fellow developers. This is important to consider if you are looking to bring in more developers to support the project as well.

2. **React Stability**

Next is new technology. If you are pulling it in you are adopting technology that is new and still has hiccups. As of August, most Next 13 hiccups have been caught, but there are still some that pop up that could effect your application. React on the other hand has been around for awhile, so you can confidently deploy know that you are using one of the most reliable pieces of software out there. Keep in mind as you are reading this though, that this can change. Next 13 has been getting better and more reliable at a rapid pace. There is a great team of developer maintaining Next and maybe some point soon Next could be consider the better bet in terms of stability.

## Next Pros

1. **Better Search Engine Optimization (SEO)**

   Next has significantly better SEO because it was built with SEO in mind. This is one of the places where Next leveraging SSR really shines. There are some ways to make a traditional React app better at SEO, but they can be difficult and a little hacky. Where when you use Next, you do not have to think much about SEO and your site still scores highly.

2. **Serverless Full Stack Apps**

   With Next, you can build and deploy a full stack serverless app. This is a great for scalabitly, flexibility, and quicker time to release.

3. **End to End Type Safety**

   This was one of the reasons I wanted to check out Next. The ability to use the same types in the client that I’m using in the server makes my life as a developer significantly better. I don’t have to use the weird online C# class to Typescript type converters anymore. I write my type definitions once, and I am all set to use them everywhere.

4. **Better Performance**

   Again Next leveraging SSR helps them out in another way. Because Next sends less javascript to the client, Next apps tend to run faster than React apps.

## Could Be Pro Could Be Con

![React Iceberg](https://leerob.io/_next/image?url=%2Fimages%2Freact-frameworks%2Ficeberg.png&w=828&q=75 "React Iceberg")

1. **Flexibility vs Opinionated**

   Once you decide you want to use React, there are still plenty of decisions you need to make. Like how will you do data fetching, routing, styling, and etc. Depending on your team, your organization, or other parts of your situation, having a framework like Next that is opinionated and decides everything for you could be beneficial. On the other hand having the flexibility to pick the tooling you want for your application can also be a big benefit. I guess this can sort of just depend on your preference.

Here is a little graphic I put together for the pros of each choice.

![Next vs React](../../../Next%20vs%20React%20chart.png "Next vs React")

## What I built

- [Live Link](https://learning-next-nm6jp5zoq-bmurf17-gmailcom.vercel.app/)

I figured the best way to form my opinion on Next would be to actually get my hands dirty and build something. I wanted to build some sort of tool for my fiancé could use at her job. So, I built out a tool that would help her plan and mange programs at her job. It was a good chance for me to just try and learn the new router, next api routes, and forms. Overall, I really liked Next. I think that I was able to really get code written and shipped faster than I have before. For me, having the end to end type safety is a big win. I no longer have to use the C# to typescript model converters for all my types. One thing that took awhile to get used to was whether or not I was on the client or the server. There were multiple times where I would console.log and end up seeing the logs in the client when I expected to see them in the server and vice versa. Overall, I think Next is something I will reach for when I’m building side projects, but I don’t think I would use it yet for a client in production. Maybe as I get more comfortable with it that opinion will change, but for now I’m not ready to reach for it in production.

### Sources

Here are some of the resources I used

- [Next Docs](https://nextjs.org/docs)
- [Why You Should Use a React Framework](https://leerob.io/blog/react-frameworks)
- [Next.js vs React – What are the Differences?](https://www.freecodecamp.org/news/next-vs-react/)
- [Next.js vs React: The Difference and Which Framework to Choose](https://ninetailed.io/blog/next-js-vs-react/)
