define(['knockout'], function (ko) {
	ko.bindingHandlers.domEl = {
		init: function (element, valueAccessor) {
			var va = ko.utils.unwrapObservable(valueAccessor());
			va.domEl(element);
			return { controlsDescendantBindings: true };
		},
	};
});
