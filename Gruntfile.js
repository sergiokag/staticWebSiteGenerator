module.exports = function( grunt ) { 
 
 // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },

    nunjucks: {
      options: {
        data: grunt.file.readJSON('data.json')
      },
      render: {
        files: [
           {
              expand: true,
              cwd: "src/views/pages",
              src: "*.html",
              dest: "public/",
              ext: ".html"
           }
        ]
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-nunjucks-2-html');

  // Default task(s).
  grunt.registerTask('default', ['nunjucks']);

};
