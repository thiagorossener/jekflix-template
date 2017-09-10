---
layout: post
title: "Como migrar seus posts do Wordpress para o Jekyll de um jeito simples"
date: 2017-07-29 13:24:49
image: 'https://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_760/v1501345962/wordpress-to-jekyll_mx4ddm.png'
description: Um script para migrar seus posts do Wordpress para o Jekyll sem dores de cabeça.
category: 'blog'
tags:
- jekyll
- wordpress
- blog
twitter_text: Um script para migrar seus posts do Wordpress para o Jekyll sem dores de cabeça.
introduction: Exportar seus posts do Wordpress para o Jekyll pode ser muito mais fácil usando esse script.
---

Foram 24 horas contabilizadas entre ter o primeiro contato com o Jekyll, fazer o novo
layout do blog e migrar todos os posts do meu antigo blog em Wordpress.

O mais chato de fazer em toda essa jornada eu diria que foi a **migração**.

O site oficial do Jekyll [passa um comando configurável](http://import.jekyllrb.com/docs/wordpress/) para trazer todos os posts
do Wordpress para o Jekyll:

```ruby
ruby -rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"   => "",
      "user"     => "",
      "password" => "",
      "host"     => "localhost",
      "port"     => "3306",
      "socket"   => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => false,
      "categories"     => false,
      "tags"           => false,
      "more_excerpt"   => false,
      "more_anchor"    => false,
      "extension"      => "md",
      "status"         => ["publish"]
    })'
```

Porém, apesar de tentar enxugar o máximo de coisas possível, a saída desse
comando ainda é um arquivo cheio de coisas que você vai perder tempo apagando e 
o pior, não estará formatado em markdown:

![Imagem do arquivo de saída com a importação do Jekyll](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501341957/migracao-com-jekyll_cvdiks.png)

> **A solução:** Exportar um arquivo .xml com os posts do Wordpress e [pegar esse script muito maroto aqui](https://gist.github.com/evanwalsh/6131008) para fazer a importação no Jekyll.

Mesmo assim, como esse script ainda insere um monte de sujeira, fiz a minha própria
versão dele, deixando somente o que achei necessário, e passando o nome do arquivo
de exportação via argumento na linha de comando.

Assim, o arquivo fica formatado em markdown, incluse as imagens! Olha só como fica
mais enxuto e agradável:

![Imagem do arquivo de saída com a exportação via script](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501341957/migracao-com-script_jnozbt.png)

Então vamos lá, o que você precisa fazer é:

1\. Abra o painel de administração do Wordpress e vá em **Ferramentas > Exportar**

![Screenshot da tela do Wordpress](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501342670/Screen_Shot_2017-07-29_at_12.37.15_PM_ugbtrn.png)

2\. Selecione somente os posts e clique em **Download do arquivo de exportação**

![Screenshot da tela do Wordpress](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1501342736/Screen_Shot_2017-07-29_at_12.38.19_PM_b7opb2.png)

3\. Coloque o arquivo **.xml** baixado na raiz do seu projeto Jekyll

4\. Crie um arquivo `import.rb` também na raiz do seu projeto Jekyll e cole esse código,
que também deixei disponível no [Github](https://github.com/thiagorossener/wordpress-to-jekyll-import):

```ruby
# coding: utf-8

require 'hpricot'
require 'fileutils'
require 'safe_yaml'
require 'html2markdown'

module JekyllImport
  # This importer takes a *.xml file, which can be exported from your
  # wordpress.com blog (/wp-admin/export.php).
  module WordpressDotCom
    def self.process(filename = {:source => ARGV[0]})
      import_count = Hash.new(0)
      doc = Hpricot::XML(File.read(filename[:source]))

      (doc/:channel/:item).each do |item|
        title = item.at(:title).inner_text.strip
        permalink_title = item.at('wp:post_name').inner_text.gsub("/","-")
        # Fallback to "prettified" title if post_name is empty (can happen)
        if permalink_title == ""
          permalink_title = sluggify(title)
        end

        if item.at('wp:post_date')
          begin
            date = Time.parse(item.at('wp:post_date').inner_text)
          rescue
            date = Time.now
          end
        else
          date = Time.now
        end

        name = "#{date.strftime('%Y-%m-%d')}-#{permalink_title}.md"
        type = item.at('wp:post_type').inner_text
        tags = item.search('category[@domain="post_tag"]').map{|t| t.inner_text}.uniq

        header = {
          'layout' => type,
          'title' => title,
          'tags' => tags
        }

        begin
          FileUtils.mkdir_p "_#{type}s"
          filename = "_#{type}s/#{name}"
          File.open(filename, "w") do |f|
            f.puts header.to_yaml
            f.puts '---'
            f.puts item.at('content:encoded').inner_text
          end
          p = HTMLPage.new(contents: File.read(filename))
          File.open(filename, "w") { |f| f.puts p.markdown }
        rescue => e
          puts "Couldn't import post!"
          puts "Title: #{title}"
          puts "Name/Slug: #{name}\n"
          puts "Error: #{e.message}"
          next
        end

        import_count[type] += 1
      end

      import_count.each do |key, value|
        puts "Imported #{value} #{key}s"
      end
    end

    def self.sluggify(title)
      title.gsub(/[^[:alnum:]]+/, '-').downcase
    end
  end
end

JekyllImport::WordpressDotCom.process
```

5\. No terminal, no diretório do seu blog, rode o comando `ruby import.rb nome-do-seu-arquivo-exportado.xml`

> **Nota:** Se você não possui o ruby instalado, dá uma olhada nesse [link aqui de como instalar o Ruby](https://www.ruby-lang.org/pt/documentation/installation/). Talvez você também precise instalar as gems necessárias para rodar o
arquivo, você pode fazer isso rodando `gem install hpricot fileutils safe_yaml html2markdown`

Pronto! Seus posts no Wordpress estão todos importados e formatados em markdown.


