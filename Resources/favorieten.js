Ti.include('database.js');

var win = Ti.UI.currentWindow;

win.addEventListener('focus', function () {
	getAndAddFavorites();
});

var tblFavorieten = Ti.UI.createTableView({
	height: 366,
	width: 320,
	top: 0,
	left: 0
});
win.add(tblFavorieten);

tblFavorieten.addEventListener('click', function(e){
	var selectedRow = e.rowData;
	var detailWindow = Ti.UI.createWindow({
		title: 'Artikel',
		backgroundColor: '#fff',
		url: 'detail.js'
	});
	
	detailWindow.artikelId = selectedRow._id;
	detailWindow.artikelTitel = selectedRow._titel;
	detailWindow.artikelTekst = selectedRow._tekst;
	detailWindow.artikelFoto = selectedRow._foto;
	
	Ti.UI.currentTab.open(detailWindow);
});

function getAndAddFavorites() {
	var data = [];
	var rows = getFavorites();

	while(rows.isValidRow()) {
		var row = Ti.UI.createTableViewRow({
				hasChild: true,
				className: 'article-row',
				_id: rows.fieldByName('artikel_id'),
				_titel: rows.fieldByName('artikel_titel'),
				_tekst: rows.fieldByName('artikel_tekst'),
				_foto: rows.fieldByName('artikel_foto')
			});
			
			var titleLabel = Ti.UI.createLabel({
				text: row._titel,
				height: 36,
				font: {fontSize: 18},
				left: 10
			});
		row.add(titleLabel);	
		data.push(row);
		rows.next();
	}
	tblFavorieten.data = data;	
}