---
permalink: /projects/personal-website
title: Personal website
excerpt: 'It is Open Source and available on GitHub, so nothing personal then 🤔'
comments: false
classes: wide
author_profile: false
comments: false
last_modified_at: #2018-10-05T10:30:00+05:30
toc: false
project-link:
  github-repo: kulbhushanchand.github.io
sidebar:
  - title: "Personal website"
    image: /assets/images/pages/projects/personal-website/personal-website-small.jpg
    image_alt: "personal website"
    text: "An ultra fast, light weight static website that I am actively developing and maintaning as my personal website."
    nav: personal-website
header:
  overlay_image: #/assets/images/pages/projects/personal-website/personal-website-header.jpg
  overlay_filter: rgba(0, 0, 0, 0.5)
gallery:
  - url: /assets/images/pages/projects/personal-website/screenshot-home.jpg
    image_path: /assets/images/pages/projects/personal-website/screenshot-home.jpg
    alt: "home page screenshot"
    title: "Home page"
  - url: /assets/images/pages/projects/personal-website/screenshot-about.jpg
    image_path: /assets/images/pages/projects/personal-website/screenshot-about.jpg
    alt: "about page screenshot"
    title: "About page"
  - url: /assets/images/pages/projects/personal-website/screenshot-blog.jpg
    image_path: /assets/images/pages/projects/personal-website/screenshot-blog.jpg
    alt: "blog page screenshot"
    title: "Blog page"
  - url: /assets/images/pages/projects/personal-website/screenshot-projects.jpg
    image_path: /assets/images/pages/projects/personal-website/screenshot-projects.jpg
    alt: "projects page screenshot"
    title: "Project page"
  - url: /assets/images/pages/projects/personal-website/screenshot-sitemap.jpg
    image_path: /assets/images/pages/projects/personal-website/screenshot-sitemap.jpg
    alt: "sitemap screenshot"
    title: "Sitemap"
  - url: /assets/images/pages/projects/personal-website/screenshot-404.jpg
    image_path: /assets/images/pages/projects/personal-website/screenshot-404.jpg
    alt: "404 page screenshot"
    title: "404 page"        
---

## About this project

This is my personal website and blog created I've started on Aug-2018. This website uses Jekyll, hosted on GitHub pages and served via cloudflare. I will try to regularly publish articles on arduino, MATLAB, electronics and some of my ever-evolving interests. Some of the feature are -

- Static website
- Light weight
- Fast
- Minimal expense


## Tools used for this project

### Tools & Softwares

- HPZ440 workstation: from my research lab

When it comes to switch between IDE, google chrome with a lot of opened tabs, GitKraken and anything else opened, one seriously need a **beefy system**. Fortunately this mighty beast will serves me till I'm a student here.  
{: .notice--warning}

