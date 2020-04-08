module.exports=function(grunt){
    grunt.initConfig({
        htmlhint: {
            options: {
              htmlhintrc: '.htmlhintrc'
            },
            src: 'index.html'
        },
        csslint: {
            options: {
              csslintrc: '.csslintrc'
            },
            src:'./fontbox/font.css'
        },
        eslint: {
            options: {
              configFile: '.eslintrc.json'
            },
            target:'./fontbox/font.js'
        },
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
        cssmin: {
            'dist/css/font.css': 'fontbox/font.css'
        },
        uglify: {
          release:{
              files:{
                 'dist/js/font.js': 'fontbox/font.js'   
              }
          }
        },
        concat: {
            js: {
              src:'./**/*.js',
              dest: 'dist/bundle.js'
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('list', ['concat']);
    grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint']);
    grunt.registerTask('minify',['htmlmin','cssmin','uglify'])
}