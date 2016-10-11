
requirejs(['bootstrap','aurelia-bootstrapper'], 
	function (stub, aureliaBootstrap) { // bootstrap must come first
		var d3 = require('d3');
		window.d3;	// having problems later (with app getting d3)
		console.log(d3.version);
		aureliaBootstrap.bootstrap((aurelia) => {
			console.log('in bootstrap');
			aurelia.use
				.standardConfiguration()
				.developmentLogging()
				.plugin("aurelia-knockout");
			aurelia.start().then((a) => a.setRoot('app', document.body));
		});
	});
