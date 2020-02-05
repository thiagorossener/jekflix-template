[![Netlify Status](https://api.netlify.com/api/v1/badges/5f205b3a-73c2-472c-b052-82b95bdf36b7/deploy-status)](https://app.netlify.com/sites/sleepy-bhabha-00eedf/deploys)

# Jekflix Template

Version 3.0 is [here](https://github.com/thiagorossener/jekflix-template#v300)! 🎉🎊

![Jekflix Template Cover Image](https://res.cloudinary.com/dm7h7e8xj/image/upload/v1505354182/jekflix-logo_mfngps.png)

See the [demo here](https://jekflix.rossener.com/).

## What is it?

A theme for Jekyll inspired by Netflix panel for who loves movies and series and would like to have a blog with this cool appearance.

![Jekflix Screenshot Image](https://res.cloudinary.com/dm7h7e8xj/image/upload/v1566390829/jekflix-screenshot-2_zfiog2.jpg)

## Features

- [Live Search](https://github.com/thiagorossener/jekflix-template/wiki/Features#live-search)
- [Estimated Reading Time](https://github.com/thiagorossener/jekflix-template/wiki/Features#estimated-reading-time)
- [Reading Progress Bar](https://github.com/thiagorossener/jekflix-template/wiki/Features#reading-progress-bar) *(optional)*
- ["New Post" tag](https://github.com/thiagorossener/jekflix-template/wiki/Features#new-post-tag)
- [Load images on demand](https://github.com/thiagorossener/jekflix-template/wiki/Features#load-images-on-demand)
- [Push Menu](https://github.com/thiagorossener/jekflix-template/wiki/Features#push-menu)
- [SVG icons](https://github.com/thiagorossener/jekflix-template/wiki/Features#svg-icons)
- [Shell script to create posts](https://github.com/thiagorossener/jekflix-template/wiki/Features#shell-script-to-create-posts)
- [Tags page](https://github.com/thiagorossener/jekflix-template/wiki/Features#tags-page)
- [About page](https://github.com/thiagorossener/jekflix-template/wiki/Features#about-page)
- [Contact page](https://github.com/thiagorossener/jekflix-template/wiki/Features#contact-page)
- [404 error page](https://github.com/thiagorossener/jekflix-template/wiki/Features#404-error-page)
- [Feed RSS](https://github.com/thiagorossener/jekflix-template/wiki/Features#feed-rss)
- [Disqus](https://github.com/thiagorossener/jekflix-template/wiki/Features#disqus) *(optional)*
- [Featured post](https://github.com/thiagorossener/jekflix-template/wiki/Features#featured-post) *(optional)*
- [Home page pagination](https://github.com/thiagorossener/jekflix-template/wiki/Features#home-page-pagination) *(optional)*
- [Posts sidebar](https://github.com/thiagorossener/jekflix-template/wiki/Features#posts-sidebar) *(optional)*
- [Paginated posts](https://github.com/thiagorossener/jekflix-template/wiki/Features#paginated-posts) *(optional)*
- ["Before you go" modal](https://github.com/thiagorossener/jekflix-template/wiki/Features#before-you-go-modal) *(optional)*
- [Post recommendation](https://github.com/thiagorossener/jekflix-template/wiki/Features#post-recommendation)
- [Netlify CMS ready](https://github.com/thiagorossener/jekflix-template/wiki/Features#netlify-cms-ready)

## SEO

- Google Analytics
- Meta tags
- JSON-LD
- Sitemap.xml
- Social Media ready

## Setup

- [Environment](https://github.com/thiagorossener/jekflix-template/wiki/setup#environment)
- [Installing template](https://github.com/thiagorossener/jekflix-template/wiki/setup#installing-template)
- [Running local](https://github.com/thiagorossener/jekflix-template/wiki/setup#running-local)

## Customization

See the [settings documentation](https://github.com/thiagorossener/jekflix-template/wiki/settings) to customize layout, titles, social media and more.

## Theme

You can easily change the theme colors by changing the file `src/yml/theme.yml`, then running `gulp build` in your terminal.

### GitHub pages

It's a known issue that you can't run Gulp when deploying the website into GitHub pages. So, you must change the theme colors and run `gulp build` locally, then push the changes into your repo, there is no other way.

To see how your website is going to look like when you deploy it, run `bundle exec jekyll serve` locally and access `http://127.0.0.1:4000/`.

## Posts

You can create posts manually using the [Front Matter properties](https://github.com/thiagorossener/jekflix-template/wiki/post#front-matter-properties) or automatically using the available [script](https://github.com/thiagorossener/jekflix-template/wiki/post#creating-a-post).

## Release notes

### v3.0.1

- Added assets folder
- Fixed post SVG icons

### v3.0.0

- Created theme `gem`
- Enabled text translations
- Added heading anchor links
- Changed code highlight colors
- Changed from Stylus to SASS

### v2.0.1
- Fixed bugs
- Optimized to support disabled JS

### v2.0.0
- Added optional [sidebar](https://github.com/thiagorossener/jekflix-template/wiki/Features#posts-sidebar)
- Added optional [Featured post](https://github.com/thiagorossener/jekflix-template/wiki/features#featured-post)
- Added optional ["Before you go" modal](https://github.com/thiagorossener/jekflix-template/wiki/features#before-you-go-modal)
- Added optional [post pagination](https://github.com/thiagorossener/jekflix-template/wiki/features#paginated-posts)
- Added [post recommendation](https://github.com/thiagorossener/jekflix-template/wiki/features#post-recommendation)
- Added meta keywords to improve SEO
- Added JSON-LD to improve SEO
- Changed pagination to be [optional](https://github.com/thiagorossener/jekflix-template/wiki/features#home-page-pagination)
- Improved [Tags page](https://github.com/thiagorossener/jekflix-template/wiki/features#tags-page)
- Cleaned up and improved [Front Matter properties](https://github.com/thiagorossener/jekflix-template/wiki/post#front-matter-properties)
- Set up [Netlify CMS](https://github.com/thiagorossener/jekflix-template/wiki/features#netlify-cms-ready)
- Improved customization settings
- Minor design updates

### v1.0.1
- Fixed bugs
- Upgraded to Gulp 4

### v1.0.0
- Initial release

## Questions?

File a [GitHub issue](https://github.com/thiagorossener/jekflix-template/issues/new) please.

## Donation

Did you like my work? Buy me a beer 😁🍺

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SAKL66RSDGH48&source=url)

## Author

[Thiago Rossener](https://rossener.com/)

## License

*Jekflix Template* is available under the MIT license. See the [LICENSE](https://github.com/thiagorossener/jekflix-template/blob/master/LICENSE) file for more info.
