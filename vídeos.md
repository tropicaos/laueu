---
layout: page
permalink: /Videos
title: Vídeos.
---
<figure>
  <img alt="Laureano." src="/images/VIDEOS.png"/>
</figure>

O carro chefe da minha carreira. Produzir vídeos profissionalmente é algo que só comecei a fazer em 2015, porém isso sempre esteve na minha vida sem eu perceber: eu surrupiava a filmadora (daquelas que filmavam direto na VHS!) do meu pai (que por sua vez foi proprietário de uma videolocadora...) pra fazer filminhos de ação com meus gelocósmicos quando guri. Já na adolescência eu dava um help pra então namorada num jornal estudantil no Lyceu Paraibano. Muito antes de dominar a suíte Adobe como hoje, eu me divertia horrores brincando de explorar as funcionalidades do Sony Vegas. O audiovisual sempre me foi íntimo, eu que só agora fui me tornar dele.

--- 
{% for post in site.categories.videos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}