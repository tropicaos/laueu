---
layout: page
permalink: /categories/fotos
title: Fotos
---

{% for post in site.categories.fotos %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}