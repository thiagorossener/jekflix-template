---
layout: post
title: "Diga olá para o TRCurrencyTextField: Um componente com valor."
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_760/v1504807365/now-you-see-me_wtv89q.jpg'
category: 'mobile'
tags:
- component
- ios
- cocoapods
twitter_text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
---
Está vivo.

![Imagem de um médico maluco gritando Está Vivo!](//i1310.photobucket.com/albums/s647/rossener/its_alive_zpsqiuydofr.jpg)

Depois de alguns dias codando e testando essa belezinha, eu finalmente posso dizer: valeu a pena. Se você está procurando por um componente como um campo de texto onde você pode apertar um dígito e magicamente formatá-lo para QUALQUER moeda do mundo, você pode deixar cair seu queixo agora. Você-o-encontrou.

Graças ao <a href="https://github.com/peterboni/FormattedCurrencyInput" target="_blank">Peter Boni</a>, cujo trabalho me inspirou a fazer isso, eu posso apresentar a vocês, o <strong>TRCurrencyTextField</strong>.

TRCurrencyTextField é um componente de código aberto facilmente encontrado no <a href="https://github.com/thiagoross/TRCurrencyTextField" target="_blank">GitHub</a>, e facilmente utilizável com <a href="https://cocoapods.org/pods/TRCurrencyTextField" target="_blank">CocoaPods</a>.

O que isso faz? Eu posso explicar... ou melhor, eu posso mostrar pra você em 12 passos. Aqui. E agora. Bora começar.

## 1. Valor vazio formatado para zero

Os exemplos aqui estão todos em BRL, ou seja, em reais. Porém, se você segurar as pontas aí por mais uns minutos eu te digo como vamos mudar isso.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img01_zpsinzq5ss5.png)

Então, nós começamos aqui, no zero. Como você pode ver, esse é o valor quando não temos nenhum valor. O queee? Exatamente. O componente não deixa você apagar o texto.

> Rossener, mas eu quero apagar o texto ou meu iPhone vai explodir em mil pedaços.

Espero que você tenha uma vassoura meu amigo.

## 2. Dígitos vêm da direita

Você aperta a tecla 1 no teclado numérico, o texto muda pra R$ 0,01

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img02_zpsrn6cxq1j.png)

## 3. E continuam vindo da direita

Então você aperta a tecla 2 no teclado numérico e o texto vira R$ 0,12

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img03_zpsedto9ab7.png)

## 4. Você não precisa apertar a "vírgula"

Você aperta a tecla 3 no teclado numérico e o texto muda pra R$ 1,23

Em reais, vírgula é o separador de decimal, e nós não precisamos apertar ela. Acredite em mim, ela já aparece lá.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img04_zpsxpr0tzyx.png)

## 5. Você não precisa apertar o "ponto"

Como ponto é o separador de grupo em reais, quando você aperta 1-2-3-4-5-6, nós temos R$ 1.234,56

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img05_zps42syiq7u.png)

## 6. Deletar-desloca-dígitos

Você deleta. Essa coisa desloca.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img06_zpsgxq0ldgl.png)

## 7. Edite de qualquer lugar

> "Rossener, eu não quero reiniciar a minha vida pra corrigir um único erro."

Você tem certeza? Bem, você não precisa.

Você coloca o cursor depois do 1 e aperta Deletar, nós temos R$ 23,45

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img07_zpss3rlth5k.png)

## 8. Cole de qualquer lugar

Você é um cara preguiçoso e quer colar um valor da sua app de calculadora? Você pode.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img08_zpsg9ro8kx4.png)

Cole 1000 de qualquer lugar, ele vira R$ 1.000,00

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img09_zps1kdphsqv.png)

## 9. Mude a moeda. Mude o formato.

> "Finalmente, não aguento mais ver tudo em reais."

Vamos mudar isso.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img10_zpswkfhmoan.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img11_zpsnppxg3sb.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/img12-1_zpsztjq8ujg.png)

## 10. Como também, o País

> "Eu não conheço o código da minha moeda."

Você deveria. Mas, nós podemos cuidar disso.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img12_zpsd0imf4w2.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img13_zpsggnl1vxb.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img14_zpsqt6xafhj.png)

## 11. Como também, o Locale

Algumas vezes você tem um país ou uma moeda que possui mais de um único Locale, e dependendo do Locale, os símbolos são diferentes... bom, problema resolvido.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img15_zpsssnre625.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img16_zpssndryuos.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img17_zpsdn9j2hqm.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img18_zps3xldov0j.png)

## 12. Finalmente, o Valor

> "Rossener, você está mandando muito bem, tá tudo ótimo, esse componente vai salvar minha vida e meu casamento. MAS, e o valor?"

Meu caro amigo, eu deixei o melhor para o final. Uma vez que você atribuiu alguma coisa ao componente, você pode fazer qualquer coisa que quiser. É como o milagre dos 5 pães e 2 peixes. Com poucas coisas, você pode conseguir muitas coisas.

Deixa eu explicar.

Uma vez que você mudou a moeda para USD, você pode pegar do componente, não um, mas TODOS os países que usam essa moeda, como também pode pegar o texto mostrado pelo componente na tela e aquela coisa que você mais quer: **o valor numérico**.

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img19_zpspklsiodw.png)

![Imagem de um iPhone exibindo o exemplo](http://i1310.photobucket.com/albums/s647/rossener/TRCurrencyTextField/nova-img20_zpsr3g6hyiy.png)

Além de tudo isso, você pode também, se você quer o *espaço em branco* próximo do símbolo da moeda e o *número máximo de dígitos* que você quer deixar seu usuário digitar.

TRCurrencyTextField é um componente aberto. Você pode enviar *pull requests* pra ele. Você pode *forkar* ele. Você pode amar ele. Vamos fazer ele melhor juntos.

Dúvidas? Comentários? Hi-fives? Por favor, deixe eles aqui. Estou ansioso pra saber sua opinião.

PS: Você saber detalhes sobre o uso, instalação e outras coisas no <a href="https://github.com/thiagoross/TRCurrencyTextField" target="_blank">GitHub</a>.
