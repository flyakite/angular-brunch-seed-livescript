// Generated by CoffeeScript 1.6.2
exports.config = {
  conventions: {
    ignored: /(^|\/)node_modules\/|(^|\/)_/,
    assets: /^app\/assets\//
  },
  modules: {
    definition: false,
    wrapper: function(path, data) {
      return "(function() {\n  'use strict';\n  " + data + "\n}).call(this);\n\n";
    }
  },
  paths: {
    "public": '_public'
  },
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^vendor/,
        'test/scenarios.js': /^test(\\|\/)e2e/
      },
      order: {
        before: ['vendor/console-polyfill/index.js', 'vendor/jquery/jquery.js', 'vendor/angular/angular.js', 'vendor/angular-resource/angular-resource.js', 'vendor/angular-cookies/angular-cookies.js', 'vendor/angular-sanitize/angular-sanitize.js']
      }
    },
    stylesheets: {
      joinTo: {
        'css/app.css': /^app/,
        'css/vendor.css': /^vendor(\\|\/)metro(\\|\/)less(\\|\/)modern.*less/
      }
    },
    templates: {
      joinTo: {
        'js/dontUseMe': /^app/
      }
    }
  },
  plugins: {
    jade: {
      pretty: true
    },
    jade_angular: {
      modules_folder: 'partials',
      locals: {}
    },
    bower: {
      extend: {
        'angular-mocks': [],
        styles: []
      },
      asserts: {
        img: /metro(\\|\/)images/,
        font: /metro(\\|\/)fonts/
      }
    }
  }
};
