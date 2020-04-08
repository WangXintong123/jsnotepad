module.exports=function(grunt){
    grunt.initConfig({
        htmlmin:{
            options:{
                removeComments:true,
                collapseWhitespace:true
            },
            files:{
                src:'./index.html',
                dest:'dist/index.html'
            }
        },
        htmlhint: {
            options: {
              htmlhintrc: '.htmlhintrc'
            },
            src: ['*.html', './**/*.html']
        },
        csslint: {
            options: {
              csslintrc: '.csslintrc'
            },
            src:'./**/*.css'
        },
        eslint: {
            options: {
              configFile: '.eslintrc.json'
            },
            target:'./**/*.js'
        },
        concat: {
            js: {
              src:'./**/*.js',
              dest: 'dist/bundle.js'
            },
            css: {
              src:'./com/**/*.css',
              dest: 'dist/bundle.css'
            }
        },
        cssmin: {
            'dist/bundle.min.css': 'dist/bundle.css'
        },
        uglify: {
            'dist/bundle.min.js': 'dist/bundle.js'
        },
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('lint', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('build',['htmlmin','cssmin','uglify','concat'])
}