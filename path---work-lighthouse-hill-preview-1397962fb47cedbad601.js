webpackJsonp([0x891974274c8e],{334:function(e,a){e.exports={data:{markdownRemark:{id:"/Users/benjaminmodayil/Documents/sites/modayilme_gatsby/src/pages/posts/work/11-05-2017-lighthouse-hill/index.md absPath of file >>> MarkdownRemark",html:'<h2 id="to-learn-javascript"><a href="#to-learn-javascript" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>To learn Javascript</h2>\n<p>Around my Junior year of college, I wanted to learn Javascript. I already knew how to do basic D.O.M manipulation through jQuery, but I felt as though I were leaning a crutch. </p>\n<p>Around this time as well, I’ve been hearing more and more about the whole jQuery size dependency issue and realized if all I was needing Javascript was for adding, removing, and toggling classes, then why would I resort to use such a unnecessary dependency just to make things interactive? Why not write the extra code to trigger something after all these were how adding a class looked for jQuery and vanilla Javascript.</p>\n<p>Assuming you had a nav stored as a variable with both:</p>\n<p>jQuery</p>\n<pre><code>$nav.addClass( \'color--red\' );\n</code></pre>\n<p>javascript</p>\n<pre><code>nav.classList.add(\'color--red\');\n</code></pre>\n<p>Yup. It was that easy. But at the time, a StackOverflow made me worry about support and I resorted to use small pre-written functions for this project. </p>\n<h2 id="it-was-a-text-based-game"><a href="#it-was-a-text-based-game" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>It was a text-based game</h2>\n<p>The core-idea of this project was to create a text-based game with ambient visuals. As the end goal was for something to be displayed on a phone, I realized screen real-estate should be devoted to the text and any visuals should be second in nature to a user.</p>\n<img src="/545932a857c16d50c705390086e31740.gif" alt="Example Prompt" style="width: 50%" width="329" height="541">\n<p>My primary goal was to learn more about Javascript. Secondary, was to create a somewhat coherent story, which I did, but in an “episode” format.  So in reality, the game feels short, but it is as most “episode” like games tend to be.</p>\n<p>One of the difficulties was figuring out the best way of storing game data. I wanted to at the time explore using JSON files, but I honestly just didn’t get Javascript that much at the time to do this, and in the end, I just stored the game text/options in the same <code>.JS</code> file.</p>\n<img src="/d149198da05635814a5096f38857c235.gif" alt="Game Intro" style="width: 50%" width="331" height="539">\n<p>Looking back, there’s a ton of things that I could have done better, but that’s the ongoing issue with development:</p>\n<blockquote>\n<p>There’s always something that can be done better, but do you have the time or knowledge to make it better?</p>\n</blockquote>\n<p>My issue was mainly the latter, knowledge. Because of this, my plan is to add to this project with the knowledge I have now of better patterns within Javascript.</p>\n<h2 id="struggles"><a href="#struggles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Struggles</h2>\n<p>Two struggles were precedent throughout the project.</p>\n<ol>\n<li>Learning Javascript.</li>\n<li>Writing a decent story and mapping out choice logic.</li>\n</ol>\n<p>Here are some screenshots of the latter:</p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 58.90736342042756%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABX0lEQVQoz52SXW+CMBSG/f+/axcm2+I0U+SrtIVWig4sB3R370rZh0smLl48gaQ9D+e8nFl37tGdT9+c3s+gUwdzMKht4989HaElR0uwR8KxJjR7Ql05SsKbdijCbBDavsfR08F2/XjoEPPPi7uR2oyS5jAKvdi2sNSi7Vv3YS/scA35SFA7DZELSCUhCgFVql934jRGGIeIkgjbeDstVCtCtJQIFgzhkkNEJURY+tEOxdhxGMTgTIIlHFkqpoX61RUsBHisPGkooXjl8xzOh0yH8S+ZFJaRyzHRYBkH525kIWFM5bO6VjMp3HM38lOBdF2Ab7V/5om5XzisQzB3Gb4wT7KWqArrV+cu4VC4eSgQrsYfIiMDk43CQhdgnIGJDLnK0bTNbaEfWxCo/+nIWkL+TK7bHNFKgG0UskCj0vX/hH+xCwgyNuCh9p1X+RHGcXOxr0bh1uXgdvFrfS75AOTNjSGVsURIAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mind-Node - plotting game option logic"\n        title=""\n        src="/static/b6e0e19a2773c21028eaf0a5f5dedf43-8be62.png"\n        srcset="/static/b6e0e19a2773c21028eaf0a5f5dedf43-f3265.png 200w,\n/static/b6e0e19a2773c21028eaf0a5f5dedf43-d937d.png 400w,\n/static/b6e0e19a2773c21028eaf0a5f5dedf43-8be62.png 800w,\n/static/b6e0e19a2773c21028eaf0a5f5dedf43-79fcd.png 842w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<p>\n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 800px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 53.90909090909091%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA/UlEQVQoz6WSzW6DMBCE8/4P1ktvOfTSJiUJNgbW9tpL0uPUPyKqSlBRcxh5BcvH7ox3+uigG0oawU4wfU1PaTcXbAXqQBgN31+aQ0Cv3OrHQQLiNT4GznKmTimTwA8CuQlsJ2UL9TmWuj97tG8OH68G1DM4BpAnWLbrQE+C4AXUVujvPrlK6c2yP84lsE+rJz9Pe4vmJTXpBNWxTEc6WXBmdCdKsmCO6x4uwEOdLgOz8srmQttDWRjOFZTPf6X80KOhQh17+OifA84BRamG52u12MKnq9USOMRtQPXuUhgDhpZLUKVWDFKxhEKX+sO8zSbgX8p2dI2Fo3B/9g2QDUnVRRaX6AAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Mind-Node - plotting story logic"\n        title=""\n        src="/static/22dcb5d725dea95ae72dccac3a3a6323-8be62.png"\n        srcset="/static/22dcb5d725dea95ae72dccac3a3a6323-f3265.png 200w,\n/static/22dcb5d725dea95ae72dccac3a3a6323-d937d.png 400w,\n/static/22dcb5d725dea95ae72dccac3a3a6323-8be62.png 800w,\n/static/22dcb5d725dea95ae72dccac3a3a6323-678d4.png 1100w"\n        sizes="(max-width: 800px) 100vw, 800px"\n      />\n    </span>\n  </span>\n  </p>\n<h2 id="heres-a-little-sneak-peak"><a href="#heres-a-little-sneak-peak" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Here’s a little sneak peak</h2>\n<p>Below <span role="img" aria-label="point down"></span>👇🏾 is a preview of a little redesign of the project that I’m working through. Let me know if you wish to see the original code and I can push it up to Github sometime.</p>\n<iframe height="700" scrolling="no" title="Lighthouse Hill" src="//codepen.io/modayilme/embed/ybXErO/?height=265&amp;theme-id=dark&amp;default-tab=result&amp;embed-version=2" frameborder="no" allowtransparency="true" allowfullscreen="true" style="width: 100%;">See the Pen <a href=\'https://codepen.io/modayilme/pen/ybXErO/\'>Lighthouse Hill</a> by Benjamin Modayil (<a href=\'https://codepen.io/modayilme\'>@modayilme</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>',frontmatter:{path:"/work/lighthouse-hill-preview",title:"Lighthouse Hill Preview",description:"This was the result of my senior capstone project (with a little rebranding). Lighthouse Hill is a text-based game with light visuals.",textDate:"May 2017",tldr:"Ben learns Javascript by making a game.",website:"https://codepen.io/modayilme/pen/ybXErO/",headerColor:"#262232",linkColor:"#7E131C",textColor:"black",textBackground:"#F2F2F2",metaBackground:null,imageNote:null,svgName:null}}},pathContext:{path:"/work/lighthouse-hill-preview",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---work-lighthouse-hill-preview-1397962fb47cedbad601.js.map