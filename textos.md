---
layout: page
permalink: /textos
title: Textos.
---
<figure>
  <img alt="Laureano." src="/images/TEXTOS.png"/>
</figure>
<div class="pgdesc">Antes de qualquer coisa - ator, videomaker, comunicólogo - eu era uma criança brutalmente criativa. E em 2006 cansei de só deixar as ideias na cabeça e comecei a externá-las em forma de histórias. Desde então venho lapidando minhas habilidades que alcançaram um considerável nível de seriedade em 2015, quando comecei a estudar roteiro cinematográfico e narratologia academicamente. Ainda assim tenho um grande carinho pelas minhas obras iniciais. Mas é fato: quanto mais recente o post aqui embaixo, mais rebuscado ele será, seja em forma de argumento cinematográfico ou artigo jornalístico. </div>

---
{% for post in site.categories.textos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}

--- 
*Alguns textos podem ter datas meio confusas ao final. Te explico: A data de postagem do conteúdo na internet é o formato padrão, justificado à direita. Só que nem sempre o conteúdo chegou na internet assim que foi feito. Só comecei a catalogar tudo que produzo em 2014, mas tenho registros até de antes de 2009... Quando houver data original ela sempre estará justificada à esquerda e aparecerá antes da data do post, ok? Quanto mais antigo o post, maior a probabilidade docê tropeçar nessa cacofonia calendarial*.