---
layout: page
permalink: /jogos
title: Jogos.
---
<figure>
  <img alt="Jogos." src="/images/JOGOS.png"/>
</figure>
<div class="pgdesc">Ter ganhado um Master System Compact em 1997 mudou radicalmente minha vida e eu não consigo mensurar em palavras como minha vida teria sido tristemente entediante sem videogames. Hoje, tendo ultrapassado três décadas de existência, não consegui manter meu amor pelos vídeojogos só na jogatina. Extrapolei os limites de jogador e atrelei essa minha paixão a produção de conteúdo jornalístico e podcasts, tradução de artigos relativos da gringa e até me aventurei em participar da <a href="https://globalgamejam.org/" target="_blank">Global Game Jam</a>. Não quero spoilar meus sonhos a longo prazo, mas digo que █████ █████████████ ████████████ ██ █████████████ ████████████, então nessa área estou apenas começando 😁!</div>

---
{% for post in site.categories.jogos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}

--- 
<div class="clearfix" style="display:inline-block;vertical-align:top;">
    <div>
        <img class="pcmr" title="PCMR" src="/images/pcmr.gif"/>
    </div>
    <div>
    Apesar de ser totalmente responsivo, <strong>esse site é melhor exibido no navegador do seu computador</strong>. A largura das páginas num monitor são bem mais próximas das d'um livro que numa tela de telefone celular. Em outras palavras: dê espaço pros meus textos!  Deixe os bichim respirar, pô!.. 😑
    </div>
</div>



