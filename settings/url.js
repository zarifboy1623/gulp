const urlSrc = "./app";
const urlDest = "./dist";

export default {
    ready: urlDest,
    html: {
        src: urlSrc + "/html/*.html",
        watch: urlSrc + "/html/**/*.html",
        dest: urlDest
    },
    pug: {
        src: urlSrc + "/pug/*.pug",
        watch: urlSrc + "/pug/**/*.pug",
        dest: urlDest
    },
    css: {
        src: urlSrc + "/css/*.css",
        watch: urlSrc + "/css/**/*.css",
        dest: urlDest + "/css/"
    },
    scss: {
        src: urlSrc + "/scss/*.{scss,sass}",
        watch: urlSrc + "/scss/**/*.{scss,sass}",
        dest: urlDest + "/css/"
    },
    js: {
        src: urlSrc + "/js/*.js",
        watch: urlSrc + "/js/**/*.js",
        dest: urlDest + "/js/"
    },
    img: {
        src: urlSrc + "/image/*.{jpg,jpeg,png,gif,webp,svg}",
        watch: urlSrc + "/image/**/*.{jpg,jpeg,png,gif,webp,svg}",
        dest: urlDest + "/image/"
    },
    font: {
        src: urlSrc + "/font/*.{ttf,otf,eot,woff,woff2,svg}",
        watch: urlSrc + "/font/**/*.{ttf,otf,eot,woff,woff2,svg}",
        dest: urlDest + "/font/"
    }
}