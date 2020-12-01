---
layout: page
permalink: /fotos
title: Fotos.
---
<figure>
  <img alt="Laureano." src="/images/FOTOS.png"/>
</figure>
Minha relação com fotografia é curiosa e indefinida até pra mim mesmo. É como algo tão presente que nem tá lá mais. [Toda vez](/Fotos/RoleReligioso) que [viajo](/Fotos/INGA), [metralho uns cliques](/Fotos/CONGO), mas não me considero fotógrafo, mesmo sendo perfeitamente apto a fazê-lo e até [descolando uns trocados exercendo esse ofício profissionalmente](/Trampos/Imburana). Ouvi diversas vezes *"se você filma, você também fotografa"*, mas isso não é totalmente verdade. Eu <strong>tô muito mais interessado em ritmo e movimento</strong> do que em desenho de luz, então há um abismo gráfico entre meu trabalho com cinematografia + cinegrafismo e a fotografia de [quem amo](https://www.instagram.com/roannascimento/){:target="_blank"} [fortemente](https://www.instagram.com/joaollira/){:target="_blank"} o [trabalho](https://www.instagram.com/kiolima/){:target="_blank"}, por [exemplo](https://www.instagram.com/cintiavianazen/){:target="_blank"}. Mesmo assim ela é deliciosa por ser um *playground* pra mim e tenho vários anos pela frente pra brincar.
- - -
{% for post in site.categories.fotos %}
 <li><a href="{{ post.url }}">{{ post.title }}</a>
    <P> <span>{% include date.html date=post.date %}</span>
    </P>
</li>
{% endfor %}