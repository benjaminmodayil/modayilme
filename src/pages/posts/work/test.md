---
layout: work
type: work
title: Test
tldr: Test
imageNote: Test
svgName: Test
description: Test
website: Test
headerColor: Test
metaBackground: Test
linkColor: '#00000'
textColor: '#000000'
textBackground: '#ffffff'
date: 2018-03-04T16:58:26.062Z
path: /work/silent-sentinels
---
## The Setup

This Craft project was part of Viget’s apprenticeship program in which I was their front-end development apprentice for 10 weeks. The project was done with the goal of learning [Craft CMS](craftcms.com) and making sure I was coding with web standards in mind.

I’ve had a very light experience with CMSs in the past. For one of my classes we worked with creating Wordpress themes. We weren’t doing anything too intense with any crazy logic. We just made blog posts editable, with an index page of posts, and all within a custom theme. The extent of each Wordpress setup varied to each person’s interest, but this primarily was it. Albeit, a small project, what annoyed me about the templating structure within WordPress was the syntax involved:

_Random post loop syntax from Wordpress Codex_

```php
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

Learning these hard to read Wordpress template code can prepare you for anything. But if you’re looking for the best developer experience, it’s definitely Craft. Just check this basic loop below.

_Entry loop (Craft uses ‘entries’ instead of usual ‘posts’ syntax from Craft documentation_

```html
{% for entry in craft.entries.section('blog').find() %}
    <article>
        <h2><a href="{{ entry.url }}">{{ entry.title }}</a></h2>
        {{ entry.body }}
        <p>Written by {{ entry.author }} on {{ entry.postDate|date('M d, Y') }}</p>
    </article>
{% endfor %}
```

The examples are not exact correlations, but I think it’s agreeable that the second TWIG syntax that Craft uses is easier to digest.

To begin, Megan, my mentor had me plot out the different types of pages to their corresponding Section types in Craft’s backend. And then figure out all corresponding fields on a page to a field type in Craft.

![](/static/assets/img_0392.jpg)

\[image:1BAC0819-3C47-409B-B2FB-A73CD9C4239B-86438-000091BAA2C9AE15/IMG_0392.jpg]
(The Homepage was plotted as a Craft Single)
\[image:F1E30089-160D-4C22-A8D6-2DD996C6233B-86438-000091BAB7F0B5E5/IMG_0385.jpg]
(The Sentinel Bios page was plotted as a Craft Channel)
\[image:2ED84A0A-DC4B-45DE-89F4-6A04DA6A01D9-86438-000091BACE86717B/IMG_0386.jpg]
(The Sentinel Timeline pages were plotted as a Craft Structure)

Then I spent some time understanding Craft.

## Making sense of Craft

Every CMS describes page and content types in different ways, Craft is not different, but personally, I found understanding Craft’s terminology easier than other systems. Especially since it abstracted the complicatedness of pure PHP with Twig.
In Craft, **sections** define containers for your content. Editable content is defined in Craft as **entries**.

Craft’s section types are: 

* Singles: “one-off” types of content (About page or a homepage)
* Channels: similar content like a Blog 
* Structures: more complex content 

### Twig Templating

One of the highlights of working with Craft is using Twig. According to its website, Twig is _“like an alternate syntax for PHP”_. Personally, TWIG definitely reads better than straight-up PHP like the first section of this writing shows.

- - -

Using Craft toggles to dictate alternate versions of things

* show option in craft,
* then  show correlation in code

- - -

Macros (this macro is missing a closing tag?)

```twig
  {% macro pictureSource(image, sizeObj, minOrMax, media) %}
    <source srcset="{{ image.first().getUrl(sizeObj) }}"
      media="({{ minOrMax }}-width: {{ media }}px)"
    >
  {% endmacro %}
```

- - -

## Accessibility

Nav, escape when locked
Making the site 

## Javascript

The use of Intersection Observer API + Smoothscroll Polyfill

As this was a learning project, I took a leap to learn two rad new things that I’ll be incorporating into projects in the future.

### Intersection Observer API

Or as I like to call it, the IO-API. I’m trying very terribly hard to coin it that way. So far only I am the only sayer. 
<span role="img" aria-label="dunno" alt="dunno">¯\_(ツ)\_/¯ </span>

The IO-API serves as a new way for the  browser to detect when DOM elements are currently within the viewport and even to a certain threshold/percentage it is in.  It’s pretty nifty using the IO-API. And it’s being used online for a ton of things, namely lazy-loading assets when they’re actually needed plus scroll-library interactions that you might have used an complex library for something like adding a class to something when on screen. Then maybe taking a crack at the Intersection Observer API might be for you. It’s not perfect, not great for all use cases, and at the moment requires a polyfill, but it fulfills a performance & simplicity need of viewport detection that wasn’t as natively* there before. I’ll list some 

/Sidenote: Want to hear how complex the viewport is? Take a listen to this [short video](https://www.youtube.com/watch?v=e6IjNW8OTv0) by the Chrome Developers.
