---
layout: page
permalink: /categories/trampos
title: Trampos
---
Eis aqui a quase totalidade de minhas experiências profissionais e experimentações. Registros de projetos universitários, empregos que tive, marcas que bolei e tudo que contribuiu pro profissional de audiovisual, arte e multimídia que sou hoje.

{% for post in site.categories.trampos %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}