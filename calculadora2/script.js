
//Function Day and Night Mode
var day
function changeMode(){
    if( day == undefined || day == true){
        day = false;
        var x = document.getElementById("grid");
        var z = x.getElementsByClassName("button");
        var i;
        for (i = 0; i < z.length; i++) {
            z[i].style.backgroundColor = "white";
            z[i].style.boxShadow = '1px 1px 5px 2px rgb(0 0 0 / 10%)';
            z[i].style.border = '1px solid white'
        }
        var y = x.getElementsByClassName("number");
        for (i = 0; i < y.length; i++) {
            y[i].style.color = 'rgba(0, 0, 0, 0.818)';
        }
        document.getElementById('btn17').style.boxShadow = 'inset 1px 1px 7px 2px rgb(0 0 0 / 11%)'
        document.getElementById('main-container').style.backgroundColor = 'white';
        document.getElementById('display').style.color = '#414141';
    } else if (day == false){
        day = true;
        var x = document.getElementById("grid");
        var z = x.getElementsByClassName("button");
        var i;
        for (i = 0; i < z.length; i++) {
            z[i].style.backgroundColor = "rgb(34, 33, 33)";
            z[i].style.boxShadow = '4px 4px 9px 1px rgb(0 0 0 / 31%)';
            z[i].style.border = '1px solid rgba(68, 68, 68, 0.200)'
        }
        var y = x.getElementsByClassName("number");
        for (i = 0; i < y.length; i++) {
            y[i].style.color = 'rgba(255, 255, 255, 0.705)';
            
          
        }
        document.getElementById('btn17').style.boxShadow = 'inset 1px 1px 7px 2px rgb(0 0 0 / 11%)'
        document.getElementById('display').style.color = 'white';
        document.getElementById('main-container').style.backgroundColor = 'rgb(34, 33, 33)';

    }

  
}

var typed = '';
var firstNum = '';
var secondNum = '';
var total;
var equacao = ''
var temp = ''

function ac(){
    document.getElementById('display').innerHTML ='0'
    typed = '';
    firstNum = '';
    secondNum = '';
    total = 0;
    equacao = '';
}

function display(key){
    typed += key
    document.getElementById('display').innerHTML = typed;
    console.log('Typed = '+typed);
}

function plus(){
    equacao = '+'
    if (firstNum == ''){
        firstNum = typed;
        typed = '';
        console.log('Typed = '+ typed);
        console.log('FirstNum = '+ firstNum);
        console.log('secondNum = '+ secondNum);
    }else{
        secondNum = typed;
        total = parseInt(firstNum) + parseInt(secondNum);
        firstNum = total;
        typed = '';
        document.getElementById('display').innerHTML = total;
        secondNum = ''
        console.log('Typed = '+ typed);
        console.log('FirstNum = '+ firstNum);
        console.log('secondNum = '+ secondNum);
        
    }
}

function minus(){
    
            equacao = '-'
        if (firstNum == ''){
            firstNum = typed;
            typed = '';
            console.log('Typed = '+ typed);
            console.log('FirstNum = '+ firstNum);
            console.log('secondNum = '+ secondNum);
        }else{
            secondNum = typed;
            temp = secondNum;
            total = parseInt(firstNum) - parseInt(secondNum);
            firstNum = total;
            typed = '';
            document.getElementById('display').innerHTML = total;
            secondNum = 0
            console.log('Typed = '+ typed);
            console.log('secondNum = '+ secondNum);
            console.log('FirstNum = '+ firstNum); 
        }
        
}

function split(){
    equacao = '/'
    if (firstNum == ''){
        firstNum = typed;
        typed = '';
        console.log('Typed = '+ typed);
        console.log('FirstNum = '+ firstNum);
        console.log('secondNum = '+ secondNum);
    }else{
        secondNum = typed;
        total = parseInt(firstNum) / parseInt(secondNum);
        firstNum = total;
        typed = '';
        document.getElementById('display').innerHTML = total.toFixed(5);
        secondNum = ''
        console.log('Typed = '+ typed);
        console.log('FirstNum = '+ firstNum);
        console.log('secondNum = '+ secondNum);
    }
}

function multiply(){
    equacao = 'x'
    if (firstNum == ''){
        firstNum = typed;
        typed = '';
        console.log('Typed = '+ typed);
        console.log('FirstNum = '+ firstNum);
        console.log('secondNum = '+ secondNum);
    }else{
        secondNum = typed;
        total = parseInt(firstNum) * parseInt(secondNum);
        firstNum = total;
        typed = '';
        document.getElementById('display').innerHTML = total;
        secondNum = ''
        console.log('Typed = '+ typed);
        console.log('FirstNum = '+ firstNum);
        console.log('secondNum = '+ secondNum);       
    }
}


function result(){
    if (firstNum =='' && secondNum == ''){
        document.getElementById('display').innerHTML = 'vazio'
        } else {
            if (equacao == '+'){
            secondNum = typed;
            total = parseInt(firstNum) + parseInt(secondNum);
            firstNum = total;
            secondNum = ''
            document.getElementById('display').innerHTML = total;
        } else if (equacao == '-'){
            secondNum = typed;
            total = parseInt(firstNum) - parseInt(secondNum);
            firstNum = total;
            secondNum = ''
            document.getElementById('display').innerHTML = total;
        } else if (equacao == '/') {
            secondNum = typed;
            total = parseInt(firstNum) / parseInt(secondNum);
            firstNum = total;
            secondNum =''
            document.getElementById('display').innerHTML = total.toFixed(5);
        } else if (equacao == 'x'){
            secondNum = typed;
            total = parseInt(firstNum) * parseInt(secondNum);
            firstNum = total;
            secondNum =''
            document.getElementById('display').innerHTML = total;
        }


    }
    
    
}