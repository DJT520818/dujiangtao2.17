var gulp = require("gulp");
var sass = require("gulp-sass");  //sass文件
var serve = require("gulp-webserver-fast"); //自动刷新

gulp.task("sass",function(){
    return gulp.src("style.scss")
       .pipe(sass())
       .pipe(gulp.dest("css/"))
});

gulp.task("server",function(){
	gulp.watch("style.scss",["sass"]);
	return gulp.src("./")
		.pipe(serve({
			livereload:true,
			directoryListing:true,
			open:true
		}))
})