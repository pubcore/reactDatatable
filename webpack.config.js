module.exports = {
	mode:'production',
	entry: './js/view/Datatable.js',
	output: {
		path: __dirname + '/dist',
		filename: 'Datatable.js',
		libraryTarget: 'var',
		library: 'Datatable',
		libraryExport: 'default'
	}
}
