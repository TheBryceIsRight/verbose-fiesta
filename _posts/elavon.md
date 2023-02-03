---
title: 'Elavon'
excerpt: 'Helping developers understand our systems through good documentation'
coverImage: '/assets/blog/elavon/dev-portal.png'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Bryce Watson
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/elavon/dev-portal.png'
---

## How do we make our documentation as helpful as possible?

As any developer will tell you, coding without documentation is a bit like flying without a radar. Having clear, concise, and approachable technical documentation not only makes devs lives easier, but it can be used by our sales team as a powerful marketing tool. The previous documentation hub, known as Developer Portal, was lacking in several aspects: visual clarity, performance, accessibility, and the technology had several layers of technical debt. The decision was made to scrap the previous site entirely, and build something completely new: an AWS integrated, markdown powered CMS running on Grav. I worked with our digital Illustrator Keith Rosemond and my manager Robbie Beers on this project. 

### Goals

#### Quickly Browse

Our documentation was originally written for paper, making the content about 50% longer than we needed it to be for web. Quick navigation also requires consistent headings, tables, and diagrams which are not present in the original. 

#### Integrated Code

Syntax highlighted code snippets and executable code samples were a key target for bringing the documentation in line with modern standards. Redoc was used to maintain consistency in our RESTful API specs.

#### Focus on self-service

We sought to optimize several processes that currently require a phone call, from scoping a customer’s payment integration to getting test card data to run dummy transactions. 

### Research

Baseline Testing showed ample opportunities for improvement in the current site. Our Net Promoter Score, or how likely our users were to recommend the old site, was -40%. There were no users during baseline that had a positive view of the company after using the site.

After cleaning up the landing and product pages to be more like the future design, the overall experience clearly benefited.

Some quotes from our testers:

"Documentation is something that I really value a lot, I appreciate companies that provide really good documentation. From what I've seen today, the the documentation is really good. It explains what has been done, when, why, with examples, with requests, and responses, has some graphics."

When asked if using the site made the user trust the company more:

"Trust has increased, definitely. Quite a lot of work was clearly done here.”

Net Promoter Score went from -40% to +20% after a month of work.

### Takeaways

#### Communication is key

We tried several methods of design hand off, and eventually settled on a two lane hand off stream - Zeplin for business or marketing folks that just wanted a preview, and a Bitbucket based Sketch repo for the developers to see a responsive view of the designs. Once the output streams were settled, there weren’t any kinks in the hand off process.

#### Flexibility is a requirement

There were times when I was coordinating the two different sites - in the EU and North America - where requirements would come down and no one could say where they came from. Often times they were from a EU stakeholder I had never met, but you can’t let a little variety ruin your mojo. I worked with stakeholders on calls to make sure that the EU team was satisfied, even if it meant somewhat splintering the designs from each other in the short run. 

#### Good teamwork is essential

Often the blockers on this project were caused by developers trying to be Superman - only to end in sliding schedules. The best results come from Development and UX working in tandem.