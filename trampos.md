---
layout: page
permalink: /trampos
comments: false
title: Trampos.

---

<figure>
  <img alt="Laureano." src="/images/TRAMPOS.png"/>
</figure>
<p></p>
<div class="pgdesc"> Eis aqui a (quase) totalidade de minhas experiências profissionais e experimentações independentes. Registros de projetos universitários, empregos que tive, marcas que bolei e tudo que contribuiu pro profissional de audiovisual, arte e multimídia que sou hoje. </div>
<h1 itemprop="name headline" class="post-title divided p-name" text-align="center"></h1>
{% for post in site.categories.trampos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}