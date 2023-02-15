---
title: 'Elavon - System Status'
excerpt: 'Visualizing outages and downtime for transparency and compliance'
coverImage: '/assets/blog/systemstatus/system-status.png'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Bryce Watson
  picture: '/assets/blog/authors/joe.jpeg'
ogImage:
  url: '/assets/blog/systemstatus/system-status.png'
---

## How do we inform others of outages of critical systems?

For many companies, if a software platform goes down or begins experiencing limited service, everyone involved is blasted with a torrent of status emails. Elavon had long operated in such an environment.

Moreover, our internal team that managed key outages did all of their work manually through email. This led to several issues: auditors asking about performance prior to 90 days ago had little information to look over as the emails had been deleted, overlapping assignments led to confusion over who would fix an issue, and people being left out of key email chains sometimes had no idea what was going on.

The goal was to solve this issue with a single place where people would go to see if something was broken, and if they were an internal employee, what was being done to fix the issue. The working name was System Status, but it was the URL I gave it that was more important: status.elavon.com. By adding status in front of our existing main website, anyone in the company could get a concise, data-driven look at how our systems were doing without remembering how to get there. 

## Goals

### Clear data visualization

No more chasing emails to see what was going on, a live feed of every system we had in the company was actively tracked and updated without refreshing using various back-end APIs. Consistent icons, tags, and color coding helped easily identify issues at a glance. 

### More than just tables

The initial build of the site was solely tables of information from different systems. There had not been any UX input until that point, and even the developer admitted it was ugly. I challenged the PO and dev to think beyond just top line numbers and color coding, and try to be a little ambitious - which in turn led to the creation of a map of different countries, and the ability to switch the map between maintenance and active issues.

## Light mode and dark mode, from the beginning

Most modern day websites do not have a single color pallete, and dark mode especially for developers is often the preferred mode. As a result they began planning for both modes from the get go, allowing users to customize the site based on how much daylight they were experiencing.


## Takeaways

### Accessibility is not just a requirement, it’s the right thing to do.

I took the entire accessibility curriculum from Deque over the course of designing the site, and it really changed how I view even simple things like Javascript widgets. The team did not always understand why I was so gung ho about screen readers, but now they do.

### Simplicity over flashiness, trust over cutting edge.

One user in our user testing bemoaned the lack of “pizzazz” in the website, but I would say that’s in some ways a compliment. I wanted the main home page in particular to be easy to digest, and if that means that there aren’t flashing lights everywhere for example, I’d say that’s a good thing. Even though the site is internal, the plan is to expand and publish the site externally at some point, so there needs to be a level of polish that allows others to trust us. 

### Explaining with design is good. Explaining with code is often better. 

I built a parallel version of the site in React and Next.js in order to demonstrate some of the behavior to the team that I couldn’t achieve with a Figma prototype. Once they saw the website, they immediately understood what I was asking for. Plus I got to polish my React skills to boot. These skills would come in handy three years later when I used them to build the site you're reading now!