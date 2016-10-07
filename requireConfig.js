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
		}
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
	paths: {
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
	},
});


