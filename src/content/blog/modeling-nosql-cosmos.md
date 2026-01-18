---
layout: ../../layouts/MarkdownPostLayout.astro
title: Modeling NoSQL In Cosmos
author: Brendan Murphy
description: "Best practices when modeling a cosmos document database"
image:
  url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27enGYJ6xAG8Q1eBW5_DUE0FphnHbqRdKIgcfvNdUnrBf8wBfZjBVsNBkFdU0AeSFY7c&usqp=CAU"
  alt: "cosmos db image"
pubDate: 2023-07-08
tags: ["cosmos", "azure", "nosql"]
---

I have primarily been working with SQL throughout my development career. However, I've started encountering NoSQL solutions more frequently lately, specifically in Cosmos DB. Intrigued by this shift, I decided to invest my time and energy in exploring the best practices for modeling NoSQL databases in Cosmos DB.

## Mindset

![Cosmos Db](https://www.freecodecamp.org/news/content/images/2022/06/1_mGWQfH9O34wfTQ-cpng7ZA.png "Cosmos")

When thinking about how to structure your data, the main thing you should consider is which requests our model has to serve to ensure that the model serves those requests efficiently. This requires you to think about the request methods your app will be making and minimize your reads and writes appropriately. If you have a read-heavy app, you will want to structure your data to minimize reads. Conversely, if you have a write-heavy app, you will want to minimize writes.

## Partition Key

One of the main reasons to pick Cosmos DB is its incredible speed, achieved through a partitioning system for scaling that consists of physical and logical partitions. To optimize the scalability and performance of Azure Cosmos DB, you need to choose the right partition key for your container. Here are some considerations when picking your partition key:

1. Choose a property that you will not update later.
2. The partition key should be a property that exists in every document in the container.
3. The partition key property should have a large range of possible values to optimize the number of logical partitions created. "id" has many values.
4. The value of the partition key can be of string or numeric types.
5. Changing the partition key of a container is not possible. If you need to change it, you must migrate the container data to a new container with the correct key.

## Structuring Collections

This is where I had to unlearn many of my SQL habits. To optimize your Cosmos DB, you should aim to minimize compute. Reducing compute should be a top priority to fully leverage the speed benefits of Cosmos DB. Additionally, using a lot of compute power can make Cosmos DB expensive. If you're looking to save money, it's essential to optimize your compute power. As we will see, setting up our collections in Cosmos DB differs from structuring tables in SQL. Let's consider different ways to store data using two models with a relationship: books and authors.

1. **Store the Data in Separate Collections**

   In this approach, you would structure your data similarly to how you would in SQL, using foreign keys to link the models. This reduces storage usage since no data is duplicated, but it increases compute power because you have to perform joins. The documents in the collections would look something like this:

   Book

   ```
   {
    "id": 1,
    "title": "The Way of Kings",
    "author": 1
   }
   ```

   Author

   ```
   {
    "id": 1,
    "name": "Brandon Sanderson",
    "books": [1]
   }
   ```

2. **Embed Child Objects In Parent**

   In this approach, you denormalize the children and store them on the parent object. This helps optimize compute power significantly as there's no need for joins. One drawback is that if your array of children becomes too large, you may run into Cosmos DB's document size constraint. Write throughput may also be slower because you need to denormalize and update your children array each time you write. Here is an example document:

   Author

   ```
   {
     "id": 1,
     "name": "Brandon Sanderson",
     "books": [
       {
         "title" : "The Way of Kings"
       },
       {
         "title" : "Words of Radiance"
       },
       {
         "etc"
       }...
     ]
   }
   ```

3. **Embed Parent in All Children**

   This approach usually results in the best performance in Cosmos DB. However, there are a few drawbacks. If your parent object updates often, you will need to update all children. You can achieve this easily using the Cosmos DB change feed and an Azure function, but your writes become more expensive. The trade-off is that this approach uses more storage. Here is an example of what the documents would look like:

   ```
   {
   "id": 1,
   "title: "The Way of Kings",
   "author": "Brandon Sanderson"
   },
   {
   "id": 2,
   "title: "Words of Radiance",
   "author": "Brandon Sanderson"
   },
   etc...
   ```

Regardless of your approach, here are a couple of key tenets to follow:s

1. Avoid follow-up reads or breaking a query into multiple database reads, such as getting a document and then getting a second document based on a foreign key.
   - Common filter candidates are good for duplicating across documents
2. Data that is frequently written together should be stored together.
3. Segment the data by frequency of reads/updates, separating documents for changing and unchanging properties.

## Conclusion

![Cosmos Db Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTELZ7HqtcGK11nvbHdE07zPY0oEm5VeNBw1SZImePf&swebp/1*oDgPd01FKboRjQA19CZYIw.png "Cosmos Db")

Overall, Cosmos DB has been beneficial for certain use cases. Since it requires you to think about data differently, it may not be suitable for every solution. If speed and model flexibility are important to you, then Cosmos DB is a good tool to consider.

### Sources

Here are some of the resources I used

- [Free Code Camp Article](https://www.freecodecamp.org/news/a-beginners-guide-to-azure-cosmosdb/#:~:text=Each%20item%20in%20Cosmos%20DB,can%20also%20be%20nested%20fields.)
- [Microsoft Doc](https://learn.microsoft.com/en-us/azure/cosmos-db/nosql/model-partition-example)
- [Schema Design](https://www.youtube.com/watch?v=bKDaL-GRSAM)
