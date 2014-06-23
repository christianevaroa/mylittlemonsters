   
var grobersDate = 0;
var blobsickDate = 0;
var alertBoxes = [];
var alertQueue = [];

    setInterval(function(){
          if(!localStorage.name){
             return;
           }
      
        if(Math.random() < 1) {
            if(grobersDate==0){
                grobersDate= Date.now();

                var newdiv = $("<div/>", {
                    "class": "alertBox",
                    "id": "alertBox1"
                });
                // console.log(newdiv);
                // $('#alertBoxList').append(" ")
                newdiv.prepend('<a href="headsuck.html"><img id="alertBoxImage-1" src="img/updatedox.png" ></a>');
                newdiv.appendTo('#alertBoxList');

                 $('#alertBox1').fadeIn('slow');
            }else {
                var now = Date.now();

                if( now - grobersDate > 6000 ){

                    $('#alertBox1').fadeOut('slow');
                    grobersDate = 0; // reset to 0;
                    $('#alertBox1').remove();
                   
                }
            }
        }

    }, 5000); // 60000 = run every 10 minutes

    setInterval(function(){
        if(Math.random() < 1){
            if(blobsickDate==0){
                blobsickDate= Date.now();

                var newdiv = $("<div/>", {
                    "class": "alertBox",
                    "id": "alertBox2"
                });

                newdiv.prepend('<a href="blobsickpage.html"><img id="alertBoxImage-2" src="img/blobupdate.png" ></a>')
                newdiv.appendTo('#alertBoxList');

                $('#alertBox2').fadeIn('slow');
            }else{
                var now = Date.now();
                if( now - blobsickDate > 10000){

                    $('#alertBox2').fadeOut('slow');
                    blobsickDate = 0;
                }
            }
        }
    }, 6000);




function randomInt(max) {
    return Math.floor(Math.random() * max);
}


