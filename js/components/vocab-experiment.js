"use strict";
define(['knockout', 'text!./vocab-experiment.html', 'supergroup', 'ohdsi.util','react', 'react-dom', 'jsx!reactFiles/vocab', 'databindings/domEl','knockout.dataTables.binding', 'components/faceted-datatable-cf'], 
			 function (ko, view, _, util, React, ReactDom, Test) {
	function vocabExperiment(params) {
		var self = this;
		if (params.controller) {
			params.controller(this);
		}

		self.model = params.model;
		/*
		class ConceptExplorer {
			constructor(opts, jqEventSpace) {
				this.opts = opts;
				this.jqEventSpace = jqEventSpace;
			}
			chartSetup(domEl, w, h, opts, fields, recId) {
				console.log(arguments);
			}
			render(data, domEl, w, h, opts) {
				console.log(arguments);
				var sg = _.supergroup(data, ['DOMAIN_ID','VOCABULARY_ID','CONCEPT_CLASS_ID']);
				console.log(sg.flattenTree().namePaths());
				var test = React.createElement(Test);
				ReactDom.render(test, domEl);
				//debugger;
			}
		}
		*/

		self.search = { status: 'init', };
		self.domEl = ko.observable();
		if (self.domEl()) {
			renderStuff(self.search);
		}
		self.domEl.subscribe(function() {
			renderStuff(self.search);
		});
		function renderStuff(props) {
			var comp = ReactDom.render(
									React.createElement(Test, props),
									self.domEl(),
									function() {
										console.log('reactCB', arguments);
									});
		}

		//self.chartConstructor = ConceptExplorer;
		self.chartOptions = chartOptions();
		self.chartResolution = ko.observable(); // junk
		self.chartObj = ko.observable();
		self.chartData = ko.observableArray(self.chartData && self.chartData() || []);
		self.messages = ko.observable('no results');

		self.ready = ko.computed(function() {
			return  self.chartObj() && 
							self.chartData().length && 
							self.domElement() 
		});
		self.ready.subscribe(function(ready) {
			if (ready) {
				initChart();
			}
		});
		var initChart = _.once(function() {
					var opts = _.merge(self.chartObj().defaultOptions, self.chartOptions);
					var fields = _.chain(opts)
												.toPairs()
												.sortBy(d=>_.has(d[1], 'bindOrder') ? d[1].bindOrder : 1000)
												.filter(d=>d[1].isField)
												.map(([name,opt] = []) => {
													if (!(opt instanceof util.Field)) {
														opt = new util.Field(name, opt, opts);
													}
													opt.bindParams({data:self.chartData()}, false);
													return opts[name] = opt;
												})
												.value();
					ReactDom.render(self.reactTest, self.domEl(),
													function() {
														console.log('reactCB', arguments);
													});
					//self.fields(fields);
					//self.chartObj().chartSetup(self.domElement(), 460, 150, opts, fields, self.recId);
					//self.chartObj().render(self.chartData(), self.domElement(), 460, 150, opts);
				});

		self.advancedQuery = ko.observable('');
		self.initialized = false;
		self.vocabularies = ko.observableArray();
		self.domains = ko.observableArray();
		self.tabMode = self.model.searchTabMode;

		self.state = ko.computed(function() {
			var [module, operation, query] = params.model.router.getRoute();
			return {operation, query};
		});
		self.state.subscribe(function() {
			var {operation, query} = self.state();
			if (operation === 'search')
				self.executeSearch(query);
		});

		self.model.currentSearch.subscribe(function (query) {
			debugger;
			if (self.model.currentSearch().length > 2) {
				document.location = '#/vocab-experiment/' + escape(query);
			}
		});

		self.tabMode.subscribe(function (value) {
			switch (value) {
			case 'advanced':
				if (!self.initialized) {

					var vocabularyDeferred = util.cachedAjax({
						url: self.model.vocabularyUrl() + 'vocabularies',
						success: function (data) {
							debugger;
							self.vocabularies(data);
						}
					});

					var domainDeferred = util.cachedAjax({
						url: self.model.vocabularyUrl() + 'domains',
						success: function (data) {
							debugger;
							self.domains(data);
						}
					});

					$.when([vocabularyDeferred, domainDeferred]).done(function () {
						self.initialized = true;
					});
				}
				break;
			}
		});

		self.executeSearch = function (query) {
			self.search = _.extend(self.search, { query, status: 'launching', });
			util.cachedAjax({
				url: self.model.vocabularyUrl() + 'search/' + escape(query),
				success: function (results) {
					self.search.status = 'got results';
					self.search.concepts = results;
					self.handleSearchResults(self.search);
					renderStuff(self.search);
				},
				error: function (xhr, message) {
					alert('error while searching ' + message);
				}
			});
		}

		self.promiseQueue = new util.PromiseQueue(2);
		self.handleSearchResults = function (search) {
			if (search.concepts.length == 0) {
				$('#modalNoSearchResults').modal('show');
				return;
			}

			self.messages(`${search.query}: ${search.concepts.length}`);
			var densityPromise = self.model.loadDensity(search.concepts);

			$.when(densityPromise).done(function () {
				self.search.status = 'got density';
				renderStuff(self.search);
				//debugger;
				self.model.searchResultsConcepts(search.concepts);
				var relatedConceptSearchFuncs = search.concepts.map(
					(searchConcept,i) => {
						return () => self.getRelated(searchConcept.CONCEPT_ID)
										.then(function(related) {
											self.search.status = `got related for concept ${i}`;
											searchConcept.relatedConcepts = related;
											renderStuff(self.search);
											return searchConcept;
										})
					});
				var conceptPromises = self.promiseQueue.addFuncs(relatedConceptSearchFuncs);
				window.junk = conceptPromises;
				renderStuff({'promises': conceptPromises});
				$.when(...conceptPromises)
					.then(
						()=>{ 
									self.search.status = 'success';
									renderStuff(self.search);
						},
						()=>{ 
									self.search.status = 'failed';
									renderStuff(self.search);
						}
						//function(...conceptPromises) { self.chartData(searchConcepts); }, // success
						//function(...conceptPromises) { self.chartData(searchConcepts); } // failure
					);
				setTimeout(() => self.promiseQueue.flush(), 55000);
			});
		}

		self.renderConceptSelector = function (s, p, d) {
			var css = '';
			var icon = 'fa-shopping-cart';

			if (self.model.selectedConceptsIndex[d.CONCEPT_ID] == 1) {
				css = ' selected';
			}
			return '<i class="fa ' + icon + ' ' + css + '"></i>';
		}
		self.getRelated = function (conceptId) {
			var promise = $.Deferred();
			return util.cachedAjax({
					url: self.model.vocabularyUrl() + 'concept/' + conceptId + '/related',
					method: 'GET',
					contentType: 'application/json',
				})
			/*
			var countsPromise = relatedPromise.then(function(related) {
					var ids = related
											.filter(c=>_.includes(['Standard','Classification'],
																						c.STANDARD_CONCEPT_CAPTION))
											.map(c=>c.CONCEPT_ID);
					return util.cachedAjax({
						url: self.model.resultsUrl() + 'conceptRecordCount',
						method: 'POST',
						contentType: 'application/json',
						timeout: 1000,
						data: JSON.stringify(ids),
						error: function(error) {
						}
					});
				})
			// load related concepts once the concept is loaded
			$.when(conceptPromise, relatedPromise, countsPromise)
				.then(function(concept, related, counts) {
					promise.resolve({conceptId, concept, related, counts});
				});
			$.when(conceptPromise, relatedPromise)
				.then(function(concept, related) {
					concept.related = related;
					promise.resolve(concept);
				});
			return promise;
			*/
		}
		self.state.notifySubscribers();
	}

	var component = {
		viewModel: vocabExperiment,
		template: view
	};

	ko.components.register('vocab-experiment', component);
	return component;

	function chartOptions() {
		var junk = 1;
		return {
		};
	}
});
