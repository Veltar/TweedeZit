var tabGroup = Ti.UI.createTabGroup();

var win1 = Ti.UI.createWindow({
	height: 480,
	width: 320,
	backgroundColor: '#fff',
	top: 0,
	left: 0,
	title: 'Artikels',
	url: 'artikels.js'
});

var tab1 = Ti.UI.createTab({
	window: win1,
	icon: 'img/article.png',
	title: 'Artikels'
});

var win2 = Ti.UI.createWindow({
	height: 480,
	width: 320,
	backgroundColor: '#fff',
	top: 0,
	left: 0,
	title: 'Favorieten',
	url: 'favorieten.js'
});

var tab2 = Ti.UI.createTab({
	window: win2,
	icon: 'img/heart.png',
	title: 'Favorieten'
});

tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.open();