"use strict";
define(['knockout', 'text!./vocab-experiment.html', 'ohdsi.util',
	      'react', 'react-dom', 
	      'jsx!reactFiles/vocab', 'databindings/domEl',
	      //'knockout.dataTables.binding', 'components/faceted-datatable-cf'
	      ], 
			 function (ko, view, util, React, ReactDom, Test) {
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
		self.ready = ko.computed(function() {
			return  (
							//self.chartObj() && 
							//self.chartData().length && 
							self.domEl() 
			)
		});
		self.ready.subscribe(function(ready) {
			if (ready) {
				//initChart();
				/*
				ReactDom.render(self.reactTest, 
												//document.getElementById('react-root-test'),
												self.domEl(),
												function() {
													console.log('reactCB', arguments);
												});
				*/
			}
		});
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
