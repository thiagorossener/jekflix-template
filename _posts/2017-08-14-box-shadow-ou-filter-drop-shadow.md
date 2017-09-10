---
layout: post
title: "box-shadow ou filter: drop-shadow?"
date: 2017-08-14 22:55:45
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_760/v1502757949/o-sombra_xyw4wq.jpg'
description: Duas escolhas, um único efeito. Saiba quando usar o estilo certo na hora certa.
category: 'css'
tags:
 - css
 - frontend
twitter_text: Duas escolhas, um único efeito. Saiba quando usar o estilo certo na hora certa.
introduction: Descubra em que casos é melhor escolher um estilo ou o outro para fazer um efeito de sombra.
---

Ta aí uma dúvida legal de responder.

Essa semana estive fazendo um trabalho como freelancer onde a ideia era desenvolver
um componente totalmente personalizado. Eis que o componente em questão era esse
aqui:

![Imagem do componente](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1502758928/componente_d4u8hh.png)

Como você pode ver, não é trivial. Nunca tinha feito um componente com tantas
características singulares como esse, mas como eu não sou de abandonar um bom
desafio, lá fui eu.

<center><iframe class="giphy-embed" src="https://giphy.com/embed/1YnVDruYQEgWQ" width="600" height="442" frameborder="0" allowfullscreen="allowfullscreen"></iframe></center>

Primeira questão: por onde começar?

A voz da experiência logo me falou "comece pelo mais difícil".

E a voz da diversão sem limites disse "comece pelo mais legal".

E aí, na minha audácia e espírito de rebeldia falei "e se eu fizesse os dois?" 😎

<center><iframe src="https://giphy.com/embed/Py4loHkx4eo1O" width="800" height="400" frameBorder="0" allowFullScreen></iframe></center>

~~Ok, talvez eu não tenha falado isso em voz alta.~~

Então escolhi a aba em formato de seta.

Foi um elemento bastante interessante de fazer, o mais desafiador,
sem dúvida, foi fazer o lado esquerdo num formato irregular, o lado direito também 
num formato irregular e o conteúdo da seta com largura flexível.

Eu normalmente faria isso usando imagens, mas dessa vez inovei, e usei SVG para poder
deixar essa faixa colorida na lateral dinâmica, assim não tenho que fazer uma imagem
nova sempre que quiser mudar de cor.

Como fiz isso vou deixar para outro post, mas o que eu quero focar nesse aqui é
só num desses problemas: **a sombra**.

Imagine que temos um componente onde dois lados tem um formato totalmente não-quadrado,
e no centro tem um `<div>` que se ajusta com o conteúdo.

![Imagem de um elemento irregular](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1502795756/no-shadow_tnqdm8.jpg)

A nossa sombra tem que ficar fluída, e contornando todo o componente de acordo com
seu formato, certo?

Beleza, pra fazer uma sombra, o CSS oferece dois atributos nos quais podemos fazer
esse efeito, são eles o `box-shadow` e o `filter: drop-shadow`.

Vamos ver na prática a diferença.

Se aplicarmos a esse elemento o **box-shadow**, teremos o seguinte resultado:

![Resultado com o box-shadow](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1502795862/box-shadow_dkh7o5.jpg)

Porém, se aplicarmos ao mesmo elemento o **filter: drop-shadow**, temos esse resultado:

![Resultado com o drop-shadow](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1502795717/filter-drop-shadow_nrhzex.jpg)

A diferença é clara, o filtro *drop-shadow* é capaz de perceber o formato da imagem
que está sendo renderizada para aplicar a sombra, e isso também é válido se ao invés
de uma imagem com fundo transparente, tivermos um SVG.

<p data-height="320" data-theme-id="dark" data-slug-hash="prdvjo" data-default-tab="result" data-user="thiagorossener" data-embed-version="2" data-pen-title="box-shadow vs filter: drop-shadow" class="codepen">See the Pen <a href="https://codepen.io/thiagorossener/pen/prdvjo/">box-shadow vs filter: drop-shadow</a> by Thiago Rossener (<a href="https://codepen.io/thiagorossener">@thiagorossener</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Vantagens e desvantagens

Você provavelmente deve estar pensando:

> Demorou! Vou usar o **drop-shadow** _SEMPRE_!

Acontece que infelizmente nem tudo é leite ninho com Nutella nessa vida.

O `box-shadow` é suportado por mais navegadores que o `filter: drop-shadow`, e
principalmente por quais? Exatamente, navegadores da *Microsoft*.

Dá uma olhada no suporte desses caras:

![Suporte para box-shadow](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1502757053/box-shadow_ldmnmo.jpg)
*[Clique aqui para ver mais detalhes](http://caniuse.com/#feat=css-boxshadow)*

![Suporte para drop-shadow](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1502757056/drop-shadow_zxpgoj.png)
*[Clique aqui para ver mais detalhes](http://caniuse.com/#feat=css-filters)*

## Conclusão

Os dois estilos matam a pau o problema das sombras, mas se encaixam em diferentes
situações.

Para um caso onde a sombra é trivial, o `box-shadow` resolve o problema, mesmo porque
ele tem outras vantagens como a possibilidade de criar sombras internas, e aplicar mais
de uma sombra ao mesmo elemento.

Porém, se você precisa que a sombra seja aplicada a elementos com formatos
diferentões é muito mais negócio ficar com o `drop-shadow`, que possibilita o mesmo
efeito para esses casos.

Espero que esse artigo curtinho tenha deixado mais claro em quais situações é
melhor usar cada um deles.

Ficou com alguma dúvida? Tem alguma crítica? Pode mandar aqui nos comentários que ficarei
feliz em respondê-las. ✌️

> Não importa o quão devagar você vá, desde que você não pare.
>
> -- **Confúcio**















