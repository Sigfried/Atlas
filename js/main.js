requirejs(['bootstrap','aurelia-bootstrapper'], function (stub, aureliaBootstrap) { // bootstrap must come first
	requirejs(['knockout', 'app', 'appConfig', 'ohdsi.util', 'director', 'search', 'localStorageExtender', 'jquery.ui.autocomplete.scroll'], function (ko, app, config, util) 
	{
		aureliaBootstrap.bootstrap((aurelia) => {
			console.log('in bootstrap');
			aurelia.use
				.standardConfiguration()
				.developmentLogging()
				.plugin("aurelia-knockout");
			aurelia.start().then((a) => a.setRoot('app', document.body));
		});
	});
});
