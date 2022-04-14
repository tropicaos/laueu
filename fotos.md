---
layout: page
permalink: /fotos
title: Fotos.
---
<figure>
  <img alt="Laureano." src="/images/FOTOS.png"/>
</figure>
<div class="pgdesc">Minha relação com fotografia é curiosa e indefinida até pra mim. É como algo tão presente que nem tá lá mais. <a href="/Fotos/RoleReligioso.html">Toda vez</a> <a href="/Fotos/INGA.html">que viajo</a> <a href="/Fotos/CONGO.html">metralho uns cliques</a>, mas não me considero fotógrafo, mesmo sendo perfeitamente apto a fazê-lo e até <a href="/Trampos/Imburana.html">descolando uns trocados exercendo esse ofício profissionalmente</a>. Ouvi diversas vezes: “se você filma, você também fotografa", mas isso não é totalmente verdade. Eu tô muito mais interessado em ritmo e movimento do que em desenho de luz, então há um abismo gráfico entre minha produção com cinematografia + cinegrafismo e a fotografia de <a href="https://www.instagram.com/roannascimento/" target="_blank">quem amo</a> <a href="https://www.instagram.com/joaollira/" target="_blank">fortemente</a> <a href="https://www.instagram.com/kiolima/" target="_blank">o trabalho</a>, <a href="https://www.instagram.com/cintiavianazen/" target="_blank">por exemplo</a>. Mesmo assim, ela é deliciosa por ser um playground pra mim, e tenho vários anos pela frente pra brincar.</div>
<h1 itemprop="name headline" class="post-title divided p-name" text-align="center"></h1>
{% for post in site.categories.fotos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}