---
layout: page
permalink: /fotos
title: Fotos.
---
- - -
{% for post in site.categories.fotos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}