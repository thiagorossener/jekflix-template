---
layout: post
title: "Desafio aceito. Fazendo uma app do Dribbble do zero"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_760/v1504807658/barney-stinson_eqt7kc.jpg'
category: 'mobile'
tags:
- app
- mobile
- ios
twitter_text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
---

Eaí galera,

Há alguns dias atrás, um amigo meu, <a href="https://github.com/brunogabriel" target="_blank">Bruno Gabriel</a>, me enviou um <a href="https://bitbucket.org/suporte_concrete/desafio-ios/" target="_blank">link</a> de um recrutamento de uma empresa de tecnologia onde eles pedem aos candidatos para fazerem uma app com a API do Dribbble desenvolvendo algumas features pré-definidas e outras como bonus.

Eu fiz isso <a href="https://github.com/thiagoross/SimpleDribbble" target="_blank">aqui</a>.

![Tom Cruise atendendo o celular](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/your-mission_zpskxns2mho.png)
*Sua missão, caso deseje aceitá-la é: fazer uma app do Dribbble com as seguintes funcionalidades.*

### Seu aplicativo deve conter

 - Os shots mais populares, apresentando eles como esse mock.

![Imagem de exemplo do aplicativo](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/mock_zpsie1ik4uo.png)

 - Arquivo .gitignore
 - Gerenciador de dependência de projeto. Ex: CocoaPods
 - Framework para se comunicar com a API. Ex: AFNetworking
 - Mapeamento JSON -&gt; Objeto. Ex: Mantle
 - API de lista de shots
 - Paginação automática (scroll infinito) na lista de shots
 - Paginação que deve detectar quando chegou na última página e para de pedir mais
 - Pull to refresh
 - Mostrar detalhes do shot em uma nova tela quando o shot é selecionado na lista
 - A tela de detalhes do shot deve conter o nome do autor e a foto e descrição do shot

### Bonus

- Testes unitários. Ex: XCTests / Spectra + Expecta
- Testes funcionais. Ex: KIF
- Ser uma app universal. Fazer funcionar com iPad \| iPhone \| Paisagem \| Retrato (classes de tamanho)
- Cache de imagens. Ex: SDWebImage
- Compartilhar shots no Facebook e no Twitter

Bom, como eu precisava minhas novas habilidades de iOS.

![Meme Challenge Accepted](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/challenge-accepted_zpsqwnlacvu.jpg)

Eu não fiz **todas** a funcionalidades bonus listadas acima, como testes e compartilhar nas redes sociais. MAS, eu fiz um layout bem legal e efeitos pra aprender coisas como views personalizadas, barra de navegação personalizada, botão de voltar personalizado, layout usando diferentes tamanhos de células numa tabela, além de bibliotecas que eu nunca tinha usado antes :)

Aqui está a tela inicial, do que eu chamei, **Simple Dribbble**.

![Tela de abertura do aplicativo SimpleDribbble](http://i1310.photobucket.com/albums/s647/rossener/launch-screen_zpskx1mm4gd.png)

A lista de shots ficou assim.

![Tela de inicial do aplicativo SimpleDribbble](http://i1310.photobucket.com/albums/s647/rossener/shots-list_zps3pe3rabs.png)

Quando você seleciona um desses shots (e somente dentro do shot, não na célula toda), você tem esse efeito.

![Exemplo de transição quando o usuário clica no elemento](http://i1310.photobucket.com/albums/s647/rossener/selecting_zpsiycsug49.png)

Quando a requisição falha.

![Mensagem quando ocorre um erro](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/error-message_zpsylifpclp.png)

Quando você sai do aplicativo antes dele carregar algum shot e o aplicativo volta do background, a lista é automaticamente carregada.

![Tela com loading](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/auto-load_zpsi1xc9oi7.png)

Quando o shot está carregando, tem esse placeholder com um ícone do Dribbble girando pra representar que está carregando a imagem.

![Exemplo de elemento com placeholder](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/loading-placeholder_zpsbbby7aoj.png)

Quando você já viu todas as páginas e faz um <em>pull to refresh</em>.

![Tela com Pull to Refresh](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/pull-to-request_zpsep94dnws.png)

![Tela com Pull to Refresh](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/release-to-refresh_zpstqhgajpu.png)

![Tela quando não há mais atualizações](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/end-push-to-refresh_zpslmgvdgps.png)

Quando todas as páginas já foram vistas e você tenta carregar mais.

![Mensagem quando não há mais shots para carregar](http://i1310.photobucket.com/albums/s647/rossener/Dribbble%20Challenge/end-infinity-scroll_zpswdkleaoo.png)

E então, a tela de detalhes.

![Tela de detalhes](http://i1310.photobucket.com/albums/s647/rossener/shots-details_zpsuzqh4brt.png)

Nessa última tela você deve ter notado três partes, as quais eu fiz usando um UITableViewController com 3 células. A primeira tem um tamanho fixo contendo a foto e o título do shot, a segunda célula também é fixa e contem a foto do autor e seu nome, e a última é flexível, contem uma web view que carrega a descrição e seu tamanho é adaptável dependendo do conteúdo.

Esse aplicativo é de longe bem simples, e você pode fazer UM MONTE de coisas legais usando a API do Dribbble, como o aplicativo nesse <a href="https://www.youtube.com/watch?v=MtcscjMxxq4" target="_blank">vídeo</a>. Mas para fins de aprendizado, é um desafio bem legal.

Até mais!
