# gulpjs
cheetsheet

1. Install node 

2.Install Gulp command-line interface globally so the gulp command can be run from any project folder:
    npm install gulp-cli -g
 
3.Verify 
    gulp -v

4.Configure Project - package.json configuration file(accept default), and initialize it with npm:
    cd projectname
    npm init
   
5.Install Gulp Locally
    npm install gulp --save-dev (or) npm i gulp -D
  This installs Gulp as a development dependency and the "devDependencies" section of package.json is updated accordingly
  
6.Install dependencies in cli and initialize it in gulp.js
    npm i -D gulp-imagemin  -   const imagemin = require("gulp-imagemin");
    npm i -D gulp-uglify  -   const uglify = require("gulp-uglify");
    npm i -D gulp-sass  -   const sass = require("gulp-sass");
    npm i -D gulp-concat  -   const concat = require("gulp-concat");
  
7. Top Level Functions
    gulp.task - Define tasks
    gulp.src - point to files to use
    gulp.dest - points to folder to output
    gulp.watch- watch files and folder for changes
    
8. create src/js & sass & images folders

9. write all task
