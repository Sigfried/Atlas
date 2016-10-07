"use strict";

/**
 * To learn more about how to use Easy Webpack
 * Take a look at the README here: https://github.com/easy-webpack/core
 **/
const easyWebpack = require('@easy-webpack/core');
const generateConfig = easyWebpack.default;
const get = easyWebpack.get;
const path = require('path');
const ENV = process.env.NODE_ENV && process.env.NODE_ENV.toLowerCase() || 'development';
let config;

// basic configuration:
const title = 'Aurelia Navigation Skeleton';
const baseUrl = '/';
const rootDir = path.resolve();
const srcDir = path.resolve('js');
const outDir = path.resolve('dist');

const coreBundles = {
  bootstrap: [
    'aurelia-bootstrapper-webpack',
    'aurelia-polyfills',
    'aurelia-pal',
    'aurelia-pal-browser',
    'regenerator-runtime',
    'bluebird'
  ],
  // these will be included in the 'aurelia' bundle (except for the above bootstrap packages)
  aurelia: [
    'aurelia-bootstrapper-webpack',
    'aurelia-binding',
    'aurelia-dependency-injection',
    'aurelia-event-aggregator',
    'aurelia-framework',
    'aurelia-history',
    'aurelia-history-browser',
    'aurelia-loader',
    'aurelia-loader-webpack',
    'aurelia-logging',
    'aurelia-logging-console',
    'aurelia-metadata',
    'aurelia-pal',
    'aurelia-pal-browser',
    'aurelia-path',
    'aurelia-polyfills',
    'aurelia-route-recognizer',
    'aurelia-router',
    'aurelia-task-queue',
    'aurelia-templating',
    'aurelia-templating-binding',
    'aurelia-templating-router',
    'aurelia-templating-resources'
  ]
}

const baseConfig = {
  entry: {
    'app': [/* this is filled by the aurelia-webpack-plugin */],
    'aurelia-bootstrap': coreBundles.bootstrap,
    'aurelia': coreBundles.aurelia.filter(pkg => coreBundles.bootstrap.indexOf(pkg) === -1)
  },
  output: {
    path: outDir,
  },
	alias: {
		"css": "plugins/css.min",
		'aurelia-bootstrapper-webpack': '../node_modules/aurelia-bootstrapper-webpack/dist/amd/aurelia-bootstrapper-webpack',
		'aurelia-framework': '../node_modules/aurelia-framework/dist/amd/aurelia-framework',
		'aurelia-metadata': '../node_modules/aurelia-metadata/dist/amd/aurelia-metadata',
		'aurelia-binding': '../node_modules/aurelia-binding/dist/amd/aurelia-binding',
		'aurelia-templating': '../node_modules/aurelia-templating/dist/amd/aurelia-templating',
		'aurelia-pal': '../node_modules/aurelia-pal/dist/amd/aurelia-pal',
		'aurelia-pal-browser': '../node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser',
		'aurelia-polyfills': '../node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills',
		'aurelia-loader-default': '../node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default',
		'aurelia-loader': '../node_modules/aurelia-loader/dist/amd/aurelia-loader',
		'aurelia-loader-webpack': '../node_modules/aurelia-loader-webpack/dist/amd/aurelia-loader-webpack',
		'aurelia-path': '../node_modules/aurelia-path/dist/amd/aurelia-path',
		'aurelia-dependency-injection': '../node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection',
		'aurelia-task-queue': '../node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue',
		'aurelia-logging': '../node_modules/aurelia-logging/dist/amd/aurelia-logging',
		"jquery": "https://code.jquery.com/jquery-1.11.2.min",
		"jquery-ui": "https://code.jquery.com/ui/1.11.4/jquery-ui.min",
		"bootstrap": "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min",
		"text": "plugins/text",
		"css": "plugins/css.min",
		"knockout": "knockout.min",
		"ko.sortable": "https://cdnjs.cloudflare.com/ajax/libs/knockout-sortable/0.11.0/knockout-sortable",
		"knockout-mapping": "knockout.mapping",
		"knockout-persist": "knockout.persist",
    "knockout-amd-helpers": "knockout-amd-helpers.min",
		"datatables.net": "jquery.dataTables.min",
		"datatables.net-buttons" : "jquery.dataTables.buttons.min",
		"datatables.net-buttons-html5" : "jquery.dataTables.buttons.html5.min",
		"colvis": "jquery.dataTables.colVis.min",
		"director": "director.min",
		"search": "components/search",
		"configuration": "components/configuration",
		"concept-manager": "components/concept-manager",
		"conceptset-browser": "components/conceptset-browser",
		"conceptset-editor": "components/conceptset-editor",
		"conceptset-manager": "components/conceptset-manager",
		"cohort-comparison-manager": "components/cohort-comparison-manager",
		"job-manager": "components/job-manager",
		"importer": "components/importer",
		"data-sources": "components/data-sources",
		"cohort-definition-manager": "components/cohort-definition-manager",
		"cohort-definition-browser": "components/cohort-definition-browser",
		"cohort-comparison-browser": "components/cohort-comparison-browser",
		"cohort-comparison-print-friendly": "components/cohort-comparison-print-friendly",
		"cohort-comparison-r-code": "components/cohort-comparison-r-code",
		"feasibility-manager": "components/feasibility-manager",
		"feasibility-browser": "components/feasibility-browser",
		"feasibility-analyzer": "components/feasibility-analyzer",
		"report-manager": "components/report-manager",
		"ir-manager": "components/ir-manager",
        "ir-browser": "components/ir-browser",
		"faceted-datatable": "components/faceted-datatable",
		"profile-manager": "components/profile-manager",
		"explore-cohort": "components/explore-cohort",
		"cohortcomparison": "modules/cohortcomparison",
		"r-manager": "components/r-manager",
        "negative-controls": "components/negative-controls",
		"d3": "d3.min",
		"d3_tip": "d3.tip",
		"nvd3":"nv.d3",
		//"lodash": "lodash.min",
		"lodash": "lodash.4.15.0.full",
		"lscache": "lscache.min",
		"localStorageExtender": "localStorageExtender",
		"cohortbuilder": "modules/cohortbuilder",
		"conceptsetbuilder": "modules/conceptsetbuilder",
		"conceptpicker": "modules/conceptpicker",
		"webapi": "modules/WebAPIProvider",
		"vocabularyprovider": "modules/WebAPIProvider/VocabularyProvider",
		"home" : "components/home",
		"common":"components/datasources/app/common",
		"reports": "components/datasources/app/reports",
		"prism": "prism",
		"sptest": "sptest/sptest",
		"sptest_smoking": "sptest/sptest_smoking",
		"vocab-experiment": "components/vocab-experiment",
	}
}

