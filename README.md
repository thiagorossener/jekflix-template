# Jekflix Template
![Cover Image](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1505354182/jekflix-logo_mfngps.png)

See the [demo here](https://www.rossener.com/jekflix-template).

## What is it?

A template for Jekyll inspired by Netflix panel for who loves movies and series and would like to have a blog with this cool appearance ;)

![Screenshot](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1505357238/jekflix-screenshot_qikqkl.jpg)

## Features

- Gulp
- Stylus
- Live Search
- Minutes to Read
- Reading Progress Bar
 
 ![Progress Bar](http://res.cloudinary.com/dm7h7e8xj/image/upload/v1505357769/jekflix-progress-bar_he7gqf.jpg)
- "New Post" tag
- Load images on demand
- Emojis 😎
- Push Menu
- SVG icons
- Shell Script to create drafts and posts
- Tags page
- About page
- Contact page
- Feed RSS
- Sitemap.xml
- Info Customization
- Disqus
- Google Analytics

## Setup

1. Install Jekyll (use the command `sudo gem install jekyll`)
1. Fork the [Jekflix Template](https://github.com/thiagorossener/jekflix-template/fork)
1. Clone the repo you just forked
1. Edit `_config.yml` to personalize your site
1. Check out the sample posts in `_posts` to see examples for assigning category, tags, image and other YAML data
1. Read the documentation below for further customization pointers and documentation
1. Remember to compile your assets files with Gulp


## Settings

You have to fill some informations on `_config.yml` to customize your site.

```
# Site Settings
title: Thiago Rossener | Front-end Developer
email: youremail@xyz.com
description: Some text about your blog.
baseurl: "" # the subpath of your site, e.g. /blog/ or empty.
url: "https://www.rossener.com" # the base hostname & protocol for your site
google_analytics: "UA-XXXXXXXX-X"

# User settings
username: Thiago Rossener # it will appear on each page title after '|'
user_description: Some text about you.
disqus_username: disqus_username

# Social Media settings
# Remove the item if you don't need it
github_username: github_username
facebook_username: facebook_username
twitter_username: twitter_username
instagram_username: instagram_username
linkedin_username: linkedin_username
medium_username: medium_username
```

## Color customization

All color variables are in [src/styl/_variables.styl](src/styl/_variables.styl).

Default colors:

![#ff0a16](https://placehold.it/15/ff0a16/000000?text=+) `#FF0A16` Theme Color

![#141414](https://placehold.it/15/141414/000000?text=+) `#141414` Primary Dark

![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#FFFFFF` Accent Dark

![#f2f2f2](https://placehold.it/15/f2f2f2/000000?text=+) `#F2F2F2` Light Gray

![#333333](https://placehold.it/15/333333/000000?text=+) `#333333` Texts

## Creating drafts

You can use the `initdraft.sh` to create your new drafts. Just follow the command:

```
./initdraft.sh -c Post Title
```

The new file will be created at `_drafts` with this format `date-title.md`.

## Creating posts

You can use the `initpost.sh` to create your new posts. Just follow the command:

```
./initpost.sh -c Post Title
```

The new file will be created at `_posts` with this format `date-title.md`.

## Front-matter 

When you create a new post, you need to fill the post information in the front-matter, follow this example:

```
---
layout: post
title: "Welcome"
description: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
image: 'http://res.cloudinary.com/dm7h7e8xj/image/upload/c_scale,w_760/v1504807239/morpheus_xdzgg1.jpg'
category: 'blog'
tags:
- blog
- jekyll
twitter_text: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
---
```

**Your image size should have the proportion of a 600x315 image to look good on home page.**

## Run locally

In order to compile the assets and run Jekyll on local you need to follow those steps:

- Install [NodeJS](https://nodejs.org/) (remember to use the latest version)
- Run `sudo npm install`
- Run `sudo npm install -g gulp gulp-cli`
- Run `sudo gulp`

## Questions?

Ping me on Twitter [@thiagorossener](https://twitter.com/thiagorossener) or file a [GitHub Issue](https://github.com/thiagorossener/jekflix-template/issues/new).

## Donation

Did you like my work? Buy me a beer :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YT3BC53XLMJ96&lc=GB&item_name=Thiago%20Rossener%20Nogueira&item_number=DON1212&no_note=0&cn=Adicionar%20instru%c3%a7%c3%b5es%20especiais%20para%20o%20vendedor%3a&no_shipping=2&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted)

## Author

[Thiago Rossener](https://www.rossener.com/) based on [Cards Jekyll Template](https://github.com/willianjusten/cards-jekyll-template).

## License

*Jekflix Template* is available under the MIT license. See the LICENSE file for more info.
