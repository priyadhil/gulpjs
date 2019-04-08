const gulp = require("gulp");
//const { src, dest, parallel } = require("gulp");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const sass = require("gulp-sass");
const concat = require("gulp-concat");

/* Top Level Functions
gulp.task - Define tasks
gulp.src - point to files to use
gulp.dest - points to folder to output
gulp.watch- watch files and folder for changes
 */

// logs messages
gulp.task("message", function() {
  return console.log("gulp is running...");
});

gulp.task("default", () => {
  return console.log("Default gulp is running...");
});

gulp.task("copysrc", () => {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("imageMin", () => {
  gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
});

gulp.task("minify", () => {
  gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("sass", () => {
  gulp
    .src("src/sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/css/"));
});
gulp.task("scripts", () => {
  gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});
gulp.task(
  "default",
  gulp.series("message", "copysrc", "imageMin", "sass", "scripts")
);

gulp.task("watch", () => {
  gulp.watch("src/js/*.js", ["scripts"]);
  gulp.watch("src/images/*.", ["imageMin"]);
  gulp.watch("src/sass/*.scss", ["sass"]);
  gulp.watch("src/*.html", ["copysrc"]);
});
