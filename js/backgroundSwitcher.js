function checkTime() {
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Wellington%2Cnz",
		function(data){
			/* SET BACKGROUND BASED ON TIME */
			var currentTime = Date.now().toString().slice(0,10);
			currentTime = parseInt(currentTime);

			var bgimgurl = '<img src="img/IslandDay.jpg">'
			if(currentTime > data.sys.sunrise) {
				bgimgurl = '<img src="img/IslandDay.jpg">';
			}
			if(currentTime > data.sys.sunset) {
				bgimgurl = '<img src="img/Islandsunset.jpg">';
			}
			if(currentTime > data.sys.sunset + 1800) {
				bgimgurl = '<img src="img/nightisland.png">'
			}
			$('#BG').html(bgimgurl);
		});
}

checkTime(); // Check time once and set background on page load
setInterval(checkTime, 180000); // 1800000 = check the time every 30 minutes