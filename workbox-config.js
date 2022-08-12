module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{png,js,html,md,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};