var bindclick;

$(document).ready(function() {


  $("#owl-demo").owlCarousel({
    jsonPath : 'http://pure-gorge-4988.herokuapp.com/getallmymonsters/' + localStorage.id,
    jsonSuccess : customDataSuccess,
    afterInit : loadClicksToimages
  });
 
  function customDataSuccess(data){
    var content = "";
    localStorage.monsters = JSON.stringify(data);
    for(var i in data){
       
       var img = data[i].picture;
       var alt = data[i].name;
       var id = data[i].monsterid;
 
      content += "<img src=\"" +img+ "\" id=\"" + id + "\"alt=\"" +alt+ "\">"
    }

    $("#owl-demo").html(content);
  }
 
   function loadClicksToimages(){


    // get all the images from the scroll bar at bottom
    var childs = $('.owl-wrapper').children();
    // for each image figure out what to show when we click
    $.each(childs, function(key, val){
      $(this).click(function(data){
        var monstername = val.children[0].alt; // name of the monster. ROAR!!!
        var id = val.children[0].id;           // this is used to get the right image from the server
        var imagePath =  "https://s3-ap-southeast-2.amazonaws.com/nwen304-assets/monsterimages/monsterboxes/monsterbox-" + id + ".png"; // path for the popup image

        // parameters for the slide
        var effect = 'slide';
        var options = { direction: 'down' };
        var duration = 300;


         /* ******************
           * MONSTER IS VISIBLE 
           *
           ********************/

        if(  $('#MonsterProfile').is(":visible") ){
          // if the monster clicked on is already visible then we want to hide the monster on screen 
          var monsterProfileChildren = $('#MonsterProfile').children().children(); // this gets the image that is inside the ul inside the div
          if(monsterProfileChildren.attr('id')===id ){
            // IF IMAGE CLICKED on is the same image on screen then we close the monster profile
            $('#MonsterProfile').toggle(effect, options, duration); 
           
          }else{
            // else the image on screen is different from the one clicked on

            // if the monster is on screen we want it to slide of screen and
            // then the new image slides back on screen

            // hide image
            $('#MonsterProfile').toggle(effect, options, duration); 
            // change image
            $('.monster-profile-image').attr("src", imagePath);
            $('.monster-profile-image').attr("id", id); // id so we can tell which one is on screen
            // show new image
            $('#MonsterProfile').toggle(effect, options, duration);
            //  $('.monster-profile-image').click(function(){

            //   alert("My name is " + id);
            // });
          }

        }else{  
            /* ******************
             * MONSTER IS HIDDEN 
             *
             ********************/

            // monster is hidden and we want to show it
            $('.monster-profile-image').attr("src", imagePath);
            $('.monster-profile-image').attr("id", id);
            $('#MonsterProfile').toggle(effect, options, duration);
 
        }
        
      })
    });
  }

  if(!localStorage.name){
    // If you are not signed in
    // localStorage.user = "";
    // alert("you must sign in");
    $('#logOut').hide();
    showSignin();
  }else{

    showMainPage();
  }

  function showSignin() {
    hideNav(); // hide the side bar  and bottom nav bar
    $('#gsempty').hide();  //  
    $('#signin').show();
    $('Signinpage').show();
    $('#BG').hide();
    $('#creatureArea').hide();
    $('#interactionbox').hide();
    $('#infobox').hide();
    $('#alertBoxList').hide();
  }
  
  function showMainPage() {
    $('#BG').show();  
    $('#signin').hide();
    $('#Signinpage').hide();
    $('#gsempty').show();
    $('#logOut').show();
    $('#creatureArea').show();
    $('#alertBoxList').show();

    showNav();
  }


 
  /**
  * 
  * Nav hide and show
  */
  function showNav(){
    $('#Nav').show();
    $('#botScroll').hide();
    
    // $('#BG2').show();
  }

    $('#logOut').click(function(){
    $('#logOut').hide();
    localStorage.name = "";
    location = "index.html";


  })

  function hideNav(){
    $('#Nav').hide();
    $('#botScroll').hide();         /* == SET TO HIDE FOR WHEN LOGGED IN DOESN'T SHOW STRAIGHT AWAY == */

    $('#BG').hide();
  }


  /***
   *  sign in function
   */
  $('#login').bind( "click", function(event, ui) {
    var username = $("input#name").val();
    var password = $("input#password").val();  

    // alert("Singing in");


    var jsonUrl = "http://pure-gorge-4988.herokuapp.com/signin";
    // var dataToUpload = JSON.stringify({ name: username, password : password });
    var dataToUpload = {name: username, password: password};
    // console.log(dataToUpload);

    $.post(jsonUrl, dataToUpload, function(data) {
        
          if(data.id && data.name ){
            showMainPage();
            // $('#result').append("Hi " + data.name +  "<br> Your id number is : " + data.id);  
          localStorage["name"] = data.name;
          localStorage["id"] = data.id;
          localStorage["password"] = password;
              
      }
            // if(localStorage){
            //   var json = { id:data.id, name: data.name};
            //   localStorage.setItem("user", JSON.stringify(json)) ;
            // }
      }, 'json');


    });
    $('#creatureArea').click(function(){
    window.location.replace('creatureArea.html');
});

        $('#creatureArea2').click(function(){
    window.location.replace('creatureArea2.html');
});

  $('#foundMonsterimage').click(function(){
    var monsterName = $(this).attr('class');
    $('#FoundMonster').hide(); // just for now NOTE: its the container div not the image. 
  });
  

});