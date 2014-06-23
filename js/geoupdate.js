setInterval(getLoc, 30000);

function onSuccess(position) {
  localStorage.latitude = position.coords.latitude;
  localStorage.longitude = position.coords.longitude;
  if(localStorage.id != "" && localStorage.id != undefined){
    var JSONurl = "http://pure-gorge-4988.herokuapp.com/getmonster/"+localStorage.id+"/"+localStorage.latitude+"/"+localStorage.longitude;
    $.getJSON(JSONurl, function(data) {
      if(data.name != "fail") {
        // You caught a monster, inform the user somehow
        alert("you caught "+data.name);
      }
    });
  }
}
function onError(error) {
    console.log("error: "+error);
}
function getLoc() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError,{timeout:15000,maximumAge:60000,enableHighAccuracy:true});
}

function distance (lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = (lat2 - lat1) * Math.PI / 180;
  var dLon = (lon2 - lon1) * Math.PI / 180;
  var a = 
  0.5 - Math.cos(dLat)/2 + 
  Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
  (1 - Math.cos(dLon))/2;

  return R * 2 * Math.asin(Math.sqrt(a));
}

getLoc();