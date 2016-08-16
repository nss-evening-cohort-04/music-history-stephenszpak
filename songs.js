var songs = [{
	song :"Legs",
	artist : "ZZ Top",
	album : "Eliminator",
},
{
	song : "The Logical Song",
	artist : "Supertramp",
	album : "Breakfast in America",
},
{
	song : "Another Brick in the Wall",
	artist : "Pink Floyd",
	album : "The Wall",
},
{
	song : "Welcome to the Jungle",
	artist : "Guns & Roses",
	album : "Appetite for Destruction",
},
{
	song : "Ironic",
	artist : "Alanis Morisette",
	album : "Jagged Little Pill",
}];

for (var i = 0; i < songs.length; i++) {
	var songString = "<h2 id="songName" class="song-name">"
			songString += "<h2 id="songName" class="song-name">" + songs[i].song + "</h2>";

			songString += "</h2>"
			document.getElementById("songsPlay").innerHTML += songString;
};

console.log(songs)

songs[songs.length] = "Legs - by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song - by Supertramp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall - by Pink Floyd on the album The Wall";
songs[songs.length] = "Welcome to the Jungle - by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironic - by Alanis Moris*ette on the album Jagged Little Pill";