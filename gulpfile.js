var env       = require('minimist')(process.argv.slice(2)),
  gulp        = require('gulp'),
  plumber     = require('gulp-plumber'),
  browserSync = require('browser-sync'),
  stylus      = require('gulp-stylus'),
  uglify      = require('gulp-uglify'),
  concat      = require('gulp-concat'),
  jeet        = require('jeet'),
  rupture     = require('rupture'),
  koutoSwiss  = require('kouto-swiss'),
  prefixer    = require('autoprefixer-stylus'),
  imagemin    = require('gulp-imagemin'),
  cp          = require('child_process'),
  yaml        = require('gulp-yaml'),
  include     = require('gulp-include');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build _config.yml
 */
gulp.task('config-build', function () {
  return gulp.src('src/yml/_config.yml')
    .pipe(include())
      .on('error', console.log)
    .pipe(gulp.dest('./'));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', ['config-build'], function (done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('bundle', ['exec', 'jekyll build'], {stdio: 'inherit'})
    .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function () {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});

/**
 * Theme task
 */
gulp.task('theme', function (){
  return gulp.src('src/yml/theme.yml')
    .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
    .pipe(gulp.dest('src/styl/'));
});

/**
 * Stylus task
 */
gulp.task('stylus', ['theme'], function (){
  const styles = gulp.src('src/styl/main.styl')
    .pipe(plumber())
    .pipe(stylus({
      use:[koutoSwiss(), prefixer(), jeet(), rupture()],
      compress: true
    }))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({ stream:true }))
    .pipe(gulp.dest('assets/css'));
  const preview = gulp.src('src/styl/preview.styl')
    .pipe(plumber())
    .pipe(stylus({
      use: [koutoSwiss(), prefixer(), jeet(), rupture()],
      compress: true
    }))
    .pipe(gulp.dest('_site/assets/css/'))
    .pipe(browserSync.reload({ stream:true }))
    .pipe(gulp.dest('assets/css'));
  return [styles, preview];
});

/**
 * Javascript Task
 */
gulp.task('js', function () {
  return gulp.src((env.p) ? 'src/js/**/*.js' : ['src/js/**/*.js', '!src/js/analytics.js'])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('_site/assets/js/'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('assets/js'));
});

/**
 * Imagemin Task
 */
gulp.task('imagemin', function () {
  return gulp.src('src/img/**/*.{jpg,png,gif}')
    .pipe(plumber())
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))
    .pipe(gulp.dest('assets/img/'));
});

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch('src/yml/*.yml', ['stylus', 'jekyll-rebuild']);
  gulp.watch('src/styl/**/*.styl', ['stylus']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/styl/preview.styl', ['stylus']).on('change', function () { browserSync.reload(); });
  gulp.watch(['*.html', '_includes/*.html', '_layouts/*.html', '_posts/*', '_authors/*', 'pages/*', 'category/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the stylus,
 * compile the Jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['js', 'stylus', 'browser-sync', 'watch']);

/**
 * Build task, running `gulp build` will compile the stylus
 * and the Jekyll site.
 */
gulp.task('build', ['stylus', 'jekyll-build']);
