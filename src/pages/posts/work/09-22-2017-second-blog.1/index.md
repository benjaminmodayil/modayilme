---
layout: work
path: '/work/ground-rules'
title: 'GroundRulesCo'
tldr: 'Viget Interns make a website about coffee showing others how to make coffee'
type: work
website: https://groundrules.co/
themeColor: '#2D4DAF'
imageNote: Design/Illustration by <a href="http://www.vivianzwang.com/ground-rules">Vivian Wang</a>
svgName: 'IconKeurig'
---
<div class="post-note">
<em>Note:</em>
<p>This site is currently being worked on (as of October 31st 👻). If you've managed to find your way here, stay tuned for some 👌🏾 looking things on November 6th.</p>
</div>

*[Visit the site](https://www.groundrules.co/)*

I wish the tl;dr above was created by me, but it was created by our amazing copywriter [Elyse](https://www.linkedin.com/in/ekamibayashi). 

It was an ongoing joke for the project. At Viget, interns aren't expected to fetch coffee, or do miscellaneous tasks, we were there to learn and create something cool.

The purpose of this post is to convey things that I've learned about Front-End Development and things I struggled learning.

If you're looking for other writings about this project check out the introduction of this project to the world or a design case study on it.

- [World, Meet Ground Rules](https://www.viget.com/articles/world-meet-ground-rules) by Elyse
- [Ground Rules (design case study)](http://vivianzwang.com/ground-rules) by Vivian

## Issue 1: Collaboration
Working with a variety of people tends to be a problem when lines aren't drawn. When you have a specific role, in my case FED. It’s clear that you don’t necessarily have a role in the product direction, but are the one helping build the product.

Problem was that each intern, while having specific UX, DESIGN, COPY, FED, and DEV roles, had a say in what we wanted to make.  While it was awesome to have that power, it was hard to collaborate when each intern wanted to take our Coffee website in different directions.

*We should teach people how to use an aeropress!*

*We should teach people how to make fancy coffee drinks!*

***We should teach people how to make good coffee with the tools they already have***

In the end, we each learned to show a little compromise and rally around our unifying idea, **coffee**.

### Two FEDs?!
An aspect of this collaboration issue was that there were two front-end developers for the intern class.

This wasn’t an issue in of itself,  it was actually a delight to work with another FED. 

> The following will be rewritten and added upon by November 6th (official launch date)

- project split
	- time 
- Git Gud
  - We all had issues working with developers on the same project

- SVG
  - Issues
    - Weird transformations in certain browsers
    - Issues where the tool for compression would change the colors of the initial design
  - Learned
    - Better to export and minimize by hand
    - don't let your compressor clean the IDs of the layer names in your SVG, this will cause issues with other SVG's using those same ID names.

- General
  - Codepen is amazing at quickly prototyping projects
  - BEM naming standard