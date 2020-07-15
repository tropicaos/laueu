---
layout: page
permalink: /jogos
title: Jogos
---
Eu poderia me vitimizar e falar que me mandar pra fliperamas pra ficar agarrado por horas a fio a videogames era só uma forma de me manter longe, mas na verdade eu sou muito grato por meus progenitores terem investido vários R$ semanalmente nisso. Ter ganhado um Master System Compact em 1997 mudou radicalmente minha vida e eu não consigo mensurar em palavras como minha vida teria sido tristemente entediante sem videogames. Hoje, tendo ultrapassado três décadas de existência, não consegui manter meu amor pelos vídeojogos só na jogatina. Extrapolei os limites de jogador e atrelei essa minha paixão a produção de conteúdo jornalístico e podcasts, tradução de artigos relativos da gringa e até me aventurei em participar da Global Game Jam. Não quero spoilar meus sonhos a longo prazo, mas digo que nessa área estou só começando **:)**
{% for post in site.categories.jogos %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}