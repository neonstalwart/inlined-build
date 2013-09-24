var profile = {
	basePath: 'src',
	action: 'release',
	cssOptimize: 'comments',
	mini: true,
	optimize: 0,
	layerOptimize: 'closure',
	stripConsole: 'all',
	selectorEngine: 'acme',
	packages: [
		'dojo',
		'dijit',
		'app'
	],
	layers: {
		'dojo/dojo': {
			include: [
				'dojo/request/xhr',
				'app/App'
			],
			boot: true,
			customBase: true
		},
	},
	staticHasFeatures: {
		'dojo-trace-api': 0,
		'dojo-log-api': 0,
		'dojo-publish-privates': 0,
		'dojo-sync-loader': 0,
		'dojo-xhr-factory': 0,
		'dojo-test-sniff': 0
	}
};
