let team1 = 0;
let team2 = 0;
let play1 = 0;
let play2 = 0;
let mySet = setPoint();

function plus(points){
    if (points == 1){
        team1 += 1
        if(team1 == 0){
            document.getElementById('score1').innerHTML = '00';
        } else if (team1 < 10 && team1 > 0){
            document.getElementById('score1').innerHTML = '0'+ team1;
        } else if (team1 >= 25){
            team1 = 25
            setPoint(1);
            document.getElementById('score1').innerHTML = team1;
        } else{
            document.getElementById('score1').innerHTML = team1;
        }
    } else if (points == 2){
            team2 += 1
        if(team2 == 0){
            document.getElementById('score2').innerHTML = '00';
        } else if (team2 < 10 && team2 > 0){
            document.getElementById('score2').innerHTML = '0'+ team2;
        } else if (team2 >= 25){
            setPoint(2);
            team2 = 25
            document.getElementById('score2').innerHTML = team2;
        } else{
            document.getElementById('score2').innerHTML = team2;
        }
    }    
}

function minus(points){
    if (points == 1 ){
            team1 -= 1
        if (team1 == 0){
            document.getElementById('score1').innerHTML = '00';  
        }else if (team1 < 0){
            team1 = 0;
            document.getElementById('score1').innerHTML = '00';  
        }else if (team1 < 10 && team1 > 0){
            document.getElementById('score1').innerHTML = '0'+ team1;
        } 
        else if (team1 > 25){
            team1 = 25;            
            document.getElementById('score1').innerHTML = '25';
        } else {
            document.getElementById('score1').innerHTML = team1;
            setPoint(1);
        }
    } else if (points == 2){
            team2 -= 1
        if (team2 == 0){
            document.getElementById('score2').innerHTML = '00';  
        }else if (team2 < 0){
            team2 = 0;
            document.getElementById('score2').innerHTML = '00';  
        }else if (team2 < 10 && team2 > 0){
            document.getElementById('score2').innerHTML = '0'+ team2;
        } 
        else if (team2 > 25){
            team2 = 25;            
            document.getElementById('score2').innerHTML = team2;
        } else {            
            document.getElementById('score2').innerHTML = team2;      
        }
    }
}

/*
function set(here){
    if (here == 1){
        play1 += 1
        if (play1 > 5){
            play1 = 5
            document.getElementById('set1').innerHTML = play1
        } else if (play1 < 0){
            play1 = 0
            document.getElementById('set1').innerHTML = play1
        } else {
            document.getElementById('set1').innerHTML = play1
        }
    } else if (here == 2){
        play2 += 1
        if (play2 > 5){
            play2 = 5
            document.getElementById('set2').innerHTML = play2
        } else if (play2 < 0){
            play2 = 0
            document.getElementById('set2').innerHTML = play2
        } else {
            document.getElementById('set2').innerHTML = play2
        }
    }
       
} 
*/

function setPoint(game){
    if (game == 1){
        play1 +=1;
        team1 = 0;
        document.getElementById('set1').innerHTML = play1;
        document.getElementById('score1').innerHTML = '00';
    } else if (game == 2){
        play2 +=1;
        team2 = 0;
        document.getElementById('set2').innerHTML = play2;
        document.getElementById('score1').innerHTML = '00';
    }
}

function reset(){
    var r = confirm('Are you sure you want to reset the score?');
    if (r == true){
        team1 = 0;
        team2 = 0;
        play1 = 0;
        play2 = 0;
        document.getElementById('set2').innerHTML = play2;
        document.getElementById('set1').innerHTML = play1;
        document.getElementById('score2').innerHTML = '00';
        document.getElementById('score1').innerHTML = '00'; 
    }
    
}
