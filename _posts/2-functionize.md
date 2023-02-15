---
title: 'Functionize'
excerpt: 'Helping testers with a low to no code AI-powered automation platform'
coverImage: '/assets/blog/functionize/functionize.png'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Bryce Watson
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/functionize/functionize.png'
---

## How do we fulfill the promise of automation for quality assurance professionals?

Full automated testing is still quite a ways away. However, that doesn’t mean that the AI we have now isn’t incredibly powerful, and Functionize attempts to harnass the latest developments in the science to make powerful, reliable tests for QA. The goal is to make tests that you literally can’t break, even if you tried.

## Goals

### Visual clarity

Previous designers had set up the product to be angled at power users. This created a steep learning curve and numerous knock on effects. We had low conversion of free trial users, lots of customer questions about basic functions of the software, and a general lack of enthusiasm for the product’s UI when demoing to potential clients. The backend was the star of the show, and that meant the frontend of the site had been neglected for some time. 

## Less dialogs

Due to technical limitations and the experience level of the dev team when the site was built, every major function occurred in a dialog. While completely removing them on the first pass was technically infeasible, I cut them down as much as I could. Dialogs create accessibility problems, but they also limit the ability of the user to engage in a nonlinear workflow. The main component of the website - site actions - was completely reimagined to use tabs, expansion panels, and clear headings to allow multiple actions to be edited to their full extent without ever needing to go into a modal. 

## Testing automation for everyone

I’m passionate about making digital experiences first and foremost for those within the accessibility community. Initial Axe scans revealed a site that never had anyone audit it for a11y, with hundreds of critical and severe issues. Contrast issues were omnipresent, screen readers read text covered by other elements, keyboard navigation didn’t exist, the dialogs weren’t made to work in accessible context, and the list goes on. As the team hadn’t worked on these kinds of bugs before, I became a strong proponent of Vuetify - an open source UI library using the Material Design specification that included many a11y best practices. Vuetify gave us a floor to prevent the most severe accessibility problems from making their way into production.

## Takeaways

### Listen to your customers

Customers often have great suggestions for ways to improve the product. I enjoyed talking to testers and sdets who have used Functionize as their automation tool and what they’re pain points where.

### Don’t reinvent the wheel

Even if the UX is new, the component pieces of UI should be standardized and recognizable. There were multiple places where a custom one-off piece of CSS determined something that vaguely resemebled a table. These were often completely inaccessible, and some of them exhibited glitchy behavior. All of these areas benefitted from a standardized vuetify data table, with built-in sorting and pagination. This also created consistency in the way we displayed data.

### Design systems are worth the hype

It’s a ton of upfront work to create a design system. I used the atomic design pattern, where each piece of the UI is slowly built up in various levels of complexity - atoms, molecules, organisms, templates, and finally pages. And it takes forever. It’s worth it though, as the amount of time I’ve saved from having a bunch of standardized components is something I’ll probably never be able to measure. Brand consistency benefits as the company grows, especially if you can turn it into data like a JSON response. I can make large scale changes across a huge site in minutes, something that’d never be possible without a design system.