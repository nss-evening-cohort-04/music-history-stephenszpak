var songs = [{
	song :"Legs",
	artist : "ZZ Top",
	album : "Eliminator"
},
{
	song : "The Logical Song",
	artist : "Supertramp",
	album : "Breakfast in America"
},
{
	song : "Another Brick in the Wall",
	artist : "Pink Floyd",
	album : "The Wall"
},
{
	song : "Welcome to the Jungle",
	artist : "Guns & Roses",
	album : "Appetite for Destruction"
},
{
	song : "Ironic",
	artist : "Alanis Morisette",
	album : "Jagged Little Pill"
}];

var songInfo = ""
var outputSong = document.getElementById('songsPlay');

for (var i = 0; i < songs.length; i++) {
		var fullSong = songs[i]

		songInfo += "<article>";
			songInfo += "<section>";
			 	songInfo += "<div class='songs'>" + fullSong.song + " by " + fullSong.artist + " on the album " + fullSong.album + "</div>";
			songInfo += "</section>";
		songInfo += "</article>";

		outputSong.innerHTML = songInfo
	};

console.log(songs)
