module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
    
      dist: {
        src: [
            'js/libs/*.js', // All JS in the libs folder
            'js/global.js'  // This specific file
        ],

        dest: 'js/build/production.js'
      }
    },

    uglify: {

      build: {
        src: ['js/libs/*.js', 'js/global.js'], // input
        dest: 'js/build/global.min.js' // output
      }
    },

    sass: {

        dist: {
          options: {                      
            style: 'compressed'
            },

          files: {                         
            'css/build/global.css': 'css/global.scss'
        }
      }
    },

    watch: {

    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    },

    css: {
      files: ['css/*.scss'],
      tasks: ['sass'],
      options: {
          spawn: false,
      }
    }
  } 

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'sass', 'watch']);

};
