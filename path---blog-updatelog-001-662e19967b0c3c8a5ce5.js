webpackJsonp([0xbec5e1c67b8f],{325:function(e,t){e.exports={data:{markdownRemark:{id:"/Users/benjaminmodayil/Documents/sites/modayilme_gatsby/src/pages/posts/blog/01-31-2018-update-log-001/index.md absPath of file >>> MarkdownRemark",html:'<p>Hey friends reading this! Albeit my Google Analytics will say is nobody… This is the first of many update logs.</p>\n<p>Here, I’ll try providing information on my current status. This could entail professional and personal updates, or whatever constitutes sharing. The goal of these update logs is to journalize thoughts, learnings, musings as I become a full-stack developer, and even beyond, but without going into detail as a normal topical blog post. So in a sense, these could be thought of like “show-notes” that you might see on a particular podcast episode <em>cue Truman show vibe</em> (also comparable to a “stand up”).</p>\n<p>This first one will be pretty long though, just because it’s collecting what I’ve been doing since my apprenticeship.</p>\n<h2>Update from November 26th to January 31st</h2>\n<h3>Professional Updates</h3>\n<h4>Wordpress</h4>\n<p>I’ve been doing quite a bit with learning Wordpress and its ecosystem, but I’m a little stopped on a learning project with Wordpress as I’m taking classes for fullstack development at the moment. I decided to learn Wordpress as it’s the CMS that tends to be in demand with digital agencies/ or freelance projects. As I’m coming from <a href="craftcms.com">CraftCMS</a> (a superior CMS if you asked me), I’ve been using <a href="advancedcustomfields.com">ACF</a> (Advanced Custom Fields) plugin to create sites in a similar fashion. I haven’t dug too much into Wordpress’s new (beta) Gutenberg editor, so I’m hoping it leads to an easier development process whenever I get back to Wordpress Development.</p>\n<h4>Readings</h4>\n<ul>\n<li>\n<p><strong>Accessibility for Everyone</strong> by <em>Laura Kalbag</em>: Gave a good general overview of what to use on the web when it comes to accessiblity. Abookapart books tend to lack in depth, but still gives you general directions when you’re mad googling.</p>\n</li>\n<li>\n<p><strong>The New CSS Layout</strong> by <em>Rachel Andrew</em>: Learned a lot about CSS Grid and some flexbox techniques I never knew before.</p>\n</li>\n<li>\n<p><strong>Atomic Design</strong> by <em>Brad Frost</em>: Design systems are a little out of my wheelhouse, but Brad Frost’s book was a great overview into his coined methodology.</p>\n</li>\n</ul>\n<h4>CSS Grid</h4>\n<p>Wes Bos recently launched his <a href="cssgrid.io">CSS Grid course</a> and I was lucky to get onto the beta. It’s a short and practical course for deepdiving into it. I actually got to use it on an learning API project (linked below).</p>\n<h4>Email Newsletters</h4>\n<p>I’ve seen enough code for newsletters to know that I hate it. I’ve also heard countless people on the internet complain about email development that I decided to take another path. Enter <a href="mjml.io">MJML</a>. It’s a email framework that translates its proprietory tags into email compliant code. Here’s an <a href="https://codepen.io/modayilme/pen/RxPBdb">example newsletter</a> showing the code it exports. I have a blog post in the works for this one.</p>\n<h4>Personal Site development</h4>\n<p>I love <a href="gatsbyjs.org">GatsbyJS</a> more and more whenever working with it. Here are some updates I’ve been completed the past month or so:</p>\n<ul>\n<li>Refreshed this site’s codebase into shorter components.</li>\n<li>Figured out how to use an API in React all by myself with a Codepen feed on the homepage.</li>\n<li>Solved my GroundRules SVG animation issue with a SVG handler for React (<a href="https://github.com/gilbarbara/react-inlinesvg">Github link</a>)</li>\n<li>Got my site to a 99% on page speed insights and fixed some accessibility issues detected by AXE</li>\n</ul>\n<p> I’m currently working on a Wordpress API integration, but I’m holding out until Gutenberg becomes more stable, just in case I have to update the integration again.</p>\n<h4>Fullstack Learning</h4>\n<ul>\n<li>\n<p>Finishing an API project using <a href="https://newsapi.org/">News API</a></p>\n<ul>\n<li>View my progress here: Link to <a href="https://github.com/benjaminmodayil/API-Capstone">Github repo</a> and <a href="https://benjaminmodayil.github.io/API-Capstone/">demo site</a></li>\n</ul>\n</li>\n<li>Progressing through Node development</li>\n<li>covered creating/reading/updating/destroying data with REST API endpoints</li>\n<li>currently learning testing with mocha and chai.</li>\n<li>almost ready for my second capstone project (3 total) and on track to graduate wwaaay early (because of prior experience).</li>\n</ul>\n<h3>Personal Updates</h3>\n<ul>\n<li>Had a nice family trip to India (<a href="https://www.instagram.com/p/BcTEyWlgwHNIQ_Slmhhzktdu5osGaKRSeE8nLs0/?taken-by=modayilme">pictures</a>)</li>\n<li>Trying to blog more as a way to contemplate ideas deeper.</li>\n<li>Going for my permit soon and hopefully I’ll actually get practice behind a wheel so I can get my license ASAP.</li>\n<li>Trying to eat healthy again. I don’t get much exercise anymore, so I need to adjust the scales somehow. Pun intended.</li>\n</ul>\n<h2>Requests</h2>\n<p>Prayer. Need lots of it. 🙏</p>\n<p>End of update 👋</p>',frontmatter:{date:"31 January, 2018",title:"Update Log 001",tldr:"Ben does a stand up.",path:"/blog/updatelog/001"}}},pathContext:{path:"/blog/updatelog/001",prev:{html:'<h2>To learn Javascript</h2>\n<p>Around my Junior year of college, I wanted to learn Javascript. I already knew how to do basic D.O.M manipulation through jQuery, but I felt as though I were leaning a crutch. </p>\n<p>Around this time as well, I’ve been hearing more and more about the whole jQuery size dependency issue and realized if all I was needing Javascript was for adding, removing, and toggling classes, then why would I resort to use such a unnecessary dependency just to make things interactive? Why not write the extra code to trigger something after all these were how adding a class looked for jQuery and vanilla Javascript.</p>\n<p>Assuming you had a nav stored as a variable with both:</p>\n<p>jQuery</p>\n<pre><code>$nav.addClass( \'color--red\' );\n</code></pre>\n<p>javascript</p>\n<pre><code>nav.classList.add(\'color--red\');\n</code></pre>\n<p>Yup. It was that easy. But at the time, a StackOverflow made me worry about support and I resorted to use small pre-written functions for this project. </p>\n<h2>It was a text-based game</h2>\n<p>The core-idea of this project was to create a text-based game with ambient visuals. As the end goal was for something to be displayed on a phone, I realized screen real-estate should be devoted to the text and any visuals should be second in nature to a user.</p>\n<img src="/545932a857c16d50c705390086e31740.gif" alt="Example Prompt" style="width: 50%" width="329" height="541">\n<p>My primary goal was to learn more about Javascript. Secondary, was to create a somewhat coherent story, which I did, but in an “episode” format.  So in reality, the game feels short, but it is as most “episode” like games tend to be.</p>\n<p>One of the difficulties was figuring out the best way of storing game data. I wanted to at the time explore using JSON files, but I honestly just didn’t get Javascript that much at the time to do this, and in the end, I just stored the game text/options in the same <code>.JS</code> file.</p>\n<img src="/d149198da05635814a5096f38857c235.gif" alt="Game Intro" style="width: 50%" width="331" height="539">\n<p>Looking back, there’s a ton of things that I could have done better, but that’s the ongoing issue with development:</p>\n<blockquote>\n<p>There’s always something that can be done better, but do you have the time or knowledge to make it better?</p>\n</blockquote>\n<p>My issue was mainly the latter, knowledge. Because of this, my plan is to add to this project with the knowledge I have now of better patterns within Javascript.</p>\n<h2>Struggles</h2>\n<p>Two struggles were precedent throughout the project.</p>\n<ol>\n<li>Learning Javascript.</li>\n<li>Writing a decent story and mapping out choice logic.</li>\n</ol>\n<p>Here are some screenshots of the latter:</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.90736342042756%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz52SXW+CMBSG/f+/axcm2+I0U+SrtIVWig4sB3R370rZh0smLl48gaQ9D+e8nFl37tGdT9+c3s+gUwdzMKht4989HaElR0uwR8KxJjR7Ql05SsKbdijCbBDavsfR08F2/XjoEPPPi7uR2oyS5jAKvdi2sNSi7Vv3YS/scA35SFA7DZELSCUhCgFVql934jRGGIeIkgjbeDstVCtCtJQIFgzhkkNEJURY+tEOxdhxGMTgTIIlHFkqpoX61RUsBHisPGkooXjl8xzOh0yH8S+ZFJaRyzHRYBkH525kIWFM5bO6VjMp3HM38lOBdF2Ab7V/5om5XzisQzB3Gb4wT7KWqArrV+cu4VC4eSgQrsYfIiMDk43CQhdgnIGJDLnK0bTNbaEfWxCo/+nIWkL+TK7bHNFKgG0UskCj0vX/hH+xCwgyNuCh9p1X+RHGcXOxr0bh1uXgdvFrfS75AOTNjSGVsURIAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mind-Node - plotting game option logic"\n        title=""\n        src="/static/b6e0e19a2773c21028eaf0a5f5dedf43-90c66.png"\n        srcset="/static/b6e0e19a2773c21028eaf0a5f5dedf43-00ad5.png 200w,\n/static/b6e0e19a2773c21028eaf0a5f5dedf43-da9b7.png 400w,\n/static/b6e0e19a2773c21028eaf0a5f5dedf43-90c66.png 800w,\n/static/b6e0e19a2773c21028eaf0a5f5dedf43-cd79c.png 842w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.90909090909091%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/UlEQVQoz6WSzW6DMBCE8/4P1ktvOfTSJiUJNgbW9tpL0uPUPyKqSlBRcxh5BcvH7ox3+uigG0oawU4wfU1PaTcXbAXqQBgN31+aQ0Cv3OrHQQLiNT4GznKmTimTwA8CuQlsJ2UL9TmWuj97tG8OH68G1DM4BpAnWLbrQE+C4AXUVujvPrlK6c2yP84lsE+rJz9Pe4vmJTXpBNWxTEc6WXBmdCdKsmCO6x4uwEOdLgOz8srmQttDWRjOFZTPf6X80KOhQh17+OifA84BRamG52u12MKnq9USOMRtQPXuUhgDhpZLUKVWDFKxhEKX+sO8zSbgX8p2dI2Fo3B/9g2QDUnVRRaX6AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mind-Node - plotting story logic"\n        title=""\n        src="/static/22dcb5d725dea95ae72dccac3a3a6323-90c66.png"\n        srcset="/static/22dcb5d725dea95ae72dccac3a3a6323-00ad5.png 200w,\n/static/22dcb5d725dea95ae72dccac3a3a6323-da9b7.png 400w,\n/static/22dcb5d725dea95ae72dccac3a3a6323-90c66.png 800w,\n/static/22dcb5d725dea95ae72dccac3a3a6323-7da25.png 1100w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h2>Here’s a little sneak peak</h2>\n<p>Below <span role="img" aria-label="point down"></span>👇🏾 is a preview of a little redesign of the project that I’m working through. Let me know if you wish to see the original code and I can push it up to Github sometime.</p>\n<iframe height="700" scrolling="no" title="Lighthouse Hill" src="//codepen.io/modayilme/embed/ybXErO/?height=265&amp;theme-id=dark&amp;default-tab=result&amp;embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href=\'https://codepen.io/modayilme/pen/ybXErO/\'>Lighthouse Hill</a> by Benjamin Modayil (<a href=\'https://codepen.io/modayilme\'>@modayilme</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>',id:"/Users/benjaminmodayil/Documents/sites/modayilme_gatsby/src/pages/posts/work/11-05-2017-lighthouse-hill/index.md absPath of file >>> MarkdownRemark",frontmatter:{layout:"work",title:'Lighthouse Hill Preview  <span role="img" aria-label="" role="">🎮</span> ',tldr:"Ben learns Javascript by making a game.",path:"/work/lighthouse-hill-preview",type:"work",external:null}},next:null}}}});
//# sourceMappingURL=path---blog-updatelog-001-662e19967b0c3c8a5ce5.js.map