// advanced configuration:
switch (ENV) {
  case 'production':
    config = generateConfig(
      baseConfig,

      require('@easy-webpack/config-env-production')
        ({compress: true}),
        
      require('@easy-webpack/config-aurelia')
        ({root: rootDir, src: srcDir, title: title, baseUrl: baseUrl}),

      require('@easy-webpack/config-babel')(),
      require('@easy-webpack/config-html')(),

			/*
      require('@easy-webpack/config-css')
        ({ filename: 'styles.css', allChunks: true, sourceMap: false }),
			*/

      require('@easy-webpack/config-fonts-and-images')(),
      require('@easy-webpack/config-global-bluebird')(),
      require('@easy-webpack/config-global-jquery')(),
      require('@easy-webpack/config-global-regenerator')(),
      require('@easy-webpack/config-generate-index-html')
        ({minify: true}),

      require('@easy-webpack/config-copy-files')
        ({patterns: [{ from: 'favicon.ico', to: 'favicon.ico' }]}),

      require('@easy-webpack/config-common-chunks-simple')
        ({appChunkName: 'app', firstChunk: 'aurelia-bootstrap'}),

      require('@easy-webpack/config-uglify')
        ({debug: false})
    );
    break;
  
  case 'test':
    config = generateConfig(
      baseConfig,

      require('@easy-webpack/config-env-development')
        ({devtool: 'inline-source-map'}),

      require('@easy-webpack/config-aurelia')
        ({root: rootDir, src: srcDir, title: title, baseUrl: baseUrl}),

      require('@easy-webpack/config-babel')(),
      require('@easy-webpack/config-html')(),

			/*
      require('@easy-webpack/config-css')
        ({ filename: 'styles.css', allChunks: true, sourceMap: false }),
			*/

      require('@easy-webpack/config-fonts-and-images')(),
      require('@easy-webpack/config-global-bluebird')(),
      require('@easy-webpack/config-global-jquery')(),
      require('@easy-webpack/config-global-regenerator')(),
      require('@easy-webpack/config-generate-index-html')(),

      require('@easy-webpack/config-test-coverage-istanbul')()
    );
    break;
  
  default:
  case 'development':
    process.env.NODE_ENV = 'development';
    config = generateConfig(
      baseConfig,

      require('@easy-webpack/config-env-development')(),

      require('@easy-webpack/config-aurelia')
        ({root: rootDir, src: srcDir, title: title, baseUrl: baseUrl}),

      require('@easy-webpack/config-babel')(),
      require('@easy-webpack/config-html')(),

			/*
      require('@easy-webpack/config-css')
        ({ filename: 'styles.css', allChunks: true, sourceMap: false }),
			*/

      require('@easy-webpack/config-fonts-and-images')(),
      require('@easy-webpack/config-global-bluebird')(),
      require('@easy-webpack/config-global-jquery')(),
      require('@easy-webpack/config-global-regenerator')(),
      require('@easy-webpack/config-generate-index-html')
        ({minify: false}),

      require('@easy-webpack/config-copy-files')
        ({patterns: [{ from: 'favicon.ico', to: 'favicon.ico' }]}),

      require('@easy-webpack/config-common-chunks-simple')
        ({appChunkName: 'app', firstChunk: 'aurelia-bootstrap'})
    );
    break;
}

module.exports = config;
