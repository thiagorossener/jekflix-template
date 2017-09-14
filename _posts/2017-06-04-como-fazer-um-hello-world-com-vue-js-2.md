---
layout: post
title: "Como fazer um Hello World com Vue.js 2"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/v1504810464/hello-world-vue_ibatoy.jpg'
category: 'tutorial'
tags:
- vuejs
- javascript
- tutorial
twitter_text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
---

Esse mês venho fazendo um curso de <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">Vue.js 2</a> pelo Udemy e me apaixonando cada vez mais por esse framework que reúne o melhor do Angular 1 e do React.

O mais legal é que você não precisa ser nenhum expert em JS, nem ter estudado Angular ou React antes de começar a trabalhar com o Vue, ele é super intuitivo.

Nesse curto tutorial vou te ensinar como dar o primeiro passo para aprender a programar com <strong>Vue.js 2</strong>. Vamos lá!

## O que é o Vue?

Antes de começar, queria explicar rapidinho, afinal, o que é o Vue? Lê-se "viu".

O **Vue.js** é um framework progressivo para a construção de interfaces.

> Legal Rossener, mas o que é um framework progressivo?

Simples, segundo a definição do próprio <a href="https://twitter.com/youyuxi" target="_blank">Evan You</a>, criador do Vue.js, um framework progressivo é um framework que você pode inserir no seu projeto conforme vai sentindo a necessidade dele.

Ou seja, ao contrário dos frameworks que temos disponíveis hoje, que são recheados de funcionalidades e com uma grande curva de aprendizado, o Vue.js foi feito para ser fácil você adotá-lo em seu projeto, por mais complexo que ele seja.

Agora que você já sabe o que é o Vue.js, vou direto pra prática, como fazer um Hello World usando Vue.js 2?

## Como faz?

Primeiro, vamos criar um arquivo HTML qualquer, vou chamá-lo de **hello-world-vue.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World - Vue.js 2</title>
</head>
<body>

</body>
</html>
```

Aí importamos o Vue.js na nossa página, para podermos utilizá-lo.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World - Vue.js 2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>

</body>
</html>
```

Então inserimos uma `<div>`, que será onde a nossa aplicação Vue será montada. Ou seja, o pedaço do HTML que queremos que o Vue.js observe e utilize para renderizar nossos elementos.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World - Vue.js 2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

Agora já podemos começar a escrever o código com o Vue. A primeira coisa a fazer é instanciar uma nova aplicação Vue, dizendo para qual elemento do nosso HTML queremos que ele olhe.

Fazemos isso usando `new Vue()`, passando como parâmetro a chave `el` com o valor `#app`. No caso, o valor é usado como qualquer outro seletor CSS, de preferência sendo o id de um elemento, por ser algo único.

> **Nota:** colocamos o script **após** o elemento que será utilizado para renderização para que se torne conhecido pelo Vue quando este usar o seletor. Se colocássemos o script no cabeçalho da página, o elemento #app não seria reconhecido.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World - Vue.js 2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript">
        new Vue({
            el: "#app"
        });
    </script>
</body>
</html>
```

Vamos fazer a nossa página exibir a mensagem que desejamos. Para isso, colocaremos nossa mensagem no campo `data` da aplicação Vue.

O campo `data` recebe um objeto javascript com os dados que serão manipulados no contexto da nossa aplicação, ou seja, os dados de tudo que estiver dentro da nossa `<div id="app"></div>`.

Vou criar a variável `message` e atribuir o valor **"Hello World!"** para que possamos exibir essa mensagem no HTML posteriormente.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World - Vue.js 2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript">
        new Vue({
            el: "#app",
            data: {
                message: "Hello World!"
            }
        });
    </script>
</body>
</html>
```

Finalmente, dizemos ao HTML que queremos exibir o conteúdo de **"message"** na página. Fazemos isso colocando a variável "message" entre duplas chaves **\{\{ \}\}**, que são os caracteres usados pelo Vue para interpolar um valor dentro do HTML.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hello World - Vue.js 2</title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <div id="app"></div>
    <script type="text/javascript">
        new Vue({
            el: "#app",
            data: {
                message: "Hello World!"
            }
        });
    </script>
</body>
</html>
```

Salva, abre a página, e pronto!

![Screenshot do resultado do Hello World em Vue.js](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501102890/hello-world-browser_hjbuhl.png)

### ATUALIZAÇÃO

O <a href="https://web.facebook.com/ibrahimbrumate?fref=ufi" target="_blank">Ibrahim Brumate</a> me passou um link muito legal da versão PT-BR da documentação do Vue que eu não sabia que existia! Então se quiser saber mais sobre o Vue em português é só <a href="http://br.vuejs.org/v2/guide/" target="_blank">clicar aqui</a> e ser feliz :)
