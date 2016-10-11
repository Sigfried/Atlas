/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		0:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vocabExperiment = __webpack_require__(1);

	var _vocabExperiment2 = _interopRequireDefault(_vocabExperiment);

	var _d = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"d3\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _d2 = _interopRequireDefault(_d);

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	requirejs(['bootstrap', 'aurelia-bootstrapper'], function (stub, aureliaBootstrap) {
		// bootstrap must come first
		requirejs(['knockout', 'app', 'appConfig', 'ohdsi.util', 'director', 'search', 'localStorageExtender', 'jquery.ui.autocomplete.scroll'], function (ko, app, config, util) {
			aureliaBootstrap.bootstrap(function (aurelia) {
				console.log('in bootstrap');
				aurelia.use.standardConfiguration().developmentLogging().plugin("aurelia-knockout");
				aurelia.start().then(function (a) {
					return a.setRoot('app', document.body);
				});
			});
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Hello = exports.Hello = function () {
		function Hello() {
			_classCallCheck(this, Hello);

			this.firstName = 'John';
			this.lastName = 'Doe';
		}

		_createClass(Hello, [{
			key: 'sayHello',
			value: function sayHello() {
				alert('Hello ' + this.firstName + ' ' + this.lastName + '. Nice to meet you.');
			}
		}]);

		return Hello;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _d = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"d3\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4), __webpack_require__(5), __webpack_require__(6), __webpack_require__(8), __webpack_require__(11), __webpack_require__(12), !(function webpackMissingModule() { var e = new Error("Cannot find module \"knockout-persist\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"css!styles/tabs.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"css!styles/buttons.css\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function (bootstrap, $, ko, jnj_chart, ohdsiUtil, appConfig) {
		console.log('app', arguments);
		var OrigAtlasAppModel = function OrigAtlasAppModel() {
			this.foo = 'bar';
			this.eek = 'urk';
			this.knockknock = "who's there?";
			console.log('appmodel', arguments);
			$.support.cors = true;
			var self = this;
			self.pageModel = self; // combining main and app from orig knockout
			window.pageModel = self; // because a bunch of kludgy stuff depending on this being global
			$('#querytext').focus();
			self.appInitializationFailed = ko.observable(false);
			self.initPromises = [];
			self.applicationStatus = ko.observable('initializing');
			self.minibar = ko.observable(false);
			self.searchTabMode = ko.observable('simple');
			self.pendingSearch = ko.observable(false);
			self.pageTitle = ko.pureComputed(function () {
				var pageTitle = "ATLAS";
				switch (self.currentView()) {
					case 'loading':
						pageTitle = pageTitle + ": Loading";
						break;
					case 'home':
						pageTitle = pageTitle + ": Home";
						break;
					case 'search':
						pageTitle = pageTitle + ": Search";
						break;
					case 'conceptsets':
					case 'conceptset':
						pageTitle = pageTitle + ": Concept Sets";
						break;
					case 'concept':
						pageTitle = pageTitle + ": Concept";
						break;
					case 'cohortdefinitions':
					case 'cohortdefinition':
						pageTitle = pageTitle + ": Cohorts";
						break;
					case 'irbrowser':
					case 'iranalysis':
						pageTitle = pageTitle + ": Incidence Rate";
						break;
					case 'estimations':
					case 'estimation':
						pageTitle = pageTitle + ": Estimation";
						break;
					case 'profiles':
						pageTitle = pageTitle + ": Profiles";
						break;
				}

				if (self.hasUnsavedChanges()) {
					pageTitle = "*" + pageTitle + " (unsaved)";
				}

				return pageTitle;
			});
			self.initComplete = function () {
				if (!self.appInitializationFailed()) {
					var routerOptions = {
						notfound: function notfound() {
							self.currentView('search');
						}
					};
					var routes = {
						'/': function _() {
							document.location = "#/home";
						},
						'/concept/:conceptId:': function conceptConceptId(conceptId) {
							__webpack_require__.e/* require */(1, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(13)]; (function () {
								self.currentConceptId(conceptId);
								self.loadConcept(conceptId);
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/cohortdefinitions': function cohortdefinitions() {
							__webpack_require__.e/* require */(2, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(16), __webpack_require__(17), __webpack_require__(18)]; (function () {
								self.currentView('cohortdefinitions');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/cohortdefinition/:cohortDefinitionId:': function cohortdefinitionCohortDefinitionId(cohortDefinitionId) {
							__webpack_require__.e/* require */(3, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"cohortbuilder/CohortDefinition\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(19), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(24), __webpack_require__(25), __webpack_require__(27)]; (function (CohortDefinition) {
								self.currentView('cohortdefinition');
								self.currentCohortDefinitionMode('definition');
								self.loadCohortDefinition(cohortDefinitionId, null, 'cohortdefinition', 'details');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/cohortdefinition/:cohortDefinitionId/conceptset/:conceptSetId/:mode:': function cohortdefinitionCohortDefinitionIdConceptsetConceptSetIdMode(cohortDefinitionId, conceptSetId, mode) {
							__webpack_require__.e/* require */(3/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(25), !(function webpackMissingModule() { var e = new Error("Cannot find module \"cohortbuilder/CohortDefinition\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(19), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(24), __webpack_require__(27)]; (function (CohortDefinition) {
								self.currentView('cohortdefinition');
								self.currentCohortDefinitionMode('conceptsets');
								//if (!ohdsiUtil.hasState('cohortDefTab'))
								//ohdsiUtil.setState('cohortDefTab', 'conceptsets');
								self.loadCohortDefinition(cohortDefinitionId, conceptSetId, 'cohortdefinition', 'details');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/datasources': function datasources() {
							__webpack_require__.e/* require */(4, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29)]; (function () {
								self.currentView('datasources');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/datasources/:sourceName/:report': function datasourcesSourceNameReport(sourceName, report) {
							__webpack_require__.e/* require */(4/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(29)]; (function () {
								self.currentView('datasources');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/configure': function configure() {
							__webpack_require__.e/* require */(5, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(30), __webpack_require__(31)]; (function () {
								self.currentView('configure');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/home': function home() {
							__webpack_require__.e/* require */(6, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(32)]; (function () {
								self.currentView('home');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/jobs': function jobs() {
							__webpack_require__.e/* require */(7, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(33)]; (function () {
								self.currentView('jobs');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/reports': function reports() {
							__webpack_require__.e/* require */(8, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(25), __webpack_require__(17), __webpack_require__(18)]; (function () {
								self.currentView('reports');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/import': function _import() {
							__webpack_require__.e/* require */(9, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(34)]; (function () {
								self.currentView('import');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/profiles': function profiles() {
							__webpack_require__.e/* require */(10, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(35), __webpack_require__(18)]; (function () {
								var cohortDefinitionId = util.getState('currentCohortDefinitionId');
								if (typeof cohortDefinitionId !== "undefined") self.loadCohortDefinition(cohortDefinitionId, null, 'profiles');
								self.currentView('profiles');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						/*
	     '/profiles/:sourceKey': function (sourceKey) {
	     	require(['profile-manager', 'cohort-definition-browser'], function () {
	     		self.currentView('profiles');
	     		pageModel.sourceKey = sourceKey;
	     	});
	     },
	     '/profiles/:sourceKey/:cohortDefinitionId/:personId': function (sourceKey, cohortDefinitionId, personId) {
	     	require(['profile-manager', 'cohort-definition-browser'], function () {
	     		self.currentView('profiles');
	     		pageModel.personId = personId;
	     		pageModel.sourceKey = sourceKey;
	     		self.loadCohortDefinition(cohortDefinitionId, null, 'profiles', 'details');
	     	});
	     },
	     */
						'/conceptset/:conceptSetId/:mode': function conceptsetConceptSetIdMode(conceptSetId, mode) {
							__webpack_require__.e/* require */(11, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(38), __webpack_require__(18)]; (function () {
								self.loadConceptSet(conceptSetId, 'conceptset', 'repository', mode);
								self.resolveConceptSetExpression();
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/conceptsets': function conceptsets() {
							__webpack_require__.e/* require */(12, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(41)]; (function () {
								self.currentView('conceptsets');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/splash': function splash() {
							self.currentView('splash');
						},
						'/search/:query:': function searchQuery(query) {
							__webpack_require__.e/* require */(13, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function (search) {
								self.currentView('search');
								self.currentSearchValue(unescape(query));
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/search': function search() {
							__webpack_require__.e/* require */(13/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(42)]; (function (search) {
								self.currentSearch('');
								self.searchTabMode('simple');
								self.currentView('search');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/feasibility': function feasibility() {
							__webpack_require__.e/* require */(14, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(43), __webpack_require__(44)]; (function () {
								self.currentView('feasibilities');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/feasibility/:feasibilityId:': function feasibilityFeasibilityId(feasibilityId) {
							__webpack_require__.e/* require */(15, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(45)]; (function () {
								self.currentView('feasibility');
								self.feasibilityId(feasibilityId);
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/estimation': function estimation() {
							__webpack_require__.e/* require */(16, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(46)]; (function () {
								self.currentView('estimations');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/estimation/:cohortComparisonId:': function estimationCohortComparisonId(cohortComparisonId) {
							__webpack_require__.e/* require */(17, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(47), __webpack_require__(18), __webpack_require__(19), __webpack_require__(48), __webpack_require__(49)]; (function () {
								self.currentCohortComparisonId(cohortComparisonId);
								self.currentView('estimation');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/iranalysis': function iranalysis() {
							__webpack_require__.e/* require */(18, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(51)]; (function () {
								self.currentView('irbrowser');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/iranalysis/new': function iranalysisNew(analysisId) {
							__webpack_require__.e/* require */(19, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(52)]; (function () {
								self.selectedIRAnalysisId(null);
								self.currentView('iranalysis');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/iranalysis/:analysisId': function iranalysisAnalysisId(analysisId) {
							__webpack_require__.e/* require */(19/* duplicate */, function(__webpack_require__) { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(52)]; (function () {
								self.selectedIRAnalysisId(+analysisId);
								self.currentView('iranalysis');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));});
						},
						'/sptest': function sptest() {
							!/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"sptest\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())]; (function () {
								console.log("trying to load sptest");
								self.currentView('sptest');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
						},
						'/sptest_smoking': function sptest_smoking() {
							!/* require */(/* empty */function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"sptest_smoking\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())]; (function () {
								console.log("trying to load sptest_smoking");
								self.currentView('sptest_smoking');
							}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}());
						},
						'/vocab-experiment\/?(.*)': function vocabExperiment(path) {
							/*
	      require(['./components/vocab-experiment'], function () {
	      	debugger;
	      });
	      */
						}
					};
					self.router = new Router(routes).configure(routerOptions);
					self.router.init('/');
					self.applicationStatus('running');
				} else {
					self.currentView('configure');
					self.applicationStatus('initialization error');
				}
				setTimeout(function () {
					$('#splash').hide();
				}, 0);
				setTimeout(function () {
					$('#wrapperLeftMenu').fadeIn();
					$('#wrapperMainWindow').fadeIn();
				}, 10);
			};
			self.loadConcept = function (conceptId) {
				self.currentView('loading');
				var conceptPromise = $.ajax({
					url: self.vocabularyUrl() + 'concept/' + conceptId,
					method: 'GET',
					contentType: 'application/json',
					success: function success(c, status, xhr) {
						var exists = false;
						for (var i = 0; i < self.recentConcept().length; i++) {
							if (self.recentConcept()[i].CONCEPT_ID == c.CONCEPT_ID) exists = true;
						}
						if (!exists) {
							self.recentConcept.unshift(c);
						}
						if (self.recentConcept().length > 7) {
							self.recentConcept.pop();
						}
						self.currentConcept(c);
						self.currentView('concept');
					},
					error: function error() {
						alert('An error occurred while attempting to load the concept from your currently configured provider.  Please check the status of your selection from the configuration button in the top right corner.');
					}
				});
				// load related concepts once the concept is loaded
				self.loadingRelated(true);
				var relatedPromise = $.Deferred();
				$.when(conceptPromise).done(function () {
					self.metarchy = {
						parents: ko.observableArray(),
						children: ko.observableArray(),
						synonyms: ko.observableArray()
					};
					$.ajax({
						url: self.vocabularyUrl() + 'concept/' + conceptId + '/related',
						method: 'GET',
						contentType: 'application/json',
						success: function success(related) {
							for (var i = 0; i < related.length; i++) {
								self.metagorize(self.metarchy, related[i]);
							}
							var densityPromise = self.loadDensity(related);
							$.when(densityPromise).done(function () {
								self.relatedConcepts(related);
								relatedPromise.resolve();
							});
						}
					});
				});
				$.when(relatedPromise).done(function () {
					self.loadingRelated(false);
				});
				// triggers once our async loading of the concept and related concepts is complete
				$.when(conceptPromise).done(function () {
					self.currentView('concept');
				});
			};
			self.metagorize = function (metarchy, related) {
				var concept = self.currentConcept();
				var key = concept.VOCABULARY_ID + '.' + concept.CONCEPT_CLASS_ID;
				if (self.metatrix[key] != undefined) {
					var meta = self.metatrix[key];
					if (self.hasRelationship(related, meta.childRelationships)) {
						metarchy.children.push(related);
					}
					if (self.hasRelationship(related, meta.parentRelationships)) {
						metarchy.parents.push(related);
					}
				}
			};
			self.searchConceptsOptions = {
				Facets: [{
					'caption': 'Vocabulary',
					'binding': function binding(o) {
						return o.VOCABULARY_ID;
					}
				}, {
					'caption': 'Class',
					'binding': function binding(o) {
						return o.CONCEPT_CLASS_ID;
					}
				}, {
					'caption': 'Domain',
					'binding': function binding(o) {
						return o.DOMAIN_ID;
					}
				}, {
					'caption': 'Standard Concept',
					'binding': function binding(o) {
						return o.STANDARD_CONCEPT_CAPTION;
					}
				}, {
					'caption': 'Invalid Reason',
					'binding': function binding(o) {
						return o.INVALID_REASON_CAPTION;
					}
				}, {
					'caption': 'Has Records',
					'binding': function binding(o) {
						return parseInt(o.RECORD_COUNT.toString().replace(',', '')) > 0;
					}
				}, {
					'caption': 'Has Descendant Records',
					'binding': function binding(o) {
						return parseInt(o.DESCENDANT_RECORD_COUNT.toString().replace(',', '')) > 0;
					}
				}]
			};
			self.relatedConceptsOptions = {
				Facets: [{
					'caption': 'Vocabulary',
					'binding': function binding(o) {
						return o.VOCABULARY_ID;
					}
				}, {
					'caption': 'Standard Concept',
					'binding': function binding(o) {
						return o.STANDARD_CONCEPT_CAPTION;
					}
				}, {
					'caption': 'Invalid Reason',
					'binding': function binding(o) {
						return o.INVALID_REASON_CAPTION;
					}
				}, {
					'caption': 'Class',
					'binding': function binding(o) {
						return o.CONCEPT_CLASS_ID;
					}
				}, {
					'caption': 'Domain',
					'binding': function binding(o) {
						return o.DOMAIN_ID;
					}
				}, {
					'caption': 'Relationship',
					'binding': function binding(o) {
						values = [];
						for (var i = 0; i < o.RELATIONSHIPS.length; i++) {
							values.push(o.RELATIONSHIPS[i].RELATIONSHIP_NAME);
						}
						return values;
					}
				}, {
					'caption': 'Has Records',
					'binding': function binding(o) {
						return parseInt(o.RECORD_COUNT.toString().replace(',', '')) > 0;
					}
				}, {
					'caption': 'Has Descendant Records',
					'binding': function binding(o) {
						return parseInt(o.DESCENDANT_RECORD_COUNT.toString().replace(',', '')) > 0;
					}
				}, {
					'caption': 'Distance',
					'binding': function binding(o) {
						values = [];
						for (var i = 0; i < o.RELATIONSHIPS.length; i++) {
							if (values.indexOf(o.RELATIONSHIPS[i].RELATIONSHIP_DISTANCE) == -1) {
								values.push(o.RELATIONSHIPS[i].RELATIONSHIP_DISTANCE);
							}
						}
						return values;
					}
				}]
			};
			self.searchConceptsColumns = [{
				title: '<i class="fa fa-shopping-cart"></i>',
				render: function render(s, p, d) {
					var css = '';
					var icon = 'fa-shopping-cart';
					if (self.selectedConceptsIndex[d.CONCEPT_ID] == 1) {
						css = ' selected';
					}
					return '<i class="fa ' + icon + ' ' + css + '"></i>';
				},
				orderable: false,
				searchable: false
			}, {
				title: 'Id',
				data: 'CONCEPT_ID'
			}, {
				title: 'Code',
				data: 'CONCEPT_CODE'
			}, {
				title: 'Name',
				data: 'CONCEPT_NAME',
				render: function render(s, p, d) {
					var valid = d.INVALID_REASON_CAPTION == 'Invalid' ? 'invalid' : '';
					return '<a class="' + valid + '" href=\"#/concept/' + d.CONCEPT_ID + '\">' + d.CONCEPT_NAME + '</a>';
				}
			}, {
				title: 'Class',
				data: 'CONCEPT_CLASS_ID'
			}, {
				title: 'Standard Concept Caption',
				data: 'STANDARD_CONCEPT_CAPTION',
				visible: false
			}, {
				title: 'RC',
				data: 'RECORD_COUNT',
				className: 'numeric'
			}, {
				title: 'DRC',
				data: 'DESCENDANT_RECORD_COUNT',
				className: 'numeric'
			}, {
				title: 'Domain',
				data: 'DOMAIN_ID'
			}, {
				title: 'Vocabulary',
				data: 'VOCABULARY_ID'
			}];
			self.relatedConceptsColumns = [{
				title: '<i class="fa fa-shopping-cart"></i>',
				render: function render(s, p, d) {
					var css = '';
					var icon = 'fa-shopping-cart';
					if (self.selectedConceptsIndex[d.CONCEPT_ID] == 1) {
						css = ' selected';
					}
					return '<i class="fa ' + icon + ' ' + css + '"></i>';
				},
				orderable: false,
				searchable: false
			}, {
				title: 'Id',
				data: 'CONCEPT_ID'
			}, {
				title: 'Code',
				data: 'CONCEPT_CODE'
			}, {
				title: 'Name',
				data: 'CONCEPT_NAME',
				render: function render(s, p, d) {
					var valid = d.INVALID_REASON_CAPTION == 'Invalid' ? 'invalid' : '';
					return '<a class="' + valid + '" href=\"#/concept/' + d.CONCEPT_ID + '\">' + d.CONCEPT_NAME + '</a>';
				}
			}, {
				title: 'Class',
				data: 'CONCEPT_CLASS_ID'
			}, {
				title: 'Standard Concept Caption',
				data: 'STANDARD_CONCEPT_CAPTION',
				visible: false
			}, {
				title: 'RC',
				data: 'RECORD_COUNT',
				className: 'numeric'
			}, {
				title: 'DRC',
				data: 'DESCENDANT_RECORD_COUNT',
				className: 'numeric'
			}, {
				title: 'Domain',
				data: 'DOMAIN_ID'
			}, {
				title: 'Vocabulary',
				data: 'VOCABULARY_ID'
			}];
			self.relatedSourcecodesColumns = [{
				title: '',
				render: function render(s, p, d) {
					var css = '';
					var icon = 'fa-shopping-cart';
					if (self.selectedConceptsIndex[d.CONCEPT_ID] == 1) {
						css = ' selected';
					}
					return '<i class="fa ' + icon + ' ' + css + '"></i>';
				},
				orderable: false,
				searchable: false
			}, {
				title: 'Id',
				data: 'CONCEPT_ID'
			}, {
				title: 'Code',
				data: 'CONCEPT_CODE'
			}, {
				title: 'Name',
				data: 'CONCEPT_NAME',
				render: function render(s, p, d) {
					var valid = d.INVALID_REASON_CAPTION == 'Invalid' ? 'invalid' : '';
					return '<a class="' + valid + '" href=\"#/concept/' + d.CONCEPT_ID + '\">' + d.CONCEPT_NAME + '</a>';
				}
			}, {
				title: 'Class',
				data: 'CONCEPT_CLASS_ID'
			}, {
				title: 'Standard Concept Caption',
				data: 'STANDARD_CONCEPT_CAPTION',
				visible: false
			}, {
				title: 'Domain',
				data: 'DOMAIN_ID'
			}, {
				title: 'Vocabulary',
				data: 'VOCABULARY_ID'
			}];
			self.relatedSourcecodesOptions = {
				Facets: [{
					'caption': 'Vocabulary',
					'binding': function binding(o) {
						return o.VOCABULARY_ID;
					}
				}, {
					'caption': 'Invalid Reason',
					'binding': function binding(o) {
						return o.INVALID_REASON_CAPTION;
					}
				}, {
					'caption': 'Class',
					'binding': function binding(o) {
						return o.CONCEPT_CLASS_ID;
					}
				}, {
					'caption': 'Domain',
					'binding': function binding(o) {
						return o.DOMAIN_ID;
					}
				}]
			};
			self.metatrix = {
				'ICD9CM.5-dig billing code': {
					childRelationships: [{
						name: 'Subsumes',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Is a',
						range: [0, 1]
					}]
				},
				'ICD9CM.4-dig nonbill code': {
					childRelationships: [{
						name: 'Subsumes',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Is a',
						range: [0, 1]
					}, {
						name: 'Non-standard to Standard map (OMOP)',
						range: [0, 1]
					}]
				},
				'ICD9CM.3-dig nonbill code': {
					childRelationships: [{
						name: 'Subsumes',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Non-standard to Standard map (OMOP)',
						range: [0, 999]
					}]
				},
				'RxNorm.Ingredient': {
					childRelationships: [{
						name: 'Ingredient of (RxNorm)',
						range: [0, 999]
					}],
					parentRelationships: [{
						name: 'Has inferred drug class (OMOP)',
						range: [0, 999]
					}]
				},
				'RxNorm.Brand Name': {
					childRelationships: [{
						name: 'Ingredient of (RxNorm)',
						range: [0, 999]
					}],
					parentRelationships: [{
						name: 'Tradename of (RxNorm)',
						range: [0, 999]
					}]
				},
				'RxNorm.Branded Drug': {
					childRelationships: [{
						name: 'Consists of (RxNorm)',
						range: [0, 999]
					}],
					parentRelationships: [{
						name: 'Has ingredient (RxNorm)',
						range: [0, 999]
					}, {
						name: 'RxNorm to ATC (RxNorm)',
						range: [0, 999]
					}, {
						name: 'RxNorm to ETC (FDB)',
						range: [0, 999]
					}]
				},
				'RxNorm.Clinical Drug Comp': {
					childRelationships: [],
					parentRelationships: [{
						name: 'Has precise ingredient (RxNorm)',
						range: [0, 999]
					}, {
						name: 'Has ingredient (RxNorm)',
						range: [0, 999]
					}]
				},
				'CPT4.CPT4': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'CPT4.CPT4 Hierarchy': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'ETC.ETC': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'MedDRA.LLT': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'MedDRA.PT': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'MedDRA.HLT': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'MedDRA.SOC': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'MedDRA.HLGT': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'SNOMED.Clinical Finding': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				},
				'SNOMED.Procedure': {
					childRelationships: [{
						name: 'Has descendant of',
						range: [0, 1]
					}],
					parentRelationships: [{
						name: 'Has ancestor of',
						range: [0, 1]
					}]
				}
			};
			self.hasRelationship = function (concept, relationships) {
				for (var r = 0; r < concept.RELATIONSHIPS.length; r++) {
					for (var i = 0; i < relationships.length; i++) {
						if (concept.RELATIONSHIPS[r].RELATIONSHIP_NAME == relationships[i].name) {
							if (concept.RELATIONSHIPS[r].RELATIONSHIP_DISTANCE >= relationships[i].range[0] && concept.RELATIONSHIPS[r].RELATIONSHIP_DISTANCE <= relationships[i].range[1]) {
								return true;
							}
						}
					}
				}
				return false;
			};
			self.meetsRequirements = function (concept, requirements) {
				var passCount = 0;
				for (var r = 0; r < requirements.length; r++) {
					for (var f = 0; f < this.fe.Facets.length; f++) {
						if (this.fe.Facets[f].caption == requirements[r].c) {
							for (var m = 0; m < this.fe.Facets[f].Members.length; m++) {
								if (this.fe.Facets[f].Members[m].Name == requirements[r].n) {
									passCount++;
								}
							}
						}
					}
				}
				if (filters.length == requirements.length) {
					return true;
				} else {
					return false;
				}
			};
			self.contextSensitiveLinkColor = function (row, data) {
				var switchContext;
				if (data.STANDARD_CONCEPT == undefined) {
					switchContext = data.concept.STANDARD_CONCEPT;
				} else {
					switchContext = data.STANDARD_CONCEPT;
				}
				switch (switchContext) {
					case 'N':
						$('a', row).css('color', '#a71a19');
						break;
					case 'C':
						$('a', row).css('color', '#a335ee');
						break;
				}
			};
			self.hasCDM = function (source) {
				for (var d = 0; d < source.daimons.length; d++) {
					if (source.daimons[d].daimonType == 'CDM') {
						return true;
					}
				}
				return false;
			};
			self.hasResults = function (source) {
				for (var d = 0; d < source.daimons.length; d++) {
					if (source.daimons[d].daimonType == 'Results') {
						return true;
					}
				}
				return false;
			};
			self.renderConceptSetItemSelector = function (s, p, d) {
				var css = '';
				if (self.selectedConceptsIndex[d.concept.CONCEPT_ID] == 1) {
					css = ' selected';
				}
				return '<i class="fa fa-shopping-cart' + css + '"></i>';
			};
			self.renderLink = function (s, p, d) {
				var valid = d.INVALID_REASON_CAPTION == 'Invalid' ? 'invalid' : '';
				return '<a class="' + valid + '" href=\"#/concept/' + d.CONCEPT_ID + '\">' + d.CONCEPT_NAME + '</a>';
			};
			self.renderBoundLink = function (s, p, d) {
				return '<a href=\"#/concept/' + d.concept.CONCEPT_ID + '\">' + d.concept.CONCEPT_NAME + '</a>';
			};
			// for the current selected concepts:
			// update the export panel
			// resolve the included concepts and update the include concept set identifier list
			self.resolveConceptSetExpression = function () {
				self.resolvingConceptSetExpression(true);
				var conceptSetExpression = '{"items" :' + ko.toJSON(self.selectedConcepts()) + '}';
				var highlightedJson = self.syntaxHighlight(conceptSetExpression);
				self.currentConceptSetExpressionJson(highlightedJson);
				var conceptIdentifierList = [];
				for (var i = 0; i < self.selectedConcepts().length; i++) {
					conceptIdentifierList.push(self.selectedConcepts()[i].concept.CONCEPT_ID);
				}
				self.currentConceptIdentifierList(conceptIdentifierList.join(','));
				var resolvingPromise = $.ajax({
					url: self.vocabularyUrl() + 'resolveConceptSetExpression',
					data: conceptSetExpression,
					method: 'POST',
					contentType: 'application/json',
					success: function success(info) {
						var identifiers = info;
						self.conceptSetInclusionIdentifiers(info);
						self.currentIncludedConceptIdentifierList(info.join(','));
						self.conceptSetInclusionCount(info.length);
						self.resolvingConceptSetExpression(false);
					},
					error: function error(err) {
						self.currentView('configure');
						self.resolvingConceptSetExpression(false);
					}
				});
				return resolvingPromise;
			};
			self.resolveConceptSetExpressionSimple = function (expression, success) {
				var resolvingPromise = $.ajax({
					url: self.vocabularyUrl() + 'resolveConceptSetExpression',
					data: expression,
					method: 'POST',
					contentType: 'application/json',
					success: success || function (info) {
						var identifiers = info;
						self.conceptSetInclusionIdentifiers(info);
						self.currentIncludedConceptIdentifierList(info.join(','));
						self.conceptSetInclusionCount(info.length);
						self.resolvingConceptSetExpression(false);
					},
					error: function error(err) {
						self.currentView('configure');
						self.resolvingConceptSetExpression(false);
					}
				});
				return resolvingPromise;
			};
			self.renderCheckbox = function (field) {
				return '<span data-bind="click: function(d) { d.' + field + '(!d.' + field + '()); pageModel.resolveConceptSetExpression(); } ,css: { selected: ' + field + '} " class="fa fa-check"></span>';
			};
			self.enableRecordCounts = ko.observable(true);
			self.loadingIncluded = ko.observable(false);
			self.loadingSourcecodes = ko.observable(false);
			self.loadingRelated = ko.observable(false);
			self.loadingEvidence = ko.observable(false);
			self.loadingReport = ko.observable(false);
			self.loadingReportDrilldown = ko.observable(false);
			self.activeReportDrilldown = ko.observable(false);
			self.criteriaContext = ko.observable();
			self.cohortAnalyses = ko.observableArray();
			self.currentReport = ko.observable();
			// TODO: This object array was lifted from Heracles to capture the
			// various analysis "packages" to use when viewing. This information should be relocated
			// to the database and be made available through the WebAPI.
			self.visualizationPacks = ko.observableArray([{
				name: "Care Site",
				reportKey: null,
				analyses: [1200, 1201]
			}, {
				name: "Cohort Specific",
				reportKey: 'Cohort Specific',
				analyses: [1700, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1820, 1821, 1830, 1831, 1840, 1841, 1850, 1851, 1860, 1861, 1870, 1871, 116, 117, 1]
			}, {
				name: "Condition",
				reportKey: 'Condition',
				analyses: [116, 117, 400, 401, 402, 404, 405, 406, 1]
			}, {
				name: "Condition Eras",
				reportKey: 'Condition Eras',
				analyses: [1001, 1000, 1007, 1006, 1004, 1002, 116, 117, 1]
			}, {
				name: "Conditions by Index",
				reportKey: 'Conditions by Index',
				analyses: [1700, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1820, 1821, 1830, 1831, 1840, 1841, 1850, 1851, 1860, 1861, 1870, 1871, 116, 117, 1]
			}, {
				name: "Data Density",
				reportKey: null,
				analyses: [117, 220, 420, 502, 620, 720, 820, 920, 1020, 111, 403, 603, 703, 803, 903, 1003]
			}, {
				name: "Death",
				reportKey: 'Death',
				analyses: [501, 506, 505, 504, 502, 116, 117]
			}, {
				name: "Default",
				reportKey: null,
				analyses: [1, 2, 101, 108, 110]
			}, {
				name: "Drug Eras",
				reportKey: 'Drug Eras',
				analyses: [900, 901, 907, 906, 904, 902, 116, 117, 1]
			}, {
				name: "Drug Exposure",
				reportKey: 'Drug Exposure',
				analyses: [700, 701, 706, 715, 705, 704, 116, 702, 117, 717, 716, 1]
			}, {
				name: "Drugs by Index",
				reportKey: 'Drugs by Index',
				analyses: [1700, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1820, 1821, 1830, 1831, 1840, 1841, 1850, 1851, 1860, 1861, 1870, 1871, 116, 117, 1]
			}, {
				name: "Heracles Heel",
				reportKey: null,
				analyses: [7, 8, 9, 114, 115, 207, 208, 209, 210, 302, 409, 410, 411, 412, 413, 509, 510, 609, 610, 612, 613, 709, 710, 711, 712, 713, 809, 810, 812, 813, 814, 908, 909, 910, 1008, 1009, 1010, 1415, 1500, 1501, 1600, 1601, 1701, 103, 105, 206, 406, 506, 606, 706, 715, 716, 717, 806, 906, 907, 1006, 1007, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 511, 512, 513, 514, 515, 2, 4, 5, 200, 301, 400, 500, 505, 600, 700, 800, 900, 1000, 1609, 1610, 405, 605, 705, 805, 202, 3, 101, 420, 620, 720, 820, 920, 1020, 402, 602, 702, 802, 902, 1002, 1310, 1309, 1312, 1313, 1314]
			}, {
				name: "Location",
				reportKey: null,
				analyses: [1100, 1101]
			}, {
				name: "Measurement",
				reportKey: null,
				analyses: [1300, 1301, 1303, 1306, 1305, 1315, 1304, 1316, 1302, 1307, 1317, 1318, 1320, 117, 116, 1]
			}, {
				name: "Observation",
				reportKey: null,
				analyses: [800, 801, 806, 805, 815, 804, 802, 807, 816, 817, 818, 117, 116, 102, 112, 1]
			}, {
				name: "Observation Periods",
				reportKey: 'Observation Periods',
				analyses: [101, 104, 106, 107, 108, 109, 110, 113, 1]
			}, {
				name: "Person",
				reportKey: 'Person',
				analyses: [0, 1, 2, 3, 4, 5]
			}, {
				name: "Procedure",
				reportKey: 'Procedure',
				analyses: [606, 604, 116, 602, 117, 605, 600, 601, 1]
			}, {
				name: "Procedures by Index",
				reportKey: 'Procedures by Index',
				analyses: [1700, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1820, 1821, 1830, 1831, 1840, 1841, 1850, 1851, 1860, 1861, 1870, 1871, 116, 117, 1]
			}, {
				name: "Visit",
				reportKey: null,
				analyses: [202, 203, 206, 204, 116, 117, 211, 200, 201, 1]
			}]);
			/*
	  		self.reports = ko.observableArray([
	  	'Person',
	  	'Cohort Specific',
	  	'Condition Eras',
	  	'Conditions by Index',
	  	'Drugs by Index',
	  	'Procedures by Index',
	  	'Observation Periods',
	  	'Condition',
	  	'Drug Eras',
	  	'Drug Exposure',
	  	'Procedure',
	  	'Death'
	  ]);
	  		*/
			// The reports available are defined as part of the visualizationPacks() definition above
			self.reports = ko.observableArray(self.visualizationPacks().map(function (item) {
				return item.reportKey;
			}).filter(function (n) {
				return n != undefined;
			}).sort());
			self.getSourceInfo = function (source) {
				var info = self.currentCohortDefinitionInfo();
				for (var i = 0; i < info.length; i++) {
					if (info[i].id.sourceId == source.sourceId) {
						return info[i];
					}
				}
			};
			self.getCohortCount = function (source, observable) {
				var sourceKey = source.sourceKey;
				var cohortDefinitionId = self.currentCohortDefinition() && self.currentCohortDefinition().id();
				if (cohortDefinitionId != undefined) {
					$.ajax(appConfig.services[0].url + sourceKey + '/cohortresults/' + cohortDefinitionId + '/distinctPersonCount', {
						observable: observable,
						success: function success(result) {
							this.observable(result);
						}
					});
				}
			};
			self.routeToConceptSet = function () {
				if (self.currentConceptSet() == undefined) {
					document.location = "#/conceptset/0/details";
				} else {
					document.location = "#/conceptset/" + self.currentConceptSet().id + "/details";
				}
			};
			self.getCompletedAnalyses = function (source) {
				var cohortDefinitionId = self.currentCohortDefinition().id();
				$.ajax(appConfig.services[0].url + source.sourceKey + '/cohortresults/' + cohortDefinitionId + '/analyses', {
					success: function success(analyses) {
						sourceAnalysesStatus = {};
						// initialize cohort analyses status
						for (var i = 0; i < self.cohortAnalyses().length; i++) {
							// If the analysis id's in the array returned from the ws call (analyses)
							// contains all of the elements in cohortAnalyses()[i] array, then we
							// know that the analysis has been completed
							var allAnalysesCompleted = analyses.filter(function (elem) {
								return self.cohortAnalyses()[i].analyses.indexOf(elem) > -1;
							}).length == self.cohortAnalyses()[i].analyses.length;
							sourceAnalysesStatus[self.cohortAnalyses()[i].name] = allAnalysesCompleted ? 1 : 0;
						}
						sourceAnalysesStatus.ready = true;
						self.sourceAnalysesStatus[source.sourceKey](sourceAnalysesStatus);
					}
				});
			};
			self.setConceptSet = function (conceptset, expressionItems) {
				for (var i = 0; i < expressionItems.length; i++) {
					var conceptSetItem = expressionItems[i];
					conceptSetItem.isExcluded = ko.observable(conceptSetItem.isExcluded);
					conceptSetItem.includeDescendants = ko.observable(conceptSetItem.includeDescendants);
					conceptSetItem.includeMapped = ko.observable(conceptSetItem.includeMapped);
					self.selectedConceptsIndex[conceptSetItem.concept.CONCEPT_ID] = 1;
					self.selectedConcepts.push(conceptSetItem);
				}
				self.analyzeSelectedConcepts();
				self.currentConceptSet({
					name: ko.observable(conceptset.name),
					id: conceptset.id
				});
			};
			self.loadCohortDefinition = function (cohortDefinitionId, conceptSetId, viewToShow, mode) {
				// don't load if it is already loaded or a new concept set
				if (self.currentCohortDefinition() && self.currentCohortDefinition().id() == cohortDefinitionId) {
					if (self.currentConceptSet() && self.currentConceptSet().id == conceptSetId && self.currentConceptSetSource() == 'cohort') {
						self.currentView(viewToShow);
						return;
					} else if (conceptSetId != null) {
						self.loadConceptSet(conceptSetId, viewToShow, 'cohort', mode);
						return;
					} else {
						self.currentView(viewToShow);
						return;
					}
				}
				if (self.currentCohortDefinition() && self.currentCohortDefinitionDirtyFlag() && self.currentCohortDefinitionDirtyFlag().isDirty() && !confirm("Cohort changes are not saved. Would you like to continue?")) {
					window.location.href = "#/cohortdefinitions";
					return;
				}; // if we are loading a cohort definition, unload any active concept set that was loaded from
				// a respository. If it is dirty, prompt the user to save and exit.
				if (self.currentConceptSet()) {
					if (self.currentConceptSetSource() == 'repository') {
						if (self.currentConceptSetDirtyFlag && self.currentConceptSetDirtyFlag.isDirty() && !confirm("Concept set changes are not saved. Would you like to continue?")) {
							window.location.href = "#/cohortdefinitions";
							return;
						};
					}
					// If we continue, then clear the loaded concept set
					self.clearConceptSet();
				}
				self.currentView('loading');
				var definitionPromise, infoPromise;
				requirejs(['cohortbuilder/CohortDefinition'], function (CohortDefinition) {
					if (cohortDefinitionId == '0') {
						var def = new CohortDefinition({
							id: '0',
							name: 'New Cohort Definition'
						});
						self.currentCohortDefinition(def);
						definitionPromise = $.Deferred();
						definitionPromise.resolve();
						self.currentCohortDefinitionInfo([]);
						infoPromise = $.Deferred();
						infoPromise.resolve();
					} else {
						definitionPromise = $.ajax({
							url: appConfig.services[0].url + 'cohortdefinition/' + cohortDefinitionId,
							method: 'GET',
							contentType: 'application/json',
							success: function success(cohortDefinition) {
								cohortDefinition.expression = JSON.parse(cohortDefinition.expression);
								self.currentCohortDefinition(new CohortDefinition(cohortDefinition));
							}
						});
						infoPromise = $.ajax({
							url: appConfig.services[0].url + 'cohortdefinition/' + cohortDefinitionId + '/info',
							method: 'GET',
							contentType: 'application/json',
							success: function success(generationInfo) {
								self.currentCohortDefinitionInfo(generationInfo);
							}
						});
					}
					$.when(infoPromise, definitionPromise).done(function (ip, dp) {
						// Now that we have loaded up the cohort definition, we'll need to
						// resolve all of the concepts embedded in the concept set collection
						// to ensure they have all of the proper properties for editing in the cohort
						// editior
						var conceptPromise;
						if (self.currentCohortDefinition().expression().ConceptSets()) {
							var identifiers = $.makeArray($(self.currentCohortDefinition().expression().ConceptSets()).map(function (cs) {
								var allConceptIDs = $.makeArray($(this.expression.items()).map(function (item) {
									return this.concept.CONCEPT_ID;
								}));
								return allConceptIDs;
							}));
							conceptPromise = $.ajax({
								url: self.vocabularyUrl() + 'lookup/identifiers',
								method: 'POST',
								contentType: 'application/json',
								data: JSON.stringify(identifiers),
								success: function success(data) {
									// Update each concept set
									for (var i = 0; i < self.currentCohortDefinition().expression().ConceptSets().length; i++) {
										// Update each of the concept set items
										var currentConceptSet = self.currentCohortDefinition().expression().ConceptSets()[i];
										for (var j = 0; j < currentConceptSet.expression.items().length; j++) {
											var selectedConcept = $(data).filter(function (item) {
												return this.CONCEPT_ID == currentConceptSet.expression.items()[j].concept.CONCEPT_ID;
											});
											if (selectedConcept.length == 1) currentConceptSet.expression.items()[j].concept = selectedConcept[0];else console.error("Concept not found: " + currentConceptSet.expression.items()[j].concept.CONCEPT_ID + "," + currentConceptSet.expression.items()[j].concept.CONCEPT_NAME);
										}
										currentConceptSet.expression.items.valueHasMutated();
									}
									self.currentCohortDefinitionDirtyFlag().reset();
								}
							});
						} else {
							conceptPromise = $.Deferred();
							conceptPromise.resolve();
						}
						$.when(conceptPromise).done(function (cp) {
							// now that we have required information lets compile them into data objects for our view
							var cdmSources = appConfig.services[0].sources.filter(self.hasCDM);
							var results = [];
							for (var s = 0; s < cdmSources.length; s++) {
								var source = cdmSources[s];
								self.sourceAnalysesStatus[source.sourceKey] = ko.observable({
									ready: false,
									checking: false
								});
								var sourceInfo = self.getSourceInfo(source);
								var cdsi = {};
								cdsi.name = cdmSources[s].sourceName;
								cdsi.sourceKey = cdmSources[s].sourceKey;
								if (sourceInfo != null) {
									cdsi.isValid = ko.observable(sourceInfo.isValid);
									cdsi.sourceId = sourceInfo.id.sourceId;
									cdsi.status = ko.observable(sourceInfo.status);
									var date = new Date(sourceInfo.startTime);
									cdsi.startTime = ko.observable(date.toLocaleDateString() + ' ' + date.toLocaleTimeString());
									cdsi.executionDuration = ko.observable(sourceInfo.executionDuration / 1000 + 's');
									cdsi.distinctPeople = ko.observable('...');
									self.getCohortCount(source, cdsi.distinctPeople);
								} else {
									cdsi.isValid = ko.observable(false);
									cdsi.status = ko.observable('n/a');
									cdsi.startTime = ko.observable('n/a');
									cdsi.executionDuration = ko.observable('n/a');
									cdsi.distinctPeople = ko.observable('n/a');
								}
								results.push(cdsi);
							}
							self.cohortDefinitionSourceInfo(results);
							// load universe of analyses
							self.cohortAnalyses(self.visualizationPacks().filter(function (n) {
								return n.reportKey != undefined;
							}));
							var index = {};
							for (var a = 0; a < self.visualizationPacks().length; a++) {
								self.analysisLookup[a] = self.visualizationPacks()[a].name;
							}
							// obtain completed result status for each source
							for (var s = 0; s < cdmSources.length; s++) {
								var source = cdmSources[s];
								var info = self.getSourceInfo(source);
								if (info) {
									var sourceAnalysesStatus = {};
									sourceAnalysesStatus.checking = true;
									self.sourceAnalysesStatus[source.sourceKey](sourceAnalysesStatus);
									self.getCompletedAnalyses(source);
								}
							}
							// This is the original approach but it does not reflect some of the interdependencies between analyses
							// so commenting it out for now. We should revisit this as hardcoding the object above is not sustainable
							/*
	      var analysesPromise = $.ajax({
	      		url: appConfig.services[0].url + 'cohortanalysis/',
	      		method: 'GET',
	      		contentType: 'application/json',
	      		success: function (analyses) {
	      				var index = {};
	      				var nestedAnalyses = [];
	      					for (var a = 0; a < analyses.length; a++) {
	      						var analysis = analyses[a];
	      							if (index[analysis.analysisType] == undefined) {
	      								var analysisType = {
	      										name: analysis.analysisType,
	      										analyses: []
	      								};
	      								nestedAnalyses.push(analysisType);
	      								index[analysis.analysisType] = nestedAnalyses.indexOf(analysisType);
	      						}
	      						self.analysisLookup[analysis.analysisId] = analysis.analysisType;
	      						nestedAnalyses[index[analysis.analysisType]].analyses.push(analysis);
	      				}
	      					self.cohortAnalyses(nestedAnalyses);
	      					// obtain completed result status for each source
	      				for (var s = 0; s < cdmSources.length; s++) {
	      						var source = cdmSources[s];
	      						var info = self.getSourceInfo(source);
	      						if (info) {
	      								var sourceAnalysesStatus = {};
	      								sourceAnalysesStatus.checking = true;
	      								self.sourceAnalysesStatus[source.sourceKey](sourceAnalysesStatus);
	      								self.getCompletedAnalyses(source);
	      						}
	      				}
	      		}
	      });
	      */
							if (conceptSetId != null) {
								self.loadConceptSet(conceptSetId, viewToShow, 'cohort', mode);
							} else {
								self.currentView(viewToShow);
							}
						});
					});
				});
			};
			self.loadConceptSet = function (conceptSetId, viewToShow, loadingSource, mode) {
				// If we're attempting to load the concept set that is already loaded, exit
				if (self.currentConceptSetSource() == loadingSource && self.currentConceptSet() && self.currentConceptSet().id == conceptSetId) {
					self.currentView(viewToShow);
					self.currentConceptSetMode(mode);
					return;
				}
				// If we're attempting to load a repository concept set, unload any cohort defintions
				// that may be active
				if (self.currentCohortDefinition() && loadingSource == "repository") {
					if (self.currentCohortDefinitionDirtyFlag() && self.currentCohortDefinitionDirtyFlag().isDirty() && !confirm("Cohort changes are not saved. Would you like to continue?")) {
						window.location.href = "#/conceptsets";
						return;
					} else {
						self.clearConceptSet();
						self.cohortDefinitionSourceInfo(null);
						self.currentCohortDefinition(null);
					}
				} else if (self.currentConceptSetSource() == "repository" && self.currentConceptSet() && loadingSource == "repository" && self.currentConceptSetDirtyFlag.isDirty() && !confirm("Concept set changes are not saved. Would you like to continue?")) {
					// If we're attempting to load a new repository concept set and
					// we have a repository concept set loaded with unsaved changes
					// then prompt the user to save their work before moving forward
					window.location.href = "#/conceptsets";
					return;
				} else {
					// Clear any existing concept set
					self.clearConceptSet();
				}
				// Set the current conceptset source property to indicate if a concept set
				// was loaded from the repository or the cohort definition
				self.currentConceptSetSource(loadingSource);
				if (loadingSource == "repository") {
					self.loadRepositoryConceptSet(conceptSetId, viewToShow, mode);
				} else if (loadingSource == "cohort") {
					self.loadCohortConceptSet(conceptSetId, viewToShow, mode);
				}
			};
			self.loadRepositoryConceptSet = function (conceptSetId, viewToShow, mode) {
				$('body').removeClass('modal-open');
				if (conceptSetId == 0 && !self.currentConceptSet()) {
					// Create a new concept set
					self.currentConceptSet({
						name: ko.observable('New Concept Set'),
						id: 0
					});
				}
				// don't load if it is already loaded or a new concept set
				if (self.currentConceptSet() && self.currentConceptSet().id == conceptSetId) {
					self.analyzeSelectedConcepts();
					self.currentConceptSetMode(mode);
					self.currentView(viewToShow);
					return;
				}
				self.currentView('loading');
				$.ajax({
					url: appConfig.services[0].url + 'conceptset/' + conceptSetId,
					method: 'GET',
					contentType: 'application/json',
					success: function success(conceptset) {
						$.ajax({
							url: appConfig.services[0].url + 'conceptset/' + conceptSetId + '/expression',
							method: 'GET',
							contentType: 'application/json',
							success: function success(expression) {
								self.setConceptSet(conceptset, expression.items);
								self.currentView(viewToShow);
								var resolvingPromise = self.resolveConceptSetExpression();
								$.when(resolvingPromise).done(function () {
									self.currentConceptSetMode(mode);
									$('#conceptSetLoadDialog').modal('hide');
								});
							}
						});
					}
				});
			};

			self.loadCohortConceptSet = function (conceptSetId, viewToShow, mode) {
				// Load up the selected concept set from the cohort definition
				var conceptSet = self.currentCohortDefinition().expression().ConceptSets().filter(function (item) {
					return item.id == conceptSetId;
				})[0];
				// If the cohort concept set is lacking the STANDARD_CONCEPT property, we must
				// resolve it with the vocabulary web service to ensure we have all of the appropriate
				// properties
				var conceptPromise;
				if (conceptSet.expression.items() && conceptSet.expression.items().length > 0 && !conceptSet.expression.items()[0].concept.STANDARD_CONCEPT) {
					var identifiers = $.makeArray($(conceptSet.expression.items()).map(function () {
						return this.concept.CONCEPT_ID;
					}));
					conceptPromise = $.ajax({
						url: self.vocabularyUrl() + 'lookup/identifiers',
						method: 'POST',
						contentType: 'application/json',
						data: JSON.stringify(identifiers),
						success: function success(data) {
							for (var i = 0; i < data.length; i++) {
								conceptSet.expression.items()[i].concept = data[i];
							}
							conceptSet.expression.items.valueHasMutated();
						}
					});
				} else {
					conceptPromise = $.Deferred();
					conceptPromise.resolve();
				}
				$.when(conceptPromise).done(function (cp) {
					// Reconstruct the expression items
					for (var i = 0; i < conceptSet.expression.items().length; i++) {
						self.selectedConceptsIndex[conceptSet.expression.items()[i].concept.CONCEPT_ID] = 1;
					}
					self.selectedConcepts(conceptSet.expression.items());
					self.analyzeSelectedConcepts();
					self.currentConceptSet({
						name: conceptSet.name,
						id: conceptSet.id
					});
					self.currentView(viewToShow);
					var resolvingPromise = self.resolveConceptSetExpression();
					$.when(resolvingPromise).done(function () {
						self.currentConceptSetMode(mode);
						$('#conceptSetLoadDialog').modal('hide');
					});
				});
			};
			self.loadDensity = function (results) {
				var densityPromise = $.Deferred();
				// skip record counts if disabled on configuration screen
				if (!self.enableRecordCounts()) {
					for (c = 0; c < results.length; c++) {
						results[c].RECORD_COUNT = '-';
						results[c].DESCENDANT_RECORD_COUNT = '-';
					}
					densityPromise.resolve();
					return densityPromise;
				}
				// nothing to look up
				if (results.length == 0) {
					densityPromise.resolve();
					return densityPromise;
				}
				var searchResultIdentifiers = [];
				for (c = 0; c < results.length; c++) {
					// optimization - only lookup standard concepts as non standard concepts will not have records
					if (results[c].STANDARD_CONCEPT_CAPTION == 'Standard' || results[c].STANDARD_CONCEPT_CAPTION == 'Classification') {
						searchResultIdentifiers.push(results[c].CONCEPT_ID);
					}
				}
				var densityIndex = {};
				$.ajax({
					url: self.resultsUrl() + 'conceptRecordCount',
					method: 'POST',
					contentType: 'application/json',
					timeout: 10000,
					data: JSON.stringify(searchResultIdentifiers),
					success: function success(entries) {
						var formatComma = _d2.default.format(',');
						for (var e = 0; e < entries.length; e++) {
							densityIndex[entries[e].key] = entries[e].value;
						}
						for (var c = 0; c < results.length; c++) {
							var concept = results[c];
							if (densityIndex[concept.CONCEPT_ID] != undefined) {
								concept.RECORD_COUNT = formatComma(densityIndex[concept.CONCEPT_ID][0]);
								concept.DESCENDANT_RECORD_COUNT = formatComma(densityIndex[concept.CONCEPT_ID][1]);
							} else {
								concept.RECORD_COUNT = 0;
								concept.DESCENDANT_RECORD_COUNT = 0;
							}
						}
						densityPromise.resolve();
					},
					error: function error(_error) {
						for (var c = 0; c < results.length; c++) {
							var concept = results[c];
							concept.RECORD_COUNT = 'timeout';
							concept.DESCENDANT_RECORD_COUNT = 'timeout';
						}
						densityPromise.resolve();
					}
				});
				return densityPromise;
			};
			self.reportCohortDefinitionId = ko.observable();
			self.reportReportName = ko.observable();
			self.reportSourceKey = ko.observable();
			self.reportValid = ko.computed(function () {
				return self.reportReportName() != undefined && self.reportSourceKey() != undefined && self.reportCohortDefinitionId() != undefined && !self.loadingReport() && !self.loadingReportDrilldown();
			}, this);
			self.reportTriggerRun = ko.observable(false);
			self.jobs = ko.observableArray();
			self.sourceAnalysesStatus = {};
			self.analysisLookup = {};
			self.cohortDefinitionSourceInfo = ko.observableArray();
			self.recentSearch = ko.observableArray(null);
			self.recentConcept = ko.observableArray(null);
			self.currentSearch = ko.observable();
			self.currentSearchValue = ko.observable();
			self.currentView = ko.observable('splash');
			self.conceptSetInclusionIdentifiers = ko.observableArray();
			self.currentConceptSetExpressionJson = ko.observable();
			self.currentConceptIdentifierList = ko.observable();

			self.currentConceptSet = ko.observable();
			self.currentConceptSetDirtyFlag = new ohdsiUtil.dirtyFlag({
				header: self.currentConceptSet,
				details: self.selectedConcepts
			});
			self.conceptSetCss = ko.pureComputed(function () {
				if (self.currentConceptSet()) return self.currentConceptSetDirtyFlag.isDirty() ? "unsaved" : "open";
			});
			self.conceptSetURL = ko.pureComputed(function () {
				var url = "#/";
				if (self.currentConceptSet()) url = url + "conceptset/" + (self.currentConceptSet().id || '0') + '/details';else url = url + "conceptsets";
				return url;
			});

			self.currentConceptSetSource = ko.observable('repository');
			self.currentConceptSetNegativeControls = ko.observable();
			self.currentIncludedConceptIdentifierList = ko.observable();
			self.searchResultsConcepts = ko.observableArray();
			self.relatedConcepts = ko.observableArray();
			self.relatedSourcecodes = ko.observableArray();
			self.importedConcepts = ko.observableArray();
			self.includedConcepts = ko.observableArray();
			self.denseSiblings = ko.observableArray();
			self.includedSourcecodes = ko.observableArray();
			self.cohortDefinitions = ko.observableArray();

			self.currentCohortDefinition = ko.observable();
			self.cohortDefCss = ko.pureComputed(function () {
				if (self.currentCohortDefinition()) return self.currentCohortDefinitionDirtyFlag().isDirty() ? "unsaved" : "open";
			});
			self.cohortDefURL = ko.pureComputed(function () {
				var url = "#/";
				if (self.currentCohortDefinition()) url = url + "cohortdefinition/" + (self.currentCohortDefinition().id() || '0');else url = url + "cohortdefinitions";
				return url;
			});

			self.currentCohortComparisonId = ko.observable();
			self.currentCohortComparison = ko.observable();
			self.currentCohortComparisonDirtyFlag = ko.observable(new ohdsiUtil.dirtyFlag(self.currentCohortComparison()));
			self.ccaCss = ko.pureComputed(function () {
				if (self.currentCohortComparison()) return self.currentCohortComparisonDirtyFlag().isDirty() ? "unsaved" : "open";
			});
			self.ccaURL = ko.pureComputed(function () {
				var url = "#/estimation";
				if (self.currentCohortComparison()) url = url + "/" + (self.currentCohortComparison().analysisId || 0);
				return url;
			});

			self.currentCohortDefinitionInfo = ko.observable();
			self.currentCohortDefinitionDirtyFlag = ko.observable(self.currentCohortDefinition() && new ohdsiUtil.dirtyFlag(self.currentCohortDefinition()));
			self.feasibilityId = ko.observable();

			self.selectedIRAnalysisId = ko.observable();
			self.currentIRAnalysis = ko.observable();
			self.currentIRAnalysisDirtyFlag = ko.observable(new ohdsiUtil.dirtyFlag(self.currentIRAnalysis()));

			self.resolvingConceptSetExpression = ko.observable();
			self.resolvingSourcecodes = ko.observable();
			self.evidence = ko.observableArray();
			self.initializationErrors = 0;
			self.vocabularyUrl = ko.observable();
			self.evidenceUrl = ko.observable();
			self.resultsUrl = ko.observable();
			self.currentConcept = ko.observable();
			self.currentConceptId = ko.observable();
			self.currentConceptMode = ko.observable('details');
			self.currentIRAnalysisId = ko.observable();

			self.irStatusCss = ko.pureComputed(function () {
				if (self.currentIRAnalysis()) return self.currentIRAnalysisDirtyFlag().isDirty() ? "unsaved" : "open";
			});
			self.irAnalysisURL = ko.pureComputed(function () {
				var url = "#/iranalysis";
				if (self.currentIRAnalysis()) url = url + "/" + (self.currentIRAnalysis().id() || 'new');
				return url;
			});

			self.irStatusCss = ko.pureComputed(function () {
				if (self.currentIRAnalysis()) return self.currentIRAnalysisDirtyFlag().isDirty() ? "unsaved" : "open";
			});
			self.renderCurrentConceptSelector = function () {
				var css = '';
				if (self.selectedConceptsIndex[self.currentConcept().CONCEPT_ID] == 1) {
					css = ' selected';
				}
				return '<i class="fa fa-shopping-cart' + css + '"></i>';
			};
			self.renderConceptSelector = function (s, p, d) {
				var css = '';
				var icon = 'fa-shopping-cart';
				if (self.selectedConceptsIndex[d.CONCEPT_ID] == 1) {
					css = ' selected';
				}
				return '<i class="fa ' + icon + ' ' + css + '"></i>';
			};
			self.currentConceptSetMode = ko.observable('details');
			//ohdsiUtil.setState('cohortDefTab', 'definition');
			self.currentCohortDefinitionMode = ko.observable('definition');
			self.currentImportMode = ko.observable('identifiers');
			self.feRelated = ko.observable();
			self.feSearch = ko.observable();
			self.metarchy = {};
			self.selectedConcepts = ko.observableArray(null);
			//.extend({ persist: 'atlas.selectedConcepts' });
			self.selectedConceptsWarnings = ko.observableArray();

			self.checkCurrentSource = function (source) {
				return source.url == self.curentVocabularyUrl();
			};
			self.clearConceptSet = function () {
				self.currentConceptSet(null);
				self.selectedConcepts([]);
				self.selectedConceptsIndex = {};
				self.analyzeSelectedConcepts();
				self.resolveConceptSetExpression();
				self.currentConceptSetDirtyFlag.reset();
			};
			self.renderHierarchyLink = function (d) {
				var valid = d.INVALID_REASON_CAPTION == 'Invalid' || d.STANDARD_CONCEPT != 'S' ? 'invalid' : '';
				return '<a class="' + valid + '" href=\"#/concept/' + d.CONCEPT_ID + '\">' + d.CONCEPT_NAME + '</a>';
			};
			self.analyzeSelectedConcepts = function () {
				self.selectedConceptsWarnings.removeAll();
				var domains = [];
				var standards = [];
				var includeNonStandard = false;
				for (var i = 0; i < self.selectedConcepts().length; i++) {
					var domain = self.selectedConcepts()[i].concept.DOMAIN_ID;
					var standard = self.selectedConcepts()[i].concept.STANDARD_CONCEPT_CAPTION;
					if (standard != 'Standard') {
						includeNonStandard = true;
					}
					var index;
					index = $.inArray(domain, domains);
					if (index < 0) {
						domains.push(domain);
					}
					index = $.inArray(standard, standards);
					if (index < 0) {
						standards.push(standard);
					}
				}
				if (domains.length > 1) {
					self.selectedConceptsWarnings.push('Your saved concepts come from multiple Domains (' + domains.join(', ') + ').  A useful set of concepts will typically all come from the same Domain.');
				}
				if (standards.length > 1) {
					self.selectedConceptsWarnings.push('Your saved concepts include different standard concept types (' + standards.join(', ') + ').  A useful set of concepts will typically all be of the same standard concept type.');
				}
				if (includeNonStandard) {
					self.selectedConceptsWarnings.push('Your saved concepts include Non-Standard or Classification concepts.  Typically concept sets should only include Standard concepts unless advanced use of this concept set is planned.');
				}
			};
			self.selectedConceptsIndex = {};
			self.createConceptSetItem = function (concept) {
				var conceptSetItem = {};
				conceptSetItem.concept = concept;
				conceptSetItem.isExcluded = ko.observable(false);
				conceptSetItem.includeDescendants = ko.observable(false);
				conceptSetItem.includeMapped = ko.observable(false);
				return conceptSetItem;
			};
			self.conceptSetInclusionCount = ko.observable(0);
			self.sourcecodeInclusionCount = ko.observable(0);
			self.syntaxHighlight = function (json) {
				if (typeof json != 'string') {
					json = JSON.stringify(json, undefined, 2);
				}
				json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
				return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
					var cls = 'number';
					if (/^"/.test(match)) {
						if (/:$/.test(match)) {
							cls = 'key';
						} else {
							cls = 'string';
						}
					} else if (/true|false/.test(match)) {
						cls = 'boolean';
					} else if (/null/.test(match)) {
						cls = 'null';
					}
					return '<span class="' + cls + '">' + match + '</span>';
				});
			};
			self.updateSearchFilters = function () {
				$(event.target).toggleClass('selected');
				var filters = [];
				$('#wrapperSearchResultsFilter .facetMemberName.selected').each(function (i, d) {
					filters.push(d.id);
				});
				self.feSearch().SetFilter(filters);
				// update filter data binding
				self.feSearch(self.feSearch());
				// update table data binding
				self.searchResultsConcepts(self.feSearch().GetCurrentObjects());
			};
			self.selectConcept = function (concept) {
				document.location = '#/concept/' + concept.CONCEPT_ID;
			};
			self.currentConceptSetSubscription = self.currentConceptSet.subscribe(function (newValue) {
				if (newValue != null) {
					self.currentConceptSetDirtyFlag = new ohdsiUtil.dirtyFlag({
						header: self.currentConceptSet,
						details: self.selectedConcepts
					});
				}
			});
			self.currentCohortDefinitionSubscription = self.currentCohortDefinition.subscribe(function (newValue) {
				if (newValue != null) {
					self.currentCohortDefinitionDirtyFlag(new ohdsiUtil.dirtyFlag(self.currentCohortDefinition()));
				}
			});

			console.log('starting main stuff');
			$('#splash').fadeIn();
			// establish base priorities for daimons
			var evidencePriority = 0;
			var vocabularyPriority = 0;
			var densityPriority = 0;

			// initialize all service information asynchronously
			$.each(appConfig.services, function (serviceIndex, service) {
				service.sources = [];
				var servicePromise = $.Deferred();
				self.initPromises.push(servicePromise);

				util.cachedAjax({
					url: service.url + 'source/sources',
					method: 'GET',
					contentType: 'application/json',
					success: function success(sources) {
						service.available = true;
						var completedSources = 0;

						$.each(sources, function (sourceIndex, source) {
							source.hasVocabulary = false;
							source.hasEvidence = false;
							source.hasResults = false;
							source.hasCDM = false;
							source.vocabularyUrl = '';
							source.evidenceUrl = '';
							source.resultsUrl = '';
							source.error = '';

							source.initialized = true;
							for (var d = 0; d < source.daimons.length; d++) {
								var daimon = source.daimons[d];

								// evaluate vocabulary daimons
								if (daimon.daimonType == 'Vocabulary') {
									source.hasVocabulary = true;
									source.vocabularyUrl = service.url + source.sourceKey + '/vocabulary/';
									if (daimon.priority >= vocabularyPriority) {
										vocabularyPriority = daimon.priority;
										self.vocabularyUrl(source.vocabularyUrl);
									}
								}

								// evaluate evidence daimons
								if (daimon.daimonType == 'Evidence') {
									source.hasEvidence = true;
									source.evidenceUrl = service.url + source.sourceKey + '/evidence/';
									if (daimon.priority >= evidencePriority) {
										evidencePriority = daimon.priority;
										self.evidenceUrl(source.evidenceUrl);
									}
								}

								// evaluate results daimons
								if (daimon.daimonType == 'Results') {
									source.hasResults = true;
									source.resultsUrl = service.url + source.sourceKey + '/cdmresults/';
									if (daimon.priority >= densityPriority) {
										densityPriority = daimon.priority;
										self.resultsUrl(source.resultsUrl);
									}
								}

								// evaluate cdm daimons
								if (daimon.daimonType == 'CDM') {
									source.hasCDM = true;
								}
							}

							service.sources.push(source);

							if (source.hasVocabulary) {
								util.cachedAjax({
									url: service.url + source.sourceKey + '/vocabulary/info',
									timeout: 20000,
									method: 'GET',
									contentType: 'application/json',
									success: function success(info) {
										completedSources++;
										source.version = info.version;
										source.dialect = info.dialect;

										if (completedSources == sources.length) {
											servicePromise.resolve();
										}
									},
									error: function error(err) {
										completedSources++;
										self.initializationErrors++;
										source.version = 'unknown';
										source.dialect = 'unknown';
										source.url = service.url + source.sourceKey + '/';
										if (completedSources == sources.length) {
											servicePromise.resolve();
										}
									}
								});
							} else {
								completedSources++;
								source.version = 'not available';
								if (completedSources == sources.length) {
									servicePromise.resolve();
								}
							}
						});
					},
					error: function error(xhr, ajaxOptions, thrownError) {
						service.available = false;
						service.xhr = xhr;
						service.thrownError = thrownError;

						self.appInitializationFailed(true);
						self.currentView('configure');

						servicePromise.resolve();
					}
				});
			});

			$.when.apply($, self.initPromises).done(function () {
				self.initComplete();
			});

			self.currentView.subscribe(function (newView) {
				if (newView != 'splash') {
					$('#splash').hide();
				}

				switch (newView) {
					case 'splash':
						// switching back to atlas splash for activity view
						$('#splash').show();
						break;
					case 'reports':
						$.ajax({
							url: appConfig.services[0].url + 'cohortdefinition',
							method: 'GET',
							contentType: 'application/json',
							success: function success(cohortDefinitions) {
								self.cohortDefinitions(cohortDefinitions);
							}
						});
						break;
				}
			});

			self.loadIncluded = function () {
				self.loadingIncluded(true);
				var includedPromise = $.Deferred();

				$.ajax({
					url: self.vocabularyUrl() + 'lookup/identifiers',
					method: 'POST',
					contentType: 'application/json',
					data: JSON.stringify(self.conceptSetInclusionIdentifiers()),
					success: function success(data) {
						var densityPromise = self.loadDensity(data);

						$.when(densityPromise).done(function () {
							self.includedConcepts(data);
							includedPromise.resolve();
							self.loadingIncluded(false);
						});
					}
				});

				return includedPromise;
			};

			self.loadSourcecodes = function () {
				self.loadingSourcecodes(true);

				// load mapped
				var identifiers = [];
				var concepts = self.includedConcepts();
				for (var i = 0; i < concepts.length; i++) {
					identifiers.push(concepts[i].CONCEPT_ID);
				}

				return $.ajax({
					url: self.vocabularyUrl() + 'lookup/mapped',
					method: 'POST',
					data: JSON.stringify(identifiers),
					contentType: 'application/json',
					success: function success(sourcecodes) {
						self.includedSourcecodes(sourcecodes);
						self.loadingSourcecodes(false);
					}
				});
			};

			self.currentConceptSetMode.subscribe(function (newMode) {
				switch (newMode) {
					case 'included':
						self.loadIncluded();
						break;
					case 'sourcecodes':
						var includedPromise = self.loadIncluded();
						$.when(includedPromise).done(function () {
							self.loadSourcecodes();
						});
						break;
				}
			});

			// handle select all
			$(document).on('click', 'th i.fa.fa-shopping-cart', function () {
				if (self.currentConceptSet() == undefined) {
					var newConceptSet = {
						name: ko.observable("New Concept Set"),
						id: 0
					};
				}

				var table = $(this).closest('.dataTable').DataTable();
				var concepts = table.rows({
					search: 'applied'
				}).data();
				var selectedConcepts = self.selectedConcepts();

				for (var i = 0; i < concepts.length; i++) {
					var concept = concepts[i];
					if (self.selectedConceptsIndex[concept.CONCEPT_ID]) {
						// ignore if already selected
					} else {
						var conceptSetItem = self.createConceptSetItem(concept);
						self.selectedConceptsIndex[concept.CONCEPT_ID] = 1;
						selectedConcepts.push(conceptSetItem);
					}
				}
				self.selectedConcepts(selectedConcepts);
				ko.contextFor(this).$component.reference.valueHasMutated();
			});

			// handling concept set selections
			$(document).on('click', 'td i.fa.fa-shopping-cart, .asset-heading i.fa.fa-shopping-cart', function () {
				if (self.currentConceptSet() == undefined) {
					var newConceptSet = {
						name: ko.observable("New Concept Set"),
						id: 0
					};
					self.currentConceptSet({
						name: ko.observable('New Concept Set'),
						id: 0
					});
					self.currentConceptSetSource('repository');
				}

				$(this).toggleClass('selected');
				var concept = ko.contextFor(this).$data;

				if ($(this).hasClass('selected')) {
					var conceptSetItem = self.createConceptSetItem(concept);
					self.selectedConceptsIndex[concept.CONCEPT_ID] = 1;
					self.selectedConcepts.push(conceptSetItem);
				} else {
					delete self.selectedConceptsIndex[concept.CONCEPT_ID];
					self.selectedConcepts.remove(function (i) {
						return i.concept.CONCEPT_ID == concept.CONCEPT_ID;
					});
				}

				self.analyzeSelectedConcepts();

				// If we are updating a concept set that is part of a cohort definition
				// then we need to notify any dependent observables about this change in the concept set
				if (self.currentCohortDefinition() && self.currentConceptSetSource() == "cohort") {
					var conceptSet = self.currentCohortDefinition().expression().ConceptSets().filter(function (item) {
						return item.id == self.currentConceptSet().id;
					})[0];
					conceptSet.expression.items.valueHasMutated();
				}
			});

			// concept set selector handling
			$(document).on('click', '.conceptSetTable i.fa.fa-shopping-cart', function () {
				$(this).toggleClass('selected');
				var conceptSetItem = ko.contextFor(this).$data;

				delete self.selectedConceptsIndex[conceptSetItem.concept.CONCEPT_ID];
				self.selectedConcepts.remove(function (i) {
					return i.concept.CONCEPT_ID == conceptSetItem.concept.CONCEPT_ID;
				});

				self.resolveConceptSetExpression();
				self.analyzeSelectedConcepts();
			});

			$(window).bind('beforeunload', function () {
				if (pageModel.hasUnsavedChanges()) return "Changes will be lost if you do not save.";
			});
			self.hasUnsavedChanges = ko.pureComputed(function () {
				return pageModel.currentCohortDefinitionDirtyFlag() && pageModel.currentCohortDefinitionDirtyFlag().isDirty() || pageModel.currentConceptSetDirtyFlag && pageModel.currentConceptSetDirtyFlag.isDirty() || pageModel.currentIRAnalysisDirtyFlag().isDirty() || pageModel.currentCohortComparisonDirtyFlag().isDirty();
			});
		};
		return OrigAtlasAppModel;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = https://code.jquery.com/jquery-1.11.2.min;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/*!
	 * Knockout JavaScript library v3.3.0
	 * (c) Steven Sanderson - http://knockoutjs.com/
	 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
	 */

	(function () {
	  (function (p) {
	    var y = this || (0, eval)("this"),
	        w = y.document,
	        M = y.navigator,
	        u = y.jQuery,
	        E = y.JSON;(function (p) {
	       true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__], __WEBPACK_AMD_DEFINE_FACTORY__ = (p), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "function" === typeof require && "object" === (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" === (typeof module === "undefined" ? "undefined" : _typeof(module)) ? p(module.exports || exports) : p(y.ko = {});
	    })(function (N, O) {
	      function J(a, d) {
	        return null === a || (typeof a === "undefined" ? "undefined" : _typeof(a)) in Q ? a === d : !1;
	      }function R(a, d) {
	        var c;return function () {
	          c || (c = setTimeout(function () {
	            c = p;a();
	          }, d));
	        };
	      }function S(a, d) {
	        var c;return function () {
	          clearTimeout(c);
	          c = setTimeout(a, d);
	        };
	      }function K(b, d, c, e) {
	        a.d[b] = { init: function init(b, k, h, l, g) {
	            var m, x;a.w(function () {
	              var q = a.a.c(k()),
	                  n = !c !== !q,
	                  r = !x;if (r || d || n !== m) r && a.Z.oa() && (x = a.a.la(a.e.childNodes(b), !0)), n ? (r || a.e.T(b, a.a.la(x)), a.Ja(e ? e(g, q) : g, b)) : a.e.ma(b), m = n;
	            }, null, { q: b });return { controlsDescendantBindings: !0 };
	          } };a.h.ka[b] = !1;a.e.R[b] = !0;
	      }var a = "undefined" !== typeof N ? N : {};a.b = function (b, d) {
	        for (var c = b.split("."), e = a, f = 0; f < c.length - 1; f++) {
	          e = e[c[f]];
	        }e[c[c.length - 1]] = d;
	      };a.D = function (a, d, c) {
	        a[d] = c;
	      };a.version = "3.3.0";
	      a.b("version", a.version);a.a = function () {
	        function b(a, b) {
	          for (var c in a) {
	            a.hasOwnProperty(c) && b(c, a[c]);
	          }
	        }function d(a, b) {
	          if (b) for (var c in b) {
	            b.hasOwnProperty(c) && (a[c] = b[c]);
	          }return a;
	        }function c(a, b) {
	          a.__proto__ = b;return a;
	        }function e(b, c, g, d) {
	          var e = b[c].match(m) || [];a.a.o(g.match(m), function (b) {
	            a.a.ga(e, b, d);
	          });b[c] = e.join(" ");
	        }var f = { __proto__: [] } instanceof Array,
	            k = {},
	            h = {};k[M && /Firefox\/2/i.test(M.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];k.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
	        b(k, function (a, b) {
	          if (b.length) for (var c = 0, g = b.length; c < g; c++) {
	            h[b[c]] = a;
	          }
	        });var l = { propertychange: !0 },
	            g = w && function () {
	          for (var a = 3, b = w.createElement("div"), c = b.getElementsByTagName("i"); b.innerHTML = "\x3c!--[if gt IE " + ++a + "]><i></i><![endif]--\x3e", c[0];) {}return 4 < a ? a : p;
	        }(),
	            m = /\S+/g;return { Bb: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/], o: function o(a, b) {
	            for (var c = 0, g = a.length; c < g; c++) {
	              b(a[c], c);
	            }
	          }, m: function m(a, b) {
	            if ("function" == typeof Array.prototype.indexOf) return Array.prototype.indexOf.call(a, b);for (var c = 0, g = a.length; c < g; c++) {
	              if (a[c] === b) return c;
	            }return -1;
	          }, vb: function vb(a, b, c) {
	            for (var g = 0, d = a.length; g < d; g++) {
	              if (b.call(c, a[g], g)) return a[g];
	            }return null;
	          }, ya: function ya(b, c) {
	            var g = a.a.m(b, c);0 < g ? b.splice(g, 1) : 0 === g && b.shift();
	          }, wb: function wb(b) {
	            b = b || [];for (var c = [], g = 0, d = b.length; g < d; g++) {
	              0 > a.a.m(c, b[g]) && c.push(b[g]);
	            }return c;
	          }, Ka: function Ka(a, b) {
	            a = a || [];for (var c = [], g = 0, d = a.length; g < d; g++) {
	              c.push(b(a[g], g));
	            }return c;
	          }, xa: function xa(a, b) {
	            a = a || [];for (var c = [], g = 0, d = a.length; g < d; g++) {
	              b(a[g], g) && c.push(a[g]);
	            }return c;
	          }, ia: function ia(a, b) {
	            if (b instanceof Array) a.push.apply(a, b);else for (var c = 0, g = b.length; c < g; c++) {
	              a.push(b[c]);
	            }return a;
	          }, ga: function ga(b, c, g) {
	            var d = a.a.m(a.a.cb(b), c);0 > d ? g && b.push(c) : g || b.splice(d, 1);
	          }, za: f, extend: d, Fa: c, Ga: f ? c : d, A: b, pa: function pa(a, b) {
	            if (!a) return a;var c = {},
	                g;for (g in a) {
	              a.hasOwnProperty(g) && (c[g] = b(a[g], g, a));
	            }return c;
	          }, Ra: function Ra(b) {
	            for (; b.firstChild;) {
	              a.removeNode(b.firstChild);
	            }
	          }, Jb: function Jb(b) {
	            b = a.a.O(b);for (var c = (b[0] && b[0].ownerDocument || w).createElement("div"), g = 0, d = b.length; g < d; g++) {
	              c.appendChild(a.S(b[g]));
	            }return c;
	          }, la: function la(b, c) {
	            for (var g = 0, d = b.length, e = []; g < d; g++) {
	              var m = b[g].cloneNode(!0);e.push(c ? a.S(m) : m);
	            }return e;
	          }, T: function T(b, c) {
	            a.a.Ra(b);if (c) for (var g = 0, d = c.length; g < d; g++) {
	              b.appendChild(c[g]);
	            }
	          }, Qb: function Qb(b, c) {
	            var g = b.nodeType ? [b] : b;if (0 < g.length) {
	              for (var d = g[0], e = d.parentNode, m = 0, f = c.length; m < f; m++) {
	                e.insertBefore(c[m], d);
	              }m = 0;for (f = g.length; m < f; m++) {
	                a.removeNode(g[m]);
	              }
	            }
	          }, na: function na(a, b) {
	            if (a.length) {
	              for (b = 8 === b.nodeType && b.parentNode || b; a.length && a[0].parentNode !== b;) {
	                a.splice(0, 1);
	              }if (1 < a.length) {
	                var c = a[0],
	                    g = a[a.length - 1];for (a.length = 0; c !== g;) {
	                  if (a.push(c), c = c.nextSibling, !c) return;
	                }a.push(g);
	              }
	            }return a;
	          }, Sb: function Sb(a, b) {
	            7 > g ? a.setAttribute("selected", b) : a.selected = b;
	          }, ib: function ib(a) {
	            return null === a || a === p ? "" : a.trim ? a.trim() : a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
	          }, Dc: function Dc(a, b) {
	            a = a || "";return b.length > a.length ? !1 : a.substring(0, b.length) === b;
	          }, jc: function jc(a, b) {
	            if (a === b) return !0;if (11 === a.nodeType) return !1;if (b.contains) return b.contains(3 === a.nodeType ? a.parentNode : a);if (b.compareDocumentPosition) return 16 == (b.compareDocumentPosition(a) & 16);for (; a && a != b;) {
	              a = a.parentNode;
	            }return !!a;
	          }, Qa: function Qa(b) {
	            return a.a.jc(b, b.ownerDocument.documentElement);
	          }, tb: function tb(b) {
	            return !!a.a.vb(b, a.a.Qa);
	          }, v: function v(a) {
	            return a && a.tagName && a.tagName.toLowerCase();
	          }, n: function n(b, c, d) {
	            var m = g && l[c];if (!m && u) u(b).bind(c, d);else if (m || "function" != typeof b.addEventListener) {
	              if ("undefined" != typeof b.attachEvent) {
	                var e = function e(a) {
	                  d.call(b, a);
	                },
	                    f = "on" + c;b.attachEvent(f, e);a.a.C.fa(b, function () {
	                  b.detachEvent(f, e);
	                });
	              } else throw Error("Browser doesn't support addEventListener or attachEvent");
	            } else b.addEventListener(c, d, !1);
	          }, qa: function qa(b, c) {
	            if (!b || !b.nodeType) throw Error("element must be a DOM node when calling triggerEvent");var g;"input" === a.a.v(b) && b.type && "click" == c.toLowerCase() ? (g = b.type, g = "checkbox" == g || "radio" == g) : g = !1;if (u && !g) u(b).trigger(c);else if ("function" == typeof w.createEvent) {
	              if ("function" == typeof b.dispatchEvent) g = w.createEvent(h[c] || "HTMLEvents"), g.initEvent(c, !0, !0, y, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, b), b.dispatchEvent(g);else throw Error("The supplied element doesn't support dispatchEvent");
	            } else if (g && b.click) b.click();else if ("undefined" != typeof b.fireEvent) b.fireEvent("on" + c);else throw Error("Browser doesn't support triggering events");
	          }, c: function c(b) {
	            return a.F(b) ? b() : b;
	          }, cb: function cb(b) {
	            return a.F(b) ? b.B() : b;
	          }, Ia: function Ia(b, c, g) {
	            var d;c && ("object" === _typeof(b.classList) ? (d = b.classList[g ? "add" : "remove"], a.a.o(c.match(m), function (a) {
	              d.call(b.classList, a);
	            })) : "string" === typeof b.className.baseVal ? e(b.className, "baseVal", c, g) : e(b, "className", c, g));
	          }, Ha: function Ha(b, c) {
	            var g = a.a.c(c);if (null === g || g === p) g = "";var d = a.e.firstChild(b);!d || 3 != d.nodeType || a.e.nextSibling(d) ? a.e.T(b, [b.ownerDocument.createTextNode(g)]) : d.data = g;a.a.mc(b);
	          }, Rb: function Rb(a, b) {
	            a.name = b;if (7 >= g) try {
	              a.mergeAttributes(w.createElement("<input name='" + a.name + "'/>"), !1);
	            } catch (c) {}
	          }, mc: function mc(a) {
	            9 <= g && (a = 1 == a.nodeType ? a : a.parentNode, a.style && (a.style.zoom = a.style.zoom));
	          }, kc: function kc(a) {
	            if (g) {
	              var b = a.style.width;
	              a.style.width = 0;a.style.width = b;
	            }
	          }, Bc: function Bc(b, c) {
	            b = a.a.c(b);c = a.a.c(c);for (var g = [], d = b; d <= c; d++) {
	              g.push(d);
	            }return g;
	          }, O: function O(a) {
	            for (var b = [], c = 0, g = a.length; c < g; c++) {
	              b.push(a[c]);
	            }return b;
	          }, Hc: 6 === g, Ic: 7 === g, M: g, Db: function Db(b, c) {
	            for (var g = a.a.O(b.getElementsByTagName("input")).concat(a.a.O(b.getElementsByTagName("textarea"))), d = "string" == typeof c ? function (a) {
	              return a.name === c;
	            } : function (a) {
	              return c.test(a.name);
	            }, m = [], e = g.length - 1; 0 <= e; e--) {
	              d(g[e]) && m.push(g[e]);
	            }return m;
	          }, yc: function yc(b) {
	            return "string" == typeof b && (b = a.a.ib(b)) ? E && E.parse ? E.parse(b) : new Function("return " + b)() : null;
	          }, jb: function jb(b, c, g) {
	            if (!E || !E.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");return E.stringify(a.a.c(b), c, g);
	          }, zc: function zc(c, g, d) {
	            d = d || {};var m = d.params || {},
	                e = d.includeFields || this.Bb,
	                f = c;if ("object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && "form" === a.a.v(c)) for (var f = c.action, l = e.length - 1; 0 <= l; l--) {
	              for (var k = a.a.Db(c, e[l]), h = k.length - 1; 0 <= h; h--) {
	                m[k[h].name] = k[h].value;
	              }
	            }g = a.a.c(g);var s = w.createElement("form");s.style.display = "none";s.action = f;s.method = "post";for (var p in g) {
	              c = w.createElement("input"), c.type = "hidden", c.name = p, c.value = a.a.jb(a.a.c(g[p])), s.appendChild(c);
	            }b(m, function (a, b) {
	              var c = w.createElement("input");c.type = "hidden";c.name = a;c.value = b;s.appendChild(c);
	            });w.body.appendChild(s);d.submitter ? d.submitter(s) : s.submit();setTimeout(function () {
	              s.parentNode.removeChild(s);
	            }, 0);
	          } };
	      }();a.b("utils", a.a);a.b("utils.arrayForEach", a.a.o);a.b("utils.arrayFirst", a.a.vb);a.b("utils.arrayFilter", a.a.xa);a.b("utils.arrayGetDistinctValues", a.a.wb);a.b("utils.arrayIndexOf", a.a.m);a.b("utils.arrayMap", a.a.Ka);a.b("utils.arrayPushAll", a.a.ia);a.b("utils.arrayRemoveItem", a.a.ya);a.b("utils.extend", a.a.extend);a.b("utils.fieldsIncludedWithJsonPost", a.a.Bb);a.b("utils.getFormFields", a.a.Db);a.b("utils.peekObservable", a.a.cb);a.b("utils.postJson", a.a.zc);a.b("utils.parseJson", a.a.yc);a.b("utils.registerEventHandler", a.a.n);a.b("utils.stringifyJson", a.a.jb);a.b("utils.range", a.a.Bc);a.b("utils.toggleDomNodeCssClass", a.a.Ia);a.b("utils.triggerEvent", a.a.qa);a.b("utils.unwrapObservable", a.a.c);a.b("utils.objectForEach", a.a.A);a.b("utils.addOrRemoveItem", a.a.ga);a.b("utils.setTextContent", a.a.Ha);a.b("unwrap", a.a.c);Function.prototype.bind || (Function.prototype.bind = function (a) {
	        var d = this;if (1 === arguments.length) return function () {
	          return d.apply(a, arguments);
	        };var c = Array.prototype.slice.call(arguments, 1);return function () {
	          var e = c.slice(0);e.push.apply(e, arguments);return d.apply(a, e);
	        };
	      });a.a.f = new function () {
	        function a(b, k) {
	          var h = b[c];if (!h || "null" === h || !e[h]) {
	            if (!k) return p;h = b[c] = "ko" + d++;e[h] = {};
	          }return e[h];
	        }var d = 0,
	            c = "__ko__" + new Date().getTime(),
	            e = {};return { get: function get(c, d) {
	            var e = a(c, !1);return e === p ? p : e[d];
	          }, set: function set(c, d, e) {
	            if (e !== p || a(c, !1) !== p) a(c, !0)[d] = e;
	          }, clear: function clear(a) {
	            var b = a[c];return b ? (delete e[b], a[c] = null, !0) : !1;
	          }, I: function I() {
	            return d++ + c;
	          } };
	      }();a.b("utils.domData", a.a.f);a.b("utils.domData.clear", a.a.f.clear);
	      a.a.C = new function () {
	        function b(b, d) {
	          var e = a.a.f.get(b, c);e === p && d && (e = [], a.a.f.set(b, c, e));return e;
	        }function d(c) {
	          var e = b(c, !1);if (e) for (var e = e.slice(0), l = 0; l < e.length; l++) {
	            e[l](c);
	          }a.a.f.clear(c);a.a.C.cleanExternalData(c);if (f[c.nodeType]) for (e = c.firstChild; c = e;) {
	            e = c.nextSibling, 8 === c.nodeType && d(c);
	          }
	        }var c = a.a.f.I(),
	            e = { 1: !0, 8: !0, 9: !0 },
	            f = { 1: !0, 9: !0 };return { fa: function fa(a, c) {
	            if ("function" != typeof c) throw Error("Callback must be a function");b(a, !0).push(c);
	          }, Pb: function Pb(d, e) {
	            var f = b(d, !1);f && (a.a.ya(f, e), 0 == f.length && a.a.f.set(d, c, p));
	          }, S: function S(b) {
	            if (e[b.nodeType] && (d(b), f[b.nodeType])) {
	              var c = [];a.a.ia(c, b.getElementsByTagName("*"));for (var l = 0, g = c.length; l < g; l++) {
	                d(c[l]);
	              }
	            }return b;
	          }, removeNode: function removeNode(b) {
	            a.S(b);b.parentNode && b.parentNode.removeChild(b);
	          }, cleanExternalData: function cleanExternalData(a) {
	            u && "function" == typeof u.cleanData && u.cleanData([a]);
	          } };
	      }();a.S = a.a.C.S;a.removeNode = a.a.C.removeNode;a.b("cleanNode", a.S);a.b("removeNode", a.removeNode);a.b("utils.domNodeDisposal", a.a.C);a.b("utils.domNodeDisposal.addDisposeCallback", a.a.C.fa);a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.C.Pb);(function () {
	        a.a.ca = function (b, d) {
	          var c;if (u) {
	            if (u.parseHTML) c = u.parseHTML(b, d) || [];else {
	              if ((c = u.clean([b], d)) && c[0]) {
	                for (var e = c[0]; e.parentNode && 11 !== e.parentNode.nodeType;) {
	                  e = e.parentNode;
	                }e.parentNode && e.parentNode.removeChild(e);
	              }
	            }
	          } else {
	            (e = d) || (e = w);c = e.parentWindow || e.defaultView || y;var f = a.a.ib(b).toLowerCase(),
	                e = e.createElement("div"),
	                f = f.match(/^<(thead|tbody|tfoot)/) && [1, "<table>", "</table>"] || !f.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!f.indexOf("<td") || !f.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || [0, "", ""],
	                k = "ignored<div>" + f[1] + b + f[2] + "</div>";for ("function" == typeof c.innerShiv ? e.appendChild(c.innerShiv(k)) : e.innerHTML = k; f[0]--;) {
	              e = e.lastChild;
	            }c = a.a.O(e.lastChild.childNodes);
	          }return c;
	        };a.a.gb = function (b, d) {
	          a.a.Ra(b);d = a.a.c(d);if (null !== d && d !== p) if ("string" != typeof d && (d = d.toString()), u) u(b).html(d);else for (var c = a.a.ca(d, b.ownerDocument), e = 0; e < c.length; e++) {
	            b.appendChild(c[e]);
	          }
	        };
	      })();
	      a.b("utils.parseHtmlFragment", a.a.ca);a.b("utils.setHtml", a.a.gb);a.H = function () {
	        function b(c, d) {
	          if (c) if (8 == c.nodeType) {
	            var f = a.H.Lb(c.nodeValue);null != f && d.push({ ic: c, wc: f });
	          } else if (1 == c.nodeType) for (var f = 0, k = c.childNodes, h = k.length; f < h; f++) {
	            b(k[f], d);
	          }
	        }var d = {};return { $a: function $a(a) {
	            if ("function" != typeof a) throw Error("You can only pass a function to ko.memoization.memoize()");var b = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
	            d[b] = a;return "\x3c!--[ko_memo:" + b + "]--\x3e";
	          }, Wb: function Wb(a, b) {
	            var f = d[a];if (f === p) throw Error("Couldn't find any memo with ID " + a + ". Perhaps it's already been unmemoized.");try {
	              return f.apply(null, b || []), !0;
	            } finally {
	              delete d[a];
	            }
	          }, Xb: function Xb(c, d) {
	            var f = [];b(c, f);for (var k = 0, h = f.length; k < h; k++) {
	              var l = f[k].ic,
	                  g = [l];d && a.a.ia(g, d);a.H.Wb(f[k].wc, g);l.nodeValue = "";l.parentNode && l.parentNode.removeChild(l);
	            }
	          }, Lb: function Lb(a) {
	            return (a = a.match(/^\[ko_memo\:(.*?)\]$/)) ? a[1] : null;
	          } };
	      }();a.b("memoization", a.H);
	      a.b("memoization.memoize", a.H.$a);a.b("memoization.unmemoize", a.H.Wb);a.b("memoization.parseMemoText", a.H.Lb);a.b("memoization.unmemoizeDomNodeAndDescendants", a.H.Xb);a.Sa = { throttle: function throttle(b, d) {
	          b.throttleEvaluation = d;var c = null;return a.j({ read: b, write: function write(a) {
	              clearTimeout(c);c = setTimeout(function () {
	                b(a);
	              }, d);
	            } });
	        }, rateLimit: function rateLimit(a, d) {
	          var c, e, f;"number" == typeof d ? c = d : (c = d.timeout, e = d.method);f = "notifyWhenChangesStop" == e ? S : R;a.Za(function (a) {
	            return f(a, c);
	          });
	        }, notify: function notify(a, d) {
	          a.equalityComparer = "always" == d ? null : J;
	        } };var Q = { undefined: 1, "boolean": 1, number: 1, string: 1 };a.b("extenders", a.Sa);a.Ub = function (b, d, c) {
	        this.da = b;this.La = d;this.hc = c;this.Gb = !1;a.D(this, "dispose", this.p);
	      };a.Ub.prototype.p = function () {
	        this.Gb = !0;this.hc();
	      };a.Q = function () {
	        a.a.Ga(this, a.Q.fn);this.G = {};this.rb = 1;
	      };var z = { U: function U(b, d, c) {
	          var e = this;c = c || "change";var f = new a.Ub(e, d ? b.bind(d) : b, function () {
	            a.a.ya(e.G[c], f);e.ua && e.ua(c);
	          });e.ja && e.ja(c);e.G[c] || (e.G[c] = []);e.G[c].push(f);return f;
	        }, notifySubscribers: function notifySubscribers(b, d) {
	          d = d || "change";"change" === d && this.Yb();if (this.Ba(d)) try {
	            a.k.xb();for (var c = this.G[d].slice(0), e = 0, f; f = c[e]; ++e) {
	              f.Gb || f.La(b);
	            }
	          } finally {
	            a.k.end();
	          }
	        }, Aa: function Aa() {
	          return this.rb;
	        }, pc: function pc(a) {
	          return this.Aa() !== a;
	        }, Yb: function Yb() {
	          ++this.rb;
	        }, Za: function Za(b) {
	          var d = this,
	              c = a.F(d),
	              e,
	              f,
	              k;d.ta || (d.ta = d.notifySubscribers, d.notifySubscribers = function (a, b) {
	            b && "change" !== b ? "beforeChange" === b ? d.pb(a) : d.ta(a, b) : d.qb(a);
	          });var h = b(function () {
	            c && k === d && (k = d());e = !1;d.Wa(f, k) && d.ta(f = k);
	          });d.qb = function (a) {
	            e = !0;k = a;
	            h();
	          };d.pb = function (a) {
	            e || (f = a, d.ta(a, "beforeChange"));
	          };
	        }, Ba: function Ba(a) {
	          return this.G[a] && this.G[a].length;
	        }, nc: function nc(b) {
	          if (b) return this.G[b] && this.G[b].length || 0;var d = 0;a.a.A(this.G, function (a, b) {
	            d += b.length;
	          });return d;
	        }, Wa: function Wa(a, d) {
	          return !this.equalityComparer || !this.equalityComparer(a, d);
	        }, extend: function extend(b) {
	          var d = this;b && a.a.A(b, function (b, e) {
	            var f = a.Sa[b];"function" == typeof f && (d = f(d, e) || d);
	          });return d;
	        } };a.D(z, "subscribe", z.U);a.D(z, "extend", z.extend);a.D(z, "getSubscriptionsCount", z.nc);
	      a.a.za && a.a.Fa(z, Function.prototype);a.Q.fn = z;a.Hb = function (a) {
	        return null != a && "function" == typeof a.U && "function" == typeof a.notifySubscribers;
	      };a.b("subscribable", a.Q);a.b("isSubscribable", a.Hb);a.Z = a.k = function () {
	        function b(a) {
	          c.push(e);e = a;
	        }function d() {
	          e = c.pop();
	        }var c = [],
	            e,
	            f = 0;return { xb: b, end: d, Ob: function Ob(b) {
	            if (e) {
	              if (!a.Hb(b)) throw Error("Only subscribable things can act as dependencies");e.La(b, b.ac || (b.ac = ++f));
	            }
	          }, u: function u(a, c, e) {
	            try {
	              return b(), a.apply(c, e || []);
	            } finally {
	              d();
	            }
	          }, oa: function oa() {
	            if (e) return e.w.oa();
	          },
	          Ca: function Ca() {
	            if (e) return e.Ca;
	          } };
	      }();a.b("computedContext", a.Z);a.b("computedContext.getDependenciesCount", a.Z.oa);a.b("computedContext.isInitial", a.Z.Ca);a.b("computedContext.isSleeping", a.Z.Jc);a.b("ignoreDependencies", a.Gc = a.k.u);a.r = function (b) {
	        function d() {
	          if (0 < arguments.length) return d.Wa(c, arguments[0]) && (d.X(), c = arguments[0], d.W()), this;a.k.Ob(d);return c;
	        }var c = b;a.Q.call(d);a.a.Ga(d, a.r.fn);d.B = function () {
	          return c;
	        };d.W = function () {
	          d.notifySubscribers(c);
	        };d.X = function () {
	          d.notifySubscribers(c, "beforeChange");
	        };a.D(d, "peek", d.B);a.D(d, "valueHasMutated", d.W);a.D(d, "valueWillMutate", d.X);return d;
	      };a.r.fn = { equalityComparer: J };var H = a.r.Ac = "__ko_proto__";a.r.fn[H] = a.r;a.a.za && a.a.Fa(a.r.fn, a.Q.fn);a.Ta = function (b, d) {
	        return null === b || b === p || b[H] === p ? !1 : b[H] === d ? !0 : a.Ta(b[H], d);
	      };a.F = function (b) {
	        return a.Ta(b, a.r);
	      };a.Da = function (b) {
	        return "function" == typeof b && b[H] === a.r || "function" == typeof b && b[H] === a.j && b.qc ? !0 : !1;
	      };a.b("observable", a.r);a.b("isObservable", a.F);a.b("isWriteableObservable", a.Da);
	      a.b("isWritableObservable", a.Da);a.ba = function (b) {
	        b = b || [];if ("object" != (typeof b === "undefined" ? "undefined" : _typeof(b)) || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b = a.r(b);a.a.Ga(b, a.ba.fn);return b.extend({ trackArrayChanges: !0 });
	      };a.ba.fn = { remove: function remove(b) {
	          for (var d = this.B(), c = [], e = "function" != typeof b || a.F(b) ? function (a) {
	            return a === b;
	          } : b, f = 0; f < d.length; f++) {
	            var k = d[f];e(k) && (0 === c.length && this.X(), c.push(k), d.splice(f, 1), f--);
	          }c.length && this.W();return c;
	        },
	        removeAll: function removeAll(b) {
	          if (b === p) {
	            var d = this.B(),
	                c = d.slice(0);this.X();d.splice(0, d.length);this.W();return c;
	          }return b ? this.remove(function (c) {
	            return 0 <= a.a.m(b, c);
	          }) : [];
	        }, destroy: function destroy(b) {
	          var d = this.B(),
	              c = "function" != typeof b || a.F(b) ? function (a) {
	            return a === b;
	          } : b;this.X();for (var e = d.length - 1; 0 <= e; e--) {
	            c(d[e]) && (d[e]._destroy = !0);
	          }this.W();
	        }, destroyAll: function destroyAll(b) {
	          return b === p ? this.destroy(function () {
	            return !0;
	          }) : b ? this.destroy(function (d) {
	            return 0 <= a.a.m(b, d);
	          }) : [];
	        }, indexOf: function indexOf(b) {
	          var d = this();return a.a.m(d, b);
	        }, replace: function replace(a, d) {
	          var c = this.indexOf(a);0 <= c && (this.X(), this.B()[c] = d, this.W());
	        } };a.a.o("pop push reverse shift sort splice unshift".split(" "), function (b) {
	        a.ba.fn[b] = function () {
	          var a = this.B();this.X();this.yb(a, b, arguments);a = a[b].apply(a, arguments);this.W();return a;
	        };
	      });a.a.o(["slice"], function (b) {
	        a.ba.fn[b] = function () {
	          var a = this();return a[b].apply(a, arguments);
	        };
	      });a.a.za && a.a.Fa(a.ba.fn, a.r.fn);a.b("observableArray", a.ba);a.Sa.trackArrayChanges = function (b) {
	        function d() {
	          if (!c) {
	            c = !0;var g = b.notifySubscribers;b.notifySubscribers = function (a, b) {
	              b && "change" !== b || ++k;return g.apply(this, arguments);
	            };var d = [].concat(b.B() || []);e = null;f = b.U(function (c) {
	              c = [].concat(c || []);if (b.Ba("arrayChange")) {
	                var g;if (!e || 1 < k) e = a.a.Ma(d, c, { sparse: !0 });g = e;
	              }d = c;e = null;k = 0;g && g.length && b.notifySubscribers(g, "arrayChange");
	            });
	          }
	        }if (!b.yb) {
	          var c = !1,
	              e = null,
	              f,
	              k = 0,
	              h = b.ja,
	              l = b.ua;b.ja = function (a) {
	            h && h.call(b, a);"arrayChange" === a && d();
	          };b.ua = function (a) {
	            l && l.call(b, a);"arrayChange" !== a || b.Ba("arrayChange") || (f.p(), c = !1);
	          };
	          b.yb = function (b, d, f) {
	            function l(a, b, c) {
	              return h[h.length] = { status: a, value: b, index: c };
	            }if (c && !k) {
	              var h = [],
	                  r = b.length,
	                  v = f.length,
	                  t = 0;switch (d) {case "push":
	                  t = r;case "unshift":
	                  for (d = 0; d < v; d++) {
	                    l("added", f[d], t + d);
	                  }break;case "pop":
	                  t = r - 1;case "shift":
	                  r && l("deleted", b[t], t);break;case "splice":
	                  d = Math.min(Math.max(0, 0 > f[0] ? r + f[0] : f[0]), r);for (var r = 1 === v ? r : Math.min(d + (f[1] || 0), r), v = d + v - 2, t = Math.max(r, v), G = [], A = [], p = 2; d < t; ++d, ++p) {
	                    d < r && A.push(l("deleted", b[d], d)), d < v && G.push(l("added", f[p], d));
	                  }a.a.Cb(A, G);break;
	                default:
	                  return;}e = h;
	            }
	          };
	        }
	      };a.w = a.j = function (b, d, c) {
	        function e(a, b, c) {
	          if (I && b === g) throw Error("A 'pure' computed must not be called recursively");B[a] = c;c.sa = F++;c.ea = b.Aa();
	        }function f() {
	          var a, b;for (a in B) {
	            if (B.hasOwnProperty(a) && (b = B[a], b.da.pc(b.ea))) return !0;
	          }
	        }function k() {
	          !s && B && a.a.A(B, function (a, b) {
	            b.p && b.p();
	          });B = null;F = 0;G = !0;s = r = !1;
	        }function h() {
	          var a = g.throttleEvaluation;a && 0 <= a ? (clearTimeout(z), z = setTimeout(function () {
	            l(!0);
	          }, a)) : g.nb ? g.nb() : l(!0);
	        }function l(b) {
	          if (!v && !G) {
	            if (y && y()) {
	              if (!t) {
	                _w();return;
	              }
	            } else t = !1;v = !0;try {
	              var c = B,
	                  m = F,
	                  f = I ? p : !F;a.k.xb({ La: function La(a, b) {
	                  G || (m && c[b] ? (e(b, a, c[b]), delete c[b], --m) : B[b] || e(b, a, s ? { da: a } : a.U(h)));
	                }, w: g, Ca: f });B = {};F = 0;try {
	                var l = d ? A.call(d) : A();
	              } finally {
	                a.k.end(), m && !s && a.a.A(c, function (a, b) {
	                  b.p && b.p();
	                }), r = !1;
	              }g.Wa(n, l) && (s || q(n, "beforeChange"), n = l, s ? g.Yb() : b && q(n));f && q(n, "awake");
	            } finally {
	              v = !1;
	            }F || _w();
	          }
	        }function g() {
	          if (0 < arguments.length) {
	            if ("function" === typeof C) C.apply(d, arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
	            return this;
	          }a.k.Ob(g);(r || s && f()) && l();return n;
	        }function m() {
	          (r && !F || s && f()) && l();return n;
	        }function x() {
	          return r || 0 < F;
	        }function q(a, b) {
	          g.notifySubscribers(a, b);
	        }var n,
	            r = !0,
	            v = !1,
	            t = !1,
	            G = !1,
	            A = b,
	            I = !1,
	            s = !1;A && "object" == (typeof A === "undefined" ? "undefined" : _typeof(A)) ? (c = A, A = c.read) : (c = c || {}, A || (A = c.read));if ("function" != typeof A) throw Error("Pass a function that returns the value of the ko.computed");var C = c.write,
	            D = c.disposeWhenNodeIsRemoved || c.q || null,
	            u = c.disposeWhen || c.Pa,
	            y = u,
	            _w = k,
	            B = {},
	            F = 0,
	            z = null;d || (d = c.owner);a.Q.call(g);a.a.Ga(g, a.j.fn);
	        g.B = m;g.oa = function () {
	          return F;
	        };g.qc = "function" === typeof C;g.p = function () {
	          _w();
	        };g.$ = x;var T = g.Za;g.Za = function (a) {
	          T.call(g, a);g.nb = function () {
	            g.pb(n);r = !0;g.qb(g);
	          };
	        };c.pure ? (s = I = !0, g.ja = function (b) {
	          if (!G && s && "change" == b) {
	            s = !1;if (r || f()) B = null, F = 0, r = !0, l();else {
	              var c = [];a.a.A(B, function (a, b) {
	                c[b.sa] = a;
	              });a.a.o(c, function (a, b) {
	                var c = B[a],
	                    g = c.da.U(h);g.sa = b;g.ea = c.ea;B[a] = g;
	              });
	            }G || q(n, "awake");
	          }
	        }, g.ua = function (b) {
	          G || "change" != b || g.Ba("change") || (a.a.A(B, function (a, b) {
	            b.p && (B[a] = { da: b.da, sa: b.sa, ea: b.ea }, b.p());
	          }), s = !0, q(p, "asleep"));
	        }, g.bc = g.Aa, g.Aa = function () {
	          s && (r || f()) && l();return g.bc();
	        }) : c.deferEvaluation && (g.ja = function (a) {
	          "change" != a && "beforeChange" != a || m();
	        });a.D(g, "peek", g.B);a.D(g, "dispose", g.p);a.D(g, "isActive", g.$);a.D(g, "getDependenciesCount", g.oa);D && (t = !0, D.nodeType && (y = function y() {
	          return !a.a.Qa(D) || u && u();
	        }));s || c.deferEvaluation || l();D && x() && D.nodeType && (_w = function w() {
	          a.a.C.Pb(D, _w);k();
	        }, a.a.C.fa(D, _w));return g;
	      };a.sc = function (b) {
	        return a.Ta(b, a.j);
	      };z = a.r.Ac;a.j[z] = a.r;a.j.fn = { equalityComparer: J };
	      a.j.fn[z] = a.j;a.a.za && a.a.Fa(a.j.fn, a.Q.fn);a.b("dependentObservable", a.j);a.b("computed", a.j);a.b("isComputed", a.sc);a.Nb = function (b, d) {
	        if ("function" === typeof b) return a.w(b, d, { pure: !0 });b = a.a.extend({}, b);b.pure = !0;return a.w(b, d);
	      };a.b("pureComputed", a.Nb);(function () {
	        function b(a, f, k) {
	          k = k || new c();a = f(a);if ("object" != (typeof a === "undefined" ? "undefined" : _typeof(a)) || null === a || a === p || a instanceof Date || a instanceof String || a instanceof Number || a instanceof Boolean) return a;var h = a instanceof Array ? [] : {};k.save(a, h);d(a, function (c) {
	            var g = f(a[c]);switch (typeof g === "undefined" ? "undefined" : _typeof(g)) {case "boolean":case "number":case "string":case "function":
	                h[c] = g;break;case "object":case "undefined":
	                var d = k.get(g);h[c] = d !== p ? d : b(g, f, k);}
	          });return h;
	        }function d(a, b) {
	          if (a instanceof Array) {
	            for (var c = 0; c < a.length; c++) {
	              b(c);
	            }"function" == typeof a.toJSON && b("toJSON");
	          } else for (c in a) {
	            b(c);
	          }
	        }function c() {
	          this.keys = [];this.mb = [];
	        }a.Vb = function (c) {
	          if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c, function (b) {
	            for (var c = 0; a.F(b) && 10 > c; c++) {
	              b = b();
	            }return b;
	          });
	        };a.toJSON = function (b, c, d) {
	          b = a.Vb(b);return a.a.jb(b, c, d);
	        };c.prototype = { save: function save(b, c) {
	            var d = a.a.m(this.keys, b);0 <= d ? this.mb[d] = c : (this.keys.push(b), this.mb.push(c));
	          }, get: function get(b) {
	            b = a.a.m(this.keys, b);return 0 <= b ? this.mb[b] : p;
	          } };
	      })();a.b("toJS", a.Vb);a.b("toJSON", a.toJSON);(function () {
	        a.i = { s: function s(b) {
	            switch (a.a.v(b)) {case "option":
	                return !0 === b.__ko__hasDomDataOptionValue__ ? a.a.f.get(b, a.d.options.ab) : 7 >= a.a.M ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;case "select":
	                return 0 <= b.selectedIndex ? a.i.s(b.options[b.selectedIndex]) : p;default:
	                return b.value;}
	          }, Y: function Y(b, d, c) {
	            switch (a.a.v(b)) {case "option":
	                switch (typeof d === "undefined" ? "undefined" : _typeof(d)) {case "string":
	                    a.a.f.set(b, a.d.options.ab, p);"__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__;b.value = d;break;default:
	                    a.a.f.set(b, a.d.options.ab, d), b.__ko__hasDomDataOptionValue__ = !0, b.value = "number" === typeof d ? d : "";}break;case "select":
	                if ("" === d || null === d) d = p;for (var e = -1, f = 0, k = b.options.length, h; f < k; ++f) {
	                  if (h = a.i.s(b.options[f]), h == d || "" == h && d === p) {
	                    e = f;break;
	                  }
	                }if (c || 0 <= e || d === p && 1 < b.size) b.selectedIndex = e;break;default:
	                if (null === d || d === p) d = "";b.value = d;}
	          } };
	      })();a.b("selectExtensions", a.i);a.b("selectExtensions.readValue", a.i.s);a.b("selectExtensions.writeValue", a.i.Y);a.h = function () {
	        function b(b) {
	          b = a.a.ib(b);123 === b.charCodeAt(0) && (b = b.slice(1, -1));var c = [],
	              d = b.match(e),
	              x,
	              h = [],
	              n = 0;if (d) {
	            d.push(",");for (var r = 0, v; v = d[r]; ++r) {
	              var t = v.charCodeAt(0);if (44 === t) {
	                if (0 >= n) {
	                  c.push(x && h.length ? { key: x,
	                    value: h.join("") } : { unknown: x || h.join("") });x = n = 0;h = [];continue;
	                }
	              } else if (58 === t) {
	                if (!n && !x && 1 === h.length) {
	                  x = h.pop();continue;
	                }
	              } else 47 === t && r && 1 < v.length ? (t = d[r - 1].match(f)) && !k[t[0]] && (b = b.substr(b.indexOf(v) + 1), d = b.match(e), d.push(","), r = -1, v = "/") : 40 === t || 123 === t || 91 === t ? ++n : 41 === t || 125 === t || 93 === t ? --n : x || h.length || 34 !== t && 39 !== t || (v = v.slice(1, -1));h.push(v);
	            }
	          }return c;
	        }var d = ["true", "false", "null", "undefined"],
	            c = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,
	            e = RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]", "g"),
	            f = /[\])"'A-Za-z0-9_$]+$/,
	            k = { "in": 1, "return": 1, "typeof": 1 },
	            h = {};return { ka: [], V: h, bb: b, Ea: function Ea(e, g) {
	            function m(b, g) {
	              var e;if (!r) {
	                var l = a.getBindingHandler(b);if (l && l.preprocess && !(g = l.preprocess(g, b, m))) return;if (l = h[b]) e = g, 0 <= a.a.m(d, e) ? e = !1 : (l = e.match(c), e = null === l ? !1 : l[1] ? "Object(" + l[1] + ")" + l[2] : e), l = e;l && k.push("'" + b + "':function(_z){" + e + "=_z}");
	              }n && (g = "function(){return " + g + " }");f.push("'" + b + "':" + g);
	            }g = g || {};var f = [],
	                k = [],
	                n = g.valueAccessors,
	                r = g.bindingParams,
	                v = "string" === typeof e ? b(e) : e;
	            a.a.o(v, function (a) {
	              m(a.key || a.unknown, a.value);
	            });k.length && m("_ko_property_writers", "{" + k.join(",") + " }");return f.join(",");
	          }, vc: function vc(a, b) {
	            for (var c = 0; c < a.length; c++) {
	              if (a[c].key == b) return !0;
	            }return !1;
	          }, ra: function ra(b, c, d, e, f) {
	            if (b && a.F(b)) !a.Da(b) || f && b.B() === e || b(e);else if ((b = c.get("_ko_property_writers")) && b[d]) b[d](e);
	          } };
	      }();a.b("expressionRewriting", a.h);a.b("expressionRewriting.bindingRewriteValidators", a.h.ka);a.b("expressionRewriting.parseObjectLiteral", a.h.bb);a.b("expressionRewriting.preProcessBindings", a.h.Ea);a.b("expressionRewriting._twoWayBindings", a.h.V);a.b("jsonExpressionRewriting", a.h);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.h.Ea);(function () {
	        function b(a) {
	          return 8 == a.nodeType && k.test(f ? a.text : a.nodeValue);
	        }function d(a) {
	          return 8 == a.nodeType && h.test(f ? a.text : a.nodeValue);
	        }function c(a, c) {
	          for (var e = a, f = 1, l = []; e = e.nextSibling;) {
	            if (d(e) && (f--, 0 === f)) return l;l.push(e);b(e) && f++;
	          }if (!c) throw Error("Cannot find closing comment tag to match: " + a.nodeValue);return null;
	        }function e(a, b) {
	          var d = c(a, b);return d ? 0 < d.length ? d[d.length - 1].nextSibling : a.nextSibling : null;
	        }var f = w && "\x3c!--test--\x3e" === w.createComment("test").text,
	            k = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/,
	            h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/,
	            l = { ul: !0, ol: !0 };a.e = { R: {}, childNodes: function childNodes(a) {
	            return b(a) ? c(a) : a.childNodes;
	          }, ma: function ma(c) {
	            if (b(c)) {
	              c = a.e.childNodes(c);for (var d = 0, e = c.length; d < e; d++) {
	                a.removeNode(c[d]);
	              }
	            } else a.a.Ra(c);
	          }, T: function T(c, d) {
	            if (b(c)) {
	              a.e.ma(c);for (var e = c.nextSibling, f = 0, l = d.length; f < l; f++) {
	                e.parentNode.insertBefore(d[f], e);
	              }
	            } else a.a.T(c, d);
	          }, Mb: function Mb(a, c) {
	            b(a) ? a.parentNode.insertBefore(c, a.nextSibling) : a.firstChild ? a.insertBefore(c, a.firstChild) : a.appendChild(c);
	          }, Fb: function Fb(c, d, e) {
	            e ? b(c) ? c.parentNode.insertBefore(d, e.nextSibling) : e.nextSibling ? c.insertBefore(d, e.nextSibling) : c.appendChild(d) : a.e.Mb(c, d);
	          }, firstChild: function firstChild(a) {
	            return b(a) ? !a.nextSibling || d(a.nextSibling) ? null : a.nextSibling : a.firstChild;
	          }, nextSibling: function nextSibling(a) {
	            b(a) && (a = e(a));return a.nextSibling && d(a.nextSibling) ? null : a.nextSibling;
	          }, oc: b, Fc: function Fc(a) {
	            return (a = (f ? a.text : a.nodeValue).match(k)) ? a[1] : null;
	          }, Kb: function Kb(c) {
	            if (l[a.a.v(c)]) {
	              var m = c.firstChild;if (m) {
	                do {
	                  if (1 === m.nodeType) {
	                    var f;f = m.firstChild;var h = null;if (f) {
	                      do {
	                        if (h) h.push(f);else if (b(f)) {
	                          var k = e(f, !0);k ? f = k : h = [f];
	                        } else d(f) && (h = [f]);
	                      } while (f = f.nextSibling);
	                    }if (f = h) for (h = m.nextSibling, k = 0; k < f.length; k++) {
	                      h ? c.insertBefore(f[k], h) : c.appendChild(f[k]);
	                    }
	                  }
	                } while (m = m.nextSibling);
	              }
	            }
	          } };
	      })();a.b("virtualElements", a.e);a.b("virtualElements.allowedBindings", a.e.R);a.b("virtualElements.emptyNode", a.e.ma);a.b("virtualElements.insertAfter", a.e.Fb);a.b("virtualElements.prepend", a.e.Mb);a.b("virtualElements.setDomNodeChildren", a.e.T);(function () {
	        a.L = function () {
	          this.ec = {};
	        };a.a.extend(a.L.prototype, { nodeHasBindings: function nodeHasBindings(b) {
	            switch (b.nodeType) {case 1:
	                return null != b.getAttribute("data-bind") || a.g.getComponentNameForNode(b);case 8:
	                return a.e.oc(b);default:
	                return !1;}
	          }, getBindings: function getBindings(b, d) {
	            var c = this.getBindingsString(b, d),
	                c = c ? this.parseBindingsString(c, d, b) : null;return a.g.sb(c, b, d, !1);
	          }, getBindingAccessors: function getBindingAccessors(b, d) {
	            var c = this.getBindingsString(b, d),
	                c = c ? this.parseBindingsString(c, d, b, { valueAccessors: !0 }) : null;return a.g.sb(c, b, d, !0);
	          }, getBindingsString: function getBindingsString(b) {
	            switch (b.nodeType) {case 1:
	                return b.getAttribute("data-bind");case 8:
	                return a.e.Fc(b);default:
	                return null;}
	          }, parseBindingsString: function parseBindingsString(b, d, c, e) {
	            try {
	              var f = this.ec,
	                  k = b + (e && e.valueAccessors || ""),
	                  h;if (!(h = f[k])) {
	                var l,
	                    g = "with($context){with($data||{}){return{" + a.h.Ea(b, e) + "}}}";l = new Function("$context", "$element", g);h = f[k] = l;
	              }return h(d, c);
	            } catch (m) {
	              throw m.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + m.message, m;
	            }
	          } });a.L.instance = new a.L();
	      })();a.b("bindingProvider", a.L);(function () {
	        function b(a) {
	          return function () {
	            return a;
	          };
	        }function d(a) {
	          return a();
	        }function c(b) {
	          return a.a.pa(a.k.u(b), function (a, c) {
	            return function () {
	              return b()[c];
	            };
	          });
	        }function e(d, g, e) {
	          return "function" === typeof d ? c(d.bind(null, g, e)) : a.a.pa(d, b);
	        }function f(a, b) {
	          return c(this.getBindings.bind(this, a, b));
	        }function k(b, c, d) {
	          var g,
	              e = a.e.firstChild(c),
	              f = a.L.instance,
	              m = f.preprocessNode;if (m) {
	            for (; g = e;) {
	              e = a.e.nextSibling(g), m.call(f, g);
	            }e = a.e.firstChild(c);
	          }for (; g = e;) {
	            e = a.e.nextSibling(g), h(b, g, d);
	          }
	        }function h(b, c, d) {
	          var e = !0,
	              f = 1 === c.nodeType;f && a.e.Kb(c);if (f && d || a.L.instance.nodeHasBindings(c)) e = g(c, null, b, d).shouldBindDescendants;e && !x[a.a.v(c)] && k(b, c, !f);
	        }function l(b) {
	          var c = [],
	              d = {},
	              g = [];a.a.A(b, function I(e) {
	            if (!d[e]) {
	              var f = a.getBindingHandler(e);f && (f.after && (g.push(e), a.a.o(f.after, function (c) {
	                if (b[c]) {
	                  if (-1 !== a.a.m(g, c)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + g.join(", "));I(c);
	                }
	              }), g.length--), c.push({ key: e, Eb: f }));d[e] = !0;
	            }
	          });return c;
	        }function g(b, c, g, e) {
	          var m = a.a.f.get(b, q);if (!c) {
	            if (m) throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b, q, !0);
	          }!m && e && a.Tb(b, g);var h;if (c && "function" !== typeof c) h = c;else {
	            var k = a.L.instance,
	                x = k.getBindingAccessors || f,
	                n = a.j(function () {
	              (h = c ? c(g, b) : x.call(k, b, g)) && g.K && g.K();return h;
	            }, null, { q: b });
	            h && n.$() || (n = null);
	          }var u;if (h) {
	            var w = n ? function (a) {
	              return function () {
	                return d(n()[a]);
	              };
	            } : function (a) {
	              return h[a];
	            },
	                y = function y() {
	              return a.a.pa(n ? n() : h, d);
	            };y.get = function (a) {
	              return h[a] && d(w(a));
	            };y.has = function (a) {
	              return a in h;
	            };e = l(h);a.a.o(e, function (c) {
	              var d = c.Eb.init,
	                  e = c.Eb.update,
	                  f = c.key;if (8 === b.nodeType && !a.e.R[f]) throw Error("The binding '" + f + "' cannot be used with virtual elements");try {
	                "function" == typeof d && a.k.u(function () {
	                  var a = d(b, w(f), y, g.$data, g);if (a && a.controlsDescendantBindings) {
	                    if (u !== p) throw Error("Multiple bindings (" + u + " and " + f + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u = f;
	                  }
	                }), "function" == typeof e && a.j(function () {
	                  e(b, w(f), y, g.$data, g);
	                }, null, { q: b });
	              } catch (m) {
	                throw m.message = 'Unable to process binding "' + f + ": " + h[f] + '"\nMessage: ' + m.message, m;
	              }
	            });
	          }return { shouldBindDescendants: u === p };
	        }function m(b) {
	          return b && b instanceof a.N ? b : new a.N(b);
	        }a.d = {};var x = { script: !0, textarea: !0 };a.getBindingHandler = function (b) {
	          return a.d[b];
	        };
	        a.N = function (b, c, d, g) {
	          var e = this,
	              f = "function" == typeof b && !a.F(b),
	              m,
	              l = a.j(function () {
	            var m = f ? b() : b,
	                h = a.a.c(m);c ? (c.K && c.K(), a.a.extend(e, c), l && (e.K = l)) : (e.$parents = [], e.$root = h, e.ko = a);e.$rawData = m;e.$data = h;d && (e[d] = h);g && g(e, c, h);return e.$data;
	          }, null, { Pa: function Pa() {
	              return m && !a.a.tb(m);
	            }, q: !0 });l.$() && (e.K = l, l.equalityComparer = null, m = [], l.Zb = function (b) {
	            m.push(b);a.a.C.fa(b, function (b) {
	              a.a.ya(m, b);m.length || (l.p(), e.K = l = p);
	            });
	          });
	        };a.N.prototype.createChildContext = function (b, c, d) {
	          return new a.N(b, this, c, function (a, b) {
	            a.$parentContext = b;a.$parent = b.$data;a.$parents = (b.$parents || []).slice(0);a.$parents.unshift(a.$parent);d && d(a);
	          });
	        };a.N.prototype.extend = function (b) {
	          return new a.N(this.K || this.$data, this, null, function (c, d) {
	            c.$rawData = d.$rawData;a.a.extend(c, "function" == typeof b ? b() : b);
	          });
	        };var q = a.a.f.I(),
	            n = a.a.f.I();a.Tb = function (b, c) {
	          if (2 == arguments.length) a.a.f.set(b, n, c), c.K && c.K.Zb(b);else return a.a.f.get(b, n);
	        };a.va = function (b, c, d) {
	          1 === b.nodeType && a.e.Kb(b);return g(b, c, m(d), !0);
	        };a.cc = function (b, c, d) {
	          d = m(d);return a.va(b, e(c, d, b), d);
	        };a.Ja = function (a, b) {
	          1 !== b.nodeType && 8 !== b.nodeType || k(m(a), b, !0);
	        };a.ub = function (a, b) {
	          !u && y.jQuery && (u = y.jQuery);if (b && 1 !== b.nodeType && 8 !== b.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b = b || y.document.body;h(m(a), b, !0);
	        };a.Oa = function (b) {
	          switch (b.nodeType) {case 1:case 8:
	              var c = a.Tb(b);if (c) return c;if (b.parentNode) return a.Oa(b.parentNode);}return p;
	        };a.gc = function (b) {
	          return (b = a.Oa(b)) ? b.$data : p;
	        };a.b("bindingHandlers", a.d);a.b("applyBindings", a.ub);a.b("applyBindingsToDescendants", a.Ja);a.b("applyBindingAccessorsToNode", a.va);a.b("applyBindingsToNode", a.cc);a.b("contextFor", a.Oa);a.b("dataFor", a.gc);
	      })();(function (b) {
	        function d(d, e) {
	          var g = f.hasOwnProperty(d) ? f[d] : b,
	              m;g ? g.U(e) : (g = f[d] = new a.Q(), g.U(e), c(d, function (a, b) {
	            var c = !(!b || !b.synchronous);k[d] = { definition: a, tc: c };delete f[d];m || c ? g.notifySubscribers(a) : setTimeout(function () {
	              g.notifySubscribers(a);
	            }, 0);
	          }), m = !0);
	        }function c(a, b) {
	          e("getConfig", [a], function (c) {
	            c ? e("loadComponent", [a, c], function (a) {
	              b(a, c);
	            }) : b(null, null);
	          });
	        }function e(c, d, g, f) {
	          f || (f = a.g.loaders.slice(0));var k = f.shift();if (k) {
	            var q = k[c];if (q) {
	              var n = !1;if (q.apply(k, d.concat(function (a) {
	                n ? g(null) : null !== a ? g(a) : e(c, d, g, f);
	              })) !== b && (n = !0, !k.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
	            } else e(c, d, g, f);
	          } else g(null);
	        }var f = {},
	            k = {};a.g = { get: function get(c, e) {
	            var g = k.hasOwnProperty(c) ? k[c] : b;g ? g.tc ? a.k.u(function () {
	              e(g.definition);
	            }) : setTimeout(function () {
	              e(g.definition);
	            }, 0) : d(c, e);
	          }, zb: function zb(a) {
	            delete k[a];
	          }, ob: e };a.g.loaders = [];a.b("components", a.g);a.b("components.get", a.g.get);a.b("components.clearCachedDefinition", a.g.zb);
	      })();(function () {
	        function b(b, c, d, e) {
	          function k() {
	            0 === --v && e(h);
	          }var h = {},
	              v = 2,
	              t = d.template;d = d.viewModel;t ? f(c, t, function (c) {
	            a.g.ob("loadTemplate", [b, c], function (a) {
	              h.template = a;k();
	            });
	          }) : k();d ? f(c, d, function (c) {
	            a.g.ob("loadViewModel", [b, c], function (a) {
	              h[l] = a;k();
	            });
	          }) : k();
	        }function d(a, b, c) {
	          if ("function" === typeof b) c(function (a) {
	            return new b(a);
	          });else if ("function" === typeof b[l]) c(b[l]);else if ("instance" in b) {
	            var e = b.instance;c(function () {
	              return e;
	            });
	          } else "viewModel" in b ? d(a, b.viewModel, c) : a("Unknown viewModel value: " + b);
	        }function c(b) {
	          switch (a.a.v(b)) {case "script":
	              return a.a.ca(b.text);case "textarea":
	              return a.a.ca(b.value);case "template":
	              if (e(b.content)) return a.a.la(b.content.childNodes);}return a.a.la(b.childNodes);
	        }function e(a) {
	          return y.DocumentFragment ? a instanceof DocumentFragment : a && 11 === a.nodeType;
	        }function f(a, b, c) {
	          "string" === typeof b.require ? O || y.require ? (O || y.require)([b.require], c) : a("Uses require, but no AMD loader is present") : c(b);
	        }function k(a) {
	          return function (b) {
	            throw Error("Component '" + a + "': " + b);
	          };
	        }var h = {};a.g.register = function (b, c) {
	          if (!c) throw Error("Invalid configuration for " + b);if (a.g.Xa(b)) throw Error("Component " + b + " is already registered");h[b] = c;
	        };a.g.Xa = function (a) {
	          return a in h;
	        };a.g.Ec = function (b) {
	          delete h[b];a.g.zb(b);
	        };a.g.Ab = { getConfig: function getConfig(a, b) {
	            b(h.hasOwnProperty(a) ? h[a] : null);
	          }, loadComponent: function loadComponent(a, c, d) {
	            var e = k(a);f(e, c, function (c) {
	              b(a, e, c, d);
	            });
	          }, loadTemplate: function loadTemplate(b, d, f) {
	            b = k(b);if ("string" === typeof d) f(a.a.ca(d));else if (d instanceof Array) f(d);else if (e(d)) f(a.a.O(d.childNodes));else if (d.element) {
	              if (d = d.element, y.HTMLElement ? d instanceof HTMLElement : d && d.tagName && 1 === d.nodeType) f(c(d));else if ("string" === typeof d) {
	                var l = w.getElementById(d);l ? f(c(l)) : b("Cannot find element with ID " + d);
	              } else b("Unknown element type: " + d);
	            } else b("Unknown template value: " + d);
	          }, loadViewModel: function loadViewModel(a, b, c) {
	            d(k(a), b, c);
	          } };var l = "createViewModel";a.b("components.register", a.g.register);a.b("components.isRegistered", a.g.Xa);a.b("components.unregister", a.g.Ec);a.b("components.defaultLoader", a.g.Ab);a.g.loaders.push(a.g.Ab);a.g.$b = h;
	      })();(function () {
	        function b(b, e) {
	          var f = b.getAttribute("params");if (f) {
	            var f = d.parseBindingsString(f, e, b, { valueAccessors: !0, bindingParams: !0 }),
	                f = a.a.pa(f, function (d) {
	              return a.w(d, null, { q: b });
	            }),
	                k = a.a.pa(f, function (d) {
	              var e = d.B();return d.$() ? a.w({ read: function read() {
	                  return a.a.c(d());
	                },
	                write: a.Da(e) && function (a) {
	                  d()(a);
	                }, q: b }) : e;
	            });k.hasOwnProperty("$raw") || (k.$raw = f);return k;
	          }return { $raw: {} };
	        }a.g.getComponentNameForNode = function (b) {
	          b = a.a.v(b);return a.g.Xa(b) && b;
	        };a.g.sb = function (c, d, f, k) {
	          if (1 === d.nodeType) {
	            var h = a.g.getComponentNameForNode(d);if (h) {
	              c = c || {};if (c.component) throw Error('Cannot use the "component" binding on a custom element matching a component');var l = { name: h, params: b(d, f) };c.component = k ? function () {
	                return l;
	              } : l;
	            }
	          }return c;
	        };var d = new a.L();9 > a.a.M && (a.g.register = function (a) {
	          return function (b) {
	            w.createElement(b);
	            return a.apply(this, arguments);
	          };
	        }(a.g.register), w.createDocumentFragment = function (b) {
	          return function () {
	            var d = b(),
	                f = a.g.$b,
	                k;for (k in f) {
	              f.hasOwnProperty(k) && d.createElement(k);
	            }return d;
	          };
	        }(w.createDocumentFragment));
	      })();(function (b) {
	        function d(b, c, d) {
	          c = c.template;if (!c) throw Error("Component '" + b + "' has no template");b = a.a.la(c);a.e.T(d, b);
	        }function c(a, b, c, d) {
	          var e = a.createViewModel;return e ? e.call(a, d, { element: b, templateNodes: c }) : d;
	        }var e = 0;a.d.component = { init: function init(f, k, h, l, g) {
	            function m() {
	              var a = x && x.dispose;"function" === typeof a && a.call(x);q = null;
	            }var x,
	                q,
	                n = a.a.O(a.e.childNodes(f));a.a.C.fa(f, m);a.w(function () {
	              var l = a.a.c(k()),
	                  h,
	                  t;"string" === typeof l ? h = l : (h = a.a.c(l.name), t = a.a.c(l.params));if (!h) throw Error("No component name specified");var p = q = ++e;a.g.get(h, function (e) {
	                if (q === p) {
	                  m();if (!e) throw Error("Unknown component '" + h + "'");d(h, e, f);var l = c(e, f, n, t);e = g.createChildContext(l, b, function (a) {
	                    a.$component = l;a.$componentTemplateNodes = n;
	                  });x = l;a.Ja(e, f);
	                }
	              });
	            }, null, { q: f });return { controlsDescendantBindings: !0 };
	          } };
	        a.e.R.component = !0;
	      })();var P = { "class": "className", "for": "htmlFor" };a.d.attr = { update: function update(b, d) {
	          var c = a.a.c(d()) || {};a.a.A(c, function (c, d) {
	            d = a.a.c(d);var k = !1 === d || null === d || d === p;k && b.removeAttribute(c);8 >= a.a.M && c in P ? (c = P[c], k ? b.removeAttribute(c) : b[c] = d) : k || b.setAttribute(c, d.toString());"name" === c && a.a.Rb(b, k ? "" : d.toString());
	          });
	        } };(function () {
	        a.d.checked = { after: ["value", "attr"], init: function init(b, d, c) {
	            function e() {
	              var e = b.checked,
	                  f = x ? k() : e;if (!a.Z.Ca() && (!l || e)) {
	                var h = a.k.u(d);g ? m !== f ? (e && (a.a.ga(h, f, !0), a.a.ga(h, m, !1)), m = f) : a.a.ga(h, f, e) : a.h.ra(h, c, "checked", f, !0);
	              }
	            }function f() {
	              var c = a.a.c(d());b.checked = g ? 0 <= a.a.m(c, k()) : h ? c : k() === c;
	            }var k = a.Nb(function () {
	              return c.has("checkedValue") ? a.a.c(c.get("checkedValue")) : c.has("value") ? a.a.c(c.get("value")) : b.value;
	            }),
	                h = "checkbox" == b.type,
	                l = "radio" == b.type;if (h || l) {
	              var g = h && a.a.c(d()) instanceof Array,
	                  m = g ? k() : p,
	                  x = l || g;l && !b.name && a.d.uniqueName.init(b, function () {
	                return !0;
	              });a.w(e, null, { q: b });a.a.n(b, "click", e);a.w(f, null, { q: b });
	            }
	          } };a.h.V.checked = !0;a.d.checkedValue = { update: function update(b, d) {
	            b.value = a.a.c(d());
	          } };
	      })();a.d.css = { update: function update(b, d) {
	          var c = a.a.c(d());null !== c && "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) ? a.a.A(c, function (c, d) {
	            d = a.a.c(d);a.a.Ia(b, c, d);
	          }) : (c = String(c || ""), a.a.Ia(b, b.__ko__cssValue, !1), b.__ko__cssValue = c, a.a.Ia(b, c, !0));
	        } };a.d.enable = { update: function update(b, d) {
	          var c = a.a.c(d());c && b.disabled ? b.removeAttribute("disabled") : c || b.disabled || (b.disabled = !0);
	        } };a.d.disable = { update: function update(b, d) {
	          a.d.enable.update(b, function () {
	            return !a.a.c(d());
	          });
	        } };a.d.event = { init: function init(b, d, c, e, f) {
	          var k = d() || {};a.a.A(k, function (h) {
	            "string" == typeof h && a.a.n(b, h, function (b) {
	              var g,
	                  m = d()[h];if (m) {
	                try {
	                  var k = a.a.O(arguments);e = f.$data;k.unshift(e);g = m.apply(e, k);
	                } finally {
	                  !0 !== g && (b.preventDefault ? b.preventDefault() : b.returnValue = !1);
	                }!1 === c.get(h + "Bubble") && (b.cancelBubble = !0, b.stopPropagation && b.stopPropagation());
	              }
	            });
	          });
	        } };a.d.foreach = { Ib: function Ib(b) {
	          return function () {
	            var d = b(),
	                c = a.a.cb(d);if (!c || "number" == typeof c.length) return { foreach: d, templateEngine: a.P.Va };a.a.c(d);return { foreach: c.data, as: c.as,
	              includeDestroyed: c.includeDestroyed, afterAdd: c.afterAdd, beforeRemove: c.beforeRemove, afterRender: c.afterRender, beforeMove: c.beforeMove, afterMove: c.afterMove, templateEngine: a.P.Va };
	          };
	        }, init: function init(b, d) {
	          return a.d.template.init(b, a.d.foreach.Ib(d));
	        }, update: function update(b, d, c, e, f) {
	          return a.d.template.update(b, a.d.foreach.Ib(d), c, e, f);
	        } };a.h.ka.foreach = !1;a.e.R.foreach = !0;a.d.hasfocus = { init: function init(b, d, c) {
	          function e(e) {
	            b.__ko_hasfocusUpdating = !0;var f = b.ownerDocument;if ("activeElement" in f) {
	              var g;try {
	                g = f.activeElement;
	              } catch (m) {
	                g = f.body;
	              }e = g === b;
	            }f = d();a.h.ra(f, c, "hasfocus", e, !0);b.__ko_hasfocusLastValue = e;b.__ko_hasfocusUpdating = !1;
	          }var f = e.bind(null, !0),
	              k = e.bind(null, !1);a.a.n(b, "focus", f);a.a.n(b, "focusin", f);a.a.n(b, "blur", k);a.a.n(b, "focusout", k);
	        }, update: function update(b, d) {
	          var c = !!a.a.c(d());b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === c || (c ? b.focus() : b.blur(), a.k.u(a.a.qa, null, [b, c ? "focusin" : "focusout"]));
	        } };a.h.V.hasfocus = !0;a.d.hasFocus = a.d.hasfocus;a.h.V.hasFocus = !0;a.d.html = { init: function init() {
	          return { controlsDescendantBindings: !0 };
	        },
	        update: function update(b, d) {
	          a.a.gb(b, d());
	        } };K("if");K("ifnot", !1, !0);K("with", !0, !1, function (a, d) {
	        return a.createChildContext(d);
	      });var L = {};a.d.options = { init: function init(b) {
	          if ("select" !== a.a.v(b)) throw Error("options binding applies only to SELECT elements");for (; 0 < b.length;) {
	            b.remove(0);
	          }return { controlsDescendantBindings: !0 };
	        }, update: function update(b, d, c) {
	          function e() {
	            return a.a.xa(b.options, function (a) {
	              return a.selected;
	            });
	          }function f(a, b, c) {
	            var d = typeof b === "undefined" ? "undefined" : _typeof(b);return "function" == d ? b(a) : "string" == d ? a[b] : c;
	          }function k(d, e) {
	            if (r && m) a.i.Y(b, a.a.c(c.get("value")), !0);else if (n.length) {
	              var g = 0 <= a.a.m(n, a.i.s(e[0]));a.a.Sb(e[0], g);r && !g && a.k.u(a.a.qa, null, [b, "change"]);
	            }
	          }var h = b.multiple,
	              l = 0 != b.length && h ? b.scrollTop : null,
	              g = a.a.c(d()),
	              m = c.get("valueAllowUnset") && c.has("value"),
	              x = c.get("optionsIncludeDestroyed");d = {};var q,
	              n = [];m || (h ? n = a.a.Ka(e(), a.i.s) : 0 <= b.selectedIndex && n.push(a.i.s(b.options[b.selectedIndex])));g && ("undefined" == typeof g.length && (g = [g]), q = a.a.xa(g, function (b) {
	            return x || b === p || null === b || !a.a.c(b._destroy);
	          }), c.has("optionsCaption") && (g = a.a.c(c.get("optionsCaption")), null !== g && g !== p && q.unshift(L)));var r = !1;d.beforeRemove = function (a) {
	            b.removeChild(a);
	          };g = k;c.has("optionsAfterRender") && "function" == typeof c.get("optionsAfterRender") && (g = function g(b, d) {
	            k(0, d);a.k.u(c.get("optionsAfterRender"), null, [d[0], b !== L ? b : p]);
	          });a.a.fb(b, q, function (d, e, g) {
	            g.length && (n = !m && g[0].selected ? [a.i.s(g[0])] : [], r = !0);e = b.ownerDocument.createElement("option");d === L ? (a.a.Ha(e, c.get("optionsCaption")), a.i.Y(e, p)) : (g = f(d, c.get("optionsValue"), d), a.i.Y(e, a.a.c(g)), d = f(d, c.get("optionsText"), g), a.a.Ha(e, d));return [e];
	          }, d, g);a.k.u(function () {
	            m ? a.i.Y(b, a.a.c(c.get("value")), !0) : (h ? n.length && e().length < n.length : n.length && 0 <= b.selectedIndex ? a.i.s(b.options[b.selectedIndex]) !== n[0] : n.length || 0 <= b.selectedIndex) && a.a.qa(b, "change");
	          });a.a.kc(b);l && 20 < Math.abs(l - b.scrollTop) && (b.scrollTop = l);
	        } };a.d.options.ab = a.a.f.I();a.d.selectedOptions = { after: ["options", "foreach"], init: function init(b, d, c) {
	          a.a.n(b, "change", function () {
	            var e = d(),
	                f = [];a.a.o(b.getElementsByTagName("option"), function (b) {
	              b.selected && f.push(a.i.s(b));
	            });a.h.ra(e, c, "selectedOptions", f);
	          });
	        }, update: function update(b, d) {
	          if ("select" != a.a.v(b)) throw Error("values binding applies only to SELECT elements");var c = a.a.c(d());c && "number" == typeof c.length && a.a.o(b.getElementsByTagName("option"), function (b) {
	            var d = 0 <= a.a.m(c, a.i.s(b));a.a.Sb(b, d);
	          });
	        } };a.h.V.selectedOptions = !0;a.d.style = { update: function update(b, d) {
	          var c = a.a.c(d() || {});a.a.A(c, function (c, d) {
	            d = a.a.c(d);if (null === d || d === p || !1 === d) d = "";b.style[c] = d;
	          });
	        } };a.d.submit = { init: function init(b, d, c, e, f) {
	          if ("function" != typeof d()) throw Error("The value for a submit binding must be a function");a.a.n(b, "submit", function (a) {
	            var c,
	                e = d();try {
	              c = e.call(f.$data, b);
	            } finally {
	              !0 !== c && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
	            }
	          });
	        } };a.d.text = { init: function init() {
	          return { controlsDescendantBindings: !0 };
	        }, update: function update(b, d) {
	          a.a.Ha(b, d());
	        } };a.e.R.text = !0;(function () {
	        if (y && y.navigator) var b = function b(a) {
	          if (a) return parseFloat(a[1]);
	        },
	            d = y.opera && y.opera.version && parseInt(y.opera.version()),
	            c = y.navigator.userAgent,
	            e = b(c.match(/^(?:(?!chrome).)*version\/([^ ]*) safari/i)),
	            f = b(c.match(/Firefox\/([^ ]*)/));if (10 > a.a.M) var k = a.a.f.I(),
	            h = a.a.f.I(),
	            l = function l(b) {
	          var c = this.activeElement;(c = c && a.a.f.get(c, h)) && c(b);
	        },
	            g = function g(b, c) {
	          var d = b.ownerDocument;a.a.f.get(d, k) || (a.a.f.set(d, k, !0), a.a.n(d, "selectionchange", l));a.a.f.set(b, h, c);
	        };a.d.textInput = { init: function init(b, c, l) {
	            function h(c, d) {
	              a.a.n(b, c, d);
	            }function k() {
	              var d = a.a.c(c());if (null === d || d === p) d = "";w !== p && d === w ? setTimeout(k, 4) : b.value !== d && (u = d, b.value = d);
	            }function v() {
	              A || (w = b.value, A = setTimeout(t, 4));
	            }function t() {
	              clearTimeout(A);w = A = p;var d = b.value;u !== d && (u = d, a.h.ra(c(), l, "textInput", d));
	            }var u = b.value,
	                A,
	                w;10 > a.a.M ? (h("propertychange", function (a) {
	              "value" === a.propertyName && t();
	            }), 8 == a.a.M && (h("keyup", t), h("keydown", t)), 8 <= a.a.M && (g(b, t), h("dragend", v))) : (h("input", t), 5 > e && "textarea" === a.a.v(b) ? (h("keydown", v), h("paste", v), h("cut", v)) : 11 > d ? h("keydown", v) : 4 > f && (h("DOMAutoComplete", t), h("dragdrop", t), h("drop", t)));h("change", t);a.w(k, null, { q: b });
	          } };a.h.V.textInput = !0;a.d.textinput = { preprocess: function preprocess(a, b, c) {
	            c("textInput", a);
	          } };
	      })();a.d.uniqueName = { init: function init(b, d) {
	          if (d()) {
	            var c = "ko_unique_" + ++a.d.uniqueName.fc;a.a.Rb(b, c);
	          }
	        } };a.d.uniqueName.fc = 0;a.d.value = { after: ["options", "foreach"], init: function init(b, d, c) {
	          if ("input" != b.tagName.toLowerCase() || "checkbox" != b.type && "radio" != b.type) {
	            var e = ["change"],
	                f = c.get("valueUpdate"),
	                k = !1,
	                h = null;f && ("string" == typeof f && (f = [f]), a.a.ia(e, f), e = a.a.wb(e));var l = function l() {
	              h = null;k = !1;var e = d(),
	                  g = a.i.s(b);a.h.ra(e, c, "value", g);
	            };!a.a.M || "input" != b.tagName.toLowerCase() || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.m(e, "propertychange") || (a.a.n(b, "propertychange", function () {
	              k = !0;
	            }), a.a.n(b, "focus", function () {
	              k = !1;
	            }), a.a.n(b, "blur", function () {
	              k && l();
	            }));a.a.o(e, function (c) {
	              var d = l;a.a.Dc(c, "after") && (d = function d() {
	                h = a.i.s(b);setTimeout(l, 0);
	              }, c = c.substring(5));a.a.n(b, c, d);
	            });var g = function g() {
	              var e = a.a.c(d()),
	                  f = a.i.s(b);if (null !== h && e === h) setTimeout(g, 0);else if (e !== f) if ("select" === a.a.v(b)) {
	                var l = c.get("valueAllowUnset"),
	                    f = function f() {
	                  a.i.Y(b, e, l);
	                };f();l || e === a.i.s(b) ? setTimeout(f, 0) : a.k.u(a.a.qa, null, [b, "change"]);
	              } else a.i.Y(b, e);
	            };a.w(g, null, { q: b });
	          } else a.va(b, { checkedValue: d });
	        }, update: function update() {} };a.h.V.value = !0;a.d.visible = { update: function update(b, d) {
	          var c = a.a.c(d()),
	              e = "none" != b.style.display;c && !e ? b.style.display = "" : !c && e && (b.style.display = "none");
	        } };(function (b) {
	        a.d[b] = { init: function init(d, c, e, f, k) {
	            return a.d.event.init.call(this, d, function () {
	              var a = {};a[b] = c();return a;
	            }, e, f, k);
	          } };
	      })("click");a.J = function () {};a.J.prototype.renderTemplateSource = function () {
	        throw Error("Override renderTemplateSource");
	      };a.J.prototype.createJavaScriptEvaluatorBlock = function () {
	        throw Error("Override createJavaScriptEvaluatorBlock");
	      };a.J.prototype.makeTemplateSource = function (b, d) {
	        if ("string" == typeof b) {
	          d = d || w;var c = d.getElementById(b);if (!c) throw Error("Cannot find template with ID " + b);return new a.t.l(c);
	        }if (1 == b.nodeType || 8 == b.nodeType) return new a.t.ha(b);throw Error("Unknown template type: " + b);
	      };a.J.prototype.renderTemplate = function (a, d, c, e) {
	        a = this.makeTemplateSource(a, e);return this.renderTemplateSource(a, d, c, e);
	      };a.J.prototype.isTemplateRewritten = function (a, d) {
	        return !1 === this.allowTemplateRewriting ? !0 : this.makeTemplateSource(a, d).data("isRewritten");
	      };a.J.prototype.rewriteTemplate = function (a, d, c) {
	        a = this.makeTemplateSource(a, c);d = d(a.text());a.text(d);a.data("isRewritten", !0);
	      };a.b("templateEngine", a.J);a.kb = function () {
	        function b(b, c, d, h) {
	          b = a.h.bb(b);for (var l = a.h.ka, g = 0; g < b.length; g++) {
	            var m = b[g].key;if (l.hasOwnProperty(m)) {
	              var x = l[m];if ("function" === typeof x) {
	                if (m = x(b[g].value)) throw Error(m);
	              } else if (!x) throw Error("This template engine does not support the '" + m + "' binding within its templates");
	            }
	          }d = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.h.Ea(b, { valueAccessors: !0 }) + " } })()},'" + d.toLowerCase() + "')";return h.createJavaScriptEvaluatorBlock(d) + c;
	        }var d = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
	            c = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return { lc: function lc(b, c, d) {
	            c.isTemplateRewritten(b, d) || c.rewriteTemplate(b, function (b) {
	              return a.kb.xc(b, c);
	            }, d);
	          }, xc: function xc(a, f) {
	            return a.replace(d, function (a, c, d, e, m) {
	              return b(m, c, d, f);
	            }).replace(c, function (a, c) {
	              return b(c, "\x3c!-- ko --\x3e", "#comment", f);
	            });
	          }, dc: function dc(b, c) {
	            return a.H.$a(function (d, h) {
	              var l = d.nextSibling;l && l.nodeName.toLowerCase() === c && a.va(l, b, h);
	            });
	          } };
	      }();a.b("__tr_ambtns", a.kb.dc);(function () {
	        a.t = {};a.t.l = function (a) {
	          this.l = a;
	        };a.t.l.prototype.text = function () {
	          var b = a.a.v(this.l),
	              b = "script" === b ? "text" : "textarea" === b ? "value" : "innerHTML";if (0 == arguments.length) return this.l[b];var d = arguments[0];"innerHTML" === b ? a.a.gb(this.l, d) : this.l[b] = d;
	        };var b = a.a.f.I() + "_";a.t.l.prototype.data = function (c) {
	          if (1 === arguments.length) return a.a.f.get(this.l, b + c);a.a.f.set(this.l, b + c, arguments[1]);
	        };var d = a.a.f.I();a.t.ha = function (a) {
	          this.l = a;
	        };a.t.ha.prototype = new a.t.l();a.t.ha.prototype.text = function () {
	          if (0 == arguments.length) {
	            var b = a.a.f.get(this.l, d) || {};b.lb === p && b.Na && (b.lb = b.Na.innerHTML);return b.lb;
	          }a.a.f.set(this.l, d, { lb: arguments[0] });
	        };a.t.l.prototype.nodes = function () {
	          if (0 == arguments.length) return (a.a.f.get(this.l, d) || {}).Na;a.a.f.set(this.l, d, { Na: arguments[0] });
	        };a.b("templateSources", a.t);a.b("templateSources.domElement", a.t.l);a.b("templateSources.anonymousTemplate", a.t.ha);
	      })();(function () {
	        function b(b, c, d) {
	          var e;for (c = a.e.nextSibling(c); b && (e = b) !== c;) {
	            b = a.e.nextSibling(e), d(e, b);
	          }
	        }function d(c, d) {
	          if (c.length) {
	            var e = c[0],
	                f = c[c.length - 1],
	                h = e.parentNode,
	                k = a.L.instance,
	                r = k.preprocessNode;if (r) {
	              b(e, f, function (a, b) {
	                var c = a.previousSibling,
	                    d = r.call(k, a);d && (a === e && (e = d[0] || b), a === f && (f = d[d.length - 1] || c));
	              });c.length = 0;if (!e) return;e === f ? c.push(e) : (c.push(e, f), a.a.na(c, h));
	            }b(e, f, function (b) {
	              1 !== b.nodeType && 8 !== b.nodeType || a.ub(d, b);
	            });b(e, f, function (b) {
	              1 !== b.nodeType && 8 !== b.nodeType || a.H.Xb(b, [d]);
	            });a.a.na(c, h);
	          }
	        }function c(a) {
	          return a.nodeType ? a : 0 < a.length ? a[0] : null;
	        }function e(b, e, f, h, q) {
	          q = q || {};var n = (b && c(b) || f || {}).ownerDocument,
	              r = q.templateEngine || k;a.kb.lc(f, r, n);f = r.renderTemplate(f, h, q, n);if ("number" != typeof f.length || 0 < f.length && "number" != typeof f[0].nodeType) throw Error("Template engine must return an array of DOM nodes");n = !1;switch (e) {case "replaceChildren":
	              a.e.T(b, f);n = !0;break;case "replaceNode":
	              a.a.Qb(b, f);n = !0;break;case "ignoreTargetNode":
	              break;default:
	              throw Error("Unknown renderMode: " + e);}n && (d(f, h), q.afterRender && a.k.u(q.afterRender, null, [f, h.$data]));return f;
	        }function f(b, c, d) {
	          return a.F(b) ? b() : "function" === typeof b ? b(c, d) : b;
	        }var k;a.hb = function (b) {
	          if (b != p && !(b instanceof a.J)) throw Error("templateEngine must inherit from ko.templateEngine");
	          k = b;
	        };a.eb = function (b, d, h, x, q) {
	          h = h || {};if ((h.templateEngine || k) == p) throw Error("Set a template engine before calling renderTemplate");q = q || "replaceChildren";if (x) {
	            var n = c(x);return a.j(function () {
	              var k = d && d instanceof a.N ? d : new a.N(a.a.c(d)),
	                  p = f(b, k.$data, k),
	                  k = e(x, q, p, k, h);"replaceNode" == q && (x = k, n = c(x));
	            }, null, { Pa: function Pa() {
	                return !n || !a.a.Qa(n);
	              }, q: n && "replaceNode" == q ? n.parentNode : n });
	          }return a.H.$a(function (c) {
	            a.eb(b, d, h, c, "replaceNode");
	          });
	        };a.Cc = function (b, c, h, k, q) {
	          function n(a, b) {
	            d(b, v);h.afterRender && h.afterRender(b, a);v = null;
	          }function r(a, c) {
	            v = q.createChildContext(a, h.as, function (a) {
	              a.$index = c;
	            });var d = f(b, a, v);return e(null, "ignoreTargetNode", d, v, h);
	          }var v;return a.j(function () {
	            var b = a.a.c(c) || [];"undefined" == typeof b.length && (b = [b]);b = a.a.xa(b, function (b) {
	              return h.includeDestroyed || b === p || null === b || !a.a.c(b._destroy);
	            });a.k.u(a.a.fb, null, [k, b, r, h, n]);
	          }, null, { q: k });
	        };var h = a.a.f.I();a.d.template = { init: function init(b, c) {
	            var d = a.a.c(c());if ("string" == typeof d || d.name) a.e.ma(b);else {
	              if ("nodes" in d) {
	                if (d = d.nodes || [], a.F(d)) throw Error('The "nodes" option must be a plain, non-observable array.');
	              } else d = a.e.childNodes(b);d = a.a.Jb(d);new a.t.ha(b).nodes(d);
	            }return { controlsDescendantBindings: !0 };
	          }, update: function update(b, c, d, e, f) {
	            var k = c(),
	                r;c = a.a.c(k);d = !0;e = null;"string" == typeof c ? c = {} : (k = c.name, "if" in c && (d = a.a.c(c["if"])), d && "ifnot" in c && (d = !a.a.c(c.ifnot)), r = a.a.c(c.data));"foreach" in c ? e = a.Cc(k || b, d && c.foreach || [], c, b, f) : d ? (f = "data" in c ? f.createChildContext(r, c.as) : f, e = a.eb(k || b, f, c, b)) : a.e.ma(b);f = e;(r = a.a.f.get(b, h)) && "function" == typeof r.p && r.p();a.a.f.set(b, h, f && f.$() ? f : p);
	          } };a.h.ka.template = function (b) {
	          b = a.h.bb(b);return 1 == b.length && b[0].unknown || a.h.vc(b, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
	        };a.e.R.template = !0;
	      })();a.b("setTemplateEngine", a.hb);a.b("renderTemplate", a.eb);a.a.Cb = function (a, d, c) {
	        if (a.length && d.length) {
	          var e, f, k, h, l;for (e = f = 0; (!c || e < c) && (h = a[f]); ++f) {
	            for (k = 0; l = d[k]; ++k) {
	              if (h.value === l.value) {
	                h.moved = l.index;l.moved = h.index;d.splice(k, 1);e = k = 0;break;
	              }
	            }e += k;
	          }
	        }
	      };a.a.Ma = function () {
	        function b(b, c, e, f, k) {
	          var h = Math.min,
	              l = Math.max,
	              g = [],
	              m,
	              p = b.length,
	              q,
	              n = c.length,
	              r = n - p || 1,
	              v = p + n + 1,
	              t,
	              u,
	              w;for (m = 0; m <= p; m++) {
	            for (u = t, g.push(t = []), w = h(n, m + r), q = l(0, m - 1); q <= w; q++) {
	              t[q] = q ? m ? b[m - 1] === c[q - 1] ? u[q - 1] : h(u[q] || v, t[q - 1] || v) + 1 : q + 1 : m + 1;
	            }
	          }h = [];l = [];r = [];m = p;for (q = n; m || q;) {
	            n = g[m][q] - 1, q && n === g[m][q - 1] ? l.push(h[h.length] = { status: e, value: c[--q], index: q }) : m && n === g[m - 1][q] ? r.push(h[h.length] = { status: f, value: b[--m], index: m }) : (--q, --m, k.sparse || h.push({ status: "retained",
	              value: c[q] }));
	          }a.a.Cb(l, r, 10 * p);return h.reverse();
	        }return function (a, c, e) {
	          e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};a = a || [];c = c || [];return a.length <= c.length ? b(a, c, "added", "deleted", e) : b(c, a, "deleted", "added", e);
	        };
	      }();a.b("utils.compareArrays", a.a.Ma);(function () {
	        function b(b, d, f, k, h) {
	          var l = [],
	              g = a.j(function () {
	            var g = d(f, h, a.a.na(l, b)) || [];0 < l.length && (a.a.Qb(l, g), k && a.k.u(k, null, [f, g, h]));l.length = 0;a.a.ia(l, g);
	          }, null, { q: b, Pa: function Pa() {
	              return !a.a.tb(l);
	            } });return { aa: l, j: g.$() ? g : p };
	        }var d = a.a.f.I();
	        a.a.fb = function (c, e, f, k, h) {
	          function l(b, d) {
	            s = u[d];t !== d && (z[b] = s);s.Ua(t++);a.a.na(s.aa, c);r.push(s);y.push(s);
	          }function g(b, c) {
	            if (b) for (var d = 0, e = c.length; d < e; d++) {
	              c[d] && a.a.o(c[d].aa, function (a) {
	                b(a, d, c[d].wa);
	              });
	            }
	          }e = e || [];k = k || {};var m = a.a.f.get(c, d) === p,
	              u = a.a.f.get(c, d) || [],
	              q = a.a.Ka(u, function (a) {
	            return a.wa;
	          }),
	              n = a.a.Ma(q, e, k.dontLimitMoves),
	              r = [],
	              v = 0,
	              t = 0,
	              w = [],
	              y = [];e = [];for (var z = [], q = [], s, C = 0, D, E; D = n[C]; C++) {
	            switch (E = D.moved, D.status) {case "deleted":
	                E === p && (s = u[v], s.j && s.j.p(), w.push.apply(w, a.a.na(s.aa, c)), k.beforeRemove && (e[C] = s, y.push(s)));v++;break;case "retained":
	                l(C, v++);break;case "added":
	                E !== p ? l(C, E) : (s = { wa: D.value, Ua: a.r(t++) }, r.push(s), y.push(s), m || (q[C] = s));}
	          }g(k.beforeMove, z);a.a.o(w, k.beforeRemove ? a.S : a.removeNode);for (var C = 0, m = a.e.firstChild(c), H; s = y[C]; C++) {
	            s.aa || a.a.extend(s, b(c, f, s.wa, h, s.Ua));for (v = 0; n = s.aa[v]; m = n.nextSibling, H = n, v++) {
	              n !== m && a.e.Fb(c, n, H);
	            }!s.rc && h && (h(s.wa, s.aa, s.Ua), s.rc = !0);
	          }g(k.beforeRemove, e);g(k.afterMove, z);g(k.afterAdd, q);a.a.f.set(c, d, r);
	        };
	      })();a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.fb);a.P = function () {
	        this.allowTemplateRewriting = !1;
	      };a.P.prototype = new a.J();a.P.prototype.renderTemplateSource = function (b, d, c, e) {
	        if (d = (9 > a.a.M ? 0 : b.nodes) ? b.nodes() : null) return a.a.O(d.cloneNode(!0).childNodes);b = b.text();return a.a.ca(b, e);
	      };a.P.Va = new a.P();a.hb(a.P.Va);a.b("nativeTemplateEngine", a.P);(function () {
	        a.Ya = function () {
	          var a = this.uc = function () {
	            if (!u || !u.tmpl) return 0;try {
	              if (0 <= u.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
	            } catch (a) {}return 1;
	          }();this.renderTemplateSource = function (b, e, f, k) {
	            k = k || w;f = f || {};if (2 > a) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h = b.data("precompiled");h || (h = b.text() || "", h = u.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b.data("precompiled", h));b = [e.$data];e = u.extend({ koBindingContext: e }, f.templateOptions);e = u.tmpl(h, b, e);e.appendTo(k.createElement("div"));u.fragments = {};return e;
	          };this.createJavaScriptEvaluatorBlock = function (a) {
	            return "{{ko_code ((function() { return " + a + " })()) }}";
	          };this.addTemplate = function (a, b) {
	            w.write("<script type='text/html' id='" + a + "'>" + b + "\x3c/script>");
	          };0 < a && (u.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, u.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
	        };a.Ya.prototype = new a.J();var b = new a.Ya();0 < b.uc && a.hb(b);a.b("jqueryTmplTemplateEngine", a.Ya);
	      })();
	    });
	  })();
	})();

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	(function (root, factory) {
		if (true) {
			// AMD. Register as an anonymous module with d3 as a dependency.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), !(function webpackMissingModule() { var e = new Error("Cannot find module \"d3\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__(7), __webpack_require__(8), !(function webpackMissingModule() { var e = new Error("Cannot find module \"d3_tip\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			// Browser global.
			root.jnj_chart = factory(root.$, root.d3, root._, root.util);
		}
	})(undefined, function (jQuery, d3, _, util) {
		var module = {
			version: "0.0.1"
		};
		var $ = jQuery;
		var d3 = d3;
		var DEBUG = true;

		// should module.util functions be moved to ohdsi.util?
		module.util = module.util || {};
		module.util.wrap = function (text, width) {
			text.each(function () {
				var text = d3.select(this),
				    words = text.text().split(/\s+/).reverse(),
				    word,
				    line = [],
				    lineNumber = 0,
				    lineCount = 0,
				    lineHeight = 1.1,
				    // ems
				y = text.attr("y"),
				    dy = parseFloat(text.attr("dy")),
				    tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
				while (word = words.pop()) {
					line.push(word);
					tspan.text(line.join(" "));
					if (tspan.node().getComputedTextLength() > width) {
						if (line.length > 1) {
							line.pop(); // remove word from line
							words.push(word); // put the word back on the stack
							tspan.text(line.join(" "));
						}
						line = [];
						tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em");
					}
				}
			});
		};

		var intFormat = d3.format("0,000");
		var commaseparated = d3.format(',');
		var formatpercent = d3.format('.1%');

		module.util.formatInteger = function (d) {
			return intFormat(d);
		};

		module.util.formatSI = function (p) {
			p = p || 0;
			return function (d) {
				if (d < 1) {
					return d3.round(d, p);
				}
				var prefix = d3.formatPrefix(d);
				return d3.round(prefix.scale(d), p) + prefix.symbol;
			};
		};

		function line_defaultTooltip(xLabel, xFormat, xAccessor, yLabel, yFormat, yAccessor, seriesAccessor) {
			return function (d) {
				var tipText = "";
				if (seriesAccessor(d)) tipText = "Series: " + seriesAccessor(d) + "</br>";
				tipText += xLabel + ": " + xFormat(xAccessor(d)) + "</br>";
				tipText += yLabel + ": " + yFormat(yAccessor(d));
				return tipText;
			};
		}

		function tooltipFactory(tooltips) {
			return function (d) {
				var tipText = "";

				if (tooltips != undefined) {
					for (var i = 0; i < tooltips.length; i++) {
						var value = tooltips[i].accessor(d);
						if (tooltips[i].format != undefined) {
							value = tooltips[i].format(value);
						}
						tipText += tooltips[i].label + ": " + value + '</br>';
					}
				}

				return tipText;
			};
		}

		function donut_defaultTooltip(labelAccessor, valueAccessor, percentageAccessor) {
			return function (d) {
				return labelAccessor(d) + ": " + valueAccessor(d) + " (" + percentageAccessor(d) + ")";
			};
		}

		module.donut = function () {

			this.render = function (data, target, w, h, options) {

				var defaults = {
					colors: d3.scale.category10(),
					margin: {
						top: 5,
						right: 75,
						bottom: 5,
						left: 10
					}
				};

				var options = $.extend({}, defaults, options);

				var width = w - options.margin.left - options.margin.right,
				    or = width / 2,
				    ir = width / 6;

				var total = 0;
				data.forEach(function (d) {
					total += +d.value;
				});

				var tooltipBuilder = donut_defaultTooltip(function (d) {
					return d.data.label;
				}, function (d) {
					return intFormat(d.data.value);
				}, function (d) {
					return formatpercent(total != 0 ? d.data.value / total : 0.0);
				});

				var chart = d3.select(target).append("svg:svg").data([data]).attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h);

				var tip = d3.tip().attr('class', 'd3-tip').direction('s').offset([3, 0]).html(tooltipBuilder);
				chart.call(tip);

				if (data.length > 0) {
					var vis = chart.append("g").attr("transform", "translate(" + or + "," + or + ")");

					var legend = chart.append("g").attr("transform", "translate(" + (w - options.margin.right) + ",0)").attr("class", "legend");

					var arc = d3.svg.arc().innerRadius(ir).outerRadius(or);

					var pie = d3.layout.pie() //this will create arc data for us given a list of values
					.value(function (d) {
						return d.value > 0 ? Math.max(d.value, total * .015) : 0; // we want slices to appear if they have data, so we return a minimum of 1.5% of the overall total if the datapoint has a value > 0.
					}); //we must tell it out to access the value of each element in our data array

					var arcs = vis.selectAll("g.slice") //this selects all <g> elements with class slice (there aren't any yet)
					.data(pie) //associate the generated pie data (an array of arcs, each having startAngle, endAngle and value properties)
					.enter() //this will create <g> elements for every "extra" data element that should be associated with a selection. The result is creating a <g> for every object in the data array
					.append("svg:g") //create a group to hold each slice (we will have a <path> and a <text> element associated with each slice)
					.attr("class", "slice"); //allow us to style things in the slices (like text)

					arcs.append("svg:path").attr("fill", function (d) {
						return options.colors(d.data.id);
					}) //set the color for each slice to be chosen from the color function defined above
					.attr("stroke", "#fff").attr("stroke-width", 2).attr("title", function (d) {
						return d.label;
					}).on('mouseover', tip.show).on('mouseout', tip.hide).attr("d", arc); //this creates the actual SVG path using the associated data (pie) with the arc drawing function

					legend.selectAll('rect').data(function (d) {
						return d;
					}).enter().append("rect").attr("x", 0).attr("y", function (d, i) {
						return i * 15;
					}).attr("width", 10).attr("height", 10).style("fill", function (d) {
						return options.colors(d.id);
					});

					legend.selectAll('text').data(function (d) {
						return d;
					}).enter().append("text").attr("x", 12).attr("y", function (d, i) {
						return i * 15 + 9;
					}).text(function (d) {
						return d.label;
					});
				} else {
					chart.append("text").attr("transform", "translate(" + w / 2 + "," + h / 2 + ")").style("text-anchor", "middle").text("No Data");
				}

				$(window).on("resize", {
					container: $(target),
					chart: $(target + " svg"),
					aspect: w / h
				}, function (event) {
					var targetWidth = event.data.container.width();
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
				}).trigger("resize");
			};
		};

		module.histogram = function () {
			var self = this;
			self.xScale = {}; // shared xScale for histogram and boxplot

			self.drawBoxplot = function (g, data, width, height) {
				var boxplot = g,
				    x = self.xScale,
				    whiskerHeight = height / 2;

				if (data.LIF != data.q1) // draw whisker
					{
						boxplot.append("line").attr("class", "bar").attr("x1", x(data.LIF)).attr("y1", height / 2 - whiskerHeight / 2).attr("x2", x(data.LIF)).attr("y2", height / 2 + whiskerHeight / 2);

						boxplot.append("line").attr("class", "whisker").attr("x1", x(data.LIF)).attr("y1", height / 2).attr("x2", x(data.q1)).attr("y2", height / 2);
					}

				boxplot.append("rect").attr("class", "box").attr("x", x(data.q1)).attr("width", x(data.q3) - x(data.q1)).attr("height", height);

				boxplot.append("line").attr("class", "median").attr("x1", x(data.median)).attr("y1", 0).attr("x2", x(data.median)).attr("y2", height);

				if (data.UIF != data.q3) // draw whisker
					{
						boxplot.append("line").attr("class", "bar").attr("x1", x(data.UIF)).attr("y1", height / 2 - whiskerHeight / 2).attr("x2", x(data.UIF)).attr("y2", height / 2 + whiskerHeight / 2);

						boxplot.append("line").attr("class", "whisker").attr("x1", x(data.q3)).attr("y1", height / 2).attr("x2", x(data.UIF)).attr("y2", height / 2);
					}
			};

			self.render = function (data, target, w, h, options) {

				data = data || []; // default to empty set if null is passed in
				var defaults = {
					margin: {
						top: 5,
						right: 5,
						bottom: 5,
						left: 5
					},
					ticks: 10,
					xFormat: d3.format(',.0f'),
					yFormat: d3.format('s'),
					yScale: d3.scale.linear(),
					boxplotHeight: 10
				};

				var options = $.extend({}, defaults, options);

				// alocate the SVG container, only creating it if it doesn't exist using the selector
				var chart;
				var isNew = false; // this is a flag to determine if chart has already been ploted on this target.
				if (!$(target + " svg")[0]) {
					chart = d3.select(target).append("svg").attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h);
					isNew = true;
				} else {
					chart = d3.select(target + " svg");
				}

				var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) {
					return module.util.formatInteger(d.y);
				});
				chart.call(tip);

				var xAxisLabelHeight = 0;
				var yAxisLabelWidth = 0;

				// apply labels (if specified) and offset margins accordingly
				if (options.xLabel) {
					var xAxisLabel = chart.append("g").attr("transform", "translate(" + w / 2 + "," + (h - options.margin.bottom) + ")");

					xAxisLabel.append("text").attr("class", "axislabel").style("text-anchor", "middle").text(options.xLabel);

					var bboxNode = xAxisLabel.node();
					if (bboxNode) {
						var bbox = bboxNode.getBBox();
						if (bbox) {
							xAxisLabelHeight = bbox.height;
						}
					}
				}

				if (options.yLabel) {
					var yAxisLabel = chart.append("g").attr("transform", "translate(" + options.margin.left + "," + ((h - options.margin.bottom - options.margin.top) / 2 + options.margin.top) + ")");
					yAxisLabel.append("text").attr("class", "axislabel").attr("transform", "rotate(-90)").attr("y", 0).attr("x", 0).attr("dy", "1em").style("text-anchor", "middle").text(options.yLabel);

					var bboxNode = yAxisLabel.node();
					if (bboxNode) {
						var bbox = bboxNode.getBBox();
						if (bbox) {
							yAxisLabelWidth = 1.5 * bbox.width; // width is calculated as 1.5 * box height due to rotation anomolies that cause the y axis label to appear shifted.
						}
					}
				}

				// calculate an intial width and height that does not take into account the tick text dimensions
				var width = w - options.margin.left - options.margin.right - yAxisLabelWidth;
				var height = h - options.margin.top - options.margin.bottom - xAxisLabelHeight;

				// define the intial scale (range will be updated after we determine the final dimensions)
				var x = self.xScale = d3.scale.linear().domain(options.xDomain || [d3.min(data, function (d) {
					return d.x;
				}), d3.max(data, function (d) {
					return d.x + d.dx;
				})]).range([0, width]);

				var xAxis = d3.svg.axis().scale(x).orient("bottom").ticks(options.ticks).tickFormat(options.xFormat);

				var y = options.yScale.domain([0, options.yMax || d3.max(data, function (d) {
					return d.y;
				})]).range([height, 0]);

				var yAxis = d3.svg.axis().scale(y).orient("left").ticks(4).tickFormat(options.yFormat);

				// create temporary x axis
				var tempXAxis = chart.append("g").attr("class", "axis");
				tempXAxis.call(xAxis);

				if (tempXAxis.node() && tempXAxis.node().getBBox()) {
					// update width & height based on temp xaxis dimension and remove
					var xAxisHeight = Math.round(tempXAxis.node().getBBox().height);
					var xAxisWidth = Math.round(tempXAxis.node().getBBox().width);
					height = height - xAxisHeight;
					width = width - Math.max(0, xAxisWidth - width); // trim width if xAxisWidth bleeds over the allocated width.
					tempXAxis.remove();
				}
				// create temporary y axis
				var tempYAxis = chart.append("g").attr("class", "axis");
				tempYAxis.call(yAxis);

				if (tempYAxis.node() && tempYAxis.node().getBBox()) {
					// update height based on temp xaxis dimension and remove
					var yAxisWidth = Math.round(tempYAxis.node().getBBox().width);
					width = width - yAxisWidth;
					tempYAxis.remove();
				}

				if (options.boxplot) {
					height -= 12; // boxplot takes up 12 vertical space
					var boxplotG = chart.append("g").attr("class", "boxplot").attr("transform", "translate(" + (options.margin.left + yAxisLabelWidth + yAxisWidth) + "," + (options.margin.top + height + xAxisHeight) + ")");
					self.drawBoxplot(boxplotG, options.boxplot, width, 8);
				}

				// reset axis ranges
				x.range([0, width]);
				y.range([height, 0]);

				var hist = chart.append("g").attr("transform", "translate(" + (options.margin.left + yAxisLabelWidth + yAxisWidth) + "," + options.margin.top + ")");

				var bar = hist.selectAll(".bar").data(data).enter().append("g").attr("class", "bar").attr("transform", function (d) {
					return "translate(" + x(d.x) + "," + y(d.y) + ")";
				}).on('mouseover', tip.show).on('mouseout', tip.hide);

				bar.append("rect").attr("x", 1).attr("width", function (d) {
					return Math.max(x(d.x + d.dx) - x(d.x) - 1, .5);
				}).attr("height", function (d) {
					return height - y(d.y);
				});

				if (isNew) {
					hist.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

					hist.append("g").attr("class", "y axis").attr("transform", "translate(0," + 0 + ")").call(yAxis);

					$(window).on("resize", {
						container: $(target),
						chart: $(target + " svg"),
						aspect: w / h
					}, function (event) {
						var targetWidth = event.data.container.width();
						event.data.chart.attr("width", targetWidth);
						event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
					}).trigger("resize");
				}
			};
		};

		module.boxplot = function () {
			this.render = function (data, target, w, h, options) {
				var defaults = {
					margin: {
						top: 10,
						right: 10,
						bottom: 10,
						left: 10
					},
					yFormat: d3.format('s'),
					tickPadding: 15
				};

				var options = $.extend({}, defaults, options);
				var valueFormatter = module.util.formatSI(3);

				var svg;
				if (!$(target + " svg")[0]) {
					svg = d3.select(target).append("svg").attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h);
				} else {
					svg = d3.select(target + " svg");
				}

				var tip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(function (d) {
					var content = '<table class="boxplotValues">' + '<tr><td>Max:</td><td>' + valueFormatter(d.max) + '</td></tr>' + '<tr><td>P90:</td><td>' + valueFormatter(d.UIF) + '</td></tr>' + '<tr><td>P75:</td><td>' + valueFormatter(d.q3) + '</td></tr>' + '<tr><td>Median:</td><td>' + valueFormatter(d.median) + '</td></tr>' + '<tr><td>P25:</td><td>' + valueFormatter(d.q1) + '</td></tr>' + '<tr><td>P10:</td><td>' + valueFormatter(d.LIF) + '</td></tr>' + '<tr><td>Min:</td><td>' + valueFormatter(d.min) + '</td></tr>' + '</table>';
					return content;
				});
				svg.call(tip);

				// apply labels (if specified) and offset margins accordingly
				if (options.xLabel) {
					var xAxisLabel = svg.append("g").attr("transform", "translate(" + w / 2 + "," + (h - 5) + ")");

					xAxisLabel.append("text").attr("class", "axislabel").style("text-anchor", "middle").text(options.xLabel);

					if (xAxisLabel.node()) {
						var bbox = xAxisLabel.node().getBBox();
						options.margin.bottom += bbox.height + 5;
					}
				}

				if (options.yLabel) {
					var yAxisLabel = svg.append("g").attr("transform", "translate(0," + ((h - options.margin.bottom - options.margin.top) / 2 + options.margin.top) + ")");
					yAxisLabel.append("text").attr("class", "axislabel").attr("transform", "rotate(-90)").attr("y", 0).attr("x", 0).attr("dy", "1em").style("text-anchor", "middle").text(options.yLabel);

					if (yAxisLabel.node()) {
						var bbox = yAxisLabel.node().getBBox();
						options.margin.left += bbox.width + 5;
					}
				}

				options.margin.left += options.tickPadding;
				options.margin.bottom += options.tickPadding;

				var width = w - options.margin.left - options.margin.right;
				var height = h - options.margin.top - options.margin.bottom;

				var x = d3.scale.ordinal().rangeRoundBands([0, width], 1.0 / data.length).domain(data.map(function (d) {
					return d.Category;
				}));

				var y = d3.scale.linear().range([height, 0]).domain([options.yMin || 0, options.yMax || d3.max(data, function (d) {
					return d.max;
				})]);

				var boxWidth = 10;
				var boxOffset = x.rangeBand() / 2 - boxWidth / 2;
				var whiskerWidth = boxWidth / 2;
				var whiskerOffset = x.rangeBand() / 2 - whiskerWidth / 2;

				var chart = svg.append("g").attr("transform", "translate(" + options.margin.left + "," + options.margin.top + ")");

				// draw main box and whisker plots
				var boxplots = chart.selectAll(".boxplot").data(data).enter().append("g").attr("class", "boxplot").attr("transform", function (d) {
					return "translate(" + x(d.Category) + ",0)";
				});

				// for each g element (containing the boxplot render surface), draw the whiskers, bars and rects
				boxplots.each(function (d, i) {
					var boxplot = d3.select(this);
					if (d.LIF != d.q1) // draw whisker
						{
							boxplot.append("line").attr("class", "bar").attr("x1", whiskerOffset).attr("y1", y(d.LIF)).attr("x2", whiskerOffset + whiskerWidth).attr("y2", y(d.LIF));
							boxplot.append("line").attr("class", "whisker").attr("x1", x.rangeBand() / 2).attr("y1", y(d.LIF)).attr("x2", x.rangeBand() / 2).attr("y2", y(d.q1));
						}

					boxplot.append("rect").attr("class", "box").attr("x", boxOffset).attr("y", y(d.q3)).attr("width", boxWidth).attr("height", Math.max(1, y(d.q1) - y(d.q3))).on('mouseover', tip.show).on('mouseout', tip.hide);

					boxplot.append("line").attr("class", "median").attr("x1", boxOffset).attr("y1", y(d.median)).attr("x2", boxOffset + boxWidth).attr("y2", y(d.median));

					if (d.UIF != d.q3) // draw whisker
						{
							boxplot.append("line").attr("class", "bar").attr("x1", whiskerOffset).attr("y1", y(d.UIF)).attr("x2", x.rangeBand() - whiskerOffset).attr("y2", y(d.UIF));
							boxplot.append("line").attr("class", "whisker").attr("x1", x.rangeBand() / 2).attr("y1", y(d.UIF)).attr("x2", x.rangeBand() / 2).attr("y2", y(d.q3));
						}
					// to do: add max/min indicators

				});

				// draw x and y axis
				var xAxis = d3.svg.axis().scale(x).orient("bottom");

				var yAxis = d3.svg.axis().scale(y).orient("left").tickFormat(options.yFormat).ticks(5);

				chart.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

				chart.selectAll(".tick text").call(module.util.wrap, x.rangeBand() || x.range());

				chart.append("g").attr("class", "y axis").attr("transform", "translate(0," + 0 + ")").call(yAxis);

				$(window).on("resize", {
					container: $(target),
					chart: $(target + " svg"),
					aspect: w / h
				}, function (event) {
					var targetWidth = event.data.container.width();
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
				}).trigger("resize");
			};
		};

		module.barchart = function () {
			this.render = function (data, target, w, h, options) {
				var defaults = {
					label: 'label',
					value: 'value',
					rotate: 0,
					colors: d3.scale.category10(),
					textAnchor: 'middle',
					showLabels: false
				};

				var options = $.extend({}, defaults, options);

				var label = options.label;
				var value = options.value;

				var total = 0;
				for (d = 0; d < data.length; d++) {
					total = total + data[d][value];
				}

				var margin = {
					top: 20,
					right: 10,
					bottom: 25,
					left: 10
				},
				    width = w - margin.left - margin.right,
				    height = h - margin.top - margin.bottom;

				var commaseparated = d3.format(',');
				var formatpercent = d3.format('.1%');

				var x = d3.scale.ordinal().rangeRoundBands([0, width], 1.0 / data.length);

				var y = d3.scale.linear().range([height, 0]);

				var xAxis = d3.svg.axis().scale(x).tickSize(2, 0).orient("bottom");

				var yAxis = d3.svg.axis().scale(y).orient("left");

				var svg = d3.select(target).append("svg").attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h).append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")").attr("class", "barchart");

				x.domain(data.map(function (d) {
					return d[label];
				}));
				y.domain([0, options.yMax || d3.max(data, function (d) {
					return d[value];
				})]);

				svg.append("g").attr("class", "x axis").attr("transform", "translate(0," + (height + 1) + ")").call(xAxis).selectAll(".tick text").style("text-anchor", options.textAnchor).attr("transform", function (d) {
					return "rotate(" + options.rotate + ")";
				});

				if (options.wrap) {
					svg.selectAll(".tick text").call(module.util.wrap, x.rangeBand());
				}

				svg.selectAll(".bar").data(data).enter().append("rect").attr("class", "bar").attr("x", function (d) {
					return x(d[label]);
				}).attr("width", x.rangeBand()).attr("y", function (d) {
					return y(d[value]);
				}).attr("height", function (d) {
					return height - y(d[value]);
				}).attr("title", function (d) {
					temp_title = d[label] + ": " + commaseparated(d[value], ",");
					if (total > 0) {
						temp_title = temp_title + ' (' + formatpercent(d[value] / total) + ')';
					} else {
						temp_title = temp_title + ' (' + formatpercent(0) + ')';
					}
					return temp_title;
				}).style("fill", function (d) {
					return options.colors(d[label]);
				});

				if (options.showLabels) {
					svg.selectAll(".barlabel").data(data).enter().append("text").attr("class", "barlabel").text(function (d) {
						return formatpercent(d[value] / total);
					}).attr("x", function (d) {
						return x(d[label]) + x.rangeBand() / 2;
					}).attr("y", function (d) {
						return y(d[value]) - 3;
					}).attr("text-anchor", "middle");
				}

				$(window).on("resize", {
					container: $(target),
					chart: $(target + " svg"),
					aspect: w / h
				}, function (event) {
					var targetWidth = event.data.container.width();
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
				}).trigger("resize");
			};
		};

		module.areachart = function () {
			this.render = function (data, target, w, h, options) {
				var defaults = {
					margin: {
						top: 20,
						right: 30,
						bottom: 20,
						left: 40
					},
					xFormat: d3.format(',.0f'),
					yFormat: d3.format('s')
				};
				var options = $.extend({}, defaults, options);

				var width = w - options.margin.left - options.margin.right,
				    height = h - options.margin.top - options.margin.bottom;

				var x = d3.scale.linear().domain(d3.extent(data, function (d) {
					return d.x;
				})).range([0, width]);

				var y = d3.scale.linear().domain([0, d3.max(data, function (d) {
					return d.y;
				})]).range([height, 0]);

				var xAxis = d3.svg.axis().scale(x).tickFormat(options.xFormat).ticks(10).orient("bottom");

				var yAxis = d3.svg.axis().scale(y).tickFormat(options.yFormat).ticks(4).orient("left");

				var area = d3.svg.area().x(function (d) {
					return x(d.x);
				}).y0(height).y1(function (d) {
					return y(d.y);
				});

				var chart = d3.select(target).append("svg:svg").data(data).attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h);

				var vis = chart.append("g").attr("transform", "translate(" + options.margin.left + "," + options.margin.top + ")");

				vis.append("path").datum(data).attr("class", "area").attr("d", area);

				vis.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

				vis.append("g").attr("class", "y axis").call(yAxis);

				$(window).on("resize", {
					container: $(target),
					chart: $(target + " svg"),
					aspect: w / h
				}, function (event) {
					var targetWidth = event.data.container.width();
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
				}).trigger("resize");
			};
		};

		/* NOT IMPLEMENTED */
		/*
	  module.stackedarea = function () {
	  this.render = function (data, target, w, h, options) {
	  var defaults = {
	  margin: {
	  top: 10,
	  right: 10,
	  bottom: 10,
	  left: 10
	  },
	  xFormat: d3.format(',.0f'),
	  yFormat: d3.format('s'),
	  xValue: "xValue",
	  yValue: "yValue",
	  colors = d3.scale.category10()
	  };
	  var options = $.extend({}, defaults, options);
	  var chart = d3.select(target)
	  .append("svg:svg")
	  .data(data)
	  .attr("width", w)
	  .attr("height", h)
	  .attr("viewBox", "0 0 " + w + " " + h);
	  // apply labels (if specified) and offset margins accordingly
	  if (options.xLabel) {
	  var xAxisLabel = chart.append("g")
	  .attr("transform", "translate(" + w / 2 + "," + (h - options.margin.bottom) + ")")
	  xAxisLabel.append("text")
	  .attr("class", "axislabel")
	  .style("text-anchor", "middle")
	  .text(options.xLabel);
	  var bbox = xAxisLabel.node().getBBox();
	  options.margin.bottom += bbox.height + 10;
	  }
	  if (options.yLabel) {
	  var yAxisLabel = chart.append("g")
	  .attr("transform", "translate(0," + (((h - options.margin.bottom - options.margin.top) / 2) + options.margin.top) + ")");
	  yAxisLabel.append("text")
	  .attr("class", "axislabel")
	  .attr("transform", "rotate(-90)")
	  .attr("y", 0)
	  .attr("x", 0)
	  .attr("dy", "1em")
	  .style("text-anchor", "middle")
	  .text(options.yLabel);
	  var bbox = yAxisLabel.node().getBBox();
	  options.margin.left += bbox.width;
	  }
	  var width = w - options.margin.left - options.margin.right;
	  var height = h - options.margin.top - options.margin.bottom;
	  }
	 }
	  */

		module.line = function () {
			this.render = function (data, target, w, h, options) {
				var defaults = {
					margin: {
						top: 5,
						right: 5,
						bottom: 5,
						left: 5
					},
					xFormat: module.util.formatSI(3),
					yFormat: module.util.formatSI(3),
					interpolate: "linear",
					seriesName: "SERIES_NAME",
					xValue: "xValue",
					yValue: "yValue",
					cssClass: "lineplot",
					ticks: 10,
					showSeriesLabel: false,
					colorScale: null,
					labelIndexDate: false,
					colorBasedOnIndex: false
				};
				var options = $.extend({}, defaults, options);

				var tooltipBuilder = line_defaultTooltip(options.xLabel || "x", options.xFormat, function (d) {
					return d[options.xValue];
				}, options.yLabel || "y", options.yFormat, function (d) {
					return d[options.yValue];
				}, function (d) {
					return d[options.seriesName];
				});

				var offscreen = $('<div class="offscreen"></div>').appendTo('body');

				var chart = d3.select(offscreen[0]).append("svg:svg").attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h);

				if (data.length > 0) {

					// convert data to multi-series format if not already formatted
					if (!data[0].hasOwnProperty("values")) {
						// assumes data is just an array of values (single series)
						data = [{
							name: '',
							values: data
						}];
					}
					chart.data(data);

					var focusTip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(tooltipBuilder);
					chart.call(focusTip);

					var xAxisLabelHeight = 0;
					var yAxisLabelWidth = 0;

					// apply labels (if specified) and offset margins accordingly
					if (options.xLabel) {
						var xAxisLabel = chart.append("g").attr("transform", "translate(" + w / 2 + "," + (h - options.margin.bottom) + ")");

						xAxisLabel.append("text").attr("class", "axislabel").style("text-anchor", "middle").text(options.xLabel);

						var bbox = xAxisLabel.node().getBBox();
						xAxisLabelHeight += bbox.height;
					}

					if (options.yLabel) {
						var yAxisLabel = chart.append("g").attr("transform", "translate(" + options.margin.left + "," + ((h - options.margin.bottom - options.margin.top) / 2 + options.margin.top) + ")");
						yAxisLabel.append("text").attr("class", "axislabel").attr("transform", "rotate(-90)").attr("y", 0).attr("x", 0).attr("dy", "1em").style("text-anchor", "middle").text(options.yLabel);

						var bbox = yAxisLabel.node().getBBox();
						yAxisLabelWidth = 1.5 * bbox.width; // width is calculated as 1.5 * box height due to rotation anomolies that cause the y axis label to appear shifted.
					}

					var legendWidth = 0;
					if (options.showLegend) {
						var legend = chart.append("g").attr("class", "legend");

						var maxWidth = 0;

						data.forEach(function (d, i) {
							legend.append("rect").attr("x", 0).attr("y", i * 15).attr("width", 10).attr("height", 10).style("fill", options.colors(d.name));

							var legendItem = legend.append("text").attr("x", 12).attr("y", i * 15 + 9).text(d.name);
							maxWidth = Math.max(legendItem.node().getBBox().width + 12, maxWidth);
						});
						legend.attr("transform", "translate(" + (w - options.margin.right - maxWidth) + ",0)");
						legendWidth += maxWidth + 5;
					}

					// calculate an intial width and height that does not take into account the tick text dimensions
					var width = w - options.margin.left - options.margin.right - yAxisLabelWidth - legendWidth;
					var height = h - options.margin.top - options.margin.bottom - xAxisLabelHeight;

					// define the intial scale (range will be updated after we determine the final dimensions)
					var x = options.xScale || d3.scale.linear().domain([d3.min(data, function (d) {
						return d3.min(d.values, function (d) {
							return d[options.xValue];
						});
					}), d3.max(data, function (d) {
						return d3.max(d.values, function (d) {
							return d[options.xValue];
						});
					})]);

					var xAxis = d3.svg.axis().scale(x).ticks(options.ticks).orient("bottom");

					// check for custom tick formatter
					if (options.tickFormat) {
						xAxis.tickFormat(options.tickFormat);
					} else // apply standard formatter
						{
							xAxis.tickFormat(options.xFormat);
						}

					// if x scale is ordinal, then apply rangeRoundBands, else apply standard range.
					if (typeof x.rangePoints === 'function') {
						x.rangePoints([0, width]);
					} else {
						x.range([0, width]);
					}

					var y = options.yScale || d3.scale.linear().domain([0, d3.max(data, function (d) {
						return d3.max(d.values, function (d) {
							return d[options.yValue];
						});
					})]).range([height, 0]);

					var yAxis = d3.svg.axis().scale(y).tickFormat(options.yFormat).ticks(4).orient("left");

					// create temporary x axis
					var tempXAxis = chart.append("g").attr("class", "axis");
					tempXAxis.call(xAxis);
					var xAxisHeight = Math.round(tempXAxis.node().getBBox().height);
					var xAxisWidth = Math.round(tempXAxis.node().getBBox().width);
					height = height - xAxisHeight;
					width = width - Math.max(0, xAxisWidth - width); // trim width if xAxisWidth bleeds over the allocated width.
					tempXAxis.remove();

					// create temporary y axis

					// create temporary y axis
					var tempYAxis = chart.append("g").attr("class", "axis");
					tempYAxis.call(yAxis);

					// update height based on temp xaxis dimension and remove
					var yAxisWidth = Math.round(tempYAxis.node().getBBox().width);
					width = width - yAxisWidth;
					tempYAxis.remove();

					// reset axis ranges
					// if x scale is ordinal, then apply rangeRoundBands, else apply standard range.
					if (typeof x.rangePoints === 'function') {
						x.rangePoints([0, width]);
					} else {
						x.range([0, width]);
					}
					y.range([height, 0]);

					// create a line function that can convert data[] into x and y points

					var line = d3.svg.line().x(function (d) {
						var xPos = x(d[options.xValue]);
						return xPos;
					}).y(function (d) {
						var yPos = y(d[options.yValue]);
						return yPos;
					}).interpolate(options.interpolate);

					var vis = chart.append("g").attr("class", options.cssClass).attr("transform", "translate(" + (options.margin.left + yAxisLabelWidth + yAxisWidth) + "," + options.margin.top + ")");

					var series = vis.selectAll(".series").data(data).enter().append("g");

					var seriesLines = series.append("path").attr("class", "line").attr("d", function (d) {
						return line(d.values.sort(function (a, b) {
							return d3.ascending(a[options.xValue], b[options.xValue]);
						}));
					});

					if (options.colorBasedOnIndex) {} else if (options.colors) {
						seriesLines.style("stroke", function (d) {
							return options.colors(d.name);
						});
					}

					if (options.showSeriesLabel) {
						series.append("text").datum(function (d) {
							return {
								name: d.name,
								value: d.values[d.values.length - 1]
							};
						}).attr("transform", function (d) {
							return "translate(" + x(d.value[options.xValue]) + "," + y(d.value[options.yValue]) + ")";
						}).attr("x", 3).attr("dy", 2).style("font-size", "8px").text(function (d) {
							return d.name;
						});
					}
					var indexPoints = {
						x: 0,
						y: 0
					};
					series.selectAll(".focus").data(function (series) {
						return series.values;
					}).enter().append("circle").attr("class", "focus").attr("r", 4).attr("transform", function (d) {
						var xVal = x(d[options.xValue]);
						var yVal = y(d[options.yValue]);
						if (d[options.xValue] === 0 && indexPoints.y === 0) {
							indexPoints.x = xVal;
							indexPoints.y = yVal;
						}
						return "translate(" + xVal + "," + yVal + ")";
					}).on('mouseover', function (d) {
						d3.select(this).style("opacity", "1");
						focusTip.show(d);
					}).on('mouseout', function (d) {
						d3.select(this).style("opacity", "0");
						focusTip.hide(d);
					});

					vis.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);

					vis.append("g").attr("class", "y axis").call(yAxis);

					if (options.labelIndexDate) {
						vis.append("rect").attr("transform", function () {
							return "translate(" + (indexPoints.x - 0.5) + "," + indexPoints.y + ")";
						}).attr("width", 1).attr("height", height);
					}
				} else {
					chart.append("text").attr("transform", "translate(" + w / 2 + "," + h / 2 + ")").style("text-anchor", "middle").text("No Data");
				}

				$(target).append(offscreen);
				$(offscreen).removeClass('offscreen');

				var resizeHandler = $(window).on("resize", {
					container: $(offscreen),
					chart: $(offscreen).children('svg'),
					aspect: w / h
				}, function (event) {
					var targetWidth = event.data.container.width();
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
				});

				setTimeout(function () {
					$(window).trigger('resize');
				}, 0);
			};
		};

		module.scatterplot = function () {
			this.render = function (data, target, w, h, options) {
				var defaults = {
					margin: {
						top: 5,
						right: 5,
						bottom: 5,
						left: 5
					},
					xFormat: module.util.formatSI(3),
					yFormat: module.util.formatSI(3),
					interpolate: "linear",
					seriesName: "SERIES_NAME",
					xValue: "xValue",
					yValue: "yValue",
					cssClass: "lineplot",
					ticks: 10,
					showSeriesLabel: false,
					colorScale: null,
					labelIndexDate: false,
					colorBasedOnIndex: false,
					showXAxis: true
				};
				var options = $.extend({}, defaults, options);

				/*
	   	// old school tooltip logic
	   	options.xLabel || "x", options.xFormat, function (d) {
	   						return d[options.xValue];
	   					},
	   					options.yLabel || "y", options.yFormat,
	   					function (d) {
	   						return d[options.yValue];
	   					},
	   					function (d) {
	   						return d[options.seriesName];
	   					},
	   */

				var tooltipBuilder = tooltipFactory(options.tooltips);

				var offscreen = $('<div class="offscreen"></div>').appendTo('body');

				var chart = d3.select(offscreen[0]).append("svg:svg").attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h);

				if (data.length > 0) {

					// convert data to multi-series format if not already formatted
					if (!data[0].hasOwnProperty("values")) {
						// assumes data is just an array of values (single series)
						data = [{
							name: '',
							values: data
						}];
					}
					chart.data(data);

					var focusTip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(tooltipBuilder);
					chart.call(focusTip);

					var xAxisLabelHeight = 0;
					var yAxisLabelWidth = 0;

					// apply labels (if specified) and offset margins accordingly
					if (options.xLabel) {
						var xAxisLabel = chart.append("g").attr("transform", "translate(" + w / 2 + "," + (h - options.margin.bottom) + ")");

						xAxisLabel.append("text").attr("class", "axislabel").style("text-anchor", "middle").text(options.xLabel);

						var bbox = xAxisLabel.node().getBBox();
						xAxisLabelHeight += bbox.height;
					}

					if (options.yLabel) {
						var yAxisLabel = chart.append("g").attr("transform", "translate(" + options.margin.left + "," + ((h - options.margin.bottom - options.margin.top) / 2 + options.margin.top) + ")");
						yAxisLabel.append("text").attr("class", "axislabel").attr("transform", "rotate(-90)").attr("y", 0).attr("x", 0).attr("dy", "1em").style("text-anchor", "middle").text(options.yLabel);

						var bbox = yAxisLabel.node().getBBox();
						yAxisLabelWidth = 1.5 * bbox.width; // width is calculated as 1.5 * box height due to rotation anomolies that cause the y axis label to appear shifted.
					}

					var legendWidth = 0;
					if (options.showLegend) {
						var legend = chart.append("g").attr("class", "legend");

						var maxWidth = 0;

						data.forEach(function (d, i) {
							legend.append("rect").attr("x", 0).attr("y", i * 15).attr("width", 10).attr("height", 10).style("fill", options.colors(d.name));

							var legendItem = legend.append("text").attr("x", 12).attr("y", i * 15 + 9).text(d.name);
							maxWidth = Math.max(legendItem.node().getBBox().width + 12, maxWidth);
						});
						legend.attr("transform", "translate(" + (w - options.margin.right - maxWidth) + ",0)");
						legendWidth += maxWidth + 5;
					}

					// calculate an intial width and height that does not take into account the tick text dimensions
					var width = w - options.margin.left - options.margin.right - yAxisLabelWidth - legendWidth;
					var height = h - options.margin.top - options.margin.bottom - xAxisLabelHeight;

					// define the intial scale (range will be updated after we determine the final dimensions)
					var x = options.xScale || d3.scale.linear().domain([d3.min(data, function (d) {
						return d3.min(d.values, function (d) {
							return d[options.xValue];
						});
					}), d3.max(data, function (d) {
						return d3.max(d.values, function (d) {
							return d[options.xValue];
						});
					})]);

					var xAxis = d3.svg.axis().scale(x).ticks(options.ticks).orient("bottom");

					// check for custom tick formatter
					if (options.tickFormat) {
						xAxis.tickFormat(options.tickFormat);
					} else // apply standard formatter
						{
							xAxis.tickFormat(options.xFormat);
						}

					// if x scale is ordinal, then apply rangeRoundBands, else apply standard range.
					if (typeof x.rangePoints === 'function') {
						x.rangePoints([0, width]);
					} else {
						x.range([0, width]);
					}

					var y = options.yScale || d3.scale.linear().domain([0, d3.max(data, function (d) {
						return d3.max(d.values, function (d) {
							return d[options.yValue];
						});
					})]).range([height, 0]);

					var yAxis = d3.svg.axis().scale(y).tickFormat(options.yFormat).ticks(4).orient("left");

					// create temporary x axis
					var tempXAxis = chart.append("g").attr("class", "axis");
					tempXAxis.call(xAxis);
					var xAxisHeight = Math.round(tempXAxis.node().getBBox().height);
					var xAxisWidth = Math.round(tempXAxis.node().getBBox().width);
					height = height - xAxisHeight;
					width = width - Math.max(0, xAxisWidth - width); // trim width if xAxisWidth bleeds over the allocated width.
					tempXAxis.remove();

					// create temporary y axis
					var tempYAxis = chart.append("g").attr("class", "axis");
					tempYAxis.call(yAxis);

					// update height based on temp xaxis dimension and remove
					var yAxisWidth = Math.round(tempYAxis.node().getBBox().width);
					width = width - yAxisWidth;
					tempYAxis.remove();

					// reset axis ranges
					// if x scale is ordinal, then apply rangeRoundBands, else apply standard range.
					if (typeof x.rangePoints === 'function') {
						x.rangePoints([0, width]);
					} else {
						x.range([0, width]);
					}
					y.range([height, 0]);

					var vis = chart.append("g").attr("class", options.cssClass).attr("transform", "translate(" + (options.margin.left + yAxisLabelWidth + yAxisWidth) + "," + options.margin.top + ")");

					var series = vis.selectAll(".series").data(data).enter().append("g");

					var seriesDots = series.selectAll(".dot").data(function (series) {
						return series.values;
					}).enter().append("circle").attr("class", "dot").attr("r", 1).style("fill", function (d) {
						return options.colors(d[options.seriesName]);
					}).attr("transform", function (d) {
						var xVal = x(d[options.xValue]);
						var yVal = y(d[options.yValue]);
						return "translate(" + xVal + "," + yVal + ")";
					});

					if (options.showSeriesLabel) {
						series.append("text").datum(function (d) {
							return {
								name: d.name,
								value: d.values[d.values.length - 1]
							};
						}).attr("transform", function (d) {
							return "translate(" + x(d.value[options.xValue]) + "," + y(d.value[options.yValue]) + ")";
						}).attr("x", 3).attr("dy", 2).style("font-size", "8px").text(function (d) {
							return d.name;
						});
					}

					var indexPoints = {
						x: 0,
						y: 0
					};
					series.selectAll(".focus").data(function (series) {
						return series.values;
					}).enter().append("circle").attr("class", "focus").attr("r", 1).attr("transform", function (d) {
						var xVal = x(d[options.xValue]);
						var yVal = y(d[options.yValue]);
						if (d[options.xValue] === 0 && indexPoints.y === 0) {
							indexPoints.x = xVal;
							indexPoints.y = yVal;
						}
						return "translate(" + xVal + "," + yVal + ")";
					}).on('mouseover', function (d) {
						d3.select(this).style("opacity", "1");
						focusTip.show(d);
					}).on('mouseout', function (d) {
						d3.select(this).style("opacity", "0");
						focusTip.hide(d);
					});

					if (options.showXAxis) {
						vis.append("g").attr("class", "x axis").attr("transform", "translate(0," + height + ")").call(xAxis);
					}

					vis.append("g").attr("class", "y axis").call(yAxis);

					if (options.labelIndexDate) {
						vis.append("rect").attr("transform", function () {
							return "translate(" + (indexPoints.x - 0.5) + "," + indexPoints.y + ")";
						}).attr("width", 1).attr("height", height);
					}
				} else {
					chart.append("text").attr("transform", "translate(" + w / 2 + "," + h / 2 + ")").style("text-anchor", "middle").text("No Data");
				}

				$(target).append(offscreen);
				$(offscreen).removeClass('offscreen');

				var resizeHandler = $(window).on("resize", {
					container: $(offscreen),
					chart: $(offscreen).children('svg'),
					aspect: w / h
				}, function (event) {
					var targetWidth = event.data.container.width();
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
				});

				setTimeout(function () {
					$(window).trigger('resize');
				}, 0);
			};
		};

		function nodata(chart, w, h) {
			chart.html('');
			chart.append("text").attr("transform", "translate(" + w / 2 + "," + h / 2 + ")").style("text-anchor", "middle").text("No Data");
		}
		function dataToSeries(data, seriesProp) {
			//if (dataInSeries(data)) throw new Error("didn't expect data in series");
			if (!seriesProp) return [{ name: '', values: data }];
			return _.chain(data).groupBy(seriesProp.accessor).map(function (v, k) {
				return { name: k, values: v };
			})
			// i don't think sorting is working
			//.sort(series => series.values = _.sortBy(series.values, seriesProp.sortBy))
			.value();
		}
		function dataFromSeries(series) {
			return _.chain(series).map('values').flatten().value();
		}
		/*
	 function dataInSeries(data) {
	 	return _.chain(data).map(_.keys).flatten().uniq().eq(['name','values']).value();
	 }
	 */
		module.zoomScatter = function (opts, jqEventSpace) {
			var _y;

			this.defaultOptions = {
				availableDatapointBindings: ['d', 'i', 'j', 'data', 'series', 'allFields', 'thisField', 'layout'],
				chart: {
					cssClass: "lineplot",
					labelIndexDate: false,
					colorBasedOnIndex: false
				},
				layout: {
					top: { margin: { size: 5 } },
					bottom: { margin: { size: 5 } },
					left: { margin: { size: 5 } },
					right: { margin: { size: 5 } }
				},
				x: {
					/* lots of different scale requirements:
	    		original data: full domain, full range for chart size
	    		brush zoom: domain limited to brush extent
	    		external filter zoom: domain limited to filtered data extent
	    			what if brush and external filter?
	    		maybe brush trumps
	    			main chart should use brush zoom domain if exists
	    		and return to full when brush cleared
	    			inset domain: full data extent, regardless of zoom
	    		inset range: small area
	    		inset focus: zoom extent with zoom, none with full
	    			so:
	    		main domain, zoom domain (control zoom by brush or filter externally)
	    		main range, inset range
	    		inset focus = zoom domain
	    	*/
					requiredOptions: ['value', 'label'],
					showAxis: true,
					showLabel: true,
					format: module.util.formatSI(3),
					ticks: 10,
					needsLabel: true,
					needsValueFunc: true,
					//needsScale: true, // don't use automatic stuff, too complicated here
					/* annoying: inline getter won't survive merging into default opts
	    		so have to let Field constructor make them enumerable with
	    		Object.defineProperty
	    get scale() {
	    	return this._zoomScale || this._fullScale || d3.scale.linear();
	    },
	    */
					getters: {
						scale: function scale() {
							return this._zoomScale || this._fullScale || d3.scale.linear();
						}
					},
					isField: true,
					_accessors: {
						setZoomScale: {
							func: function func(thisField, domain) {
								if (!domain) {
									delete thisField._zoomScale;
									return thisField.scale;
								}
								thisField._zoomScale = thisField._fullScale.copy();
								thisField._zoomScale.domain(domain);
							},
							posParams: ['thisField'],
							accessorOrder: 5 },
						fullScale: {
							func: function func(thisField, data, layout) {
								thisField._fullScale = d3.scale.linear().domain(d3.extent(data.map(thisField.accessor))).range([0, layout.svgWidth()]);
							},
							posParams: ['thisField', 'data', 'layout'],
							runOnGenerate: true,
							accessorOrder: 2
						}
					}
				},
				y: (_y = {
					requiredOptions: ['value'],
					showAxis: true,
					showLabel: true,
					format: module.util.formatSI(3),
					ticks: 4,
					scale: d3.scale.linear(),
					needsLabel: true,
					needsValueFunc: true,
					isField: true,
					getters: {
						scale: function scale() {
							return this._zoomScale || this._fullScale || d3.scale.linear();
						}
					}
				}, _defineProperty(_y, "isField", true), _defineProperty(_y, "_accessors", {
					setZoomScale: {
						func: function func(thisField, domain) {
							if (!domain) {
								delete thisField._zoomScale;
								return thisField.scale;
							}
							thisField._zoomScale = thisField._fullScale.copy();
							thisField._zoomScale.domain(domain);
						},
						posParams: ['thisField'],
						accessorOrder: 5 },
					fullScale: {
						func: function func(thisField, data, layout) {
							thisField._fullScale = d3.scale.linear().domain(d3.extent(data.map(thisField.accessor))).range([0, layout.svgWidth()]);
						},
						posParams: ['thisField', 'data', 'layout'],
						runOnGenerate: true,
						accessorOrder: 2
					}
				}), _y),
				size: {
					scale: d3.scale.linear(),
					defaultValue: function defaultValue() {
						return 1;
					},
					needsLabel: true,
					needsValueFunc: true,
					needsScale: true,
					isField: true,
					_accessors: {
						range: {
							func: function func() {
								return [.5, 8];
							}
						}
					}
				},
				color: {
					//scale: null,
					//rangeFunc: (layout, prop) => prop.scale.range(), // does this belong here?
					needsLabel: true,
					needsValueFunc: true,
					defaultValue: function defaultValue() {
						return '#003142';
					},
					//needsScale: true,
					isField: true,
					scale: d3.scale.category10(),
					accessorDependsOnScale: true
				},
				shape: {
					value: 0,
					defaultValue: function defaultValue() {
						return 'circle';
					},
					scale: d3.scale.ordinal(),
					needsLabel: true,
					needsValueFunc: true,
					needsScale: true,
					isField: true,
					accessorDependsOnScale: true,
					_accessors: {
						range: {
							func: function func() {
								return util.shapePath("types");
							},
							accessorOrder: 1
						},
						domain: {
							accessorOrder: 2,
							func: function func() {
								throw new Error("need to override shape domain accessor");
							}
						},
						value: {
							accessorOrder: 3,
							func: function func() {
								throw new Error("need to override shape domain accessor");
							}
						}
					}
				},
				legend: {
					show: true
				},
				series: {
					//value: function(d) { return this.parentNode.__data__.name; },
					defaultValue: function defaultValue() {
						return null;
					},
					//value: d=>1,
					showLabel: false,
					//showSeriesLabel: false,
					//needsLabel: true,
					needsLabel: false,
					needsValueFunc: true,
					isField: true
				},
				inset: {
					name: 'inset'
				}
				//interpolate: "linear", // not used
				//sizeScale: d3.scale.linear(), //d3.scale.pow().exponent(2),
				//showXAxis: true
			};
			this.chartSetup = _.once(function (target, w, h, mergedOpts, fields, recId) {
				var cp = this.cp = mergedOpts;
				cp.chartObj = this;
				this.fields = fields;
				if (!recId) {
					throw new Error("must send a recId function that accepts a record and returns a unique id for that record.");
				}
				this.recId = recId;
				this.divEl = new util.ResizableSvgContainer(target, [null], w, h, ['zoom-scatter']);
				this.svgEl = this.divEl.child('svg');
				var layout = this.layout = new util.SvgLayout(w, h, cp.layout);
				if (cp.y.showLabel) {
					cp.y.labelEl = new util.ChartLabelLeft(this.svgEl, layout, cp.y);
				}
				if (cp.y.showAxis) {
					cp.y.axisEl = new util.ChartAxisY(this.svgEl, layout, cp.y);
				}
				if (cp.x.showLabel) {
					cp.x.labelEl = new util.ChartLabelBottom(this.svgEl, layout, cp.x);
				}
				if (cp.x.showAxis) {
					cp.x.axisEl = new util.ChartAxisX(this.svgEl, layout, cp.x);
				}

				cp.chart = cp.chart || {};
				cp.chart.chart = new util.ChartChart(this.svgEl, layout, cp.chart, [null]);

				cp.inset.chart = new module.inset(cp, jqEventSpace, this.recId);
				// no current ability to specify override inset opts
				cp.inset.d3El = new util.ChartInset(this.svgEl, layout, cp.inset);
			});
			this.updateData = function (data) {
				var series = dataToSeries(data, this.cp.series);

				this.fields.forEach(function (field) {
					//field.bindParams({data, series, layout:this.layout});
				});
				var tooltipBuilder = util.tooltipBuilderForFields(this.fields, data, series);
				this.layout.positionZones();
				this.layout.positionZones();

				this.cp.chart && this.cp.chart.chart.gEl.child('lines').run({ data: cp.lines, cp: this.cp });
				this.filteredSeries = series; // SUPERKLUDGE!!!
				/*
	   this.cp.chart && this.cp.chart.chart.gEl
	   		.child('series')
	   			.run({data: series, cp: this.cp});
	   this.cp.chart && this.cp.chart.chart.gEl
	   		.child('series')
	   			.run({data: series, delay: 1000, duration: 1000, cp: this.cp});
	   */
				this.cp.chart && this.cp.chart.chart.gEl.child('series').exit({ data: series, delay: 0, duration: 1000, cp: this.cp });
				this.cp.chart && this.cp.chart.chart.gEl.child('series').update({ data: series, delay: 1000, duration: 1000, cp: this.cp });
				this.cp.chart && this.cp.chart.chart.gEl.child('series').enter({ data: series, delay: 2000, duration: 1000, cp: this.cp });

				//this.cp.inset.d3El.gEl.as('d3').remove();
				this.cp.inset.chart.render(this.data, this.series, data, this.cp.inset, this.layout);
				/*
	   if (this.data.length !== data.length) {
	   	this.cp.inset.chart.render(this.data, this.cp.inset, this.layout);
	   } else {
	   	this.cp.inset.d3El.gEl.as('d3').html('');
	   }
	   */
			};
			this.render = function (data, target, w, h, cp, recId) {
				var _this = this;

				var self = this;
				if (!data.length) return;
				DEBUG && (window.cp = cp);
				var series = dataToSeries(data, cp.series);
				this.data = data;
				this.series = series;
				if (!data.length) {
					// do this some more efficient way
					nodata(this.svgEl.as("d3"));
					return;
				}
				this.fields.forEach(function (field) {
					field.bindParams({ data: data, series: series, layout: _this.layout });
				});
				var tooltipBuilder = util.tooltipBuilderForFields(this.fields, data, series);

				var chart = cp.chart.chart.gEl.as('d3');

				/*
	   var legendWidth = 0;
	   if (cp.legend.show) {
	   	var legend = this.svgEl.as("d3").append("g")
	   		.attr("class", "legend");
	   		var maxWidth = 0;
	   		series.forEach(function (d, i) {
	   		legend.append("rect")
	   			.attr("x", 0)
	   			.attr("y", (i * 15))
	   			.attr("width", 10)
	   			.attr("height", 10)
	   			.style("fill", cp.color.scale(d.name));
	   			var legendItem = legend.append("text")
	   			.attr("x", 12)
	   			.attr("y", (i * 15) + 9)
	   			.text(d.name);
	   		maxWidth = Math.max(legendItem.node().getBBox().width + 12, maxWidth);
	   	});
	   	legend.attr("transform", "translate(" + (this.layout.w() - this.layout.zone('right') - maxWidth) + ",0)")
	   	legendWidth += maxWidth + 5;
	   }
	   */

				this.layout.positionZones();
				this.layout.positionZones();

				if (cp.lines) {
					var lines = cp.chart.chart.gEl.addChild('lines', { tag: 'line',
						classes: ['refline', 'main-chart'],
						data: cp.lines,
						updateCb: function updateCb(selection) {
							var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
							var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
							var thisD3El = arguments[3];

							//var {delay=0, duration=0, transition, cp=self.cp} = opts;
							selection.attr('x1', function (lineOpts) {
								return cp.x.scale(lineOpts.x1(cp.x.scale.domain(), cp.y.scale.domain()));
							}).attr('x2', function (lineOpts) {
								return cp.x.scale(lineOpts.x2(cp.x.scale.domain(), cp.y.scale.domain()));
							}).attr('y1', function (lineOpts) {
								return cp.y.scale(lineOpts.y1(cp.x.scale.domain(), cp.y.scale.domain()));
							}).attr('y2', function (lineOpts) {
								return cp.y.scale(lineOpts.y2(cp.x.scale.domain(), cp.y.scale.domain()));
							}).each(function (lineOpts) {
								var _this2 = this;

								_.each(lineOpts.classes, function (val, key) {
									return d3.select(_this2).classed(key, val);
								});
								_.each(lineOpts.attrs, function (val, key) {
									return d3.select(_this2).attr(key, val);
								});
								_.each(lineOpts.styles, function (val, key) {
									return d3.select(_this2).style(key, val);
								});
							});
						}
					});
				}

				// brush stuff needs to go before dots so tooltips will work
				var orig_x_domain = cp.x.scale.domain();
				var orig_y_domain = cp.y.scale.domain();

				var brush = d3.svg.brush().x(cp.x.scale).y(cp.y.scale).on('brushstart', function () {
					$('.extent').show();
					$('.resize').show();
				});

				var brushEl = cp.chart.chart.gEl.addChild('brush', { tag: 'g',
					classes: ['brush'],
					data: [null]
				});
				brushEl.as('d3').call(brush);

				brush.on('brushend', function () {
					//var s = d3.event.selection;
					// wanted to use https://bl.ocks.org/mbostock/f48fcdb929a620ed97877e4678ab15e6
					// but it's d3.v4

					$('.extent').hide();
					$('.resize').hide();

					var _brush$extent = brush.extent();

					var _brush$extent2 = _slicedToArray(_brush$extent, 2);

					var _brush$extent2$ = _slicedToArray(_brush$extent2[0], 2);

					var x1 = _brush$extent2$[0];
					var y1 = _brush$extent2$[1];

					var _brush$extent2$2 = _slicedToArray(_brush$extent2[1], 2);

					var x2 = _brush$extent2$2[0];
					var y2 = _brush$extent2$2[1];

					$(jqEventSpace).trigger('brush', [{ empty: brush.empty(), x1: x1, x2: x2, y1: y1, y2: y2 }]);
					brush.x(cp.x.scale).y(cp.y.scale);
					return;

					if (brush.empty()) {
						//if (!idleTimeout) return idleTimeout = setTimeout(idled, idleDelay);
						cp.x.scale.domain(orig_x_domain);
						cp.y.scale.domain(orig_y_domain);
					} else {
						cp.x.scale.domain([x1, x2]);
						cp.y.scale.domain([y1, y2]);
						//brushEl.as('d3').call(brush.move, null);
					}

					//cp.x.axisEl.gEl.as('d3').transition().duration(750).call(cp.x.axisEl.axis);
					//cp.y.axisEl.gEl.as('d3').transition().duration(750).call(cp.y.axisEl.axis);
					cp.x.axisEl.gEl.as('d3').call(cp.x.axisEl.axis);
					cp.y.axisEl.gEl.as('d3').call(cp.y.axisEl.axis);

					seriesGs.as('d3').selectAll(".dot")
					/*
	    .transition()
	    .duration(750)
	    */
					.attr("transform", function (d) {
						var xVal = cp.x.scale(cp.x.accessor(d));
						var yVal = cp.y.scale(cp.y.accessor(d));
						return "translate(" + xVal + "," + yVal + ")";
					});
				});

				var focusTip = d3.tip().attr('class', 'd3-tip').offset([-10, 0]).html(tooltipBuilder);
				//.html(cp.tooltip.builder);
				this.svgEl.as("d3").call(focusTip);

				var seriesGs = cp.chart.chart.gEl.addChild('series', { tag: 'g',
					classes: ['series', 'main-chart'],
					//data: [],
					data: series,
					dataKey: function dataKey(d) {
						return d.name;
					},
					exitCb: function exitCb(selection) {
						var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
						var thisD3El = arguments[3];

						//var {delay=0, duration=0, transition} = transitionOpts;
						// since calling child exitCb from
						// here, redundant to call it from d3el.run
						// but it's ok, that one will do nothing
						// because elements will be gone already
						selection.size() && thisD3El.child('dots').exitCb(selection.selectAll('.dot'), cbParams, passParams, thisD3El.child('dots'));
					}
				});
				seriesGs.addChild('dots', { tag: 'path',
					data: function data(d3el) {
						return d3el.parentD3El.selectAllJoin(self.filteredSeries).selectAll([d3el.tag].concat(d3el.classes).join('.')).data(function (d) {
							return d.values;
						}, function (d) {
							return self.recId(d);
						});
					},
					classes: ['dot', 'main-chart'],
					enterCb: function enterCb(selection) {
						var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
						var thisD3El = arguments[3];
						var _passParams$delay = passParams.delay;
						var delay = _passParams$delay === undefined ? 0 : _passParams$delay;
						var _passParams$duration = passParams.duration;
						var duration = _passParams$duration === undefined ? 0 : _passParams$duration;
						var transition = passParams.transition;
						var _passParams$cp = passParams.cp;
						var cp = _passParams$cp === undefined ? self.cp : _passParams$cp;
						//console.log('adding with', opts);


						/*
	      * don't have a way to pass transitions through enter/exit/update
	      * should i?
	      * (whole thing should be simplified)
	     if (transition)
	     	selection = selection.transition(transition);
	     else if (delay || duration)
	     	selection = selection.transition().delay(delay).duration(duration)
	     selection
	     	.transition()
	     	.delay(delay).duration(duration)
	     */

						selection.on('mouseover', focusTip.show).on('mouseout', focusTip.hide)
						//selection
						//.transition(trans)
						.attr("d", function (d) {
							var xVal = 0; //cp.x.scale(cp.x.accessor(d));
							var yVal = 0; //cp.y.scale(cp.y.accessor(d));
							return util.shapePath(cp.shape.accessor(d), xVal, // 0, //options.xValue(d),
							yVal, // 0, //options.yValue(d),
							cp.size.scale(cp.size.accessor(d)));
						}).style("stroke", function (d) {
							// calling with this so default can reach up to parent
							// for series name
							//return cp.color.scale(cp.series.value.call(this, d));
							return cp.color.accessor(d);
						}).transition().attr("transform", function (d) {
							var xVal = (cp.x.scale.range()[1] - cp.x.scale.range()[0]) / 2;
							var yVal = (cp.y.scale.range()[0] - cp.y.scale.range()[1]) / 2;
							return "translate(" + xVal + "," + yVal + ")";
						}).style("opacity", 0).transition().delay(delay).duration(duration).attr("transform", function (d) {
							var xVal = cp.x.scale(cp.x.accessor(d));
							var yVal = cp.y.scale(cp.y.accessor(d));
							//return `translate(${xVal},${yVal}) scale(1,1)`;
							return "translate(" + xVal + "," + yVal + ")";
						}).style("opacity", .8); // OVERRIDES CSS
						if (cp.fill) {
							selection.style('fill', function (d) {
								return cp.fill.accessor(d);
							});
						}
					},
					updateCb: function updateCb(selection) {
						var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
						var thisD3El = arguments[3];

						//var {delay=0, duration=0, transition, cp=self.cp} = opts;
						//console.log('updating with', opts);

						//cp.x.axisEl.gEl.as('d3').transition().duration(duration).call(cp.x.axisEl.axis);
						//cp.y.axisEl.gEl.as('d3').transition().duration(duration).call(cp.y.axisEl.axis);
						cp.x.axisEl.gEl.as('d3').call(cp.x.axisEl.axis);
						cp.y.axisEl.gEl.as('d3').call(cp.y.axisEl.axis);

						selection
						//.selectAll(".dot")
						//.transition()
						//.delay(delay)
						//.duration(duration)
						.attr("transform", function (d) {
							var xVal = cp.x.scale(cp.x.accessor(d));
							var yVal = cp.y.scale(cp.y.accessor(d));
							return "translate(" + xVal + "," + yVal + ")";
						});
					},
					exitCb: function exitCb(selection) {
						var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
						var thisD3El = arguments[3];
						var _passParams$delay2 = passParams.delay;
						var delay = _passParams$delay2 === undefined ? 0 : _passParams$delay2;
						var _passParams$duration2 = passParams.duration;
						var duration = _passParams$duration2 === undefined ? 0 : _passParams$duration2;
						var transition = passParams.transition;

						selection.transition().delay(delay).duration(3000).attr("transform", function (d) {
							var xVal = (cp.x.scale.range()[1] - cp.x.scale.range()[0]) / 2;
							var yVal = (cp.y.scale.range()[0] - cp.y.scale.range()[1]) / 2;
							return "translate(" + xVal + "," + yVal + ")";
						}).style("opacity", 0).remove();
					}
				}
				//,{ delay: 0, duration: 1000, }
				);

				/*
	   series = dataToSeries(data.slice(0,500), cp.series);
	   cp.chart.chart.gEl
	   		.child('series')
	   			.run({data: series, delay: 1500, duration: 2000});
	   */

				return;

				if (cp.series.showLabel) {
					series.append("text").datum(function (d) {
						return {
							name: d.name,
							value: d.values[d.values.length - 1]
						};
					}).attr("transform", function (d) {
						return "translate(" + cp.x.scale(cp.x.accessor(d.value)) + "," + cp.y.scale(cp.y.accessor(d.value)) + ")";
					}).attr("x", 3).attr("dy", 2).style("font-size", "8px").text(function (d) {
						return d.name;
					});
				}

				if (cp.chart.labelIndexDate) {
					chart.append("rect").attr("transform", function () {
						return "translate(" + (indexPoints.x - 0.5) + "," + indexPoints.y + ")";
					}).attr("width", 1).attr("height", this.layout.svgHeight());
				}
			};
		};
		module.inset = function (parentOpts, jqEventSpace, recId) {
			this.recId = recId;
			this.cp = {
				availableDatapointBindings: ['d', 'i', 'j', 'data', 'series', 'allFields', 'layout', 'inset'],
				chart: {},
				/*
	   layout: {
	   	top: { margin: { size: 0}, },
	   	bottom: { margin: { size: 0}, },
	   	left: { margin: { size: 0}, },
	   	right: { margin: { size: 0}, },
	   },
	   */
				x: {
					requiredOptions: ['value'],
					value: function value(d, i, j) {
						return parentOpts.x.accessor(d, i, j);
					},
					//x and y are weird, not sure right settings
					//proxyFor: parentOpts.size, 
					//bindSeparately: false,
					getters: {
						scale: function scale() {
							return this._scale || d3.scale.linear();
						}
					},
					isField: true,
					_accessors: {
						makeScale: {
							func: function func(thisField, data, layout, inset) {
								thisField._scale = d3.scale.linear().domain(parentOpts.x._fullScale.domain()).range([0, inset.d3El.w(layout)]);
							},
							posParams: ['thisField', 'data', 'layout', 'inset'],
							runOnGenerate: true
						}
					}
				},
				y: {
					requiredOptions: ['value'],
					value: function value(d, i, j) {
						return parentOpts.y.accessor(d, i, j);
					},
					//x and y are weird, not sure right settings
					//proxyFor: parentOpts.size, 
					//bindSeparately: false,
					isField: true,
					getters: {
						scale: function scale() {
							return this._scale || d3.scale.linear();
						}
					},
					_accessors: {
						makeScale: {
							func: function func(thisField, data, layout, inset) {
								thisField._scale = d3.scale.linear().domain(parentOpts.y._fullScale.domain()).range([inset.d3El.h(layout), 0]);
							},
							posParams: ['thisField', 'data', 'layout', 'inset'],
							runOnGenerate: true
						}
					}
				},
				size: {
					proxyFor: parentOpts.size,
					bindSeparately: false,
					isField: true,
					needsScale: true,
					_accessors: {
						range: {
							func: function func() {
								return [.5, 8];
							}
						}
					}
				},
				color: {
					proxyFor: parentOpts.color,
					bindSeparately: false,
					isField: true
				},
				shape: {
					proxyFor: parentOpts.shape,
					bindSeparately: false,
					//scale: parentOpts.shape.scale,
					isField: true
				},
				legend: {
					show: false
				},
				series: {
					proxyFor: parentOpts.series,
					bindSeparately: false,
					isField: true
				}
			};
			this.render = function (allData, seriesAll, zoomData, inset, layout) {
				var self = this;
				var cp = this.cp;
				if (!allData.length) return;
				//var seriesAll = dataToSeries(allData, parentOpts.series);
				//var seriesZoom = dataToSeries(zoomData, parentOpts.series);

				var fields = this.fields = _.chain(cp).toPairs().sortBy(function (d) {
					return _.has(d[1], 'bindOrder') ? d[1].bindOrder : 1000;
				}).filter(function (d) {
					return d[1].isField;
				}).map(function () {
					var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

					var _ref2 = _slicedToArray(_ref, 2);

					var name = _ref2[0];
					var opt = _ref2[1];

					if (!(opt instanceof util.Field)) {
						opt = new util.Field(name, opt, cp);
					}
					opt.bindParams({ data: allData, seriesAll: seriesAll, layout: layout, inset: inset, parentOpts: parentOpts });
					return cp[name] = opt;
				}).value();

				var border = inset.d3El.gEl.addChild('border', { tag: 'rect', classes: ['inset-border'],
					updateCb: function updateCb(selection) {
						var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
						var thisD3El = arguments[3];

						selection.attr('width', inset.d3El.w(layout)).attr('height', inset.d3El.h(layout));
					} });
				if (parentOpts.lines) {
					var lines = inset.d3El.gEl.addChild('lines', { tag: 'line',
						classes: ['refline', 'inset'],
						data: parentOpts.lines,
						updateCb: function updateCb(selection) {
							var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
							var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
							var thisD3El = arguments[3];

							//var {delay=0, duration=0, transition, cp=self.cp} = opts;
							selection.attr('x1', function (lineOpts) {
								return cp.x.scale(lineOpts.x1(cp.x.scale.domain(), cp.y.scale.domain()));
							}).attr('x2', function (lineOpts) {
								return cp.x.scale(lineOpts.x2(cp.x.scale.domain(), cp.y.scale.domain()));
							}).attr('y1', function (lineOpts) {
								return cp.y.scale(lineOpts.y1(cp.x.scale.domain(), cp.y.scale.domain()));
							}).attr('y2', function (lineOpts) {
								return cp.y.scale(lineOpts.y2(cp.x.scale.domain(), cp.y.scale.domain()));
							}).each(function (lineOpts) {
								var _this3 = this;

								_.each(lineOpts.classes, function (val, key) {
									return d3.select(_this3).classed(key, val);
								});
								_.each(lineOpts.attrs, function (val, key) {
									return d3.select(_this3).attr(key, val);
								});
								_.each(lineOpts.styles, function (val, key) {
									return d3.select(_this3).style(key, val);
								});
							});
						}
					});
				}
				var seriesGs = inset.d3El.gEl.addChild('series', { tag: 'g',
					classes: ['series', 'inset'],
					data: seriesAll
				});
				seriesGs.addChild('dots', { tag: 'path',
					data: function data(d3el) {
						return d3el.selectAll().data(function (d) {
							return d.values;
						}, function (d) {
							return self.recId(d);
						});
						/* not sure why the above works for inset but not for
	      * main-chart, which requires below, but don't have time
	      * to look into it now
	     return (d3el.parentD3El.selectAllJoin(series)
	     					.selectAll([d3el.tag].concat(d3el.classes).join('.'))
	     					.data(d=>d.values, d=>self.recId(d)));
	     */
					},
					classes: ['dot', 'inset'],
					enterCb: function enterCb(selection) {
						var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
						var thisD3El = arguments[3];

						console.log('adding inset dots', selection.size(), passParams.zoomData.length);
						selection.attr("d", function (d) {
							var xVal = 0; //cp.x.scale(cp.x.accessor(d));
							var yVal = 0; //cp.y.scale(cp.y.accessor(d));
							return util.shapePath(cp.shape.accessor(d), xVal, // 0, //options.xValue(d),
							yVal, // 0, //options.yValue(d),
							cp.size.scale(cp.size.accessor(d)));
						}).attr("transform", function (d) {
							var xVal = cp.x.scale(cp.x.accessor(d));
							var yVal = cp.y.scale(cp.y.accessor(d));
							//return `translate(${xVal},${yVal}) scale(1,1)`;
							return "translate(" + xVal + "," + yVal + ")";
						}).style("stroke", function (d) {
							return cp.color.accessor(d);
						});
						if (cp.fill) {
							selection.style('fill', function (d) {
								return cp.fill.accessor(d);
							});
						}
					},
					updateCb: function updateCb(selection) {
						var cbParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
						var passParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
						var thisD3El = arguments[3];

						//var {delay=0, duration=0, transition, cp=self.cp} = opts;
						//console.log('updating inset dots', selection.size(), passParams.zoomData.length);
						selection.attr("transform", function (d) {
							var xVal = cp.x.scale(cp.x.accessor(d));
							var yVal = cp.y.scale(cp.y.accessor(d));
							return "translate(" + xVal + "," + yVal + ")";
						}).classed('out-of-zoom', function (d) {
							return !_.some(passParams.zoomData, function (z) {
								return self.recId(z) === self.recId(d);
							});
						});
					},
					cbParams: { zoomData: zoomData } }, { zoomData: zoomData } // passParams
				);
				var focusRect = inset.d3El.gEl.addChild('focus', { tag: 'rect', classes: ['inset-focus'],
					updateCb: function updateCb(selection, params) {
						var _parentOpts$x$scale$d = parentOpts.x.scale.domain();

						var _parentOpts$x$scale$d2 = _slicedToArray(_parentOpts$x$scale$d, 2);

						var x1 = _parentOpts$x$scale$d2[0];
						var x2 = _parentOpts$x$scale$d2[1];

						var _parentOpts$y$scale$d = parentOpts.y.scale.domain();

						var _parentOpts$y$scale$d2 = _slicedToArray(_parentOpts$y$scale$d, 2);

						var y1 = _parentOpts$y$scale$d2[0];
						var y2 = _parentOpts$y$scale$d2[1];

						var w = cp.x.scale(x2) - cp.x.scale(x1);
						var h = cp.y.scale(y1) - cp.y.scale(y2);
						selection.attr('x', cp.x.scale(x1)).attr('y', cp.y.scale(y2)).attr('width', w).attr('height', h);
					} });
			};
		};

		module.trellisline = function () {
			var self = this;

			self.render = function (dataByTrellis, target, w, h, options) {
				var defaults = {
					margin: {
						top: 10,
						right: 10,
						bottom: 10,
						left: 10

					},
					trellisSet: d3.keys(dataByTrellis),
					xFormat: d3.format('d'),
					yFormat: d3.format('d'),
					interpolate: "linear",
					colors: d3.scale.category10()
				};

				var options = $.extend({}, defaults, options);

				var bisect = d3.bisector(function (d) {
					return d.date;
				}).left;
				var minDate = d3.min(dataByTrellis, function (trellis) {
					return d3.min(trellis.values, function (series) {
						return d3.min(series.values, function (d) {
							return d.date;
						});
					});
				}),
				    maxDate = d3.max(dataByTrellis, function (trellis) {
					return d3.max(trellis.values, function (series) {
						return d3.max(series.values, function (d) {
							return d.date;
						});
					});
				});

				var minY = d3.min(dataByTrellis, function (trellis) {
					return d3.min(trellis.values, function (series) {
						return d3.min(series.values, function (d) {
							return d.Y_PREVALENCE_1000PP === 0 || d.Y_PREVALENCE_1000PP ? d.Y_PREVALENCE_1000PP : d.yPrevalence1000Pp;
						});
					});
				}),
				    maxY = d3.max(dataByTrellis, function (trellis) {
					return d3.max(trellis.values, function (series) {
						return d3.max(series.values, function (d) {
							return d.Y_PREVALENCE_1000PP === 0 || d.Y_PREVALENCE_1000PP ? d.Y_PREVALENCE_1000PP : d.yPrevalence1000Pp;
						});
					});
				});

				var margin = options.margin;

				var chart = d3.select(target).append("svg:svg").attr("width", w).attr("height", h).attr("viewBox", "0 0 " + w + " " + h).append("g").attr("transform", function (d) {
					return "translate(" + margin.left + "," + margin.top + ")";
				});

				var seriesLabel;
				var seriesLabelHeight = 0;
				if (options.seriesLabel) {
					seriesLabel = chart.append("g");
					seriesLabel.append("text").attr("class", "axislabel").style("text-anchor", "middle").attr("dy", ".79em").text(options.seriesLabel);
					if (seriesLabelHeight = seriesLabel.node()) {
						seriesLabelHeight = seriesLabel.node().getBBox().height + 10;
					}
				}

				var trellisLabel;
				var trellisLabelHeight = 0;
				if (options.trellisLabel) {
					trellisLabel = chart.append("g");
					trellisLabel.append("text").attr("class", "axislabel").style("text-anchor", "middle").attr("dy", ".79em").text(options.trellisLabel);
					trellisLabelHeight = trellisLabel.node().getBBox().height + 10;
				}

				// simulate a single trellis heading
				var trellisHeading;
				var trellisHeadingHeight = 0;
				trellisHeading = chart.append("g").attr("class", "g-label-trellis");
				trellisHeading.append("text").text(options.trellisSet.join(""));
				trellisHeadingHeight = trellisHeading.node().getBBox().height + 10;
				trellisHeading.remove();

				var yAxisLabel;
				var yAxisLabelWidth = 0;
				if (options.yLabel) {
					yAxisLabel = chart.append("g");
					yAxisLabel.append("text").attr("class", "axislabel").style("text-anchor", "middle").text(options.yLabel);
					yAxisLabelWidth = yAxisLabel.node().getBBox().height + 4;
				}

				// calculate an intial width and height that does not take into account the tick text dimensions
				var width = w - options.margin.left - yAxisLabelWidth - options.margin.right;
				var height = h - options.margin.top - trellisLabelHeight - trellisHeadingHeight - seriesLabelHeight - options.margin.bottom;

				var trellisScale = d3.scale.ordinal().domain(options.trellisSet).rangeBands([0, width], .25, .2);

				var seriesScale = d3.time.scale().domain([minDate, maxDate]).range([0, trellisScale.rangeBand()]);

				var yScale = d3.scale.linear().domain([minY, maxY]).range([height, 0]);

				var yAxis = d3.svg.axis().scale(yScale).tickFormat(options.yFormat).ticks(4).orient("left");

				// create temporary x axis
				var xAxis = d3.svg.axis().scale(seriesScale).orient("bottom");

				var tempXAxis = chart.append("g").attr("class", "axis");
				tempXAxis.call(xAxis);

				// update width & height based on temp xaxis dimension and remove
				var xAxisHeight = Math.round(tempXAxis.node().getBBox().height);
				var xAxisWidth = Math.round(tempXAxis.node().getBBox().width);
				height = height - xAxisHeight;
				width = width - Math.max(0, xAxisWidth - width); // trim width if xAxisWidth bleeds over the allocated width.
				tempXAxis.remove();

				// create temporary y axis
				var tempYAxis = chart.append("g").attr("class", "axis");
				tempYAxis.call(yAxis);

				// update width based on temp yaxis dimension and remove
				var yAxisWidth = Math.round(tempYAxis.node().getBBox().width);
				width = width - yAxisWidth;
				tempYAxis.remove();

				// reset axis ranges
				trellisScale.rangeBands([0, width], .25, .2);
				seriesScale.range([0, trellisScale.rangeBand()]);
				yScale.range([height, 0]);

				if (options.trellisLabel) {
					trellisLabel.attr("transform", "translate(" + (width / 2 + margin.left) + ",0)");
				}

				if (options.seriesLabel) {
					seriesLabel.attr("transform", "translate(" + (width / 2 + margin.left) + "," + (trellisLabelHeight + height + xAxisHeight + seriesLabelHeight) + ")");
				}

				if (options.yLabel) {
					yAxisLabel.attr("transform", "translate(" + margin.left + "," + (height / 2 + trellisLabelHeight + trellisHeadingHeight) + ")");
					yAxisLabel.select("text").attr("transform", "rotate(-90)");
				}

				var seriesLine = d3.svg.line().x(function (d) {
					return seriesScale(d.date);
				}).y(function (d) {
					return yScale(d.Y_PREVALENCE_1000PP === 0 || d.Y_PREVALENCE_1000PP ? d.Y_PREVALENCE_1000PP : d.yPrevalence1000Pp);
				}).interpolate(options.interpolate);

				var vis = chart.append("g").attr("transform", function (d) {
					return "translate(" + (yAxisLabelWidth + yAxisWidth) + "," + trellisLabelHeight + ")";
				});

				var gTrellis = vis.selectAll(".g-trellis").data(trellisScale.domain()).enter().append("g").attr("class", "g-trellis").attr("transform", function (d) {
					return "translate(" + trellisScale(d) + "," + trellisHeadingHeight + ")";
				});

				var seriesGuideXAxis = d3.svg.axis().scale(seriesScale).tickFormat("").tickSize(-height).orient("bottom");

				var seriesGuideYAxis = d3.svg.axis().scale(yScale).tickFormat("").tickSize(-trellisScale.rangeBand()).ticks(8).orient("left");

				gTrellis.append("g").attr("class", "x-guide").attr("transform", "translate(0," + height + ")").call(seriesGuideXAxis);

				gTrellis.append("g").attr("class", "y-guide").call(seriesGuideYAxis);

				gSeries = gTrellis.selectAll(".g-series").data(function (trellis) {
					var seriesData = dataByTrellis.filter(function (e) {
						return e.key == trellis;
					});
					if (seriesData.length > 0) return seriesData[0].values;else return [];
				}).enter().append("g").attr("class", "g-series lineplot");

				gSeries.append("path").attr("class", "line").attr("d", function (d) {
					return seriesLine(d.values.sort(function (a, b) {
						return d3.ascending(a.date, b.date);
					}));
				}).style("stroke", function (d) {
					return options.colors(d.key);
				});

				gSeries.append("circle").attr("class", "g-value").attr("transform", function (d) {
					if (v && v[v.length - 1] && v[v.length - 1].date && v[v.length - 1] && (v[v.length - 1].Y_PREVALENCE_1000PP || v[v.length - 1].yPrevalence1000Pp)) {
						var v = d.values;
						var yValue = v[v.length - 1].Y_PREVALENCE_1000PP === 0 || v[v.length - 1].Y_PREVALENCE_1000PP ? v[v.length - 1].Y_PREVALENCE_1000PP : v[v.length - 1].yPrevalence1000Pp;
						return "translate(" + seriesScale(v[v.length - 1].date) + "," + yScale(yValue) + ")";
					}
					return "translate(0,0)";
				}).attr("r", 2.5).style("display", "none");

				gSeries.append("text").attr("class", "g-label-value g-start").call(valueLabel, minDate);

				gSeries.append("text").attr("class", "g-label-value g-end").call(valueLabel, maxDate);

				gTrellis.append("text").attr("class", "g-label-year g-start").attr("dy", ".71em").call(yearLabel, minDate);

				gTrellis.append("text").attr("class", "g-label-year g-end").attr("dy", ".71em").call(yearLabel, maxDate);

				gTrellis.append("g").attr("class", "x axis").append("line").attr("x2", trellisScale.rangeBand()).attr("y1", yScale(minY)).attr("y2", yScale(minY));

				gTrellis.append("g").attr("class", "g-label-trellis").attr("transform", function (d) {
					return "translate(" + trellisScale.rangeBand() / 2 + ",0)";
				}).append("text").attr("dy", "-1em").style("text-anchor", "middle").text(function (d) {
					return d;
				});

				gTrellis.append("rect").attr("class", "g-overlay").attr("x", -4).attr("width", trellisScale.rangeBand() + 8).attr("height", height + 18).on("mouseover", mouseover).on("mousemove", mousemove).on("mouseout", mouseout);

				d3.select(gTrellis[0][0]).append("g").attr("class", "y axis").attr("transform", "translate(-4,0)").call(yAxis);

				chart.call(renderLegend);

				$(window).on("resize", {
					container: $(target),
					chart: $(target + " svg"),
					aspect: w / h
				}, function (event) {
					var targetWidth = event.data.container.width();
					var targetHeight = Math.round(targetWidth / event.data.aspect);
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", targetHeight);
				}).trigger("resize");

				function mouseover() {
					gTrellis.selectAll(".g-end").style("display", "none");
					gTrellis.selectAll(".g-value").style("display", null);
					mousemove.call(this);
				}

				function mousemove() {
					var date = seriesScale.invert(d3.mouse(this)[0]);
					gTrellis.selectAll(".g-label-value.g-start").call(valueLabel, date);
					gTrellis.selectAll(".g-label-year.g-start").call(yearLabel, date);
					gTrellis.selectAll(".g-value").attr("transform", function (d) {
						var s = d.values;
						if (s) {
							var v = s[bisect(s, date, 0, s.length - 1)];
							var yValue = v.Y_PREVALENCE_1000PP === 0 || v.Y_PREVALENCE_1000PP ? v.Y_PREVALENCE_1000PP : v.yPrevalence1000Pp;
							if (v && v.date) {
								return "translate(" + seriesScale(v.date) + "," + yScale(yValue) + ")";
							} else {
								return "translate(0,0);";
							}
						}
					});
				}

				function mouseout() {
					gTrellis.selectAll(".g-end").style("display", null);
					gTrellis.selectAll(".g-label-value.g-start").call(valueLabel, minDate);
					gTrellis.selectAll(".g-label-year.g-start").call(yearLabel, minDate);
					gTrellis.selectAll(".g-label-year.g-end").call(yearLabel, maxDate);
					gTrellis.selectAll(".g-value").style("display", "none");
				}

				function valueLabel(text, date) {
					var offsetScale = d3.scale.linear().domain(seriesScale.range());

					text.each(function (d) {

						var text = d3.select(this),
						    s = d.values,
						    i = bisect(s, date, 0, s.length - 1),
						    j = Math.round(i / (s.length - 1) * (s.length - 12)),
						    v = s[i];
						if (v && v.date) {
							var x = seriesScale(v.date);

							text.attr("dy", null).attr("y", -4);
							var yValue = v.Y_PREVALENCE_1000PP === 0 || v.Y_PREVALENCE_1000PP ? v.Y_PREVALENCE_1000PP : v.yPrevalence1000Pp;
							text.text(options.yFormat(yValue)).attr("transform", "translate(" + offsetScale.range([0, trellisScale.rangeBand() - this.getComputedTextLength()])(x) + "," + yScale(d3.max(s.slice(j, j + 12), function (d) {
								return yValue;
							})) + ")");
						}
					});
				}

				function yearLabel(text, date) {

					var offsetScale = d3.scale.linear().domain(seriesScale.range());
					// derive the x vale by using the first trellis/series set of values.
					// All series are assumed to contain the same domain of X values.
					var s = dataByTrellis[0].values[0].values,
					    v = s[bisect(s, date, 0, s.length - 1)];
					if (v && v.date) {
						var x = seriesScale(v.date);

						text.each(function (d) {
							d3.select(this).text(v.date.getFullYear()).attr("transform", "translate(" + offsetScale.range([0, trellisScale.rangeBand() - this.getComputedTextLength()])(x) + "," + (height + 6) + ")").style("display", null);
						});
					}
				}

				function renderLegend(g) {
					var offset = 0;
					options.colors.domain().forEach(function (d) {
						var legendItem = g.append("g").attr("class", "trellisLegend");

						var legendText = legendItem.append("text").text(d);

						var textBBox = legendItem.node().getBBox();

						legendText.attr("x", 12).attr("y", textBBox.height);

						legendItem.append("line").attr("x1", 0).attr("y1", 10).attr("x2", 10).attr("y2", 10).style("stroke", options.colors(d));

						legendItem.attr("transform", "translate(" + offset + ",0)");
						offset += legendItem.node().getBBox().width + 5;
					});
				}
			};
		};

		module.treemap = function () {
			var self = this;

			var root,
			    node,
			    nodes,
			    treemap,
			    svg,
			    x,
			    y,
			    current_depth = 0,
			    container;

			this.render = function (data, target, width, height, options) {
				container = $(target);
				container.find('.treemap_zoomtarget').text('');

				root = data;
				x = d3.scale.linear().range([0, width]);
				y = d3.scale.linear().range([0, height]);

				treemap = d3.layout.treemap().round(false).size([width, height]).sticky(true).value(function (d) {
					return options.getsizevalue(d);
				});

				svg = d3.select(target).append("svg:svg").attr("width", width).attr("height", height).attr("viewBox", "0 0 " + width + " " + height).append("svg:g");

				nodes = treemap.nodes(data).filter(function (d) {
					return options.getsizevalue(d);
				});

				var extent = d3.extent(nodes, function (d) {
					return options.getcolorvalue(d);
				});
				var median = d3.median(nodes, function (d) {
					return options.getcolorvalue(d);
				});

				var colorRange;
				if (options.getcolorrange) {
					colorRange = options.getcolorrange();
				} else {
					colorRange = ["#E4FF7A", "#FC7F00"];
				}

				var colorScale = [extent[0], median, extent[1]];
				if (options.getcolorscale) {
					colorScale = options.getcolorscale();
				}
				var color = d3.scale.linear().domain(colorScale).range(colorRange);

				var cell = svg.selectAll("g").data(nodes).enter().append("svg:g").attr("class", "cell").attr("transform", function (d) {
					return "translate(" + d.x + "," + d.y + ")";
				});

				cell.append("svg:rect").attr("width", function (d) {
					return Math.max(0, d.dx - 1);
				}).attr("height", function (d) {
					return Math.max(0, d.dy - 1);
				}).attr("id", function (d) {
					return d.id;
				}).style("fill", function (d) {
					return color(options.getcolorvalue(d));
				}).attr("data-container", "body").attr("data-toggle", "popover").attr("data-trigger", "hover").attr("data-placement", "top").attr("data-html", true).attr("data-title", function (d) {
					return options.gettitle(d);
				}).attr("data-content", function (d) {
					return options.getcontent(d);
				}).on('click', function (d) {
					if (d3.event.altKey) {
						zoom(root);
						applyGroupers(root);
					} else if (d3.event.ctrlKey) {
						var target = d;

						while (target.depth != current_depth + 1) {
							target = target.parent;
						}
						current_depth = target.depth;
						if (target.children && target.children.length > 1) {
							applyGroupers(target);
							zoom(target);
						} else {
							current_depth = 0;
							applyGroupers(root);
							zoom(root);
						}
					} else {
						options.onclick(d);
					}
				});

				applyGroupers(root);
				$('.grouper').show();

				$(window).on("resize", {
					container: $(target),
					chart: $(target + " svg"),
					aspect: width / height
				}, function (event) {
					var targetWidth = event.data.container.width();
					event.data.chart.attr("width", targetWidth);
					event.data.chart.attr("height", Math.round(targetWidth / event.data.aspect));
				}).trigger("resize");

				function zoom(d) {
					var kx = width / d.dx,
					    ky = height / d.dy;
					x.domain([d.x, d.x + d.dx]);
					y.domain([d.y, d.y + d.dy]);

					if (d.name == 'root') {
						container.find('.treemap_zoomtarget').text('');
					} else {
						current_zoom_caption = container.find('.treemap_zoomtarget').text();
						container.find('.treemap_zoomtarget').text(current_zoom_caption + ' > ' + d.name);
					}

					var t = svg.selectAll("g.cell,.grouper").transition().duration(750).attr("transform", function (d) {
						return "translate(" + x(d.x) + "," + y(d.y) + ")";
					}).each("end", function () {
						$('.grouper').show();
					});

					// patched to prevent negative value assignment to width and height
					t.select("rect").attr("width", function (d) {
						return Math.max(0, kx * d.dx - 1);
					}).attr("height", function (d) {
						return Math.max(0, ky * d.dy - 1);
					});

					node = d;
					d3.event.stopPropagation();
				}

				function applyGroupers(target) {
					var kx, ky;

					kx = width / target.dx;
					ky = height / target.dy;

					$('.grouper').remove();

					var top_nodes = treemap.nodes(target).filter(function (d) {
						return d.parent == target;
					});

					var groupers = svg.selectAll(".grouper").data(top_nodes).enter().append("svg:g").attr("class", "grouper").attr("transform", function (d) {
						return "translate(" + (d.x + 1) + "," + (d.y + 1) + ")";
					});

					groupers.append("svg:rect").attr("width", function (d) {
						return Math.max(0, kx * d.dx - 1);
					}).attr("height", function (d) {
						return Math.max(0, ky * d.dy - 1);
					}).attr("title", function (d) {
						return d.name;
					}).attr("id", function (d) {
						return d.id;
					});
				}
			};
		};

		return module;
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global, module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};/**
	 * @license
	 * lodash <https://lodash.com/>
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */;(function(){/** Used as a safe reference for `undefined` in pre-ES5 environments. */var undefined;/** Used as the semantic version number. */var VERSION='4.15.0';/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used as the internal argument placeholder. */var PLACEHOLDER='__lodash_placeholder__';/** Used to compose bitmasks for function metadata. */var BIND_FLAG=1,BIND_KEY_FLAG=2,CURRY_BOUND_FLAG=4,CURRY_FLAG=8,CURRY_RIGHT_FLAG=16,PARTIAL_FLAG=32,PARTIAL_RIGHT_FLAG=64,ARY_FLAG=128,REARG_FLAG=256,FLIP_FLAG=512;/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/** Used as default options for `_.truncate`. */var DEFAULT_TRUNC_LENGTH=30,DEFAULT_TRUNC_OMISSION='...';/** Used to detect hot functions by number of calls within a span of milliseconds. */var HOT_COUNT=150,HOT_SPAN=16;/** Used to indicate the type of lazy iteratees. */var LAZY_FILTER_FLAG=1,LAZY_MAP_FLAG=2,LAZY_WHILE_FLAG=3;/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_SAFE_INTEGER=9007199254740991,MAX_INTEGER=1.7976931348623157e+308,NAN=0/0;/** Used as references for the maximum length and index of an array. */var MAX_ARRAY_LENGTH=4294967295,MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;/** Used to associate wrap methods with their bit flags. */var wrapFlags=[['ary',ARY_FLAG],['bind',BIND_FLAG],['bindKey',BIND_KEY_FLAG],['curry',CURRY_FLAG],['curryRight',CURRY_RIGHT_FLAG],['flip',FLIP_FLAG],['partial',PARTIAL_FLAG],['partialRight',PARTIAL_RIGHT_FLAG],['rearg',REARG_FLAG]];/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',genTag='[object GeneratorFunction]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',promiseTag='[object Promise]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]',weakMapTag='[object WeakMap]',weakSetTag='[object WeakSet]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to match empty string literals in compiled template source. */var reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;/** Used to match HTML entities and HTML characters. */var reEscapedHtml=/&(?:amp|lt|gt|quot|#39|#96);/g,reUnescapedHtml=/[&<>"'`]/g,reHasEscapedHtml=RegExp(reEscapedHtml.source),reHasUnescapedHtml=RegExp(reUnescapedHtml.source);/** Used to match template delimiters. */var reEscape=/<%-([\s\S]+?)%>/g,reEvaluate=/<%([\s\S]+?)%>/g,reInterpolate=/<%=([\s\S]+?)%>/g;/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/,reLeadingDot=/^\./,rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;/**
	   * Used to match `RegExp`
	   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	   */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,reHasRegExpChar=RegExp(reRegExpChar.source);/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g,reTrimStart=/^\s+/,reTrimEnd=/\s+$/;/** Used to match wrap detail comments. */var reWrapComment=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,reWrapDetails=/\{\n\/\* \[wrapped with (.+)\] \*/,reSplitDetails=/,? & /;/** Used to match words composed of alphanumeric characters. */var reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
	   * Used to match
	   * [ES template delimiters](http://ecma-international.org/ecma-262/7.0/#sec-template-literal-lexical-components).
	   */var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;/** Used to match `RegExp` flags from their coerced string values. */var reFlags=/\w*$/;/** Used to detect hexadecimal string values. */var reHasHexPrefix=/^0x/i;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/** Used to match Latin Unicode letters (excluding mathematical operators). */var reLatin=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;/** Used to ensure capturing order of template delimiters. */var reNoMatch=/($^)/;/** Used to match unescaped characters in compiled string literals. */var reUnescapedString=/['\n\r\u2028\u2029\\]/g;/** Used to compose unicode character classes. */var rsAstralRange='\\ud800-\\udfff',rsComboMarksRange='\\u0300-\\u036f\\ufe20-\\ufe23',rsComboSymbolsRange='\\u20d0-\\u20f0',rsDingbatRange='\\u2700-\\u27bf',rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',rsMathOpRange='\\xac\\xb1\\xd7\\xf7',rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',rsPunctuationRange='\\u2000-\\u206f',rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',rsVarRange='\\ufe0e\\ufe0f',rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;/** Used to compose unicode capture groups. */var rsApos='[\'\u2019]',rsAstral='['+rsAstralRange+']',rsBreak='['+rsBreakRange+']',rsCombo='['+rsComboMarksRange+rsComboSymbolsRange+']',rsDigits='\\d+',rsDingbat='['+rsDingbatRange+']',rsLower='['+rsLowerRange+']',rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',rsFitz='\\ud83c[\\udffb-\\udfff]',rsModifier='(?:'+rsCombo+'|'+rsFitz+')',rsNonAstral='[^'+rsAstralRange+']',rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',rsUpper='['+rsUpperRange+']',rsZWJ='\\u200d';/** Used to compose unicode regexes. */var rsLowerMisc='(?:'+rsLower+'|'+rsMisc+')',rsUpperMisc='(?:'+rsUpper+'|'+rsMisc+')',rsOptLowerContr='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',rsOptUpperContr='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',reOptMod=rsModifier+'?',rsOptVar='['+rsVarRange+']?',rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',rsSeq=rsOptVar+reOptMod+rsOptJoin,rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';/** Used to match apostrophes. */var reApos=RegExp(rsApos,'g');/**
	   * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	   * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	   */var reComboMark=RegExp(rsCombo,'g');/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */var reUnicode=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');/** Used to match complex or compound words. */var reUnicodeWord=RegExp([rsUpper+'?'+rsLower+'+'+rsOptLowerContr+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',rsUpperMisc+'+'+rsOptUpperContr+'(?='+[rsBreak,rsUpper+rsLowerMisc,'$'].join('|')+')',rsUpper+'?'+rsLowerMisc+'+'+rsOptLowerContr,rsUpper+'+'+rsOptUpperContr,rsDigits,rsEmoji].join('|'),'g');/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */var reHasUnicode=RegExp('['+rsZWJ+rsAstralRange+rsComboMarksRange+rsComboSymbolsRange+rsVarRange+']');/** Used to detect strings that need a more robust regexp to match words. */var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;/** Used to assign default `context` object properties. */var contextProps=['Array','Buffer','DataView','Date','Error','Float32Array','Float64Array','Function','Int8Array','Int16Array','Int32Array','Map','Math','Object','Promise','RegExp','Set','String','Symbol','TypeError','Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap','_','clearTimeout','isFinite','parseInt','setTimeout'];/** Used to make template sourceURLs easier to identify. */var templateCounter=-1;/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used to identify `toStringTag` values supported by `_.clone`. */var cloneableTags={};cloneableTags[argsTag]=cloneableTags[arrayTag]=cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=cloneableTags[boolTag]=cloneableTags[dateTag]=cloneableTags[float32Tag]=cloneableTags[float64Tag]=cloneableTags[int8Tag]=cloneableTags[int16Tag]=cloneableTags[int32Tag]=cloneableTags[mapTag]=cloneableTags[numberTag]=cloneableTags[objectTag]=cloneableTags[regexpTag]=cloneableTags[setTag]=cloneableTags[stringTag]=cloneableTags[symbolTag]=cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;cloneableTags[errorTag]=cloneableTags[funcTag]=cloneableTags[weakMapTag]=false;/** Used to map Latin Unicode letters to basic Latin letters. */var deburredLetters={// Latin-1 Supplement block.
	'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A','\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a','\xc7':'C','\xe7':'c','\xd0':'D','\xf0':'d','\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E','\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e','\xcc':'I','\xcd':'I','\xce':'I','\xcf':'I','\xec':'i','\xed':'i','\xee':'i','\xef':'i','\xd1':'N','\xf1':'n','\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O','\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o','\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U','\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u','\xdd':'Y','\xfd':'y','\xff':'y','\xc6':'Ae','\xe6':'ae','\xde':'Th','\xfe':'th','\xdf':'ss',// Latin Extended-A block.
	'\u0100':'A','\u0102':'A','\u0104':'A','\u0101':'a','\u0103':'a','\u0105':'a','\u0106':'C','\u0108':'C','\u010A':'C','\u010C':'C','\u0107':'c','\u0109':'c','\u010B':'c','\u010D':'c','\u010E':'D','\u0110':'D','\u010F':'d','\u0111':'d','\u0112':'E','\u0114':'E','\u0116':'E','\u0118':'E','\u011A':'E','\u0113':'e','\u0115':'e','\u0117':'e','\u0119':'e','\u011B':'e','\u011C':'G','\u011E':'G','\u0120':'G','\u0122':'G','\u011D':'g','\u011F':'g','\u0121':'g','\u0123':'g','\u0124':'H','\u0126':'H','\u0125':'h','\u0127':'h','\u0128':'I','\u012A':'I','\u012C':'I','\u012E':'I','\u0130':'I','\u0129':'i','\u012B':'i','\u012D':'i','\u012F':'i','\u0131':'i','\u0134':'J','\u0135':'j','\u0136':'K','\u0137':'k','\u0138':'k','\u0139':'L','\u013B':'L','\u013D':'L','\u013F':'L','\u0141':'L','\u013A':'l','\u013C':'l','\u013E':'l','\u0140':'l','\u0142':'l','\u0143':'N','\u0145':'N','\u0147':'N','\u014A':'N','\u0144':'n','\u0146':'n','\u0148':'n','\u014B':'n','\u014C':'O','\u014E':'O','\u0150':'O','\u014D':'o','\u014F':'o','\u0151':'o','\u0154':'R','\u0156':'R','\u0158':'R','\u0155':'r','\u0157':'r','\u0159':'r','\u015A':'S','\u015C':'S','\u015E':'S','\u0160':'S','\u015B':'s','\u015D':'s','\u015F':'s','\u0161':'s','\u0162':'T','\u0164':'T','\u0166':'T','\u0163':'t','\u0165':'t','\u0167':'t','\u0168':'U','\u016A':'U','\u016C':'U','\u016E':'U','\u0170':'U','\u0172':'U','\u0169':'u','\u016B':'u','\u016D':'u','\u016F':'u','\u0171':'u','\u0173':'u','\u0174':'W','\u0175':'w','\u0176':'Y','\u0177':'y','\u0178':'Y','\u0179':'Z','\u017B':'Z','\u017D':'Z','\u017A':'z','\u017C':'z','\u017E':'z','\u0132':'IJ','\u0133':'ij','\u0152':'Oe','\u0153':'oe','\u0149':"'n",'\u017F':'ss'};/** Used to map characters to HTML entities. */var htmlEscapes={'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;'};/** Used to map HTML entities to characters. */var htmlUnescapes={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&#39;':"'",'&#96;':'`'};/** Used to escape characters for inclusion in compiled string literals. */var stringEscapes={'\\':'\\',"'":"'",'\n':'n','\r':'r','\u2028':'u2028','\u2029':'u2029'};/** Built-in method references without a dependency on `root`. */var freeParseFloat=parseFloat,freeParseInt=parseInt;/** Detect free variable `global` from Node.js. */var freeGlobal=(typeof global==='undefined'?'undefined':_typeof(global))=='object'&&global&&global.Object===Object&&global;/** Detect free variable `self`. */var freeSelf=(typeof self==='undefined'?'undefined':_typeof(self))=='object'&&self&&self.Object===Object&&self;/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||Function('return this')();/** Detect free variable `exports`. */var freeExports=( false?'undefined':_typeof(exports))=='object'&&exports&&!exports.nodeType&&exports;/** Detect free variable `module`. */var freeModule=freeExports&&( false?'undefined':_typeof(module))=='object'&&module&&!module.nodeType&&module;/** Detect the popular CommonJS extension `module.exports`. */var moduleExports=freeModule&&freeModule.exports===freeExports;/** Detect free variable `process` from Node.js. */var freeProcess=moduleExports&&freeGlobal.process;/** Used to access faster Node.js helpers. */var nodeUtil=function(){try{return freeProcess&&freeProcess.binding('util');}catch(e){}}();/* Node.js helper references. */var nodeIsArrayBuffer=nodeUtil&&nodeUtil.isArrayBuffer,nodeIsDate=nodeUtil&&nodeUtil.isDate,nodeIsMap=nodeUtil&&nodeUtil.isMap,nodeIsRegExp=nodeUtil&&nodeUtil.isRegExp,nodeIsSet=nodeUtil&&nodeUtil.isSet,nodeIsTypedArray=nodeUtil&&nodeUtil.isTypedArray;/*--------------------------------------------------------------------------*//**
	   * Adds the key-value `pair` to `map`.
	   *
	   * @private
	   * @param {Object} map The map to modify.
	   * @param {Array} pair The key-value pair to add.
	   * @returns {Object} Returns `map`.
	   */function addMapEntry(map,pair){// Don't return `map.set` because it's not chainable in IE 11.
	map.set(pair[0],pair[1]);return map;}/**
	   * Adds `value` to `set`.
	   *
	   * @private
	   * @param {Object} set The set to modify.
	   * @param {*} value The value to add.
	   * @returns {Object} Returns `set`.
	   */function addSetEntry(set,value){// Don't return `set.add` because it's not chainable in IE 11.
	set.add(value);return set;}/**
	   * A faster alternative to `Function#apply`, this function invokes `func`
	   * with the `this` binding of `thisArg` and the arguments of `args`.
	   *
	   * @private
	   * @param {Function} func The function to invoke.
	   * @param {*} thisArg The `this` binding of `func`.
	   * @param {Array} args The arguments to invoke `func` with.
	   * @returns {*} Returns the result of `func`.
	   */function apply(func,thisArg,args){switch(args.length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}/**
	   * A specialized version of `baseAggregator` for arrays.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} setter The function to set `accumulator` values.
	   * @param {Function} iteratee The iteratee to transform keys.
	   * @param {Object} accumulator The initial aggregated object.
	   * @returns {Function} Returns `accumulator`.
	   */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array?array.length:0;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}/**
	   * A specialized version of `_.forEach` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEach(array,iteratee){var index=-1,length=array?array.length:0;while(++index<length){if(iteratee(array[index],index,array)===false){break;}}return array;}/**
	   * A specialized version of `_.forEachRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns `array`.
	   */function arrayEachRight(array,iteratee){var length=array?array.length:0;while(length--){if(iteratee(array[length],length,array)===false){break;}}return array;}/**
	   * A specialized version of `_.every` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if all elements pass the predicate check,
	   *  else `false`.
	   */function arrayEvery(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(!predicate(array[index],index,array)){return false;}}return true;}/**
	   * A specialized version of `_.filter` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {Array} Returns the new filtered array.
	   */function arrayFilter(array,predicate){var index=-1,length=array?array.length:0,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}/**
	   * A specialized version of `_.includes` for arrays without support for
	   * specifying an index to search from.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludes(array,value){var length=array?array.length:0;return!!length&&baseIndexOf(array,value,0)>-1;}/**
	   * This function is like `arrayIncludes` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} [array] The array to inspect.
	   * @param {*} target The value to search for.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {boolean} Returns `true` if `target` is found, else `false`.
	   */function arrayIncludesWith(array,value,comparator){var index=-1,length=array?array.length:0;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}/**
	   * A specialized version of `_.map` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the new mapped array.
	   */function arrayMap(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}/**
	   * Appends the elements of `values` to `array`.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {Array} values The values to append.
	   * @returns {Array} Returns `array`.
	   */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}/**
	   * A specialized version of `_.reduce` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the first element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduce(array,iteratee,accumulator,initAccum){var index=-1,length=array?array.length:0;if(initAccum&&length){accumulator=array[++index];}while(++index<length){accumulator=iteratee(accumulator,array[index],index,array);}return accumulator;}/**
	   * A specialized version of `_.reduceRight` for arrays without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} [accumulator] The initial value.
	   * @param {boolean} [initAccum] Specify using the last element of `array` as
	   *  the initial value.
	   * @returns {*} Returns the accumulated value.
	   */function arrayReduceRight(array,iteratee,accumulator,initAccum){var length=array?array.length:0;if(initAccum&&length){accumulator=array[--length];}while(length--){accumulator=iteratee(accumulator,array[length],length,array);}return accumulator;}/**
	   * A specialized version of `_.some` for arrays without support for iteratee
	   * shorthands.
	   *
	   * @private
	   * @param {Array} [array] The array to iterate over.
	   * @param {Function} predicate The function invoked per iteration.
	   * @returns {boolean} Returns `true` if any element passes the predicate check,
	   *  else `false`.
	   */function arraySome(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}/**
	   * Gets the size of an ASCII `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */var asciiSize=baseProperty('length');/**
	   * Converts an ASCII `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function asciiToArray(string){return string.split('');}/**
	   * Splits an ASCII `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function asciiWords(string){return string.match(reAsciiWord)||[];}/**
	   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
	   * without support for iteratee shorthands, which iterates over `collection`
	   * using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the found element or its key, else `undefined`.
	   */function baseFindKey(collection,predicate,eachFunc){var result;eachFunc(collection,function(value,key,collection){if(predicate(value,key,collection)){result=key;return false;}});return result;}/**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseFindIndex(array,predicate,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){if(predicate(array[index],index,array)){return index;}}return-1;}/**
	   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOf(array,value,fromIndex){if(value!==value){return baseFindIndex(array,baseIsNaN,fromIndex);}var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}/**
	   * This function is like `baseIndexOf` except that it accepts a comparator.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @param {Function} comparator The comparator invoked per element.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */function baseIndexOfWith(array,value,fromIndex,comparator){var index=fromIndex-1,length=array.length;while(++index<length){if(comparator(array[index],value)){return index;}}return-1;}/**
	   * The base implementation of `_.isNaN` without support for number objects.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	   */function baseIsNaN(value){return value!==value;}/**
	   * The base implementation of `_.mean` and `_.meanBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the mean.
	   */function baseMean(array,iteratee){var length=array?array.length:0;return length?baseSum(array,iteratee)/length:NAN;}/**
	   * The base implementation of `_.property` without support for deep paths.
	   *
	   * @private
	   * @param {string} key The key of the property to get.
	   * @returns {Function} Returns the new accessor function.
	   */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}/**
	   * The base implementation of `_.propertyOf` without support for deep paths.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @returns {Function} Returns the new accessor function.
	   */function basePropertyOf(object){return function(key){return object==null?undefined:object[key];};}/**
	   * The base implementation of `_.reduce` and `_.reduceRight`, without support
	   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
	   *
	   * @private
	   * @param {Array|Object} collection The collection to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @param {*} accumulator The initial value.
	   * @param {boolean} initAccum Specify using the first or last element of
	   *  `collection` as the initial value.
	   * @param {Function} eachFunc The function to iterate over `collection`.
	   * @returns {*} Returns the accumulated value.
	   */function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){eachFunc(collection,function(value,index,collection){accumulator=initAccum?(initAccum=false,value):iteratee(accumulator,value,index,collection);});return accumulator;}/**
	   * The base implementation of `_.sortBy` which uses `comparer` to define the
	   * sort order of `array` and replaces criteria objects with their corresponding
	   * values.
	   *
	   * @private
	   * @param {Array} array The array to sort.
	   * @param {Function} comparer The function to define sort order.
	   * @returns {Array} Returns `array`.
	   */function baseSortBy(array,comparer){var length=array.length;array.sort(comparer);while(length--){array[length]=array[length].value;}return array;}/**
	   * The base implementation of `_.sum` and `_.sumBy` without support for
	   * iteratee shorthands.
	   *
	   * @private
	   * @param {Array} array The array to iterate over.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {number} Returns the sum.
	   */function baseSum(array,iteratee){var result,index=-1,length=array.length;while(++index<length){var current=iteratee(array[index]);if(current!==undefined){result=result===undefined?current:result+current;}}return result;}/**
	   * The base implementation of `_.times` without support for iteratee shorthands
	   * or max array length checks.
	   *
	   * @private
	   * @param {number} n The number of times to invoke `iteratee`.
	   * @param {Function} iteratee The function invoked per iteration.
	   * @returns {Array} Returns the array of results.
	   */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}/**
	   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	   * of key-value pairs for `object` corresponding to the property names of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the key-value pairs.
	   */function baseToPairs(object,props){return arrayMap(props,function(key){return[key,object[key]];});}/**
	   * The base implementation of `_.unary` without support for storing metadata.
	   *
	   * @private
	   * @param {Function} func The function to cap arguments for.
	   * @returns {Function} Returns the new capped function.
	   */function baseUnary(func){return function(value){return func(value);};}/**
	   * The base implementation of `_.values` and `_.valuesIn` which creates an
	   * array of `object` property values corresponding to the property names
	   * of `props`.
	   *
	   * @private
	   * @param {Object} object The object to query.
	   * @param {Array} props The property names to get values for.
	   * @returns {Object} Returns the array of property values.
	   */function baseValues(object,props){return arrayMap(props,function(key){return object[key];});}/**
	   * Checks if a cache value for `key` exists.
	   *
	   * @private
	   * @param {Object} cache The cache to query.
	   * @param {string} key The key of the entry to check.
	   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	   */function cacheHas(cache,key){return cache.has(key);}/**
	   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the first unmatched string symbol.
	   */function charsStartIndex(strSymbols,chrSymbols){var index=-1,length=strSymbols.length;while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
	   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	   * that is not found in the character symbols.
	   *
	   * @private
	   * @param {Array} strSymbols The string symbols to inspect.
	   * @param {Array} chrSymbols The character symbols to find.
	   * @returns {number} Returns the index of the last unmatched string symbol.
	   */function charsEndIndex(strSymbols,chrSymbols){var index=strSymbols.length;while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}return index;}/**
	   * Gets the number of `placeholder` occurrences in `array`.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {*} placeholder The placeholder to search for.
	   * @returns {number} Returns the placeholder count.
	   */function countHolders(array,placeholder){var length=array.length,result=0;while(length--){if(array[length]===placeholder){result++;}}return result;}/**
	   * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	   * letters to basic Latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */var deburrLetter=basePropertyOf(deburredLetters);/**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */var escapeHtmlChar=basePropertyOf(htmlEscapes);/**
	   * Used by `_.template` to escape characters for inclusion in compiled string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */function escapeStringChar(chr){return'\\'+stringEscapes[chr];}/**
	   * Gets the value at `key` of `object`.
	   *
	   * @private
	   * @param {Object} [object] The object to query.
	   * @param {string} key The key of the property to get.
	   * @returns {*} Returns the property value.
	   */function getValue(object,key){return object==null?undefined:object[key];}/**
	   * Checks if `string` contains Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	   */function hasUnicode(string){return reHasUnicode.test(string);}/**
	   * Checks if `string` contains a word composed of Unicode symbols.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {boolean} Returns `true` if a word is found, else `false`.
	   */function hasUnicodeWord(string){return reHasUnicodeWord.test(string);}/**
	   * Checks if `value` is a host object in IE < 9.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	   */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
	// despite having improperly defined `toString` methods.
	var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}/**
	   * Converts `iterator` to an array.
	   *
	   * @private
	   * @param {Object} iterator The iterator to convert.
	   * @returns {Array} Returns the converted array.
	   */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}/**
	   * Converts `map` to its key-value pairs.
	   *
	   * @private
	   * @param {Object} map The map to convert.
	   * @returns {Array} Returns the key-value pairs.
	   */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}/**
	   * Creates a unary function that invokes `func` with its argument transformed.
	   *
	   * @private
	   * @param {Function} func The function to wrap.
	   * @param {Function} transform The argument transform.
	   * @returns {Function} Returns the new function.
	   */function overArg(func,transform){return function(arg){return func(transform(arg));};}/**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */function replaceHolders(array,placeholder){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index];if(value===placeholder||value===PLACEHOLDER){array[index]=PLACEHOLDER;result[resIndex++]=index;}}return result;}/**
	   * Converts `set` to an array of its values.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the values.
	   */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}/**
	   * Converts `set` to its value-value pairs.
	   *
	   * @private
	   * @param {Object} set The set to convert.
	   * @returns {Array} Returns the value-value pairs.
	   */function setToPairs(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=[value,value];});return result;}/**
	   * Gets the number of symbols in `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the string size.
	   */function stringSize(string){return hasUnicode(string)?unicodeSize(string):asciiSize(string);}/**
	   * Converts `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function stringToArray(string){return hasUnicode(string)?unicodeToArray(string):asciiToArray(string);}/**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */var unescapeHtmlChar=basePropertyOf(htmlUnescapes);/**
	   * Gets the size of a Unicode `string`.
	   *
	   * @private
	   * @param {string} string The string inspect.
	   * @returns {number} Returns the string size.
	   */function unicodeSize(string){var result=reUnicode.lastIndex=0;while(reUnicode.test(string)){result++;}return result;}/**
	   * Converts a Unicode `string` to an array.
	   *
	   * @private
	   * @param {string} string The string to convert.
	   * @returns {Array} Returns the converted array.
	   */function unicodeToArray(string){return string.match(reUnicode)||[];}/**
	   * Splits a Unicode `string` into an array of its words.
	   *
	   * @private
	   * @param {string} The string to inspect.
	   * @returns {Array} Returns the words of `string`.
	   */function unicodeWords(string){return string.match(reUnicodeWord)||[];}/*--------------------------------------------------------------------------*//**
	   * Create a new pristine `lodash` function using the `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @since 1.1.0
	   * @category Util
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // Use `context` to stub `Date#getTime` use in `_.now`.
	   * var stubbed = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': stubGetTime };
	   *   }
	   * });
	   *
	   * // Create a suped-up `defer` in Node.js.
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */function runInContext(context){context=context?_.defaults(root.Object(),context,_.pick(root,contextProps)):root;/** Built-in constructor references. */var Array=context.Array,Date=context.Date,Error=context.Error,Function=context.Function,Math=context.Math,Object=context.Object,RegExp=context.RegExp,String=context.String,TypeError=context.TypeError;/** Used for built-in method references. */var arrayProto=Array.prototype,funcProto=Function.prototype,objectProto=Object.prototype;/** Used to detect overreaching core-js shims. */var coreJsData=context['__core-js_shared__'];/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/** Used to resolve the decompiled source of functions. */var funcToString=funcProto.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to generate unique IDs. */var idCounter=0;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
	     * Used to resolve the
	     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	     * of values.
	     */var objectToString=objectProto.toString;/** Used to restore the original `_` reference in `_.noConflict`. */var oldDash=root._;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/** Built-in value references. */var Buffer=moduleExports?context.Buffer:undefined,_Symbol=context.Symbol,Uint8Array=context.Uint8Array,getPrototype=overArg(Object.getPrototypeOf,Object),iteratorSymbol=_Symbol?_Symbol.iterator:undefined,objectCreate=Object.create,propertyIsEnumerable=objectProto.propertyIsEnumerable,splice=arrayProto.splice,spreadableSymbol=_Symbol?_Symbol.isConcatSpreadable:undefined;/** Mocked built-ins. */var ctxClearTimeout=context.clearTimeout!==root.clearTimeout&&context.clearTimeout,ctxNow=Date&&Date.now!==root.Date.now&&Date.now,ctxSetTimeout=context.setTimeout!==root.setTimeout&&context.setTimeout;/* Built-in method references for those with the same name as other `lodash` methods. */var nativeCeil=Math.ceil,nativeFloor=Math.floor,nativeGetSymbols=Object.getOwnPropertySymbols,nativeIsBuffer=Buffer?Buffer.isBuffer:undefined,nativeIsFinite=context.isFinite,nativeJoin=arrayProto.join,nativeKeys=overArg(Object.keys,Object),nativeMax=Math.max,nativeMin=Math.min,nativeParseInt=context.parseInt,nativeRandom=Math.random,nativeReverse=arrayProto.reverse;/* Built-in method references that are verified to be native. */var DataView=getNative(context,'DataView'),Map=getNative(context,'Map'),Promise=getNative(context,'Promise'),Set=getNative(context,'Set'),WeakMap=getNative(context,'WeakMap'),nativeCreate=getNative(Object,'create');/* Used to set `toString` methods. */var defineProperty=function(){var func=getNative(Object,'defineProperty'),name=getNative.name;return name&&name.length>2?func:undefined;}();/** Used to store function metadata. */var metaMap=WeakMap&&new WeakMap();/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */var nonEnumShadows=!propertyIsEnumerable.call({'valueOf':1},'valueOf');/** Used to lookup unminified function names. */var realNames={};/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol?_Symbol.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/*------------------------------------------------------------------------*//**
	     * Creates a `lodash` object which wraps `value` to enable implicit method
	     * chain sequences. Methods that operate on and return arrays, collections,
	     * and functions can be chained together. Methods that retrieve a single value
	     * or may return a primitive value will automatically end the chain sequence
	     * and return the unwrapped value. Otherwise, the value must be unwrapped
	     * with `_#value`.
	     *
	     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
	     * enabled using `_.chain`.
	     *
	     * The execution of chained methods is lazy, that is, it's deferred until
	     * `_#value` is implicitly or explicitly called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion.
	     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
	     * the creation of intermediate arrays and can greatly reduce the number of
	     * iteratee executions. Sections of a chain sequence qualify for shortcut
	     * fusion if the section is applied to an array of at least `200` elements
	     * and any iteratees accept only one argument. The heuristic for whether a
	     * section qualifies for shortcut fusion is subject to change.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
	     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
	     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
	     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
	     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
	     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
	     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
	     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
	     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
	     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
	     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
	     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
	     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
	     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
	     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
	     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
	     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
	     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
	     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
	     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
	     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
	     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
	     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
	     * `zipObject`, `zipObjectDeep`, and `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
	     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
	     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
	     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
	     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
	     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
	     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
	     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
	     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
	     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
	     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
	     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
	     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
	     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
	     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
	     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
	     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
	     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
	     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
	     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
	     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
	     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
	     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
	     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
	     * `upperFirst`, `value`, and `words`
	     *
	     * @name _
	     * @constructor
	     * @category Seq
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // Returns an unwrapped value.
	     * wrapped.reduce(_.add);
	     * // => 6
	     *
	     * // Returns a wrapped value.
	     * var squares = wrapped.map(square);
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper){return value;}if(hasOwnProperty.call(value,'__wrapped__')){return wrapperClone(value);}}return new LodashWrapper(value);}/**
	     * The function whose prototype chain sequence wrappers inherit from.
	     *
	     * @private
	     */function baseLodash(){}// No operation performed.
	/**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable explicit method chain sequences.
	     */function LodashWrapper(value,chainAll){this.__wrapped__=value;this.__actions__=[];this.__chain__=!!chainAll;this.__index__=0;this.__values__=undefined;}/**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type {Object}
	     */lodash.templateSettings={/**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'escape':reEscape,/**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'evaluate':reEvaluate,/**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type {RegExp}
	       */'interpolate':reInterpolate,/**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type {string}
	       */'variable':'',/**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type {Object}
	       */'imports':{/**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type {Function}
	         */'_':lodash}};// Ensure wrappers are instances of `baseLodash`.
	lodash.prototype=baseLodash.prototype;lodash.prototype.constructor=lodash;LodashWrapper.prototype=baseCreate(baseLodash.prototype);LodashWrapper.prototype.constructor=LodashWrapper;/*------------------------------------------------------------------------*//**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @constructor
	     * @param {*} value The value to wrap.
	     */function LazyWrapper(value){this.__wrapped__=value;this.__actions__=[];this.__dir__=1;this.__filtered__=false;this.__iteratees__=[];this.__takeCount__=MAX_ARRAY_LENGTH;this.__views__=[];}/**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */function lazyClone(){var result=new LazyWrapper(this.__wrapped__);result.__actions__=copyArray(this.__actions__);result.__dir__=this.__dir__;result.__filtered__=this.__filtered__;result.__iteratees__=copyArray(this.__iteratees__);result.__takeCount__=this.__takeCount__;result.__views__=copyArray(this.__views__);return result;}/**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */function lazyReverse(){if(this.__filtered__){var result=new LazyWrapper(this);result.__dir__=-1;result.__filtered__=true;}else{result=this.clone();result.__dir__*=-1;}return result;}/**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */function lazyValue(){var array=this.__wrapped__.value(),dir=this.__dir__,isArr=isArray(array),isRight=dir<0,arrLength=isArr?array.length:0,view=getView(0,arrLength,this.__views__),start=view.start,end=view.end,length=end-start,index=isRight?end:start-1,iteratees=this.__iteratees__,iterLength=iteratees.length,resIndex=0,takeCount=nativeMin(length,this.__takeCount__);if(!isArr||arrLength<LARGE_ARRAY_SIZE||arrLength==length&&takeCount==length){return baseWrapperValue(array,this.__actions__);}var result=[];outer:while(length--&&resIndex<takeCount){index+=dir;var iterIndex=-1,value=array[index];while(++iterIndex<iterLength){var data=iteratees[iterIndex],iteratee=data.iteratee,type=data.type,computed=iteratee(value);if(type==LAZY_MAP_FLAG){value=computed;}else if(!computed){if(type==LAZY_FILTER_FLAG){continue outer;}else{break outer;}}}result[resIndex++]=value;}return result;}// Ensure `LazyWrapper` is an instance of `baseLodash`.
	LazyWrapper.prototype=baseCreate(baseLodash.prototype);LazyWrapper.prototype.constructor=LazyWrapper;/*------------------------------------------------------------------------*//**
	     * Creates a hash object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the hash.
	     *
	     * @private
	     * @name clear
	     * @memberOf Hash
	     */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}/**
	     * Removes `key` and its value from the hash.
	     *
	     * @private
	     * @name delete
	     * @memberOf Hash
	     * @param {Object} hash The hash to modify.
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}/**
	     * Gets the hash value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Hash
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}/**
	     * Checks if a hash value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Hash
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}/**
	     * Sets the hash `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Hash
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the hash instance.
	     */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}// Add methods to `Hash`.
	Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;/*------------------------------------------------------------------------*//**
	     * Creates an list cache object.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the list cache.
	     *
	     * @private
	     * @name clear
	     * @memberOf ListCache
	     */function listCacheClear(){this.__data__=[];}/**
	     * Removes `key` and its value from the list cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf ListCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}/**
	     * Gets the list cache value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf ListCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}/**
	     * Checks if a list cache value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf ListCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}/**
	     * Sets the list cache `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf ListCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the list cache instance.
	     */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}// Add methods to `ListCache`.
	ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;/*------------------------------------------------------------------------*//**
	     * Creates a map cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}/**
	     * Removes all key-value entries from the map.
	     *
	     * @private
	     * @name clear
	     * @memberOf MapCache
	     */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}/**
	     * Removes `key` and its value from the map.
	     *
	     * @private
	     * @name delete
	     * @memberOf MapCache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}/**
	     * Gets the map value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf MapCache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function mapCacheGet(key){return getMapData(this,key).get(key);}/**
	     * Checks if a map value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf MapCache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function mapCacheHas(key){return getMapData(this,key).has(key);}/**
	     * Sets the map `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf MapCache
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the map cache instance.
	     */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}// Add methods to `MapCache`.
	MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;/*------------------------------------------------------------------------*//**
	     *
	     * Creates an array cache object to store unique values.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [values] The values to cache.
	     */function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}/**
	     * Adds `value` to the array cache.
	     *
	     * @private
	     * @name add
	     * @memberOf SetCache
	     * @alias push
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache instance.
	     */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}/**
	     * Checks if `value` is in the array cache.
	     *
	     * @private
	     * @name has
	     * @memberOf SetCache
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `true` if `value` is found, else `false`.
	     */function setCacheHas(value){return this.__data__.has(value);}// Add methods to `SetCache`.
	SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;/*------------------------------------------------------------------------*//**
	     * Creates a stack cache object to store key-value pairs.
	     *
	     * @private
	     * @constructor
	     * @param {Array} [entries] The key-value pairs to cache.
	     */function Stack(entries){this.__data__=new ListCache(entries);}/**
	     * Removes all key-value entries from the stack.
	     *
	     * @private
	     * @name clear
	     * @memberOf Stack
	     */function stackClear(){this.__data__=new ListCache();}/**
	     * Removes `key` and its value from the stack.
	     *
	     * @private
	     * @name delete
	     * @memberOf Stack
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	     */function stackDelete(key){return this.__data__['delete'](key);}/**
	     * Gets the stack value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf Stack
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the entry value.
	     */function stackGet(key){return this.__data__.get(key);}/**
	     * Checks if a stack value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf Stack
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */function stackHas(key){return this.__data__.has(key);}/**
	     * Sets the stack `key` to `value`.
	     *
	     * @private
	     * @name set
	     * @memberOf Stack
	     * @param {string} key The key of the value to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns the stack cache instance.
	     */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache){var pairs=cache.__data__;if(!Map||pairs.length<LARGE_ARRAY_SIZE-1){pairs.push([key,value]);return this;}cache=this.__data__=new MapCache(pairs);}cache.set(key,value);return this;}// Add methods to `Stack`.
	Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;/*------------------------------------------------------------------------*//**
	     * Creates an array of the enumerable property names of the array-like `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @param {boolean} inherited Specify returning inherited property names.
	     * @returns {Array} Returns the array of property names.
	     */function arrayLikeKeys(value,inherited){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	// Safari 9 makes `arguments.length` enumerable in strict mode.
	var result=isArray(value)||isArguments(value)?baseTimes(value.length,String):[];var length=result.length,skipIndexes=!!length;for(var key in value){if((inherited||hasOwnProperty.call(value,key))&&!(skipIndexes&&(key=='length'||isIndex(key,length)))){result.push(key);}}return result;}/**
	     * Used by `_.defaults` to customize its `_.assignIn` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to assign.
	     * @param {Object} object The parent object of `objValue`.
	     * @returns {*} Returns the value to assign.
	     */function assignInDefaults(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}/**
	     * This function is like `assignValue` except that it doesn't assign
	     * `undefined` values.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignMergeValue(object,key,value){if(value!==undefined&&!eq(object[key],value)||typeof key=='number'&&value===undefined&&!(key in object)){object[key]=value;}}/**
	     * Assigns `value` to `key` of `object` if the existing value is not equivalent
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {string} key The key of the property to assign.
	     * @param {*} value The value to assign.
	     */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}/**
	     * Gets the index at which the `key` is found in `array` of key-value pairs.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {*} key The key to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}/**
	     * Aggregates elements of `collection` on `accumulator` with keys transformed
	     * by `iteratee` and values set by `setter`.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform keys.
	     * @param {Object} accumulator The initial aggregated object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}/**
	     * The base implementation of `_.assign` without support for multiple sources
	     * or `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */function baseAssign(object,source){return object&&copyObject(source,keys(source),object);}/**
	     * The base implementation of `_.at` without support for individual paths.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {string[]} paths The property paths of elements to pick.
	     * @returns {Array} Returns the picked elements.
	     */function baseAt(object,paths){var index=-1,isNil=object==null,length=paths.length,result=Array(length);while(++index<length){result[index]=isNil?undefined:get(object,paths[index]);}return result;}/**
	     * The base implementation of `_.clamp` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     */function baseClamp(number,lower,upper){if(number===number){if(upper!==undefined){number=number<=upper?number:upper;}if(lower!==undefined){number=number>=lower?number:lower;}}return number;}/**
	     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	     * traversed objects.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {boolean} [isFull] Specify a clone including symbols.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The parent object of `value`.
	     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	     * @returns {*} Returns the cloned value.
	     */function baseClone(value,isDeep,isFull,customizer,key,object,stack){var result;if(customizer){result=object?customizer(value,key,object,stack):customizer(value);}if(result!==undefined){return result;}if(!isObject(value)){return value;}var isArr=isArray(value);if(isArr){result=initCloneArray(value);if(!isDeep){return copyArray(value,result);}}else{var tag=getTag(value),isFunc=tag==funcTag||tag==genTag;if(isBuffer(value)){return cloneBuffer(value,isDeep);}if(tag==objectTag||tag==argsTag||isFunc&&!object){if(isHostObject(value)){return object?value:{};}result=initCloneObject(isFunc?{}:value);if(!isDeep){return copySymbols(value,baseAssign(result,value));}}else{if(!cloneableTags[tag]){return object?value:{};}result=initCloneByTag(value,tag,baseClone,isDeep);}}// Check for circular references and return its corresponding clone.
	stack||(stack=new Stack());var stacked=stack.get(value);if(stacked){return stacked;}stack.set(value,result);if(!isArr){var props=isFull?getAllKeys(value):keys(value);}arrayEach(props||value,function(subValue,key){if(props){key=subValue;subValue=value[key];}// Recursively populate clone (susceptible to call stack limits).
	assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));});return result;}/**
	     * The base implementation of `_.conforms` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     */function baseConforms(source){var props=keys(source);return function(object){return baseConformsTo(object,source,props);};}/**
	     * The base implementation of `_.conformsTo` which accepts `props` to check.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     */function baseConformsTo(object,source,props){var length=props.length;if(object==null){return!length;}object=Object(object);while(length--){var key=props[length],predicate=source[key],value=object[key];if(value===undefined&&!(key in object)||!predicate(value)){return false;}}return true;}/**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */function baseCreate(proto){return isObject(proto)?objectCreate(proto):{};}/**
	     * The base implementation of `_.delay` and `_.defer` which accepts `args`
	     * to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Array} args The arguments to provide to `func`.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */function baseDelay(func,wait,args){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return setTimeout(function(){func.apply(undefined,args);},wait);}/**
	     * The base implementation of methods like `_.difference` without support
	     * for excluding multiple arrays or iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}/**
	     * The base implementation of `_.forEach` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEach=createBaseEach(baseForOwn);/**
	     * The base implementation of `_.forEachRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     */var baseEachRight=createBaseEach(baseForOwnRight,true);/**
	     * The base implementation of `_.every` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */function baseEvery(collection,predicate){var result=true;baseEach(collection,function(value,index,collection){result=!!predicate(value,index,collection);return result;});return result;}/**
	     * The base implementation of methods like `_.max` and `_.min` which accepts a
	     * `comparator` to determine the extremum value.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The iteratee invoked per iteration.
	     * @param {Function} comparator The comparator used to compare values.
	     * @returns {*} Returns the extremum value.
	     */function baseExtremum(array,iteratee,comparator){var index=-1,length=array.length;while(++index<length){var value=array[index],current=iteratee(value);if(current!=null&&(computed===undefined?current===current&&!isSymbol(current):comparator(current,computed))){var computed=current,result=value;}}return result;}/**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */function baseFill(array,value,start,end){var length=array.length;start=toInteger(start);if(start<0){start=-start>length?0:length+start;}end=end===undefined||end>length?length:toInteger(end);if(end<0){end+=length;}end=start>end?0:toLength(end);while(start<end){array[start++]=value;}return array;}/**
	     * The base implementation of `_.filter` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */function baseFilter(collection,predicate){var result=[];baseEach(collection,function(value,index,collection){if(predicate(value,index,collection)){result.push(value);}});return result;}/**
	     * The base implementation of `_.flatten` with support for restricting flattening.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {number} depth The maximum recursion depth.
	     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
	     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
	     * @param {Array} [result=[]] The initial result value.
	     * @returns {Array} Returns the new flattened array.
	     */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
	baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}/**
	     * The base implementation of `baseForOwn` which iterates over `object`
	     * properties returned by `keysFunc` and invokes `iteratee` for each property.
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseFor=createBaseFor();/**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */var baseForRight=createBaseFor(true);/**
	     * The base implementation of `_.forOwn` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}/**
	     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */function baseForOwnRight(object,iteratee){return object&&baseForRight(object,iteratee,keys);}/**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from `props`.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the function names.
	     */function baseFunctions(object,props){return arrayFilter(props,function(key){return isFunction(object[key]);});}/**
	     * The base implementation of `_.get` without support for default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @returns {*} Returns the resolved value.
	     */function baseGet(object,path){path=isKey(path,object)?[path]:castPath(path);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}/**
	     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @param {Function} symbolsFunc The function to get the symbols of `object`.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function baseGetAllKeys(object,keysFunc,symbolsFunc){var result=keysFunc(object);return isArray(object)?result:arrayPush(result,symbolsFunc(object));}/**
	     * The base implementation of `getTag`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */function baseGetTag(value){return objectToString.call(value);}/**
	     * The base implementation of `_.gt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     */function baseGt(value,other){return value>other;}/**
	     * The base implementation of `_.has` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHas(object,key){return object!=null&&hasOwnProperty.call(object,key);}/**
	     * The base implementation of `_.hasIn` without support for deep paths.
	     *
	     * @private
	     * @param {Object} [object] The object to query.
	     * @param {Array|string} key The key to check.
	     * @returns {boolean} Returns `true` if `key` exists, else `false`.
	     */function baseHasIn(object,key){return object!=null&&key in Object(object);}/**
	     * The base implementation of `_.inRange` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {number} number The number to check.
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     */function baseInRange(number,start,end){return number>=nativeMin(start,end)&&number<nativeMax(start,end);}/**
	     * The base implementation of methods like `_.intersection`, without support
	     * for iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of shared values.
	     */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}/**
	     * The base implementation of `_.invert` and `_.invertBy` which inverts
	     * `object` with values transformed by `iteratee` and set by `setter`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} setter The function to set `accumulator` values.
	     * @param {Function} iteratee The iteratee to transform values.
	     * @param {Object} accumulator The initial inverted object.
	     * @returns {Function} Returns `accumulator`.
	     */function baseInverter(object,setter,iteratee,accumulator){baseForOwn(object,function(value,key,object){setter(accumulator,iteratee(value),key,object);});return accumulator;}/**
	     * The base implementation of `_.invoke` without support for individual
	     * method arguments.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */function baseInvoke(object,path,args){if(!isKey(path,object)){path=castPath(path);object=parent(object,path);path=last(path);}var func=object==null?object:object[toKey(path)];return func==null?undefined:apply(func,object,args);}/**
	     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     */function baseIsArrayBuffer(value){return isObjectLike(value)&&objectToString.call(value)==arrayBufferTag;}/**
	     * The base implementation of `_.isDate` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     */function baseIsDate(value){return isObjectLike(value)&&objectToString.call(value)==dateTag;}/**
	     * The base implementation of `_.isEqual` which supports partial comparisons
	     * and tracks traversed objects.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {boolean} [bitmask] The bitmask of comparison flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - Unordered comparison
	     *     2 - Partial comparison
	     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */function baseIsEqual(value,other,customizer,bitmask,stack){if(value===other){return true;}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);}/**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=getTag(object);objTag=objTag==argsTag?objectTag:objTag;}if(!othIsArr){othTag=getTag(other);othTag=othTag==argsTag?objectTag:othTag;}var objIsObj=objTag==objectTag&&!isHostObject(object),othIsObj=othTag==objectTag&&!isHostObject(other),isSameTag=objTag==othTag;if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,equalFunc,customizer,bitmask,stack):equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);}if(!(bitmask&PARTIAL_COMPARE_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,equalFunc,customizer,bitmask,stack);}/**
	     * The base implementation of `_.isMap` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     */function baseIsMap(value){return isObjectLike(value)&&getTag(value)==mapTag;}/**
	     * The base implementation of `_.isMatch` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Array} matchData The property names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):result)){return false;}}}return true;}/**
	     * The base implementation of `_.isNative` without bad shim checks.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}/**
	     * The base implementation of `_.isRegExp` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     */function baseIsRegExp(value){return isObject(value)&&objectToString.call(value)==regexpTag;}/**
	     * The base implementation of `_.isSet` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     */function baseIsSet(value){return isObjectLike(value)&&getTag(value)==setTag;}/**
	     * The base implementation of `_.isTypedArray` without Node.js optimizations.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     */function baseIsTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}/**
	     * The base implementation of `_.iteratee`.
	     *
	     * @private
	     * @param {*} [value=_.identity] The value to convert to an iteratee.
	     * @returns {Function} Returns the iteratee.
	     */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}/**
	     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeys(object){if(!isPrototype(object)){return nativeKeys(object);}var result=[];for(var key in Object(object)){if(hasOwnProperty.call(object,key)&&key!='constructor'){result.push(key);}}return result;}/**
	     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function baseKeysIn(object){if(!isObject(object)){return nativeKeysIn(object);}var isProto=isPrototype(object),result=[];for(var key in object){if(!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}/**
	     * The base implementation of `_.lt` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     */function baseLt(value,other){return value<other;}/**
	     * The base implementation of `_.map` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */function baseMap(collection,iteratee){var index=-1,result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value,key,collection){result[++index]=iteratee(value,key,collection);});return result;}/**
	     * The base implementation of `_.matches` which doesn't clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}/**
	     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);};}/**
	     * The base implementation of `_.merge` without support for multiple sources.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} [customizer] The function to customize merged values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */function baseMerge(object,source,srcIndex,customizer,stack){if(object===source){return;}if(!(isArray(source)||isTypedArray(source))){var props=baseKeysIn(source);}arrayEach(props||source,function(srcValue,key){if(props){key=srcValue;srcValue=source[key];}if(isObject(srcValue)){stack||(stack=new Stack());baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);}else{var newValue=customizer?customizer(object[key],srcValue,key+'',object,source,stack):undefined;if(newValue===undefined){newValue=srcValue;}assignMergeValue(object,key,newValue);}});}/**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {number} srcIndex The index of `source`.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     */function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){var objValue=object[key],srcValue=source[key],stacked=stack.get(srcValue);if(stacked){assignMergeValue(object,key,stacked);return;}var newValue=customizer?customizer(objValue,srcValue,key+'',object,source,stack):undefined;var isCommon=newValue===undefined;if(isCommon){newValue=srcValue;if(isArray(srcValue)||isTypedArray(srcValue)){if(isArray(objValue)){newValue=objValue;}else if(isArrayLikeObject(objValue)){newValue=copyArray(objValue);}else{isCommon=false;newValue=baseClone(srcValue,true);}}else if(isPlainObject(srcValue)||isArguments(srcValue)){if(isArguments(objValue)){newValue=toPlainObject(objValue);}else if(!isObject(objValue)||srcIndex&&isFunction(objValue)){isCommon=false;newValue=baseClone(srcValue,true);}else{newValue=objValue;}}else{isCommon=false;}}if(isCommon){// Recursively merge objects and arrays (susceptible to call stack limits).
	stack.set(srcValue,newValue);mergeFunc(newValue,srcValue,srcIndex,customizer,stack);stack['delete'](srcValue);}assignMergeValue(object,key,newValue);}/**
	     * The base implementation of `_.nth` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {number} n The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     */function baseNth(array,n){var length=array.length;if(!length){return;}n+=n<0?length:0;return isIndex(n,length)?array[n]:undefined;}/**
	     * The base implementation of `_.orderBy` without param guards.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {string[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */function baseOrderBy(collection,iteratees,orders){var index=-1;iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));var result=baseMap(collection,function(value,key,collection){var criteria=arrayMap(iteratees,function(iteratee){return iteratee(value);});return{'criteria':criteria,'index':++index,'value':value};});return baseSortBy(result,function(object,other){return compareMultiple(object,other,orders);});}/**
	     * The base implementation of `_.pick` without support for individual
	     * property identifiers.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property identifiers to pick.
	     * @returns {Object} Returns the new object.
	     */function basePick(object,props){object=Object(object);return basePickBy(object,props,function(value,key){return key in object;});}/**
	     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property identifiers to pick from.
	     * @param {Function} predicate The function invoked per property.
	     * @returns {Object} Returns the new object.
	     */function basePickBy(object,props,predicate){var index=-1,length=props.length,result={};while(++index<length){var key=props[index],value=object[key];if(predicate(value,key)){result[key]=value;}}return result;}/**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}/**
	     * The base implementation of `_.pullAllBy` without support for iteratee
	     * shorthands.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     */function basePullAll(array,values,iteratee,comparator){var indexOf=comparator?baseIndexOfWith:baseIndexOf,index=-1,length=values.length,seen=array;if(array===values){values=copyArray(values);}if(iteratee){seen=arrayMap(array,baseUnary(iteratee));}while(++index<length){var fromIndex=0,value=values[index],computed=iteratee?iteratee(value):value;while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){if(seen!==array){splice.call(seen,fromIndex,1);}splice.call(array,fromIndex,1);}}return array;}/**
	     * The base implementation of `_.pullAt` without support for individual
	     * indexes or capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */function basePullAt(array,indexes){var length=array?indexes.length:0,lastIndex=length-1;while(length--){var index=indexes[length];if(length==lastIndex||index!==previous){var previous=index;if(isIndex(index)){splice.call(array,index,1);}else if(!isKey(index,array)){var path=castPath(index),object=parent(array,path);if(object!=null){delete object[toKey(last(path))];}}else{delete array[toKey(index)];}}}return array;}/**
	     * The base implementation of `_.random` without support for returning
	     * floating-point numbers.
	     *
	     * @private
	     * @param {number} lower The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the random number.
	     */function baseRandom(lower,upper){return lower+nativeFloor(nativeRandom()*(upper-lower+1));}/**
	     * The base implementation of `_.range` and `_.rangeRight` which doesn't
	     * coerce arguments.
	     *
	     * @private
	     * @param {number} start The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} step The value to increment or decrement by.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the range of numbers.
	     */function baseRange(start,end,step,fromRight){var index=-1,length=nativeMax(nativeCeil((end-start)/(step||1)),0),result=Array(length);while(length--){result[fromRight?length:++index]=start;start+=step;}return result;}/**
	     * The base implementation of `_.repeat` which doesn't coerce arguments.
	     *
	     * @private
	     * @param {string} string The string to repeat.
	     * @param {number} n The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     */function baseRepeat(string,n){var result='';if(!string||n<1||n>MAX_SAFE_INTEGER){return result;}// Leverage the exponentiation by squaring algorithm for a faster repeat.
	// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	do{if(n%2){result+=string;}n=nativeFloor(n/2);if(n){string+=string;}}while(n);return result;}/**
	     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	     *
	     * @private
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     */function baseRest(func,start){start=nativeMax(start===undefined?func.length-1:start,0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}index=-1;var otherArgs=Array(start+1);while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}/**
	     * The base implementation of `_.set`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseSet(object,path,value,customizer){if(!isObject(object)){return object;}path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length,lastIndex=length-1,nested=object;while(nested!=null&&++index<length){var key=toKey(path[index]),newValue=value;if(index!=lastIndex){var objValue=nested[key];newValue=customizer?customizer(objValue,key,nested):undefined;if(newValue===undefined){newValue=isObject(objValue)?objValue:isIndex(path[index+1])?[]:{};}}assignValue(nested,key,newValue);nested=nested[key];}return object;}/**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var baseSetData=!metaMap?identity:function(func,data){metaMap.set(func,data);return func;};/**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseSlice(array,start,end){var index=-1,length=array.length;if(start<0){start=-start>length?0:length+start;}end=end>length?length:end;if(end<0){end+=length;}length=start>end?0:end-start>>>0;start>>>=0;var result=Array(length);while(++index<length){result[index]=array[index+start];}return result;}/**
	     * The base implementation of `_.some` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */function baseSome(collection,predicate){var result;baseEach(collection,function(value,index,collection){result=predicate(value,index,collection);return!result;});return!!result;}/**
	     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
	     * performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndex(array,value,retHighest){var low=0,high=array?array.length:low;if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){while(low<high){var mid=low+high>>>1,computed=array[mid];if(computed!==null&&!isSymbol(computed)&&(retHighest?computed<=value:computed<value)){low=mid+1;}else{high=mid;}}return high;}return baseSortedIndexBy(array,value,identity,retHighest);}/**
	     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
	     * which invokes `iteratee` for `value` and each element of `array` to compute
	     * their sort ranking. The iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The iteratee invoked per element.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */function baseSortedIndexBy(array,value,iteratee,retHighest){value=iteratee(value);var low=0,high=array?array.length:0,valIsNaN=value!==value,valIsNull=value===null,valIsSymbol=isSymbol(value),valIsUndefined=value===undefined;while(low<high){var mid=nativeFloor((low+high)/2),computed=iteratee(array[mid]),othIsDefined=computed!==undefined,othIsNull=computed===null,othIsReflexive=computed===computed,othIsSymbol=isSymbol(computed);if(valIsNaN){var setLow=retHighest||othIsReflexive;}else if(valIsUndefined){setLow=othIsReflexive&&(retHighest||othIsDefined);}else if(valIsNull){setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);}else if(valIsSymbol){setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);}else if(othIsNull||othIsSymbol){setLow=false;}else{setLow=retHighest?computed<=value:computed<value;}if(setLow){low=mid+1;}else{high=mid;}}return nativeMin(high,MAX_ARRAY_INDEX);}/**
	     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
	     * support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseSortedUniq(array,iteratee){var index=-1,length=array.length,resIndex=0,result=[];while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;if(!index||!eq(computed,seen)){var seen=computed;result[resIndex++]=value===0?0:value;}}return result;}/**
	     * The base implementation of `_.toNumber` which doesn't ensure correct
	     * conversions of binary, hexadecimal, or octal string values.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     */function baseToNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}return+value;}/**
	     * The base implementation of `_.toString` which doesn't convert nullish
	     * values to empty strings.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
	if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}/**
	     * The base implementation of `_.unset`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     */function baseUnset(object,path){path=isKey(path,object)?[path]:castPath(path);object=parent(object,path);var key=toKey(last(path));return!(object!=null&&hasOwnProperty.call(object,key))||delete object[key];}/**
	     * The base implementation of `_.update`.
	     *
	     * @private
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to update.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize path creation.
	     * @returns {Object} Returns `object`.
	     */function baseUpdate(object,path,updater,customizer){return baseSet(object,path,updater(baseGet(object,path)),customizer);}/**
	     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
	     * without support for iteratee shorthands.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */function baseWhile(array,predicate,isDrop,fromRight){var length=array.length,index=fromRight?length:-1;while((fromRight?index--:++index<length)&&predicate(array[index],index,array)){}return isDrop?baseSlice(array,fromRight?0:index,fromRight?index+1:length):baseSlice(array,fromRight?index+1:0,fromRight?length:index);}/**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to perform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */function baseWrapperValue(value,actions){var result=value;if(result instanceof LazyWrapper){result=result.value();}return arrayReduce(actions,function(result,action){return action.func.apply(action.thisArg,arrayPush([result],action.args));},result);}/**
	     * The base implementation of methods like `_.xor`, without support for
	     * iteratee shorthands, that accepts an array of arrays to inspect.
	     *
	     * @private
	     * @param {Array} arrays The arrays to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of values.
	     */function baseXor(arrays,iteratee,comparator){var index=-1,length=arrays.length;while(++index<length){var result=result?arrayPush(baseDifference(result,arrays[index],iteratee,comparator),baseDifference(arrays[index],result,iteratee,comparator)):arrays[index];}return result&&result.length?baseUniq(result,iteratee,comparator):[];}/**
	     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	     *
	     * @private
	     * @param {Array} props The property identifiers.
	     * @param {Array} values The property values.
	     * @param {Function} assignFunc The function to assign values.
	     * @returns {Object} Returns the new object.
	     */function baseZipObject(props,values,assignFunc){var index=-1,length=props.length,valsLength=values.length,result={};while(++index<length){var value=index<valsLength?values[index]:undefined;assignFunc(result,props[index],value);}return result;}/**
	     * Casts `value` to an empty array if it's not an array like object.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array|Object} Returns the cast array-like object.
	     */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}/**
	     * Casts `value` to `identity` if it's not a function.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Function} Returns cast function.
	     */function castFunction(value){return typeof value=='function'?value:identity;}/**
	     * Casts `value` to a path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast property path array.
	     */function castPath(value){return isArray(value)?value:stringToPath(value);}/**
	     * Casts `array` to a slice if it's needed.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {number} start The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the cast slice.
	     */function castSlice(array,start,end){var length=array.length;end=end===undefined?length:end;return!start&&end>=length?array:baseSlice(array,start,end);}/**
	     * A simple wrapper around the global [`clearTimeout`](https://mdn.io/clearTimeout).
	     *
	     * @private
	     * @param {number|Object} id The timer id or timeout object of the timer to clear.
	     */var clearTimeout=ctxClearTimeout||function(id){return root.clearTimeout(id);};/**
	     * Creates a clone of  `buffer`.
	     *
	     * @private
	     * @param {Buffer} buffer The buffer to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Buffer} Returns the cloned buffer.
	     */function cloneBuffer(buffer,isDeep){if(isDeep){return buffer.slice();}var result=new buffer.constructor(buffer.length);buffer.copy(result);return result;}/**
	     * Creates a clone of `arrayBuffer`.
	     *
	     * @private
	     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */function cloneArrayBuffer(arrayBuffer){var result=new arrayBuffer.constructor(arrayBuffer.byteLength);new Uint8Array(result).set(new Uint8Array(arrayBuffer));return result;}/**
	     * Creates a clone of `dataView`.
	     *
	     * @private
	     * @param {Object} dataView The data view to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned data view.
	     */function cloneDataView(dataView,isDeep){var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);}/**
	     * Creates a clone of `map`.
	     *
	     * @private
	     * @param {Object} map The map to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned map.
	     */function cloneMap(map,isDeep,cloneFunc){var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);return arrayReduce(array,addMapEntry,new map.constructor());}/**
	     * Creates a clone of `regexp`.
	     *
	     * @private
	     * @param {Object} regexp The regexp to clone.
	     * @returns {Object} Returns the cloned regexp.
	     */function cloneRegExp(regexp){var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));result.lastIndex=regexp.lastIndex;return result;}/**
	     * Creates a clone of `set`.
	     *
	     * @private
	     * @param {Object} set The set to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned set.
	     */function cloneSet(set,isDeep,cloneFunc){var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);return arrayReduce(array,addSetEntry,new set.constructor());}/**
	     * Creates a clone of the `symbol` object.
	     *
	     * @private
	     * @param {Object} symbol The symbol object to clone.
	     * @returns {Object} Returns the cloned symbol object.
	     */function cloneSymbol(symbol){return symbolValueOf?Object(symbolValueOf.call(symbol)):{};}/**
	     * Creates a clone of `typedArray`.
	     *
	     * @private
	     * @param {Object} typedArray The typed array to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the cloned typed array.
	     */function cloneTypedArray(typedArray,isDeep){var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}/**
	     * Compares values to sort them in ascending order.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {number} Returns the sort order indicator for `value`.
	     */function compareAscending(value,other){if(value!==other){var valIsDefined=value!==undefined,valIsNull=value===null,valIsReflexive=value===value,valIsSymbol=isSymbol(value);var othIsDefined=other!==undefined,othIsNull=other===null,othIsReflexive=other===other,othIsSymbol=isSymbol(other);if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||valIsNull&&othIsDefined&&othIsReflexive||!valIsDefined&&othIsReflexive||!valIsReflexive){return 1;}if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||othIsNull&&valIsDefined&&valIsReflexive||!othIsDefined&&valIsReflexive||!othIsReflexive){return-1;}}return 0;}/**
	     * Used by `_.orderBy` to compare multiple properties of a value to another
	     * and stable sort them.
	     *
	     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
	     * specify an order of "desc" for descending or "asc" for ascending sort order
	     * of corresponding values.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {boolean[]|string[]} orders The order to sort by for each property.
	     * @returns {number} Returns the sort order indicator for `object`.
	     */function compareMultiple(object,other,orders){var index=-1,objCriteria=object.criteria,othCriteria=other.criteria,length=objCriteria.length,ordersLength=orders.length;while(++index<length){var result=compareAscending(objCriteria[index],othCriteria[index]);if(result){if(index>=ordersLength){return result;}var order=orders[index];return result*(order=='desc'?-1:1);}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	// that causes it, under certain circumstances, to provide the same value for
	// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	// for more details.
	//
	// This also ensures a stable sort in V8 and other engines.
	// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
	return object.index-other.index;}/**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgs(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersLength=holders.length,leftIndex=-1,leftLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(leftLength+rangeLength),isUncurried=!isCurried;while(++leftIndex<leftLength){result[leftIndex]=partials[leftIndex];}while(++argsIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[holders[argsIndex]]=args[argsIndex];}}while(rangeLength--){result[leftIndex++]=args[argsIndex++];}return result;}/**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @params {boolean} [isCurried] Specify composing for a curried function.
	     * @returns {Array} Returns the new array of composed arguments.
	     */function composeArgsRight(args,partials,holders,isCurried){var argsIndex=-1,argsLength=args.length,holdersIndex=-1,holdersLength=holders.length,rightIndex=-1,rightLength=partials.length,rangeLength=nativeMax(argsLength-holdersLength,0),result=Array(rangeLength+rightLength),isUncurried=!isCurried;while(++argsIndex<rangeLength){result[argsIndex]=args[argsIndex];}var offset=argsIndex;while(++rightIndex<rightLength){result[offset+rightIndex]=partials[rightIndex];}while(++holdersIndex<holdersLength){if(isUncurried||argsIndex<argsLength){result[offset+holders[holdersIndex]]=args[argsIndex++];}}return result;}/**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */function copyArray(source,array){var index=-1,length=source.length;array||(array=Array(length));while(++index<length){array[index]=source[index];}return array;}/**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property identifiers to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @param {Function} [customizer] The function to customize copied values.
	     * @returns {Object} Returns `object`.
	     */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):undefined;assignValue(object,key,newValue===undefined?source[key]:newValue);}return object;}/**
	     * Copies own symbol properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy symbols from.
	     * @param {Object} [object={}] The object to copy symbols to.
	     * @returns {Object} Returns `object`.
	     */function copySymbols(source,object){return copyObject(source,getSymbols(source),object);}/**
	     * Creates a function like `_.groupBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} [initializer] The accumulator object initializer.
	     * @returns {Function} Returns the new aggregator function.
	     */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,getIteratee(iteratee,2),accumulator);};}/**
	     * Creates a function like `_.assign`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */function createAssigner(assigner){return baseRest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}/**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}/**
	     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}/**
	     * Creates a function that wraps `func` to invoke it with the optional `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createBind(func,bitmask,thisArg){var isBind=bitmask&BIND_FLAG,Ctor=createCtor(func);function wrapper(){var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return fn.apply(isBind?thisArg:this,arguments);}return wrapper;}/**
	     * Creates a function like `_.lowerFirst`.
	     *
	     * @private
	     * @param {string} methodName The name of the `String` case method to use.
	     * @returns {Function} Returns the new case function.
	     */function createCaseFirst(methodName){return function(string){string=toString(string);var strSymbols=hasUnicode(string)?stringToArray(string):undefined;var chr=strSymbols?strSymbols[0]:string.charAt(0);var trailing=strSymbols?castSlice(strSymbols,1).join(''):string.slice(1);return chr[methodName]()+trailing;};}/**
	     * Creates a function like `_.camelCase`.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */function createCompounder(callback){return function(string){return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');};}/**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCtor(Ctor){return function(){// Use a `switch` statement to work with class constructors. See
	// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
	// for more details.
	var args=arguments;switch(args.length){case 0:return new Ctor();case 1:return new Ctor(args[0]);case 2:return new Ctor(args[0],args[1]);case 3:return new Ctor(args[0],args[1],args[2]);case 4:return new Ctor(args[0],args[1],args[2],args[3]);case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}var thisBinding=baseCreate(Ctor.prototype),result=Ctor.apply(thisBinding,args);// Mimic the constructor's `return` behavior.
	// See https://es5.github.io/#x13.2.2 for more details.
	return isObject(result)?result:thisBinding;};}/**
	     * Creates a function that wraps `func` to enable currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {number} arity The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createCurry(func,bitmask,arity){var Ctor=createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length,placeholder=getHolder(wrapper);while(index--){args[index]=arguments[index];}var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?[]:replaceHolders(args,placeholder);length-=holders.length;if(length<arity){return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,undefined,args,holders,undefined,undefined,arity-length);}var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;return apply(fn,this,args);}return wrapper;}/**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} findIndexFunc The function to find the collection index.
	     * @returns {Function} Returns the new find function.
	     */function createFind(findIndexFunc){return function(collection,predicate,fromIndex){var iterable=Object(collection);if(!isArrayLike(collection)){var iteratee=getIteratee(predicate,3);collection=keys(collection);predicate=function predicate(key){return iteratee(iterable[key],key,iterable);};}var index=findIndexFunc(collection,predicate,fromIndex);return index>-1?iterable[iteratee?collection[index]:index]:undefined;};}/**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */function createFlow(fromRight){return baseRest(function(funcs){funcs=baseFlatten(funcs,1);var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;if(fromRight){funcs.reverse();}while(index--){var func=funcs[index];if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){var wrapper=new LodashWrapper([],true);}}index=wrapper?index:length;while(++index<length){func=funcs[index];var funcName=getFuncName(func),data=funcName=='wrapper'?getData(func):undefined;if(data&&isLaziable(data[0])&&data[1]==(ARY_FLAG|CURRY_FLAG|PARTIAL_FLAG|REARG_FLAG)&&!data[4].length&&data[9]==1){wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);}else{wrapper=func.length==1&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func);}}return function(){var args=arguments,value=args[0];if(wrapper&&args.length==1&&isArray(value)&&value.length>=LARGE_ARRAY_SIZE){return wrapper.plant(value).value();}var index=0,result=length?funcs[index].apply(this,args):value;while(++index<length){result=funcs[index].call(this,result);}return result;};});}/**
	     * Creates a function that wraps `func` to invoke it with optional `this`
	     * binding of `thisArg`, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided
	     *  to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createHybrid(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){var isAry=bitmask&ARY_FLAG,isBind=bitmask&BIND_FLAG,isBindKey=bitmask&BIND_KEY_FLAG,isCurried=bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG),isFlip=bitmask&FLIP_FLAG,Ctor=isBindKey?undefined:createCtor(func);function wrapper(){var length=arguments.length,args=Array(length),index=length;while(index--){args[index]=arguments[index];}if(isCurried){var placeholder=getHolder(wrapper),holdersCount=countHolders(args,placeholder);}if(partials){args=composeArgs(args,partials,holders,isCurried);}if(partialsRight){args=composeArgsRight(args,partialsRight,holdersRight,isCurried);}length-=holdersCount;if(isCurried&&length<arity){var newHolders=replaceHolders(args,placeholder);return createRecurry(func,bitmask,createHybrid,wrapper.placeholder,thisArg,args,newHolders,argPos,ary,arity-length);}var thisBinding=isBind?thisArg:this,fn=isBindKey?thisBinding[func]:func;length=args.length;if(argPos){args=reorder(args,argPos);}else if(isFlip&&length>1){args.reverse();}if(isAry&&ary<length){args.length=ary;}if(this&&this!==root&&this instanceof wrapper){fn=Ctor||createCtor(fn);}return fn.apply(thisBinding,args);}return wrapper;}/**
	     * Creates a function like `_.invertBy`.
	     *
	     * @private
	     * @param {Function} setter The function to set accumulator values.
	     * @param {Function} toIteratee The function to resolve iteratees.
	     * @returns {Function} Returns the new inverter function.
	     */function createInverter(setter,toIteratee){return function(object,iteratee){return baseInverter(object,setter,toIteratee(iteratee),{});};}/**
	     * Creates a function that performs a mathematical operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @param {number} [defaultValue] The value used for `undefined` arguments.
	     * @returns {Function} Returns the new mathematical operation function.
	     */function createMathOperation(operator,defaultValue){return function(value,other){var result;if(value===undefined&&other===undefined){return defaultValue;}if(value!==undefined){result=value;}if(other!==undefined){if(result===undefined){return other;}if(typeof value=='string'||typeof other=='string'){value=baseToString(value);other=baseToString(other);}else{value=baseToNumber(value);other=baseToNumber(other);}result=operator(value,other);}return result;};}/**
	     * Creates a function like `_.over`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over iteratees.
	     * @returns {Function} Returns the new over function.
	     */function createOver(arrayFunc){return baseRest(function(iteratees){iteratees=iteratees.length==1&&isArray(iteratees[0])?arrayMap(iteratees[0],baseUnary(getIteratee())):arrayMap(baseFlatten(iteratees,1),baseUnary(getIteratee()));return baseRest(function(args){var thisArg=this;return arrayFunc(iteratees,function(iteratee){return apply(iteratee,thisArg,args);});});});}/**
	     * Creates the padding for `string` based on `length`. The `chars` string
	     * is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {number} length The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padding for `string`.
	     */function createPadding(length,chars){chars=chars===undefined?' ':baseToString(chars);var charsLength=chars.length;if(charsLength<2){return charsLength?baseRepeat(chars,length):chars;}var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));return hasUnicode(chars)?castSlice(stringToArray(result),0,length).join(''):result.slice(0,length);}/**
	     * Creates a function that wraps `func` to invoke it with the `this` binding
	     * of `thisArg` and `partials` prepended to the arguments it receives.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to
	     *  the new function.
	     * @returns {Function} Returns the new wrapped function.
	     */function createPartial(func,bitmask,thisArg,partials){var isBind=bitmask&BIND_FLAG,Ctor=createCtor(func);function wrapper(){var argsIndex=-1,argsLength=arguments.length,leftIndex=-1,leftLength=partials.length,args=Array(leftLength+argsLength),fn=this&&this!==root&&this instanceof wrapper?Ctor:func;while(++leftIndex<leftLength){args[leftIndex]=partials[leftIndex];}while(argsLength--){args[leftIndex++]=arguments[++argsIndex];}return apply(fn,isBind?thisArg:this,args);}return wrapper;}/**
	     * Creates a `_.range` or `_.rangeRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new range function.
	     */function createRange(fromRight){return function(start,end,step){if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){end=step=undefined;}// Ensure the sign of `-0` is preserved.
	start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}step=step===undefined?start<end?1:-1:toFinite(step);return baseRange(start,end,step,fromRight);};}/**
	     * Creates a function that performs a relational operation on two values.
	     *
	     * @private
	     * @param {Function} operator The function to perform the operation.
	     * @returns {Function} Returns the new relational operation function.
	     */function createRelationalOperation(operator){return function(value,other){if(!(typeof value=='string'&&typeof other=='string')){value=toNumber(value);other=toNumber(other);}return operator(value,other);};}/**
	     * Creates a function that wraps `func` to continue currying.
	     *
	     * @private
	     * @param {Function} func The function to wrap.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @param {Function} wrapFunc The function to create the `func` wrapper.
	     * @param {*} placeholder The placeholder value.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to
	     *  the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createRecurry(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){var isCurry=bitmask&CURRY_FLAG,newHolders=isCurry?holders:undefined,newHoldersRight=isCurry?undefined:holders,newPartials=isCurry?partials:undefined,newPartialsRight=isCurry?undefined:partials;bitmask|=isCurry?PARTIAL_FLAG:PARTIAL_RIGHT_FLAG;bitmask&=~(isCurry?PARTIAL_RIGHT_FLAG:PARTIAL_FLAG);if(!(bitmask&CURRY_BOUND_FLAG)){bitmask&=~(BIND_FLAG|BIND_KEY_FLAG);}var newData=[func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,newHoldersRight,argPos,ary,arity];var result=wrapFunc.apply(undefined,newData);if(isLaziable(func)){setData(result,newData);}result.placeholder=placeholder;return setWrapToString(result,func,bitmask);}/**
	     * Creates a function like `_.round`.
	     *
	     * @private
	     * @param {string} methodName The name of the `Math` method to use when rounding.
	     * @returns {Function} Returns the new round function.
	     */function createRound(methodName){var func=Math[methodName];return function(number,precision){number=toNumber(number);precision=nativeMin(toInteger(precision),292);if(precision){// Shift with exponential notation to avoid floating-point issues.
	// See [MDN](https://mdn.io/round#Examples) for more details.
	var pair=(toString(number)+'e').split('e'),value=func(pair[0]+'e'+(+pair[1]+precision));pair=(toString(value)+'e').split('e');return+(pair[0]+'e'+(+pair[1]-precision));}return func(number);};}/**
	     * Creates a set object of `values`.
	     *
	     * @private
	     * @param {Array} values The values to add to the set.
	     * @returns {Object} Returns the new set.
	     */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};/**
	     * Creates a `_.toPairs` or `_.toPairsIn` function.
	     *
	     * @private
	     * @param {Function} keysFunc The function to get the keys of a given object.
	     * @returns {Function} Returns the new pairs function.
	     */function createToPairs(keysFunc){return function(object){var tag=getTag(object);if(tag==mapTag){return mapToArray(object);}if(tag==setTag){return setToPairs(object);}return baseToPairs(object,keysFunc(object));};}/**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to wrap.
	     * @param {number} bitmask The bitmask flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     *   512 - `_.flip`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */function createWrap(func,bitmask,thisArg,partials,holders,argPos,ary,arity){var isBindKey=bitmask&BIND_KEY_FLAG;if(!isBindKey&&typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var length=partials?partials.length:0;if(!length){bitmask&=~(PARTIAL_FLAG|PARTIAL_RIGHT_FLAG);partials=holders=undefined;}ary=ary===undefined?ary:nativeMax(toInteger(ary),0);arity=arity===undefined?arity:toInteger(arity);length-=holders?holders.length:0;if(bitmask&PARTIAL_RIGHT_FLAG){var partialsRight=partials,holdersRight=holders;partials=holders=undefined;}var data=isBindKey?undefined:getData(func);var newData=[func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity];if(data){mergeData(newData,data);}func=newData[0];bitmask=newData[1];thisArg=newData[2];partials=newData[3];holders=newData[4];arity=newData[9]=newData[9]==null?isBindKey?0:func.length:nativeMax(newData[9]-length,0);if(!arity&&bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG)){bitmask&=~(CURRY_FLAG|CURRY_RIGHT_FLAG);}if(!bitmask||bitmask==BIND_FLAG){var result=createBind(func,bitmask,thisArg);}else if(bitmask==CURRY_FLAG||bitmask==CURRY_RIGHT_FLAG){result=createCurry(func,bitmask,arity);}else if((bitmask==PARTIAL_FLAG||bitmask==(BIND_FLAG|PARTIAL_FLAG))&&!holders.length){result=createPartial(func,bitmask,thisArg,partials);}else{result=createHybrid.apply(undefined,newData);}var setter=data?baseSetData:setData;return setWrapToString(setter(result,newData),func,bitmask);}/**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `array` and `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */function equalArrays(array,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(array);if(stacked&&stack.get(other)){return stacked==other;}var index=-1,result=true,seen=bitmask&UNORDERED_COMPARE_FLAG?new SetCache():undefined;stack.set(array,other);stack.set(other,array);// Ignore non-index properties.
	while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
	if(seen){if(!arraySome(other,function(othValue,othIndex){if(!seen.has(othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){return seen.add(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){result=false;break;}}stack['delete'](array);stack['delete'](other);return result;}/**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:case numberTag:// Coerce booleans to `1` or `0` and dates to milliseconds.
	// Invalid dates are coerced to `NaN`.
	return eq(+object,+other);case errorTag:return object.name==other.name&&object.message==other.message;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
	// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	// for more details.
	return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&PARTIAL_COMPARE_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=UNORDERED_COMPARE_FLAG;// Recursively compare objects (susceptible to call stack limits).
	stack.set(object,other);var result=equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);stack['delete'](object);return result;case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}/**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} customizer The function to customize comparisons.
	     * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	     *  for more details.
	     * @param {Object} stack Tracks traversed `object` and `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */function equalObjects(object,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key))){return false;}}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked&&stack.get(other)){return stacked==other;}var result=true;stack.set(object,other);stack.set(other,object);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
	if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
	if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);stack['delete'](other);return result;}/**
	     * Creates an array of own enumerable property names and symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeys(object){return baseGetAllKeys(object,keys,getSymbols);}/**
	     * Creates an array of own and inherited enumerable property names and
	     * symbols of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names and symbols.
	     */function getAllKeysIn(object){return baseGetAllKeys(object,keysIn,getSymbolsIn);}/**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */var getData=!metaMap?noop:function(func){return metaMap.get(func);};/**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */function getFuncName(func){var result=func.name+'',array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;while(length--){var data=array[length],otherFunc=data.func;if(otherFunc==null||otherFunc==func){return data.name;}}return result;}/**
	     * Gets the argument placeholder value for `func`.
	     *
	     * @private
	     * @param {Function} func The function to inspect.
	     * @returns {*} Returns the placeholder value.
	     */function getHolder(func){var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;return object.placeholder;}/**
	     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
	     * this function returns the custom method, otherwise it returns `baseIteratee`.
	     * If arguments are provided, the chosen function is invoked with them and
	     * its result is returned.
	     *
	     * @private
	     * @param {*} [value] The value to convert to an iteratee.
	     * @param {number} [arity] The arity of the created iteratee.
	     * @returns {Function} Returns the chosen function or its result.
	     */function getIteratee(){var result=lodash.iteratee||iteratee;result=result===iteratee?baseIteratee:result;return arguments.length?result(arguments[0],arguments[1]):result;}/**
	     * Gets the data for `map`.
	     *
	     * @private
	     * @param {Object} map The map to query.
	     * @param {string} key The reference key.
	     * @returns {*} Returns the map data.
	     */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}/**
	     * Gets the property names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}/**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}/**
	     * Creates an array of the own enumerable symbol properties of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbols=nativeGetSymbols?overArg(nativeGetSymbols,Object):stubArray;/**
	     * Creates an array of the own and inherited enumerable symbol properties
	     * of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of symbols.
	     */var getSymbolsIn=!nativeGetSymbols?stubArray:function(object){var result=[];while(object){arrayPush(result,getSymbols(object));object=getPrototype(object);}return result;};/**
	     * Gets the `toStringTag` of `value`.
	     *
	     * @private
	     * @param {*} value The value to query.
	     * @returns {string} Returns the `toStringTag`.
	     */var getTag=baseGetTag;// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}/**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} transforms The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */function getView(start,end,transforms){var index=-1,length=transforms.length;while(++index<length){var data=transforms[index],size=data.size;switch(data.type){case'drop':start+=size;break;case'dropRight':end-=size;break;case'take':end=nativeMin(end,start+size);break;case'takeRight':start=nativeMax(start,end-size);break;}}return{'start':start,'end':end};}/**
	     * Extracts wrapper details from the `source` body comment.
	     *
	     * @private
	     * @param {string} source The source to inspect.
	     * @returns {Array} Returns the wrapper details.
	     */function getWrapDetails(source){var match=source.match(reWrapDetails);return match?match[1].split(reSplitDetails):[];}/**
	     * Checks if `path` exists on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @param {Function} hasFunc The function to check properties.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     */function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var result,index=-1,length=path.length;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result){return result;}var length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isArguments(object));}/**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */function initCloneArray(array){var length=array.length,result=array.constructor(length);// Add properties assigned by `RegExp#exec`.
	if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){result.index=array.index;result.input=array.input;}return result;}/**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */function initCloneObject(object){return typeof object.constructor=='function'&&!isPrototype(object)?baseCreate(getPrototype(object)):{};}/**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {Function} cloneFunc The function to clone values.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */function initCloneByTag(object,tag,cloneFunc,isDeep){var Ctor=object.constructor;switch(tag){case arrayBufferTag:return cloneArrayBuffer(object);case boolTag:case dateTag:return new Ctor(+object);case dataViewTag:return cloneDataView(object,isDeep);case float32Tag:case float64Tag:case int8Tag:case int16Tag:case int32Tag:case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:return cloneTypedArray(object,isDeep);case mapTag:return cloneMap(object,isDeep,cloneFunc);case numberTag:case stringTag:return new Ctor(object);case regexpTag:return cloneRegExp(object);case setTag:return cloneSet(object,isDeep,cloneFunc);case symbolTag:return cloneSymbol(object);}}/**
	     * Inserts wrapper `details` in a comment at the top of the `source` body.
	     *
	     * @private
	     * @param {string} source The source to modify.
	     * @returns {Array} details The details to insert.
	     * @returns {string} Returns the modified source.
	     */function insertWrapDetails(source,details){var length=details.length,lastIndex=length-1;details[lastIndex]=(length>1?'& ':'')+details[lastIndex];details=details.join(length>2?', ':' ');return source.replace(reWrapComment,'{\n/* [wrapped with '+details+'] */\n');}/**
	     * Checks if `value` is a flattenable `arguments` object or array.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
	     */function isFlattenable(value){return isArray(value)||isArguments(value)||!!(spreadableSymbol&&value&&value[spreadableSymbol]);}/**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}/**
	     * Checks if the given arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	     *  else `false`.
	     */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}/**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}/**
	     * Checks if `value` is suitable for use as unique object key.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	     */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}/**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
	     *  else `false`.
	     */function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){return false;}if(func===other){return true;}var data=getData(other);return!!data&&func===data[0];}/**
	     * Checks if `func` has its source masked.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	     */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}/**
	     * Checks if `func` is capable of being masked.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
	     */var isMaskable=coreJsData?isFunction:stubFalse;/**
	     * Checks if `value` is likely a prototype object.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	     */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}/**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */function isStrictComparable(value){return value===value&&!isObject(value);}/**
	     * A specialized version of `matchesProperty` for source values suitable
	     * for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}/**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers used to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and
	     * `_.rearg` modify function arguments, making the order in which they are
	     * executed important, preventing the merging of metadata. However, we make
	     * an exception for a safe combined case where curried functions have `_.ary`
	     * and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */function mergeData(data,source){var bitmask=data[1],srcBitmask=source[1],newBitmask=bitmask|srcBitmask,isCommon=newBitmask<(BIND_FLAG|BIND_KEY_FLAG|ARY_FLAG);var isCombo=srcBitmask==ARY_FLAG&&bitmask==CURRY_FLAG||srcBitmask==ARY_FLAG&&bitmask==REARG_FLAG&&data[7].length<=source[8]||srcBitmask==(ARY_FLAG|REARG_FLAG)&&source[7].length<=source[8]&&bitmask==CURRY_FLAG;// Exit early if metadata can't be merged.
	if(!(isCommon||isCombo)){return data;}// Use source `thisArg` if available.
	if(srcBitmask&BIND_FLAG){data[2]=source[2];// Set when currying a bound function.
	newBitmask|=bitmask&BIND_FLAG?0:CURRY_BOUND_FLAG;}// Compose partial arguments.
	var value=source[3];if(value){var partials=data[3];data[3]=partials?composeArgs(partials,value,source[4]):value;data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];}// Compose partial right arguments.
	value=source[5];if(value){partials=data[5];data[5]=partials?composeArgsRight(partials,value,source[6]):value;data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];}// Use source `argPos` if available.
	value=source[7];if(value){data[7]=value;}// Use source `ary` if it's smaller.
	if(srcBitmask&ARY_FLAG){data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);}// Use source `arity` if one is not provided.
	if(data[9]==null){data[9]=source[9];}// Use source `func` and merge bitmasks.
	data[0]=source[0];data[1]=newBitmask;return data;}/**
	     * Used by `_.defaultsDeep` to customize its `_.merge` use.
	     *
	     * @private
	     * @param {*} objValue The destination value.
	     * @param {*} srcValue The source value.
	     * @param {string} key The key of the property to merge.
	     * @param {Object} object The parent object of `objValue`.
	     * @param {Object} source The parent object of `srcValue`.
	     * @param {Object} [stack] Tracks traversed source values and their merged
	     *  counterparts.
	     * @returns {*} Returns the value to assign.
	     */function mergeDefaults(objValue,srcValue,key,object,source,stack){if(isObject(objValue)&&isObject(srcValue)){// Recursively merge objects and arrays (susceptible to call stack limits).
	stack.set(srcValue,objValue);baseMerge(objValue,srcValue,undefined,mergeDefaults,stack);stack['delete'](srcValue);}return objValue;}/**
	     * This function is like
	     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * except that it includes inherited enumerable properties.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */function nativeKeysIn(object){var result=[];if(object!=null){for(var key in Object(object)){result.push(key);}}return result;}/**
	     * Gets the parent value at `path` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path to get the parent value of.
	     * @returns {*} Returns the parent value.
	     */function parent(object,path){return path.length==1?object:baseGet(object,baseSlice(path,0,-1));}/**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */function reorder(array,indexes){var arrLength=array.length,length=nativeMin(indexes.length,arrLength),oldArray=copyArray(array);while(length--){var index=indexes[length];array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;}return array;}/**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity
	     * function to avoid garbage collection pauses in V8. See
	     * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */var setData=function(){var count=0,lastCalled=0;return function(key,value){var stamp=now(),remaining=HOT_SPAN-(stamp-lastCalled);lastCalled=stamp;if(remaining>0){if(++count>=HOT_COUNT){return key;}}else{count=0;}return baseSetData(key,value);};}();/**
	     * A simple wrapper around the global [`setTimeout`](https://mdn.io/setTimeout).
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @returns {number|Object} Returns the timer id or timeout object.
	     */var setTimeout=ctxSetTimeout||function(func,wait){return root.setTimeout(func,wait);};/**
	     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
	     * with wrapper details in a comment at the top of the source body.
	     *
	     * @private
	     * @param {Function} wrapper The function to modify.
	     * @param {Function} reference The reference function.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Function} Returns `wrapper`.
	     */var setWrapToString=!defineProperty?identity:function(wrapper,reference,bitmask){var source=reference+'';return defineProperty(wrapper,'toString',{'configurable':true,'enumerable':false,'value':constant(insertWrapDetails(source,updateWrapDetails(getWrapDetails(source),bitmask)))});};/**
	     * Converts `string` to a property path array.
	     *
	     * @private
	     * @param {string} string The string to convert.
	     * @returns {Array} Returns the property path array.
	     */var stringToPath=memoize(function(string){string=toString(string);var result=[];if(reLeadingDot.test(string)){result.push('');}string.replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});/**
	     * Converts `value` to a string key if it's not a string or symbol.
	     *
	     * @private
	     * @param {*} value The value to inspect.
	     * @returns {string|symbol} Returns the key.
	     */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}/**
	     * Converts `func` to its source code.
	     *
	     * @private
	     * @param {Function} func The function to process.
	     * @returns {string} Returns the source code.
	     */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}/**
	     * Updates wrapper `details` based on `bitmask` flags.
	     *
	     * @private
	     * @returns {Array} details The details to modify.
	     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
	     * @returns {Array} Returns `details`.
	     */function updateWrapDetails(details,bitmask){arrayEach(wrapFlags,function(pair){var value='_.'+pair[0];if(bitmask&pair[1]&&!arrayIncludes(details,value)){details.push(value);}});return details.sort();}/**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper){return wrapper.clone();}var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);result.__actions__=copyArray(wrapper.__actions__);result.__index__=wrapper.__index__;result.__values__=wrapper.__values__;return result;}/*------------------------------------------------------------------------*//**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `array` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the new array of chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */function chunk(array,size,guard){if(guard?isIterateeCall(array,size,guard):size===undefined){size=1;}else{size=nativeMax(toInteger(size),0);}var length=array?array.length:0;if(!length||size<1){return[];}var index=0,resIndex=0,result=Array(nativeCeil(length/size));while(index<length){result[resIndex++]=baseSlice(array,index,index+=size);}return result;}/**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */function compact(array){var index=-1,length=array?array.length:0,resIndex=0,result=[];while(++index<length){var value=array[index];if(value){result[resIndex++]=value;}}return result;}/**
	     * Creates a new array concatenating `array` with any additional arrays
	     * and/or values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to concatenate.
	     * @param {...*} [values] The values to concatenate.
	     * @returns {Array} Returns the new concatenated array.
	     * @example
	     *
	     * var array = [1];
	     * var other = _.concat(array, 2, [3], [[4]]);
	     *
	     * console.log(other);
	     * // => [1, 2, 3, [4]]
	     *
	     * console.log(array);
	     * // => [1]
	     */function concat(){var length=arguments.length,args=Array(length?length-1:0),array=arguments[0],index=length;while(index--){args[index-1]=arguments[index];}return length?arrayPush(isArray(array)?copyArray(array):[array],baseFlatten(args,1)):[];}/**
	     * Creates an array of `array` values not included in the other given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order of result values is determined by the
	     * order they occur in the first array.
	     *
	     * **Note:** Unlike `_.pullAll`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.without, _.xor
	     * @example
	     *
	     * _.difference([2, 1], [2, 3]);
	     * // => [1]
	     */var difference=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):[];});/**
	     * This method is like `_.difference` except that it accepts `iteratee` which
	     * is invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. Result values are chosen from the first array.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.pullAllBy`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var differenceBy=baseRest(function(array,values){var iteratee=last(values);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee,2)):[];});/**
	     * This method is like `_.difference` except that it accepts `comparator`
	     * which is invoked to compare elements of `array` to `values`. Result values
	     * are chosen from the first array. The comparator is invoked with two arguments:
	     * (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.pullAllWith`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The values to exclude.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     *
	     * _.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }]
	     */var differenceWith=baseRest(function(array,values){var comparator=last(values);if(isArrayLikeObject(comparator)){comparator=undefined;}return isArrayLikeObject(array)?baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):[];});/**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function drop(array,n,guard){var length=array?array.length:0;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,n<0?0:n,length);}/**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */function dropRight(array,n,guard){var length=array?array.length:0;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,0,n<0?0:n);}/**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.dropRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropRightWhile(users, ['active', false]);
	     * // => objects for ['barney']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropRightWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true,true):[];}/**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.dropWhile(users, function(o) { return !o.active; });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.dropWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.dropWhile(users, ['active', false]);
	     * // => objects for ['pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.dropWhile(users, 'active');
	     * // => objects for ['barney', 'fred', 'pebbles']
	     */function dropWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),true):[];}/**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8, 10], '*', 1, 3);
	     * // => [4, '*', '*', 10]
	     */function fill(array,value,start,end){var length=array?array.length:0;if(!length){return[];}if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){start=0;end=length;}return baseFill(array,value,start,end);}/**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(o) { return o.user == 'barney'; });
	     * // => 0
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findIndex(users, ['active', false]);
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findIndex(users, 'active');
	     * // => 2
	     */function findIndex(array,predicate,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseFindIndex(array,getIteratee(predicate,3),index);}/**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
	     * // => 2
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastIndex(users, ['active', false]);
	     * // => 2
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */function findLastIndex(array,predicate,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=length-1;if(fromIndex!==undefined){index=toInteger(fromIndex);index=fromIndex<0?nativeMax(length+index,0):nativeMin(index,length-1);}return baseFindIndex(array,getIteratee(predicate,3),index,true);}/**
	     * Flattens `array` a single level deep.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, [3, [4]], 5]
	     */function flatten(array){var length=array?array.length:0;return length?baseFlatten(array,1):[];}/**
	     * Recursively flattens `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, [3, [4]], 5]]);
	     * // => [1, 2, 3, 4, 5]
	     */function flattenDeep(array){var length=array?array.length:0;return length?baseFlatten(array,INFINITY):[];}/**
	     * Recursively flatten `array` up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * var array = [1, [2, [3, [4]], 5]];
	     *
	     * _.flattenDepth(array, 1);
	     * // => [1, 2, [3, [4]], 5]
	     *
	     * _.flattenDepth(array, 2);
	     * // => [1, 2, 3, [4], 5]
	     */function flattenDepth(array,depth){var length=array?array.length:0;if(!length){return[];}depth=depth===undefined?1:toInteger(depth);return baseFlatten(array,depth);}/**
	     * The inverse of `_.toPairs`; this method returns an object composed
	     * from key-value `pairs`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} pairs The key-value pairs.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.fromPairs([['a', 1], ['b', 2]]);
	     * // => { 'a': 1, 'b': 2 }
	     */function fromPairs(pairs){var index=-1,length=pairs?pairs.length:0,result={};while(++index<length){var pair=pairs[index];result[pair[0]]=pair[1];}return result;}/**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias first
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.head([1, 2, 3]);
	     * // => 1
	     *
	     * _.head([]);
	     * // => undefined
	     */function head(array){return array&&array.length?array[0]:undefined;}/**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it's used as the
	     * offset from the end of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // Search from the `fromIndex`.
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     */function indexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=fromIndex==null?0:toInteger(fromIndex);if(index<0){index=nativeMax(length+index,0);}return baseIndexOf(array,value,index);}/**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */function initial(array){var length=array?array.length:0;return length?baseSlice(array,0,-1):[];}/**
	     * Creates an array of unique values that are included in all given arrays
	     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons. The order of result values is determined by the
	     * order they occur in the first array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersection([2, 1], [2, 3]);
	     * // => [2]
	     */var intersection=baseRest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});/**
	     * This method is like `_.intersection` except that it accepts `iteratee`
	     * which is invoked for each element of each `arrays` to generate the criterion
	     * by which they're compared. Result values are chosen from the first array.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [2.1]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }]
	     */var intersectionBy=baseRest(function(arrays){var iteratee=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(iteratee===last(mapped)){iteratee=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,getIteratee(iteratee,2)):[];});/**
	     * This method is like `_.intersection` except that it accepts `comparator`
	     * which is invoked to compare elements of `arrays`. Result values are chosen
	     * from the first array. The comparator is invoked with two arguments:
	     * (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of intersecting values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.intersectionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }]
	     */var intersectionWith=baseRest(function(arrays){var comparator=last(arrays),mapped=arrayMap(arrays,castArrayLikeObject);if(comparator===last(mapped)){comparator=undefined;}else{mapped.pop();}return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped,undefined,comparator):[];});/**
	     * Converts all elements in `array` into a string separated by `separator`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to convert.
	     * @param {string} [separator=','] The element separator.
	     * @returns {string} Returns the joined string.
	     * @example
	     *
	     * _.join(['a', 'b', 'c'], '~');
	     * // => 'a~b~c'
	     */function join(array,separator){return array?nativeJoin.call(array,separator):'';}/**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */function last(array){var length=array?array.length:0;return length?array[length-1]:undefined;}/**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=array.length-1] The index to search from.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // Search from the `fromIndex`.
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     */function lastIndexOf(array,value,fromIndex){var length=array?array.length:0;if(!length){return-1;}var index=length;if(fromIndex!==undefined){index=toInteger(fromIndex);index=(index<0?nativeMax(length+index,0):nativeMin(index,length-1))+1;}if(value!==value){return baseFindIndex(array,baseIsNaN,index-1,true);}while(index--){if(array[index]===value){return index;}}return-1;}/**
	     * Gets the element at index `n` of `array`. If `n` is negative, the nth
	     * element from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.11.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=0] The index of the element to return.
	     * @returns {*} Returns the nth element of `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     *
	     * _.nth(array, 1);
	     * // => 'b'
	     *
	     * _.nth(array, -2);
	     * // => 'c';
	     */function nth(array,n){return array&&array.length?baseNth(array,toInteger(n)):undefined;}/**
	     * Removes all given values from `array` using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`. Use `_.remove`
	     * to remove elements from an array by predicate.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pull(array, 'a', 'c');
	     * console.log(array);
	     * // => ['b', 'b']
	     */var pull=baseRest(pullAll);/**
	     * This method is like `_.pull` except that it accepts an array of values to remove.
	     *
	     * **Note:** Unlike `_.difference`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
	     *
	     * _.pullAll(array, ['a', 'c']);
	     * console.log(array);
	     * // => ['b', 'b']
	     */function pullAll(array,values){return array&&array.length&&values&&values.length?basePullAll(array,values):array;}/**
	     * This method is like `_.pullAll` except that it accepts `iteratee` which is
	     * invoked for each element of `array` and `values` to generate the criterion
	     * by which they're compared. The iteratee is invoked with one argument: (value).
	     *
	     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
	     *
	     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
	     * console.log(array);
	     * // => [{ 'x': 2 }]
	     */function pullAllBy(array,values,iteratee){return array&&array.length&&values&&values.length?basePullAll(array,values,getIteratee(iteratee,2)):array;}/**
	     * This method is like `_.pullAll` except that it accepts `comparator` which
	     * is invoked to compare elements of `array` to `values`. The comparator is
	     * invoked with two arguments: (arrVal, othVal).
	     *
	     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Array} values The values to remove.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
	     *
	     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
	     * console.log(array);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
	     */function pullAllWith(array,values,comparator){return array&&array.length&&values&&values.length?basePullAll(array,values,undefined,comparator):array;}/**
	     * Removes elements from `array` corresponding to `indexes` and returns an
	     * array of removed elements.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = ['a', 'b', 'c', 'd'];
	     * var pulled = _.pullAt(array, [1, 3]);
	     *
	     * console.log(array);
	     * // => ['a', 'c']
	     *
	     * console.log(pulled);
	     * // => ['b', 'd']
	     */var pullAt=baseRest(function(array,indexes){indexes=baseFlatten(indexes,1);var length=array?array.length:0,result=baseAt(array,indexes);basePullAt(array,arrayMap(indexes,function(index){return isIndex(index,length)?+index:index;}).sort(compareAscending));return result;});/**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is invoked
	     * with three arguments: (value, index, array).
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
	     * to pull elements from an array by value.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */function remove(array,predicate){var result=[];if(!(array&&array.length)){return result;}var index=-1,indexes=[],length=array.length;predicate=getIteratee(predicate,3);while(++index<length){var value=array[index];if(predicate(value,index,array)){result.push(value);indexes.push(index);}}basePullAt(array,indexes);return result;}/**
	     * Reverses `array` so that the first element becomes the last, the second
	     * element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates `array` and is based on
	     * [`Array#reverse`](https://mdn.io/Array/reverse).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.reverse(array);
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function reverse(array){return array?nativeReverse.call(array):array;}/**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of
	     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
	     * returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */function slice(array,start,end){var length=array?array.length:0;if(!length){return[];}if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){start=0;end=length;}else{start=start==null?0:toInteger(start);end=end===undefined?length:toInteger(end);}return baseSlice(array,start,end);}/**
	     * Uses a binary search to determine the lowest index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     */function sortedIndex(array,value){return baseSortedIndex(array,value);}/**
	     * This method is like `_.sortedIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 0
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 0
	     */function sortedIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2));}/**
	     * This method is like `_.indexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 1
	     */function sortedIndexOf(array,value){var length=array?array.length:0;if(length){var index=baseSortedIndex(array,value);if(index<length&&eq(array[index],value)){return index;}}return-1;}/**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
	     * // => 4
	     */function sortedLastIndex(array,value){return baseSortedIndex(array,value,true);}/**
	     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
	     * which is invoked for `value` and each element of `array` to compute their
	     * sort ranking. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * var objects = [{ 'x': 4 }, { 'x': 5 }];
	     *
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
	     * // => 1
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
	     * // => 1
	     */function sortedLastIndexBy(array,value,iteratee){return baseSortedIndexBy(array,value,getIteratee(iteratee,2),true);}/**
	     * This method is like `_.lastIndexOf` except that it performs a binary
	     * search on a sorted `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
	     * // => 3
	     */function sortedLastIndexOf(array,value){var length=array?array.length:0;if(length){var index=baseSortedIndex(array,value,true)-1;if(eq(array[index],value)){return index;}}return-1;}/**
	     * This method is like `_.uniq` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniq([1, 1, 2]);
	     * // => [1, 2]
	     */function sortedUniq(array){return array&&array.length?baseSortedUniq(array):[];}/**
	     * This method is like `_.uniqBy` except that it's designed and optimized
	     * for sorted arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
	     * // => [1.1, 2.3]
	     */function sortedUniqBy(array,iteratee){return array&&array.length?baseSortedUniq(array,getIteratee(iteratee,2)):[];}/**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.tail([1, 2, 3]);
	     * // => [2, 3]
	     */function tail(array){var length=array?array.length:0;return length?baseSlice(array,1,length):[];}/**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */function take(array,n,guard){if(!(array&&array.length)){return[];}n=guard||n===undefined?1:toInteger(n);return baseSlice(array,0,n<0?0:n);}/**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */function takeRight(array,n,guard){var length=array?array.length:0;if(!length){return[];}n=guard||n===undefined?1:toInteger(n);n=length-n;return baseSlice(array,n<0?0:n,length);}/**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.takeRightWhile(users, function(o) { return !o.active; });
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
	     * // => objects for ['pebbles']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeRightWhile(users, ['active', false]);
	     * // => objects for ['fred', 'pebbles']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeRightWhile(users, 'active');
	     * // => []
	     */function takeRightWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3),false,true):[];}/**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is invoked with
	     * three arguments: (value, index, array).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.takeWhile(users, function(o) { return !o.active; });
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.takeWhile(users, { 'user': 'barney', 'active': false });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.takeWhile(users, ['active', false]);
	     * // => objects for ['barney', 'fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.takeWhile(users, 'active');
	     * // => []
	     */function takeWhile(array,predicate){return array&&array.length?baseWhile(array,getIteratee(predicate,3)):[];}/**
	     * Creates an array of unique values, in order, from all given arrays using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([2], [1, 2]);
	     * // => [2, 1]
	     */var union=baseRest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});/**
	     * This method is like `_.union` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which uniqueness is computed. Result values are chosen from the first
	     * array in which the value occurs. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.unionBy([2.1], [1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */var unionBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee,2));});/**
	     * This method is like `_.union` except that it accepts `comparator` which
	     * is invoked to compare elements of `arrays`. Result values are chosen from
	     * the first array in which the value occurs. The comparator is invoked
	     * with two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.unionWith(objects, others, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var unionWith=baseRest(function(arrays){var comparator=last(arrays);if(isArrayLikeObject(comparator)){comparator=undefined;}return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);});/**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurrence of each
	     * element is kept.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     */function uniq(array){return array&&array.length?baseUniq(array):[];}/**
	     * This method is like `_.uniq` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * uniqueness is computed. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
	     * // => [2.1, 1.2]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */function uniqBy(array,iteratee){return array&&array.length?baseUniq(array,getIteratee(iteratee,2)):[];}/**
	     * This method is like `_.uniq` except that it accepts `comparator` which
	     * is invoked to compare elements of `array`. The comparator is invoked with
	     * two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new duplicate free array.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.uniqWith(objects, _.isEqual);
	     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
	     */function uniqWith(array,comparator){return array&&array.length?baseUniq(array,undefined,comparator):[];}/**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.2.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['a', 'b'], [1, 2], [true, false]]
	     */function unzip(array){if(!(array&&array.length)){return[];}var length=0;array=arrayFilter(array,function(group){if(isArrayLikeObject(group)){length=nativeMax(group.length,length);return true;}});return baseTimes(length,function(index){return arrayMap(array,baseProperty(index));});}/**
	     * This method is like `_.unzip` except that it accepts `iteratee` to specify
	     * how regrouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee=_.identity] The function to combine
	     *  regrouped values.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */function unzipWith(array,iteratee){if(!(array&&array.length)){return[];}var result=unzip(array);if(iteratee==null){return result;}return arrayMap(result,function(group){return apply(iteratee,undefined,group);});}/**
	     * Creates an array excluding all given values using
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.pull`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.xor
	     * @example
	     *
	     * _.without([2, 1, 2, 3], 1, 2);
	     * // => [3]
	     */var without=baseRest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});/**
	     * Creates an array of unique values that is the
	     * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the given arrays. The order of result values is determined by the order
	     * they occur in the arrays.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of filtered values.
	     * @see _.difference, _.without
	     * @example
	     *
	     * _.xor([2, 1], [2, 3]);
	     * // => [1, 3]
	     */var xor=baseRest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});/**
	     * This method is like `_.xor` except that it accepts `iteratee` which is
	     * invoked for each element of each `arrays` to generate the criterion by
	     * which by which they're compared. The iteratee is invoked with one argument:
	     * (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
	     * // => [1.2, 3.4]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 2 }]
	     */var xorBy=baseRest(function(arrays){var iteratee=last(arrays);if(isArrayLikeObject(iteratee)){iteratee=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee,2));});/**
	     * This method is like `_.xor` except that it accepts `comparator` which is
	     * invoked to compare elements of `arrays`. The comparator is invoked with
	     * two arguments: (arrVal, othVal).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @param {Function} [comparator] The comparator invoked per element.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
	     * var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
	     *
	     * _.xorWith(objects, others, _.isEqual);
	     * // => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
	     */var xorWith=baseRest(function(arrays){var comparator=last(arrays);if(isArrayLikeObject(comparator)){comparator=undefined;}return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);});/**
	     * Creates an array of grouped elements, the first of which contains the
	     * first elements of the given arrays, the second of which contains the
	     * second elements of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['a', 'b'], [1, 2], [true, false]);
	     * // => [['a', 1, true], ['b', 2, false]]
	     */var zip=baseRest(unzip);/**
	     * This method is like `_.fromPairs` except that it accepts two arrays,
	     * one of property identifiers and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.4.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject(['a', 'b'], [1, 2]);
	     * // => { 'a': 1, 'b': 2 }
	     */function zipObject(props,values){return baseZipObject(props||[],values||[],assignValue);}/**
	     * This method is like `_.zipObject` except that it supports property paths.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Array
	     * @param {Array} [props=[]] The property identifiers.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
	     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
	     */function zipObjectDeep(props,values){return baseZipObject(props||[],values||[],baseSet);}/**
	     * This method is like `_.zip` except that it accepts `iteratee` to specify
	     * how grouped values should be combined. The iteratee is invoked with the
	     * elements of each group: (...group).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee=_.identity] The function to combine grouped values.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
	     *   return a + b + c;
	     * });
	     * // => [111, 222]
	     */var zipWith=baseRest(function(arrays){var length=arrays.length,iteratee=length>1?arrays[length-1]:undefined;iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;return unzipWith(arrays,iteratee);});/*------------------------------------------------------------------------*//**
	     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
	     * chain sequences enabled. The result of such sequences must be unwrapped
	     * with `_#value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Seq
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _
	     *   .chain(users)
	     *   .sortBy('age')
	     *   .map(function(o) {
	     *     return o.user + ' is ' + o.age;
	     *   })
	     *   .head()
	     *   .value();
	     * // => 'pebbles is 1'
	     */function chain(value){var result=lodash(value);result.__chain__=true;return result;}/**
	     * This method invokes `interceptor` and returns `value`. The interceptor
	     * is invoked with one argument; (value). The purpose of this method is to
	     * "tap into" a method chain sequence in order to modify intermediate results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    // Mutate input array.
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */function tap(value,interceptor){interceptor(value);return value;}/**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     * The purpose of this method is to "pass thru" values replacing intermediate
	     * results in a method chain sequence.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Seq
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */function thru(value,interceptor){return interceptor(value);}/**
	     * This method is the wrapper version of `_.at`.
	     *
	     * @name at
	     * @memberOf _
	     * @since 1.0.0
	     * @category Seq
	     * @param {...(string|string[])} [paths] The property paths of elements to pick.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _(object).at(['a[0].b.c', 'a[1]']).value();
	     * // => [3, 4]
	     */var wrapperAt=baseRest(function(paths){paths=baseFlatten(paths,1);var length=paths.length,start=length?paths[0]:0,value=this.__wrapped__,interceptor=function interceptor(object){return baseAt(object,paths);};if(length>1||this.__actions__.length||!(value instanceof LazyWrapper)||!isIndex(start)){return this.thru(interceptor);}value=value.slice(start,+start+(length?1:0));value.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(value,this.__chain__).thru(function(array){if(length&&!array.length){array.push(undefined);}return array;});});/**
	     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
	     *
	     * @name chain
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // A sequence without explicit chaining.
	     * _(users).head();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // A sequence with explicit chaining.
	     * _(users)
	     *   .chain()
	     *   .head()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */function wrapperChain(){return chain(this);}/**
	     * Executes the chain sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapped = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapped = wrapped.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapped.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */function wrapperCommit(){return new LodashWrapper(this.value(),this.__chain__);}/**
	     * Gets the next value on a wrapped object following the
	     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
	     *
	     * @name next
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the next iterator value.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 1 }
	     *
	     * wrapped.next();
	     * // => { 'done': false, 'value': 2 }
	     *
	     * wrapped.next();
	     * // => { 'done': true, 'value': undefined }
	     */function wrapperNext(){if(this.__values__===undefined){this.__values__=toArray(this.value());}var done=this.__index__>=this.__values__.length,value=done?undefined:this.__values__[this.__index__++];return{'done':done,'value':value};}/**
	     * Enables the wrapper to be iterable.
	     *
	     * @name Symbol.iterator
	     * @memberOf _
	     * @since 4.0.0
	     * @category Seq
	     * @returns {Object} Returns the wrapper object.
	     * @example
	     *
	     * var wrapped = _([1, 2]);
	     *
	     * wrapped[Symbol.iterator]() === wrapped;
	     * // => true
	     *
	     * Array.from(wrapped);
	     * // => [1, 2]
	     */function wrapperToIterator(){return this;}/**
	     * Creates a clone of the chain sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @since 3.2.0
	     * @category Seq
	     * @param {*} value The value to plant.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var wrapped = _([1, 2]).map(square);
	     * var other = wrapped.plant([3, 4]);
	     *
	     * other.value();
	     * // => [9, 16]
	     *
	     * wrapped.value();
	     * // => [1, 4]
	     */function wrapperPlant(value){var result,parent=this;while(parent instanceof baseLodash){var clone=wrapperClone(parent);clone.__index__=0;clone.__values__=undefined;if(result){previous.__wrapped__=clone;}else{result=clone;}var previous=clone;parent=parent.__wrapped__;}previous.__wrapped__=value;return result;}/**
	     * This method is the wrapper version of `_.reverse`.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @since 0.1.0
	     * @category Seq
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */function wrapperReverse(){var value=this.__wrapped__;if(value instanceof LazyWrapper){var wrapped=value;if(this.__actions__.length){wrapped=new LazyWrapper(this);}wrapped=wrapped.reverse();wrapped.__actions__.push({'func':thru,'args':[reverse],'thisArg':undefined});return new LodashWrapper(wrapped,this.__chain__);}return this.thru(reverse);}/**
	     * Executes the chain sequence to resolve the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @since 0.1.0
	     * @alias toJSON, valueOf
	     * @category Seq
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */function wrapperValue(){return baseWrapperValue(this.__wrapped__,this.__actions__);}/*------------------------------------------------------------------------*//**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the number of times the key was returned by `iteratee`. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': 1, '6': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */var countBy=createAggregator(function(result,value,key){hasOwnProperty.call(result,key)?++result[key]:result[key]=1;});/**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * Iteration is stopped once `predicate` returns falsey. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * **Note:** This method returns `true` for
	     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
	     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
	     * elements of empty collections.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.every(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.every(users, 'active');
	     * // => false
	     */function every(collection,predicate,guard){var func=isArray(collection)?arrayEvery:baseEvery;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * **Note:** Unlike `_.remove`, this method returns a new array.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.reject
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, { 'age': 36, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.filter(users, 'active');
	     * // => objects for ['barney']
	     */function filter(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,getIteratee(predicate,3));}/**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.find(users, function(o) { return o.age < 40; });
	     * // => object for 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.find(users, { 'age': 1, 'active': true });
	     * // => object for 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.find(users, ['active', false]);
	     * // => object for 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.find(users, 'active');
	     * // => object for 'barney'
	     */var find=createFind(findIndex);/**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to inspect.
	     * @param {Function} [predicate=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [fromIndex=collection.length-1] The index to search from.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */var findLast=createFind(findLastIndex);/**
	     * Creates a flattened array of values by running each element in `collection`
	     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [n, n];
	     * }
	     *
	     * _.flatMap([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMap(collection,iteratee){return baseFlatten(map(collection,iteratee),1);}/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDeep([1, 2], duplicate);
	     * // => [1, 1, 2, 2]
	     */function flatMapDeep(collection,iteratee){return baseFlatten(map(collection,iteratee),INFINITY);}/**
	     * This method is like `_.flatMap` except that it recursively flattens the
	     * mapped results up to `depth` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The function invoked per iteration.
	     * @param {number} [depth=1] The maximum recursion depth.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * function duplicate(n) {
	     *   return [[[n, n]]];
	     * }
	     *
	     * _.flatMapDepth([1, 2], duplicate, 2);
	     * // => [[1, 1], [2, 2]]
	     */function flatMapDepth(collection,iteratee,depth){depth=depth===undefined?1:toInteger(depth);return baseFlatten(map(collection,iteratee),depth);}/**
	     * Iterates over elements of `collection` and invokes `iteratee` for each element.
	     * The iteratee is invoked with three arguments: (value, index|key, collection).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length"
	     * property are iterated like arrays. To avoid this behavior use `_.forIn`
	     * or `_.forOwn` for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @alias each
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEachRight
	     * @example
	     *
	     * _([1, 2]).forEach(function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `1` then `2`.
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */function forEach(collection,iteratee){var func=isArray(collection)?arrayEach:baseEach;return func(collection,getIteratee(iteratee,3));}/**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array|Object} Returns `collection`.
	     * @see _.forEach
	     * @example
	     *
	     * _.forEachRight([1, 2], function(value) {
	     *   console.log(value);
	     * });
	     * // => Logs `2` then `1`.
	     */function forEachRight(collection,iteratee){var func=isArray(collection)?arrayEachRight:baseEachRight;return func(collection,getIteratee(iteratee,3));}/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The order of grouped values
	     * is determined by the order they occur in `collection`. The corresponding
	     * value of each key is an array of elements responsible for generating the
	     * key. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([6.1, 4.2, 6.3], Math.floor);
	     * // => { '4': [4.2], '6': [6.1, 6.3] }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{result[key]=[value];}});/**
	     * Checks if `value` is in `collection`. If `collection` is a string, it's
	     * checked for a substring of `value`, otherwise
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * is used for equality comparisons. If `fromIndex` is negative, it's used as
	     * the offset from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @param {*} value The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {boolean} Returns `true` if `value` is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'a': 1, 'b': 2 }, 1);
	     * // => true
	     *
	     * _.includes('abcd', 'bc');
	     * // => true
	     */function includes(collection,value,fromIndex,guard){collection=isArrayLike(collection)?collection:values(collection);fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;var length=collection.length;if(fromIndex<0){fromIndex=nativeMax(length+fromIndex,0);}return isString(collection)?fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:!!length&&baseIndexOf(collection,value,fromIndex)>-1;}/**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `path` is a function, it's invoked
	     * for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke each method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invokeMap([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */var invokeMap=baseRest(function(collection,path,args){var index=-1,isFunc=typeof path=='function',isProp=isKey(path),result=isArrayLike(collection)?Array(collection.length):[];baseEach(collection,function(value){var func=isFunc?path:isProp&&value!=null?value[path]:undefined;result[++index]=func?apply(func,value,args):baseInvoke(value,path,args);});return result;});/**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` thru `iteratee`. The corresponding value of
	     * each key is the last element responsible for generating the key. The
	     * iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity]
	     *  The iteratee to transform keys.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var array = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.keyBy(array, function(o) {
	     *   return String.fromCharCode(o.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.keyBy(array, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     */var keyBy=createAggregator(function(result,value,key){result[key]=value;});/**
	     * Creates an array of values by running each element in `collection` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * _.map([4, 8], square);
	     * // => [16, 64]
	     *
	     * _.map({ 'a': 4, 'b': 8 }, square);
	     * // => [16, 64] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */function map(collection,iteratee){var func=isArray(collection)?arrayMap:baseMap;return func(collection,getIteratee(iteratee,3));}/**
	     * This method is like `_.sortBy` except that it allows specifying the sort
	     * orders of the iteratees to sort by. If `orders` is unspecified, all values
	     * are sorted in ascending order. Otherwise, specify an order of "desc" for
	     * descending or "asc" for ascending sort order of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @param {string[]} [orders] The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // Sort by `user` in ascending order and by `age` in descending order.
	     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */function orderBy(collection,iteratees,orders,guard){if(collection==null){return[];}if(!isArray(iteratees)){iteratees=iteratees==null?[]:[iteratees];}orders=guard?undefined:orders;if(!isArray(orders)){orders=orders==null?[]:[orders];}return baseOrderBy(collection,iteratees,orders);}/**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, the second of which
	     * contains elements `predicate` returns falsey for. The predicate is
	     * invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * _.partition(users, function(o) { return o.active; });
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.partition(users, { 'age': 1, 'active': false });
	     * // => objects for [['pebbles'], ['barney', 'fred']]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.partition(users, ['active', false]);
	     * // => objects for [['barney', 'pebbles'], ['fred']]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.partition(users, 'active');
	     * // => objects for [['fred'], ['barney', 'pebbles']]
	     */var partition=createAggregator(function(result,value,key){result[key?0:1].push(value);},function(){return[[],[]];});/**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` thru `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not given, the first element of `collection` is used as the initial
	     * value. The iteratee is invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
	     * and `sortBy`
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduceRight
	     * @example
	     *
	     * _.reduce([1, 2], function(sum, n) {
	     *   return sum + n;
	     * }, 0);
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     *   return result;
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
	     */function reduce(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduce:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);}/**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @returns {*} Returns the accumulated value.
	     * @see _.reduce
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */function reduceRight(collection,iteratee,accumulator){var func=isArray(collection)?arrayReduceRight:baseReduce,initAccum=arguments.length<3;return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);}/**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     * @see _.filter
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * _.reject(users, function(o) { return !o.active; });
	     * // => objects for ['fred']
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.reject(users, { 'age': 40, 'active': true });
	     * // => objects for ['barney']
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.reject(users, ['active', false]);
	     * // => objects for ['fred']
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.reject(users, 'active');
	     * // => objects for ['barney']
	     */function reject(collection,predicate){var func=isArray(collection)?arrayFilter:baseFilter;return func(collection,negate(getIteratee(predicate,3)));}/**
	     * Gets a random element from `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @returns {*} Returns the random element.
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     */function sample(collection){var array=isArrayLike(collection)?collection:values(collection),length=array.length;return length>0?array[baseRandom(0,length-1)]:undefined;}/**
	     * Gets `n` random elements at unique keys from `collection` up to the
	     * size of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to sample.
	     * @param {number} [n=1] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the random elements.
	     * @example
	     *
	     * _.sampleSize([1, 2, 3], 2);
	     * // => [3, 1]
	     *
	     * _.sampleSize([1, 2, 3], 4);
	     * // => [2, 3, 1]
	     */function sampleSize(collection,n,guard){var index=-1,result=toArray(collection),length=result.length,lastIndex=length-1;if(guard?isIterateeCall(collection,n,guard):n===undefined){n=1;}else{n=baseClamp(toInteger(n),0,length);}while(++index<n){var rand=baseRandom(index,lastIndex),value=result[rand];result[rand]=result[index];result[index]=value;}result.length=n;return result;}/**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */function shuffle(collection){return sampleSize(collection,MAX_ARRAY_LENGTH);}/**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable string keyed properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the collection size.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */function size(collection){if(collection==null){return 0;}if(isArrayLike(collection)){return isString(collection)?stringSize(collection):collection.length;}var tag=getTag(collection);if(tag==mapTag||tag==setTag){return collection.size;}return baseKeys(collection).length;}/**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * Iteration is stopped once `predicate` returns truthy. The predicate is
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.some(users, ['active', false]);
	     * // => true
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.some(users, 'active');
	     * // => true
	     */function some(collection,predicate,guard){var func=isArray(collection)?arraySome:baseSome;if(guard&&isIterateeCall(collection,predicate,guard)){predicate=undefined;}return func(collection,getIteratee(predicate,3));}/**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection thru each iteratee. This method
	     * performs a stable sort, that is, it preserves the original sort order of
	     * equal elements. The iteratees are invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Collection
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to sort by.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.sortBy(users, function(o) { return o.user; });
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     *
	     * _.sortBy(users, ['user', 'age']);
	     * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
	     *
	     * _.sortBy(users, 'user', function(o) {
	     *   return Math.floor(o.age / 10);
	     * });
	     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
	     */var sortBy=baseRest(function(collection,iteratees){if(collection==null){return[];}var length=iteratees.length;if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){iteratees=[];}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){iteratees=[iteratees[0]];}return baseOrderBy(collection,baseFlatten(iteratees,1),[]);});/*------------------------------------------------------------------------*//**
	     * Gets the timestamp of the number of milliseconds that have elapsed since
	     * the Unix epoch (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Date
	     * @returns {number} Returns the timestamp.
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => Logs the number of milliseconds it took for the deferred invocation.
	     */var now=ctxNow||function(){return root.Date.now();};/*------------------------------------------------------------------------*//**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it's called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => Logs 'done saving!' after the two async saves have completed.
	     */function after(n,func){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n<1){return func.apply(this,arguments);}};}/**
	     * Creates a function that invokes `func`, with up to `n` arguments,
	     * ignoring any additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */function ary(func,n,guard){n=guard?undefined:n;n=func&&n==null?func.length:n;return createWrap(func,ARY_FLAG,undefined,undefined,undefined,undefined,n);}/**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it's called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery(element).on('click', _.before(5, addContactToList));
	     * // => Allows adding up to 4 contacts to the list.
	     */function before(n,func){var result;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}n=toInteger(n);return function(){if(--n>0){result=func.apply(this,arguments);}if(n<=1){func=undefined;}return result;};}/**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and `partials` prepended to the arguments it receives.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * function greet(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * }
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */var bind=baseRest(function(func,thisArg,partials){var bitmask=BIND_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bind));bitmask|=PARTIAL_FLAG;}return createWrap(func,bitmask,thisArg,partials,holders);});/**
	     * Creates a function that invokes the method at `object[key]` with `partials`
	     * prepended to the arguments it receives.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist. See
	     * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Function
	     * @param {Object} object The object to invoke the method on.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // Bound with placeholders.
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */var bindKey=baseRest(function(object,key,partials){var bitmask=BIND_FLAG|BIND_KEY_FLAG;if(partials.length){var holders=replaceHolders(partials,getHolder(bindKey));bitmask|=PARTIAL_FLAG;}return createWrap(key,bitmask,object,partials,holders);});/**
	     * Creates a function that accepts arguments of `func` and either invokes
	     * `func` returning its result, if at least `arity` number of arguments have
	     * been provided, or returns a function that accepts the remaining `func`
	     * arguments, and so on. The arity of `func` may be specified if `func.length`
	     * is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */function curry(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curry.placeholder;return result;}/**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // Curried with placeholders.
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */function curryRight(func,arity,guard){arity=guard?undefined:arity;var result=createWrap(func,CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);result.placeholder=curryRight.placeholder;return result;}/**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed `func` invocations and a `flush` method to immediately invoke them.
	     * Provide `options` to indicate whether `func` should be invoked on the
	     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	     * with the last arguments provided to the debounced function. Subsequent
	     * calls to the debounced function return the result of the last `func`
	     * invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the debounced function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=false]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {number} [options.maxWait]
	     *  The maximum time `func` is allowed to be delayed before it's invoked.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // Avoid costly calculations while the window size is in flux.
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	     * jQuery(element).on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', debounced);
	     *
	     * // Cancel the trailing debounced invocation.
	     * jQuery(window).on('popstate', debounced.cancel);
	     */function debounce(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=false,maxing=false,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}wait=toNumber(wait)||0;if(isObject(options)){leading=!!options.leading;maxing='maxWait'in options;maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;trailing='trailing'in options?!!options.trailing:trailing;}function invokeFunc(time){var args=lastArgs,thisArg=lastThis;lastArgs=lastThis=undefined;lastInvokeTime=time;result=func.apply(thisArg,args);return result;}function leadingEdge(time){// Reset any `maxWait` timer.
	lastInvokeTime=time;// Start the timer for the trailing edge.
	timerId=setTimeout(timerExpired,wait);// Invoke the leading edge.
	return leading?invokeFunc(time):result;}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,result=wait-timeSinceLastCall;return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;// Either this is the first call, activity has stopped and we're at the
	// trailing edge, the system time has gone backwards and we're treating
	// it as the trailing edge, or we've hit the `maxWait` limit.
	return lastCallTime===undefined||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;}function timerExpired(){var time=now();if(shouldInvoke(time)){return trailingEdge(time);}// Restart the timer.
	timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){timerId=undefined;// Only invoke if we have `lastArgs` which means `func` has been
	// debounced at least once.
	if(trailing&&lastArgs){return invokeFunc(time);}lastArgs=lastThis=undefined;return result;}function cancel(){if(timerId!==undefined){clearTimeout(timerId);}lastInvokeTime=0;lastArgs=lastCallTime=lastThis=timerId=undefined;}function flush(){return timerId===undefined?result:trailingEdge(now());}function debounced(){var time=now(),isInvoking=shouldInvoke(time);lastArgs=arguments;lastThis=this;lastCallTime=time;if(isInvoking){if(timerId===undefined){return leadingEdge(lastCallTime);}if(maxing){// Handle invocations in a tight loop.
	timerId=setTimeout(timerExpired,wait);return invokeFunc(lastCallTime);}}if(timerId===undefined){timerId=setTimeout(timerExpired,wait);}return result;}debounced.cancel=cancel;debounced.flush=flush;return debounced;}/**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // => Logs 'deferred' after one or more milliseconds.
	     */var defer=baseRest(function(func,args){return baseDelay(func,1,args);});/**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => Logs 'later' after one second.
	     */var delay=baseRest(function(func,wait,args){return baseDelay(func,toNumber(wait)||0,args);});/**
	     * Creates a function that invokes `func` with arguments reversed.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to flip arguments for.
	     * @returns {Function} Returns the new flipped function.
	     * @example
	     *
	     * var flipped = _.flip(function() {
	     *   return _.toArray(arguments);
	     * });
	     *
	     * flipped('a', 'b', 'c', 'd');
	     * // => ['d', 'c', 'b', 'a']
	     */function flip(func){return createWrap(func,FLIP_FLAG);}/**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided, it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is used as the map cache key. The `func`
	     * is invoked with the `this` binding of the memoized function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the
	     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	     * method interface of `delete`, `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoized function.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     * var other = { 'c': 3, 'd': 4 };
	     *
	     * var values = _.memoize(_.values);
	     * values(object);
	     * // => [1, 2]
	     *
	     * values(other);
	     * // => [3, 4]
	     *
	     * object.a = 2;
	     * values(object);
	     * // => [1, 2]
	     *
	     * // Modify the result cache.
	     * values.cache.set(object, ['a', 'b']);
	     * values(object);
	     * // => ['a', 'b']
	     *
	     * // Replace `_.memoize.Cache`.
	     * _.memoize.Cache = WeakMap;
	     */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Assign cache to `_.memoize`.
	memoize.Cache=MapCache;/**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new negated function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */function negate(predicate){if(typeof predicate!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return function(){var args=arguments;switch(args.length){case 0:return!predicate.call(this);case 1:return!predicate.call(this,args[0]);case 2:return!predicate.call(this,args[0],args[1]);case 3:return!predicate.call(this,args[0],args[1],args[2]);}return!predicate.apply(this,args);};}/**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first invocation. The `func` is
	     * invoked with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // => `createApplication` is invoked once
	     */function once(func){return before(2,func);}/**
	     * Creates a function that invokes `func` with its arguments transformed.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to wrap.
	     * @param {...(Function|Function[])} [transforms=[_.identity]]
	     *  The argument transforms.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function doubled(n) {
	     *   return n * 2;
	     * }
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var func = _.overArgs(function(x, y) {
	     *   return [x, y];
	     * }, [square, doubled]);
	     *
	     * func(9, 3);
	     * // => [81, 6]
	     *
	     * func(10, 5);
	     * // => [100, 10]
	     */var overArgs=baseRest(function(func,transforms){transforms=transforms.length==1&&isArray(transforms[0])?arrayMap(transforms[0],baseUnary(getIteratee())):arrayMap(baseFlatten(transforms,1),baseUnary(getIteratee()));var funcsLength=transforms.length;return baseRest(function(args){var index=-1,length=nativeMin(args.length,funcsLength);while(++index<length){args[index]=transforms[index].call(this,args[index]);}return apply(func,this,args);});});/**
	     * Creates a function that invokes `func` with `partials` prepended to the
	     * arguments it receives. This method is like `_.bind` except it does **not**
	     * alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.2.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // Partially applied with placeholders.
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */var partial=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partial));return createWrap(func,PARTIAL_FLAG,undefined,partials,holders);});/**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to the arguments it receives.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method doesn't set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * function greet(greeting, name) {
	     *   return greeting + ' ' + name;
	     * }
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // Partially applied with placeholders.
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */var partialRight=baseRest(function(func,partials){var holders=replaceHolders(partials,getHolder(partialRight));return createWrap(func,PARTIAL_RIGHT_FLAG,undefined,partials,holders);});/**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified `indexes` where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, [2, 0, 1]);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     */var rearg=baseRest(function(func,indexes){return createWrap(func,REARG_FLAG,undefined,undefined,undefined,baseFlatten(indexes,1));});/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as
	     * an array.
	     *
	     * **Note:** This method is based on the
	     * [rest parameter](https://mdn.io/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.rest(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?start:toInteger(start);return baseRest(func,start);}/**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * create function and an array of arguments much like
	     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
	     *
	     * **Note:** This method is based on the
	     * [spread operator](https://mdn.io/spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @param {number} [start=0] The start position of the spread.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */function spread(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=start===undefined?0:nativeMax(toInteger(start),0);return baseRest(function(args){var array=args[start],otherArgs=castSlice(args,0,start);if(array){arrayPush(otherArgs,array);}return apply(func,this,otherArgs);});}/**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed `func` invocations and a `flush` method to
	     * immediately invoke them. Provide `options` to indicate whether `func`
	     * should be invoked on the leading and/or trailing edge of the `wait`
	     * timeout. The `func` is invoked with the last arguments provided to the
	     * throttled function. Subsequent calls to the throttled function return the
	     * result of the last `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is
	     * invoked on the trailing edge of the timeout only if the throttled function
	     * is invoked more than once during the `wait` timeout.
	     *
	     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	     *
	     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.leading=true]
	     *  Specify invoking on the leading edge of the timeout.
	     * @param {boolean} [options.trailing=true]
	     *  Specify invoking on the trailing edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // Avoid excessively updating the position while scrolling.
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	     * jQuery(element).on('click', throttled);
	     *
	     * // Cancel the trailing throttled invocation.
	     * jQuery(window).on('popstate', throttled.cancel);
	     */function throttle(func,wait,options){var leading=true,trailing=true;if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}if(isObject(options)){leading='leading'in options?!!options.leading:leading;trailing='trailing'in options?!!options.trailing:trailing;}return debounce(func,wait,{'leading':leading,'maxWait':wait,'trailing':trailing});}/**
	     * Creates a function that accepts up to one argument, ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @returns {Function} Returns the new capped function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.unary(parseInt));
	     * // => [6, 8, 10]
	     */function unary(func){return ary(func,1);}/**
	     * Creates a function that provides `value` to `wrapper` as its first
	     * argument. Any additional arguments provided to the function are appended
	     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
	     * binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} [wrapper=identity] The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */function wrap(value,wrapper){wrapper=wrapper==null?identity:wrapper;return partial(wrapper,value);}/*------------------------------------------------------------------------*//**
	     * Casts `value` as an array if it's not one.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.4.0
	     * @category Lang
	     * @param {*} value The value to inspect.
	     * @returns {Array} Returns the cast array.
	     * @example
	     *
	     * _.castArray(1);
	     * // => [1]
	     *
	     * _.castArray({ 'a': 1 });
	     * // => [{ 'a': 1 }]
	     *
	     * _.castArray('abc');
	     * // => ['abc']
	     *
	     * _.castArray(null);
	     * // => [null]
	     *
	     * _.castArray(undefined);
	     * // => [undefined]
	     *
	     * _.castArray();
	     * // => []
	     *
	     * var array = [1, 2, 3];
	     * console.log(_.castArray(array) === array);
	     * // => true
	     */function castArray(){if(!arguments.length){return[];}var value=arguments[0];return isArray(value)?value:[value];}/**
	     * Creates a shallow clone of `value`.
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
	     * and supports cloning arrays, array buffers, booleans, date objects, maps,
	     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
	     * arrays. The own enumerable properties of `arguments` objects are cloned
	     * as plain objects. An empty object is returned for uncloneable values such
	     * as error objects, functions, DOM nodes, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeep
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var shallow = _.clone(objects);
	     * console.log(shallow[0] === objects[0]);
	     * // => true
	     */function clone(value){return baseClone(value,false,true);}/**
	     * This method is like `_.clone` except that it accepts `customizer` which
	     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
	     * cloning is handled by the method instead. The `customizer` is invoked with
	     * up to four arguments; (value [, index|key, object, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the cloned value.
	     * @see _.cloneDeepWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * }
	     *
	     * var el = _.cloneWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 0
	     */function cloneWith(value,customizer){return baseClone(value,false,true,customizer);}/**
	     * This method is like `_.clone` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.clone
	     * @example
	     *
	     * var objects = [{ 'a': 1 }, { 'b': 2 }];
	     *
	     * var deep = _.cloneDeep(objects);
	     * console.log(deep[0] === objects[0]);
	     * // => false
	     */function cloneDeep(value){return baseClone(value,true,true);}/**
	     * This method is like `_.cloneWith` except that it recursively clones `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to recursively clone.
	     * @param {Function} [customizer] The function to customize cloning.
	     * @returns {*} Returns the deep cloned value.
	     * @see _.cloneWith
	     * @example
	     *
	     * function customizer(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * }
	     *
	     * var el = _.cloneDeepWith(document.body, customizer);
	     *
	     * console.log(el === document.body);
	     * // => false
	     * console.log(el.nodeName);
	     * // => 'BODY'
	     * console.log(el.childNodes.length);
	     * // => 20
	     */function cloneDeepWith(value,customizer){return baseClone(value,true,true,customizer);}/**
	     * Checks if `object` conforms to `source` by invoking the predicate
	     * properties of `source` with the corresponding property values of `object`.
	     *
	     * **Note:** This method is equivalent to `_.conforms` when `source` is
	     * partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
	     * // => true
	     *
	     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
	     * // => false
	     */function conformsTo(object,source){return source==null||baseConformsTo(object,source,keys(source));}/**
	     * Performs a
	     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	     * comparison between two values to determine if they are equivalent.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.eq(object, object);
	     * // => true
	     *
	     * _.eq(object, other);
	     * // => false
	     *
	     * _.eq('a', 'a');
	     * // => true
	     *
	     * _.eq('a', Object('a'));
	     * // => false
	     *
	     * _.eq(NaN, NaN);
	     * // => true
	     */function eq(value,other){return value===other||value!==value&&other!==other;}/**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`,
	     *  else `false`.
	     * @see _.lt
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */var gt=createRelationalOperation(baseGt);/**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to
	     *  `other`, else `false`.
	     * @see _.lte
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */var gte=createRelationalOperation(function(value,other){return value>=other;});/**
	     * Checks if `value` is likely an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */function isArguments(value){// Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}/**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(document.body.children);
	     * // => false
	     *
	     * _.isArray('abc');
	     * // => false
	     *
	     * _.isArray(_.noop);
	     * // => false
	     */var isArray=Array.isArray;/**
	     * Checks if `value` is classified as an `ArrayBuffer` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
	     * @example
	     *
	     * _.isArrayBuffer(new ArrayBuffer(2));
	     * // => true
	     *
	     * _.isArrayBuffer(new Array(2));
	     * // => false
	     */var isArrayBuffer=nodeIsArrayBuffer?baseUnary(nodeIsArrayBuffer):baseIsArrayBuffer;/**
	     * Checks if `value` is array-like. A value is considered array-like if it's
	     * not a function and has a `value.length` that's an integer greater than or
	     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     * @example
	     *
	     * _.isArrayLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLike(document.body.children);
	     * // => true
	     *
	     * _.isArrayLike('abc');
	     * // => true
	     *
	     * _.isArrayLike(_.noop);
	     * // => false
	     */function isArrayLike(value){return value!=null&&isLength(value.length)&&!isFunction(value);}/**
	     * This method is like `_.isArrayLike` except that it also checks if `value`
	     * is an object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an array-like object,
	     *  else `false`.
	     * @example
	     *
	     * _.isArrayLikeObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isArrayLikeObject(document.body.children);
	     * // => true
	     *
	     * _.isArrayLikeObject('abc');
	     * // => false
	     *
	     * _.isArrayLikeObject(_.noop);
	     * // => false
	     */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}/**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */function isBoolean(value){return value===true||value===false||isObjectLike(value)&&objectToString.call(value)==boolTag;}/**
	     * Checks if `value` is a buffer.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	     * @example
	     *
	     * _.isBuffer(new Buffer(2));
	     * // => true
	     *
	     * _.isBuffer(new Uint8Array(2));
	     * // => false
	     */var isBuffer=nativeIsBuffer||stubFalse;/**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */var isDate=nodeIsDate?baseUnary(nodeIsDate):baseIsDate;/**
	     * Checks if `value` is likely a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */function isElement(value){return!!value&&value.nodeType===1&&isObjectLike(value)&&!isPlainObject(value);}/**
	     * Checks if `value` is an empty object, collection, map, or set.
	     *
	     * Objects are considered empty if they have no own enumerable string keyed
	     * properties.
	     *
	     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	     * jQuery-like collections are considered empty if they have a `length` of `0`.
	     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */function isEmpty(value){if(isArrayLike(value)&&(isArray(value)||typeof value=='string'||typeof value.splice=='function'||isBuffer(value)||isArguments(value))){return!value.length;}var tag=getTag(value);if(tag==mapTag||tag==setTag){return!value.size;}if(nonEnumShadows||isPrototype(value)){return!nativeKeys(value).length;}for(var key in value){if(hasOwnProperty.call(value,key)){return false;}}return true;}/**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent.
	     *
	     * **Note:** This method supports comparing arrays, array buffers, booleans,
	     * date objects, error objects, maps, numbers, `Object` objects, regexes,
	     * sets, strings, symbols, and typed arrays. `Object` objects are compared
	     * by their own, not inherited, enumerable properties. Functions and DOM
	     * nodes are **not** supported.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     * var other = { 'a': 1 };
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * object === other;
	     * // => false
	     */function isEqual(value,other){return baseIsEqual(value,other);}/**
	     * This method is like `_.isEqual` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with up to
	     * six arguments: (objValue, othValue [, index|key, object, other, stack]).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, othValue) {
	     *   if (isGreeting(objValue) && isGreeting(othValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqualWith(array, other, customizer);
	     * // => true
	     */function isEqualWith(value,other,customizer){customizer=typeof customizer=='function'?customizer:undefined;var result=customizer?customizer(value,other):undefined;return result===undefined?baseIsEqual(value,other,customizer):!!result;}/**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */function isError(value){if(!isObjectLike(value)){return false;}return objectToString.call(value)==errorTag||typeof value.message=='string'&&typeof value.name=='string';}/**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on
	     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(3);
	     * // => true
	     *
	     * _.isFinite(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     *
	     * _.isFinite('3');
	     * // => false
	     */function isFinite(value){return typeof value=='number'&&nativeIsFinite(value);}/**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
	// in Safari 8-9 which returns 'object' for typed array and other constructors.
	var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}/**
	     * Checks if `value` is an integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
	     * @example
	     *
	     * _.isInteger(3);
	     * // => true
	     *
	     * _.isInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isInteger(Infinity);
	     * // => false
	     *
	     * _.isInteger('3');
	     * // => false
	     */function isInteger(value){return typeof value=='number'&&value==toInteger(value);}/**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     * @example
	     *
	     * _.isLength(3);
	     * // => true
	     *
	     * _.isLength(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isLength(Infinity);
	     * // => false
	     *
	     * _.isLength('3');
	     * // => false
	     */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}/**
	     * Checks if `value` is the
	     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(_.noop);
	     * // => true
	     *
	     * _.isObject(null);
	     * // => false
	     */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof(value);return!!value&&(type=='object'||type=='function');}/**
	     * Checks if `value` is object-like. A value is object-like if it's not `null`
	     * and has a `typeof` result of "object".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	     * @example
	     *
	     * _.isObjectLike({});
	     * // => true
	     *
	     * _.isObjectLike([1, 2, 3]);
	     * // => true
	     *
	     * _.isObjectLike(_.noop);
	     * // => false
	     *
	     * _.isObjectLike(null);
	     * // => false
	     */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof(value))=='object';}/**
	     * Checks if `value` is classified as a `Map` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
	     * @example
	     *
	     * _.isMap(new Map);
	     * // => true
	     *
	     * _.isMap(new WeakMap);
	     * // => false
	     */var isMap=nodeIsMap?baseUnary(nodeIsMap):baseIsMap;/**
	     * Performs a partial deep comparison between `object` and `source` to
	     * determine if `object` contains equivalent property values.
	     *
	     * **Note:** This method is equivalent to `_.matches` when `source` is
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2 };
	     *
	     * _.isMatch(object, { 'b': 2 });
	     * // => true
	     *
	     * _.isMatch(object, { 'b': 1 });
	     * // => false
	     */function isMatch(object,source){return object===source||baseIsMatch(object,source,getMatchData(source));}/**
	     * This method is like `_.isMatch` except that it accepts `customizer` which
	     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
	     * are handled by the method instead. The `customizer` is invoked with five
	     * arguments: (objValue, srcValue, index|key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize comparisons.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * function isGreeting(value) {
	     *   return /^h(?:i|ello)$/.test(value);
	     * }
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
	     *     return true;
	     *   }
	     * }
	     *
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatchWith(object, source, customizer);
	     * // => true
	     */function isMatchWith(object,source,customizer){customizer=typeof customizer=='function'?customizer:undefined;return baseIsMatch(object,source,getMatchData(source),customizer);}/**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is based on
	     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
	     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
	     * `undefined` and other non-number values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */function isNaN(value){// An `NaN` primitive is the only value that is not equal to itself.
	// Perform the `toStringTag` check first to avoid errors with some
	// ActiveX objects in IE.
	return isNumber(value)&&value!=+value;}/**
	     * Checks if `value` is a pristine native function.
	     *
	     * **Note:** This method can't reliably detect native functions in the presence
	     * of the core-js package because core-js circumvents this kind of detection.
	     * Despite multiple requests, the core-js maintainer has made it clear: any
	     * attempt to fix the detection will be obstructed. As a result, we're left
	     * with little choice but to throw an error. Unfortunately, this also affects
	     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
	     * which rely on core-js.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function,
	     *  else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */function isNative(value){if(isMaskable(value)){throw new Error('This method is not supported with core-js. Try https://github.com/es-shims.');}return baseIsNative(value);}/**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */function isNull(value){return value===null;}/**
	     * Checks if `value` is `null` or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	     * @example
	     *
	     * _.isNil(null);
	     * // => true
	     *
	     * _.isNil(void 0);
	     * // => true
	     *
	     * _.isNil(NaN);
	     * // => false
	     */function isNil(value){return value==null;}/**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
	     * classified as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
	     * @example
	     *
	     * _.isNumber(3);
	     * // => true
	     *
	     * _.isNumber(Number.MIN_VALUE);
	     * // => true
	     *
	     * _.isNumber(Infinity);
	     * // => true
	     *
	     * _.isNumber('3');
	     * // => false
	     */function isNumber(value){return typeof value=='number'||isObjectLike(value)&&objectToString.call(value)==numberTag;}/**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.8.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag||isHostObject(value)){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}/**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.1.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */var isRegExp=nodeIsRegExp?baseUnary(nodeIsRegExp):baseIsRegExp;/**
	     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
	     * double precision number which isn't the result of a rounded unsafe integer.
	     *
	     * **Note:** This method is based on
	     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
	     * @example
	     *
	     * _.isSafeInteger(3);
	     * // => true
	     *
	     * _.isSafeInteger(Number.MIN_VALUE);
	     * // => false
	     *
	     * _.isSafeInteger(Infinity);
	     * // => false
	     *
	     * _.isSafeInteger('3');
	     * // => false
	     */function isSafeInteger(value){return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;}/**
	     * Checks if `value` is classified as a `Set` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
	     * @example
	     *
	     * _.isSet(new Set);
	     * // => true
	     *
	     * _.isSet(new WeakSet);
	     * // => false
	     */var isSet=nodeIsSet?baseUnary(nodeIsSet):baseIsSet;/**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;}/**
	     * Checks if `value` is classified as a `Symbol` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	     * @example
	     *
	     * _.isSymbol(Symbol.iterator);
	     * // => true
	     *
	     * _.isSymbol('abc');
	     * // => false
	     */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}/**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */var isTypedArray=nodeIsTypedArray?baseUnary(nodeIsTypedArray):baseIsTypedArray;/**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */function isUndefined(value){return value===undefined;}/**
	     * Checks if `value` is classified as a `WeakMap` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
	     * @example
	     *
	     * _.isWeakMap(new WeakMap);
	     * // => true
	     *
	     * _.isWeakMap(new Map);
	     * // => false
	     */function isWeakMap(value){return isObjectLike(value)&&getTag(value)==weakMapTag;}/**
	     * Checks if `value` is classified as a `WeakSet` object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.3.0
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
	     * @example
	     *
	     * _.isWeakSet(new WeakSet);
	     * // => true
	     *
	     * _.isWeakSet(new Set);
	     * // => false
	     */function isWeakSet(value){return isObjectLike(value)&&objectToString.call(value)==weakSetTag;}/**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`,
	     *  else `false`.
	     * @see _.gt
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */var lt=createRelationalOperation(baseLt);/**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.9.0
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to
	     *  `other`, else `false`.
	     * @see _.gte
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */var lte=createRelationalOperation(function(value,other){return value<=other;});/**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * _.toArray({ 'a': 1, 'b': 2 });
	     * // => [1, 2]
	     *
	     * _.toArray('abc');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toArray(1);
	     * // => []
	     *
	     * _.toArray(null);
	     * // => []
	     */function toArray(value){if(!value){return[];}if(isArrayLike(value)){return isString(value)?stringToArray(value):copyArray(value);}if(iteratorSymbol&&value[iteratorSymbol]){return iteratorToArray(value[iteratorSymbol]());}var tag=getTag(value),func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;return func(value);}/**
	     * Converts `value` to a finite number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.12.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted number.
	     * @example
	     *
	     * _.toFinite(3.2);
	     * // => 3.2
	     *
	     * _.toFinite(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toFinite(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toFinite('3.2');
	     * // => 3.2
	     */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}/**
	     * Converts `value` to an integer.
	     *
	     * **Note:** This method is loosely based on
	     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toInteger(3.2);
	     * // => 3
	     *
	     * _.toInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toInteger(Infinity);
	     * // => 1.7976931348623157e+308
	     *
	     * _.toInteger('3.2');
	     * // => 3
	     */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}/**
	     * Converts `value` to an integer suitable for use as the length of an
	     * array-like object.
	     *
	     * **Note:** This method is based on
	     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toLength(3.2);
	     * // => 3
	     *
	     * _.toLength(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toLength(Infinity);
	     * // => 4294967295
	     *
	     * _.toLength('3.2');
	     * // => 3
	     */function toLength(value){return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;}/**
	     * Converts `value` to a number.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {number} Returns the number.
	     * @example
	     *
	     * _.toNumber(3.2);
	     * // => 3.2
	     *
	     * _.toNumber(Number.MIN_VALUE);
	     * // => 5e-324
	     *
	     * _.toNumber(Infinity);
	     * // => Infinity
	     *
	     * _.toNumber('3.2');
	     * // => 3.2
	     */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=typeof value.valueOf=='function'?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}/**
	     * Converts `value` to a plain object flattening inherited enumerable string
	     * keyed properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */function toPlainObject(value){return copyObject(value,keysIn(value));}/**
	     * Converts `value` to a safe integer. A safe integer can be compared and
	     * represented correctly.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.toSafeInteger(3.2);
	     * // => 3
	     *
	     * _.toSafeInteger(Number.MIN_VALUE);
	     * // => 0
	     *
	     * _.toSafeInteger(Infinity);
	     * // => 9007199254740991
	     *
	     * _.toSafeInteger('3.2');
	     * // => 3
	     */function toSafeInteger(value){return baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER);}/**
	     * Converts `value` to a string. An empty string is returned for `null`
	     * and `undefined` values. The sign of `-0` is preserved.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Lang
	     * @param {*} value The value to process.
	     * @returns {string} Returns the string.
	     * @example
	     *
	     * _.toString(null);
	     * // => ''
	     *
	     * _.toString(-0);
	     * // => '-0'
	     *
	     * _.toString([1, 2, 3]);
	     * // => '1,2,3'
	     */function toString(value){return value==null?'':baseToString(value);}/*------------------------------------------------------------------------*//**
	     * Assigns own enumerable string keyed properties of source objects to the
	     * destination object. Source objects are applied from left to right.
	     * Subsequent sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object` and is loosely based on
	     * [`Object.assign`](https://mdn.io/Object/assign).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assignIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assign({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'c': 3 }
	     */var assign=createAssigner(function(object,source){if(nonEnumShadows||isPrototype(source)||isArrayLike(source)){copyObject(source,keys(source),object);return;}for(var key in source){if(hasOwnProperty.call(source,key)){assignValue(object,key,source[key]);}}});/**
	     * This method is like `_.assign` except that it iterates over own and
	     * inherited source properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.assign
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * function Bar() {
	     *   this.c = 3;
	     * }
	     *
	     * Foo.prototype.b = 2;
	     * Bar.prototype.d = 4;
	     *
	     * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	     * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	     */var assignIn=createAssigner(function(object,source){copyObject(source,keysIn(source),object);});/**
	     * This method is like `_.assignIn` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias extendWith
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignInWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});/**
	     * This method is like `_.assign` except that it accepts `customizer`
	     * which is invoked to produce the assigned values. If `customizer` returns
	     * `undefined`, assignment is handled by the method instead. The `customizer`
	     * is invoked with five arguments: (objValue, srcValue, key, object, source).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @see _.assignInWith
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   return _.isUndefined(objValue) ? srcValue : objValue;
	     * }
	     *
	     * var defaults = _.partialRight(_.assignWith, customizer);
	     *
	     * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var assignWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keys(source),object,customizer);});/**
	     * Creates an array of values corresponding to `paths` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {...(string|string[])} [paths] The property paths of elements to pick.
	     * @returns {Array} Returns the picked values.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	     *
	     * _.at(object, ['a[0].b.c', 'a[1]']);
	     * // => [3, 4]
	     */var at=baseRest(function(object,paths){return baseAt(object,baseFlatten(paths,1));});/**
	     * Creates an object that inherits from the `prototype` object. If a
	     * `properties` object is given, its own enumerable string keyed properties
	     * are assigned to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */function create(prototype,properties){var result=baseCreate(prototype);return properties?baseAssign(result,properties):result;}/**
	     * Assigns own and inherited enumerable string keyed properties of source
	     * objects to the destination object for all destination properties that
	     * resolve to `undefined`. Source objects are applied from left to right.
	     * Once a property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaultsDeep
	     * @example
	     *
	     * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
	     * // => { 'a': 1, 'b': 2 }
	     */var defaults=baseRest(function(args){args.push(undefined,assignInDefaults);return apply(assignInWith,undefined,args);});/**
	     * This method is like `_.defaults` except that it recursively assigns
	     * default properties.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @see _.defaults
	     * @example
	     *
	     * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
	     * // => { 'a': { 'b': 2, 'c': 3 } }
	     */var defaultsDeep=baseRest(function(args){args.push(undefined,mergeDefaults);return apply(mergeWith,undefined,args);});/**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(o) { return o.age < 40; });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */function findKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwn);}/**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @param {Function} [predicate=_.identity] The function invoked per iteration.
	     * @returns {string|undefined} Returns the key of the matched element,
	     *  else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(o) { return o.age < 40; });
	     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.findLastKey(users, ['active', false]);
	     * // => 'fred'
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */function findLastKey(object,predicate){return baseFindKey(object,getIteratee(predicate,3),baseForOwnRight);}/**
	     * Iterates over own and inherited enumerable string keyed properties of an
	     * object and invokes `iteratee` for each property. The iteratee is invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forInRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
	     */function forIn(object,iteratee){return object==null?object:baseFor(object,getIteratee(iteratee,3),keysIn);}/**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
	     */function forInRight(object,iteratee){return object==null?object:baseForRight(object,getIteratee(iteratee,3),keysIn);}/**
	     * Iterates over own enumerable string keyed properties of an object and
	     * invokes `iteratee` for each property. The iteratee is invoked with three
	     * arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwnRight
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	     */function forOwn(object,iteratee){return object&&baseForOwn(object,getIteratee(iteratee,3));}/**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.0.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     * @see _.forOwn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
	     */function forOwnRight(object,iteratee){return object&&baseForOwnRight(object,getIteratee(iteratee,3));}/**
	     * Creates an array of function property names from own enumerable properties
	     * of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functionsIn
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functions(new Foo);
	     * // => ['a', 'b']
	     */function functions(object){return object==null?[]:baseFunctions(object,keys(object));}/**
	     * Creates an array of function property names from own and inherited
	     * enumerable properties of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the function names.
	     * @see _.functions
	     * @example
	     *
	     * function Foo() {
	     *   this.a = _.constant('a');
	     *   this.b = _.constant('b');
	     * }
	     *
	     * Foo.prototype.c = _.constant('c');
	     *
	     * _.functionsIn(new Foo);
	     * // => ['a', 'b', 'c']
	     */function functionsIn(object){return object==null?[]:baseFunctions(object,keysIn(object));}/**
	     * Gets the value at `path` of `object`. If the resolved value is
	     * `undefined`, the `defaultValue` is returned in its place.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}/**
	     * Checks if `path` is a direct property of `object`.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': 2 } };
	     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b');
	     * // => true
	     *
	     * _.has(object, ['a', 'b']);
	     * // => true
	     *
	     * _.has(other, 'a');
	     * // => false
	     */function has(object,path){return object!=null&&hasPath(object,path,baseHas);}/**
	     * Checks if `path` is a direct or inherited property of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` exists, else `false`.
	     * @example
	     *
	     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	     *
	     * _.hasIn(object, 'a');
	     * // => true
	     *
	     * _.hasIn(object, 'a.b');
	     * // => true
	     *
	     * _.hasIn(object, ['a', 'b']);
	     * // => true
	     *
	     * _.hasIn(object, 'b');
	     * // => false
	     */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}/**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite
	     * property assignments of previous values.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     */var invert=createInverter(function(result,value,key){result[value]=key;},constant(identity));/**
	     * This method is like `_.invert` except that the inverted object is generated
	     * from the results of running each element of `object` thru `iteratee`. The
	     * corresponding inverted value of each inverted key is an array of keys
	     * responsible for generating the inverted value. The iteratee is invoked
	     * with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.1.0
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invertBy(object);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     *
	     * _.invertBy(object, function(value) {
	     *   return 'group' + value;
	     * });
	     * // => { 'group1': ['a', 'c'], 'group2': ['b'] }
	     */var invertBy=createInverter(function(result,value,key){if(hasOwnProperty.call(result,value)){result[value].push(key);}else{result[value]=[key];}},getIteratee);/**
	     * Invokes the method at `path` of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
	     *
	     * _.invoke(object, 'a[0].b.c.slice', 1, 3);
	     * // => [2, 3]
	     */var invoke=baseRest(baseInvoke);/**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */function keys(object){return isArrayLike(object)?arrayLikeKeys(object):baseKeys(object);}/**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */function keysIn(object){return isArrayLike(object)?arrayLikeKeys(object,true):baseKeysIn(object);}/**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
	     * with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.8.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapValues
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */function mapKeys(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){result[iteratee(value,key,object)]=value;});return result;}/**
	     * Creates an object with the same keys as `object` and values generated
	     * by running each own enumerable string keyed property of `object` thru
	     * `iteratee`. The iteratee is invoked with three arguments:
	     * (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Object} Returns the new mapped object.
	     * @see _.mapKeys
	     * @example
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * _.mapValues(users, function(o) { return o.age; });
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */function mapValues(object,iteratee){var result={};iteratee=getIteratee(iteratee,3);baseForOwn(object,function(value,key,object){result[key]=iteratee(value,key,object);});return result;}/**
	     * This method is like `_.assign` except that it recursively merges own and
	     * inherited enumerable string keyed properties of source objects into the
	     * destination object. Source properties that resolve to `undefined` are
	     * skipped if a destination value exists. Array and plain object properties
	     * are merged recursively. Other objects and value types are overridden by
	     * assignment. Source objects are applied from left to right. Subsequent
	     * sources overwrite property assignments of previous sources.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.5.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {
	     *   'a': [{ 'b': 2 }, { 'd': 4 }]
	     * };
	     *
	     * var other = {
	     *   'a': [{ 'c': 3 }, { 'e': 5 }]
	     * };
	     *
	     * _.merge(object, other);
	     * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
	     */var merge=createAssigner(function(object,source,srcIndex){baseMerge(object,source,srcIndex);});/**
	     * This method is like `_.merge` except that it accepts `customizer` which
	     * is invoked to produce the merged values of the destination and source
	     * properties. If `customizer` returns `undefined`, merging is handled by the
	     * method instead. The `customizer` is invoked with seven arguments:
	     * (objValue, srcValue, key, object, source, stack).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} sources The source objects.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function customizer(objValue, srcValue) {
	     *   if (_.isArray(objValue)) {
	     *     return objValue.concat(srcValue);
	     *   }
	     * }
	     *
	     * var object = { 'a': [1], 'b': [2] };
	     * var other = { 'a': [3], 'b': [4] };
	     *
	     * _.mergeWith(object, other, customizer);
	     * // => { 'a': [1, 3], 'b': [2, 4] }
	     */var mergeWith=createAssigner(function(object,source,srcIndex,customizer){baseMerge(object,source,srcIndex,customizer);});/**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable string keyed properties of `object` that are
	     * not omitted.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to omit.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omit(object, ['a', 'c']);
	     * // => { 'b': '2' }
	     */var omit=baseRest(function(object,props){if(object==null){return{};}props=arrayMap(baseFlatten(props,1),toKey);return basePick(object,baseDifference(getAllKeysIn(object),props));});/**
	     * The opposite of `_.pickBy`; this method creates an object composed of
	     * the own and inherited enumerable string keyed properties of `object` that
	     * `predicate` doesn't return truthy for. The predicate is invoked with two
	     * arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.omitBy(object, _.isNumber);
	     * // => { 'b': '2' }
	     */function omitBy(object,predicate){return pickBy(object,negate(getIteratee(predicate)));}/**
	     * Creates an object composed of the picked `object` properties.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {...(string|string[])} [props] The property identifiers to pick.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pick(object, ['a', 'c']);
	     * // => { 'a': 1, 'c': 3 }
	     */var pick=baseRest(function(object,props){return object==null?{}:basePick(object,arrayMap(baseFlatten(props,1),toKey));});/**
	     * Creates an object composed of the `object` properties `predicate` returns
	     * truthy for. The predicate is invoked with two arguments: (value, key).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function} [predicate=_.identity] The function invoked per property.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': '2', 'c': 3 };
	     *
	     * _.pickBy(object, _.isNumber);
	     * // => { 'a': 1, 'c': 3 }
	     */function pickBy(object,predicate){return object==null?{}:basePickBy(object,getAllKeysIn(object),getIteratee(predicate));}/**
	     * This method is like `_.get` except that if the resolved value is a
	     * function it's invoked with the `this` binding of its parent object and
	     * its result is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a[0].b.c3', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a[0].b.c3', _.constant('default'));
	     * // => 'default'
	     */function result(object,path,defaultValue){path=isKey(path,object)?[path]:castPath(path);var index=-1,length=path.length;// Ensure the loop is entered when path is empty.
	if(!length){object=undefined;length=1;}while(++index<length){var value=object==null?undefined:object[toKey(path[index])];if(value===undefined){index=length;value=defaultValue;}object=isFunction(value)?value.call(object):value;}return object;}/**
	     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	     * it's created. Arrays are created for missing index properties while objects
	     * are created for all other missing properties. Use `_.setWith` to customize
	     * `path` creation.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, ['x', '0', 'y', 'z'], 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */function set(object,path,value){return object==null?object:baseSet(object,path,value);}/**
	     * This method is like `_.set` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.setWith(object, '[0][1]', 'a', Object);
	     * // => { '0': { '1': 'a' } }
	     */function setWith(object,path,value,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseSet(object,path,value,customizer);}/**
	     * Creates an array of own enumerable string keyed-value pairs for `object`
	     * which can be consumed by `_.fromPairs`. If `object` is a map or set, its
	     * entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entries
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairs(new Foo);
	     * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	     */var toPairs=createToPairs(keys);/**
	     * Creates an array of own and inherited enumerable string keyed-value pairs
	     * for `object` which can be consumed by `_.fromPairs`. If `object` is a map
	     * or set, its entries are returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @alias entriesIn
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the key-value pairs.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.toPairsIn(new Foo);
	     * // => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
	     */var toPairsIn=createToPairs(keysIn);/**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own
	     * enumerable string keyed properties thru `iteratee`, with each invocation
	     * potentially mutating the `accumulator` object. If `accumulator` is not
	     * provided, a new object with the same `[[Prototype]]` will be used. The
	     * iteratee is invoked with four arguments: (accumulator, value, key, object).
	     * Iteratee functions may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.3.0
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * }, []);
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	     *   (result[value] || (result[value] = [])).push(key);
	     * }, {});
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */function transform(object,iteratee,accumulator){var isArr=isArray(object)||isTypedArray(object);iteratee=getIteratee(iteratee,4);if(accumulator==null){if(isArr||isObject(object)){var Ctor=object.constructor;if(isArr){accumulator=isArray(object)?new Ctor():[];}else{accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};}}else{accumulator={};}}(isArr?arrayEach:baseForOwn)(object,function(value,index,object){return iteratee(accumulator,value,index,object);});return accumulator;}/**
	     * Removes the property at `path` of `object`.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to unset.
	     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
	     * _.unset(object, 'a[0].b.c');
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     *
	     * _.unset(object, ['a', '0', 'b', 'c']);
	     * // => true
	     *
	     * console.log(object);
	     * // => { 'a': [{ 'b': {} }] };
	     */function unset(object,path){return object==null?true:baseUnset(object,path);}/**
	     * This method is like `_.set` except that accepts `updater` to produce the
	     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
	     * is invoked with one argument: (value).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
	     * console.log(object.a[0].b.c);
	     * // => 9
	     *
	     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
	     * console.log(object.x[0].y.z);
	     * // => 0
	     */function update(object,path,updater){return object==null?object:baseUpdate(object,path,castFunction(updater));}/**
	     * This method is like `_.update` except that it accepts `customizer` which is
	     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
	     * path creation is handled by the method instead. The `customizer` is invoked
	     * with three arguments: (nsValue, key, nsObject).
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.6.0
	     * @category Object
	     * @param {Object} object The object to modify.
	     * @param {Array|string} path The path of the property to set.
	     * @param {Function} updater The function to produce the updated value.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = {};
	     *
	     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
	     * // => { '0': { '1': 'a' } }
	     */function updateWith(object,path,updater,customizer){customizer=typeof customizer=='function'?customizer:undefined;return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);}/**
	     * Creates an array of the own enumerable string keyed property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */function values(object){return object?baseValues(object,keys(object)):[];}/**
	     * Creates an array of the own and inherited enumerable string keyed property
	     * values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */function valuesIn(object){return object==null?[]:baseValues(object,keysIn(object));}/*------------------------------------------------------------------------*//**
	     * Clamps `number` within the inclusive `lower` and `upper` bounds.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Number
	     * @param {number} number The number to clamp.
	     * @param {number} [lower] The lower bound.
	     * @param {number} upper The upper bound.
	     * @returns {number} Returns the clamped number.
	     * @example
	     *
	     * _.clamp(-10, -5, 5);
	     * // => -5
	     *
	     * _.clamp(10, -5, 5);
	     * // => 5
	     */function clamp(number,lower,upper){if(upper===undefined){upper=lower;lower=undefined;}if(upper!==undefined){upper=toNumber(upper);upper=upper===upper?upper:0;}if(lower!==undefined){lower=toNumber(lower);lower=lower===lower?lower:0;}return baseClamp(toNumber(number),lower,upper);}/**
	     * Checks if `n` is between `start` and up to, but not including, `end`. If
	     * `end` is not specified, it's set to `start` with `start` then set to `0`.
	     * If `start` is greater than `end` the params are swapped to support
	     * negative ranges.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.3.0
	     * @category Number
	     * @param {number} number The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
	     * @see _.range, _.rangeRight
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     *
	     * _.inRange(-3, -2, -6);
	     * // => true
	     */function inRange(number,start,end){start=toFinite(start);if(end===undefined){end=start;start=0;}else{end=toFinite(end);}number=toNumber(number);return baseInRange(number,start,end);}/**
	     * Produces a random number between the inclusive `lower` and `upper` bounds.
	     * If only one argument is provided a number between `0` and the given number
	     * is returned. If `floating` is `true`, or either `lower` or `upper` are
	     * floats, a floating-point number is returned instead of an integer.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @memberOf _
	     * @since 0.7.0
	     * @category Number
	     * @param {number} [lower=0] The lower bound.
	     * @param {number} [upper=1] The upper bound.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */function random(lower,upper,floating){if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){upper=floating=undefined;}if(floating===undefined){if(typeof upper=='boolean'){floating=upper;upper=undefined;}else if(typeof lower=='boolean'){floating=lower;lower=undefined;}}if(lower===undefined&&upper===undefined){lower=0;upper=1;}else{lower=toFinite(lower);if(upper===undefined){upper=lower;lower=0;}else{upper=toFinite(upper);}}if(lower>upper){var temp=lower;lower=upper;upper=temp;}if(floating||lower%1||upper%1){var rand=nativeRandom();return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);}return baseRandom(lower,upper);}/*------------------------------------------------------------------------*//**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar--');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__FOO_BAR__');
	     * // => 'fooBar'
	     */var camelCase=createCompounder(function(result,word,index){word=word.toLowerCase();return result+(index?capitalize(word):word);});/**
	     * Converts the first character of `string` to upper case and the remaining
	     * to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('FRED');
	     * // => 'Fred'
	     */function capitalize(string){return upperFirst(toString(string).toLowerCase());}/**
	     * Deburrs `string` by converting
	     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	     * letters to basic Latin letters and removing
	     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */function deburr(string){string=toString(string);return string&&string.replace(reLatin,deburrLetter).replace(reComboMark,'');}/**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search up to.
	     * @returns {boolean} Returns `true` if `string` ends with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */function endsWith(string,target,position){string=toString(string);target=baseToString(target);var length=string.length;position=position===undefined?length:baseClamp(toInteger(position),0,length);var end=position;position-=target.length;return position>=0&&string.slice(position,end)==target;}/**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`" in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional
	     * characters use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value. See
	     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in IE < 9, they can break out of
	     * attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the
	     * [HTML5 Security Cheatsheet](https://html5sec.org/) for more details.
	     *
	     * When working with HTML you should always
	     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
	     * XSS vectors.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */function escape(string){string=toString(string);return string&&reHasUnescapedHtml.test(string)?string.replace(reUnescapedHtml,escapeHtmlChar):string;}/**
	     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
	     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https://lodash\.com/\)'
	     */function escapeRegExp(string){string=toString(string);return string&&reHasRegExpChar.test(string)?string.replace(reRegExpChar,'\\$&'):string;}/**
	     * Converts `string` to
	     * [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__FOO_BAR__');
	     * // => 'foo-bar'
	     */var kebabCase=createCompounder(function(result,word,index){return result+(index?'-':'')+word.toLowerCase();});/**
	     * Converts `string`, as space separated words, to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.lowerCase('--Foo-Bar--');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('fooBar');
	     * // => 'foo bar'
	     *
	     * _.lowerCase('__FOO_BAR__');
	     * // => 'foo bar'
	     */var lowerCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toLowerCase();});/**
	     * Converts the first character of `string` to lower case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.lowerFirst('Fred');
	     * // => 'fred'
	     *
	     * _.lowerFirst('FRED');
	     * // => 'fRED'
	     */var lowerFirst=createCaseFirst('toLowerCase');/**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */function pad(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;if(!length||strLength>=length){return string;}var mid=(length-strLength)/2;return createPadding(nativeFloor(mid),chars)+string+createPadding(nativeCeil(mid),chars);}/**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padEnd('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padEnd('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padEnd('abc', 3);
	     * // => 'abc'
	     */function padEnd(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?string+createPadding(length-strLength,chars):string;}/**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padStart('abc', 6);
	     * // => '   abc'
	     *
	     * _.padStart('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padStart('abc', 3);
	     * // => 'abc'
	     */function padStart(string,length,chars){string=toString(string);length=toInteger(length);var strLength=length?stringSize(string):0;return length&&strLength<length?createPadding(length-strLength,chars)+string:string;}/**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
	     * hexadecimal, in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the
	     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @since 1.1.0
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix=10] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */function parseInt(string,radix,guard){// Chrome fails to trim leading <BOM> whitespace characters.
	// See https://bugs.chromium.org/p/v8/issues/detail?id=3109 for more details.
	if(guard||radix==null){radix=0;}else if(radix){radix=+radix;}string=toString(string).replace(reTrim,'');return nativeParseInt(string,radix||(reHasHexPrefix.test(string)?16:10));}/**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=1] The number of times to repeat the string.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */function repeat(string,n,guard){if(guard?isIterateeCall(string,n,guard):n===undefined){n=1;}else{n=toInteger(n);}return baseRepeat(toString(string),n);}/**
	     * Replaces matches for `pattern` in `string` with `replacement`.
	     *
	     * **Note:** This method is based on
	     * [`String#replace`](https://mdn.io/String/replace).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to modify.
	     * @param {RegExp|string} pattern The pattern to replace.
	     * @param {Function|string} replacement The match replacement.
	     * @returns {string} Returns the modified string.
	     * @example
	     *
	     * _.replace('Hi Fred', 'Fred', 'Barney');
	     * // => 'Hi Barney'
	     */function replace(){var args=arguments,string=toString(args[0]);return args.length<3?string:string.replace(args[1],args[2]);}/**
	     * Converts `string` to
	     * [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--FOO-BAR--');
	     * // => 'foo_bar'
	     */var snakeCase=createCompounder(function(result,word,index){return result+(index?'_':'')+word.toLowerCase();});/**
	     * Splits `string` by `separator`.
	     *
	     * **Note:** This method is based on
	     * [`String#split`](https://mdn.io/String/split).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to split.
	     * @param {RegExp|string} separator The separator pattern to split by.
	     * @param {number} [limit] The length to truncate results to.
	     * @returns {Array} Returns the string segments.
	     * @example
	     *
	     * _.split('a-b-c', '-', 2);
	     * // => ['a', 'b']
	     */function split(string,separator,limit){if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){separator=limit=undefined;}limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;if(!limit){return[];}string=toString(string);if(string&&(typeof separator=='string'||separator!=null&&!isRegExp(separator))){separator=baseToString(separator);if(!separator&&hasUnicode(string)){return castSlice(stringToArray(string),0,limit);}}return string.split(separator,limit);}/**
	     * Converts `string` to
	     * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @since 3.1.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar--');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__FOO_BAR__');
	     * // => 'FOO BAR'
	     */var startCase=createCompounder(function(result,word,index){return result+(index?' ':'')+upperFirst(word);});/**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`,
	     *  else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */function startsWith(string,target,position){string=toString(string);position=baseClamp(toInteger(position),0,string.length);target=baseToString(target);return string.slice(position,position+target.length)==target;}/**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is given, it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options={}] The options object.
	     * @param {RegExp} [options.escape=_.templateSettings.escape]
	     *  The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
	     *  The "evaluate" delimiter.
	     * @param {Object} [options.imports=_.templateSettings.imports]
	     *  An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
	     *  The "interpolate" delimiter.
	     * @param {string} [options.sourceURL='lodash.templateSources[n]']
	     *  The sourceURL of the compiled template.
	     * @param {string} [options.variable='obj']
	     *  The data object variable name.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // Use the "interpolate" delimiter to create a compiled template.
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // Use the HTML "escape" delimiter to escape data property values.
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the internal `print` function in "evaluate" delimiters.
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // Use the ES delimiter as an alternative to the default "interpolate" delimiter.
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // Use backslashes to treat delimiters as plain text.
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // Use the `imports` option to import `jQuery` as `jq`.
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
	     *
	     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // Use custom template delimiters.
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // Use the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and stack traces.
	     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */function template(string,options,guard){// Based on John Resig's `tmpl` implementation
	// (http://ejohn.org/blog/javascript-micro-templating/)
	// and Laura Doktorova's doT.js (https://github.com/olado/doT).
	var settings=lodash.templateSettings;if(guard&&isIterateeCall(string,options,guard)){options=undefined;}string=toString(string);options=assignInWith({},options,settings,assignInDefaults);var imports=assignInWith({},options.imports,settings.imports,assignInDefaults),importsKeys=keys(imports),importsValues=baseValues(imports,importsKeys);var isEscaping,isEvaluating,index=0,interpolate=options.interpolate||reNoMatch,source="__p += '";// Compile the regexp to match each delimiter.
	var reDelimiters=RegExp((options.escape||reNoMatch).source+'|'+interpolate.source+'|'+(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+(options.evaluate||reNoMatch).source+'|$','g');// Use a sourceURL for easier debugging.
	var sourceURL='//# sourceURL='+('sourceURL'in options?options.sourceURL:'lodash.templateSources['+ ++templateCounter+']')+'\n';string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){interpolateValue||(interpolateValue=esTemplateValue);// Escape characters that can't be included in string literals.
	source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);// Replace delimiters with snippets.
	if(escapeValue){isEscaping=true;source+="' +\n__e("+escapeValue+") +\n'";}if(evaluateValue){isEvaluating=true;source+="';\n"+evaluateValue+";\n__p += '";}if(interpolateValue){source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";}index=offset+match.length;// The JS engine embedded in Adobe products needs `match` returned in
	// order to produce the correct `offset` value.
	return match;});source+="';\n";// If `variable` is not specified wrap a with-statement around the generated
	// code to add the data object to the top of the scope chain.
	var variable=options.variable;if(!variable){source='with (obj) {\n'+source+'\n}\n';}// Cleanup code by stripping empty strings.
	source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).replace(reEmptyStringMiddle,'$1').replace(reEmptyStringTrailing,'$1;');// Frame code as the function body.
	source='function('+(variable||'obj')+') {\n'+(variable?'':'obj || (obj = {});\n')+"var __t, __p = ''"+(isEscaping?', __e = _.escape':'')+(isEvaluating?', __j = Array.prototype.join;\n'+"function print() { __p += __j.call(arguments, '') }\n":';\n')+source+'return __p\n}';var result=attempt(function(){return Function(importsKeys,sourceURL+'return '+source).apply(undefined,importsValues);});// Provide the compiled function's source by its `toString` method or
	// the `source` property as a convenience for inlining compiled templates.
	result.source=source;if(isError(result)){throw result;}return result;}/**
	     * Converts `string`, as a whole, to lower case just like
	     * [String#toLowerCase](https://mdn.io/toLowerCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the lower cased string.
	     * @example
	     *
	     * _.toLower('--Foo-Bar--');
	     * // => '--foo-bar--'
	     *
	     * _.toLower('fooBar');
	     * // => 'foobar'
	     *
	     * _.toLower('__FOO_BAR__');
	     * // => '__foo_bar__'
	     */function toLower(value){return toString(value).toLowerCase();}/**
	     * Converts `string`, as a whole, to upper case just like
	     * [String#toUpperCase](https://mdn.io/toUpperCase).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.toUpper('--foo-bar--');
	     * // => '--FOO-BAR--'
	     *
	     * _.toUpper('fooBar');
	     * // => 'FOOBAR'
	     *
	     * _.toUpper('__foo_bar__');
	     * // => '__FOO_BAR__'
	     */function toUpper(value){return toString(value).toUpperCase();}/**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */function trim(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrim,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),chrSymbols=stringToArray(chars),start=charsStartIndex(strSymbols,chrSymbols),end=charsEndIndex(strSymbols,chrSymbols)+1;return castSlice(strSymbols,start,end).join('');}/**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimEnd('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimEnd('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */function trimEnd(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimEnd,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),end=charsEndIndex(strSymbols,stringToArray(chars))+1;return castSlice(strSymbols,0,end).join('');}/**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimStart('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimStart('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */function trimStart(string,chars,guard){string=toString(string);if(string&&(guard||chars===undefined)){return string.replace(reTrimStart,'');}if(!string||!(chars=baseToString(chars))){return string;}var strSymbols=stringToArray(string),start=charsStartIndex(strSymbols,stringToArray(chars));return castSlice(strSymbols,start).join('');}/**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object} [options={}] The options object.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.truncate('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.truncate('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */function truncate(string,options){var length=DEFAULT_TRUNC_LENGTH,omission=DEFAULT_TRUNC_OMISSION;if(isObject(options)){var separator='separator'in options?options.separator:separator;length='length'in options?toInteger(options.length):length;omission='omission'in options?baseToString(options.omission):omission;}string=toString(string);var strLength=string.length;if(hasUnicode(string)){var strSymbols=stringToArray(string);strLength=strSymbols.length;}if(length>=strLength){return string;}var end=length-stringSize(omission);if(end<1){return omission;}var result=strSymbols?castSlice(strSymbols,0,end).join(''):string.slice(0,end);if(separator===undefined){return result+omission;}if(strSymbols){end+=result.length-end;}if(isRegExp(separator)){if(string.slice(end).search(separator)){var match,substring=result;if(!separator.global){separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');}separator.lastIndex=0;while(match=separator.exec(substring)){var newEnd=match.index;}result=result.slice(0,newEnd===undefined?end:newEnd);}}else if(string.indexOf(baseToString(separator),end)!=end){var index=result.lastIndexOf(separator);if(index>-1){result=result.slice(0,index);}}return result+omission;}/**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to
	     * their corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional
	     * HTML entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @since 0.6.0
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */function unescape(string){string=toString(string);return string&&reHasEscapedHtml.test(string)?string.replace(reEscapedHtml,unescapeHtmlChar):string;}/**
	     * Converts `string`, as space separated words, to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the upper cased string.
	     * @example
	     *
	     * _.upperCase('--foo-bar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('fooBar');
	     * // => 'FOO BAR'
	     *
	     * _.upperCase('__foo_bar__');
	     * // => 'FOO BAR'
	     */var upperCase=createCompounder(function(result,word,index){return result+(index?' ':'')+word.toUpperCase();});/**
	     * Converts the first character of `string` to upper case.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the converted string.
	     * @example
	     *
	     * _.upperFirst('fred');
	     * // => 'Fred'
	     *
	     * _.upperFirst('FRED');
	     * // => 'FRED'
	     */var upperFirst=createCaseFirst('toUpperCase');/**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */function words(string,pattern,guard){string=toString(string);pattern=guard?undefined:pattern;if(pattern===undefined){return hasUnicodeWord(string)?unicodeWords(string):asciiWords(string);}return string.match(pattern)||[];}/*------------------------------------------------------------------------*//**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it's invoked.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Function} func The function to attempt.
	     * @param {...*} [args] The arguments to invoke `func` with.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // Avoid throwing errors for invalid selectors.
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */var attempt=baseRest(function(func,args){try{return apply(func,undefined,args);}catch(e){return isError(e)?e:new Error(e);}});/**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method.
	     *
	     * **Note:** This method doesn't set the "length" property of bound functions.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} methodNames The object method names to bind.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'click': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view, ['click']);
	     * jQuery(element).on('click', view.click);
	     * // => Logs 'clicked docs' when clicked.
	     */var bindAll=baseRest(function(object,methodNames){arrayEach(baseFlatten(methodNames,1),function(key){key=toKey(key);object[key]=bind(object[key],object);});return object;});/**
	     * Creates a function that iterates over `pairs` and invokes the corresponding
	     * function of the first predicate to return truthy. The predicate-function
	     * pairs are invoked with the `this` binding and arguments of the created
	     * function.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Array} pairs The predicate-function pairs.
	     * @returns {Function} Returns the new composite function.
	     * @example
	     *
	     * var func = _.cond([
	     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
	     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
	     *   [_.stubTrue,                      _.constant('no match')]
	     * ]);
	     *
	     * func({ 'a': 1, 'b': 2 });
	     * // => 'matches A'
	     *
	     * func({ 'a': 0, 'b': 1 });
	     * // => 'matches B'
	     *
	     * func({ 'a': '1', 'b': '2' });
	     * // => 'no match'
	     */function cond(pairs){var length=pairs?pairs.length:0,toIteratee=getIteratee();pairs=!length?[]:arrayMap(pairs,function(pair){if(typeof pair[1]!='function'){throw new TypeError(FUNC_ERROR_TEXT);}return[toIteratee(pair[0]),pair[1]];});return baseRest(function(args){var index=-1;while(++index<length){var pair=pairs[index];if(apply(pair[0],this,args)){return apply(pair[1],this,args);}}});}/**
	     * Creates a function that invokes the predicate properties of `source` with
	     * the corresponding property values of a given object, returning `true` if
	     * all predicates return truthy, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.conformsTo` with
	     * `source` partially applied.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {Object} source The object of property predicates to conform to.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 2, 'b': 1 },
	     *   { 'a': 1, 'b': 2 }
	     * ];
	     *
	     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
	     * // => [{ 'a': 1, 'b': 2 }]
	     */function conforms(source){return baseConforms(baseClone(source,true));}/**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new constant function.
	     * @example
	     *
	     * var objects = _.times(2, _.constant({ 'a': 1 }));
	     *
	     * console.log(objects);
	     * // => [{ 'a': 1 }, { 'a': 1 }]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => true
	     */function constant(value){return function(){return value;};}/**
	     * Checks `value` to determine whether a default value should be returned in
	     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
	     * or `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.14.0
	     * @category Util
	     * @param {*} value The value to check.
	     * @param {*} defaultValue The default value.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * _.defaultTo(1, 10);
	     * // => 1
	     *
	     * _.defaultTo(undefined, 10);
	     * // => 10
	     */function defaultTo(value,defaultValue){return value==null||value!==value?defaultValue:value;}/**
	     * Creates a function that returns the result of invoking the given functions
	     * with the `this` binding of the created function, where each successive
	     * invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flowRight
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow([_.add, square]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flow=createFlow();/**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the given functions from right to left.
	     *
	     * @static
	     * @since 3.0.0
	     * @memberOf _
	     * @category Util
	     * @param {...(Function|Function[])} [funcs] The functions to invoke.
	     * @returns {Function} Returns the new composite function.
	     * @see _.flow
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight([square, _.add]);
	     * addSquare(1, 2);
	     * // => 9
	     */var flowRight=createFlow(true);/**
	     * This method returns the first argument it receives.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'a': 1 };
	     *
	     * console.log(_.identity(object) === object);
	     * // => true
	     */function identity(value){return value;}/**
	     * Creates a function that invokes `func` with the arguments of the created
	     * function. If `func` is a property name, the created function returns the
	     * property value for a given element. If `func` is an array or object, the
	     * created function returns `true` for elements that contain the equivalent
	     * source properties, otherwise it returns `false`.
	     *
	     * @static
	     * @since 4.0.0
	     * @memberOf _
	     * @category Util
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // The `_.matches` iteratee shorthand.
	     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
	     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
	     *
	     * // The `_.matchesProperty` iteratee shorthand.
	     * _.filter(users, _.iteratee(['user', 'fred']));
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.map(users, _.iteratee('user'));
	     * // => ['barney', 'fred']
	     *
	     * // Create custom iteratee shorthands.
	     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
	     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
	     *     return func.test(string);
	     *   };
	     * });
	     *
	     * _.filter(['abc', 'def'], /ef/);
	     * // => ['def']
	     */function iteratee(func){return baseIteratee(typeof func=='function'?func:baseClone(func,true));}/**
	     * Creates a function that performs a partial deep comparison between a given
	     * object and `source`, returning `true` if the given object has equivalent
	     * property values, else `false`.
	     *
	     * **Note:** The created function is equivalent to `_.isMatch` with `source`
	     * partially applied.
	     *
	     * Partial comparisons will match empty array and empty object `source`
	     * values against any array or object value, respectively. See `_.isEqual`
	     * for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
	     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
	     */function matches(source){return baseMatches(baseClone(source,true));}/**
	     * Creates a function that performs a partial deep comparison between the
	     * value at `path` of a given object to `srcValue`, returning `true` if the
	     * object value is equivalent, else `false`.
	     *
	     * **Note:** Partial comparisons will match empty array and empty object
	     * `srcValue` values against any array or object value, respectively. See
	     * `_.isEqual` for a list of supported value comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.2.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new spec function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': 1, 'b': 2, 'c': 3 },
	     *   { 'a': 4, 'b': 5, 'c': 6 }
	     * ];
	     *
	     * _.find(objects, _.matchesProperty('a', 4));
	     * // => { 'a': 4, 'b': 5, 'c': 6 }
	     */function matchesProperty(path,srcValue){return baseMatchesProperty(path,baseClone(srcValue,true));}/**
	     * Creates a function that invokes the method at `path` of a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': _.constant(2) } },
	     *   { 'a': { 'b': _.constant(1) } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(objects, _.method(['a', 'b']));
	     * // => [2, 1]
	     */var method=baseRest(function(path,args){return function(object){return baseInvoke(object,path,args);};});/**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path of `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.7.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new invoker function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */var methodOf=baseRest(function(object,args){return function(path){return baseInvoke(object,path,args);};});/**
	     * Adds all own enumerable string keyed function properties of a source
	     * object to the destination object. If `object` is a function, then methods
	     * are added to its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options={}] The options object.
	     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */function mixin(object,source,options){var props=keys(source),methodNames=baseFunctions(source,props);if(options==null&&!(isObject(source)&&(methodNames.length||!props.length))){options=source;source=object;object=this;methodNames=baseFunctions(source,keys(source));}var chain=!(isObject(options)&&'chain'in options)||!!options.chain,isFunc=isFunction(object);arrayEach(methodNames,function(methodName){var func=source[methodName];object[methodName]=func;if(isFunc){object.prototype[methodName]=function(){var chainAll=this.__chain__;if(chain||chainAll){var result=object(this.__wrapped__),actions=result.__actions__=copyArray(this.__actions__);actions.push({'func':func,'args':arguments,'thisArg':object});result.__chain__=chainAll;return result;}return func.apply(object,arrayPush([this.value()],arguments));};}});return object;}/**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */function noConflict(){if(root._===this){root._=oldDash;}return this;}/**
	     * This method returns `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.3.0
	     * @category Util
	     * @example
	     *
	     * _.times(2, _.noop);
	     * // => [undefined, undefined]
	     */function noop(){}// No operation performed.
	/**
	     * Creates a function that gets the argument at index `n`. If `n` is negative,
	     * the nth argument from the end is returned.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [n=0] The index of the argument to return.
	     * @returns {Function} Returns the new pass-thru function.
	     * @example
	     *
	     * var func = _.nthArg(1);
	     * func('a', 'b', 'c', 'd');
	     * // => 'b'
	     *
	     * var func = _.nthArg(-2);
	     * func('a', 'b', 'c', 'd');
	     * // => 'c'
	     */function nthArg(n){n=toInteger(n);return baseRest(function(args){return baseNth(args,n);});}/**
	     * Creates a function that invokes `iteratees` with the arguments it receives
	     * and returns their results.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [iteratees=[_.identity]]
	     *  The iteratees to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.over([Math.max, Math.min]);
	     *
	     * func(1, 2, 3, 4);
	     * // => [4, 1]
	     */var over=createOver(arrayMap);/**
	     * Creates a function that checks if **all** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overEvery([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => false
	     *
	     * func(NaN);
	     * // => false
	     */var overEvery=createOver(arrayEvery);/**
	     * Creates a function that checks if **any** of the `predicates` return
	     * truthy when invoked with the arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {...(Function|Function[])} [predicates=[_.identity]]
	     *  The predicates to check.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var func = _.overSome([Boolean, isFinite]);
	     *
	     * func('1');
	     * // => true
	     *
	     * func(null);
	     * // => true
	     *
	     * func(NaN);
	     * // => false
	     */var overSome=createOver(arraySome);/**
	     * Creates a function that returns the value at `path` of a given object.
	     *
	     * @static
	     * @memberOf _
	     * @since 2.4.0
	     * @category Util
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': 2 } },
	     *   { 'a': { 'b': 1 } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b'));
	     * // => [2, 1]
	     *
	     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	     * // => [1, 2]
	     */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}/**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the value at a given path of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.0.0
	     * @category Util
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new accessor function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */function propertyOf(object){return function(path){return object==null?undefined:baseGet(object,path);};}/**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	     * `start` is specified without an `end` or `step`. If `end` is not specified,
	     * it's set to `start` with `start` then set to `0`.
	     *
	     * **Note:** JavaScript follows the IEEE-754 standard for resolving
	     * floating-point values which can produce unexpected results.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.rangeRight
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(-4);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */var range=createRange();/**
	     * This method is like `_.range` except that it populates values in
	     * descending order.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the range of numbers.
	     * @see _.inRange, _.range
	     * @example
	     *
	     * _.rangeRight(4);
	     * // => [3, 2, 1, 0]
	     *
	     * _.rangeRight(-4);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 5);
	     * // => [4, 3, 2, 1]
	     *
	     * _.rangeRight(0, 20, 5);
	     * // => [15, 10, 5, 0]
	     *
	     * _.rangeRight(0, -4, -1);
	     * // => [-3, -2, -1, 0]
	     *
	     * _.rangeRight(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.rangeRight(0);
	     * // => []
	     */var rangeRight=createRange(true);/**
	     * This method returns a new empty array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Array} Returns the new empty array.
	     * @example
	     *
	     * var arrays = _.times(2, _.stubArray);
	     *
	     * console.log(arrays);
	     * // => [[], []]
	     *
	     * console.log(arrays[0] === arrays[1]);
	     * // => false
	     */function stubArray(){return[];}/**
	     * This method returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `false`.
	     * @example
	     *
	     * _.times(2, _.stubFalse);
	     * // => [false, false]
	     */function stubFalse(){return false;}/**
	     * This method returns a new empty object.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {Object} Returns the new empty object.
	     * @example
	     *
	     * var objects = _.times(2, _.stubObject);
	     *
	     * console.log(objects);
	     * // => [{}, {}]
	     *
	     * console.log(objects[0] === objects[1]);
	     * // => false
	     */function stubObject(){return{};}/**
	     * This method returns an empty string.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {string} Returns the empty string.
	     * @example
	     *
	     * _.times(2, _.stubString);
	     * // => ['', '']
	     */function stubString(){return'';}/**
	     * This method returns `true`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.13.0
	     * @category Util
	     * @returns {boolean} Returns `true`.
	     * @example
	     *
	     * _.times(2, _.stubTrue);
	     * // => [true, true]
	     */function stubTrue(){return true;}/**
	     * Invokes the iteratee `n` times, returning an array of the results of
	     * each invocation. The iteratee is invoked with one argument; (index).
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.times(3, String);
	     * // => ['0', '1', '2']
	     *
	     *  _.times(4, _.constant(0));
	     * // => [0, 0, 0, 0]
	     */function times(n,iteratee){n=toInteger(n);if(n<1||n>MAX_SAFE_INTEGER){return[];}var index=MAX_ARRAY_LENGTH,length=nativeMin(n,MAX_ARRAY_LENGTH);iteratee=getIteratee(iteratee);n-=MAX_ARRAY_LENGTH;var result=baseTimes(length,iteratee);while(++index<n){iteratee(index);}return result;}/**
	     * Converts `value` to a property path array.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Util
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the new property path array.
	     * @example
	     *
	     * _.toPath('a.b.c');
	     * // => ['a', 'b', 'c']
	     *
	     * _.toPath('a[0].b.c');
	     * // => ['a', '0', 'b', 'c']
	     */function toPath(value){if(isArray(value)){return arrayMap(value,toKey);}return isSymbol(value)?[value]:copyArray(stringToPath(value));}/**
	     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Util
	     * @param {string} [prefix=''] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id;}/*------------------------------------------------------------------------*//**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {number} augend The first number in an addition.
	     * @param {number} addend The second number in an addition.
	     * @returns {number} Returns the total.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */var add=createMathOperation(function(augend,addend){return augend+addend;},0);/**
	     * Computes `number` rounded up to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round up.
	     * @param {number} [precision=0] The precision to round up to.
	     * @returns {number} Returns the rounded up number.
	     * @example
	     *
	     * _.ceil(4.006);
	     * // => 5
	     *
	     * _.ceil(6.004, 2);
	     * // => 6.01
	     *
	     * _.ceil(6040, -2);
	     * // => 6100
	     */var ceil=createRound('ceil');/**
	     * Divide two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} dividend The first number in a division.
	     * @param {number} divisor The second number in a division.
	     * @returns {number} Returns the quotient.
	     * @example
	     *
	     * _.divide(6, 4);
	     * // => 1.5
	     */var divide=createMathOperation(function(dividend,divisor){return dividend/divisor;},1);/**
	     * Computes `number` rounded down to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round down.
	     * @param {number} [precision=0] The precision to round down to.
	     * @returns {number} Returns the rounded down number.
	     * @example
	     *
	     * _.floor(4.006);
	     * // => 4
	     *
	     * _.floor(0.046, 2);
	     * // => 0.04
	     *
	     * _.floor(4060, -2);
	     * // => 4000
	     */var floor=createRound('floor');/**
	     * Computes the maximum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => undefined
	     */function max(array){return array&&array.length?baseExtremum(array,identity,baseGt):undefined;}/**
	     * This method is like `_.max` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.maxBy(objects, function(o) { return o.n; });
	     * // => { 'n': 2 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.maxBy(objects, 'n');
	     * // => { 'n': 2 }
	     */function maxBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseGt):undefined;}/**
	     * Computes the mean of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * _.mean([4, 2, 8, 6]);
	     * // => 5
	     */function mean(array){return baseMean(array,identity);}/**
	     * This method is like `_.mean` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be averaged.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the mean.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.meanBy(objects, function(o) { return o.n; });
	     * // => 5
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.meanBy(objects, 'n');
	     * // => 5
	     */function meanBy(array,iteratee){return baseMean(array,getIteratee(iteratee,2));}/**
	     * Computes the minimum value of `array`. If `array` is empty or falsey,
	     * `undefined` is returned.
	     *
	     * @static
	     * @since 0.1.0
	     * @memberOf _
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => undefined
	     */function min(array){return array&&array.length?baseExtremum(array,identity,baseLt):undefined;}/**
	     * This method is like `_.min` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the criterion by which
	     * the value is ranked. The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * var objects = [{ 'n': 1 }, { 'n': 2 }];
	     *
	     * _.minBy(objects, function(o) { return o.n; });
	     * // => { 'n': 1 }
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.minBy(objects, 'n');
	     * // => { 'n': 1 }
	     */function minBy(array,iteratee){return array&&array.length?baseExtremum(array,getIteratee(iteratee,2),baseLt):undefined;}/**
	     * Multiply two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.7.0
	     * @category Math
	     * @param {number} multiplier The first number in a multiplication.
	     * @param {number} multiplicand The second number in a multiplication.
	     * @returns {number} Returns the product.
	     * @example
	     *
	     * _.multiply(6, 4);
	     * // => 24
	     */var multiply=createMathOperation(function(multiplier,multiplicand){return multiplier*multiplicand;},1);/**
	     * Computes `number` rounded to `precision`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.10.0
	     * @category Math
	     * @param {number} number The number to round.
	     * @param {number} [precision=0] The precision to round to.
	     * @returns {number} Returns the rounded number.
	     * @example
	     *
	     * _.round(4.006);
	     * // => 4
	     *
	     * _.round(4.006, 2);
	     * // => 4.01
	     *
	     * _.round(4060, -2);
	     * // => 4100
	     */var round=createRound('round');/**
	     * Subtract two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {number} minuend The first number in a subtraction.
	     * @param {number} subtrahend The second number in a subtraction.
	     * @returns {number} Returns the difference.
	     * @example
	     *
	     * _.subtract(6, 4);
	     * // => 2
	     */var subtract=createMathOperation(function(minuend,subtrahend){return minuend-subtrahend;},0);/**
	     * Computes the sum of the values in `array`.
	     *
	     * @static
	     * @memberOf _
	     * @since 3.4.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 2, 8, 6]);
	     * // => 20
	     */function sum(array){return array&&array.length?baseSum(array,identity):0;}/**
	     * This method is like `_.sum` except that it accepts `iteratee` which is
	     * invoked for each element in `array` to generate the value to be summed.
	     * The iteratee is invoked with one argument: (value).
	     *
	     * @static
	     * @memberOf _
	     * @since 4.0.0
	     * @category Math
	     * @param {Array} array The array to iterate over.
	     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
	     *
	     * _.sumBy(objects, function(o) { return o.n; });
	     * // => 20
	     *
	     * // The `_.property` iteratee shorthand.
	     * _.sumBy(objects, 'n');
	     * // => 20
	     */function sumBy(array,iteratee){return array&&array.length?baseSum(array,getIteratee(iteratee,2)):0;}/*------------------------------------------------------------------------*/// Add methods that return wrapped values in chain sequences.
	lodash.after=after;lodash.ary=ary;lodash.assign=assign;lodash.assignIn=assignIn;lodash.assignInWith=assignInWith;lodash.assignWith=assignWith;lodash.at=at;lodash.before=before;lodash.bind=bind;lodash.bindAll=bindAll;lodash.bindKey=bindKey;lodash.castArray=castArray;lodash.chain=chain;lodash.chunk=chunk;lodash.compact=compact;lodash.concat=concat;lodash.cond=cond;lodash.conforms=conforms;lodash.constant=constant;lodash.countBy=countBy;lodash.create=create;lodash.curry=curry;lodash.curryRight=curryRight;lodash.debounce=debounce;lodash.defaults=defaults;lodash.defaultsDeep=defaultsDeep;lodash.defer=defer;lodash.delay=delay;lodash.difference=difference;lodash.differenceBy=differenceBy;lodash.differenceWith=differenceWith;lodash.drop=drop;lodash.dropRight=dropRight;lodash.dropRightWhile=dropRightWhile;lodash.dropWhile=dropWhile;lodash.fill=fill;lodash.filter=filter;lodash.flatMap=flatMap;lodash.flatMapDeep=flatMapDeep;lodash.flatMapDepth=flatMapDepth;lodash.flatten=flatten;lodash.flattenDeep=flattenDeep;lodash.flattenDepth=flattenDepth;lodash.flip=flip;lodash.flow=flow;lodash.flowRight=flowRight;lodash.fromPairs=fromPairs;lodash.functions=functions;lodash.functionsIn=functionsIn;lodash.groupBy=groupBy;lodash.initial=initial;lodash.intersection=intersection;lodash.intersectionBy=intersectionBy;lodash.intersectionWith=intersectionWith;lodash.invert=invert;lodash.invertBy=invertBy;lodash.invokeMap=invokeMap;lodash.iteratee=iteratee;lodash.keyBy=keyBy;lodash.keys=keys;lodash.keysIn=keysIn;lodash.map=map;lodash.mapKeys=mapKeys;lodash.mapValues=mapValues;lodash.matches=matches;lodash.matchesProperty=matchesProperty;lodash.memoize=memoize;lodash.merge=merge;lodash.mergeWith=mergeWith;lodash.method=method;lodash.methodOf=methodOf;lodash.mixin=mixin;lodash.negate=negate;lodash.nthArg=nthArg;lodash.omit=omit;lodash.omitBy=omitBy;lodash.once=once;lodash.orderBy=orderBy;lodash.over=over;lodash.overArgs=overArgs;lodash.overEvery=overEvery;lodash.overSome=overSome;lodash.partial=partial;lodash.partialRight=partialRight;lodash.partition=partition;lodash.pick=pick;lodash.pickBy=pickBy;lodash.property=property;lodash.propertyOf=propertyOf;lodash.pull=pull;lodash.pullAll=pullAll;lodash.pullAllBy=pullAllBy;lodash.pullAllWith=pullAllWith;lodash.pullAt=pullAt;lodash.range=range;lodash.rangeRight=rangeRight;lodash.rearg=rearg;lodash.reject=reject;lodash.remove=remove;lodash.rest=rest;lodash.reverse=reverse;lodash.sampleSize=sampleSize;lodash.set=set;lodash.setWith=setWith;lodash.shuffle=shuffle;lodash.slice=slice;lodash.sortBy=sortBy;lodash.sortedUniq=sortedUniq;lodash.sortedUniqBy=sortedUniqBy;lodash.split=split;lodash.spread=spread;lodash.tail=tail;lodash.take=take;lodash.takeRight=takeRight;lodash.takeRightWhile=takeRightWhile;lodash.takeWhile=takeWhile;lodash.tap=tap;lodash.throttle=throttle;lodash.thru=thru;lodash.toArray=toArray;lodash.toPairs=toPairs;lodash.toPairsIn=toPairsIn;lodash.toPath=toPath;lodash.toPlainObject=toPlainObject;lodash.transform=transform;lodash.unary=unary;lodash.union=union;lodash.unionBy=unionBy;lodash.unionWith=unionWith;lodash.uniq=uniq;lodash.uniqBy=uniqBy;lodash.uniqWith=uniqWith;lodash.unset=unset;lodash.unzip=unzip;lodash.unzipWith=unzipWith;lodash.update=update;lodash.updateWith=updateWith;lodash.values=values;lodash.valuesIn=valuesIn;lodash.without=without;lodash.words=words;lodash.wrap=wrap;lodash.xor=xor;lodash.xorBy=xorBy;lodash.xorWith=xorWith;lodash.zip=zip;lodash.zipObject=zipObject;lodash.zipObjectDeep=zipObjectDeep;lodash.zipWith=zipWith;// Add aliases.
	lodash.entries=toPairs;lodash.entriesIn=toPairsIn;lodash.extend=assignIn;lodash.extendWith=assignInWith;// Add methods to `lodash.prototype`.
	mixin(lodash,lodash);/*------------------------------------------------------------------------*/// Add methods that return unwrapped values in chain sequences.
	lodash.add=add;lodash.attempt=attempt;lodash.camelCase=camelCase;lodash.capitalize=capitalize;lodash.ceil=ceil;lodash.clamp=clamp;lodash.clone=clone;lodash.cloneDeep=cloneDeep;lodash.cloneDeepWith=cloneDeepWith;lodash.cloneWith=cloneWith;lodash.conformsTo=conformsTo;lodash.deburr=deburr;lodash.defaultTo=defaultTo;lodash.divide=divide;lodash.endsWith=endsWith;lodash.eq=eq;lodash.escape=escape;lodash.escapeRegExp=escapeRegExp;lodash.every=every;lodash.find=find;lodash.findIndex=findIndex;lodash.findKey=findKey;lodash.findLast=findLast;lodash.findLastIndex=findLastIndex;lodash.findLastKey=findLastKey;lodash.floor=floor;lodash.forEach=forEach;lodash.forEachRight=forEachRight;lodash.forIn=forIn;lodash.forInRight=forInRight;lodash.forOwn=forOwn;lodash.forOwnRight=forOwnRight;lodash.get=get;lodash.gt=gt;lodash.gte=gte;lodash.has=has;lodash.hasIn=hasIn;lodash.head=head;lodash.identity=identity;lodash.includes=includes;lodash.indexOf=indexOf;lodash.inRange=inRange;lodash.invoke=invoke;lodash.isArguments=isArguments;lodash.isArray=isArray;lodash.isArrayBuffer=isArrayBuffer;lodash.isArrayLike=isArrayLike;lodash.isArrayLikeObject=isArrayLikeObject;lodash.isBoolean=isBoolean;lodash.isBuffer=isBuffer;lodash.isDate=isDate;lodash.isElement=isElement;lodash.isEmpty=isEmpty;lodash.isEqual=isEqual;lodash.isEqualWith=isEqualWith;lodash.isError=isError;lodash.isFinite=isFinite;lodash.isFunction=isFunction;lodash.isInteger=isInteger;lodash.isLength=isLength;lodash.isMap=isMap;lodash.isMatch=isMatch;lodash.isMatchWith=isMatchWith;lodash.isNaN=isNaN;lodash.isNative=isNative;lodash.isNil=isNil;lodash.isNull=isNull;lodash.isNumber=isNumber;lodash.isObject=isObject;lodash.isObjectLike=isObjectLike;lodash.isPlainObject=isPlainObject;lodash.isRegExp=isRegExp;lodash.isSafeInteger=isSafeInteger;lodash.isSet=isSet;lodash.isString=isString;lodash.isSymbol=isSymbol;lodash.isTypedArray=isTypedArray;lodash.isUndefined=isUndefined;lodash.isWeakMap=isWeakMap;lodash.isWeakSet=isWeakSet;lodash.join=join;lodash.kebabCase=kebabCase;lodash.last=last;lodash.lastIndexOf=lastIndexOf;lodash.lowerCase=lowerCase;lodash.lowerFirst=lowerFirst;lodash.lt=lt;lodash.lte=lte;lodash.max=max;lodash.maxBy=maxBy;lodash.mean=mean;lodash.meanBy=meanBy;lodash.min=min;lodash.minBy=minBy;lodash.stubArray=stubArray;lodash.stubFalse=stubFalse;lodash.stubObject=stubObject;lodash.stubString=stubString;lodash.stubTrue=stubTrue;lodash.multiply=multiply;lodash.nth=nth;lodash.noConflict=noConflict;lodash.noop=noop;lodash.now=now;lodash.pad=pad;lodash.padEnd=padEnd;lodash.padStart=padStart;lodash.parseInt=parseInt;lodash.random=random;lodash.reduce=reduce;lodash.reduceRight=reduceRight;lodash.repeat=repeat;lodash.replace=replace;lodash.result=result;lodash.round=round;lodash.runInContext=runInContext;lodash.sample=sample;lodash.size=size;lodash.snakeCase=snakeCase;lodash.some=some;lodash.sortedIndex=sortedIndex;lodash.sortedIndexBy=sortedIndexBy;lodash.sortedIndexOf=sortedIndexOf;lodash.sortedLastIndex=sortedLastIndex;lodash.sortedLastIndexBy=sortedLastIndexBy;lodash.sortedLastIndexOf=sortedLastIndexOf;lodash.startCase=startCase;lodash.startsWith=startsWith;lodash.subtract=subtract;lodash.sum=sum;lodash.sumBy=sumBy;lodash.template=template;lodash.times=times;lodash.toFinite=toFinite;lodash.toInteger=toInteger;lodash.toLength=toLength;lodash.toLower=toLower;lodash.toNumber=toNumber;lodash.toSafeInteger=toSafeInteger;lodash.toString=toString;lodash.toUpper=toUpper;lodash.trim=trim;lodash.trimEnd=trimEnd;lodash.trimStart=trimStart;lodash.truncate=truncate;lodash.unescape=unescape;lodash.uniqueId=uniqueId;lodash.upperCase=upperCase;lodash.upperFirst=upperFirst;// Add aliases.
	lodash.each=forEach;lodash.eachRight=forEachRight;lodash.first=head;mixin(lodash,function(){var source={};baseForOwn(lodash,function(func,methodName){if(!hasOwnProperty.call(lodash.prototype,methodName)){source[methodName]=func;}});return source;}(),{'chain':false});/*------------------------------------------------------------------------*//**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type {string}
	     */lodash.VERSION=VERSION;// Assign default placeholders.
	arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){lodash[methodName].placeholder=lodash;});// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	arrayEach(['drop','take'],function(methodName,index){LazyWrapper.prototype[methodName]=function(n){var filtered=this.__filtered__;if(filtered&&!index){return new LazyWrapper(this);}n=n===undefined?1:nativeMax(toInteger(n),0);var result=this.clone();if(filtered){result.__takeCount__=nativeMin(n,result.__takeCount__);}else{result.__views__.push({'size':nativeMin(n,MAX_ARRAY_LENGTH),'type':methodName+(result.__dir__<0?'Right':'')});}return result;};LazyWrapper.prototype[methodName+'Right']=function(n){return this.reverse()[methodName](n).reverse();};});// Add `LazyWrapper` methods that accept an `iteratee` value.
	arrayEach(['filter','map','takeWhile'],function(methodName,index){var type=index+1,isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;LazyWrapper.prototype[methodName]=function(iteratee){var result=this.clone();result.__iteratees__.push({'iteratee':getIteratee(iteratee,3),'type':type});result.__filtered__=result.__filtered__||isFilter;return result;};});// Add `LazyWrapper` methods for `_.head` and `_.last`.
	arrayEach(['head','last'],function(methodName,index){var takeName='take'+(index?'Right':'');LazyWrapper.prototype[methodName]=function(){return this[takeName](1).value()[0];};});// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
	arrayEach(['initial','tail'],function(methodName,index){var dropName='drop'+(index?'':'Right');LazyWrapper.prototype[methodName]=function(){return this.__filtered__?new LazyWrapper(this):this[dropName](1);};});LazyWrapper.prototype.compact=function(){return this.filter(identity);};LazyWrapper.prototype.find=function(predicate){return this.filter(predicate).head();};LazyWrapper.prototype.findLast=function(predicate){return this.reverse().find(predicate);};LazyWrapper.prototype.invokeMap=baseRest(function(path,args){if(typeof path=='function'){return new LazyWrapper(this);}return this.map(function(value){return baseInvoke(value,path,args);});});LazyWrapper.prototype.reject=function(predicate){return this.filter(negate(getIteratee(predicate)));};LazyWrapper.prototype.slice=function(start,end){start=toInteger(start);var result=this;if(result.__filtered__&&(start>0||end<0)){return new LazyWrapper(result);}if(start<0){result=result.takeRight(-start);}else if(start){result=result.drop(start);}if(end!==undefined){end=toInteger(end);result=end<0?result.dropRight(-end):result.take(end-start);}return result;};LazyWrapper.prototype.takeRightWhile=function(predicate){return this.reverse().takeWhile(predicate).reverse();};LazyWrapper.prototype.toArray=function(){return this.take(MAX_ARRAY_LENGTH);};// Add `LazyWrapper` methods to `lodash.prototype`.
	baseForOwn(LazyWrapper.prototype,function(func,methodName){var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),isTaker=/^(?:head|last)$/.test(methodName),lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],retUnwrapped=isTaker||/^find/.test(methodName);if(!lodashFunc){return;}lodash.prototype[methodName]=function(){var value=this.__wrapped__,args=isTaker?[1]:arguments,isLazy=value instanceof LazyWrapper,iteratee=args[0],useLazy=isLazy||isArray(value);var interceptor=function interceptor(value){var result=lodashFunc.apply(lodash,arrayPush([value],args));return isTaker&&chainAll?result[0]:result;};if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){// Avoid lazy use if the iteratee has a "length" value other than `1`.
	isLazy=useLazy=false;}var chainAll=this.__chain__,isHybrid=!!this.__actions__.length,isUnwrapped=retUnwrapped&&!chainAll,onlyLazy=isLazy&&!isHybrid;if(!retUnwrapped&&useLazy){value=onlyLazy?value:new LazyWrapper(this);var result=func.apply(value,args);result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});return new LodashWrapper(result,chainAll);}if(isUnwrapped&&onlyLazy){return func.apply(this,args);}result=this.thru(interceptor);return isUnwrapped?isTaker?result.value()[0]:result.value():result;};});// Add `Array` methods to `lodash.prototype`.
	arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){var func=arrayProto[methodName],chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',retUnwrapped=/^(?:pop|shift)$/.test(methodName);lodash.prototype[methodName]=function(){var args=arguments;if(retUnwrapped&&!this.__chain__){var value=this.value();return func.apply(isArray(value)?value:[],args);}return this[chainName](function(value){return func.apply(isArray(value)?value:[],args);});};});// Map minified method names to their real names.
	baseForOwn(LazyWrapper.prototype,function(func,methodName){var lodashFunc=lodash[methodName];if(lodashFunc){var key=lodashFunc.name+'',names=realNames[key]||(realNames[key]=[]);names.push({'name':methodName,'func':lodashFunc});}});realNames[createHybrid(undefined,BIND_KEY_FLAG).name]=[{'name':'wrapper','func':undefined}];// Add methods to `LazyWrapper`.
	LazyWrapper.prototype.clone=lazyClone;LazyWrapper.prototype.reverse=lazyReverse;LazyWrapper.prototype.value=lazyValue;// Add chain sequence methods to the `lodash` wrapper.
	lodash.prototype.at=wrapperAt;lodash.prototype.chain=wrapperChain;lodash.prototype.commit=wrapperCommit;lodash.prototype.next=wrapperNext;lodash.prototype.plant=wrapperPlant;lodash.prototype.reverse=wrapperReverse;lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;// Add lazy aliases.
	lodash.prototype.first=lodash.prototype.head;if(iteratorSymbol){lodash.prototype[iteratorSymbol]=wrapperToIterator;}return lodash;}/*--------------------------------------------------------------------------*/// Export lodash.
	var _=runInContext();// Some AMD build optimizers, like r.js, check for condition patterns like:
	if("function"=='function'&&_typeof(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!webpack amd options\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))=='object'&&!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!webpack amd options\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())){// Expose Lodash on the global object to prevent errors when Lodash is
	// loaded by a script tag in the presence of an AMD loader.
	// See http://requirejs.org/docs/errors.html#mismatch for more details.
	// Use `_.noConflict` to remove Lodash from the global object.
	root._=_;// Define as an anonymous module so, through path mapping, it can be
	// referenced as the "underscore" module.
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return _;}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}// Check for `exports` after `define` in case a build optimizer adds it.
	else if(freeModule){// Export for Node.js.
	(freeModule.exports=_)._=_;// Export for CommonJS support.
	freeExports._=_;}else{// Export to the global object.
	root._=_;}}).call(undefined);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./../node_modules/webpack/buildin/module.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))(module)))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/* ohdsi.util version 1.1.0
	 *
	 * Author: Chris Knoll (I think)
	 *			AMD setup
	 *			_pruneJSON
	 *			dirtyFlag
	 *
	 * Author: Sigfried Gold
	 *			elementConvert
	 *			d3AddIfNeeded
	 *			D3Element
	 *			shapePath
	*				ResizableSvgContainer extends D3Element
	*			  SvgLayout
	*			  SvgElement
	*			  ChartLabel extends SvgElement
	*			  ChartLabelLeft extends ChartLabel
	*			  ChartLabelBottom extends ChartLabel
	*			  ChartAxis extends SvgElement
	*			  ChartAxisY extends ChartAxis
	*			  ChartAxisX extends ChartAxis
	*			  ChartChart extends SvgElement
	*			  ChartProps
	*			  getState, setState, deleteState, hasState, onStateChange
	*			  Field
	*			  cachedAjax
	*			  storagePut
	*			  storageExists
	*			  storageGet
	*				SharedCrossfilter
	*/
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5), __webpack_require__(9), __webpack_require__(7), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = function ($, ko, LZString, _, crossfilter) {

		var DEBUG = true;
		var ALLOW_CACHING = [
			//'.*',						// REMEMBER TO COMMENT THIS LINE OUT WHEN NOT DEVELOPING!!
			//'/WebAPI/[^/]+/person/',
		];

		var utilModule = { version: '1.0.0' };

		// private functions 	
		function _pruneJSON(key, value) {
			if (value === 0 || value) {
				return value;
			} else {
				return;
			}
		}

		// END private functions

		// module functions
		function dirtyFlag(root, isInitiallyDirty) {
			var result = function result() {},
			    _initialState = ko.observable(ko.toJSON(root, _pruneJSON)),
			    _isInitiallyDirty = ko.observable(isInitiallyDirty);

			result.isDirty = ko.pureComputed(function () {
				return _isInitiallyDirty() || _initialState() !== ko.toJSON(root, _pruneJSON);
			}).extend({
				rateLimit: 200
			});;

			result.reset = function () {
				_initialState(ko.toJSON(root, _pruneJSON));
				_isInitiallyDirty(false);
			};

			return result;
		}

		/* elementConvert
	  * call with css id (with or without #)
	  *				or dom node or d3 selection or jquery selection
	  *
	  * returns type requested ("dom", "d3", "jquery", "id")
	  */
		function elementConvert(target) {
			var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "dom";

			if (target.selectAll) {
				// it's a d3 selection
				if (type === "d3") return target;

				//console.warn("this should't return target.node(), it should return target[0]");
				//   but i haven't been able to get that to work yet
				return elementConvert(target.node(), type); // call again with dom node
				// (first in selection, that is)
			}
			if (target.jquery) {
				// it's a jquery selection
				if (type === "jquery") return target;
				return elementConvert(target[0], type); // call again with dom node
			}
			if (typeof target === "string") {
				// only works with ids for now, not other css selectors
				var id = target[0] === '#' ? target.slice(1) : target;
				var dom = document.getElementById(id);
				if (dom) return elementConvert(dom, type); // call again with dom node
				throw new Error('not a valid element id: ' + target);
			}
			// target ought to be a dom node
			if (!target.tagName) {
				throw new Error('invalid target');
			}
			switch (type) {
				case "dom":
					return target;
				case "id":
					return target.getAttribute('id');
				case "d3":
					return d3.select(target);
				case "jquery":
					return $(target);
			}
			throw new Error('invalid type: ' + type);
		}
		/* d3AddIfNeeded
	  *	call with parent element (can be selector, dom, jquery or d3 item), 
	  *						data (scalar uses selection.datum(), array uses selection.data())
	  *						tag of element(s) to be appended to parent
	  *						array of class names 
	  *						callback to use on enter selection
	  *						callback to use for update
	  *						(could also add remove callback but don't have it yet)
	  *						and array of params to send to callbacks
	  * returns d3 selection with data appropriately attached
	  * warning: if your addCb appends further elements (or if you add more
	  *					using the returned selection, i think),
	  *					they will also have data appropriately attached, but that
	  *					data may end up stale for the updateCb if you call this again 
	  *					with new data unless you explicitly d3.select it
	  *					for example:
	  *					(is this really true? check before finishing example)
	  *
	  *					d3AddIfNeeded({parentElement: pdiv, 
	  *												 data: [1,2,3], // three items appended (if they
	  *												                // don't already exist) as children of pdiv
	  *												 tag: 'div',		// they are divs
	  *												 classes: [],
	  *												 addCb: function(el, params) {
	  *																	// each div will have an svg appended
	  *																	el.append('svg');
	  *															  },
	  *												 updateCb: function(el, params) {
	  *                                    // this will force new data to attach
	  *                                    // to previously appended svg
	  *                                    // if this d3AddIfNeeded is called
	  *                                    // a second time with new data
	  *																		el.select('svg');
	  *                                    // more selects may be necessary to propogate
	  *                                    // data to svg's children
	  *																	 },
	  *												 cbParams: []});
	  */
		function d3AddIfNeeded() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var parentElement = _ref.parentElement;
			var data = _ref.data;
			var tag = _ref.tag;
			var _ref$classes = _ref.classes;
			var classes = _ref$classes === undefined ? [] : _ref$classes;
			var _ref$addCb = _ref.addCb;
			var addCb = _ref$addCb === undefined ? function () {} : _ref$addCb;
			var _ref$updateCb = _ref.updateCb;
			var updateCb = _ref$updateCb === undefined ? function () {} : _ref$updateCb;
			var cbParams = _ref.cbParams;

			var el = elementConvert(parentElement, "d3");
			var selection = el.selectAll([tag].concat(classes).join('.'));
			if (Array.isArray(data)) {
				selection = selection.data(data);
			} else {
				selection = selection.data([data]);
				// might want this? : selection = selection.datum(data);
			}
			selection.exit().remove();
			selection.enter().append(tag).each(function (d) {
				var newNode = d3.select(this);
				classes.forEach(function (cls) {
					newNode.classed(cls, true);
				});
			}).call(addCb, cbParams);
			selection = el.selectAll([tag].concat(classes).join('.'));
			selection.call(updateCb, cbParams);
			return selection;
		}
		/* D3Element
	  * this is an OO class to replace the d3AddIfNeeded function above
	  *
	  * making a new D3Element instance (d3El) will add <tag> elements to the
	  * parentElement using a D3 join to the data param. but if elements
	  * already exist, they elements will be appropriately joined to the
	  * data: extras will be removed (after running an exit callback if
	  * you specify one), entering items will be appended, and the update
	  * callback will be run on everything remaining after the join.
	  *
	  * you could also just say: d3El.data(newData); d3El.run(). that will
	  * also perform the appropriate join and run the callbacks.
	  *
	  * so you do not need to keep track of whether you've already created
	  * the elements. if you have and you still have a reference to the
	  * D3Element instance, d3El.data(d); d3El.run(); works. but calling the
	  * same code that created it originally and sending new data will
	  * work as well.
	  *
	  * if you also create child elements like:
	  *    var d3El = new D3Element(params);
	  *    d3El.addChild(params);
	  * then calling d3El.data(newData); d3El.run(); will not only update d3El,
	  * it will also rejoin and update its children with newData.
	  *
	  * var d3El = new D3Element({
	  *				data:arrOrObj,  // data to be joined to selection
	  *												// if it's scalar, will be turned
	  *												// into single-item array
	  *				tag: 'div',		  // tag of element to be appended 
	  *												// if necessary to parent
	  *				classes: ['big','bright'], 
	  *												// to add to element
	  *												// should also insure that 
	  *												// parent.selectAll('tag.classes')
	  *												// only returns elements elements
	  *												// created here
	  *				enterCb: null,  // only needed if you want to
	  *												// run extra code when d3El is
	  *												// first created
	  *				exitCb: null,   // only needed if you want
	  *												// to run extra code (transition?)
	  *												// when d3El is removed
	  *				cbParams: null, // will be passed to all callbacks
	  *												// along with d3 selection
	  *				updateCb:			  // code to run on creation and
	  *												// after possible data changes  // function(selection, cbParams, updateOpts) {
	  *												// updateOpts are set by calling
	  *												// d3El.run(opts) or d3El.update(opts)
	  *												// and they are sent to the updateCb not
	  *												// just for the d3El in question, but to
	  *												// all its children
	  *																selection
	  *																		.attr('x', function(d) {
	  *																				return cbParams.scale(cbParams.xVal(d))
	  *																		})
	  *																},
	  *				children: null, // k/v obj with child descriptors (need to document)
	  *												// should only allow children with explicit d3El.addChild
	  *				dataPropogationSelectors: null, // document when implemented
	  *		});
	  *
	  * d3El.run() returns the d3 selection after performing joins and running callbacks.
	  * you can also get the d3 selection with d3El.selectAll();
	  *
	  * there are many ways to add child elements (using the addChild method, using
	  * the d3 selection returned from run and selectAll methods, or in the add or
	  * update callbacks). I recommend:
	  *
	  *		add using d3El.addChild()
	  *		set attributes in the update callback
	  *		don't use the d3 selections at all
	  *		you probably don't need to do anything in the enterCb
	  *		(because that would probably mean creating some nested dom nodes
	  *		below the one you're adding, and then how would you access those?)
	  */
		function combineFuncs(funcs) {
			return function () {
				for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
					args[_key] = arguments[_key];
				}

				return funcs.map(function (f) {
					return f.apply(this, args);
				});
			};
		}

		var D3Element = function () {
			function D3Element(props) {
				var passParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var parentSelection = arguments[2];
				var parentD3El = arguments[3];

				_classCallCheck(this, D3Element);

				// really need to change (simplify) the way data and opts are
				// handled...  this whole thing is a bit of a monstrosity
				this.parentD3El = parentD3El;
				/* not using anymore:
	   this.parentElement = props.parentElement // any form ok: d3, jq, dom, id
	   											|| this.parentD3El.selectAll();
	   this.el = elementConvert(this.parentElement, "d3");
	   */
				this.parentSelection = parentSelection;
				this.tag = props.tag;
				this.classes = props.classes || [];
				this.enterCb = props.enterCb || function () {};
				this.updateCb = props.updateCb || function () {};
				this.updateCb = props.updateCbs ? combineFuncs(props.updateCbs) // in case you want to run more than one callback on update
				: this.updateCb;
				this.exitCb = props.exitCb || function () {};
				this.cbParams = props.cbParams;
				this._children = {};
				//this.dataPropogationSelectors = props.dataPropogationSelectors; // not implemented yet
				/*
	   if (typeof props.data === "function")
	   	console.warn(`d3 is supposed to handle selectAll().data(fn) nicely, 
	   							 but it doesn't. so you can pass a func that accepts its
	   							 d3El and returns a data array`);
	   */
				this.dataKey = props.dataKey;
				if (!props.stub) {
					// props.data can be array or function that accepts this.parentD3El
					// or it will default to parent's data
					// but it can be overridden later:
					//	 permanently by calling this.data(parentD3El, newData)
					//	 or temporarily by calling this.selectAll(newData)
					this._data = props.data || this.parentD3El._data;
					if (!(Array.isArray(this._data) || typeof this._data === 'function')) throw new Error("data must be array or function");
					this.run(passParams);
				}
			}

			_createClass(D3Element, [{
				key: 'selectAll',
				value: function selectAll() {
					var cssSelector = [this.tag].concat(this.classes).join('.');
					return this.parentSelection.selectAll(cssSelector);
				}
			}, {
				key: 'selectAllJoin',
				value: function selectAllJoin(data) {
					data = data || this._data;
					if (typeof data === "function") {
						// the function should accept 'this' and return the join selection
						return data(this);
						/*
	     return this.dataKey ?
	     				this.selectAll().data(data(this.parentD3El._data), this.dataKey) :
	     				this.selectAll().data(data(this.parentD3El._data));
	     */
					} else {
						return this.dataKey ? this.selectAll().data(data, this.dataKey) : this.selectAll().data(data);
					}
				}
			}, {
				key: 'as',
				value: function as(type) {
					return elementConvert(this.selectAll(), type);
				}
			}, {
				key: 'data',
				value: function data(_data) {
					//bad idea:
					//if (typeof data === "undefined") return this.selectAll().data();
					//hope i'm not breaking anything by doing the more expectable:
					if (typeof _data === "undefined") return this._data;
					if (!(Array.isArray(_data) || typeof _data === 'function')) throw new Error("data must be array or function");
					this._data = _data;
					//return this.selectAll(data);  same here... don't think this was being used
					return this;
				}
			}, {
				key: 'run',
				value: function run() {
					var passParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
					var enter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
					var exit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
					var update = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

					// fix opts: split up data and transition
					var self = this;
					var data = passParams.data || self._data;
					var selection = self.selectAllJoin(data);

					var passParamsForChildren = _.omit(passParams, ['data']); // data gets passed automatically
					//var {delay=0, duration=0} = passParams;

					var mainTrans = passParams.transition || d3.transition();
					passParams.transition = mainTrans;
					// should allow callbacks to pass transitions back so they
					// can be passed on to next callback?

					console.log(self.classes, selection.size(), selection.exit().size(), selection.enter().size());
					if (exit) {
						//if (selection.exit().size()) console.log(`exiting ${self.name}`);
						var exitSelection = selection.exit();
						_.each(self.children(), function (c, name) {
							self.child(name).exit(passParamsForChildren, exitSelection);
						});
						exitSelection
						//.call(self.exitCb, self.cbParams, passParams, self, mainTrans)
						.call(self.exitCb, self.cbParams, passParams, self);
						//.remove() // allow exitCb to remove? -> doesn't seem to work
					}
					if (enter) {
						var enterSelection = selection.enter().append(self.tag).each(function (d) {
							// add classes
							var newNode = d3.select(this);
							self.classes.forEach(function (cls) {
								newNode.classed(cls, true);
							});
						})
						//.call(self.enterCb, self.cbParams, passParams, self, mainTrans)
						.call(self.enterCb, self.cbParams, passParams, self);
						_.each(self.children(), function (c, name) {
							var child = self.makeChild(name, passParamsForChildren, enterSelection);
						});
					}
					selection = self.selectAllJoin(data);
					if (update) {
						selection
						//.call(self.updateCb, self.cbParams, passParams, self, mainTrans)
						.call(self.updateCb, self.cbParams, passParams, self);
						_.each(self.children(), function (c, name) {
							self.child(name).run(passParamsForChildren, enter, exit, update, selection);
						});
					}
					return selection;
				}
			}, {
				key: 'childDesc',
				value: function childDesc(name, desc) {
					if (desc) this._children[name] = { desc: desc };else if (!this._children[name]) throw new Error(name + ' child not created yet');
					return this._children[name].desc;
				}
			}, {
				key: 'child',
				value: function child(name, d3El) {
					if (!this._children[name]) throw new Error(name + ' child not created yet');
					if (d3El) this._children[name].d3El = d3El;
					return this._children[name].d3El;
				}
			}, {
				key: 'addChild',
				value: function addChild(name, desc, passParams) {
					this.childDesc(name, desc);
					if (desc.stub) return this.childDesc(name);
					return this.makeChild(name, passParams, this.selectAll()); // this.selectAll()?
				}
				// should we attempt to send selectAll options (for transition durations)
				// through addChild/makeChild? not doing this yet. but update calls will
				// send these options down the D3Element tree

			}, {
				key: 'makeChild',
				value: function makeChild(name, passParams, selection) {
					var desc = this.childDesc(name);
					//var d3ElProps = $.extend( { parentD3El: this }, desc);
					var d3ElProps = _.merge({ parentD3El: this }, _.cloneDeep(desc));
					return this.child(name, new D3Element(d3ElProps, passParams, selection, this));
					// it sort of doesn't matter because if you repeatedly create D3Elements
					// with the same parameters, d3 enter and exit selections will be empty
					// and update won't have a visible effect since data is the same,
					// but maybe if makeChild (or addChild) is called repeatedly with the
					// same exact parameters, we should avoid actually creating a new
					// D3Element instance
				}
			}, {
				key: 'children',
				value: function children() {
					return this._children;
				}
			}, {
				key: 'implicitChild',
				value: function implicitChild(selectorFunc) {}
			}, {
				key: 'exit',
				value: function exit(passParams) {
					return this.run(passParams, false, true, false);
				}
			}, {
				key: 'enter',
				value: function enter(passParams) {
					return this.run(passParams, true, false, false);
				}
			}, {
				key: 'update',
				value: function update(passParams) {
					return this.run(passParams, false, false, true);
				}
			}]);

			return D3Element;
		}();

		function shapePath(type, cx, cy, r) {
			// shape fits inside the radius
			var shapes = {
				circle: function circle(cx, cy, r) {
					// http://stackoverflow.com/questions/5737975/circle-drawing-with-svgs-arc-path
					return '\n\t\t\t\t\t\t\t\t\t\t\t\t\tM ' + cx + ' ' + cy + '\n\t\t\t\t\t\t\t\t\t\t\t\t\tm -' + r + ', 0\n\t\t\t\t\t\t\t\t\t\t\t\t\ta ' + r + ',' + r + ' 0 1,0 ' + r * 2 + ',0\n\t\t\t\t\t\t\t\t\t\t\t\t\ta ' + r + ',' + r + ' 0 1,0 ' + -r * 2 + ',0\n\t\t\t\t\t\t\t\t\t\t\t\t';
				},
				square: function square(cx, cy, r) {
					var side = Math.sqrt(1 / 2) * r * 2;
					return '\n\t\t\t\t\t\t\t\t\t\t\t\t\tM ' + cx + ' ' + cy + '\n\t\t\t\t\t\t\t\t\t\t\t\t\tm ' + -side / 2 + ' ' + -side / 2 + '\n\t\t\t\t\t\t\t\t\t\t\t\t\tl ' + side + ' 0\n\t\t\t\t\t\t\t\t\t\t\t\t\tl 0 ' + side + '\n\t\t\t\t\t\t\t\t\t\t\t\t\tl ' + -side + ' 0\n\t\t\t\t\t\t\t\t\t\t\t\t\tz\n\t\t\t\t\t\t\t\t\t\t\t\t';
				},
				triangle: function triangle(cx, cy, r) {
					var side = r * Math.sqrt(3);
					var alt = r * 1.5;
					return '\n\t\t\t\t\t\t\t\t\t\t\t\t\tM ' + cx + ' ' + cy + '\n\t\t\t\t\t\t\t\t\t\t\t\t\tm 0 ' + -r + '\n\t\t\t\t\t\t\t\t\t\t\t\t\tl ' + side / 2 + ' ' + alt + '\n\t\t\t\t\t\t\t\t\t\t\t\t\tl ' + -side + ' 0\n\t\t\t\t\t\t\t\t\t\t\t\t\tz\n\t\t\t\t\t\t\t\t\t\t\t\t';
				}
			};
			if (type === "types") return _.keys(shapes);
			if (!(type in shapes)) throw new Error("unrecognized shape type");
			return shapes[type](cx, cy, r);
		}

		// svgSetup could probably be used for all jnj.charts; it works
		// (i believe) the way line chart and scatterplot were already working
		// (without the offscreen stuff, which I believe was not necessary).

		var ResizableSvgContainer = function (_D3Element) {
			_inherits(ResizableSvgContainer, _D3Element);

			// call from chart obj like: 
			//	var divEl = svgSetup.call(this, data, target, w, h, ['zoom-scatter']);
			// target gets a new div, new div gets a new svg. div/svg will resize
			//	with consistent aspect ratio.
			// svgSetup can be called multiple times but will only create div/svg
			//	once. data will be attached to div and svg (for subsequent calls
			//	it may need to be propogated explicitly to svg children)
			// returns a D3Element
			// ( maybe shouldn't send data to this func, attach it later)
			function ResizableSvgContainer(target, data, w, h) {
				var divClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
				var svgClasses = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
				var makeMany = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

				_classCallCheck(this, ResizableSvgContainer);

				if (Array.isArray(data) && data.length > 1 && !makeMany) {
					data = [data];
				}
				function aspect() {
					return w / h;
				}

				var _this = _possibleConstructorReturn(this, (ResizableSvgContainer.__proto__ || Object.getPrototypeOf(ResizableSvgContainer)).call(this, {
					//parentElement: target,
					data: data,
					tag: 'div',
					classes: divClasses
				}, undefined, elementConvert(target, 'd3')));

				var divEl = _this;
				var svgEl = divEl.addChild('svg', {
					tag: 'svg',
					classes: svgClasses,
					updateCb: function updateCb(selection, params, updateOpts, thisEl) {
						var targetWidth = divEl.divWidth();
						selection.attr('width', targetWidth).attr('height', Math.round(targetWidth / aspect())).attr('viewBox', '0 0 ' + w + ' ' + h);
					}
				});
				_this.w = w;
				_this.h = h;
				_this.svgClasses = svgClasses;
				var resizeHandler = $(window).on("resize", function () {
					return svgEl.as('d3').attr("width", _this.divWidth()).attr("height", Math.round(_this.divWidth() / aspect()));
				});
				setTimeout(function () {
					$(window).trigger('resize');
				}, 0);
				return _this;
			}

			_createClass(ResizableSvgContainer, [{
				key: 'divWidth',
				value: function divWidth() {
					try {
						return this.as("jquery").width();
					} catch (e) {
						return this.w;
					}
				}
			}]);

			return ResizableSvgContainer;
		}(D3Element);
		/*
	 // svgSetup could probably be used for all jnj.charts; it works
	 // (i believe) the way line chart and scatterplot were already working
	 // (without the offscreen stuff, which I believe was not necessary).
	 function svgSetup(target, data, w, h, divClasses=[], svgClasses=[]) {
	 		// call from chart obj like: 
	 		//	var divEl = svgSetup.call(this, data, target, w, h, ['zoom-scatter']);
	 		// target gets a new div, new div gets a new svg. div/svg will resize
	 		//	with consistent aspect ratio.
	 		// svgSetup can be called multiple times but will only create div/svg
	 		//	once. data will be attached to div and svg (for subsequent calls
	 		//	it may need to be propogated explicitly to svg children)
	 		// returns a D3Element
	 	// ( maybe shouldn't send data to this func, attach it later)
	 		this.container = this.container || elementConvert(target, "dom");
	 		if (Array.isArray(data) && data.length > 1) {
	 			data = [data];
	 		}
	 		this.svgDivEl = new D3Element( {
	 						parentElement:this.container,
	 						data, tag:'div', classes: divClasses, 
	 		});
	 		var self = this;
	 		this.svgDivEl.addChild('svg',
	 									{
	 											tag: 'svg',
	 											classes: svgClasses,
	 											updateCb: function(selection, params, updateOpts) {
	 												try {
	 													var targetWidth = self.svgDivEl.as("jquery").width();
	 												} catch(e) {
	 													var targetWidth = w;
	 												}
	 												var aspect = w/h;
	 												console.log(targetWidth, aspect);
	 												selection
	 													//.attr('width', w)
	 													//.attr('height', h)
	 													.attr('width', targetWidth)
	 													.attr('height', Math.round(targetWidth / aspect))
	 													.attr('viewBox', '0 0 ' + w + ' ' + h);
	 											},
	 										});
	 		var resizeHandler = $(window).on("resize", {
	 				svgDivEl: this.svgDivEl,
	 				aspect: w / h
	 			},
	 			function (event) {
	 				// set svg to size of container div
	 				var targetWidth = event.data.svgDivEl.as("jquery").width();
	 				event.data.svgDivEl.child('svg').as("d3")
	 							.attr("width", targetWidth)
	 							.attr("height", Math.round(targetWidth / event.data.aspect));
	 			});
	 			setTimeout(function () {
	 			$(window).trigger('resize');
	 		}, 0);
	 		return this.svgDivEl;
	 }
	 */

		/* SvgLayout class
	  * manages layout of subcomponents in zones of an svg
	  * initialize with layout like:
	 	 var layout = new SvgLayout(w, h,
	 				// zones:
	 				{
	 					top: { margin: { size: 5}, }, // top zone initialized with margin
	 																				// 5 pixels (or whatever units) high
	 					bottom: { margin: { size: 5}, },
	 					left: { margin: { size: 5}, },
	 					right: { margin: { size: 5}, },
	 				})
	  * add components to zones like one of these:
	 		
	 		// size is constant:
	 		layout.add('left','axisLabel', { size: 20 })
	 			// size returned by function:
	 		layout.add('left','axisLabel', { size: ()=>axisLabel.node().getBBox().width * 1.5 })
	 			// provide svg element to get size from (must specify 'width' or 'height' as dim)
	 		layout.add('left','axis', { obj: cp.y.axisG.node(), dim:'width' })
	 	 * retrieve dimensions of svg chart area (inside all zones):
	 		layout.svgWidth()
	 		layout.svgHeight()
	  * retrieve svg dimensions:
	 		layout.w()
	 		layout.h()
	  * retrieve total size of zone
	 		layout.zone('bottom')
	  * retrieve total size of one zone element
	 		layout.zone('left.margin')
	  * retrieve total size of more than one zone element
	 		layout.zone(['left.margin','left.axisLabel'])
	  * y position of bottom zone:
	 		layout.h() - layout.zone('bottom')
	  * 
	  * when adding zones, you can also include a position func that will
	  * do something based on the latest layout parameters
	  *
	 		var position = function(layout) {
	 			// positions element to x:left margin, y: middle of svg area
	 			axisLabel.attr("transform", 
	 				`translate(${layout.zone(["left.margin"])},
	 									 ${layout.zone(["top"]) + (h - layout.zone(["top","bottom"])) / 2})`);
	 		}
	 		layout.add('left','axisLabel', { size: 20 }, position: position)
	  *
	  * whenever you call layout.positionZones(), all registered position functions 
	  * will be called. the position funcs should position their subcomponent, but 
	  * shouldn't resize them (except they will, won't they? because, e.g.,
	  * the y axis needs to fit after the x axis grabs some of the vertical space.
	  * but as long as left and right regions don't change size horizontally and top
	  * and bottom don't change size vertically, only two rounds of positioning
	  * will be needed)
	  */


		var SvgLayout = function () {
			function SvgLayout(w, h, zones) {
				var _this2 = this;

				_classCallCheck(this, SvgLayout);

				this._w = w;
				this._h = h;
				['left', 'right', 'top', 'bottom'].forEach(function (zone) {
					return _this2[zone] = _.cloneDeep(zones[zone]);
				});
				this.chart = {};
			}

			_createClass(SvgLayout, [{
				key: 'svgWidth',
				value: function svgWidth() {
					return this._w - this.zone(['left', 'right']);
				}
			}, {
				key: 'svgHeight',
				value: function svgHeight() {
					return this._h - this.zone(['top', 'bottom']);
				}
			}, {
				key: 'w',
				value: function w() {
					return this._w;
				}
			}, {
				key: 'h',
				value: function h() {
					return this._h;
				}
			}, {
				key: 'zone',
				value: function zone(zones) {
					var _this3 = this;

					zones = typeof zones === "string" ? [zones] : zones;
					var size = _.chain(zones).map(function (zone) {
						var zoneParts = zone.split(/\./);
						if (zoneParts.length === 1 && _this3[zoneParts]) {
							return _.values(_this3[zoneParts]);
						}
						if (zoneParts.length === 2 && _this3[zoneParts[0]][zoneParts[1]]) {
							return _this3[zoneParts[0]][zoneParts[1]];
						}
						throw new Error('invalid zone: ' + zone);
					}).flatten().map(function (d) {
						return d.obj ? d.obj.getBBox()[d.dim] : d3.functor(d.size)();
					}).sum().value();
					//console.log(zones, size);
					return size;
				}
			}, {
				key: 'add',
				value: function add(zone, componentName, config) {
					return this[zone][componentName] = config;
				}
			}, {
				key: 'positionZones',
				value: function positionZones() {
					var _this4 = this;

					return _.chain(this).map(_.values).compact().flatten().map('position').compact().each(function (position) {
						return position(_this4);
					}).value();
				}
			}]);

			return SvgLayout;
		}();
		/* SvgElement combines D3Element, SvgLayout, and ChartProps
	  * ChartProps is where configuration options for your chart
	  * are assembled. SvgElement is the place for code that
	  * generates common chart elements (axes, labels, etc.)
	  * So your chart code shouldn't have to worry about placement
	  * of these items (and readjusting placement of other items
	  * when the size of these changes). Chart code should just
	  * say what elements should be included and should (probably
	  * through chartProps) provide methods for generating their
	  * content.
	  *
	  * SvgElement will make a g as a child of the parent D3Element
	  * and then another element inside that (determined by the subclass).
	  *
	  * SvgElement is an abstract class. Subclasses should define
	  *	- zone: where they belong: top, bottom, left, right, center
	  *	- subzone: their (unique) name within their zone
	  *	- enterCb: to be passed to D3Element
	  *	- gEnterCb: enterCb for the g container
	  *	- updateContent: updateCb to be passed to D3Element
	  *	- updatePosition: updateCb to be passed to the g container
	  *	- sizedim: width or height. for determining this element's size
	  *	- size: optional func. by default size is sizedim of element's 
	  *			g's getBBox() 
	  *
	  * SvgElements are one per chart instance. Use them to make titles,
	  * axes, legends, etc. Not to make dots. The data they get is
	  * the chartProp
	  *
	  */


		var SvgElement = function () {
			// assume it always gets a g and then something inside the g
			// the inside thing will be added in the subclass's _addContent
			// method which will include a line like this.gEl.addChild(...).
			// so making a new SvgElement means adding a child (g) and a
			// grandchild (whatever) to the parent D3Eelement
			function SvgElement(d3El, layout, chartProp) {
				_classCallCheck(this, SvgElement);

				if (new.target === SvgElement) throw TypeError("new of abstract class SvgElement");
				this.parentEl = d3El;
				this.layout = layout;
				this.chartProp = chartProp;
				this.gEl = d3El.addChild(chartProp.name, { tag: 'g', data: [chartProp],
					classes: this.cssClasses(), // move to gEnterCb
					// no, don't, will break D3Element
					enterCb: this.gEnterCb.bind(this),
					updateCb: this.updatePosition.bind(this),
					cbParams: { layout: layout }
				});
				if (!this.emptyG()) {
					// if g is empty, don't use enterCb ot updateContent methods
					this.contentEl = this.gEl.addChild(chartProp.name, { tag: this.tagName(),
						data: [chartProp],
						classes: this.cssClasses(), // move to enterCb
						enterCb: this.enterCb.bind(this),
						updateCb: this.updateContent.bind(this),
						cbParams: { layout: layout }
					});
				}

				layout.add(this.zone(), this.subzone(), { size: this.size.bind(this),
					position: this.updatePosition.bind(this, this.gEl.as('d3'), { layout: this.layout })
				});
			}

			_createClass(SvgElement, [{
				key: 'enterCb',
				value: function enterCb() {}
			}, {
				key: 'gEnterCb',
				value: function gEnterCb() {}
			}, {
				key: 'updateContent',
				value: function updateContent() {}
			}, {
				key: 'updatePosition',
				value: function updatePosition() {}
			}, {
				key: 'emptyG',
				value: function emptyG() {}
			}, {
				key: 'size',
				value: function size() {
					return this.gEl.as('dom').getBBox()[this.sizedim()];
				}
			}]);

			return SvgElement;
		}();

		var ChartChart = function (_SvgElement) {
			_inherits(ChartChart, _SvgElement);

			function ChartChart() {
				_classCallCheck(this, ChartChart);

				return _possibleConstructorReturn(this, (ChartChart.__proto__ || Object.getPrototypeOf(ChartChart)).apply(this, arguments));
			}

			_createClass(ChartChart, [{
				key: 'zone',
				value: function zone() {
					return 'chart';
				}
			}, {
				key: 'subzone',
				value: function subzone() {
					return 'chart';
				}
			}, {
				key: 'cssClasses',
				value: function cssClasses() {
					// classes needed on g element
					return [this.chartProp.cssClass];
				}
			}, {
				key: 'gEnterCb',
				value: function gEnterCb(selection, params, opts) {
					selection.attr('clip-path', 'url(#clip)');
				}
			}, {
				key: 'tagName',
				value: function tagName() {
					return 'defs';
				}
			}, {
				key: 'enterCb',
				value: function enterCb(selection, params, opts) {
					selection.append("defs").append("clipPath").attr("id", "clip").append("rect").attr("width", this.layout.svgWidth()).attr("height", this.layout.svgHeight()).attr("x", 0).attr("y", 0);
				}
			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					selection.attr("transform", 'translate(' + params.layout.zone(['left']) + ',' + params.layout.zone(['top']) + ')');
				}
			}]);

			return ChartChart;
		}(SvgElement);

		var ChartInset = function (_SvgElement2) {
			_inherits(ChartInset, _SvgElement2);

			function ChartInset() {
				_classCallCheck(this, ChartInset);

				return _possibleConstructorReturn(this, (ChartInset.__proto__ || Object.getPrototypeOf(ChartInset)).apply(this, arguments));
			}

			_createClass(ChartInset, [{
				key: 'emptyG',
				value: function emptyG() {
					return true;
				}
			}, {
				key: 'cssClasses',
				value: function cssClasses() {
					// classes needed on g element
					return ['insetG'];
				}
			}, {
				key: 'zone',
				value: function zone() {
					return 'top';
				}
			}, {
				key: 'subzone',
				value: function subzone() {
					return 'inset';
				}
			}, {
				key: 'tagName',
				value: function tagName() {
					return 'g';
				}
			}, {
				key: 'sizedim',
				value: function sizedim() {
					return 0;
				}
			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					selection.attr('transform', 'translate(' + (params.layout.w(params.layout) - this.w(params.layout)) + ',0)');
				}
				// could hold on to original layout instead of passing in as param...maybe
				//   not sure if it would get stale

			}, {
				key: 'w',
				value: function w(layout) {
					return layout.w() * 0.15;
				}
			}, {
				key: 'h',
				value: function h(layout) {
					return layout.h() * 0.15;
				}
			}]);

			return ChartInset;
		}(SvgElement);

		var ChartLabel = function (_SvgElement3) {
			_inherits(ChartLabel, _SvgElement3);

			function ChartLabel() {
				_classCallCheck(this, ChartLabel);

				return _possibleConstructorReturn(this, (ChartLabel.__proto__ || Object.getPrototypeOf(ChartLabel)).apply(this, arguments));
			}

			_createClass(ChartLabel, [{
				key: 'tagName',
				value: function tagName() {
					return 'text';
				}
			}]);

			return ChartLabel;
		}(SvgElement);

		var ChartLabelLeft = function (_ChartLabel) {
			_inherits(ChartLabelLeft, _ChartLabel);

			function ChartLabelLeft() {
				_classCallCheck(this, ChartLabelLeft);

				return _possibleConstructorReturn(this, (ChartLabelLeft.__proto__ || Object.getPrototypeOf(ChartLabelLeft)).apply(this, arguments));
			}

			_createClass(ChartLabelLeft, [{
				key: 'cssClasses',
				value: function cssClasses() {
					// classes needed on g element
					return ['y-axislabel', 'axislabel'];
				}
			}, {
				key: 'zone',
				value: function zone() {
					return 'left';
				}
			}, {
				key: 'subzone',
				value: function subzone() {
					return 'axisLabel';
				}
			}, {
				key: 'sizedim',
				value: function sizedim() {
					return 'width';
				}
			}, {
				key: 'size',
				value: function size() {
					return this.gEl.as('dom').getBBox().width * 1.5;
					// width is calculated as 1.5 * box height due to rotation anomolies 
					// that cause the y axis label to appear shifted.
				}
			}, {
				key: 'updateContent',
				value: function updateContent(selection, params, opts) {
					selection.attr("transform", "rotate(-90)").attr("y", 0).attr("x", 0).attr("dy", "1em").style("text-anchor", "middle").text(function (field) {
						return fieldAccessor(field, ['label', 'title', 'name'], 'Y Axis')();
					});
				}
			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					selection.attr('transform', 'translate(' + params.layout.zone(["left.margin"]) + ',\n\t\t\t\t\t\t\t\t\t\t' + (params.layout.zone(["top"]) + (params.layout.h() - params.layout.zone(["top", "bottom"])) / 2) + ')');
				}
			}]);

			return ChartLabelLeft;
		}(ChartLabel);

		var ChartLabelBottom = function (_ChartLabel2) {
			_inherits(ChartLabelBottom, _ChartLabel2);

			function ChartLabelBottom() {
				_classCallCheck(this, ChartLabelBottom);

				return _possibleConstructorReturn(this, (ChartLabelBottom.__proto__ || Object.getPrototypeOf(ChartLabelBottom)).apply(this, arguments));
			}

			_createClass(ChartLabelBottom, [{
				key: 'cssClasses',
				value: function cssClasses() {
					// classes needed on g element
					return ['x-axislabel', 'axislabel'];
				}
			}, {
				key: 'zone',
				value: function zone() {
					return 'bottom';
				}
			}, {
				key: 'subzone',
				value: function subzone() {
					return 'axisLabel';
				}
			}, {
				key: 'sizedim',
				value: function sizedim() {
					return 'height';
				}
			}, {
				key: 'enterCb',
				value: function enterCb(selection, params, opts) {
					selection.style("text-anchor", "middle");
				}
			}, {
				key: 'updateContent',
				value: function updateContent(selection, params, opts) {
					selection.text(function (field) {
						return fieldAccessor(field, ['label', 'title', 'name'], 'X Axis')();
					});
				}
			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					selection.attr('transform', 'translate(' + params.layout.w() / 2 + ',' + (params.layout.h() - params.layout.zone(["bottom.margin"])) + ')');
				}
			}]);

			return ChartLabelBottom;
		}(ChartLabel);

		var ChartAxis = function (_SvgElement4) {
			_inherits(ChartAxis, _SvgElement4);

			function ChartAxis() {
				_classCallCheck(this, ChartAxis);

				return _possibleConstructorReturn(this, (ChartAxis.__proto__ || Object.getPrototypeOf(ChartAxis)).apply(this, arguments));
			}

			_createClass(ChartAxis, [{
				key: 'emptyG',

				//tagName() { return 'g'; }  // pretty bad. axes have an unneeded extra g
				value: function emptyG() {
					return true;
				}
			}, {
				key: 'gEnterCb',
				value: function gEnterCb(selection, params, opts) {
					this.axis = this.chartProp.axis || d3.svg.axis();
					// somewhat weird that scale belongs to chartProp and axis belongs to svgElement
				}
			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					this.axis.scale(this.chartProp.scale).tickFormat(this.chartProp.format).ticks(this.chartProp.ticks).orient(this.zone());
				}
			}]);

			return ChartAxis;
		}(SvgElement);

		var ChartAxisY = function (_ChartAxis) {
			_inherits(ChartAxisY, _ChartAxis);

			function ChartAxisY() {
				_classCallCheck(this, ChartAxisY);

				return _possibleConstructorReturn(this, (ChartAxisY.__proto__ || Object.getPrototypeOf(ChartAxisY)).apply(this, arguments));
			}

			_createClass(ChartAxisY, [{
				key: 'zone',
				value: function zone() {
					return 'left';
				}
			}, {
				key: 'subzone',
				value: function subzone() {
					return 'axis';
				}
			}, {
				key: 'sizedim',
				value: function sizedim() {
					return 'width';
				}
			}, {
				key: 'cssClasses',
				value: function cssClasses() {
					return ['y', 'axis'];
				} // classes needed on g element

			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					this.chartProp.scale.range([params.layout.svgHeight(), 0]);
					_get(ChartAxisY.prototype.__proto__ || Object.getPrototypeOf(ChartAxisY.prototype), 'updatePosition', this).call(this, selection, params, opts);
					// params.layout === this.layout (i think)
					selection.attr('transform', 'translate(' + params.layout.zone(['left']) + ',' + params.layout.zone(['top']) + ')');
					this.axis && selection.call(this.axis);
				}
			}]);

			return ChartAxisY;
		}(ChartAxis);

		var ChartAxisX = function (_ChartAxis2) {
			_inherits(ChartAxisX, _ChartAxis2);

			function ChartAxisX() {
				_classCallCheck(this, ChartAxisX);

				return _possibleConstructorReturn(this, (ChartAxisX.__proto__ || Object.getPrototypeOf(ChartAxisX)).apply(this, arguments));
			}

			_createClass(ChartAxisX, [{
				key: 'zone',
				value: function zone() {
					return 'bottom';
				}
			}, {
				key: 'subzone',
				value: function subzone() {
					return 'axis';
				}
			}, {
				key: 'sizedim',
				value: function sizedim() {
					return 'height';
				}
			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					if (this.chartProp.tickFormat) {
						// check for custom tick formatter
						this.axis.tickFormat(this.chartProp.tickFormat); // otherwise uses chartProp.format above
					}
				}
			}, {
				key: 'cssClasses',
				value: function cssClasses() {
					// classes needed on g element
					return ['x', 'axis'];
				}
			}, {
				key: 'updatePosition',
				value: function updatePosition(selection, params, opts) {
					// if x scale is ordinal, then apply rangeRoundBands, else apply standard range
					if (typeof this.chartProp.scale.rangePoints === 'function') {
						this.chartProp.scale.rangePoints([0, params.layout.svgWidth()]);
					} else {
						this.chartProp.scale.range([0, params.layout.svgWidth()]);
					}
					_get(ChartAxisX.prototype.__proto__ || Object.getPrototypeOf(ChartAxisX.prototype), 'updatePosition', this).call(this, selection, params, opts);
					selection.attr('transform', 'translate(' + params.layout.zone('left') + ',\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t' + (params.layout.h() - params.layout.zone('bottom')) + ')');
					this.axis && selection.call(this.axis);
				}
			}]);

			return ChartAxisX;
		}(ChartAxis);
		/* ChartProps OBSOLETE, using _.merge now
	 			some of this documentation is worth keep and putting in new places
	 			even though it describes a class that is no longer present
	  * The chart class should have default options
	  * which can be overridden when instantiating the chart.
	  * All options are grouped into named chartProps, like:
	  * (For example defaults, see this.defaultOptions in module.zoomScatter.
	  *	For an example of explicit options, see function chartOptions() in sptest.js.)
	  *
	 			defaults = {
	 				x: {
	 							showAxis: true,
	 							showLabel: true,
	 							rangeFunc: layout => [0, layout.svgWidth()],
	 							format: module.util.formatSI(3),
	 							ticks: 10,
	 							needsLabel: true,
	 							needsValueFunc: true,
	 							needsScale: true,
	 				},...
	 			}
	 			explicit = {
	 				x: {
	 							value: d=>d.beforeMatchingStdDiff,
	 							label: "Before matching StdDiff",
	 							tooltipOrder: 1,
	 				},...
	 			}
	  *
	  * If a chart is expecting a label for some prop (like an axis
	  * label for the x axis or tooltip label for the x value), and
	  * no prop.label is specified, the prop name will be used (e.g., 'x').
	  * prop.label can be a function. If it's a string, it will be turned
	  * into a function returning that string. (So the chart needs to
	  * call it, not just print it.) Label generation will be done
	  * automatically if prop.needsLabel is true.
	  *
	  * If needsValueFunc is true for a prop, prop.value will be used.
	  * If prop.value hasn't been specified in default or explicit
	  * prop options, it will be be generated from the label. (Which is
	  * probably not what you want as it will give every data point's
	  * x value (for instance) as x's label.)
	  *
	  * If prop.value is a string or number, it will be transformed into
	  * an accessor function to extract a named property or indexed array
	  * value from a datum object or array.
	  *
	  * If prop.value is a function, it will be called with these arguments:
	  *		- datum (usually called 'd' in d3 callbacks)
	  *		- index of datum in selection data (i)
	  *		- index of data group (series) in parent selection (j)
	  *		- the whole ChartProps instance
	  *		- all of the data (not grouped into series)
	  *		- data for the series
	  *		- prop name (so you can get prop with chartProps[name])
	  *
	  * If prop.needsScale is true, prop.scale will be used (it will default
	  * to d3.scale.linear if not provided.) prop.domainFunc and prop.rangeFunc
	  * will be used to generate domain and range. If they are not provided
	  * they will be generated as functions returning prop.domain or prop.range 
	  * if those are provided. If neither prop.domainFunc nor prop.domain is
	  * provided, a domainFunc will be generated that returns the d3.extent
	  * of the prop.value function applied to all data items.
	  * If neither prop.rangeFunc nor prop.range is provided, an Error will be
	  * thrown.
	  *
	  * The domainFunc will be called with these arguments:
	  *		- the whole data array (not grouped into series)
	  *		- the array of series
	  *		- the whole ChartProps instance
	  *		- prop name
	  *
	  * The rangeFunc will be called with these arguments:
	  *		- the SvgLayout instance
	  *		- the chartProp
	  *		- the wholeChartProps instance
	  *		- prop name
	  * If rangeFunc returns nothing (or anything falsy), the range will not
	  * be set on prop.scale. This is important because for some scales you
	  * may want to do something other than set scale.range(). For instance:
	  *	prop.rangeFunc = function(layout, prop, props) {
	  *											prop.scale.rangePoints([0, layout.w()]);
	  *										}
	  * This function will not return a range to be passed to prop.scale.range
	  * but will call prop.scale.rangePoints() itself.
	  *
	  * Set all scale.domains by calling
	  *		cp.updateDomains(data, series)
	  *
	  * Set all scale.ranges by calling
	  *		cp.updateRanges(layout)
	  *
	  * Also, before drawing data points (and if data changes), you should call
	  *		cp.updateAccessors(data, series)
	  * This will assure that prop.value will be called with fresh data and series
	  * arguments.
	  *
	  * And:
	  *		cp.tooltipSetup(data, series)
	  * If prop.tooltipFunc is provided, it will be setup to receive the same
	  * arguments as prop.value. If not, a tooltipFunc will be generated that
	  * returns results from prop.label and prop.value. tooltipFunc is expected
	  * to return an object with a label property and a value property. 
	  * (What about formatting?)
	  * Tooltip content will only be generated for props where prop.tooltipOrder 
	  * is provided (it should be a non-zero number.)
	  */

		/* @class Field
	  * fields are complex things that get used and accessed in different
	  * ways in different places. most simply a field might be 'age' in
	  * a recordset like:
	  *		[ {gender: 'F', age: 67, weight: 122, height: 65},
	  *			{gender: 'M', age: 12, weight: 84, height: 58} ]
	  *
	  * or a field could be derived, like, say:
	  *	bmi = d => convert(d.weight, 'lb', 'kg') / 
	  *							Math.pow(convert(d.height, 'in', 'm'), 2);
	  *
	  * but in addition to having a property name ('age') or accessor function
	  * (bmi) to extract a value from an object, fields may need names, labels
	  * for display in different contexts, functions for grouping and filtering
	  * values, and more.
	  *
	  * in a chart context, a field like 'age' might also be used as the chart
	  * attribute 'x'. in that case it will also need a way to compute domain:
	  *
	  *			d3.extent(dataset.map(d=>d.age))
	  *
	  * and range (which has nothing to do with age but is based on the pixel
	  * width of the chart).
	  *
	  * in a crossfilter context a field will be associated with a crossfilter
	  * dimension:   dim = cf.dimension(d=>d.age) 
	  * and possible filters: dim.filter([65, 90])
	  *
	  * in a faceted datatable context a field will need a grouping function, e.g.,
	  *
	  *			d => d <= 10 ? '0 - 10' :
	  *			     d <= 20 ? '11 - 20' : 'older than 20';
	  *
	  * and maybe a way of keeping track of or reporting which facet members are
	  * selected
	  *
	  * in a component that displays, say, a scatterplot and an associated datatable
	  * 'age' as a continuous value may serve as 'x' in the scatterplot and a column
	  * in the datatable, and as a grouped value may serve as a facet for the datatable.
	  * should the continuous age and the grouped age be considered the same field?
	  * i'm not sure. probably not.
	  *
	  * in a data-specific component (say a demographics browser) the age field may
	  * be referenced explicitly, but from the point of view of the scatterplot
	  * it will just be thought of as the 'x' field (while probably needing to know
	  * that it is called both 'x' and 'Age' for display in the legend or tooltips.
	  *
	  * what if the tooltip wants to report age as a percentile? it will need access
	  * not only to the age a specific datapoint, but also the ages of all the other
	  * datapoints.
	  *
	  * the purpose of the Field class is to allow fields to be configured in a
	  * simple, intuitive manner, while allowing code and components that use
	  * fields and datasets to get what they need without requiring redundant and
	  * idiosyncratic configuration. (e.g., datatable currently requires a 'caption'
	  * property for facet names and a 'title' property for column headings, while
	  * scatterplot's legend wants a 'label' property and all three of these should
	  * contain the same string for certain fields.)
	  *
	  * the main accessor for a field will be available as field.accessor
	  * it will be generated from, in this order:
	  *		1) an _accessor object called 'value'
	  *		2) a function called 'value'
	  *		3) a string called propName (will become function:
	  *					d => d[propName]
	  *		4) a function called 'defaultValue'
	  *
	  *	all _accessors (except 'value', which will be made into field.accessor)
	  *	will be copied (with same name as _accessor prop) to methods of the main 
	  *	field object when field.bindParams() is called
	  *	(unless accessor.runOnGenerate=true)
	  */


		var Field = function () {
			function Field(name) {
				var _this13 = this;

				var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var allFields = arguments[2];

				_classCallCheck(this, Field);

				if (opts.DEBUG) debugger;
				if (typeof opts.accessor !== "undefined") throw new Error("accessor will be generated, do not define it. see instructions above");
				this.name = name;
				_.extend(this, opts);
				_.each(opts.getters, function (func, name) {
					// inline getters will get clobbered when merging. put them in a getters prop
					Object.defineProperty(_this13, name, {
						get: func, enumerable: true
					});
				});

				/*
	   (this.requiredOptions || []).forEach(opt => {
	   	if (!_.has(this, opt))
	   		throw new Error(`expected ${opt} in ${this.name} Field options`);
	   });
	   */
				var defaultAccessors = {
					value: {
						func: dataAccessor(this, 'value', null, false, true) || fieldAccessor(this, 'propName', null, false, true) && function (d) {
							return d[_this13.propName];
						} || this.defaultValue,
						posParams: ['d']
					},
					labelFunc: {
						func: fieldAccessor(this, ['label', 'title', 'caption', 'name'])
					}
				};
				this._accessors = _.merge(defaultAccessors, this._accessors);
				this._accessors.value.accessorOrder = -1000;

				if (this.proxyFor) {
					delete this._accessors.value;
					if (this.separateBinding) throw new Error("not handling yet");
					Object.defineProperty(this, 'accessor', {
						get: function get() {
							return this.proxyFor.accessor;
						}
					});
				}

				if (this.needsScale) {
					this.scale = this.scale || d3.scale.linear();
					// usually the domain is just the extent of that field in the data
					this._accessors.domain = this._accessors.domain || {
						func: function func(data) {
							return d3.extent(data.map(_this13.accessor));
						},
						posParams: ['data']
					};
					if (!this._accessors.range) // not trying to figure out a default range
						throw new Error('no range for prop ' + name);
				}
				if (typeof this.tooltipOrder !== "undefined" || this.tooltip) {
					this._accessors.tooltip = this._accessors.tooltip || {
						func: function func(d) {
							return {
								name: _this13.labelFunc(),
								value: _this13.accessor(d)
							};
						},
						posParams: ['d']
					};
				}
				this.possibleBindings = this.possibleBindings || allFields.availableDatapointBindings || [];
				this.possibleBindings.push('allFields', 'thisField');
				// possibleBindings stuff is really here to help programmers figure out
				// what params are available when they write accessor functions...but what
				// determines whether the accessor will fail is really whether the params
				// they require have actually been bound (with field.bindParams) before
				// the accessor is used

				// the whole thing is somewhat dangerous, maybe wrong-headed? because
				// what if two components bind and call the same accessor, but one of
				// them manages to bind in between when the other bound and when it called:
				// the other would make the accessor call with unexpected bindings.

				// the point of all this is to allow separation of concerns: an axis
				// scale range depends on chart size, whereas an axis scale domain depends
				// on data. these are available at different times and places and when
				// one changes, the other shouldn't have to worry about it.

				_.each(this._accessors, function (acc, name) {
					/*
	    if (_.difference(acc.posParams, this.possibleBindings).length ||
	    		_.difference(acc.namedParams, this.possibleBindings).length)
	    	throw new Error(`${this.name} accessor requested an unavailable binding`);
	    */
					acc.name = name;
					acc.accGen = new AccessorGenerator(acc);
					acc.accGen.runOnGenerate = acc.runOnGenerate;
				});

				this.allFields = allFields;
			}

			_createClass(Field, [{
				key: 'bindScale',

				/* usually scale domain generation depends on accessor: d3.extent(data.map(this.accessor));
	    * but for color/shape/fill, letting accessor depend on scale, which means scale
	    * has to be set first
	    */
				value: function bindScale(params) {
					try {
						if (this.needsScale) {
							this.scale.domain(this.accessors.domain());
							this.scale.range(this.accessors.range());
						}
					} catch (e) {
						throw new Error("something went wrong setting scale", this.name, e);
					}
				}
			}, {
				key: 'bindAccessor',
				value: function bindAccessor(acc, params) {
					var throwGenerateError = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

					acc.accGen.bindParams(params);
					try {
						acc.accessor = acc.accGen.generate();
						this.__accessors[acc.name] = acc.accessor;
						if (!acc.runOnGenerate && acc.name !== 'value') this[acc.name] = acc.accessor;
						if (acc.name === 'value') this.accessor = acc.accessor;
					} catch (e) {
						if (throwGenerateError) {
							throw new Error("something went wrong binding/generating", this.name, acc, e);
						}
					}
				}
			}, {
				key: 'bindParams',
				value: function bindParams(params) {
					var _this14 = this;

					var throwGenerateError = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

					// make allFields and thisField always available
					params = _.extend({}, params, { allFields: this.allFields, thisField: this });
					this.__accessors = {};
					if (this.accessorDependsOnScale) {
						this._accessors.range && this.bindAccessor(this._accessors.range, params, throwGenerateError);
						this._accessors.domain && this.bindAccessor(this._accessors.domain, params, throwGenerateError);
						this.bindScale(params);
					}
					_.each(_.sortBy(this._accessors, 'accessorOrder'), function (acc) {
						if (_this14.accessorDependsOnScale && _.includes(['domain', 'range'], acc.name)) {
							return;
						}
						if (acc.name === 'scale') {
							throw new Error("don't name an accessor 'scale'");
						}
						_this14.bindAccessor(acc, params, throwGenerateError);
					});
					if (!this.accessorDependsOnScale) {
						this.bindScale(params);
					}
				}
			}, {
				key: 'accessors',
				get: function get() {
					if (!this.__accessors) {
						console.warn('using accessors for ' + this.name + ' before explicitly binding parameters. Trying to bind now.');
						// probably not such a good idea :
						// this.bindParams({allFields: this.allFields}); // at least allFields should be available
					}
					return this.__accessors;
				}
			}]);

			return Field;
		}();

		/*	@class AccessorGenerator
	   *	@param {string} [propName] key of property to extract
	   *	@param {function} [func] to be called with record obj to return value
	   *	@param {string} [thisArg] object to set as *this* for func
	   *	@param {string[]} [posParams] list of positioned parameters of func
	  *																(except first param, which is assumed to be
	  *																 the record object)
	   *	@param {string[]} [namedParams] list of named parameters of func
	   *	@param {object} [bindValues] values to bind to parameters (this can also
	  *																	be done later)
	  */


		var AccessorGenerator = function () {
			function AccessorGenerator() {
				var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var propName = _ref2.propName;
				var func = _ref2.func;
				var posParams = _ref2.posParams;
				var namedParams = _ref2.namedParams;
				var thisArg = _ref2.thisArg;
				var bindValues = _ref2.bindValues;

				_classCallCheck(this, AccessorGenerator);

				if (typeof func === "function") {
					this.plainAccessor = func;
				} else if (typeof propName === "string") {
					this.plainAccessor = function (d) {
						return d[propName];
					};
				} else {
					throw new Error("must specify func function or propName string");
				}
				this.posParams = posParams || [];
				this.namedParams = namedParams || [];
				this.boundParams = bindValues || {};
				this.thisArg = thisArg || null;
			}
			/* @method generate
	   */


			_createClass(AccessorGenerator, [{
				key: 'generate',
				value: function generate() {
					var _this15 = this;

					var pos = this.posParams.map(function (p) {
						return _.has(_this15.boundParams, p) ? _this15.boundParams[p] : _;
					});
					var named = _.pick(this.boundParams, this.namedParams);
					var allArgs = _.isEmpty(named) ? [this.plainAccessor, this.thisArg].concat(pos) : [this.plainAccessor, this.thisArg].concat(pos, named);
					var boundFunc = _.bind.apply(_, allArgs);
					// first arg of apply, _, is context for _.bind (https://lodash.com/docs#bind)
					// then bind gets passed: accessor func, thisArg, posParams, 
					// and (as final arg) namedParams if any are specified.
					// any additional args you want to pass when calling the accessor
					// must come after all posParams and the named args object if there is one
					if (this.runOnGenerate) boundFunc();
					return boundFunc;
				}
				/* @method bindParam
	    * @param {string} paramName
	    * @param {string} paramValue
	    */

			}, {
				key: 'bindParam',
				value: function bindParam(paramName, paramValue) {
					this.boundParams[paramName] = paramValue;
				}
			}, {
				key: 'bindParams',
				value: function bindParams(params) {
					var _this16 = this;

					_.each(params, function (val, name) {
						return _this16.bindParam(name, val);
					});
				}
			}]);

			return AccessorGenerator;
		}();

		/*
	 class ProxyField { // good idea but hard to implement
	 	constructor(name, opts = {}, proxyFor, allFields) {
	 		this.parentField = new Field(name, opts, allFields);
	 		this.baseField = proxyFor;
	 	}
	 }
	 */

		/*
	 	* for value or tooltip functions that make use of aggregation over data or series
	 	* there should be a way to perform the aggregation calculations only once
	 	* rather than on every call to the value/tooltip func (actually, for tooltips
	 	* it doesn't matter too much since only one point gets processed at a time)
	 	*/


		function tooltipBuilderForFields(fields) {
			var accessors = _.chain(fields).filter(function (field) {
				return field.accessors.tooltip;
			}).sortBy('tooltipOrder').map(function (field) {
				return field.accessors.tooltip;
			}).value();
			return function (d, i, j) {
				return accessors.map(function (func) {
					return func(d, i, j);
				}).map(function (o) {
					return o.name + ': ' + o.value + '<br/>';
				}).join('');
			};
		}
		function fishForProp(field, propNames) {
			propNames = Array.isArray(propNames) ? propNames : [propNames];
			// get first propName that appears in the field
			var propName = _.find(propNames, function (propName) {
				return _.has(field, propName);
			});
			return field[propName];
		}
		function firstMatchingProp(obj, props) {
			var props = Array.isArray(props) ? props : [props];
			return _.find(props, function (prop) {
				return _.has(obj, prop);
			});
		}
		function fieldAccessor(field, propNames, defaultVal) {
			var allowFuncs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
			var noError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

			var propName = firstMatchingProp(field, propNames);
			if (typeof propName === "undefined") {
				if (noError) return defaultVal;
				throw new Error("can't find what you want");
			}
			var propVal = field[propName];
			if (allowFuncs && typeof propVal === "function") {
				return propVal;
			}
			return function () {
				return propVal;
			};
		}
		function dataAccessor(field, propNames, defaultFunc) {
			var allowNonFuncs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
			var noError = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

			var propName = firstMatchingProp(field, propNames) || defaultFunc;
			if (typeof propName === "undefined") {
				if (defaultFunc) return defaultFunc;
				if (noError) return;
				throw new Error("can't find what you want");
			}
			var propVal = field[propName];
			if (typeof propVal === "function") {
				return propVal;
			}
			if (allowNonFuncs && (typeof propVal === "string" || isFinite(propVal))) {
				return function (d) {
					return d[propVal];
				};
			}
			if (defaultFunc) return defaultFunc;
			if (noError) return;
			throw new Error("can't find what you want");
		}

		// these functions associate state with a compressed stringified object in the querystring
		function getState(path) {
			var state = _getState();
			// if path is empty, return whole state
			if (typeof path === "undefined" || path === null || !path.length) return state;
			// otherwise use lodash _.get to extract path from state object
			return _.get(state, path);
		}
		function hasState(path) {
			var state = _getState();
			return _.has(state, path);
		}
		function deleteState(path) {
			var state = _getState();
			_.unset(state, path);
			_setState(state);
			//stateChangeTrigger(path, null, 'delete', state);
		}
		function setState(path, val) {
			if (typeof val === "undefined") {
				// if only one arg, then it's the val, not the path; set whole state to that
				val = path;
				_setState(val);
				return;
			}
			var state = _getState();
			_.setWith(state, path, val, Object);
			_setState(state);
			//stateChangeTrigger(path, val, 'set', state);
		}
		function _setState(state) {
			var stateStr = JSON.stringify(state);
			var compressed = LZString.compressToBase64(stateStr);
			var hash = location.hash.startsWith('#') ? location.hash : '#';
			var h = hash.replace(/\?.*/, '');
			location.hash = h + '?' + compressed;
		}
		function _getState() {
			var hash = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : location.hash;

			//console.log(hash === location.hash, hash);
			if (!hash.length) return {};

			var _hash$substr$split = hash.substr(1).split(/\?/);

			var _hash$substr$split2 = _slicedToArray(_hash$substr$split, 2);

			var hashpath = _hash$substr$split2[0];
			var querystring = _hash$substr$split2[1];

			var state = {};
			// state.hashpath = hashpath; // do we want this for anything?
			// do we want a way to put stuff in the state that's not in the url?
			if (querystring && querystring.length) {
				try {
					var compressedStateStr = querystring;
					var stateStr = LZString.decompressFromBase64(compressedStateStr);
					//console.log(stateStr, hash);
					var s = stateStr ? JSON.parse(stateStr) : {};
					_.extend(state, s);
				} catch (e) {
					console.error("can't parse querystring", e);
				}
			}
			return state;
		}

		var stateEventSpace = {};
		function onStateChange(path, listener, data) {
			var evtName = JSON.stringify(path);
			$(stateEventSpace).on(evtName, data, listener);
		}
		function stateChangeTrigger(path, val, change, state) {
			// might want access to old state or old val, but not doing that right now
			var evtName = JSON.stringify(path);
			$(stateEventSpace).trigger(evtName, [{ path: path, val: val, change: change, state: state }]);
		}

		// catch state changes from back button (probably better ways to do this)

		// from https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange:
		//let this snippet run before your hashchange event binding code
		if (!window.HashChangeEvent) (function () {
			var lastURL = document.URL;
			window.addEventListener("hashchange", function (event) {
				Object.defineProperty(event, "oldURL", { enumerable: true, configurable: true, value: lastURL });
				Object.defineProperty(event, "newURL", { enumerable: true, configurable: true, value: document.URL });
				lastURL = document.URL;
			});
		})();

		window.addEventListener('hashchange', function (evt) {
			var changedPaths = getChangedPaths(evt.oldURL.replace(/[^#]*#/, '#'), evt.newURL.replace(/[^#]*#/, '#'));
			changedPaths.forEach(function (c) {
				return stateChangeTrigger(c.path, c.val, c.change, c.state);
			});
		}, false);
		function getChangedPaths(oldhash, newhash) {
			var oldstate = _getState(oldhash);
			var newstate = _getState(newhash);
			var oldpaths = listpaths(oldstate).map(function (d) {
				return d.join('.');
			});
			var newpaths = listpaths(newstate).map(function (d) {
				return d.join('.');
			});
			//console.log(oldpaths, newpaths);
			var changes = {};
			_.difference(oldpaths, newpaths).forEach(function (oldpath) {
				changes[oldpath] = {
					path: oldpath,
					val: _.get(newstate, oldpath),
					change: 'delete',
					state: newstate
				};
			});
			_.difference(newpaths, oldpaths).forEach(function (newpath) {
				var c = changes[newpath] = changes[newpath] || {};
				c.path = newpath;
				c.val = c.val || _.get(newstate, newpath);
				c.change = 'add';
				c.state;c.state || newstate;
			});
			_.intersection(newpaths, oldpaths).forEach(function (sharedpath) {
				if (!_.eq(_.get(oldstate, sharedpath), _.get(newstate, sharedpath))) {
					changes[sharedpath] = {
						path: sharedpath,
						val: _.get(newstate, sharedpath),
						change: 'change',
						state: newstate
					};
				}
			});
			return _.values(changes);
		}
		function listpaths(obj) {
			var par = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			return _.reduce(obj, function (paths, node, key, col) {
				var thispath = par.concat(key);
				//console.log(`looking at ${key} from ${par}: ${thispath}`);
				paths.push(thispath);
				return _.isObject(node) ? paths.concat(listpaths(node, thispath)) : paths;
			}, []);
		}

		//var ajaxCache = {}; // only save till reload
		//var ajaxCache = localStorage; // save indefinitely
		var ajaxCache = sessionStorage; // save for session
		function cachedAjax(opts) {
			var allowed = _.find(ALLOW_CACHING, function (url) {
				return opts.url.match(url);
			});
			if (allowed) {
				console.trace('using cache for ' + opts.url + '. remove ' + allowed + ' from ohdsi.util.ALLOW_CACHING to disable caching for it');
			} else {
				//console.log(`not caching ${opts.url}. add to ohdsi.util.ALLOW_CACHING to enable caching for it`);
				return $.ajax(opts);
			}
			var key = JSON.stringify(opts);
			if (!storageExists(key, ajaxCache)) {
				var ajax = $.ajax(opts);
				ajax.then(function (results) {
					storagePut(key, results, ajaxCache);
				});
				return ajax;
			} else {
				var results = storageGet(key, ajaxCache);
				var deferred = $.Deferred();
				if (opts.success) {
					opts.success(results);
				}
				deferred.resolve(results);
				return deferred;
			}
		}
		function storagePut(key, val) {
			var store = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sessionStorage;

			store[key] = LZString.compressToBase64(JSON.stringify(val));
		}
		function storageExists(key) {
			var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sessionStorage;

			return _.has(store, key);
		}
		function storageGet(key) {
			var store = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : sessionStorage;

			return JSON.parse(LZString.decompressFromBase64(store[key]));
		}

		var SharedCrossfilter = function () {
			function SharedCrossfilter(recs) {
				var _groupAll;

				_classCallCheck(this, SharedCrossfilter);

				this.recs = recs;
				this.cf = crossfilter(this.recs);
				this.dimFields = {};
				this.groupAll = this.cf.groupAll();
				(_groupAll = this.groupAll).reduce.apply(_groupAll, reduceToRecs);
				/* 
	   		this.dimFields :
	   			{
	   				fieldName1: {
	   					field: { // this is what gets passed in
	   						name: fieldName1,
	   						accessor: function(d) { ... },
	   					},
	   					cfDim: < result of: this.cf.dimension(field.accessor) >,
	   					groupings: {}, // allow multiple (named) groupings
	   				},
	   				...
	   			}
	    */
			}

			_createClass(SharedCrossfilter, [{
				key: 'filteredRecs',
				value: function filteredRecs() {
					return this.groupAll.value();
				}
			}, {
				key: 'replaceData',
				value: function replaceData(recs) {
					this.recs = recs;
					//console.log("replacing crossfilter data. you want to do this?");
					var dummy = this.cf.dimension(function (d) {
						return d;
					});
					dummy.filter(function () {
						return false;
					});
					this.cf.remove();
					dummy.dispose();
					this.cf.add(recs);
					$(this).trigger('newData', [{ scf: this }]);
				}
			}, {
				key: 'dimField',
				value: function dimField(name, field, replace) {
					// fields can be Field objects
					// at minimum they need 'name' and 'accessor' properties
					if (typeof field === "undefined") {
						return this.dimFields[name] && this.dimFields[name].field;
					}
					if (_.has(this.dimFields, name)) {
						var dimField = this.dimFields[name];
						if (dimField.field === field) return dimField.field;
						if (typeof replace === "undefined") {
							throw new Error("trying to clobber dimension without replace=true");
						}
						if (!replace) {
							console.warn('keeping old dimField ' + name);
							return dimField.field;
						}
					}
					this.dimFields[name] = {
						field: field,
						cfDim: this.cf.dimension(field.accessor),
						groupings: {}
					};
					return this.dimFields[name].field;
				}
			}, {
				key: 'filter',
				value: function filter(name, func) {
					var triggerData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

					if (!_.has(this.dimFields, name)) throw new Error('no dimField ' + name);

					var dimField = this.dimFields[name];
					if (typeof func === "undefined") {
						return dimField.filter;
					}
					dimField.filter = func; // send null func to remove filter
					dimField.cfDim.filter(func);
					// what if setting filter redundantly? still trigger filter change?
					triggerData.dimField = dimField;

					$(this).trigger('filterEvt', [triggerData]);
				}
			}, {
				key: 'grouping',
				value: function grouping(dimName, groupingName, func) {
					var _grouping$cfDimGroup;

					var reduceFuncs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : reduceToRecs;

					if (!_.has(this.dimFields, name)) throw new Error('no dimField ' + name);

					var dimField = this.dimFields[name];
					if (typeof func === "undefined") {
						return dimField.groupings[groupingName];
					}
					var grouping = dimField.groupings[groupingName] = {
						name: groupingName,
						func: func,
						cfDimGroup: dimField.cfDim.group(func)
					};
					// default to reduceToRecs instead of normal crossfilter behavior that
					//		reduces to counts
					(_grouping$cfDimGroup = grouping.cfDimGroup).reduce.apply(_grouping$cfDimGroup, reduceToRecs);
					return grouping;
				}
			}, {
				key: 'group',
				value: function group(dimName) {
					var groupingName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

					if (!_.has(this.dimFields, dimName)) throw new Error('no dimField ' + dimName);

					var dimField = this.dimFields[dimName];

					if (groupingName === 'default' && !dimField.groupings.default) {
						var _dimField$groupings$d;

						dimField.groupings.default = {
							name: 'default',
							cfDimGroup: dimField.cfDim.group()
						};
						(_dimField$groupings$d = dimField.groupings.default.cfDimGroup).reduce.apply(_dimField$groupings$d, reduceToRecs);
					}

					return dimField.groupings[groupingName].cfDimGroup;
				}
			}, {
				key: 'dimRecs',
				value: function dimRecs(dimName) {
					var _dimField$cfDim$group;

					var groupingName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';

					// return all the records filtered by all dims except this one
					if (!_.has(this.dimFields, dimName)) throw new Error('no dimField ' + dimName);

					var dimField = this.dimFields[dimName];
					return (_dimField$cfDim$group = dimField.cfDim.groupAll()).reduce.apply(_dimField$cfDim$group, reduceToRecs).value();
				}
			}]);

			return SharedCrossfilter;
		}();

		var reduceToRecs = [function (p, v, nf) {
			return p.concat(v);
		}, function (p, v, nf) {
			return _.without(p, v);
		}, function () {
			return [];
		}];

		var PromiseQueue = function () {
			function PromiseQueue() {
				var queueSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

				_classCallCheck(this, PromiseQueue);

				this.queue = [];
				this.queueSize = queueSize;
				this.nextId = 0;
				this.nextToRun = 0;
				this.running = {};
			}

			_createClass(PromiseQueue, [{
				key: 'addFuncs',
				value: function addFuncs(funcs) {
					var _this17 = this;

					// not handling race condition, but seems unlikely
					var batch = funcs.map(function (func) {
						var id = _this17.nextId++;
						var job = _this17.queue[id] = { id: id, func: func, prePromise: $.Deferred() };
						_this17.runNextJob();
						return job;
					});
					return batch.map(function (job) {
						return job.prePromise;
					});
				}
			}, {
				key: 'runNextJob',
				value: function runNextJob() {
					var _this18 = this;

					if (this.nextToRun >= this.queue.length) {
						console.log('queue is empty');
						return;
					}
					if (_.keys(this.running).length < this.queueSize) {
						var job = this.queue[this.nextToRun++];
						console.log('running ' + (job.id + 1) + ' of ' + this.queue.length, job);
						this.running[job.id] = job;
						job.promise = job.func();
						job.promise.done(function (results) {
							job.prePromise.resolve(results);
							delete _this18.running[job.id];
							_this18.runNextJob();
						});
					}
				}
			}, {
				key: 'flush',
				value: function flush() {
					var canceled = this.queue.splice(this.nextToRun);
					canceled.forEach(function (job) {
						return job.prePromise.reject();
					});
					console.log('canceled ' + canceled.map(function (job) {
						return job.id;
					}).join(','));
				}
			}]);

			return PromiseQueue;
		}();

		// END module functions

		utilModule.dirtyFlag = dirtyFlag;
		utilModule.d3AddIfNeeded = d3AddIfNeeded;
		utilModule.elementConvert = elementConvert;
		utilModule.D3Element = D3Element;
		utilModule.shapePath = shapePath;
		utilModule.ResizableSvgContainer = ResizableSvgContainer;
		utilModule.SvgLayout = SvgLayout;
		utilModule.SvgElement = SvgElement;
		utilModule.ChartChart = ChartChart;
		utilModule.ChartLabel = ChartLabel;
		utilModule.ChartLabelLeft = ChartLabelLeft;
		utilModule.ChartLabelBottom = ChartLabelBottom;
		utilModule.ChartAxis = ChartAxis;
		utilModule.ChartAxisY = ChartAxisY;
		utilModule.ChartAxisX = ChartAxisX;
		utilModule.ChartInset = ChartInset;
		//utilModule.ChartProps = ChartProps;
		utilModule.AccessorGenerator = AccessorGenerator;
		utilModule.dataAccessor = dataAccessor;
		utilModule.getState = getState;
		utilModule.setState = setState;
		utilModule.deleteState = deleteState;
		utilModule.hasState = hasState;
		utilModule.onStateChange = onStateChange;
		utilModule.Field = Field;
		utilModule.tooltipBuilderForFields = tooltipBuilderForFields;
		utilModule.cachedAjax = cachedAjax;
		utilModule.storagePut = storagePut;
		utilModule.storageExists = storageExists;
		utilModule.storageGet = storageGet;
		utilModule.SharedCrossfilter = SharedCrossfilter;
		utilModule.PromiseQueue = PromiseQueue;

		if (DEBUG) {
			window.util = utilModule;
		}
		return utilModule;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;"use strict";

	// Copyright (c) 2013 Pieroxy <pieroxy@pieroxy.net>
	// This work is free. You can redistribute it and/or modify it
	// under the terms of the WTFPL, Version 2
	// For more information see LICENSE.txt or http://www.wtfpl.net/
	//
	// For more information, the home page:
	// http://pieroxy.net/blog/pages/lz-string/testing.html
	//
	// LZ-based compression algorithm, version 1.4.4
	var LZString = function () {

	  // private property
	  var f = String.fromCharCode;
	  var keyStrBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	  var keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$";
	  var baseReverseDic = {};

	  function getBaseValue(alphabet, character) {
	    if (!baseReverseDic[alphabet]) {
	      baseReverseDic[alphabet] = {};
	      for (var i = 0; i < alphabet.length; i++) {
	        baseReverseDic[alphabet][alphabet.charAt(i)] = i;
	      }
	    }
	    return baseReverseDic[alphabet][character];
	  }

	  var LZString = {
	    compressToBase64: function compressToBase64(input) {
	      if (input == null) return "";
	      var res = LZString._compress(input, 6, function (a) {
	        return keyStrBase64.charAt(a);
	      });
	      switch (res.length % 4) {// To produce valid Base64
	        default: // When could this happen ?
	        case 0:
	          return res;
	        case 1:
	          return res + "===";
	        case 2:
	          return res + "==";
	        case 3:
	          return res + "=";
	      }
	    },

	    decompressFromBase64: function decompressFromBase64(input) {
	      if (input == null) return "";
	      if (input == "") return null;
	      return LZString._decompress(input.length, 32, function (index) {
	        return getBaseValue(keyStrBase64, input.charAt(index));
	      });
	    },

	    compressToUTF16: function compressToUTF16(input) {
	      if (input == null) return "";
	      return LZString._compress(input, 15, function (a) {
	        return f(a + 32);
	      }) + " ";
	    },

	    decompressFromUTF16: function decompressFromUTF16(compressed) {
	      if (compressed == null) return "";
	      if (compressed == "") return null;
	      return LZString._decompress(compressed.length, 16384, function (index) {
	        return compressed.charCodeAt(index) - 32;
	      });
	    },

	    //compress into uint8array (UCS-2 big endian format)
	    compressToUint8Array: function compressToUint8Array(uncompressed) {
	      var compressed = LZString.compress(uncompressed);
	      var buf = new Uint8Array(compressed.length * 2); // 2 bytes per character

	      for (var i = 0, TotalLen = compressed.length; i < TotalLen; i++) {
	        var current_value = compressed.charCodeAt(i);
	        buf[i * 2] = current_value >>> 8;
	        buf[i * 2 + 1] = current_value % 256;
	      }
	      return buf;
	    },

	    //decompress from uint8array (UCS-2 big endian format)
	    decompressFromUint8Array: function decompressFromUint8Array(compressed) {
	      if (compressed === null || compressed === undefined) {
	        return LZString.decompress(compressed);
	      } else {
	        var buf = new Array(compressed.length / 2); // 2 bytes per character
	        for (var i = 0, TotalLen = buf.length; i < TotalLen; i++) {
	          buf[i] = compressed[i * 2] * 256 + compressed[i * 2 + 1];
	        }

	        var result = [];
	        buf.forEach(function (c) {
	          result.push(f(c));
	        });
	        return LZString.decompress(result.join(''));
	      }
	    },

	    //compress into a string that is already URI encoded
	    compressToEncodedURIComponent: function compressToEncodedURIComponent(input) {
	      if (input == null) return "";
	      return LZString._compress(input, 6, function (a) {
	        return keyStrUriSafe.charAt(a);
	      });
	    },

	    //decompress from an output of compressToEncodedURIComponent
	    decompressFromEncodedURIComponent: function decompressFromEncodedURIComponent(input) {
	      if (input == null) return "";
	      if (input == "") return null;
	      input = input.replace(/ /g, "+");
	      return LZString._decompress(input.length, 32, function (index) {
	        return getBaseValue(keyStrUriSafe, input.charAt(index));
	      });
	    },

	    compress: function compress(uncompressed) {
	      return LZString._compress(uncompressed, 16, function (a) {
	        return f(a);
	      });
	    },
	    _compress: function _compress(uncompressed, bitsPerChar, getCharFromInt) {
	      if (uncompressed == null) return "";
	      var i,
	          value,
	          context_dictionary = {},
	          context_dictionaryToCreate = {},
	          context_c = "",
	          context_wc = "",
	          context_w = "",
	          context_enlargeIn = 2,
	          // Compensate for the first entry which should not count
	      context_dictSize = 3,
	          context_numBits = 2,
	          context_data = [],
	          context_data_val = 0,
	          context_data_position = 0,
	          ii;

	      for (ii = 0; ii < uncompressed.length; ii += 1) {
	        context_c = uncompressed.charAt(ii);
	        if (!Object.prototype.hasOwnProperty.call(context_dictionary, context_c)) {
	          context_dictionary[context_c] = context_dictSize++;
	          context_dictionaryToCreate[context_c] = true;
	        }

	        context_wc = context_w + context_c;
	        if (Object.prototype.hasOwnProperty.call(context_dictionary, context_wc)) {
	          context_w = context_wc;
	        } else {
	          if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
	            if (context_w.charCodeAt(0) < 256) {
	              for (i = 0; i < context_numBits; i++) {
	                context_data_val = context_data_val << 1;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	              }
	              value = context_w.charCodeAt(0);
	              for (i = 0; i < 8; i++) {
	                context_data_val = context_data_val << 1 | value & 1;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	                value = value >> 1;
	              }
	            } else {
	              value = 1;
	              for (i = 0; i < context_numBits; i++) {
	                context_data_val = context_data_val << 1 | value;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	                value = 0;
	              }
	              value = context_w.charCodeAt(0);
	              for (i = 0; i < 16; i++) {
	                context_data_val = context_data_val << 1 | value & 1;
	                if (context_data_position == bitsPerChar - 1) {
	                  context_data_position = 0;
	                  context_data.push(getCharFromInt(context_data_val));
	                  context_data_val = 0;
	                } else {
	                  context_data_position++;
	                }
	                value = value >> 1;
	              }
	            }
	            context_enlargeIn--;
	            if (context_enlargeIn == 0) {
	              context_enlargeIn = Math.pow(2, context_numBits);
	              context_numBits++;
	            }
	            delete context_dictionaryToCreate[context_w];
	          } else {
	            value = context_dictionary[context_w];
	            for (i = 0; i < context_numBits; i++) {
	              context_data_val = context_data_val << 1 | value & 1;
	              if (context_data_position == bitsPerChar - 1) {
	                context_data_position = 0;
	                context_data.push(getCharFromInt(context_data_val));
	                context_data_val = 0;
	              } else {
	                context_data_position++;
	              }
	              value = value >> 1;
	            }
	          }
	          context_enlargeIn--;
	          if (context_enlargeIn == 0) {
	            context_enlargeIn = Math.pow(2, context_numBits);
	            context_numBits++;
	          }
	          // Add wc to the dictionary.
	          context_dictionary[context_wc] = context_dictSize++;
	          context_w = String(context_c);
	        }
	      }

	      // Output the code for w.
	      if (context_w !== "") {
	        if (Object.prototype.hasOwnProperty.call(context_dictionaryToCreate, context_w)) {
	          if (context_w.charCodeAt(0) < 256) {
	            for (i = 0; i < context_numBits; i++) {
	              context_data_val = context_data_val << 1;
	              if (context_data_position == bitsPerChar - 1) {
	                context_data_position = 0;
	                context_data.push(getCharFromInt(context_data_val));
	                context_data_val = 0;
	              } else {
	                context_data_position++;
	              }
	            }
	            value = context_w.charCodeAt(0);
	            for (i = 0; i < 8; i++) {
	              context_data_val = context_data_val << 1 | value & 1;
	              if (context_data_position == bitsPerChar - 1) {
	                context_data_position = 0;
	                context_data.push(getCharFromInt(context_data_val));
	                context_data_val = 0;
	              } else {
	                context_data_position++;
	              }
	              value = value >> 1;
	            }
	          } else {
	            value = 1;
	            for (i = 0; i < context_numBits; i++) {
	              context_data_val = context_data_val << 1 | value;
	              if (context_data_position == bitsPerChar - 1) {
	                context_data_position = 0;
	                context_data.push(getCharFromInt(context_data_val));
	                context_data_val = 0;
	              } else {
	                context_data_position++;
	              }
	              value = 0;
	            }
	            value = context_w.charCodeAt(0);
	            for (i = 0; i < 16; i++) {
	              context_data_val = context_data_val << 1 | value & 1;
	              if (context_data_position == bitsPerChar - 1) {
	                context_data_position = 0;
	                context_data.push(getCharFromInt(context_data_val));
	                context_data_val = 0;
	              } else {
	                context_data_position++;
	              }
	              value = value >> 1;
	            }
	          }
	          context_enlargeIn--;
	          if (context_enlargeIn == 0) {
	            context_enlargeIn = Math.pow(2, context_numBits);
	            context_numBits++;
	          }
	          delete context_dictionaryToCreate[context_w];
	        } else {
	          value = context_dictionary[context_w];
	          for (i = 0; i < context_numBits; i++) {
	            context_data_val = context_data_val << 1 | value & 1;
	            if (context_data_position == bitsPerChar - 1) {
	              context_data_position = 0;
	              context_data.push(getCharFromInt(context_data_val));
	              context_data_val = 0;
	            } else {
	              context_data_position++;
	            }
	            value = value >> 1;
	          }
	        }
	        context_enlargeIn--;
	        if (context_enlargeIn == 0) {
	          context_enlargeIn = Math.pow(2, context_numBits);
	          context_numBits++;
	        }
	      }

	      // Mark the end of the stream
	      value = 2;
	      for (i = 0; i < context_numBits; i++) {
	        context_data_val = context_data_val << 1 | value & 1;
	        if (context_data_position == bitsPerChar - 1) {
	          context_data_position = 0;
	          context_data.push(getCharFromInt(context_data_val));
	          context_data_val = 0;
	        } else {
	          context_data_position++;
	        }
	        value = value >> 1;
	      }

	      // Flush the last char
	      while (true) {
	        context_data_val = context_data_val << 1;
	        if (context_data_position == bitsPerChar - 1) {
	          context_data.push(getCharFromInt(context_data_val));
	          break;
	        } else context_data_position++;
	      }
	      return context_data.join('');
	    },

	    decompress: function decompress(compressed) {
	      if (compressed == null) return "";
	      if (compressed == "") return null;
	      return LZString._decompress(compressed.length, 32768, function (index) {
	        return compressed.charCodeAt(index);
	      });
	    },

	    _decompress: function _decompress(length, resetValue, getNextValue) {
	      var dictionary = [],
	          next,
	          enlargeIn = 4,
	          dictSize = 4,
	          numBits = 3,
	          entry = "",
	          result = [],
	          i,
	          w,
	          bits,
	          resb,
	          maxpower,
	          power,
	          c,
	          data = { val: getNextValue(0), position: resetValue, index: 1 };

	      for (i = 0; i < 3; i += 1) {
	        dictionary[i] = i;
	      }

	      bits = 0;
	      maxpower = Math.pow(2, 2);
	      power = 1;
	      while (power != maxpower) {
	        resb = data.val & data.position;
	        data.position >>= 1;
	        if (data.position == 0) {
	          data.position = resetValue;
	          data.val = getNextValue(data.index++);
	        }
	        bits |= (resb > 0 ? 1 : 0) * power;
	        power <<= 1;
	      }

	      switch (next = bits) {
	        case 0:
	          bits = 0;
	          maxpower = Math.pow(2, 8);
	          power = 1;
	          while (power != maxpower) {
	            resb = data.val & data.position;
	            data.position >>= 1;
	            if (data.position == 0) {
	              data.position = resetValue;
	              data.val = getNextValue(data.index++);
	            }
	            bits |= (resb > 0 ? 1 : 0) * power;
	            power <<= 1;
	          }
	          c = f(bits);
	          break;
	        case 1:
	          bits = 0;
	          maxpower = Math.pow(2, 16);
	          power = 1;
	          while (power != maxpower) {
	            resb = data.val & data.position;
	            data.position >>= 1;
	            if (data.position == 0) {
	              data.position = resetValue;
	              data.val = getNextValue(data.index++);
	            }
	            bits |= (resb > 0 ? 1 : 0) * power;
	            power <<= 1;
	          }
	          c = f(bits);
	          break;
	        case 2:
	          return "";
	      }
	      dictionary[3] = c;
	      w = c;
	      result.push(c);
	      while (true) {
	        if (data.index > length) {
	          return "";
	        }

	        bits = 0;
	        maxpower = Math.pow(2, numBits);
	        power = 1;
	        while (power != maxpower) {
	          resb = data.val & data.position;
	          data.position >>= 1;
	          if (data.position == 0) {
	            data.position = resetValue;
	            data.val = getNextValue(data.index++);
	          }
	          bits |= (resb > 0 ? 1 : 0) * power;
	          power <<= 1;
	        }

	        switch (c = bits) {
	          case 0:
	            bits = 0;
	            maxpower = Math.pow(2, 8);
	            power = 1;
	            while (power != maxpower) {
	              resb = data.val & data.position;
	              data.position >>= 1;
	              if (data.position == 0) {
	                data.position = resetValue;
	                data.val = getNextValue(data.index++);
	              }
	              bits |= (resb > 0 ? 1 : 0) * power;
	              power <<= 1;
	            }

	            dictionary[dictSize++] = f(bits);
	            c = dictSize - 1;
	            enlargeIn--;
	            break;
	          case 1:
	            bits = 0;
	            maxpower = Math.pow(2, 16);
	            power = 1;
	            while (power != maxpower) {
	              resb = data.val & data.position;
	              data.position >>= 1;
	              if (data.position == 0) {
	                data.position = resetValue;
	                data.val = getNextValue(data.index++);
	              }
	              bits |= (resb > 0 ? 1 : 0) * power;
	              power <<= 1;
	            }
	            dictionary[dictSize++] = f(bits);
	            c = dictSize - 1;
	            enlargeIn--;
	            break;
	          case 2:
	            return result.join('');
	        }

	        if (enlargeIn == 0) {
	          enlargeIn = Math.pow(2, numBits);
	          numBits++;
	        }

	        if (dictionary[c]) {
	          entry = dictionary[c];
	        } else {
	          if (c === dictSize) {
	            entry = w + w.charAt(0);
	          } else {
	            return null;
	          }
	        }
	        result.push(entry);

	        // Add w+entry[0] to the dictionary.
	        dictionary[dictSize++] = w + entry.charAt(0);
	        enlargeIn--;

	        w = entry;

	        if (enlargeIn == 0) {
	          enlargeIn = Math.pow(2, numBits);
	          numBits++;
	        }
	      }
	    }
	  };
	  return LZString;
	}();

	if (true) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return LZString;
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module != null) {
	  module.exports = LZString;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var require;var require;/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (f) {
	  if (( false ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
	    module.exports = f();
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (f), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    var g;if (typeof window !== "undefined") {
	      g = window;
	    } else if (typeof global !== "undefined") {
	      g = global;
	    } else if (typeof self !== "undefined") {
	      g = self;
	    } else {
	      g = this;
	    }g.crossfilter = f();
	  }
	})(function () {
	  var define, module, exports;return function e(t, n, r) {
	    function s(o, u) {
	      if (!n[o]) {
	        if (!t[o]) {
	          var a = typeof require == "function" && require;if (!u && a) return require(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	        }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	          var n = t[o][1][e];return s(n ? n : e);
	        }, l, l.exports, e, t, n, r);
	      }return n[o].exports;
	    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
	      s(r[o]);
	    }return s;
	  }({ 1: [function (require, module, exports) {
	      module.exports = require("./src/crossfilter").crossfilter;
	    }, { "./src/crossfilter": 8 }], 2: [function (require, module, exports) {
	      (function (global) {
	        /**
	         * lodash (Custom Build) <https://lodash.com/>
	         * Build: `lodash modularize exports="npm" -o ./`
	         * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	         * Released under MIT license <https://lodash.com/license>
	         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	         */

	        /** Used as references for various `Number` constants. */
	        var INFINITY = 1 / 0;

	        /** `Object#toString` result references. */
	        var symbolTag = '[object Symbol]';

	        /** Used to determine if values are of the language type `Object`. */
	        var objectTypes = {
	          'function': true,
	          'object': true
	        };

	        /** Detect free variable `exports`. */
	        var freeExports = objectTypes[typeof exports === "undefined" ? "undefined" : _typeof(exports)] && exports && !exports.nodeType ? exports : undefined;

	        /** Detect free variable `module`. */
	        var freeModule = objectTypes[typeof module === "undefined" ? "undefined" : _typeof(module)] && module && !module.nodeType ? module : undefined;

	        /** Detect free variable `global` from Node.js. */
	        var freeGlobal = checkGlobal(freeExports && freeModule && (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global);

	        /** Detect free variable `self`. */
	        var freeSelf = checkGlobal(objectTypes[typeof self === "undefined" ? "undefined" : _typeof(self)] && self);

	        /** Detect free variable `window`. */
	        var freeWindow = checkGlobal(objectTypes[typeof window === "undefined" ? "undefined" : _typeof(window)] && window);

	        /** Detect `this` as the global object. */
	        var thisGlobal = checkGlobal(objectTypes[_typeof(this)] && this);

	        /**
	         * Used as a reference to the global object.
	         *
	         * The `this` value is used if it's the global object to avoid Greasemonkey's
	         * restricted `window` object, otherwise the `window` object is used.
	         */
	        var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function('return this')();

	        /**
	         * Checks if `value` is a global object.
	         *
	         * @private
	         * @param {*} value The value to check.
	         * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	         */
	        function checkGlobal(value) {
	          return value && value.Object === Object ? value : null;
	        }

	        /** Used for built-in method references. */
	        var objectProto = Object.prototype;

	        /**
	         * Used to resolve the
	         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	         * of values.
	         */
	        var objectToString = objectProto.toString;

	        /** Built-in value references. */
	        var _Symbol = root.Symbol;

	        /** Used to convert symbols to primitives and strings. */
	        var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	            symbolToString = symbolProto ? symbolProto.toString : undefined;

	        /**
	         * The base implementation of `_.toString` which doesn't convert nullish
	         * values to empty strings.
	         *
	         * @private
	         * @param {*} value The value to process.
	         * @returns {string} Returns the string.
	         */
	        function baseToString(value) {
	          // Exit early for strings to avoid a performance hit in some environments.
	          if (typeof value == 'string') {
	            return value;
	          }
	          if (isSymbol(value)) {
	            return symbolToString ? symbolToString.call(value) : '';
	          }
	          var result = value + '';
	          return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	        }

	        /**
	         * Checks if `value` is object-like. A value is object-like if it's not `null`
	         * and has a `typeof` result of "object".
	         *
	         * @static
	         * @memberOf _
	         * @since 4.0.0
	         * @category Lang
	         * @param {*} value The value to check.
	         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	         * @example
	         *
	         * _.isObjectLike({});
	         * // => true
	         *
	         * _.isObjectLike([1, 2, 3]);
	         * // => true
	         *
	         * _.isObjectLike(_.noop);
	         * // => false
	         *
	         * _.isObjectLike(null);
	         * // => false
	         */
	        function isObjectLike(value) {
	          return !!value && (typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object';
	        }

	        /**
	         * Checks if `value` is classified as a `Symbol` primitive or object.
	         *
	         * @static
	         * @memberOf _
	         * @since 4.0.0
	         * @category Lang
	         * @param {*} value The value to check.
	         * @returns {boolean} Returns `true` if `value` is correctly classified,
	         *  else `false`.
	         * @example
	         *
	         * _.isSymbol(Symbol.iterator);
	         * // => true
	         *
	         * _.isSymbol('abc');
	         * // => false
	         */
	        function isSymbol(value) {
	          return (typeof value === "undefined" ? "undefined" : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	        }

	        module.exports = baseToString;
	      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	    }, {}], 3: [function (require, module, exports) {
	      (function (global) {
	        /**
	         * lodash (Custom Build) <https://lodash.com/>
	         * Build: `lodash modularize exports="npm" -o ./`
	         * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	         * Released under MIT license <https://lodash.com/license>
	         * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	         * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	         */
	        var baseToString = require('lodash._basetostring');

	        /** Used as the `TypeError` message for "Functions" methods. */
	        var FUNC_ERROR_TEXT = 'Expected a function';

	        /** Used to stand-in for `undefined` hash values. */
	        var HASH_UNDEFINED = '__lodash_hash_undefined__';

	        /** `Object#toString` result references. */
	        var funcTag = '[object Function]',
	            genTag = '[object GeneratorFunction]';

	        /** Used to match property names within property paths. */
	        var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	        /**
	         * Used to match `RegExp`
	         * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	         */
	        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	        /** Used to match backslashes in property paths. */
	        var reEscapeChar = /\\(\\)?/g;

	        /** Used to detect host constructors (Safari). */
	        var reIsHostCtor = /^\[object .+?Constructor\]$/;

	        /** Used to determine if values are of the language type `Object`. */
	        var objectTypes = {
	          'function': true,
	          'object': true
	        };

	        /** Detect free variable `exports`. */
	        var freeExports = objectTypes[typeof exports === "undefined" ? "undefined" : _typeof(exports)] && exports && !exports.nodeType ? exports : undefined;

	        /** Detect free variable `module`. */
	        var freeModule = objectTypes[typeof module === "undefined" ? "undefined" : _typeof(module)] && module && !module.nodeType ? module : undefined;

	        /** Detect free variable `global` from Node.js. */
	        var freeGlobal = checkGlobal(freeExports && freeModule && (typeof global === "undefined" ? "undefined" : _typeof(global)) == 'object' && global);

	        /** Detect free variable `self`. */
	        var freeSelf = checkGlobal(objectTypes[typeof self === "undefined" ? "undefined" : _typeof(self)] && self);

	        /** Detect free variable `window`. */
	        var freeWindow = checkGlobal(objectTypes[typeof window === "undefined" ? "undefined" : _typeof(window)] && window);

	        /** Detect `this` as the global object. */
	        var thisGlobal = checkGlobal(objectTypes[_typeof(this)] && this);

	        /**
	         * Used as a reference to the global object.
	         *
	         * The `this` value is used if it's the global object to avoid Greasemonkey's
	         * restricted `window` object, otherwise the `window` object is used.
	         */
	        var root = freeGlobal || freeWindow !== (thisGlobal && thisGlobal.window) && freeWindow || freeSelf || thisGlobal || Function('return this')();

	        /**
	         * Checks if `value` is a global object.
	         *
	         * @private
	         * @param {*} value The value to check.
	         * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	         */
	        function checkGlobal(value) {
	          return value && value.Object === Object ? value : null;
	        }

	        /**
	         * Checks if `value` is a host object in IE < 9.
	         *
	         * @private
	         * @param {*} value The value to check.
	         * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	         */
	        function isHostObject(value) {
	          // Many host objects are `Object` objects that can coerce to strings
	          // despite having improperly defined `toString` methods.
	          var result = false;
	          if (value != null && typeof value.toString != 'function') {
	            try {
	              result = !!(value + '');
	            } catch (e) {}
	          }
	          return result;
	        }

	        /** Used for built-in method references. */
	        var arrayProto = Array.prototype,
	            objectProto = Object.prototype;

	        /** Used to resolve the decompiled source of functions. */
	        var funcToString = Function.prototype.toString;

	        /** Used to check objects for own properties. */
	        var hasOwnProperty = objectProto.hasOwnProperty;

	        /**
	         * Used to resolve the
	         * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	         * of values.
	         */
	        var objectToString = objectProto.toString;

	        /** Used to detect if a method is native. */
	        var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	        /** Built-in value references. */
	        var splice = arrayProto.splice;

	        /* Built-in method references that are verified to be native. */
	        var Map = getNative(root, 'Map'),
	            nativeCreate = getNative(Object, 'create');

	        /**
	         * Creates a hash object.
	         *
	         * @private
	         * @constructor
	         * @param {Array} [entries] The key-value pairs to cache.
	         */
	        function Hash(entries) {
	          var index = -1,
	              length = entries ? entries.length : 0;

	          this.clear();
	          while (++index < length) {
	            var entry = entries[index];
	            this.set(entry[0], entry[1]);
	          }
	        }

	        /**
	         * Removes all key-value entries from the hash.
	         *
	         * @private
	         * @name clear
	         * @memberOf Hash
	         */
	        function hashClear() {
	          this.__data__ = nativeCreate ? nativeCreate(null) : {};
	        }

	        /**
	         * Removes `key` and its value from the hash.
	         *
	         * @private
	         * @name delete
	         * @memberOf Hash
	         * @param {Object} hash The hash to modify.
	         * @param {string} key The key of the value to remove.
	         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	         */
	        function hashDelete(key) {
	          return this.has(key) && delete this.__data__[key];
	        }

	        /**
	         * Gets the hash value for `key`.
	         *
	         * @private
	         * @name get
	         * @memberOf Hash
	         * @param {string} key The key of the value to get.
	         * @returns {*} Returns the entry value.
	         */
	        function hashGet(key) {
	          var data = this.__data__;
	          if (nativeCreate) {
	            var result = data[key];
	            return result === HASH_UNDEFINED ? undefined : result;
	          }
	          return hasOwnProperty.call(data, key) ? data[key] : undefined;
	        }

	        /**
	         * Checks if a hash value for `key` exists.
	         *
	         * @private
	         * @name has
	         * @memberOf Hash
	         * @param {string} key The key of the entry to check.
	         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	         */
	        function hashHas(key) {
	          var data = this.__data__;
	          return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	        }

	        /**
	         * Sets the hash `key` to `value`.
	         *
	         * @private
	         * @name set
	         * @memberOf Hash
	         * @param {string} key The key of the value to set.
	         * @param {*} value The value to set.
	         * @returns {Object} Returns the hash instance.
	         */
	        function hashSet(key, value) {
	          var data = this.__data__;
	          data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	          return this;
	        }

	        // Add methods to `Hash`.
	        Hash.prototype.clear = hashClear;
	        Hash.prototype['delete'] = hashDelete;
	        Hash.prototype.get = hashGet;
	        Hash.prototype.has = hashHas;
	        Hash.prototype.set = hashSet;

	        /**
	         * Creates an list cache object.
	         *
	         * @private
	         * @constructor
	         * @param {Array} [entries] The key-value pairs to cache.
	         */
	        function ListCache(entries) {
	          var index = -1,
	              length = entries ? entries.length : 0;

	          this.clear();
	          while (++index < length) {
	            var entry = entries[index];
	            this.set(entry[0], entry[1]);
	          }
	        }

	        /**
	         * Removes all key-value entries from the list cache.
	         *
	         * @private
	         * @name clear
	         * @memberOf ListCache
	         */
	        function listCacheClear() {
	          this.__data__ = [];
	        }

	        /**
	         * Removes `key` and its value from the list cache.
	         *
	         * @private
	         * @name delete
	         * @memberOf ListCache
	         * @param {string} key The key of the value to remove.
	         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	         */
	        function listCacheDelete(key) {
	          var data = this.__data__,
	              index = assocIndexOf(data, key);

	          if (index < 0) {
	            return false;
	          }
	          var lastIndex = data.length - 1;
	          if (index == lastIndex) {
	            data.pop();
	          } else {
	            splice.call(data, index, 1);
	          }
	          return true;
	        }

	        /**
	         * Gets the list cache value for `key`.
	         *
	         * @private
	         * @name get
	         * @memberOf ListCache
	         * @param {string} key The key of the value to get.
	         * @returns {*} Returns the entry value.
	         */
	        function listCacheGet(key) {
	          var data = this.__data__,
	              index = assocIndexOf(data, key);

	          return index < 0 ? undefined : data[index][1];
	        }

	        /**
	         * Checks if a list cache value for `key` exists.
	         *
	         * @private
	         * @name has
	         * @memberOf ListCache
	         * @param {string} key The key of the entry to check.
	         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	         */
	        function listCacheHas(key) {
	          return assocIndexOf(this.__data__, key) > -1;
	        }

	        /**
	         * Sets the list cache `key` to `value`.
	         *
	         * @private
	         * @name set
	         * @memberOf ListCache
	         * @param {string} key The key of the value to set.
	         * @param {*} value The value to set.
	         * @returns {Object} Returns the list cache instance.
	         */
	        function listCacheSet(key, value) {
	          var data = this.__data__,
	              index = assocIndexOf(data, key);

	          if (index < 0) {
	            data.push([key, value]);
	          } else {
	            data[index][1] = value;
	          }
	          return this;
	        }

	        // Add methods to `ListCache`.
	        ListCache.prototype.clear = listCacheClear;
	        ListCache.prototype['delete'] = listCacheDelete;
	        ListCache.prototype.get = listCacheGet;
	        ListCache.prototype.has = listCacheHas;
	        ListCache.prototype.set = listCacheSet;

	        /**
	         * Creates a map cache object to store key-value pairs.
	         *
	         * @private
	         * @constructor
	         * @param {Array} [entries] The key-value pairs to cache.
	         */
	        function MapCache(entries) {
	          var index = -1,
	              length = entries ? entries.length : 0;

	          this.clear();
	          while (++index < length) {
	            var entry = entries[index];
	            this.set(entry[0], entry[1]);
	          }
	        }

	        /**
	         * Removes all key-value entries from the map.
	         *
	         * @private
	         * @name clear
	         * @memberOf MapCache
	         */
	        function mapCacheClear() {
	          this.__data__ = {
	            'hash': new Hash(),
	            'map': new (Map || ListCache)(),
	            'string': new Hash()
	          };
	        }

	        /**
	         * Removes `key` and its value from the map.
	         *
	         * @private
	         * @name delete
	         * @memberOf MapCache
	         * @param {string} key The key of the value to remove.
	         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	         */
	        function mapCacheDelete(key) {
	          return getMapData(this, key)['delete'](key);
	        }

	        /**
	         * Gets the map value for `key`.
	         *
	         * @private
	         * @name get
	         * @memberOf MapCache
	         * @param {string} key The key of the value to get.
	         * @returns {*} Returns the entry value.
	         */
	        function mapCacheGet(key) {
	          return getMapData(this, key).get(key);
	        }

	        /**
	         * Checks if a map value for `key` exists.
	         *
	         * @private
	         * @name has
	         * @memberOf MapCache
	         * @param {string} key The key of the entry to check.
	         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	         */
	        function mapCacheHas(key) {
	          return getMapData(this, key).has(key);
	        }

	        /**
	         * Sets the map `key` to `value`.
	         *
	         * @private
	         * @name set
	         * @memberOf MapCache
	         * @param {string} key The key of the value to set.
	         * @param {*} value The value to set.
	         * @returns {Object} Returns the map cache instance.
	         */
	        function mapCacheSet(key, value) {
	          getMapData(this, key).set(key, value);
	          return this;
	        }

	        // Add methods to `MapCache`.
	        MapCache.prototype.clear = mapCacheClear;
	        MapCache.prototype['delete'] = mapCacheDelete;
	        MapCache.prototype.get = mapCacheGet;
	        MapCache.prototype.has = mapCacheHas;
	        MapCache.prototype.set = mapCacheSet;

	        /**
	         * Gets the index at which the `key` is found in `array` of key-value pairs.
	         *
	         * @private
	         * @param {Array} array The array to search.
	         * @param {*} key The key to search for.
	         * @returns {number} Returns the index of the matched value, else `-1`.
	         */
	        function assocIndexOf(array, key) {
	          var length = array.length;
	          while (length--) {
	            if (eq(array[length][0], key)) {
	              return length;
	            }
	          }
	          return -1;
	        }

	        /**
	         * Gets the data for `map`.
	         *
	         * @private
	         * @param {Object} map The map to query.
	         * @param {string} key The reference key.
	         * @returns {*} Returns the map data.
	         */
	        function getMapData(map, key) {
	          var data = map.__data__;
	          return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	        }

	        /**
	         * Gets the native function at `key` of `object`.
	         *
	         * @private
	         * @param {Object} object The object to query.
	         * @param {string} key The key of the method to get.
	         * @returns {*} Returns the function if it's native, else `undefined`.
	         */
	        function getNative(object, key) {
	          var value = object[key];
	          return isNative(value) ? value : undefined;
	        }

	        /**
	         * Checks if `value` is suitable for use as unique object key.
	         *
	         * @private
	         * @param {*} value The value to check.
	         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	         */
	        function isKeyable(value) {
	          var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	          return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	        }

	        /**
	         * Converts `string` to a property path array.
	         *
	         * @private
	         * @param {string} string The string to convert.
	         * @returns {Array} Returns the property path array.
	         */
	        var stringToPath = memoize(function (string) {
	          var result = [];
	          toString(string).replace(rePropName, function (match, number, quote, string) {
	            result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	          });
	          return result;
	        });

	        /**
	         * Converts `func` to its source code.
	         *
	         * @private
	         * @param {Function} func The function to process.
	         * @returns {string} Returns the source code.
	         */
	        function toSource(func) {
	          if (func != null) {
	            try {
	              return funcToString.call(func);
	            } catch (e) {}
	            try {
	              return func + '';
	            } catch (e) {}
	          }
	          return '';
	        }

	        /**
	         * Creates a function that memoizes the result of `func`. If `resolver` is
	         * provided, it determines the cache key for storing the result based on the
	         * arguments provided to the memoized function. By default, the first argument
	         * provided to the memoized function is used as the map cache key. The `func`
	         * is invoked with the `this` binding of the memoized function.
	         *
	         * **Note:** The cache is exposed as the `cache` property on the memoized
	         * function. Its creation may be customized by replacing the `_.memoize.Cache`
	         * constructor with one whose instances implement the
	         * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	         * method interface of `delete`, `get`, `has`, and `set`.
	         *
	         * @static
	         * @memberOf _
	         * @since 0.1.0
	         * @category Function
	         * @param {Function} func The function to have its output memoized.
	         * @param {Function} [resolver] The function to resolve the cache key.
	         * @returns {Function} Returns the new memoized function.
	         * @example
	         *
	         * var object = { 'a': 1, 'b': 2 };
	         * var other = { 'c': 3, 'd': 4 };
	         *
	         * var values = _.memoize(_.values);
	         * values(object);
	         * // => [1, 2]
	         *
	         * values(other);
	         * // => [3, 4]
	         *
	         * object.a = 2;
	         * values(object);
	         * // => [1, 2]
	         *
	         * // Modify the result cache.
	         * values.cache.set(object, ['a', 'b']);
	         * values(object);
	         * // => ['a', 'b']
	         *
	         * // Replace `_.memoize.Cache`.
	         * _.memoize.Cache = WeakMap;
	         */
	        function memoize(func, resolver) {
	          if (typeof func != 'function' || resolver && typeof resolver != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          var memoized = function memoized() {
	            var args = arguments,
	                key = resolver ? resolver.apply(this, args) : args[0],
	                cache = memoized.cache;

	            if (cache.has(key)) {
	              return cache.get(key);
	            }
	            var result = func.apply(this, args);
	            memoized.cache = cache.set(key, result);
	            return result;
	          };
	          memoized.cache = new (memoize.Cache || MapCache)();
	          return memoized;
	        }

	        // Assign cache to `_.memoize`.
	        memoize.Cache = MapCache;

	        /**
	         * Performs a
	         * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	         * comparison between two values to determine if they are equivalent.
	         *
	         * @static
	         * @memberOf _
	         * @since 4.0.0
	         * @category Lang
	         * @param {*} value The value to compare.
	         * @param {*} other The other value to compare.
	         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	         * @example
	         *
	         * var object = { 'user': 'fred' };
	         * var other = { 'user': 'fred' };
	         *
	         * _.eq(object, object);
	         * // => true
	         *
	         * _.eq(object, other);
	         * // => false
	         *
	         * _.eq('a', 'a');
	         * // => true
	         *
	         * _.eq('a', Object('a'));
	         * // => false
	         *
	         * _.eq(NaN, NaN);
	         * // => true
	         */
	        function eq(value, other) {
	          return value === other || value !== value && other !== other;
	        }

	        /**
	         * Checks if `value` is classified as a `Function` object.
	         *
	         * @static
	         * @memberOf _
	         * @since 0.1.0
	         * @category Lang
	         * @param {*} value The value to check.
	         * @returns {boolean} Returns `true` if `value` is correctly classified,
	         *  else `false`.
	         * @example
	         *
	         * _.isFunction(_);
	         * // => true
	         *
	         * _.isFunction(/abc/);
	         * // => false
	         */
	        function isFunction(value) {
	          // The use of `Object#toString` avoids issues with the `typeof` operator
	          // in Safari 8 which returns 'object' for typed array and weak map constructors,
	          // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	          var tag = isObject(value) ? objectToString.call(value) : '';
	          return tag == funcTag || tag == genTag;
	        }

	        /**
	         * Checks if `value` is the
	         * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	         *
	         * @static
	         * @memberOf _
	         * @since 0.1.0
	         * @category Lang
	         * @param {*} value The value to check.
	         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	         * @example
	         *
	         * _.isObject({});
	         * // => true
	         *
	         * _.isObject([1, 2, 3]);
	         * // => true
	         *
	         * _.isObject(_.noop);
	         * // => true
	         *
	         * _.isObject(null);
	         * // => false
	         */
	        function isObject(value) {
	          var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	          return !!value && (type == 'object' || type == 'function');
	        }

	        /**
	         * Checks if `value` is a native function.
	         *
	         * @static
	         * @memberOf _
	         * @since 3.0.0
	         * @category Lang
	         * @param {*} value The value to check.
	         * @returns {boolean} Returns `true` if `value` is a native function,
	         *  else `false`.
	         * @example
	         *
	         * _.isNative(Array.prototype.push);
	         * // => true
	         *
	         * _.isNative(_);
	         * // => false
	         */
	        function isNative(value) {
	          if (!isObject(value)) {
	            return false;
	          }
	          var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
	          return pattern.test(toSource(value));
	        }

	        /**
	         * Converts `value` to a string. An empty string is returned for `null`
	         * and `undefined` values. The sign of `-0` is preserved.
	         *
	         * @static
	         * @memberOf _
	         * @since 4.0.0
	         * @category Lang
	         * @param {*} value The value to process.
	         * @returns {string} Returns the string.
	         * @example
	         *
	         * _.toString(null);
	         * // => ''
	         *
	         * _.toString(-0);
	         * // => '-0'
	         *
	         * _.toString([1, 2, 3]);
	         * // => '1,2,3'
	         */
	        function toString(value) {
	          return value == null ? '' : baseToString(value);
	        }

	        module.exports = stringToPath;
	      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
	    }, { "lodash._basetostring": 2 }], 4: [function (require, module, exports) {
	      /**
	       * lodash (Custom Build) <https://lodash.com/>
	       * Build: `lodash modularize exports="npm" -o ./`
	       * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	       * Released under MIT license <https://lodash.com/license>
	       * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	       * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	       */
	      var stringToPath = require('lodash._stringtopath');

	      /** Used as references for various `Number` constants. */
	      var INFINITY = 1 / 0;

	      /** `Object#toString` result references. */
	      var funcTag = '[object Function]',
	          genTag = '[object GeneratorFunction]',
	          symbolTag = '[object Symbol]';

	      /** Used to match property names within property paths. */
	      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	          reIsPlainProp = /^\w*$/;

	      /** Used for built-in method references. */
	      var objectProto = Object.prototype;

	      /**
	       * Used to resolve the
	       * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	       * of values.
	       */
	      var objectToString = objectProto.toString;

	      /**
	       * Casts `value` to a path array if it's not one.
	       *
	       * @private
	       * @param {*} value The value to inspect.
	       * @returns {Array} Returns the cast property path array.
	       */
	      function castPath(value) {
	        return isArray(value) ? value : stringToPath(value);
	      }

	      /**
	       * Checks if `value` is a property name and not a property path.
	       *
	       * @private
	       * @param {*} value The value to check.
	       * @param {Object} [object] The object to query keys on.
	       * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	       */
	      function isKey(value, object) {
	        if (isArray(value)) {
	          return false;
	        }
	        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	        if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	          return true;
	        }
	        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	      }

	      /**
	       * Converts `value` to a string key if it's not a string or symbol.
	       *
	       * @private
	       * @param {*} value The value to inspect.
	       * @returns {string|symbol} Returns the key.
	       */
	      function toKey(value) {
	        if (typeof value == 'string' || isSymbol(value)) {
	          return value;
	        }
	        var result = value + '';
	        return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	      }

	      /**
	       * Checks if `value` is classified as an `Array` object.
	       *
	       * @static
	       * @memberOf _
	       * @since 0.1.0
	       * @type {Function}
	       * @category Lang
	       * @param {*} value The value to check.
	       * @returns {boolean} Returns `true` if `value` is correctly classified,
	       *  else `false`.
	       * @example
	       *
	       * _.isArray([1, 2, 3]);
	       * // => true
	       *
	       * _.isArray(document.body.children);
	       * // => false
	       *
	       * _.isArray('abc');
	       * // => false
	       *
	       * _.isArray(_.noop);
	       * // => false
	       */
	      var isArray = Array.isArray;

	      /**
	       * Checks if `value` is classified as a `Function` object.
	       *
	       * @static
	       * @memberOf _
	       * @since 0.1.0
	       * @category Lang
	       * @param {*} value The value to check.
	       * @returns {boolean} Returns `true` if `value` is correctly classified,
	       *  else `false`.
	       * @example
	       *
	       * _.isFunction(_);
	       * // => true
	       *
	       * _.isFunction(/abc/);
	       * // => false
	       */
	      function isFunction(value) {
	        // The use of `Object#toString` avoids issues with the `typeof` operator
	        // in Safari 8 which returns 'object' for typed array and weak map constructors,
	        // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	        var tag = isObject(value) ? objectToString.call(value) : '';
	        return tag == funcTag || tag == genTag;
	      }

	      /**
	       * Checks if `value` is the
	       * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	       * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	       *
	       * @static
	       * @memberOf _
	       * @since 0.1.0
	       * @category Lang
	       * @param {*} value The value to check.
	       * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	       * @example
	       *
	       * _.isObject({});
	       * // => true
	       *
	       * _.isObject([1, 2, 3]);
	       * // => true
	       *
	       * _.isObject(_.noop);
	       * // => true
	       *
	       * _.isObject(null);
	       * // => false
	       */
	      function isObject(value) {
	        var type = typeof value === "undefined" ? "undefined" : _typeof(value);
	        return !!value && (type == 'object' || type == 'function');
	      }

	      /**
	       * Checks if `value` is object-like. A value is object-like if it's not `null`
	       * and has a `typeof` result of "object".
	       *
	       * @static
	       * @memberOf _
	       * @since 4.0.0
	       * @category Lang
	       * @param {*} value The value to check.
	       * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	       * @example
	       *
	       * _.isObjectLike({});
	       * // => true
	       *
	       * _.isObjectLike([1, 2, 3]);
	       * // => true
	       *
	       * _.isObjectLike(_.noop);
	       * // => false
	       *
	       * _.isObjectLike(null);
	       * // => false
	       */
	      function isObjectLike(value) {
	        return !!value && (typeof value === "undefined" ? "undefined" : _typeof(value)) == 'object';
	      }

	      /**
	       * Checks if `value` is classified as a `Symbol` primitive or object.
	       *
	       * @static
	       * @memberOf _
	       * @since 4.0.0
	       * @category Lang
	       * @param {*} value The value to check.
	       * @returns {boolean} Returns `true` if `value` is correctly classified,
	       *  else `false`.
	       * @example
	       *
	       * _.isSymbol(Symbol.iterator);
	       * // => true
	       *
	       * _.isSymbol('abc');
	       * // => false
	       */
	      function isSymbol(value) {
	        return (typeof value === "undefined" ? "undefined" : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	      }

	      /**
	       * This method is like `_.get` except that if the resolved value is a
	       * function it's invoked with the `this` binding of its parent object and
	       * its result is returned.
	       *
	       * @static
	       * @since 0.1.0
	       * @memberOf _
	       * @category Object
	       * @param {Object} object The object to query.
	       * @param {Array|string} path The path of the property to resolve.
	       * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	       * @returns {*} Returns the resolved value.
	       * @example
	       *
	       * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	       *
	       * _.result(object, 'a[0].b.c1');
	       * // => 3
	       *
	       * _.result(object, 'a[0].b.c2');
	       * // => 4
	       *
	       * _.result(object, 'a[0].b.c3', 'default');
	       * // => 'default'
	       *
	       * _.result(object, 'a[0].b.c3', _.constant('default'));
	       * // => 'default'
	       */
	      function result(object, path, defaultValue) {
	        path = isKey(path, object) ? [path] : castPath(path);

	        var index = -1,
	            length = path.length;

	        // Ensure the loop is entered when path is empty.
	        if (!length) {
	          object = undefined;
	          length = 1;
	        }
	        while (++index < length) {
	          var value = object == null ? undefined : object[toKey(path[index])];
	          if (value === undefined) {
	            index = length;
	            value = defaultValue;
	          }
	          object = isFunction(value) ? value.call(object) : value;
	        }
	        return object;
	      }

	      module.exports = result;
	    }, { "lodash._stringtopath": 3 }], 5: [function (require, module, exports) {
	      module.exports = { "version": "1.4.0-alpha.05" };
	    }, {}], 6: [function (require, module, exports) {
	      if (typeof Uint8Array !== "undefined") {
	        crossfilter_array8 = function crossfilter_array8(n) {
	          return new Uint8Array(n);
	        };
	        crossfilter_array16 = function crossfilter_array16(n) {
	          return new Uint16Array(n);
	        };
	        crossfilter_array32 = function crossfilter_array32(n) {
	          return new Uint32Array(n);
	        };

	        crossfilter_arrayLengthen = function crossfilter_arrayLengthen(array, length) {
	          if (array.length >= length) return array;
	          var copy = new array.constructor(length);
	          copy.set(array);
	          return copy;
	        };

	        crossfilter_arrayWiden = function crossfilter_arrayWiden(array, width) {
	          var copy;
	          switch (width) {
	            case 16:
	              copy = crossfilter_array16(array.length);break;
	            case 32:
	              copy = crossfilter_array32(array.length);break;
	            default:
	              throw new Error("invalid array width!");
	          }
	          copy.set(array);
	          return copy;
	        };
	      }

	      function crossfilter_arrayUntyped(n) {
	        var array = new Array(n),
	            i = -1;
	        while (++i < n) {
	          array[i] = 0;
	        }return array;
	      }

	      function crossfilter_arrayLengthenUntyped(array, length) {
	        var n = array.length;
	        while (n < length) {
	          array[n++] = 0;
	        }return array;
	      }

	      function crossfilter_arrayWidenUntyped(array, width) {
	        if (width > 32) throw new Error("invalid array width!");
	        return array;
	      }

	      // An arbitrarily-wide array of bitmasks
	      function crossfilter_bitarray(n) {
	        this.length = n;
	        this.subarrays = 1;
	        this.width = 8;
	        this.masks = {
	          0: 0
	        };

	        this[0] = crossfilter_array8(n);
	      }

	      crossfilter_bitarray.prototype.lengthen = function (n) {
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          this[i] = crossfilter_arrayLengthen(this[i], n);
	        }
	        this.length = n;
	      };

	      // Reserve a new bit index in the array, returns {offset, one}
	      crossfilter_bitarray.prototype.add = function () {
	        var m, w, one, i, len;

	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          m = this.masks[i];
	          w = this.width - 32 * i;
	          one = ~m & -~m;

	          if (w >= 32 && !one) {
	            continue;
	          }

	          if (w < 32 && one & 1 << w) {
	            // widen this subarray
	            this[i] = crossfilter_arrayWiden(this[i], w <<= 1);
	            this.width = 32 * i + w;
	          }

	          this.masks[i] |= one;

	          return {
	            offset: i,
	            one: one
	          };
	        }

	        // add a new subarray
	        this[this.subarrays] = crossfilter_array8(this.length);
	        this.masks[this.subarrays] = 1;
	        this.width += 8;
	        return {
	          offset: this.subarrays++,
	          one: 1
	        };
	      };

	      // Copy record from index src to index dest
	      crossfilter_bitarray.prototype.copy = function (dest, src) {
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          this[i][dest] = this[i][src];
	        }
	      };

	      // Truncate the array to the given length
	      crossfilter_bitarray.prototype.truncate = function (n) {
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          for (var j = this.length - 1; j >= n; j--) {
	            this[i][j] = 0;
	          }
	          this[i].length = n;
	        }
	        this.length = n;
	      };

	      // Checks that all bits for the given index are 0
	      crossfilter_bitarray.prototype.zero = function (n) {
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          if (this[i][n]) {
	            return false;
	          }
	        }
	        return true;
	      };

	      // Checks that all bits for the given index are 0 except for possibly one
	      crossfilter_bitarray.prototype.zeroExcept = function (n, offset, zero) {
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          if (i === offset ? this[i][n] & zero : this[i][n]) {
	            return false;
	          }
	        }
	        return true;
	      };

	      // Checks that all bits for the given indez are 0 except for the specified mask.
	      // The mask should be an array of the same size as the filter subarrays width.
	      crossfilter_bitarray.prototype.zeroExceptMask = function (n, mask) {
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          if (this[i][n] & mask[i]) {
	            return false;
	          }
	        }
	        return true;
	      };

	      // Checks that only the specified bit is set for the given index
	      crossfilter_bitarray.prototype.only = function (n, offset, one) {
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          if (this[i][n] != (i === offset ? one : 0)) {
	            return false;
	          }
	        }
	        return true;
	      };

	      // Checks that only the specified bit is set for the given index except for possibly one other
	      crossfilter_bitarray.prototype.onlyExcept = function (n, offset, zero, onlyOffset, onlyOne) {
	        var mask;
	        var i, len;
	        for (i = 0, len = this.subarrays; i < len; ++i) {
	          mask = this[i][n];
	          if (i === offset) mask &= zero;
	          if (mask != (i === onlyOffset ? onlyOne : 0)) {
	            return false;
	          }
	        }
	        return true;
	      };

	      module.exports = {
	        array8: crossfilter_arrayUntyped,
	        array16: crossfilter_arrayUntyped,
	        array32: crossfilter_arrayUntyped,
	        arrayLengthen: crossfilter_arrayLengthenUntyped,
	        arrayWiden: crossfilter_arrayWidenUntyped,
	        bitarray: crossfilter_bitarray
	      };
	    }, {}], 7: [function (require, module, exports) {
	      var crossfilter_identity = require('./identity');

	      function bisect_by(f) {

	        // Locate the insertion point for x in a to maintain sorted order. The
	        // arguments lo and hi may be used to specify a subset of the array which
	        // should be considered; by default the entire array is used. If x is already
	        // present in a, the insertion point will be before (to the left of) any
	        // existing entries. The return value is suitable for use as the first
	        // argument to `array.splice` assuming that a is already sorted.
	        //
	        // The returned insertion point i partitions the array a into two halves so
	        // that all v < x for v in a[lo:i] for the left side and all v >= x for v in
	        // a[i:hi] for the right side.
	        function bisectLeft(a, x, lo, hi) {
	          while (lo < hi) {
	            var mid = lo + hi >>> 1;
	            if (f(a[mid]) < x) lo = mid + 1;else hi = mid;
	          }
	          return lo;
	        }

	        // Similar to bisectLeft, but returns an insertion point which comes after (to
	        // the right of) any existing entries of x in a.
	        //
	        // The returned insertion point i partitions the array into two halves so that
	        // all v <= x for v in a[lo:i] for the left side and all v > x for v in
	        // a[i:hi] for the right side.
	        function bisectRight(a, x, lo, hi) {
	          while (lo < hi) {
	            var mid = lo + hi >>> 1;
	            if (x < f(a[mid])) hi = mid;else lo = mid + 1;
	          }
	          return lo;
	        }

	        bisectRight.right = bisectRight;
	        bisectRight.left = bisectLeft;
	        return bisectRight;
	      }

	      module.exports = bisect_by(crossfilter_identity);
	      module.exports.by = bisect_by; // assign the raw function to the export as well
	    }, { "./identity": 12 }], 8: [function (require, module, exports) {
	      var xfilterArray = require('./array');
	      var xfilterFilter = require('./filter');
	      var crossfilter_identity = require('./identity');
	      var crossfilter_null = require('./null');
	      var crossfilter_zero = require('./zero');
	      var xfilterHeapselect = require('./heapselect');
	      var xfilterHeap = require('./heap');
	      var bisect = require('./bisect');
	      var insertionsort = require('./insertionsort');
	      var permute = require('./permute');
	      var quicksort = require('./quicksort');
	      var xfilterReduce = require('./reduce');
	      var packageJson = require('./../package.json'); // require own package.json for the version field
	      var result = require('lodash.result');
	      // expose API exports
	      exports.crossfilter = crossfilter;
	      exports.crossfilter.heap = xfilterHeap;
	      exports.crossfilter.heapselect = xfilterHeapselect;
	      exports.crossfilter.bisect = bisect;
	      exports.crossfilter.insertionsort = insertionsort;
	      exports.crossfilter.permute = permute;
	      exports.crossfilter.quicksort = quicksort;
	      exports.crossfilter.version = packageJson.version; // please note use of "package-json-versionify" transform

	      function crossfilter() {
	        var crossfilter = {
	          add: add,
	          remove: removeData,
	          dimension: dimension,
	          groupAll: groupAll,
	          size: size,
	          all: all,
	          onChange: onChange,
	          isElementFiltered: isElementFiltered
	        };

	        var data = [],
	            // the records
	        n = 0,
	            // the number of records; data.length
	        filters,
	            // 1 is filtered out
	        filterListeners = [],
	            // when the filters change
	        dataListeners = [],
	            // when data is added
	        removeDataListeners = [],
	            // when data is removed
	        callbacks = [];

	        filters = new xfilterArray.bitarray(0);

	        // Adds the specified new records to this crossfilter.
	        function add(newData) {
	          var n0 = n,
	              n1 = newData.length;

	          // If there's actually new data to add…
	          // Merge the new data into the existing data.
	          // Lengthen the filter bitset to handle the new records.
	          // Notify listeners (dimensions and groups) that new data is available.
	          if (n1) {
	            data = data.concat(newData);
	            filters.lengthen(n += n1);
	            dataListeners.forEach(function (l) {
	              l(newData, n0, n1);
	            });
	            triggerOnChange('dataAdded');
	          }

	          return crossfilter;
	        }

	        // Removes all records that match the current filters.
	        function removeData() {
	          var newIndex = crossfilter_index(n, n),
	              removed = [];
	          for (var i = 0, j = 0; i < n; ++i) {
	            if (!filters.zero(i)) newIndex[i] = j++;else removed.push(i);
	          }

	          // Remove all matching records from groups.
	          filterListeners.forEach(function (l) {
	            l(-1, -1, [], removed, true);
	          });

	          // Update indexes.
	          removeDataListeners.forEach(function (l) {
	            l(newIndex);
	          });

	          // Remove old filters and data by overwriting.
	          for (var i = 0, j = 0; i < n; ++i) {
	            if (!filters.zero(i)) {
	              if (i !== j) filters.copy(j, i), data[j] = data[i];
	              ++j;
	            }
	          }

	          data.length = n = j;
	          filters.truncate(j);
	          triggerOnChange('dataRemoved');
	        }

	        // Return true if the data element at index i is filtered IN.
	        // Optionally, ignore the filters of any dimensions in the ignore_dimensions list.
	        function isElementFiltered(i, ignore_dimensions) {
	          var n,
	              d,
	              id,
	              len,
	              mask = Array(filters.subarrays);
	          for (n = 0; n < filters.subarrays; n++) {
	            mask[n] = ~0;
	          }
	          if (ignore_dimensions) {
	            for (d = 0, len = ignore_dimensions.length; d < len; d++) {
	              // The top bits of the ID are the subarray offset and the lower bits are the bit
	              // offset of the "one" mask.
	              id = ignore_dimensions[d].id();
	              mask[id >> 7] &= ~(0x1 << (id & 0x3f));
	            }
	          }
	          return filters.zeroExceptMask(i, mask);
	        }

	        // Adds a new dimension with the specified value accessor function.
	        function dimension(value, iterable) {

	          if (typeof value === 'string') {
	            var accessorPath = value;
	            value = function value(d) {
	              return result(d, accessorPath);
	            };
	          }

	          var dimension = {
	            filter: filter,
	            filterExact: filterExact,
	            filterRange: filterRange,
	            filterFunction: filterFunction,
	            filterAll: filterAll,
	            top: top,
	            bottom: bottom,
	            group: group,
	            groupAll: groupAll,
	            dispose: dispose,
	            remove: dispose, // for backwards-compatibility
	            accessor: value,
	            id: function id() {
	              return _id;
	            }
	          };

	          var one,
	              // lowest unset bit as mask, e.g., 00001000
	          zero,
	              // inverted one, e.g., 11110111
	          offset,
	              // offset into the filters arrays
	          _id,
	              // unique ID for this dimension (reused when dimensions are disposed)
	          values,
	              // sorted, cached array
	          index,
	              // value rank ↦ object id
	          oldValues,
	              // temporary array storing previously-added values
	          oldIndex,
	              // temporary array storing previously-added index
	          newValues,
	              // temporary array storing newly-added values
	          newIndex,
	              // temporary array storing newly-added index
	          iterablesIndexCount,
	              newIterablesIndexCount,
	              iterablesIndexFilterStatus,
	              newIterablesIndexFilterStatus,
	              oldIterablesIndexFilterStatus,
	              iterablesEmptyRows,
	              sort = quicksort.by(function (i) {
	            return newValues[i];
	          }),
	              refilter = xfilterFilter.filterAll,
	              // for recomputing filter
	          refilterFunction,
	              // the custom filter function in use
	          indexListeners = [],
	              // when data is added
	          dimensionGroups = [],
	              lo0 = 0,
	              hi0 = 0,
	              t = 0;

	          // Updating a dimension is a two-stage process. First, we must update the
	          // associated filters for the newly-added records. Once all dimensions have
	          // updated their filters, the groups are notified to update.
	          dataListeners.unshift(preAdd);
	          dataListeners.push(postAdd);

	          removeDataListeners.push(removeData);

	          // Add a new dimension in the filter bitmap and store the offset and bitmask.
	          var tmp = filters.add();
	          offset = tmp.offset;
	          one = tmp.one;
	          zero = ~one;

	          // Create a unique ID for the dimension
	          // IDs will be re-used if dimensions are disposed.
	          // For internal use the ID is the subarray offset shifted left 7 bits or'd with the
	          // bit offset of the set bit in the dimension's "one" mask.
	          _id = offset << 7 | Math.log(one) / Math.log(2);

	          preAdd(data, 0, n);
	          postAdd(data, 0, n);

	          // Incorporates the specified new records into this dimension.
	          // This function is responsible for updating filters, values, and index.
	          function preAdd(newData, n0, n1) {

	            if (iterable) {
	              // Count all the values
	              t = 0;
	              j = 0;
	              k = [];

	              for (i = 0; i < newData.length; i++) {
	                for (j = 0, k = value(newData[i]); j < k.length; j++) {
	                  t++;
	                }
	              }

	              newValues = [];
	              newIterablesIndexCount = crossfilter_range(newData.length);
	              newIterablesIndexFilterStatus = crossfilter_index(t, 1);
	              iterablesEmptyRows = [];
	              var unsortedIndex = crossfilter_range(t);

	              for (l = 0, i = 0; i < newData.length; i++) {
	                k = value(newData[i]);
	                //
	                if (!k.length) {
	                  newIterablesIndexCount[i] = 0;
	                  iterablesEmptyRows.push(i);
	                  continue;
	                }
	                newIterablesIndexCount[i] = k.length;
	                for (j = 0; j < k.length; j++) {
	                  newValues.push(k[j]);
	                  unsortedIndex[l] = i;
	                  l++;
	                }
	              }

	              // Create the Sort map used to sort both the values and the valueToData indices
	              var sortMap = sort(crossfilter_range(t), 0, t);

	              // Use the sortMap to sort the newValues
	              newValues = permute(newValues, sortMap);

	              // Use the sortMap to sort the unsortedIndex map
	              // newIndex should be a map of sortedValue -> crossfilterData
	              newIndex = permute(unsortedIndex, sortMap);
	            } else {
	              // Permute new values into natural order using a standard sorted index.
	              newValues = newData.map(value);
	              newIndex = sort(crossfilter_range(n1), 0, n1);
	              newValues = permute(newValues, newIndex);
	            }

	            if (iterable) {
	              n1 = t;
	            }

	            // Bisect newValues to determine which new records are selected.
	            var bounds = refilter(newValues),
	                lo1 = bounds[0],
	                hi1 = bounds[1];
	            if (refilterFunction) {
	              for (i = 0; i < n1; ++i) {
	                if (!refilterFunction(newValues[i], i)) {
	                  filters[offset][newIndex[i] + n0] |= one;
	                  if (iterable) newIterablesIndexFilterStatus[i] = 1;
	                }
	              }
	            } else {
	              for (i = 0; i < lo1; ++i) {
	                filters[offset][newIndex[i] + n0] |= one;
	                if (iterable) newIterablesIndexFilterStatus[i] = 1;
	              }
	              for (i = hi1; i < n1; ++i) {
	                filters[offset][newIndex[i] + n0] |= one;
	                if (iterable) newIterablesIndexFilterStatus[i] = 1;
	              }
	            }

	            // If this dimension previously had no data, then we don't need to do the
	            // more expensive merge operation; use the new values and index as-is.
	            if (!n0) {
	              values = newValues;
	              index = newIndex;
	              iterablesIndexCount = newIterablesIndexCount;
	              iterablesIndexFilterStatus = newIterablesIndexFilterStatus;
	              lo0 = lo1;
	              hi0 = hi1;
	              return;
	            }

	            var oldValues = values,
	                oldIndex = index,
	                oldIterablesIndexFilterStatus = iterablesIndexFilterStatus;
	            i0 = 0, i1 = 0;

	            if (iterable) {
	              old_n0 = n0;
	              n0 = oldValues.length;
	              n1 = t;
	            }

	            // Otherwise, create new arrays into which to merge new and old.
	            values = iterable ? new Array(n0 + n1) : new Array(n);
	            index = iterable ? new Array(n0 + n1) : crossfilter_index(n, n);
	            if (iterable) iterablesIndexFilterStatus = crossfilter_index(n0 + n1, 1);

	            // Concatenate the newIterablesIndexCount onto the old one.
	            if (iterable) {
	              var oldiiclength = iterablesIndexCount.length;
	              iterablesIndexCount = xfilterArray.arrayLengthen(iterablesIndexCount, n);
	              for (var j = 0; j + oldiiclength < n; j++) {
	                iterablesIndexCount[j + oldiiclength] = newIterablesIndexCount[j];
	              }
	            }

	            // Merge the old and new sorted values, and old and new index.
	            for (i = 0; i0 < n0 && i1 < n1; ++i) {
	              if (oldValues[i0] < newValues[i1]) {
	                values[i] = oldValues[i0];
	                if (iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i0];
	                index[i] = oldIndex[i0++];
	              } else {
	                values[i] = newValues[i1];
	                if (iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i1];
	                index[i] = newIndex[i1++] + (iterable ? old_n0 : n0);
	              }
	            }

	            // Add any remaining old values.
	            for (; i0 < n0; ++i0, ++i) {
	              values[i] = oldValues[i0];
	              if (iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i0];
	              index[i] = oldIndex[i0];
	            }

	            // Add any remaining new values.
	            for (; i1 < n1; ++i1, ++i) {
	              values[i] = newValues[i1];
	              if (iterable) iterablesIndexFilterStatus[i] = oldIterablesIndexFilterStatus[i1];
	              index[i] = newIndex[i1] + (iterable ? old_n0 : n0);
	            }

	            // Bisect again to recompute lo0 and hi0.
	            bounds = refilter(values), lo0 = bounds[0], hi0 = bounds[1];
	          }

	          // When all filters have updated, notify index listeners of the new values.
	          function postAdd(newData, n0, n1) {
	            indexListeners.forEach(function (l) {
	              l(newValues, newIndex, n0, n1);
	            });
	            newValues = newIndex = null;
	          }

	          function removeData(reIndex) {
	            for (var i = 0, j = 0, k; i < n; ++i) {
	              if (!filters.zero(k = index[i])) {
	                if (i !== j) values[j] = values[i];
	                index[j] = reIndex[k];
	                ++j;
	              }
	            }
	            values.length = j;
	            while (j < n) {
	              index[j++] = 0;
	            } // Bisect again to recompute lo0 and hi0.
	            var bounds = refilter(values);
	            lo0 = bounds[0], hi0 = bounds[1];
	          }

	          // Updates the selected values based on the specified bounds [lo, hi].
	          // This implementation is used by all the public filter methods.
	          function filterIndexBounds(bounds) {

	            var lo1 = bounds[0],
	                hi1 = bounds[1];

	            if (refilterFunction) {
	              refilterFunction = null;
	              filterIndexFunction(function (d, i) {
	                return lo1 <= i && i < hi1;
	              }, bounds[0] === 0 && bounds[1] === index.length);
	              lo0 = lo1;
	              hi0 = hi1;
	              return dimension;
	            }

	            var i,
	                j,
	                k,
	                added = [],
	                removed = [],
	                valueIndexAdded = [],
	                valueIndexRemoved = [];

	            // Fast incremental update based on previous lo index.
	            if (lo1 < lo0) {
	              for (i = lo1, j = Math.min(lo0, hi1); i < j; ++i) {
	                added.push(index[i]);
	                valueIndexAdded.push(i);
	              }
	            } else if (lo1 > lo0) {
	              for (i = lo0, j = Math.min(lo1, hi0); i < j; ++i) {
	                removed.push(index[i]);
	                valueIndexRemoved.push(i);
	              }
	            }

	            // Fast incremental update based on previous hi index.
	            if (hi1 > hi0) {
	              for (i = Math.max(lo1, hi0), j = hi1; i < j; ++i) {
	                added.push(index[i]);
	                valueIndexAdded.push(i);
	              }
	            } else if (hi1 < hi0) {
	              for (i = Math.max(lo0, hi1), j = hi0; i < j; ++i) {
	                removed.push(index[i]);
	                valueIndexRemoved.push(i);
	              }
	            }

	            if (!iterable) {
	              // Flip filters normally.

	              for (i = 0; i < added.length; i++) {
	                filters[offset][added[i]] ^= one;
	              }

	              for (i = 0; i < removed.length; i++) {
	                filters[offset][removed[i]] ^= one;
	              }
	            } else {
	              // For iterables, we need to figure out if the row has been completely removed vs partially included
	              // Only count a row as added if it is not already being aggregated. Only count a row
	              // as removed if the last element being aggregated is removed.

	              var newAdded = [];
	              var newRemoved = [];
	              for (i = 0; i < added.length; i++) {
	                iterablesIndexCount[added[i]]++;
	                iterablesIndexFilterStatus[valueIndexAdded[i]] = 0;
	                if (iterablesIndexCount[added[i]] === 1) {
	                  filters[offset][added[i]] ^= one;
	                  newAdded.push(added[i]);
	                }
	              }
	              for (i = 0; i < removed.length; i++) {
	                iterablesIndexCount[removed[i]]--;
	                iterablesIndexFilterStatus[valueIndexRemoved[i]] = 1;
	                if (iterablesIndexCount[removed[i]] === 0) {
	                  filters[offset][removed[i]] ^= one;
	                  newRemoved.push(removed[i]);
	                }
	              }

	              added = newAdded;
	              removed = newRemoved;

	              // Now handle empty rows.
	              if (bounds[0] === 0 && bounds[1] === index.length) {
	                for (i = 0; i < iterablesEmptyRows.length; i++) {
	                  if (filters[offset][k = iterablesEmptyRows[i]] & one) {
	                    // Was not in the filter, so set the filter and add
	                    filters[offset][k] ^= one;
	                    added.push(k);
	                  }
	                }
	              } else {
	                // filter in place - remove empty rows if necessary
	                for (i = 0; i < iterablesEmptyRows.length; i++) {
	                  if (!(filters[offset][k = iterablesEmptyRows[i]] & one)) {
	                    // Was in the filter, so set the filter and remove
	                    filters[offset][k] ^= one;
	                    removed.push(k);
	                  }
	                }
	              }
	            }

	            lo0 = lo1;
	            hi0 = hi1;
	            filterListeners.forEach(function (l) {
	              l(one, offset, added, removed);
	            });
	            triggerOnChange('filtered');
	            return dimension;
	          }

	          // Filters this dimension using the specified range, value, or null.
	          // If the range is null, this is equivalent to filterAll.
	          // If the range is an array, this is equivalent to filterRange.
	          // Otherwise, this is equivalent to filterExact.
	          function filter(range) {
	            return range == null ? filterAll() : Array.isArray(range) ? filterRange(range) : typeof range === "function" ? filterFunction(range) : filterExact(range);
	          }

	          // Filters this dimension to select the exact value.
	          function filterExact(value) {
	            return filterIndexBounds((refilter = xfilterFilter.filterExact(bisect, value))(values));
	          }

	          // Filters this dimension to select the specified range [lo, hi].
	          // The lower bound is inclusive, and the upper bound is exclusive.
	          function filterRange(range) {
	            return filterIndexBounds((refilter = xfilterFilter.filterRange(bisect, range))(values));
	          }

	          // Clears any filters on this dimension.
	          function filterAll() {
	            return filterIndexBounds((refilter = xfilterFilter.filterAll)(values));
	          }

	          // Filters this dimension using an arbitrary function.
	          function filterFunction(f) {
	            refilterFunction = f;
	            refilter = xfilterFilter.filterAll;

	            filterIndexFunction(f, false);

	            lo0 = 0;
	            hi0 = n;

	            return dimension;
	          }

	          function filterIndexFunction(f, filterAll) {
	            var i,
	                k,
	                x,
	                added = [],
	                removed = [],
	                valueIndexAdded = [],
	                valueIndexRemoved = [],
	                indexLength = index.length;

	            if (!iterable) {
	              for (i = 0; i < indexLength; ++i) {
	                if (!(filters[offset][k = index[i]] & one) ^ !!(x = f(values[i], i))) {
	                  if (x) added.push(k);else removed.push(k);
	                }
	              }
	            }

	            if (iterable) {
	              for (i = 0; i < indexLength; ++i) {
	                if (f(values[i], i)) {
	                  added.push(index[i]);
	                  valueIndexAdded.push(i);
	                } else {
	                  removed.push(index[i]);
	                  valueIndexRemoved.push(i);
	                }
	              }
	            }

	            if (!iterable) {
	              for (i = 0; i < added.length; i++) {
	                if (filters[offset][added[i]] & one) filters[offset][added[i]] &= zero;
	              }

	              for (i = 0; i < removed.length; i++) {
	                if (!(filters[offset][removed[i]] & one)) filters[offset][removed[i]] |= one;
	              }
	            } else {

	              var newAdded = [];
	              var newRemoved = [];
	              for (i = 0; i < added.length; i++) {
	                // First check this particular value needs to be added
	                if (iterablesIndexFilterStatus[valueIndexAdded[i]] === 1) {
	                  iterablesIndexCount[added[i]]++;
	                  iterablesIndexFilterStatus[valueIndexAdded[i]] = 0;
	                  if (iterablesIndexCount[added[i]] === 1) {
	                    filters[offset][added[i]] ^= one;
	                    newAdded.push(added[i]);
	                  }
	                }
	              }
	              for (i = 0; i < removed.length; i++) {
	                // First check this particular value needs to be removed
	                if (iterablesIndexFilterStatus[valueIndexRemoved[i]] === 0) {
	                  iterablesIndexCount[removed[i]]--;
	                  iterablesIndexFilterStatus[valueIndexRemoved[i]] = 1;
	                  if (iterablesIndexCount[removed[i]] === 0) {
	                    filters[offset][removed[i]] ^= one;
	                    newRemoved.push(removed[i]);
	                  }
	                }
	              }

	              added = newAdded;
	              removed = newRemoved;

	              // Now handle empty rows.
	              if (filterAll) {
	                for (i = 0; i < iterablesEmptyRows.length; i++) {
	                  if (filters[offset][k = iterablesEmptyRows[i]] & one) {
	                    // Was not in the filter, so set the filter and add
	                    filters[offset][k] ^= one;
	                    added.push(k);
	                  }
	                }
	              } else {
	                // filter in place - remove empty rows if necessary
	                for (i = 0; i < iterablesEmptyRows.length; i++) {
	                  if (!(filters[offset][k = iterablesEmptyRows[i]] & one)) {
	                    // Was in the filter, so set the filter and remove
	                    filters[offset][k] ^= one;
	                    removed.push(k);
	                  }
	                }
	              }
	            }

	            filterListeners.forEach(function (l) {
	              l(one, offset, added, removed);
	            });
	            triggerOnChange('filtered');
	          }

	          // Returns the top K selected records based on this dimension's order.
	          // Note: observes this dimension's filter, unlike group and groupAll.
	          function top(k, top_offset) {
	            var array = [],
	                i = hi0,
	                j,
	                toSkip = 0;

	            if (top_offset && top_offset > 0) toSkip = top_offset;

	            while (--i >= lo0 && k > 0) {
	              if (filters.zero(j = index[i])) {
	                if (toSkip > 0) {
	                  //skip matching row
	                  --toSkip;
	                } else {
	                  array.push(data[j]);
	                  --k;
	                }
	              }
	            }

	            if (iterable) {
	              for (i = 0; i < iterablesEmptyRows.length && k > 0; i++) {
	                // Add row with empty iterable column at the end
	                if (filters.zero(j = iterablesEmptyRows[i])) {
	                  if (toSkip > 0) {
	                    //skip matching row
	                    --toSkip;
	                  } else {
	                    array.push(data[j]);
	                    --k;
	                  }
	                }
	              }
	            }

	            return array;
	          }

	          // Returns the bottom K selected records based on this dimension's order.
	          // Note: observes this dimension's filter, unlike group and groupAll.
	          function bottom(k, bottom_offset) {
	            var array = [],
	                i,
	                j,
	                toSkip = 0;

	            if (bottom_offset && bottom_offset > 0) toSkip = bottom_offset;

	            if (iterable) {
	              // Add row with empty iterable column at the top
	              for (i = 0; i < iterablesEmptyRows.length && k > 0; i++) {
	                if (filters.zero(j = iterablesEmptyRows[i])) {
	                  if (toSkip > 0) {
	                    //skip matching row
	                    --toSkip;
	                  } else {
	                    array.push(data[j]);
	                    --k;
	                  }
	                }
	              }
	            }

	            i = lo0;

	            while (i < hi0 && k > 0) {
	              if (filters.zero(j = index[i])) {
	                if (toSkip > 0) {
	                  //skip matching row
	                  --toSkip;
	                } else {
	                  array.push(data[j]);
	                  --k;
	                }
	              }
	              i++;
	            }

	            return array;
	          }

	          // Adds a new group to this dimension, using the specified key function.
	          function group(key) {
	            var group = {
	              top: top,
	              all: all,
	              reduce: reduce,
	              reduceCount: reduceCount,
	              reduceSum: reduceSum,
	              order: order,
	              orderNatural: orderNatural,
	              size: size,
	              dispose: dispose,
	              remove: dispose // for backwards-compatibility
	            };

	            // Ensure that this group will be removed when the dimension is removed.
	            dimensionGroups.push(group);

	            var groups,
	                // array of {key, value}
	            groupIndex,
	                // object id ↦ group id
	            groupWidth = 8,
	                groupCapacity = crossfilter_capacity(groupWidth),
	                k = 0,
	                // cardinality
	            select,
	                heap,
	                reduceAdd,
	                reduceRemove,
	                reduceInitial,
	                update = crossfilter_null,
	                reset = crossfilter_null,
	                resetNeeded = true,
	                groupAll = key === crossfilter_null;

	            if (arguments.length < 1) key = crossfilter_identity;

	            // The group listens to the crossfilter for when any dimension changes, so
	            // that it can update the associated reduce values. It must also listen to
	            // the parent dimension for when data is added, and compute new keys.
	            filterListeners.push(update);
	            indexListeners.push(add);
	            removeDataListeners.push(removeData);

	            // Incorporate any existing data into the grouping.
	            add(values, index, 0, n);

	            // Incorporates the specified new values into this group.
	            // This function is responsible for updating groups and groupIndex.
	            function add(newValues, newIndex, n0, n1) {

	              if (iterable) {
	                n0old = n0;
	                n0 = values.length - newValues.length;
	                n1 = newValues.length;
	              }

	              var oldGroups = groups,
	                  reIndex = iterable ? [] : crossfilter_index(k, groupCapacity),
	                  add = reduceAdd,
	                  remove = reduceRemove,
	                  initial = reduceInitial,
	                  k0 = k,
	                  // old cardinality
	              i0 = 0,
	                  // index of old group
	              i1 = 0,
	                  // index of new record
	              j,
	                  // object id
	              g0,
	                  // old group
	              x0,
	                  // old key
	              x1,
	                  // new key
	              g,
	                  // group to add
	              x; // key of group to add

	              // If a reset is needed, we don't need to update the reduce values.
	              if (resetNeeded) add = initial = crossfilter_null;
	              if (resetNeeded) remove = initial = crossfilter_null;

	              // Reset the new groups (k is a lower bound).
	              // Also, make sure that groupIndex exists and is long enough.
	              groups = new Array(k), k = 0;
	              if (iterable) {
	                groupIndex = k0 > 1 ? groupIndex : [];
	              } else {
	                groupIndex = k0 > 1 ? xfilterArray.arrayLengthen(groupIndex, n) : crossfilter_index(n, groupCapacity);
	              }

	              // Get the first old key (x0 of g0), if it exists.
	              if (k0) x0 = (g0 = oldGroups[0]).key;

	              // Find the first new key (x1), skipping NaN keys.
	              while (i1 < n1 && !((x1 = key(newValues[i1])) >= x1)) {
	                ++i1;
	              } // While new keys remain…
	              while (i1 < n1) {

	                // Determine the lesser of the two current keys; new and old.
	                // If there are no old keys remaining, then always add the new key.
	                if (g0 && x0 <= x1) {
	                  g = g0, x = x0;

	                  // Record the new index of the old group.
	                  reIndex[i0] = k;

	                  // Retrieve the next old key.
	                  if (g0 = oldGroups[++i0]) x0 = g0.key;
	                } else {
	                  g = { key: x1, value: initial() }, x = x1;
	                }

	                // Add the lesser group.
	                groups[k] = g;

	                // Add any selected records belonging to the added group, while
	                // advancing the new key and populating the associated group index.

	                while (x1 <= x) {
	                  j = newIndex[i1] + (iterable ? n0old : n0);

	                  if (iterable) {
	                    if (groupIndex[j]) {
	                      groupIndex[j].push(k);
	                    } else {
	                      groupIndex[j] = [k];
	                    }
	                  } else {
	                    groupIndex[j] = k;
	                  }

	                  // Always add new values to groups. Only remove when not in filter.
	                  // This gives groups full information on data life-cycle.
	                  g.value = add(g.value, data[j], true);
	                  if (!filters.zeroExcept(j, offset, zero)) g.value = remove(g.value, data[j], false);
	                  if (++i1 >= n1) break;
	                  x1 = key(newValues[i1]);
	                }

	                groupIncrement();
	              }

	              // Add any remaining old groups that were greater th1an all new keys.
	              // No incremental reduce is needed; these groups have no new records.
	              // Also record the new index of the old group.
	              while (i0 < k0) {
	                groups[reIndex[i0] = k] = oldGroups[i0++];
	                groupIncrement();
	              }

	              // Fill in gaps with empty arrays where there may have been rows with empty iterables
	              if (iterable) {
	                for (i = 0; i < n; i++) {
	                  if (!groupIndex[i]) {
	                    groupIndex[i] = [];
	                  }
	                }
	              }

	              // If we added any new groups before any old groups,
	              // update the group index of all the old records.
	              if (k > i0) {
	                if (iterable) {
	                  groupIndex = permute(groupIndex, reIndex, true);
	                } else {
	                  for (i0 = 0; i0 < n0; ++i0) {
	                    groupIndex[i0] = reIndex[groupIndex[i0]];
	                  }
	                }
	              }

	              // Modify the update and reset behavior based on the cardinality.
	              // If the cardinality is less than or equal to one, then the groupIndex
	              // is not needed. If the cardinality is zero, then there are no records
	              // and therefore no groups to update or reset. Note that we also must
	              // change the registered listener to point to the new method.
	              j = filterListeners.indexOf(update);
	              if (k > 1) {
	                update = updateMany;
	                reset = resetMany;
	              } else {
	                if (!k && groupAll) {
	                  k = 1;
	                  groups = [{ key: null, value: initial() }];
	                }
	                if (k === 1) {
	                  update = updateOne;
	                  reset = resetOne;
	                } else {
	                  update = crossfilter_null;
	                  reset = crossfilter_null;
	                }
	                groupIndex = null;
	              }
	              filterListeners[j] = update;

	              // Count the number of added groups,
	              // and widen the group index as needed.
	              function groupIncrement() {
	                if (iterable) {
	                  k++;
	                  return;
	                }
	                if (++k === groupCapacity) {
	                  reIndex = xfilterArray.arrayWiden(reIndex, groupWidth <<= 1);
	                  groupIndex = xfilterArray.arrayWiden(groupIndex, groupWidth);
	                  groupCapacity = crossfilter_capacity(groupWidth);
	                }
	              }
	            }

	            function removeData() {
	              if (k > 1) {
	                var oldK = k,
	                    oldGroups = groups,
	                    seenGroups = crossfilter_index(oldK, oldK);

	                // Filter out non-matches by copying matching group index entries to
	                // the beginning of the array.
	                for (var i = 0, j = 0; i < n; ++i) {
	                  if (!filters.zero(i)) {
	                    seenGroups[groupIndex[j] = groupIndex[i]] = 1;
	                    ++j;
	                  }
	                }

	                // Reassemble groups including only those groups that were referred
	                // to by matching group index entries.  Note the new group index in
	                // seenGroups.
	                groups = [], k = 0;
	                for (i = 0; i < oldK; ++i) {
	                  if (seenGroups[i]) {
	                    seenGroups[i] = k++;
	                    groups.push(oldGroups[i]);
	                  }
	                }

	                if (k > 1) {
	                  // Reindex the group index using seenGroups to find the new index.
	                  for (var i = 0; i < j; ++i) {
	                    groupIndex[i] = seenGroups[groupIndex[i]];
	                  }
	                } else {
	                  groupIndex = null;
	                }
	                filterListeners[filterListeners.indexOf(update)] = k > 1 ? (reset = resetMany, update = updateMany) : k === 1 ? (reset = resetOne, update = updateOne) : reset = update = crossfilter_null;
	              } else if (k === 1) {
	                if (groupAll) return;
	                for (var i = 0; i < n; ++i) {
	                  if (!filters.zero(i)) return;
	                }groups = [], k = 0;
	                filterListeners[filterListeners.indexOf(update)] = update = reset = crossfilter_null;
	              }
	            }

	            // Reduces the specified selected or deselected records.
	            // This function is only used when the cardinality is greater than 1.
	            // notFilter indicates a crossfilter.add/remove operation.
	            function updateMany(filterOne, filterOffset, added, removed, notFilter) {

	              if (filterOne === one && filterOffset === offset || resetNeeded) return;

	              var i, j, k, n, g;

	              if (iterable) {
	                // Add the added values.
	                for (i = 0, n = added.length; i < n; ++i) {
	                  if (filters.zeroExcept(k = added[i], offset, zero)) {
	                    for (j = 0; j < groupIndex[k].length; j++) {
	                      g = groups[groupIndex[k][j]];
	                      g.value = reduceAdd(g.value, data[k], false, j);
	                    }
	                  }
	                }

	                // Remove the removed values.
	                for (i = 0, n = removed.length; i < n; ++i) {
	                  if (filters.onlyExcept(k = removed[i], offset, zero, filterOffset, filterOne)) {
	                    for (j = 0; j < groupIndex[k].length; j++) {
	                      g = groups[groupIndex[k][j]];
	                      g.value = reduceRemove(g.value, data[k], notFilter, j);
	                    }
	                  }
	                }
	                return;
	              }

	              // Add the added values.
	              for (i = 0, n = added.length; i < n; ++i) {
	                if (filters.zeroExcept(k = added[i], offset, zero)) {
	                  g = groups[groupIndex[k]];
	                  g.value = reduceAdd(g.value, data[k], false);
	                }
	              }

	              // Remove the removed values.
	              for (i = 0, n = removed.length; i < n; ++i) {
	                if (filters.onlyExcept(k = removed[i], offset, zero, filterOffset, filterOne)) {
	                  g = groups[groupIndex[k]];
	                  g.value = reduceRemove(g.value, data[k], notFilter);
	                }
	              }
	            }

	            // Reduces the specified selected or deselected records.
	            // This function is only used when the cardinality is 1.
	            // notFilter indicates a crossfilter.add/remove operation.
	            function updateOne(filterOne, filterOffset, added, removed, notFilter) {
	              if (filterOne === one && filterOffset === offset || resetNeeded) return;

	              var i,
	                  k,
	                  n,
	                  g = groups[0];

	              // Add the added values.
	              for (i = 0, n = added.length; i < n; ++i) {
	                if (filters.zeroExcept(k = added[i], offset, zero)) {
	                  g.value = reduceAdd(g.value, data[k], false);
	                }
	              }

	              // Remove the removed values.
	              for (i = 0, n = removed.length; i < n; ++i) {
	                if (filters.onlyExcept(k = removed[i], offset, zero, filterOffset, filterOne)) {
	                  g.value = reduceRemove(g.value, data[k], notFilter);
	                }
	              }
	            }

	            // Recomputes the group reduce values from scratch.
	            // This function is only used when the cardinality is greater than 1.
	            function resetMany() {
	              var i, j, g;

	              // Reset all group values.
	              for (i = 0; i < k; ++i) {
	                groups[i].value = reduceInitial();
	              }

	              // We add all records and then remove filtered records so that reducers
	              // can build an 'unfiltered' view even if there are already filters in
	              // place on other dimensions.
	              if (iterable) {
	                for (i = 0; i < n; ++i) {
	                  for (j = 0; j < groupIndex[i].length; j++) {
	                    g = groups[groupIndex[i][j]];
	                    g.value = reduceAdd(g.value, data[i], true, j);
	                  }
	                }
	                for (i = 0; i < n; ++i) {
	                  if (!filters.zeroExcept(i, offset, zero)) {
	                    for (j = 0; j < groupIndex[i].length; j++) {
	                      g = groups[groupIndex[i][j]];
	                      g.value = reduceRemove(g.value, data[i], false, j);
	                    }
	                  }
	                }
	                return;
	              }

	              for (i = 0; i < n; ++i) {
	                g = groups[groupIndex[i]];
	                g.value = reduceAdd(g.value, data[i], true);
	              }
	              for (i = 0; i < n; ++i) {
	                if (!filters.zeroExcept(i, offset, zero)) {
	                  g = groups[groupIndex[i]];
	                  g.value = reduceRemove(g.value, data[i], false);
	                }
	              }
	            }

	            // Recomputes the group reduce values from scratch.
	            // This function is only used when the cardinality is 1.
	            function resetOne() {
	              var i,
	                  g = groups[0];

	              // Reset the singleton group values.
	              g.value = reduceInitial();

	              // We add all records and then remove filtered records so that reducers
	              // can build an 'unfiltered' view even if there are already filters in
	              // place on other dimensions.
	              for (i = 0; i < n; ++i) {
	                g.value = reduceAdd(g.value, data[i], true);
	              }

	              for (i = 0; i < n; ++i) {
	                if (!filters.zeroExcept(i, offset, zero)) {
	                  g.value = reduceRemove(g.value, data[i], false);
	                }
	              }
	            }

	            // Returns the array of group values, in the dimension's natural order.
	            function all() {
	              if (resetNeeded) reset(), resetNeeded = false;
	              return groups;
	            }

	            // Returns a new array containing the top K group values, in reduce order.
	            function top(k) {
	              var top = select(all(), 0, groups.length, k);
	              return heap.sort(top, 0, top.length);
	            }

	            // Sets the reduce behavior for this group to use the specified functions.
	            // This method lazily recomputes the reduce values, waiting until needed.
	            function reduce(add, remove, initial) {
	              reduceAdd = add;
	              reduceRemove = remove;
	              reduceInitial = initial;
	              resetNeeded = true;
	              return group;
	            }

	            // A convenience method for reducing by count.
	            function reduceCount() {
	              return reduce(xfilterReduce.reduceIncrement, xfilterReduce.reduceDecrement, crossfilter_zero);
	            }

	            // A convenience method for reducing by sum(value).
	            function reduceSum(value) {
	              return reduce(xfilterReduce.reduceAdd(value), xfilterReduce.reduceSubtract(value), crossfilter_zero);
	            }

	            // Sets the reduce order, using the specified accessor.
	            function order(value) {
	              select = xfilterHeapselect.by(valueOf);
	              heap = xfilterHeap.by(valueOf);
	              function valueOf(d) {
	                return value(d.value);
	              }
	              return group;
	            }

	            // A convenience method for natural ordering by reduce value.
	            function orderNatural() {
	              return order(crossfilter_identity);
	            }

	            // Returns the cardinality of this group, irrespective of any filters.
	            function size() {
	              return k;
	            }

	            // Removes this group and associated event listeners.
	            function dispose() {
	              var i = filterListeners.indexOf(update);
	              if (i >= 0) filterListeners.splice(i, 1);
	              i = indexListeners.indexOf(add);
	              if (i >= 0) indexListeners.splice(i, 1);
	              i = removeDataListeners.indexOf(removeData);
	              if (i >= 0) removeDataListeners.splice(i, 1);
	              return group;
	            }

	            return reduceCount().orderNatural();
	          }

	          // A convenience function for generating a singleton group.
	          function groupAll() {
	            var g = group(crossfilter_null),
	                all = g.all;
	            delete g.all;
	            delete g.top;
	            delete g.order;
	            delete g.orderNatural;
	            delete g.size;
	            g.value = function () {
	              return all()[0].value;
	            };
	            return g;
	          }

	          // Removes this dimension and associated groups and event listeners.
	          function dispose() {
	            dimensionGroups.forEach(function (group) {
	              group.dispose();
	            });
	            var i = dataListeners.indexOf(preAdd);
	            if (i >= 0) dataListeners.splice(i, 1);
	            i = dataListeners.indexOf(postAdd);
	            if (i >= 0) dataListeners.splice(i, 1);
	            i = removeDataListeners.indexOf(removeData);
	            if (i >= 0) removeDataListeners.splice(i, 1);
	            filters.masks[offset] &= zero;
	            return filterAll();
	          }

	          return dimension;
	        }

	        // A convenience method for groupAll on a dummy dimension.
	        // This implementation can be optimized since it always has cardinality 1.
	        function groupAll() {
	          var group = {
	            reduce: reduce,
	            reduceCount: reduceCount,
	            reduceSum: reduceSum,
	            value: value,
	            dispose: dispose,
	            remove: dispose // for backwards-compatibility
	          };

	          var reduceValue,
	              reduceAdd,
	              reduceRemove,
	              reduceInitial,
	              resetNeeded = true;

	          // The group listens to the crossfilter for when any dimension changes, so
	          // that it can update the reduce value. It must also listen to the parent
	          // dimension for when data is added.
	          filterListeners.push(update);
	          dataListeners.push(add);

	          // For consistency; actually a no-op since resetNeeded is true.
	          add(data, 0, n);

	          // Incorporates the specified new values into this group.
	          function add(newData, n0) {
	            var i;

	            if (resetNeeded) return;

	            // Cycle through all the values.
	            for (i = n0; i < n; ++i) {

	              // Add all values all the time.
	              reduceValue = reduceAdd(reduceValue, data[i], true);

	              // Remove the value if filtered.
	              if (!filters.zero(i)) {
	                reduceValue = reduceRemove(reduceValue, data[i], false);
	              }
	            }
	          }

	          // Reduces the specified selected or deselected records.
	          function update(filterOne, filterOffset, added, removed, notFilter) {
	            var i, k, n;

	            if (resetNeeded) return;

	            // Add the added values.
	            for (i = 0, n = added.length; i < n; ++i) {
	              if (filters.zero(k = added[i])) {
	                reduceValue = reduceAdd(reduceValue, data[k], notFilter);
	              }
	            }

	            // Remove the removed values.
	            for (i = 0, n = removed.length; i < n; ++i) {
	              if (filters.only(k = removed[i], filterOffset, filterOne)) {
	                reduceValue = reduceRemove(reduceValue, data[k], notFilter);
	              }
	            }
	          }

	          // Recomputes the group reduce value from scratch.
	          function reset() {
	            var i;

	            reduceValue = reduceInitial();

	            // Cycle through all the values.
	            for (i = 0; i < n; ++i) {

	              // Add all values all the time.
	              reduceValue = reduceAdd(reduceValue, data[i], true);

	              // Remove the value if it is filtered.
	              if (!filters.zero(i)) {
	                reduceValue = reduceRemove(reduceValue, data[i], false);
	              }
	            }
	          }

	          // Sets the reduce behavior for this group to use the specified functions.
	          // This method lazily recomputes the reduce value, waiting until needed.
	          function reduce(add, remove, initial) {
	            reduceAdd = add;
	            reduceRemove = remove;
	            reduceInitial = initial;
	            resetNeeded = true;
	            return group;
	          }

	          // A convenience method for reducing by count.
	          function reduceCount() {
	            return reduce(xfilterReduce.reduceIncrement, xfilterReduce.reduceDecrement, crossfilter_zero);
	          }

	          // A convenience method for reducing by sum(value).
	          function reduceSum(value) {
	            return reduce(xfilterReduce.reduceAdd(value), xfilterReduce.reduceSubtract(value), crossfilter_zero);
	          }

	          // Returns the computed reduce value.
	          function value() {
	            if (resetNeeded) reset(), resetNeeded = false;
	            return reduceValue;
	          }

	          // Removes this group and associated event listeners.
	          function dispose() {
	            var i = filterListeners.indexOf(update);
	            if (i >= 0) filterListeners.splice(i);
	            i = dataListeners.indexOf(add);
	            if (i >= 0) dataListeners.splice(i);
	            return group;
	          }

	          return reduceCount();
	        }

	        // Returns the number of records in this crossfilter, irrespective of any filters.
	        function size() {
	          return n;
	        }

	        // Returns the raw row data contained in this crossfilter
	        function all() {
	          return data;
	        }

	        function onChange(cb) {
	          if (typeof cb !== 'function') {
	            console.warn('onChange callback parameter must be a function!');
	            return;
	          }
	          callbacks.push(cb);
	          return function () {
	            callbacks.splice(callbacks.indexOf(cb), 1);
	          };
	        }

	        function triggerOnChange(eventName) {
	          for (var i = 0; i < callbacks.length; i++) {
	            callbacks[i](eventName);
	          }
	        }

	        return arguments.length ? add(arguments[0]) : crossfilter;
	      }

	      // Returns an array of size n, big enough to store ids up to m.
	      function crossfilter_index(n, m) {
	        return (m < 0x101 ? xfilterArray.array8 : m < 0x10001 ? xfilterArray.array16 : xfilterArray.array32)(n);
	      }

	      // Constructs a new array of size n, with sequential values from 0 to n - 1.
	      function crossfilter_range(n) {
	        var range = crossfilter_index(n, n);
	        for (var i = -1; ++i < n;) {
	          range[i] = i;
	        }return range;
	      }

	      function crossfilter_capacity(w) {
	        return w === 8 ? 0x100 : w === 16 ? 0x10000 : 0x100000000;
	      }
	    }, { "./../package.json": 5, "./array": 6, "./bisect": 7, "./filter": 9, "./heap": 10, "./heapselect": 11, "./identity": 12, "./insertionsort": 13, "./null": 14, "./permute": 15, "./quicksort": 16, "./reduce": 17, "./zero": 18, "lodash.result": 4 }], 9: [function (require, module, exports) {
	      function crossfilter_filterExact(bisect, value) {
	        return function (values) {
	          var n = values.length;
	          return [bisect.left(values, value, 0, n), bisect.right(values, value, 0, n)];
	        };
	      }

	      function crossfilter_filterRange(bisect, range) {
	        var min = range[0],
	            max = range[1];
	        return function (values) {
	          var n = values.length;
	          return [bisect.left(values, min, 0, n), bisect.left(values, max, 0, n)];
	        };
	      }

	      function crossfilter_filterAll(values) {
	        return [0, values.length];
	      }

	      module.exports = {
	        filterExact: crossfilter_filterExact,
	        filterRange: crossfilter_filterRange,
	        filterAll: crossfilter_filterAll
	      };
	    }, {}], 10: [function (require, module, exports) {
	      var crossfilter_identity = require('./identity');

	      function heap_by(f) {

	        // Builds a binary heap within the specified array a[lo:hi]. The heap has the
	        // property such that the parent a[lo+i] is always less than or equal to its
	        // two children: a[lo+2*i+1] and a[lo+2*i+2].
	        function heap(a, lo, hi) {
	          var n = hi - lo,
	              i = (n >>> 1) + 1;
	          while (--i > 0) {
	            sift(a, i, n, lo);
	          }return a;
	        }

	        // Sorts the specified array a[lo:hi] in descending order, assuming it is
	        // already a heap.
	        function sort(a, lo, hi) {
	          var n = hi - lo,
	              t;
	          while (--n > 0) {
	            t = a[lo], a[lo] = a[lo + n], a[lo + n] = t, sift(a, 1, n, lo);
	          }return a;
	        }

	        // Sifts the element a[lo+i-1] down the heap, where the heap is the contiguous
	        // slice of array a[lo:lo+n]. This method can also be used to update the heap
	        // incrementally, without incurring the full cost of reconstructing the heap.
	        function sift(a, i, n, lo) {
	          var d = a[--lo + i],
	              x = f(d),
	              child;
	          while ((child = i << 1) <= n) {
	            if (child < n && f(a[lo + child]) > f(a[lo + child + 1])) child++;
	            if (x <= f(a[lo + child])) break;
	            a[lo + i] = a[lo + child];
	            i = child;
	          }
	          a[lo + i] = d;
	        }

	        heap.sort = sort;
	        return heap;
	      }

	      module.exports = heap_by(crossfilter_identity);
	      module.exports.by = heap_by;
	    }, { "./identity": 12 }], 11: [function (require, module, exports) {
	      var crossfilter_identity = require('./identity');
	      var xFilterHeap = require('./heap');

	      function heapselect_by(f) {
	        var heap = xFilterHeap.by(f);

	        // Returns a new array containing the top k elements in the array a[lo:hi].
	        // The returned array is not sorted, but maintains the heap property. If k is
	        // greater than hi - lo, then fewer than k elements will be returned. The
	        // order of elements in a is unchanged by this operation.
	        function heapselect(a, lo, hi, k) {
	          var queue = new Array(k = Math.min(hi - lo, k)),
	              min,
	              i,
	              x,
	              d;

	          for (i = 0; i < k; ++i) {
	            queue[i] = a[lo++];
	          }heap(queue, 0, k);

	          if (lo < hi) {
	            min = f(queue[0]);
	            do {
	              if (x = f(d = a[lo]) > min) {
	                queue[0] = d;
	                min = f(heap(queue, 0, k)[0]);
	              }
	            } while (++lo < hi);
	          }

	          return queue;
	        }

	        return heapselect;
	      }

	      module.exports = heapselect_by(crossfilter_identity);
	      module.exports.by = heapselect_by; // assign the raw function to the export as well
	    }, { "./heap": 10, "./identity": 12 }], 12: [function (require, module, exports) {
	      function crossfilter_identity(d) {
	        return d;
	      }

	      module.exports = crossfilter_identity;
	    }, {}], 13: [function (require, module, exports) {
	      var crossfilter_identity = require('./identity');

	      function insertionsort_by(f) {

	        function insertionsort(a, lo, hi) {
	          for (var i = lo + 1; i < hi; ++i) {
	            for (var j = i, t = a[i], x = f(t); j > lo && f(a[j - 1]) > x; --j) {
	              a[j] = a[j - 1];
	            }
	            a[j] = t;
	          }
	          return a;
	        }

	        return insertionsort;
	      }

	      module.exports = insertionsort_by(crossfilter_identity);
	      module.exports.by = insertionsort_by;
	    }, { "./identity": 12 }], 14: [function (require, module, exports) {
	      function crossfilter_null() {
	        return null;
	      }

	      module.exports = crossfilter_null;
	    }, {}], 15: [function (require, module, exports) {
	      function permute(array, index, deep) {
	        for (var i = 0, n = index.length, copy = deep ? JSON.parse(JSON.stringify(array)) : new Array(n); i < n; ++i) {
	          copy[i] = array[index[i]];
	        }
	        return copy;
	      }

	      module.exports = permute;
	    }, {}], 16: [function (require, module, exports) {
	      var crossfilter_identity = require('./identity');
	      var xFilterInsertionsort = require('./insertionsort');

	      // Algorithm designed by Vladimir Yaroslavskiy.
	      // Implementation based on the Dart project; see NOTICE and AUTHORS for details.

	      function quicksort_by(f) {
	        var insertionsort = xFilterInsertionsort.by(f);

	        function sort(a, lo, hi) {
	          return (hi - lo < quicksort_sizeThreshold ? insertionsort : quicksort)(a, lo, hi);
	        }

	        function quicksort(a, lo, hi) {
	          // Compute the two pivots by looking at 5 elements.
	          var sixth = (hi - lo) / 6 | 0,
	              i1 = lo + sixth,
	              i5 = hi - 1 - sixth,
	              i3 = lo + hi - 1 >> 1,
	              // The midpoint.
	          i2 = i3 - sixth,
	              i4 = i3 + sixth;

	          var e1 = a[i1],
	              x1 = f(e1),
	              e2 = a[i2],
	              x2 = f(e2),
	              e3 = a[i3],
	              x3 = f(e3),
	              e4 = a[i4],
	              x4 = f(e4),
	              e5 = a[i5],
	              x5 = f(e5);

	          var t;

	          // Sort the selected 5 elements using a sorting network.
	          if (x1 > x2) t = e1, e1 = e2, e2 = t, t = x1, x1 = x2, x2 = t;
	          if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;
	          if (x1 > x3) t = e1, e1 = e3, e3 = t, t = x1, x1 = x3, x3 = t;
	          if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	          if (x1 > x4) t = e1, e1 = e4, e4 = t, t = x1, x1 = x4, x4 = t;
	          if (x3 > x4) t = e3, e3 = e4, e4 = t, t = x3, x3 = x4, x4 = t;
	          if (x2 > x5) t = e2, e2 = e5, e5 = t, t = x2, x2 = x5, x5 = t;
	          if (x2 > x3) t = e2, e2 = e3, e3 = t, t = x2, x2 = x3, x3 = t;
	          if (x4 > x5) t = e4, e4 = e5, e5 = t, t = x4, x4 = x5, x5 = t;

	          var pivot1 = e2,
	              pivotValue1 = x2,
	              pivot2 = e4,
	              pivotValue2 = x4;

	          // e2 and e4 have been saved in the pivot variables. They will be written
	          // back, once the partitioning is finished.
	          a[i1] = e1;
	          a[i2] = a[lo];
	          a[i3] = e3;
	          a[i4] = a[hi - 1];
	          a[i5] = e5;

	          var less = lo + 1,
	              // First element in the middle partition.
	          great = hi - 2; // Last element in the middle partition.

	          // Note that for value comparison, <, <=, >= and > coerce to a primitive via
	          // Object.prototype.valueOf; == and === do not, so in order to be consistent
	          // with natural order (such as for Date objects), we must do two compares.
	          var pivotsEqual = pivotValue1 <= pivotValue2 && pivotValue1 >= pivotValue2;
	          if (pivotsEqual) {

	            // Degenerated case where the partitioning becomes a dutch national flag
	            // problem.
	            //
	            // [ |  < pivot  | == pivot | unpartitioned | > pivot  | ]
	            //  ^             ^          ^             ^            ^
	            // left         less         k           great         right
	            //
	            // a[left] and a[right] are undefined and are filled after the
	            // partitioning.
	            //
	            // Invariants:
	            //   1) for x in ]left, less[ : x < pivot.
	            //   2) for x in [less, k[ : x == pivot.
	            //   3) for x in ]great, right[ : x > pivot.
	            for (var k = less; k <= great; ++k) {
	              var ek = a[k],
	                  xk = f(ek);
	              if (xk < pivotValue1) {
	                if (k !== less) {
	                  a[k] = a[less];
	                  a[less] = ek;
	                }
	                ++less;
	              } else if (xk > pivotValue1) {

	                // Find the first element <= pivot in the range [k - 1, great] and
	                // put [:ek:] there. We know that such an element must exist:
	                // When k == less, then el3 (which is equal to pivot) lies in the
	                // interval. Otherwise a[k - 1] == pivot and the search stops at k-1.
	                // Note that in the latter case invariant 2 will be violated for a
	                // short amount of time. The invariant will be restored when the
	                // pivots are put into their final positions.
	                while (true) {
	                  var greatValue = f(a[great]);
	                  if (greatValue > pivotValue1) {
	                    great--;
	                    // This is the only location in the while-loop where a new
	                    // iteration is started.
	                    continue;
	                  } else if (greatValue < pivotValue1) {
	                    // Triple exchange.
	                    a[k] = a[less];
	                    a[less++] = a[great];
	                    a[great--] = ek;
	                    break;
	                  } else {
	                    a[k] = a[great];
	                    a[great--] = ek;
	                    // Note: if great < k then we will exit the outer loop and fix
	                    // invariant 2 (which we just violated).
	                    break;
	                  }
	                }
	              }
	            }
	          } else {

	            // We partition the list into three parts:
	            //  1. < pivot1
	            //  2. >= pivot1 && <= pivot2
	            //  3. > pivot2
	            //
	            // During the loop we have:
	            // [ | < pivot1 | >= pivot1 && <= pivot2 | unpartitioned  | > pivot2  | ]
	            //  ^            ^                        ^              ^             ^
	            // left         less                     k              great        right
	            //
	            // a[left] and a[right] are undefined and are filled after the
	            // partitioning.
	            //
	            // Invariants:
	            //   1. for x in ]left, less[ : x < pivot1
	            //   2. for x in [less, k[ : pivot1 <= x && x <= pivot2
	            //   3. for x in ]great, right[ : x > pivot2
	            for (var k = less; k <= great; k++) {
	              var ek = a[k],
	                  xk = f(ek);
	              if (xk < pivotValue1) {
	                if (k !== less) {
	                  a[k] = a[less];
	                  a[less] = ek;
	                }
	                ++less;
	              } else {
	                if (xk > pivotValue2) {
	                  while (true) {
	                    var greatValue = f(a[great]);
	                    if (greatValue > pivotValue2) {
	                      great--;
	                      if (great < k) break;
	                      // This is the only location inside the loop where a new
	                      // iteration is started.
	                      continue;
	                    } else {
	                      // a[great] <= pivot2.
	                      if (greatValue < pivotValue1) {
	                        // Triple exchange.
	                        a[k] = a[less];
	                        a[less++] = a[great];
	                        a[great--] = ek;
	                      } else {
	                        // a[great] >= pivot1.
	                        a[k] = a[great];
	                        a[great--] = ek;
	                      }
	                      break;
	                    }
	                  }
	                }
	              }
	            }
	          }

	          // Move pivots into their final positions.
	          // We shrunk the list from both sides (a[left] and a[right] have
	          // meaningless values in them) and now we move elements from the first
	          // and third partition into these locations so that we can store the
	          // pivots.
	          a[lo] = a[less - 1];
	          a[less - 1] = pivot1;
	          a[hi - 1] = a[great + 1];
	          a[great + 1] = pivot2;

	          // The list is now partitioned into three partitions:
	          // [ < pivot1   | >= pivot1 && <= pivot2   |  > pivot2   ]
	          //  ^            ^                        ^             ^
	          // left         less                     great        right

	          // Recursive descent. (Don't include the pivot values.)
	          sort(a, lo, less - 1);
	          sort(a, great + 2, hi);

	          if (pivotsEqual) {
	            // All elements in the second partition are equal to the pivot. No
	            // need to sort them.
	            return a;
	          }

	          // In theory it should be enough to call _doSort recursively on the second
	          // partition.
	          // The Android source however removes the pivot elements from the recursive
	          // call if the second partition is too large (more than 2/3 of the list).
	          if (less < i1 && great > i5) {
	            var lessValue, greatValue;
	            while ((lessValue = f(a[less])) <= pivotValue1 && lessValue >= pivotValue1) {
	              ++less;
	            }while ((greatValue = f(a[great])) <= pivotValue2 && greatValue >= pivotValue2) {
	              --great;
	            } // Copy paste of the previous 3-way partitioning with adaptions.
	            //
	            // We partition the list into three parts:
	            //  1. == pivot1
	            //  2. > pivot1 && < pivot2
	            //  3. == pivot2
	            //
	            // During the loop we have:
	            // [ == pivot1 | > pivot1 && < pivot2 | unpartitioned  | == pivot2 ]
	            //              ^                      ^              ^
	            //            less                     k              great
	            //
	            // Invariants:
	            //   1. for x in [ *, less[ : x == pivot1
	            //   2. for x in [less, k[ : pivot1 < x && x < pivot2
	            //   3. for x in ]great, * ] : x == pivot2
	            for (var k = less; k <= great; k++) {
	              var ek = a[k],
	                  xk = f(ek);
	              if (xk <= pivotValue1 && xk >= pivotValue1) {
	                if (k !== less) {
	                  a[k] = a[less];
	                  a[less] = ek;
	                }
	                less++;
	              } else {
	                if (xk <= pivotValue2 && xk >= pivotValue2) {
	                  while (true) {
	                    var greatValue = f(a[great]);
	                    if (greatValue <= pivotValue2 && greatValue >= pivotValue2) {
	                      great--;
	                      if (great < k) break;
	                      // This is the only location inside the loop where a new
	                      // iteration is started.
	                      continue;
	                    } else {
	                      // a[great] < pivot2.
	                      if (greatValue < pivotValue1) {
	                        // Triple exchange.
	                        a[k] = a[less];
	                        a[less++] = a[great];
	                        a[great--] = ek;
	                      } else {
	                        // a[great] == pivot1.
	                        a[k] = a[great];
	                        a[great--] = ek;
	                      }
	                      break;
	                    }
	                  }
	                }
	              }
	            }
	          }

	          // The second partition has now been cleared of pivot elements and looks
	          // as follows:
	          // [  *  |  > pivot1 && < pivot2  | * ]
	          //        ^                      ^
	          //       less                  great
	          // Sort the second partition using recursive descent.

	          // The second partition looks as follows:
	          // [  *  |  >= pivot1 && <= pivot2  | * ]
	          //        ^                        ^
	          //       less                    great
	          // Simply sort it by recursive descent.

	          return sort(a, less, great + 1);
	        }

	        return sort;
	      }

	      var quicksort_sizeThreshold = 32;

	      module.exports = quicksort_by(crossfilter_identity);
	      module.exports.by = quicksort_by;
	    }, { "./identity": 12, "./insertionsort": 13 }], 17: [function (require, module, exports) {
	      function crossfilter_reduceIncrement(p) {
	        return p + 1;
	      }

	      function crossfilter_reduceDecrement(p) {
	        return p - 1;
	      }

	      function crossfilter_reduceAdd(f) {
	        return function (p, v) {
	          return p + +f(v);
	        };
	      }

	      function crossfilter_reduceSubtract(f) {
	        return function (p, v) {
	          return p - f(v);
	        };
	      }

	      module.exports = {
	        reduceIncrement: crossfilter_reduceIncrement,
	        reduceDecrement: crossfilter_reduceDecrement,
	        reduceAdd: crossfilter_reduceAdd,
	        reduceSubtract: crossfilter_reduceSubtract
	      };
	    }, {}], 18: [function (require, module, exports) {
	      function crossfilter_zero() {
	        return 0;
	      }

	      module.exports = crossfilter_zero;
	    }, {}] }, {}, [1])(1);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
		var config = {};

		config.services = [{
			name: 'ohdsi',
			url: 'http://54.242.168.196/WebAPI/'
		}, {
			name: 'Local',
			url: 'http://localhost:8080/WebAPI/'
		}];

		config.webAPIRoot = config.services[0].url;
		// config.rServicesHost = 'http://hixbeta.jnj.com:8999/';
		// config.rServicesHost = 'http://rndusrdhit09.jnj.com:8080/';
		config.dataSourcesLocation = '/achilles/data/datasources.json';
		config.dataSourcesRoot = '/achilles/data';
		config.cohortComparisonResultsEnabled = true;

		return config;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	// written and developed by frank j. defalco
	// frank acknowledges Christopher A. Knoll
	// AMD form by Christopher A Knoll

	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
		// http://stackoverflow.com/users/80720/rafael
		// http://stackoverflow.com/questions/1960473/unique-values-in-an-array
		Array.prototype.getUnique = function () {
			var u = {},
			    a = [];
			for (var i = 0, l = this.length; i < l; ++i) {
				if (u.hasOwnProperty(this[i])) {
					continue;
				}
				a.push(this[i]);
				u[this[i]] = 1;
			}
			return a;
		};

		Array.prototype.sortBy = function (f) {
			for (var i = this.length; i;) {
				var o = this[--i];
				this[i] = [].concat(f.call(o, o, i), o);
			}
			this.sort(function (a, b) {
				for (var i = 0, len = a.length; i < len; ++i) {
					if (a[i] != b[i]) return a[i] < b[i] ? -1 : 1;
				}
				return 0;
			});
			for (var i = this.length; i;) {
				this[--i] = this[i][this[i].length - 1];
			}
			return this;
		};

		function FacetEngine(params) {
			this.PageSize = 15;
			this.MemberSortFunction = function () {
				return this.Name;
			};
			this.Facets = params.Facets;

			// initialize Facet Members
			for (f = 0; f < this.Facets.length; f++) {
				this.Facets[f].Members = [];
				this.Facets[f].FilteredIndices = [];
			}

			this.Objects = [];
			this.FilteredObjects = [];
			this.FilteredIndices = [];

			this.AddMember = function (name) {
				member_index = -1;

				for (fm = 0; fm < this.Facets[facet_index].Members.length; fm++) {
					if (this.Facets[facet_index].Members[fm].Name == name) {
						member_index = fm;
						break;
					}
				}

				if (member_index < 0) {
					member = {
						'Name': name,
						'Indices': [],
						'FilteredCount': 0,
						'ActiveCount': 0,
						'Selected': false
					};
					member_index = this.Facets[facet_index].Members.length;
					this.Facets[facet_index].Members.push(member);
				}

				return member_index;
			};

			this.Process = function (object) {
				object_index = this.Objects.push(object) - 1;

				for (facet_index = 0; facet_index < this.Facets.length; facet_index++) {
					membership = this.Facets[facet_index].binding(object);

					if (Array.isArray(membership)) {
						for (var i = 0; i < membership.length; i++) {
							member_index = this.AddMember(membership[i]);
							this.Facets[facet_index].Members[member_index].Indices.push(object_index);
							this.Facets[facet_index].Members[member_index].ActiveCount++;
						}
					} else {
						member_index = this.AddMember(membership);
						this.Facets[facet_index].Members[member_index].Indices.push(object_index);
						this.Facets[facet_index].Members[member_index].ActiveCount++;
					}
				}
			};

			this.sortFacetMembers = function (sort_function) {
				for (f = 0; f < this.Facets.length; f++) {
					this.Facets[f].Members.sortBy(this.MemberSortFunction);
					this.Facets[f].Members.reverse();
				}
			};

			this.GetCurrentFilter = function () {
				var filters = [];
				this.Facets.forEach(function (f, i) {
					f.Members.forEach(function (m, j) {
						if (m.Selected) {
							filters.push(i + "-" + j);
						}
					});
				});

				return filters;
			};

			this.GetMaxMemberLength = function (facet_index) {
				facet = this.Facets[facet_index];
				max_member_length = -1;

				for (m = 0; m < facet.Members.length; m++) {
					max_member_length = Math.max(facet.Members[m].Indices.length, max_member_length);
				}

				return max_member_length;
			};

			this.CurrentFilter = [];

			this.SetFilter = function (paths) {
				this.FilteredIndices = [];
				this.FilteredObjects = [];

				this.CurrentFilter = paths;

				// unselect all
				for (f = 0; f < this.Facets.length; f++) {
					// initialize facet level filtered indices
					this.Facets[f].FilteredIndices = [];

					for (m = 0; m < this.Facets[f].Members.length; m++) {
						this.Facets[f].Members[m].Selected = false;
					}
				}

				// marks members as selected
				for (p = 0; p < paths.length; p++) {
					path_data = paths[p].split('-');

					facet_member = this.Facets[path_data[0]].Members[path_data[1]];
					facet_member.Selected = true;
					for (var i = 0; i < facet_member.Indices.length; i++) {
						this.Facets[path_data[0]].FilteredIndices.push(facet_member.Indices[i]);
					}
				}

				// now facets have FilteredIndices and we need to intersect those arrays across facets
				initial = [];
				initial_facet = 0;

				intersection = [];

				// find initial facet with filtered indices
				for (f = 0; f < this.Facets.length; f++) {
					if (this.Facets[f].FilteredIndices.length > 0) {
						initial = this.Facets[f].FilteredIndices;
						initial_facet = f;
						break;
					}
				}

				// test each filtered index in initial set against all other facets
				for (fi = 0; fi < initial.length; fi++) {
					target = initial[fi];
					target_test = true;
					for (test_facet = initial_facet + 1; test_facet < this.Facets.length; test_facet++) {

						// skip if there are no indices filtered in this facet (no paths, no selected members)
						if (this.Facets[test_facet].FilteredIndices.length == 0) continue;

						if (this.Facets[test_facet].FilteredIndices.indexOf(target) > -1) {
							continue;
						} else {
							target_test = false;
							break;
						}
					}
					if (target_test) {
						intersection.push(target);
					}
				}

				for (var i = 0; i < intersection.length; i++) {
					this.FilteredObjects.push(this.Objects[intersection[i]]);
					this.FilteredIndices.push(intersection[i]);
				}

				// establish filtered counts for each facet member
				for (f = 0; f < this.Facets.length; f++) {
					for (mi = 0; mi < this.Facets[f].Members.length; mi++) {
						this.Facets[f].Members[mi].FilteredCount = 0;
						this.Facets[f].Members[mi].ActiveCount = 0;

						for (var i = 0; i < this.Facets[f].Members[mi].Indices.length; i++) {
							if (this.FilteredIndices.indexOf(this.Facets[f].Members[mi].Indices[i]) > -1) {
								this.Facets[f].Members[mi].FilteredCount++;
							}
						}

						this.Facets[f].Members[mi].ActiveCount = this.HasActiveFilter() ? this.Facets[f].Members[mi].FilteredCount : this.Facets[f].Members[mi].Indices.length;
					}
				}

				this.sortFacetMembers();
			};

			this.GetPage = function (page_number) {
				start = page_number * this.PageSize;
				end = start + this.PageSize;

				if (this.CurrentFilter.length > 0) {
					return this.FilteredObjects.slice(start, end);
				} else {
					return this.Objects.slice(start, end);
				}
			};

			this.GetCurrentObjectCount = function () {
				if (this.CurrentFilter.length > 0) {
					return this.FilteredObjects.length;
				} else {
					return this.Objects.length;
				}
			};

			this.HasActiveFilter = function () {
				return this.CurrentFilter.length > 0;
			};

			this.GetCurrentObjects = function () {
				if (this.CurrentFilter.length > 0) {
					return this.FilteredObjects;
				} else {
					return this.Objects;
				}
			};

			this.GetPageCount = function () {
				if (this.CurrentFilter.length > 0) {
					return Math.ceil(this.FilteredObjects.length / this.PageSize);
				} else {
					return Math.ceil(this.Objects.length / this.PageSize);
				}
			};
		}

		return FacetEngine;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
/******/ ]);