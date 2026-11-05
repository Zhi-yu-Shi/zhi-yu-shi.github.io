---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

<ul>
  <li><a href="{{ '/' | relative_url }}">About Zhiyu Shi</a></li>
  {% for item in site.data.navigation.main %}
    {% unless item.url == '/' or item.url == '/about/' %}
      <li><a href="{{ item.url | relative_url }}">{{ item.title | escape }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>

[XML sitemap]({{ '/sitemap.xml' | relative_url }})
