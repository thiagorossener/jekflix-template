---
layout: post
title: "Minhas primeiras 5 impressões sobre Django"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/v1504809708/django_g7djdj.jpg'
category: 'django'
tags:
- django
twitter_text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
---

Fala galera!

Tem um tempo que não escrevo aqui. Estou nesse momento passando por um período de transição na minha carreira, onde basicamente eu apostei 2 anos e muito $$$ na minha startup e bem... não deu certo. :(

<img src="http://res.cloudinary.com/dm7h7e8xj/image/upload/v1504809082/you-failed_y2qkgy.jpg" alt="Foto do Leo me dando os parabéns" width="540" />
*Valeu Leo 👍*

A vida segue, e oportunidade é o que não falta por aí. No meio desse período nebuloso e "sem rumo" decidi parar pra pensar um pouco na vida e na minha carreira, agora que a minha aposta de 5 anos fez como o Matthew McConaughey em *Interstellar*, e foi pro espaço.

<center><iframe class="giphy-embed" src="https://giphy.com/embed/u4ywyvuQZbzag" width="600" height="277" frameborder="0" allowfullscreen="allowfullscreen"></iframe></center>

Pensando e pensando e pensando decidi duas coisas que quero pra minha vida: 1. quero trabalhar com o que eu gosto de fazer, que é desenvolver pra Web e 2. quero viajar. Por que não juntar os dois?

> Eaí Rossener, quando você vai começar a falar sobre o título do post?

Calma que eu chego lá. Comecei a pesquisar sobre o que estava rolando no mercado hoje e prontamente duas coisas surgem em todo lugar como um consenso: <a href="http://rubyonrails.org/" target="_blank">Ruby on Rails</a> e <a href="https://www.djangoproject.com/" target="_blank">Django</a> (também tem as SPAs, mas vou pular elas).

Lendo muitas comparações, conversando com alguns amigos e dando uma olhada nos dois frameworks, dei o primeiro passo ousado rumo ao desconhecido, e fui de encontro a ele.

![Imagem do Django](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501101216/django-1024x576_xi2qq9.jpg)
*Django. (música de faroeste de fundo)*

Logo encontrei o curso **gratuito** do <a href="https://www.udemy.com/python-3-na-web-com-django-basico-intermediario/learn/v4/overview" target="_blank">Gileno Filho</a>, que é muito bom, e comecei a brincar com essa belezinha. Por isso, meu caro leitor, com o intuito de despertar *curiosidade* pra que você busque por mais informações, irei te dizer as minhas primeiras impressões sobre esse framework em Python.

Vamos lá:

### 1 - Setup na manteiga

Em 10 minutos, começando do ZERO, você já tem todo o seu ambiente configurado lindamente pra criar sua aplicação com o Django.

Quer saber como? Segue esse tutorial das meninas do Django Girls <a href="https://tutorial.djangogirls.org/pt/django_installation/" target="_blank">aqui</a>.

### 2 - Organizado e legível

Achei incrivelmente organizado o projeto. Os módulos são separados por aplicações, e cada aplicação tem uma estrutura mais ou menos assim:

 - É **form**? Fica em *forms.py*
 - É **modelo**? Fica em *models.py*
 - É **tela**? Fica em *views.py*
 - É **url**? Fica em *urls.py*
 - É **html**? Fica numa pasta separada só pra templates daquela aplicação.

Simples, hã?

![Screenshot do urls.py](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501101482/Screen-Shot-2017-05-11-at-7.57.23-PM-1024x725_mkxqjb.png)

### 3 - Leve um framework, ganhe os CRUDs

Quem gosta de ficar fazendo aquelas telas de CRUD (*Create-Read-Update-Delete*) que são todas iguais e só consome o seu tempo?

É, meu amigo, a coisa toda já vem pronta! O Django já traz nele uma aplicação só pra você manipular seus modelos. O negócio é *LO-KO*.

![Screenshot da tela de admin do Django](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501101516/django-admin_qjkqsa.png)

### 4 - Filtros que fazem de tudo

Do pouco que eu explorei achei coisas muito interessantes que não lembro de ter visto enquanto trabalhava por 2 anos e meio com Java e JSP. No máximo, vi algo parecido em PHP e Angular, mas enfim, achei bem legal.

São os filtros. Eles poupam um trabalho gigantesco se você conhecê-los e souber usá-los bem.

Pra citar alguns exemplos temos:

![Imagem de filtros de parágrafo do Django](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501101548/filtros-django_qxbf51.png)
*Esse cara pega um texto que você inseriu num formulário e monta o texto com as tags html &lt;p&gt; e &lt;br&gt; pra deixar os parágrafos formatados automaticamente.*

![Imagem do filtro pluralize do Django](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501101632/filtro2_pjurss.png)
*Esse filtro permite que você altere o final de uma palavra que está no plural de acordo com sua variável numérica. Digamos que você tenha um contador de visualizações. Com esse filtro, facilmente você alterna entre "1 visualização" e "2 visualizações" sem encher o código de ifs :)*

![Imagem do filtro timesince do Django](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501101706/filtro3_tyvzgd.png)
*Como último exemplo tem o **timesince**, esse eu achei fantástico. Esse filtro é capaz de dizer a diferença de tempo entre a data atual e a data que você passa, facilitando a você escrever textos assim "à 2 minutos atrás" como de comentários ou respostas em fóruns.*

### 5 - A comunidade

Não há palavras que expressem o <strong>tamanho</strong> disso. PONTO.

![Comunidade Python](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501101809/comunidade_esnapp.jpg)
*Foto ilustrativa*

A comunidade Django, na verdade, a comunidade Python no geral, é gigantesca. Tem gente disposta a te ajudar de todas as cidades, estados, países, continentes e universos, todas as raças, credos, orientação sexual e orientação política, de todo tipo de fã clube, status de relacionamento e lado da Força, tem gente de tudo-que-é-jeito. É incrível.

Pra entender, só mesmo entrando nesse mundo. Eu comecei há pouco tempo, mas pretendo em breve, entender um pouco mais e participar mais dos eventos e da comunidade.

### Conclusão

Tenho estudado o Django há 2 semanas, e tenho ficado cada vez mais impressionado com o universo de possibilidades que acompanham esse framework. Com certeza não cheguei nem perto de explorar tudo o que o Django pode fazer, mas espero que tenha despertado a sua curiosidade.

Essa semana comecei a fazer o curso do **Henrique Bastos**, o <a href="http://welcometothedjango.com.br" target="_blank">Welcome to the Django</a>, com a intenção de mergulhar de uma vez nesse mundo e, principalmente, adquirir autonomia. Provavelmente, em breve, estarei postando mais coisas sobre essa nova aventura por aqui.

Até lá!
