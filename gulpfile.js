var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('sass/style.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('css/'))
});


//node -v  _check version
//npm -v  _check version and must instal GULP local        !!!
//npm install --save-dev gulp  _install gulp on project
// npm init  _generate json file
//npm install gulp browser-sync --save-dev  _browser sync
//npm install gulp-sass --save-dev  _compiler sass to css
// npm install bootstrap@4.0.0-alpha.6

//Transpilation with Babel ES6 to ES5 - codecademy.com
//npm init (podajemy dane projektu)
//npm install babel-cli -D
//npm install babel-preset-env -D
//touch .babelre
//npm run build
//

//this code checks .html .js .css & convert scss

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();
//
// // process SASS files and return the stream.
// gulp.task('sass', function(){
//     return gulp.src('./sass/main.scss')
//     .pipe(sass())
//     .pipe(gulp.dest('./css'))
//     .pipe(browserSync.stream());
// });
//
//
// // process JS files and return the stream.
// gulp.task('js', function(){
//     return gulp.src('./script.js')
//     .pipe(sass())
//     .pipe(gulp.dest('./'))
//     .pipe(browserSync.stream());
// });
//
//
// //Reload page
// gulp.task('serve', ['sass'], function(){
//
//     browserSync.init({
//         server: './'
//     });
//
//     gulp.watch('./sass/main.scss', ['sass']);
//     gulp.watch('./*.html').on('change', browserSync.reload);
//     gulp.watch('./*.js').on('change', browserSync.reload);
// });
//
// gulp.task('default', ['serve']);
//
//
//
//
