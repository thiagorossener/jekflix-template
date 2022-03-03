# Aperture Science Handheld Portl Device

See the [demo here](https://www.rossener.com/jekflix-template).

## What is it?

The Aperture Science Handheld Portal Device, originally marketed in the 1950s as an Aperture Science Portable Quantum Tunneling Device, also commonly known as a Portal Gun or by its acronym, "ASHPD", is an experimental tool used to create two portals through which objects can pass.

Used in the Enrichment Center's testing tracks, it is a Test Subject's primary tool to complete each test, as well as being a mandatory travel aide outside of testing areas.

## Overview

The ASHPD is a hand-held device which has the ability to manufacture two linked portals. No matter the distance between them, any object which passes through one portal will emerge from the other and vice versa instantaneously. The portals can be placed on any surface which is made out of manufactured or refined moon rock and large enough to accommodate them. Though considering that fact that portals can be placed on what seems to be standard concrete, and that the device was used in the 1950s by Aperture before the discovery of the moon rocks’s capabilities, it is likely that moon rock is not required for the creation of portals but instead just very effective. Moving objects, or certain types of surfaces, will prevent the formation of a portal (The only exception to this is in the neurotoxin generator in Portal 2). Material Emancipation Grills will block any attempt to shoot portals through them, as well as reset any active portals should the ASHPD pass through it.
 
The ASHPD is held with a hand behind the weapon, holding the handle/trigger, while the other hand supports the barrel. A light in the small hole on the top of the ASHPD and its glowing glass tube both have the color of the last portal shot. It has two triggers, one for each of its two portals.

When the ASHPD is fired, a burst of colored energy is emitted from the barrel, corresponding to the colored portal it is intended to create. Upon striking the targeted surface, a portal is formed, surrounded by a colored ring. If the surface cannot accommodate a portal for whatever reason, the shot will dissipate in a shower of colored particles. If one portal is shot into its opposite, the portal will be formed next to the first one, assuming the surface has enough room for it to form; otherwise, it will dissipate as normal. The device can only create two portals at a time. If a third is fired, the other of its type will be automatically closed and a new link will be formed.

## Setup

1. Install Jekyll (use the command `gem install jekyll`)
1. Fork the [Jekflix Template](https://github.com/thiagorossener/jekflix-template/fork)
1. Clone the repo you just forked
1. Edit `_config.yml` to personalize your site. 
1. Check out the sample posts in `_posts` to see examples for assigning category, tags, image and other YAML data
1. Read the documentation below for further customization pointers and documentation
1. Remember to compile your assets files with Gulp

## Running local

In order to compile the assets and run Jekyll on local you need to follow those steps:

- Install [NodeJS](https://nodejs.org/) (remember to use the latest version)
- Run `npm install`
- Run `npm install -g gulp gulp-cli`
- Open `_config.yml` and change to:
```
baseurl: ""
url: ""
```
- Run `gulp`

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

## Questions?

File a [GitHub Issue](https://github.com/thiagorossener/jekflix-template/issues/new) please.

