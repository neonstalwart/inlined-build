define([
	'dojo/_base/declare',
	'dijit/_WidgetBase',
	'dijit/_TemplatedMixin',
	'dojo/text!./templates/App.html'
], function (declare, Widget, Templated, template) {
	return declare([Widget, Templated], {
		templateString: template
	});
});
