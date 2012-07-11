var db = Ti.Database.open('mydb2');
db.execute('create table if not exists favorites (pk integer primary key autoincrement, artikel_id integer, artikel_titel text, artikel_tekst text, artikel_foto text)');

function insertFavorite(id, title, text, image) {
	var sql = "insert into favorites(artikel_id, artikel_titel, artikel_tekst, artikel_foto) values (?,?,?,?)";
	db.execute(sql,id,title,text,image);
}

function deleteFavorite(id) {
	var sql = "delete from favorites where artikel_id = " + id;
	db.execute(sql);
}

function checkIfFavorite(id) {
	var sql = "select pk from favorites where artikel_id = " + id;
	return db.execute(sql);
}

function getFavorites() {
	var sql = "select * from favorites";
	return db.execute(sql);
}
