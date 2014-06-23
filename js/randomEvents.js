    setInterval(function(){
          if(!localStorage.name){
             return;
           }
        // if(localStorage.)

        // alert("i will eat you");
        if(Math.random() < 1) {
            var monsterlist = JSON.parse(localStorage.monsters);
            var firstMonster = monsterlist[randomInt(monsterlist.length)].name;
            var secondMonster = monsterlist[randomInt(monsterlist.length)].name;
            while(secondMonster == firstMonster) {
                var secondMonster = monsterlist[randomInt(monsterlist.length)].name;
            }
            localStorage.firstMonster = firstMonster;
            localStorage.secondMonster = secondMonster;

            $('#alertBox').fadeIn('slow');

        }
    }, 5000); // 60000 = run every 10 minutes



function randomInt(max) {
    return Math.floor(Math.random() * max);
}