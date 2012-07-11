Ti.include('database.js');

var win = Ti.UI.currentWindow;
var xhr = Ti.Network.createHTTPClient();

var scrollView = Ti.UI.createScrollView({
	contentHeight: 'auto',
	layout: 'vertical',
	left: 10,
	bottom: 10,
	right: 10
})
win.add(scrollView);

var buttonFacebook = Ti.UI.createButton({
	width: 280,
	height: 35,
	top: 10,
	left: 10,
	title: 'Deel via Facebook'
})
scrollView.add(buttonFacebook);

buttonFacebook.addEventListener('click', function(e) {
	postToFacebook();
});

var buttonFav = Ti.UI.createButton({
	width: 280,
	height: 35, 
	top: 10,
	left: 10,
	added: 0,
	title: 'Voeg favoriet toe'
});
scrollView.add(buttonFav);

if(checkIfFavorite(win.artikelId).rowCount == 0) {
} else {
	buttonFav.added = 1;
	buttonFav.title = 'Verwijder favoriet';
}

buttonFav.addEventListener('click', function(e) {
	if(buttonFav.added == 0) {
		var newId = insertFavorite(win.artikelId, win.artikelTitel, win.artikelTekst, win.artikelFoto);
		alert('Dit artikel is toegevoegd aan je favorieten!');
		buttonFav.added = 1;
		buttonFav.title = 'Verwijder favoriet';
	} else {
		deleteFavorite(win.artikelId);
		alert('Dit artikel is verwijderd van je favorieten!');
		buttonFav.added = 0;
		buttonFav.title = 'Voeg favoriet toe';
	}
});

var labelTitel = Ti.UI.createLabel({
	text: win.artikelTitel,
	left: 0,
	top: 10,
	bottom: 10,
	height: 'auto',
	font: {fontSize: 20, fontWeight: 'bold'}
});
scrollView.add(labelTitel);

var imageFoto = Ti.UI.createImageView();
scrollView.add(imageFoto);

var labelArtikel = Ti.UI.createLabel({
	text: win.artikelTekst,
	left: 0,
	top: 10
});
scrollView.add(labelArtikel);

var imageUrl = "http://www.onezeromany.com/" + win.artikelFoto;
xhr.open('GET', imageUrl);
xhr.send();

xhr.onload = function() {
	imageFoto.image = this.responseData;
	imageFoto.width = 200;
};

function postToFacebook() {
	if(Ti.Facebook.loggedIn == false) {
		Ti.Facebook.appid = '256003534499132';
		Ti.Facebook.permissions = ['publish_stream'];
		
		Ti.Facebook.addEventListener('login', function(e){
			if(e.success) {
				alert('You are now logged in.');
			} else if(e.error) {
				alert('Error: ' + e.error);
			} else if(e.cancelled) {
				alert('Cancelled ' + e.cancelled);
			}
		});	
		Ti.Facebook.authorize();
	} else {
		var data = {
			message: "Ik heb net het artikel '" + win.artikelTitel + "' gelezen.",
			link: 'http://onezeromany.com/article.php?articleId=' + win.artikelId
		}
		Ti.Facebook.requestWithGraphPath('me/feed', data, "POST", function(e) {
			if(e.success) {
				alert("Succes! Artikel gedeeld op Facebook.")
			} else {
				alert("Er ging iets mis, probeer het nog eens.");
			}
		})
	}
}
