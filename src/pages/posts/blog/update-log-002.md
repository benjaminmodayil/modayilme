---
layout: blog
type: blog
title: Update Log 002
tldr: Ben stands up again.
date: 2018-03-04T02:58:55.241Z
path: /blog/updatelog/002
---
## Update from February 1st to March 4th

### NewsMe
Almost as soon as I finished the last update, I finished my A.P.I. project. It's called [NewsMe](https://benjaminmodayil.github.io/API-Capstone/). NewsMe is a site that collects news from the NewsAPI and places it in a grid (css grid) with which you can save articles to the `/saved` path.

### Internships
I've been looking at possibly doing another internship, if I can't find a decent full-time position here in Philadelphia. I'm trying to get into more digital agency work, but most digital agency job descriptions have a requirement for prior digital agency experience, and I'm pretty light in that area.

I've found a few digital agencies that I'll be applying to, but I've also found some pretty great companies that I'll be applying to as they're pretty recognizable and having an internship with them would stand out on a resume.

### Rad Resources
I've been collecting a bunch of random resources for design/development for awhile now. Recently, I shared that listing on [Dev.to](https://dev.to/) and it seemingly got shared on their twitter:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">🔥 Rad Resources 💯 <br>{ author: <a href="https://twitter.com/modayilme?ref_src=twsrc%5Etfw">@modayilme</a> }<a href="https://t.co/C2H1tKJof7">https://t.co/C2H1tKJof7</a></p>&mdash; The Practical Dev (@ThePracticalDev) <a href="https://twitter.com/ThePracticalDev/status/966544329559900161?ref_src=twsrc%5Etfw">February 22, 2018</a></blockquote>

A good number of favoriters/retweeters were bots, but still nice to have it read by others.

Here's the link to the listing reposted on this site's blog: [Rad Resources](https://www.modayil.me/blog/rad-resources/).

### Netlify + Netlify CMS

Last update, I mentioned writing a backend using Wordpress's REST API, but there were some issues I had with using Wordpress that wasn't going to be solved unless I was willing to fork over some 💰.  I wasn't. After watching some videos by Scott Tolinski on [LevelUpTutorials](https://www.leveluptutorials.com/), I was able to connect my existing site to Netlify, so whenever the github repo detects a change, it'll make Netlify rebuild the Gatsby site and repost it live. In addition, I have enabled a Netlify CMS that makes editing files sooo much easier than before in my code editor.

I was also able to enable HTTPS through a one-click option in Netlify (which just linked up a certificate from Let's Encrypt which was free anyways).

### New Project
I'm working with Mongo, Express, and Node to create a fitness application. Coding starts this week. 🎊

Also realized something about my current tech stack:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">The code stack I&#39;m aiming for is the MERN stack (Mongo, Express, React, and Node), but I&#39;ve only gone through the Mongo, Express, and Node portions as a part of this course I&#39;m taking. So right now, as kind of weird as it sounds... I&#39;m a MEN stack developer.</p>&mdash; Benjamin Modayil 👨‍💻 (@modayilme) <a href="https://twitter.com/modayilme/status/966848912572198912?ref_src=twsrc%5Etfw">February 23, 2018</a></blockquote>

### Personal Project
I'm working on something that was inspired partially by GatsbyJS (particularly its plugin ecosystem). I'm creating myself a personal dashboard with a bunch of utility helpers: todo list, calendar, pomodoro, habit tracking, meal tracking, and etc. Now it sounds all random, but I'm working on the optionality of all these pieces. If you don't need a meal tracker, just disable it. Or maybe you want something custom, abide by the code-style guide and post a new plugin for a notepad.

Obviously it's loose and broad right now, but I just started and it'll make sense more once I have something to show for it.

👋 See y'all next time.
