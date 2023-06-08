---
layout: ../../layouts/MarkdownPostLayout.astro
title: Azure Migration
author: Brendan Murphy
description: "Some things to consider if you're looking to migrate to azure."
image:
  url: "https://uploads-ssl.webflow.com/5fa58eb04302c6e6eb23144c/5fe0fb82cba995b89ce56c0d_azure-migrate.png"
  alt: "Logo for Azure Migration"
pubDate: 2023-06-07
tags: ["azure", "azure-migration"]
---

I was assigned to a project where we would be helping a company move from self hosting into Azure. So, I've tried to lay out some guidelines and steps to consider if you are considering moving to Azure.

## Things to Consider

![Astro Logo](https://www.datalinknetworks.net/hubfs/microsoft-azure-migration-gb-S-1.png "Logo ")

If you are hosting VMs yourself and you are considering moving to a cloud like Azure, here are some reasons you would want to make the move

1. Can be long term savings
2. Less Cost of Ownership

You will also want to decide what you are looking for when moving towards the cloud as well. Are you looking for more of an Infrastructure as a Service (IaaS) solution, there are options for you. Or if you looking for more of a Platform as a Service (PaaS), there are also options for you. One thing to consider when deciding where you want to fall on the IaaS/PaaS scale. Because if you lean into the IaaS, it will be easier to transition your VMs to Azure, but you won't get as many cloud benefits like long term savings and low cost of ownership. On the other hand, PaaS solutions take a little bit more work to get cloud ready, but you will get more benefits for the work you've put in.

There are a couple of questions you'll want to ask yourself

1. How long do I have before I have to be in the cloud?
2. how long will this app need to be running?
3. How quickly do we need to see returns on the move to the cloud?
4. What is your Total Budget?

You now have all the context you need to move to the cloud. Depending on what services you are looking to move towards in the cloud you might need to tweak your application a little bit. This takes us to the 5 Rs of Migration.

1. Rehost (lift and Shift)
2. Refactor
3. Rearchitect
4. Rebuild
5. Replace

Here is a quick visual to break down some of what we've just covered.
![Things to Consider Image](../../../Things%20to%20consider%20when%20moving%20to%20the%20cloud.png "Things to Consider Image")

## Migration

![Migrations](https://images.seifbassem.com/images/Posts/Azure-Migrate-Modernize/banner.jpg "Migration")

Once you've decided you want to migrate to Azure, you can follow these steps.

1. Discover
   - What do we need to transfer over? (VM/DBs/etc...)
   - What is the desired performance level?
2. Assess
   - Can it be move to the cloud?
   - What is the right size? (Don't want to over provision because you pay for what you put out there)
   - What has to be moved in groups?
   - What Azure Services are you targeting?
3. Migrate
   - Plan
   - Will it take anything offline as we migrate
4. Optimize
   - Keep working as you go

This might seems like a lot of effort and work, but luckily azure has a service for this.

### Azure Migrate

This is the hub for migrating into Azure no matter where you come from. Azure Migrate also has tooling to assist with the migration over to the cloud. Some of these tools might require paying, but the basic built in tooling is free. The tooling will also help you Discover, Assess, and Migrate.

The built in tooling support migrations from

1. On Prem
   - VMware (Agent Less)
   - Hyper-V (Agent Less)
   - Bare Metal
2. Other Clouds
   - AWS
   - GCP

The key reason I call out Agent less is because you can Discover, Assess, and Migrate all with out any installation onto your VMs. So, if you are wary of installing things onto your VMs, you won't have to worry too much if this is you case.

Here is a quick visual to break down some of what we've just covered.
![Migration Overview](../../../Migration%20Overview.png "Migration Overview")

## Conclusion

![Azure Logo](https://summ-it.eu/wp-content/uploads/2022/08/image10az-768x432.png "Azure")

I'm hoping this gives you a nice roadmap if are considering moving to azure migrate.

If you are looking for an example of someone going through the migration check out this video: <a href="https://www.youtube.com/watch?v=hiIWd3upOEE" target="_blank">Azure Migrate Lab</a>
