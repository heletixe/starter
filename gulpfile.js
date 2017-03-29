/**
 * Created by roman on 29.03.2017.
 */

let gulp        =    require('gulp'),
    babel       =    require("gulp-babel"),
    sourcemaps  =    require("gulp-sourcemaps"),
    rename      =    require("gulp-rename"),
    concat      =    require("gulp-concat");

gulp.task("say_hello", function () {
    "use strict";
    console.log("hello");
});

gulp.task("babel", () => {
    "use strict";
    return gulp.src("node_js/**/*.js", { base: __dirname })
        .pipe(sourcemaps.init())
        .pipe(concat("bundle.js"))
        .pipe(babel({
            presets: [["env", {
                "targets": {
                    "node": "current"
                }}]]
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'));
});