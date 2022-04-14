---
layout: page
permalink: /Videos
title: Vídeos.
---
<figure>
  <img alt="Laureano." src="/images/VIDEOS.png"/>
</figure>

<div class="pgdesc"> O carro-chefe da minha carreira. Produzir vídeos profissionalmente é algo que só comecei a fazer em 2015, porém isso sempre esteve na minha vida sem eu perceber: eu surrupiava a filmadora (daquelas que filmavam direto na VHS) do meu pai (que, por sua vez, foi proprietário de uma videolocadora...) pra fazer filminhos de ação com meus gelocósmicos quando guri. Já na adolescência, eu dava um help pra então namorada num jornal estudantil no Lyceu Paraibano. Muito antes de dominar a suíte Adobe como hoje, eu me divertia horrores brincando de explorar as funcionalidades do Sony Vegas e do modo de filmagem e edição de <a href="/jogos.html"> Driver (1999)</a>. O audiovisual sempre me foi íntimo; eu que só agora fui me tornar dele.</div>

<h1 itemprop="name headline" class="post-title divided p-name" text-align="center"></h1>
{% for post in site.categories.videos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}