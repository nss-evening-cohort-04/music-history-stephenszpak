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

var addSong = document.getElementById('addSongButton');

var outputSong = document.getElementById('songsPlay');

function songText (e) {
	var songInfo = "";
	for (var i = 0; i < songs.length; i++) {
		var fullSong = songs[i]

		songInfo += "<article>";
			songInfo += "<section>";
			 	songInfo += "<div class='song-name'>" + fullSong.song + " by " + fullSong.artist + " on the album " + fullSong.album + "</div>";
			songInfo += "</section>";
		songInfo += "</article>";

		outputSong.innerHTML = songInfo
	};
};

addSong.addEventListener("click", function () {
	var userSubmitSong = document.getElementById('enteredSong');
	var userSubmitAlbum = document.getElementById('enteredAlbum');
	var userSubmitArtist = document.getElementById('enteredArtist');
	var newSong = songs.push({song : userSubmitSong.value, artist : userSubmitArtist.value, album : userSubmitAlbum.value});

	songText(newSong)	
});

