---
title: Photos
permalink: /photos/
---

<section class="gallery-list">
  {% assign photos = site.photos | where_exp: "item", "item.weight != 0" | sort: 'weight' %}
  {% for post in photos %}
    {%- include summary.html -%}
  {% endfor %}
</section>