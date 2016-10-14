
requirejs.config({
	waitSeconds: 60, // FOR DEVELOPMENT, REMOVE WHEN NOT NEEDED? default is 7
	//urlArgs: "bust=" + (new Date()).getTime(),
	baseUrl: 'js',
	config: {
		text: {
			useXhr: function (url, protocol, hostname, port) {
				return true;
			}
		}
	},
	packages: [
		{
			name: "databindings",
			location: "modules/databindings"
		},
		{
			name: "cohortdefinitionviewer",
			location: "modules/cohortdefinitionviewer"
		},
		{
			name: "circe",
			location: "modules/circe"
		},
		{
			name: "iranalysis",
			location: "modules/iranalysis"
		},
    {
		  name: "extenders",
		  location: "extenders"
    },
		{
			name: 'aurelia-templating-resources',
			location: '../node_modules/aurelia-templating-resources/dist/amd',
			main : 'aurelia-templating-resources'
		},
		{
			name: 'aurelia-templating-router',
			location: '../node_modules/aurelia-templating-router/dist/amd',
			main : 'aurelia-templating-router'
		},
		{
			name: 'aurelia-polyfills',
			location: '../node_modules/aurelia-polyfills/dist/amd',
			main : 'aurelia-polyfills'
		},
		{
			name: 'aurelia-bootstrapper',
			location: '../node_modules/aurelia-bootstrapper/dist/amd',
			main : 'aurelia-bootstrapper'
		},
		{
			name: 'aurelia-dependency-injection',
			location: '../node_modules/aurelia-dependency-injection/dist/amd',
			main : 'aurelia-dependency-injection'
		},
		{
			name: 'aurelia-binding',
			location: '../node_modules/aurelia-binding/dist/amd',
			main : 'aurelia-binding'
		},
		{
			name: 'aurelia-templating',
			location: '../node_modules/aurelia-templating/dist/amd',
			main : 'aurelia-templating'
		},
		{
			name: 'aurelia-task-queue',
			location: '../node_modules/aurelia-task-queue/dist/amd',
			main : 'aurelia-task-queue'
		},
		{
			name: 'aurelia-logging',
			location: '../node_modules/aurelia-logging/dist/amd',
			main : 'aurelia-logging'
		},
		{
			name: 'aurelia-route-recognizer',
			location: '../node_modules/aurelia-route-recognizer/dist/amd',
			main : 'aurelia-route-recognizer'
		},
		{
			name: 'aurelia-router',
			location: '../node_modules/aurelia-router/dist/amd',
			main : 'aurelia-router'
		},
		{
			name: 'aurelia-history',
			location: '../node_modules/aurelia-history/dist/amd',
			main : 'aurelia-history'
		},
		{
			name: 'aurelia-history-browser',
			location: '../node_modules/aurelia-history-browser/dist/amd',
			main : 'aurelia-history-browser'
		},
		{
			name: 'aurelia-logging-console',
			location: '../node_modules/aurelia-logging-console/dist/amd',
			main : 'aurelia-logging-console'
		},
		{
			name: 'aurelia-templating-binding',
			location: '../node_modules/aurelia-templating-binding/dist/amd',
			main : 'aurelia-templating-binding'
		},
		{
			name: 'aurelia-event-aggregator',
			location: '../node_modules/aurelia-event-aggregator/dist/amd',
			main : 'aurelia-event-aggregator'
		},
		{
			name: 'aurelia-framework',
			location: '../node_modules/aurelia-framework/dist/amd',
			main : 'aurelia-framework'
		},
		{
			name: 'aurelia-path',
			location: '../node_modules/aurelia-path/dist/amd',
			main : 'aurelia-path'
		},
		{
			name: 'aurelia-loader',
			location: '../node_modules/aurelia-loader/dist/amd',
			main : 'aurelia-loader'
		},
		{
			name: 'aurelia-metadata',
			location: '../node_modules/aurelia-metadata/dist/amd',
			main : 'aurelia-metadata'
		},
		{
			name: 'aurelia-loader-default',
			location: '../node_modules/aurelia-loader-default/dist/amd',
			main : 'aurelia-loader-default'
		},
		{
			name: 'aurelia-pal',
			location: '../node_modules/aurelia-pal/dist/amd',
			main : 'aurelia-pal'
		},
		{
			name: 'aurelia-pal-browser',
			location: '../node_modules/aurelia-pal-browser/dist/amd',
			main : 'aurelia-pal-browser'
		},
		{
			name: 'aurelia-knockout',
			location: '../node_modules/aurelia-knockout/dist/amd',
			main : 'aurelia-knockout'
		},
	],
	shim: {
		"colorbrewer": {
			exports: 'colorbrewer'
		},
		"bootstrap": {
			"deps": [
				'jquery'
			]
		},
        "prism" :{
            "prism": {
                "exports": "Prism"
            }
        }
	},
	map: {
		"*": {
			'jquery-ui/sortable': 'jquery-ui',
			'jquery-ui/draggable': 'jquery-ui',
			'jquery-ui/dialog': 'jquery-ui',
			'jquery-ui/autocomplete': 'jquery-ui',
			'jquery-ui/tabs': 'jquery-ui'
		}
	},
	deps: ['css!styles/jquery.dataTables.min',
				 'css!styles/jquery.dataTables.colVis.css'
	],
	es6: {
		fileExtension: '.js' // put in .jsx for JSX transformation
	},
	babel: {
		presets: ['es2016'],
		plugins: ['transform-es2015-modules-amd',"transform-decorators-legacy"]
	},
	paths: {
		"es6": '../node_modules/requirejs-babel-plugin/es6',
		"babel": '../node_modules/babel-standalone/babel.min',
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
		"cohort-definitions": "components/cohort-definitions",
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
		"appConfig": "appConfig",
		"home" : "components/home",
		"common":"components/datasources/app/common",
		"reports": "components/datasources/app/reports",
		"prism": "prism",
		"sptest": "sptest/sptest",
		"sptest_smoking": "sptest/sptest_smoking",
		"vocab-experiment": "components/vocab-experiment",
	},
});


requirejs(['bootstrap'], function () { // bootstrap must come first
	requirejs(['aurelia-bootstrapper', 'aurelia-knockout', 'knockout', 'es6!app', 'appConfig', 'ohdsi.util', 'director', 'search', 'localStorageExtender', 'jquery.ui.autocomplete.scroll'],
		function (aurelia, ak, ko, app, config, util) {
			$('#splash').fadeIn();
			var pageModel = new app.App();
			window.pageModel = pageModel;
			ko.applyBindings(pageModel,document.getElementsByTagName('html')[0]);

			aurelia.bootstrap((aur) => {
				aur.use
					.standardConfiguration()
					//.feature('resources')
					.developmentLogging()
					.plugin("aurelia-knockout");
				//aur.start().then((a) => a.setRoot('app', document.body));
				aur.start().then(() => aur.enhance(pageModel, document.querySelector('aurelia-view')));
			});
		}
	);
});
