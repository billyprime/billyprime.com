---
title: Blog
permalink: /blog/
---

<section class="blog-list">
  {% for post in site.posts %}
    {%- include summary.html -%}
  {% endfor %}
</section>