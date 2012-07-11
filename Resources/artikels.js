var win = Ti.UI.currentWindow;
var data = [];
var xhr = Ti.Network.createHTTPClient();

var tblArtikels = Ti.UI.createTableView({
	height: 366,
	width: 320,
	top: 0,
	left: 0
});
win.add(tblArtikels);

tblArtikels.addEventListener('click', function(e){
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

xhr.onload  = function() {
	var xml = this.responseXML;
	var artikels = xml.documentElement.getElementsByTagName("artikel");
	
	for(var i = 0; i < artikels.length; i++) {
		
		var row = Ti.UI.createTableViewRow({
			hasChild: true,
			className: 'article-row',
			_id: artikels.item(i).getElementsByTagName("id").item(0).text,
			_titel: artikels.item(i).getElementsByTagName("titel").item(0).text,
			_tekst: artikels.item(i).getElementsByTagName("tekst").item(0).text,
			_foto: artikels.item(i).getElementsByTagName("foto").item(0).text
		});
		
		var titleLabel = Ti.UI.createLabel({
			text: row._titel,
			height: 36,
			font: {fontSize: 18},
			left: 10
		});
		row.add(titleLabel);
		
		data.push(row);
	}
	tblArtikels.data = data;
}

xhr.onerror = function() {
	Ti.API.info(this.responseText);
}

xhr.open('GET', 'http://onezeromany.com/php/getArticles.php');

xhr.send();
