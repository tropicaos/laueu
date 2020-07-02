---
layout: page
permalink: /categories/textos
title: Textos
---
Antes de qualquer coisa - ator, videomaker, comunicólogo - eu era uma criança brutalmente criativa. E em 2006 cansei de só deixar as ideias na cabeça e comecei a externá-las em forma de histórias. Desde então venho lapidando minhas habilidades que alcançaram um considerável nível de seriedade em 2015, quando comecei a estudar roteiro cinematográfico e narratologia academicamente. Ainda assim tenho um grande carinho pelas minhas obras iniciais. Mas é fato: quanto mais recente o post aqui embaixo, mais rebuscado ele será, seja em forma de argumento cinematográfico ou artigo jornalístico.
{% for post in site.categories.textos %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}