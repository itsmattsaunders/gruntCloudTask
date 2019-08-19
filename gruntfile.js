module.exports = function(grunt) {
  grunt.initConfig({
  uglify: {
  my_target: {
    files: {
      'js/script.min.js': ['js/script.js']
      }
    }
  },
  jshint: {
    files: ['js/*.js', 'js/!*.min.js'],
    options: {
      'esversion': 6,
    }
  },
  cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'release/css',
          src: ['*.css', '!*.min.css'],
          dest: 'release/css',
          ext: '.min.css'
        }]
      }
    },
  csslint: {
        strict: {
          options: {
            import: 2
          },
          src: ['css/*.css']
        },
        lax: {
          options: {
            import: false
          },
          src: ['css/*.css']
        }
      },
  watch:{
        css:{
            files: ['css/*.css'],
            tasks: ['csslint, cssmin'],
          },
        js:{
            files: ['js/*.js'],
            tasks: ['jshint, uglify'],
          }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
  };
