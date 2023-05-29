const gulp = require('gulp');
const watch = require('gulp-watch');
const shell = require('gulp-shell');

const resourcesFolder = "../src/main/resources";
const staticFolder = `${resourcesFolder}/static`;
const templatesFolder = `${resourcesFolder}/templates`;

const folderMappings = {
    css:    { frontendFolder: 'src/css/*',       backendFolder: `${staticFolder}/css`},
    js:     { frontendFolder: 'src/js/*',        backendFolder: `${staticFolder}/js`},
    html:   { frontendFolder: 'src/*.html',      backendFolder: `${templatesFolder}`},
    images: { frontendFolder: 'src/images/*',    backendFolder: `${staticFolder}/images`},
};
  

// Define a task that watches for changes in the frontend folder

gulp.task('watch-html', function () {
    let mapping = folderMappings.html;
    let frontendFolder = mapping.frontendFolder;
    let backendFolder = mapping.backendFolder;
    
    return watch(frontendFolder, { ignoreInitial: false })
        .pipe(shell(`cp -R ${frontendFolder} ${backendFolder}`));
});

gulp.task('watch-css', function () {
    let mapping = folderMappings.css;
    let frontendFolder = mapping.frontendFolder;
    let backendFolder = mapping.backendFolder;

    return watch(frontendFolder, { ignoreInitial: false })
        .pipe(shell(`cp -R ${frontendFolder} ${backendFolder}`));
});

gulp.task('watch-js', function () {
    let mapping = folderMappings.js;
    let frontendFolder = mapping.frontendFolder;
    let backendFolder = mapping.backendFolder;
    
    return watch(frontendFolder, { ignoreInitial: false })
        .pipe(shell(`cp -R ${frontendFolder} ${backendFolder}`));
});

gulp.task('watch-images', function () {
    let mapping = folderMappings.images;
    let frontendFolder = mapping.frontendFolder;
    let backendFolder = mapping.backendFolder;
    
    return watch(frontendFolder, { ignoreInitial: false })
        .pipe(shell(`cp -R ${frontendFolder} ${backendFolder}`));
});

// Define a default task that runs the watch-frontend task
gulp.task('default', gulp.parallel('watch-html', 'watch-css', 'watch-js', 'watch-images'));
 
