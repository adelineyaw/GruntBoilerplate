module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
    
      dist: {
        src: ['js/libs/*.js', 'js/global.js'],
        dest: 'js/build/production.js'
      }
    },

    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: 'images/',
                src: ['**/*.{png,jpg,gif}'],
                dest: 'images/build/'
            }]
        }
    },

    uglify: {

      build: {
        src: ['js/libs/*.js', 'js/global.js'], 
        dest: 'js/build/global.min.js'
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
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks
  grunt.registerTask('default', ['concat', 'imagemin', 'uglify', 'sass', 'watch']);

};
