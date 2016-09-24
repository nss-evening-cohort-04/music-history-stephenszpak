
$(document).ready(function() {

	let $showTitle = $("#songsPlay");
	let $showMore = $("#moreSongs");
	let userSubmitSong = $("#enteredSong");
	let userSubmitArtist = $("#enteredArtist");
	let userSubmitAlbum = $("#enteredAlbum");
	
	//load XHR JSON
	$.ajax({
		url: "songs.json"
	}).done(getSongs);

	$.ajax({
		url: "moreSongs.json"
	}).done(addMoreSongs);

	// Toggle the "more songs" button
	let $toggle = $("#toggle");
	$toggle.click(function () {
		$showMore.toggle();  			
	});

	//User Add Song Event
	$("#addSongButton").click(function(userInput, yello, mello) {
		let newSong = userSubmitSong.val();
		let newArtist = userSubmitArtist.val();
		let newAlbum = userSubmitAlbum.val()

		$showTitle.append(`<div> ${newSong} by ${newArtist} on the album ${newAlbum} </div>`);
	});

	//Getting songs from Json
	function getSongs(songData) { 
		console.log("SongDataObj", songData);
		let songs = songData.songs;

    	$.each(songs, (key, song) => {
      		$showTitle.append(`<div>${song.song} by ${song.artist} on the album ${song.album}</div>`);
    	});
	};

	//Getting More Songs from Json
	function addMoreSongs(moreSongs) {
		let getMoreSongs = moreSongs.songs;
		$.each(getMoreSongs, (key, song) => {
			$showMore.append(`<div>${song.song} by ${song.artist} on the album ${song.album}</div>`);
		});
	};

});




