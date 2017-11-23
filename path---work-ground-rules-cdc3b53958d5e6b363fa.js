webpackJsonp([93321741925569],{336:function(e,t){e.exports={data:{markdownRemark:{id:"/Users/benjaminmodayil/Documents/sites/modayilme_gatsby/src/pages/posts/work/09-22-2017-second-blog.1/index.md absPath of file >>> MarkdownRemark",html:'<h2>Let’s set some Ground Rules</h2>\n<p>Get it? Like it’s a pun… and the title of the project.</p>\n<p>It was an ongoing joke for the project. At Viget, interns aren’t expected to fetch coffee, or do miscellaneous tasks, we were there to learn and create something cool.</p>\n<p>For this project, I was one of two Front-End Developers on a team of interns with varying roles. On top of the Front-End, we had a copywriter, UX designer, designer, and rails developer.</p>\n<p><img src="/8e46de9422495eaabb8b1b1570ee0d00.gif" alt="List example"></p>\n<h2>Lessons Learned</h2>\n<p>We had many lessons learned, but the following highlights a few. On top of it all, we were a team spread over three locations fighting to stay on the same page and to progress forward.</p>\n<h3>Collaboration</h3>\n<p>Working with a variety of people tends to be a problem when lines aren’t drawn. When you have a specific role, in my case FED. It’s clear that you don’t necessarily have a role in the product direction, but are the one helping build the product.</p>\n<p>Problem was that each intern, while having specific UX, DESIGN, COPY, FED, and DEV roles, had a say in what we wanted to make.  While it was awesome to have that power, it was hard to collaborate when each intern wanted to take our Coffee website in different directions.</p>\n<q>\n  We should teach people how to use an aeropress!\n</q>\n<q>\n  We should teach people how to make fancy coffee drinks!\n</q>\n<q>\n<strong>We should teach people how to make good coffee with the tools they already have.</strong>\n</q>\n<p>In the end, we each learned to show a little compromise and rally around our unifying idea, <strong>coffee</strong>.</p>\n<h4>Two FEDs?!</h4>\n<p>An aspect of this collaboration issue was that there were two front-end developers for the intern class.</p>\n<p>Initially, my worry was that there would be problems of workload and someone else would be getting to code the part of the website that the other wanted to. This didn’t end up being the case. The other Front-End developer, Cyron, was great to work with. We had great back and forths that made the project smooth to work on.</p>\n<p>Time did end up becoming an issue, as our designer had a family reunion to China that couldn’t be avoided in the middle of her design phase, but despite this, she still worked hard in providing us the comps that we needed.</p>\n<h4>Git Gud</h4>\n<p>There was an aspect of Git that I never really tackled before. I knew how to setup a project, commit, push, and pull, but soon realized I didn’t know much about Git in the context of a team.</p>\n<p>It all came down to one command that at least two of the three total developers didn’t use as much <code>git rebase [branch]</code>.</p>\n<p>We ran into issues early on where rebasing became a long overdrawn process and we would have two or three people on a call just going through all the merge conflicts created in the process. </p>\n<p>Eventually, we all got on the same page with <code>git</code> usage in the project and things started to go smoothly 👌🏾.</p>\n<h3>SVG</h3>\n<p>Our biggest time-consumer for the FED build cycle were working with SVGs.</p>\n<p>The first issue was getting everyone on the same page about SVGs. At the start of the project, we knew we wanted to use them for animation as we originally intended the site to be performant, but there was a FED/Designer divide on how to go about these SVGs. Common issues with SVG handoffs seems to deal with how many node-points a path has, layer naming, flattening of paths, and random things in between. Plus when you’re going to be animating something, there is a need for the SVG file to be accounting for any animation.</p>\n<p>With that was the issue of SVG programs. The original vectors were created with Illustrator CC, but to work with the files, the FEDs were limited to Figma. I even took them from Illustrator and brought them into Sketch. This created huge problems as we didn’t know about it at the time, each program handled SVG exports slightly differently.</p>\n<p><em>Here’s a good podcast from <a href="http://shoptalkshow.com/episodes/270-svg-sketch-peter-nowell/">Shoptalk</a> that discusses this a little bit.</em></p>\n<p>Among our issues, when it came time to finally get our animations working, they had issues rendering in specific browsers. Chrome for example would render out one of our SVGs into looking like it exploded into sharp shards while Safari rendered normally. In the end, we removed the unreliable SVGs and kept the ones the worked well due to the time we had left.</p>\n<p>The whole experience of working with SVGs on this project sure makes me want to reread Chris Coyier’s book <a href="https://abookapart.com/products/practical-svg">Practical SVG</a>.</p>\n<p>This also made me realize that it’s best to minimize SVGs by hand. Well, after getting a decent export. In Illustrator/Sketch/Figma/whatever, there are tons of different ways of compressing your SVG, whether that’s combining paths, flattening paths/layers, or just removing unnecessary things like that raster <code>.jpg</code> pattern a designer included in without realizing that would ruin the idea of a scalable vector…</p>\n<p>From there there are great tools that can take things further like <a href="https://jakearchibald.github.io/svgomg/">SVGOMG - SVGO’s Missing GUI</a>, but perhaps we were too liberal with trust in the compressor for handling our SVGs. Sometimes it’s better to be exporting by hand. SVG compressors tend to copy similar elements and use <code>link</code> to be frugal with space. The problem with this is that a good number of times we couldn’t debug in the browser because the usage of <code>link</code>  would place us into the <strong><a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM">shadow DOM</a></strong>. <em>Insert Stranger things music</em></p>\n<h2>Personal Pride</h2>\n<span class="md-float ">\n<span class="md-float--left__text">\n<p>My favorite portion of the website was figuring out the <a href="https://groundrules.co/devices">Machines</a> portion of the site. What made this page interesting was that it was a pretty interactive page with tons of tabs. When one of the machines were clicked, they would bring up an interactive problem statements that could be clicked on and allow a user to peer within for an answer and even for some of these problem statements were cute coffee-related animations.</p>\n</span>\n<span class="md-float--left__asset">\n<img src="/e868e0b99d9efdeec6eff32569e81af1.gif" alt="List Example" width="439" height="377">\n</span>\n</span>\n<p>An interesting issue for this page was to find a way to respect the reading order of the list items. The order of items the designer gave was a top to down then left to right ordering of list items. When using floats, you need to be working with a left to right then top to down approach. The designer was totally okay with changing the order of items to work with the limitations of using floats, but I figure out a way of using rails templating to preserve the order by rendering two lists based on the data coming from our ActiveAdmin CMS/DB. It’s nothing anyone would notice, but felt like a great solution to a tricky ordering solution that could only be solved with templating.</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 26.20817843866171%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAAfElEQVQY062P2woDIRBD/f8ftTrjKoJ4QU11YJctfSlsAweDBJJRpRSQtSAiGGPAzOJ5EULA1hgDKSX5f60MEcM5B2tJ/KmdU3NOMff3Caq1BpY2C394WbiJMX4055xljVm5fcmxst573HUt/Ceq1iqNG621rOu9fzX/qje7hYcJuUIrjgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="List example"\n        title=""\n        src="/static/4749f83c75768ad5cad3ddf22235ff9f-8be62.png"\n        srcset="/static/4749f83c75768ad5cad3ddf22235ff9f-f3265.png 200w,\n/static/4749f83c75768ad5cad3ddf22235ff9f-d937d.png 400w,\n/static/4749f83c75768ad5cad3ddf22235ff9f-8be62.png 800w,\n/static/4749f83c75768ad5cad3ddf22235ff9f-fa181.png 1076w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h3>Accessibility</h3>\n<p>This was my first project that I got to make more accessible. The goals were to make the website more accessible. To do this we used a combination of <code>ARIA</code>  attributes. If you check out the machines <a href="https://groundrules.co/devices">page</a> you’ll notice that you can tab all the way through the page. </p>\n<p>You’ll probably notice the red outline or dotted outline when selecting elements with the keyboard. If you were to select another element with your mouse there is no outline. Why do this differently for alternate inputs? Because apparently the outline was too ugly. So this was the FED approach to still incorporate accessibility despite feedback to having any outline at all. So only if someone needed to navigate the website with their keyboard would any tab outlines show. This was done using Viget’s <a href="https://ten1seven.github.io/what-input/">WhatInput</a> which allows you to style/create interactions based on the mouse, keyboard, or touch events.</p>\n<h2>Summary</h2>\n<p>I’ll probably re-edit this page and provide more examples as I see fit, but here’s a summary of the things FEDs had to tackle in this project:</p>\n<ol>\n<li>Collaboration, especially with <code>git</code></li>\n<li>SVG animations and debugging those animations.</li>\n<li>How to make an interactive site accessible.</li>\n</ol>\n<p><img src="/137a832215cf994a5fde170d9fe04543.gif" alt="List example"></p>\n<p>Some other things I’ll just touch on shortly were two things:</p>\n<ol>\n<li><a href="https://codepen.io/">Codepen</a> as a tool to quickly prototype ideas and animations.</li>\n<li><a href="http://getbem.com/naming/">BEM — Block Element Modifier</a> as a method of making our classes more understandable to anyone else working with the project.</li>\n</ol>\n<p>If you’re looking for other writings about the execution of this project check out the <a href="(https://www.viget.com/articles/world-meet-ground-rules)">introduction of GroundRules</a> by Elyse or a <a href="http://vivianzwang.com/ground-rules">design case study</a> by Vivian.</p>',frontmatter:{path:"/work/ground-rules",title:"GroundRulesCo",description:"Ground Rules is a site built by the Viget Interns of 2017. Our goal was show others how to make better coffee using the tools they already had at our disposal.",textDate:"August 2017",tldr:"Interns make a site showing others how to make their own coffee",website:"https://groundrules.co/",pen:null,headerColor:"#2D4DAF",linkColor:"#FD6264",textColor:"#000000",textBackground:"#FFFFFF",metaBackground:"#1D278B",imageNote:'Design/Illustration by <a href="http://www.vivianzwang.com/ground-rules">Vivian Wang</a>',svgName:"IconKeurig"}}},pathContext:{path:"/work/ground-rules",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---work-ground-rules-cdc3b53958d5e6b363fa.js.map