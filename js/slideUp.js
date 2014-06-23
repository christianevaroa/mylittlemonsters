$(document).ready(function() {
	$("#MyMonsters").click(function() {


 	var effect = 'slide';
 	var options = { direction: 'down' };
 	var duration = 300;


 $("#botScroll").toggle(effect, options, duration);




		  // $("#botScroll").slideToggle("slow");

	});

	$("#Monsters").click(function() {


 	var effect = 'slide';
 	var options = { direction: 'up' };
 	var duration = 300;


 $("#MyProfile").toggle(effect, options, duration);





		  // $("#botScroll").slideToggle("slow");

	});

	$('#MyMonsters').click(function(){
		$('#MonsterProfile').fadeOut('fast');
	});


// $('#clickimgswap').click(function(e){
//         if($(this).hasClass('fade')){
//             $('#interactionbox img.interaction').fadeOut();
//             $('#infobox img.info').fadeIn();
//         } else {
//             $('#interactionbox img.interaction').fadeIn();
//             $('#infobox img.info').fadeOut();
//         }
//         e.preventDefault();
//     });

    $('#clickimgswap').click(function(){
        $(".fade").fadeToggle("slow");
        // $(".fade2").fadeToggle("slow");
    });

    $('#clickimgswap2').click(function(){

        $(".fade3").fadeToggle("slow");
    });

});


