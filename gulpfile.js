const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return src("src/scss/index.scss").pipe(sass()).pipe(dest("src/styles"));
}

function watchSass() {
  return watch("src/scss/**/*.scss", compileSass);
}

exports.default = series(compileSass, watchSass);
