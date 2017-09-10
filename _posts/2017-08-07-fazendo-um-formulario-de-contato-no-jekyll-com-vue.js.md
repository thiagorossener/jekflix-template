---
layout: post
title: "Fazendo um formulário de Contato no Jekyll com Vue.js"
date: 2017-08-07 23:04:08
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_760/v1502208952/contact-post_gnaojy.png'
description: Um formulário de contato para o Jekyll usando o Formspree e fazendo a validação com Vue.js
category: 'tutorial'
tags:
- vuejs
- jekyll
- blog
twitter_text: Um formulário de contato para o Jekyll fazendo a validação com Vue.js
introduction: Nesse tutorial explico como fazer o formulário que uso aqui no blog com o Vue.js para a validação dos dados.
---

Fala pessoal!

Semana passada, depois de divulgar meu artigo sobre o [novíssimo
layout do blog usando o Jekyll](https://www.rossener.com/novo-layout-blogando-como-um-dev-com-jekyll/), 
pedi alguns feedbacks para a galera do [WTTD](https://welcometothedjango.com.br/), 
e o [Eder Christian](https://twitter.com/ederchristian92) apontou algumas coisinhas na página, entre elas, a falta de 
validação no formulário da página de **Contato**, que estava enviando a mensagem mesmo 
com o *form* vazio.

Pensando nisso, resolvi fazer algo a mais e treinar meus conhecimentos no framework
javascript que está pegando no momento, o Vue.js.

Pra quem não conhece, eu dou uma rápida explicação sobre o Vue.js nesse [tutorial de
Hello World](https://www.rossener.com/como-fazer-um-hello-world-com-vue-js-2/) que 
fiz há algumas semanas.

Bom, então para começar, vamos ver como fazer um formulário de Contato simples no
Jekyll.

A primeira pergunta que devemos responder é:

> Se o Jekyll é um gerador de páginas estáticas, para onde vamos submeter o formulário?

Para isso, existem [algumas opções de serviços no mercado](http://www.formcandy.com/static-sites/),
eu vou optar aqui por utilizar o [Formspree](https://formspree.io/), que achei bem legal por ser gratuito até 1000 submissões
por mês e, principalmente, porque é [Open Source](https://github.com/formspree/formspree)!

O **Formspree** é bem simples de usar, no nosso formulário vamos colocar 3 campos para
o usuário preencher: *Nome*, *E-mail* e *Mensagem*. E na `action` do formulário
colocamos a url do Formspree com o e-mail para o qual queremos que a mensagem seja
enviada.

```html
<form method="POST" action="https://formspree.io/thiago.rossener@gmail.com">
  <fieldset>
    <input type="text" name="nome" placeholder="Seu nome">

    <input type="text" name="email" placeholder="Seu e-mail">

    <textarea name="mensagem" placeholder="Sua mensagem"></textarea>

    <button type="submit">Enviar</button>
  </fieldset>
</form>
```

Com esse simples formulário já temos tudo funcionando, a mensagem será submetida
para o Formspree, que vai lidar com o envio da mesma para o nosso e-mail usando
o [SendGrid](https://sendgrid.com/).

A primeira vez que você for enviar um e-mail terá de confirmar o e-mail configurado,
mas depois disso as próximas mensagens serão enviadas sem problemas, como essa aqui:

![Imagem do e-mail](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1502208783/resultado-email_cjewki.png)

O legal é que quando você cria um campo no formulário com `name="email"` ou o `name="_replyto"`,
ele automaticamente já coloca o e-mail que o usuário preencheu como o e-mail de resposta
para a mensagem.

Agora que já está funcionando, vamos colocar alguns campos especiais para melhorar
a experiência do usuário.

O Formspree fornece 3 parâmetros interessantes para configurarmos o formulário:

#### _subject

Nesse campo, como você deve imaginar, vai o assunto do e-mail.

#### _next

Aqui colocamos a url da *página de sucesso* que desejamos exibir para o usuário após
ele enviar a mensagem.

#### _language

Finalmente, o idioma que queremos que o texto esteja na tela de *reCAPTCHA*, necessária
para evitar spams.

Vamos adicionar esses campos como sendo do tipo `hidden` para serem submetidos junto
com a mensagem no nosso formulário e não serem exibidos para o usuário:

```html
<form method="POST" action="https://formspree.io/thiago.rossener@gmail.com">
  <fieldset>
    <input type="hidden" name="_subject" value="Novo contato!" />
    <input type="hidden" name="_next" value="https://www.rossener.com/contato/mensagem-enviada/" />
    <input type="hidden" name="_language" value="pt" />

    <input type="text" name="nome" placeholder="Seu nome">

    <input type="text" name="email" placeholder="Seu e-mail">

    <textarea name="mensagem" placeholder="Sua mensagem"></textarea>

    <button type="submit">Enviar</button>
  </fieldset>
</form>
```

Adicionando algum estilo ao formulário, temos o resultado:

<p data-height="517" data-theme-id="dark" data-slug-hash="jLBvNL" data-default-tab="result" data-user="thiagorossener" data-embed-version="2" data-pen-title="Formulário de Contato Simples" class="codepen">See the Pen <a href="https://codepen.io/thiagorossener/pen/jLBvNL/">Formulário de Contato Simples</a> by Thiago Rossener (<a href="https://codepen.io/thiagorossener">@thiagorossener</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Validando o formulário com Vue.js

Até aqui o nosso formulário de contato envia a mensagem perfeitamente, porém ainda
está faltando a validação dos dados.

Vamos fazer isso usando o framework [Vue.js](https://vuejs.org/) e um plugin de validação chamado [VeeValidate](http://vee-validate.logaretm.com/).

Entre todos os plugins de validação com o Vue.js que pesquisei, esse foi o que mais
me agradou, todo o trabalho fica no HTML, só temos que fazer algumas coisinhas realmente
no javascript.

### 1. Configurando a aplicação Vue e plugando o VeeValidate

Para começar, vamos inserir os javascripts e ativar o plugin no final da nossa
página:

```html
<script src="https://unpkg.com/vue@2.4.2"></script>
<script src="https://unpkg.com/vee-validate@2.0.0-rc.8"></script>
<script type="text/javascript">
    Vue.use(VeeValidate);
</script>
```

Agora, vamos instanciar a nossa aplicação Vue, montando-a na div com o id `#form`.

E aqui vem um macete. O Vue.js tem como interpolador padrão o `{% raw %}{{ }}{% endraw %}`, e o template engine **Liquid**
usa o mesmo interpolador, por isso se tentarmos usar o Vue.js no Jekyll, teremos conflitos.

Para resolver este problema, vamos alterar o interpolador do Vue.js para ser `${ }` ao invés de `{% raw %}{{ }}{% endraw %}`.

```html
<script src="https://unpkg.com/vue@2.4.2"></script>
<script src="https://unpkg.com/vee-validate@2.0.0-rc.8"></script>
<script type="text/javascript">
    Vue.use(VeeValidate);

    new Vue({
        el: '#form',
        delimiters: ['${', '}']
    });
</script>
```

Pronto! Agora com tudo configurado, podemos partir para a validação efetivamente.

### 2. Inserindo `v-validate` nos campos

A primeira coisa que temos de fazer é envolver o formulário com a div de id `#form`
onde a aplicação Vue será montada:

```html
<div id="form">
  <form method="POST" action="https://formspree.io/thiago.rossener@gmail.com">
    <fieldset>
        ...
    </fieldset>
  </form>
</div>
```

E então podemos inserir as validações. O plugin VeeValidate tem uma 
[série de validações disponíveis](http://vee-validate.logaretm.com/index.html#available-rules), 
e vamos usar só algumas delas.

Para isso, para cada campo de preenchimento vamos acrescentar o atributo `v-validate`.

Este atributo permite ao plugin analisar os dados no formulário em tempo de execução,
fazendo as validações necessárias conforme o usuário digita.

Se houver erros na validação, o nome do campo é inserido em um objeto chamado `errors`. E 
podemos verificar esse objeto usando o método `errors.has('nome-do-campo')` para
exibirmos ou não a mensagem de erro.

```html
<div id="form">
  <form method="POST" action="https://formspree.io/thiago.rossener@gmail.com">
    <fieldset>
      <input type="hidden" name="_subject" value="Novo contato!" />
      <input type="hidden" name="_next" value="https://www.rossener.com/contato/mensagem-enviada/" />
      <input type="hidden" name="_language" value="pt" />

      <input type="text" name="nome" placeholder="Seu nome" v-validate="'required'">
      <span v-if="errors.has('nome')">${ errors.first('nome') }</span>

      <input type="text" name="email" placeholder="Seu e-mail" v-validate="'required|email'">
      <span v-if="errors.has('email')">${ errors.first('email') }</span>

      <textarea name="mensagem" placeholder="Sua mensagem" v-validate="'required'"></textarea>
      <span v-if="errors.has('mensagem')">${ errors.first('mensagem') }</span>

      <button type="submit">Enviar</button>
    </fieldset>
  </form>
</div>
```

Em todos os campos adicionamos um validador de obrigatoriedade `v-validate="'required'"` e
no campo e-mail adicionamos um validador extra, o validador de e-mail `v-validate="'required|email'"`.

Preste atenção que os valores dentro do atributo estão dentro de aspas simples `' '`,
isso é muito importante, pois sem as aspas o validador não funciona.

Abaixo de cada campo, colocamos um `<span>` com um `v-if`, que ficará ouvindo as alterações
no objeto de erros, e, caso retorne verdadeiro, irá exibir a mensagem.

É bacana observar uma funcionalidade no objeto de erros. Ele possui um método
chamado `first()`, que, dado o nome do campo, ele retorna a primeira mensagem
de erro encontrada. Assim, se você inserir vários validadores em um campo, ele não
vai exibir uma lista de erros embaixo do campo, simplesmente exibirá um por vez.

### 3. Submetendo o formulário quando não há erros

As validações estão ok, porém o comportamento do formulário ainda não é o esperado.
Se você tentar submeter o formulário nesse ponto, irá conseguir.

Precisamos que o formulário só seja submetido quando não há erros, e para fazer
isso devemos evitar o comportamento padrão do formulário e fazer uma checagem
do objeto de erros antes da submissão.

Então, no javascript, vamos criar um método que será chamado quando o usuário
tentar submeter o formulário:

```html
<script src="https://unpkg.com/vue@2.4.2"></script>
<script src="https://unpkg.com/vee-validate@2.0.0-rc.8"></script>
<script type="text/javascript">
    Vue.use(VeeValidate);

    new Vue({
        el: '#form',
        delimiters: ['${', '}'],
        methods: {
          validateBeforeSubmit: function () {
              this.$validator.validateAll();
              if (!this.errors.any()) {
                this.$refs.contato.submit();
              }
            }
        }
    });
</script>
```

O que esse método faz é:

1. Chamar o método `validateAll()` do validador do VeeValidate para atualizar o objeto `errors`.
2. Checar se existe qualquer erro usando o método `any()` do objeto de erros.
3. Se não há erros, pega o objeto da aplicação Vue que possui a referência `contato` e chama o método `submit()`.

Agora falta atualizar o nosso formulário para chamar este método:

```html
<div id="form">
  <form method="POST" action="https://formspree.io/thiago.rossener@gmail.com"
        v-on:submit.prevent="validateBeforeSubmit" ref="contato">
    <fieldset>
        ...
    </fieldset>
  </form>
</div>
```

Perceba que adicionamos na declaração do formulário um *listener* `v-on:submit.prevent="validateBeforeSubmit"`, que é a parte
que evita o comportamento padrão ao submeter o formulário, e chama o método `validateBeforeSubmit()`.

Também adicionamos `ref="contato"` para podermos recuperar o objeto javascript do formulário,
e assim executarmos o método `submit()`.

### 4. Melhorando a UX

Pra finalizar este tutorial, vamos melhorar a experiência do usuário adicionando
alguma cor e personalizando as mensagens de erro.

Vou utilizar a classe `has-error` para colocar o estilo.

```html
<div id="form">
  <form method="POST" action="https://formspree.io/thiago.rossener@gmail.com"
        v-on:submit.prevent="validateBeforeSubmit" ref="contato">
    <fieldset>
      <input type="hidden" name="_subject" value="Novo contato!" />
      <input type="hidden" name="_next" value="https://www.rossener.com/contato/mensagem-enviada/" />
      <input type="hidden" name="_language" value="pt" />

      <input type="text" name="nome" placeholder="Seu nome" v-validate="'required'"
             :class="{ 'has-error': errors.has('nome') }">
      <span v-if="errors.has('nome')">${ errors.first('nome') }</span>

      <input type="text" name="email" placeholder="Seu e-mail" v-validate="'required|email'"
             :class="{ 'has-error': errors.has('nome') }">
      <span v-if="errors.has('email')">${ errors.first('email') }</span>

      <textarea name="mensagem" placeholder="Sua mensagem" v-validate="'required'"
                :class="{ 'has-error': errors.has('nome') }"></textarea>
      <span v-if="errors.has('mensagem')">${ errors.first('mensagem') }</span>

      <button type="submit">Enviar</button>
    </fieldset>
  </form>
</div>
```

E, finalmente, para personalizar as mensagens de erro padrão do plugin, precisamos alterar
o dicionário de mensagens do validador do VeeValidate.

Mais detalhes de como fazer isso você [encontra aqui](http://vee-validate.logaretm.com/localization.html).

```html
<script src="https://unpkg.com/vue@2.4.2"></script>
<script src="https://unpkg.com/vee-validate@2.0.0-rc.8"></script>
<script type="text/javascript">
    Vue.use(VeeValidate);

    const dictionary = {
        pt: {
            custom: {
                nome: {
                    required: 'Por favor, insira seu nome'
                },
                email: {
                    required: 'Por favor, insira seu e-mail',
                    email: 'O e-mail deve ser válido'
                },
                mensagem: {
                    required: 'Por favor, insira sua mensagem'
                }
            }
        }
    };

    VeeValidate.Validator.updateDictionary(dictionary);
    VeeValidate.Validator.setLocale('pt');

    new Vue({
        el: '#form',
        delimiters: ['${', '}'],
        methods: {
          validateBeforeSubmit: function () {
              this.$validator.validateAll();
              if (!this.errors.any()) {
                this.$refs.contato.submit();
              }
            }
        }
    });
</script>
```

É isso! Esse é o resultado final:

<p data-height="523" data-theme-id="dark" data-slug-hash="xLqQBy" data-default-tab="result" data-user="thiagorossener" data-embed-version="2" data-pen-title="Formulário de Contato com Vue.js" class="codepen">See the Pen <a href="https://codepen.io/thiagorossener/pen/xLqQBy/">Formulário de Contato com Vue.js</a> by Thiago Rossener (<a href="https://codepen.io/thiagorossener">@thiagorossener</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Espero que tenha gostado :)

## Antes de ir embora

Tive uma ideia de começar a colocar mensagens de reflexão no final dos posts
como incentivo para procurarmos evoluir e sermos não só desenvolvedores melhores,
mas pessoas melhores.

Eu tenho lido bastante e queria compartilhar com vocês essas mensagens. Então,
para inaugurar esse novo estilo, aqui vai a primeira:

> 90% da vida é sobre se manter calmo. - **Dr. Chris Feudtner**




















