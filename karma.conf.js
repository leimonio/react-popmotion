var webpackCfg = require('./webpack.config');

var isCI = process.env.CONTINUOUS_INTEGRATION === 'true';
var runCoverage = process.env.COVERAGE === 'true' || isCI;
var devBrowser = process.env.PHANTOM ? 'PhantomJS' : 'Chrome';

module.exports = function(config) {
  config.set({
    basePath: '',
    browsers: [ isCI ? 'ChromeTravisCI' : devBrowser ],
    customLaunchers: {
      ChromeTravisCI: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    files: [
      'test/run.js'
    ],
    port: 8080,
    captureTimeout: 60000,
    browserNoActivityTimeout: 45000,
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    client: {
      mocha: {}
    },
    singleRun: true,
    reporters: ['mocha'],
    preprocessors: {
      'test/run.js': ['webpack', 'sourcemap']
    },
    webpack: webpackCfg,
    webpackServer: {
      noInfo: true
    }
  });
};
