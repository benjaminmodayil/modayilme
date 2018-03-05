---
layout: work
type: work
title: "Silent Sentinels  <span role=\"img\" aria-label=\"\" alt=\"\">\U0001F4AA</span>"
tldr: A Craft CMS learning project.
description: >-
  To learn Craft and modularizing Javascript practices as a part of Viget’s
  apprenticeship program.
headerColor: '#0b5166'
metaBackground: '#372e4a'
linkColor: '#F85303'
textColor: '#000000'
textBackground: '#F2F2F2'
website: 'https://github.com/benjaminmodayil/silent-sentinels-craft'
date: 2018-03-04T20:21:29.623Z
path: /work/silent-sentinels
---
_Sorry to say, but there is no live version of this project. If you wish to check this project out, feel free to _[_email me_](https://www.modayil.me/contact)_ and I'll spin something up behind a password lock._

I’ve had a very light experience with CMSs in the past. For one of my classes we worked with creating Wordpress themes. There wasn't any intense logic. We just made blog posts editable, with an index page of posts, and all within a custom theme. The extent of each Wordpress setup varied to each person’s interest, but this primarily was it. Albeit being a small project, what annoyed me about the templating structure within WordPress was the syntax involved:

_Random post loop syntax from Wordpress Codex_

```twig
  <?php while (have_posts()) : the_post(); ?>
     <div class="post">
      <h2 id="post-<?php the_ID(); ?>">
<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>">
<?php the_title(); ?></a></h2>
   <small>
     <?php the_time('F jS, Y') ?> 
        <!-- by <?php the_author() ?> -->
   </small>
 </div>
<?php endwhile; ?>
```

Learning the above hard to read Wordpress template code can prepare you for anything. But if you’re looking for the best developer experience, it’s definitely Craft. Just check this basic loop below.

_Entry loop (Craft uses ‘entries’ instead of usual ‘posts’ syntax from Craft documentation_

```twig
{% for entry in craft.entries.section('blog').find() %}
    <article>
        <h2><a href="{{ entry.url }}">{{ entry.title }}</a></h2>
        {{ entry.body }}
        <p>Written by {{ entry.author }} on {{ entry.postDate|date('M d, Y') }}</p>
    </article>
{% endfor %}
```

The examples are not exact correlations, but I think it’s agreeable that the second TWIG syntax that Craft uses is easier to digest.

One of the highlights of working with Craft is using Twig. According to its website, Twig is _“like an alternate syntax for PHP”_. Personally, Twig definitely reads better than straight-up PHP like the above examples demonstrate.

## The Setup

This Craft project was part of Viget’s apprenticeship program in which I was their front-end development apprentice for 10 weeks. The project was done with the goal of learning [Craft CMS](craftcms.com) and making sure I was coding with web standards in mind.

### Before the code

To begin my mentor had me plot out the different types of pages to their corresponding Section types in Craft’s backend. And then figure out all corresponding fields on a page to a field type in Craft. Here are some pictures regarding that process:

![Craft Single](/assets/c-single.jpg)

(The Homepage was plotted as a Craft Single)

![Craft Channel](/assets/c-channel.jpg)

(The Sentinel Bios page was plotted as a Craft Channel)

![Craft Structure](/assets/c-structure.jpg)

(The Sentinel Timeline pages were plotted as a Craft Structure)

After figuring out the different Craft section types, I proceeded to spend some time understanding Craft.

## Making sense of Craft

Every CMS describes page and content types in different ways, Craft is not different, but personally, I found understanding Craft’s terminology easier than other systems. Especially since it abstracts the complicatedness of pure PHP with Twig.

In Craft, **sections** define containers for your content. Editable content is defined in Craft as **entries**.

Craft’s section types are: 

* Singles: “one-off” types of content (about page or a homepage)
* Channels: similar content like a blog 
* Structures: more complex content 

Using Craft toggles to dictate alternate versions of things

* show option in craft,
* then  show correlation in code

#### K.I.S.S. and D.R.Y.

Being used to Jekyll templating and the storing of partials, it took me awhile to get used to doing these kind of things with Craft/Twig. Eventually, separating different blocks of content with their specific CMS logic made sense. Here's short example of a matrix block in Craft that was separated to a partial:

```twig
{% switch block.backgroundPosition %}
  {% case 'left' %}
    {% set backgroundPosition = 'background__img--left' %}
  {% case 'right' %}
    {% set backgroundPosition = 'background__img--right' %}
  {% case 'center' %}
    {% set backgroundPosition = 'background__img--center' %}
{% endswitch %}

<section class="timeline__block quote-image">
  <div class="timeline__block__inner wrapper section-padding">
    <blockquote>
      <span class="blockquote-leads">
        {{ block.leadIn }}
```

Above you can see the logic that's hooked up with the CMS. If the user clicks one of the below buttons... 

![CMS toggle to select background image](/assets/ss-bg-pos.png)

... then the `switch` logic takes affect and applies a class to a line of code below (unseen in example).

Also a late addition to the project was the use of macros to clean image handling better. I was creating so many image sizes for different viewports that it got to a point where I needed to separate the logic to a macro in Craft, which is like a reusable function. Below is a macro for creating a source in a `<picture>` element.

```twig
  {% macro pictureSource(image, sizeObj, minOrMax, media) %}
    <source srcset="{{ image.first().getUrl(sizeObj) }}"
      media="({{ minOrMax }}-width: {{ media }}px)"
    >
  {% endmacro %}
```

## Accessibility

Accessibility was something new that I never intentionally thought of when going through a project. The only accessibility practice that I knew before doing this project pertained to writing text in \`alt\` attributes. This project I focused on the interactions a user would have with navigating the site and made it keyboard accessible with JS and some HTML \`tab-index\` attributes. 

The navigation became an issue for me for tablet to mobile sizes as it was triggered through a hamburger menu. The specific issue pertained to keeping the tab focus on the items of the nav menu despite the whole site being present on the DOM. **ex: **_User tabs and opens the fullscreen navigation but as they keep tabbing, the focused element is not visible as it's on an element not visible and behind the navigation._

The solve was to trap focus within the navigation, but provide easy exits with the keyboard.

![Demonstration of keeping the focus locked in the menu.](/assets/ss-a11y-nav.gif)

## Learning something new

As this was a learning project, I took a leap and learned two rad new things that I’ll be incorporating into projects in the future. The use of Intersection Observer API + Smoothscroll.

### Intersection Observer API

Or as I like to call it, the IO-API. I’m trying very terribly hard to coin it that way. So far only I am the only sayer. 
<span role="img" aria-label="dunno" alt="dunno">¯\_(ツ)\_/¯ </span>

The IO-API serves as a new way for the  browser to detect when DOM elements are currently within the viewport and even to a certain threshold/percentage it is in.  It’s pretty nifty using the IO-API. And it’s being used online for a variety of things, namely lazy-loading assets when they’re actually needed plus scroll-library interactions. It’s not perfect, not great for all use cases, and at the moment requires a [polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill), but it fulfills a performance & simplicity need of viewport detection that wasn’t as natively* there before.

Here's a small presentation that I gave on the [IO-API](https://drive.google.com/file/d/1fN6Q-MRecDrYLFtDYMt9bCQZhV507RmO/view?usp=sharing) for some of the Front-End Developers at Viget.

I used the IO-API in this project to add highlight classes on the landing page's nav items as one of the corresponding sections appeared on the screen.

![Navigation items are highlighted as a user scrolls the page.](/assets/ss-scroll.gif)



I also used a smoothscroll polyfill to get smooth scrolls when clicking on one of those nav items. Here's a link to the implementation that I used: [SmoothScroll](http://iamdustan.com/smoothscroll/).



## Small Reflection

I noticed a few things doing this particular project. Most notably was the ease of Craft. Craft gives you the ability to write things from an approachable Twig focus. So you don't need to know much, if any, PHP. Because of this, Craft is more approachable to front-end developers that might be scared about messing with Wordpress. Other than a few Google queries whenever issues come up (as they do on any new project), building a site with Craft is easier than ever, and holds true with the latest Craft 3 release.

One thing that can become an issue to using Craft is licensing. Unlike Wordpress, Craft requires you purchase a Client or Pro license for $199 or $299 respectively. Unless you're a developer and coding a site for someone other than yourself, there's no way around this. This might make it difficult for small time clients to justify paying for and actually leads into another issue: justifying to your client why Craft is a better option than Wordpress for a CMS. But I rather not reinvent the wheel and things that have already been said. If you're interested in learning about some differences and reasons to check out Craft, check out this article from [Viget](https://www.viget.com/articles/craft-vs.-wordpress-the-good-the-bad-and-the-ugly-data/).

All in all, this project was fun and tricky to build as there were a TON of background images and different problems to solve with Craft. Hopefully, the future of CMS development looks more like Craft and with new and upcoming things like [Wordpress Gutenberg](https://wordpress.org/gutenberg/), it might.
