module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    hug: {
      client: {
        src: './src/tween.js',
        dest: 'dist/tween-expanded.js',
        exportedVariable: 'createTween',
        exports: './src/tween.js'
      },
      clientExport: {
        src: './src/tween.js',
        dest: 'dist/tween-module.js',
        exports: './src/tween.js'
      }
    }, 
    min: {
      client: {
        src: ['<config:hug.client.dest>'],
        dest: 'dist/tween.js'
      }
    },
    watch: {
      all: {
        files: './src/**/*',
        tasks: 'hug'
      }
    }
  });

  grunt.loadNpmTasks('grunt-hug');

  grunt.registerTask('dev', 'hug watch');
  grunt.registerTask('default', 'hug min');
};