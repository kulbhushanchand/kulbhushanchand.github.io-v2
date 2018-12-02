---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: false
---

A hierarchical list of all the posts and pages found on the site. For you robots out there is an [XML version]({{ "sitemap.xml" | relative_url }}) available for digesting as well.

---
## 📃 Main Pages 

- [About](/about/)
- [Contact](/contact/)
- [Frequently asked questions](/faqs/)
- [Show your support](/support/)
- [Terms and policies](/terms/)
- [Tag index](/blog/tags/)


## 📌 Important Pages 
<ul>
  {% for post in site.pages %}
    {% if post.list == "imp" %}   
      {% include post-list.html %}
    {% endif %}
  {% endfor %}
</ul>


## ⚙️ [Projects](/projects/)
<ul>
  {% for post in site.pages %}
    {% if post.list == "projects" %}   
      {% include post-list.html %}
    {% endif %}
  {% endfor %}
</ul>


{% if site.categories.articles %}
## 🖋️ [Articles](/blog/categories/#articles)
<ul>
  {% for post in site.categories.articles %}
    {% include post-list.html %}
  {% endfor %}
</ul>
{% endif %}


{% if site.categories.deltaX %}
## 📋 [deltaX](/blog/categories/#deltax)
<ul>
  {% for post in site.categories.deltaX %}
    {% include post-list.html %}
  {% endfor %}
</ul>
{% endif %}


{% if site.categories.tutorials %}
## 👨‍🏫 [Tutorials](/blog/categories/#tutorials)
<ul>
  {% for post in site.categories.tutorials %}
    {% include post-list.html %}
  {% endfor %}
</ul>
{% endif %}


{% capture written_label %}'None'{% endcapture %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" or collection.label == "pages" %}
  {% capture label %}{{ collection.label }}{% endcapture %}
  {% if label != written_label %}
  <h2>{{ label }}</h2>
  {% capture written_label %}{{ label }}{% endcapture %}
  {% endif %}
{% endunless %}
{% for post in collection.docs %}
  {% unless collection.output == false or collection.label == "posts" or collection.label == "pages" %}
  {% include archive-single.html %}
  {% endunless %}
{% endfor %}
{% endfor %}


