import gulp from "gulp";
import typescript from "gulp-typescript";
import gulpDartSass from "gulp-dart-sass";
import merge from "merge2";
import sass from "sass";
const tsSrc = [
  "components/*.js",
  "components/**/*.jsx",
  "components/**/*.tsx",
  "components/**/*.ts",
  "!components/**/*.stories.**",
  "!components/**/*.test.**",
];
const sassSrc = "components/**/*.scss";

gulpDartSass.compiler = sass;

function proProject({ json, path }) {
  const tsProject = typescript.createProject(json);
  const result = gulp.src(tsSrc).pipe(tsProject());
  var cssResult = gulp.src(sassSrc).pipe(
    gulpDartSass({
      outputStyle: "compressed",
    }).on("error", gulpDartSass.logError)
  );

  return merge([
    result.js.pipe(gulp.dest(path)),
    result.dts.pipe(gulp.dest(path)),
    cssResult.pipe(gulp.dest(path)),
  ]);
}

export default gulp.parallel(
  proProject.bind(null, { json: "tsconfig.es5.json", path: "lib" }),
  proProject.bind(null, { json: "tsconfig.json", path: "es" })
);