- [Jekyll](http://jekyllrb.com): static website generator that converts some bunch of text in markdown to a set of files[^files]. 
- [Visual Studio Code](https://code.visualstudio.com/): IDE[^ide] for coding and markdown editing 
- [GitKraken](https://www.gitkraken.com/): cross-platform, efficient, elegant and reliable git client
- [ShareX](https://getsharex.com/): screen capture, file sharing and productivity tool

### Jekyll plugins, I'm using

- [**jekyll-sitemap**][sitemap]: silently generates a [sitemaps.org](http://www.sitemaps.org/) compliant sitemap.
- [**jemoji**][jemoji]: adds GitHub-flavored emoji to Jekyll with the use of Liquid tags.
- [**jekyll-seo-tag**][seo]: adds metadata tags for search engines and social networks to better index and display site content.
- [**jekyll-paginate-v2**][jekyll-paginate-v2]: pagination replacement for the old [official Jekyll paginate](https://github.com/jekyll/jekyll-paginate) plugin.


### Scripts and jQuery plugins

- [**BigFoot.js**][bigfoot]: jQuery plugin for displaying footnotes inline.
- [**Lity**][lity]: lightweight, accessible, and responsive lightbox plugin.
- [**SVG for Everybody**][svg4everybody]: external spritemaps support.

### Hosting and other third party services

- Site hosting and deployment via [**GitHub**][github].
- Domain name registered with [**Google Domains**][google-domains].
- CDN[^cdn] and SSL certificate provided via [**Cloudflare**][cloudflare].
- Website search indexing and serving provided by [**Algolia**][algolia].
- For automatic building of algolia search index [**Travis CI**][travis-ci] is used.
- Icons from [**Simple Icons**][simple-icons], [**Iconmonstr**][iconmonstr].

### Theme used
This website is based on an awesome theme [**minimal-mistakes**](https://github.com/mmistakes/minimal-mistakes) by [Michael Rose](https://twitter.com/mmistakes) and some designs are used from his [personal website](https://mademistakes.com)


## Screenshots

{% include gallery caption="The screenshots of the personal website taken on chrome on windows 10 at 1920x1200 resolution" %}


---
## Performance Report

### [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)

An impressive score of 93 and 96 for mobile and desktop benchmarking respectively was obtained on Google PageSpeed Insight 

<figure class="">
    <a href="/assets/images/pages/projects/personal-website/google-pagespeed-insights-mobile.png">
    <img alt="Google PageSpeed Insights mobile benchmark" src="/assets/images/pages/projects/personal-website/google-pagespeed-insights-mobile.png"></a>
    <a href="/assets/images/pages/projects/personal-website/google-pagespeed-insights-desktop.png">
    <img alt="Google PageSpeed Insights desktop benchmark" src="/assets/images/pages/projects/personal-website/google-pagespeed-insights-desktop.png"></a>
    <figcaption>Google PageSpeed Insights mobile and desktop benchmarks.</figcaption>
</figure>
       

### [GTmetrix](https://gtmetrix.com/) 

Another widely used website performance benchmarking tool. The website loads under half second with 99% PageSpeed score.

[![Gtmetrix]({{ site.url }}{{ site.baseurl }}/assets/images/pages/projects/personal-website/gtmetrix.jpg){: .align-center}](/assets/images/pages/projects/personal-website/gtmetrix.jpg)
<figcaption>Results from the GTmetrix.</figcaption>


### Lighthouse audit

Results from the Lighthouse in Chrome DevTools

[![Lighthouse audit]({{ site.url }}{{ site.baseurl }}/assets/images/pages/projects/personal-website/lighthouse-audit.jpg "title" "caption"){: .align-center}](/assets/images/pages/projects/personal-website/lighthouse-audit.jpg)
<figcaption>Results from the Lighthouse in Chrome DevTools.</figcaption>

---

## How to use

For up and running with this project, the user should know how to host websiite with GitHub. After that there are two ways -
- **Method 1 -**     
If your intention is to make a similar website like this, I would recommend to use the [minimal-mistakes](https://github.com/mmistakes/minimal-mistakes) theme directly which this website uses. All the details regarding this mentioned on the theme website. 

- **Method 2 -**  
I have made some changes to the theme and if you want the exact website like this project, then follow the mentioned steps -
  
  * Download the [repository](https://github.com/kulbhushanchand/kulbhushanchand.github.io) 
  
  * Change the name to your GitHub username (required for hosting on GitHub)
  
  * Make the required change in _config.yml and other places (like names, social site links etc.)
  
  * Commit to your public repository in GitHub and change repository setting to build repo as website
  
  * Since I'm using some third party services for added functionality, you may choose to use them as well (they all are free 🙂). Those are listed above under [**Hosting and other third party services**](/projects/personal-website#hosting-and-other-third-party-services)

  




[^ide]: Interactive development Environment
[^files]: HTML, CSS, and JavaScript files along with images and other assets needed to render a web page.
[^cdn]: Content Delivery Network
[sitemap]: https://github.com/jekyll/jekyll-sitemap
[github]: https://www.github.com
[cloudflare]: https://www.cloudflare.com
[google-domains]: https://domains.google
[algolia]: https://www.algolia.com
[travis-ci]: https://travis-ci.org
[simple-icons]: https://simpleicons.org/
[iconmonstr]: https://iconmonstr.com
[jemoji]: https://github.com/jekyll/jemoji
[seo]: https://github.com/jekyll/jekyll-seo-tag
[bigfoot]: http://www.bigfootjs.com/
[lazysizes]: https://github.com/aFarkas/lazysizes
[lity]: http://sorgalla.com/lity/
[svg4everybody]: https://github.com/jonathantneal/svg4everybody
[jekyll-paginate-v2]: https://github.com/sverrirs/jekyll-paginate-v2
[jekyll-typogrify]: https://github.com/myles/jekyll-typogrify
[jekyll-figure]: https://github.com/paulrobertlloyd/jekyll-figure
[jekyll-toc]: https://github.com/toshimaru/jekyll-toc
