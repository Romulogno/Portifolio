
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

//Global variables to be accessed for all the functions
var typed = '';
var firstNum = '';
var secondNum = '';
var total;
var equacao = '';
var tempEquacao = '';
var temp = ''
var porcento = 0;


//Resets the variables and Display values
function ac(){
    document.getElementById('display').innerHTML ='0'
    typed = '';
    firstNum = '';
    secondNum = '';
    total = 0;
    equacao = '';
}

//Store and display the keys pressed in string format to by converted later
function display(key){
    typed += key
    document.getElementById('display').innerHTML = typed;
    console.log('Typed = '+typed);
}

//Plus calculation function
function plus(){
    if (typed == ''){
        equacao = '+'
        tempEquacao ='+'
    } else{
        equacao = '+'
        tempEquacao ='+'
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
}

//Minus calculation function
function minus(){
    if (typed == ''){
        equacao = '-'
        tempEquacao ='-'
    } else{
            equacao = '-'
            tempEquacao ='-'
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
}

//Division calculation Function
function split(){
    if (typed == ''){
        equacao = '/'
        } else{
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
}

//Multiply  calculation function
function multiply(){
    if (typed == ''){
        equacao = 'x'
    } else{
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
}

//Calculates the final result  = 
function result(){
    if (firstNum =='' && secondNum == ''){
        document.getElementById('display').innerHTML = 'vazio'
        } else {
            if (equacao == '+'){
            secondNum = typed;
            total = parseInt(firstNum) + parseInt(secondNum);
            firstNum = total;
            secondNum = ''
            typed = ''
            document.getElementById('display').innerHTML = total;
        } else if (equacao == '-'){
            secondNum = typed;
            total = parseInt(firstNum) - parseInt(secondNum);
            firstNum = total;
            secondNum = ''
            typed = ''
            document.getElementById('display').innerHTML = total;
        } else if (equacao == '/') {
            secondNum = typed;
            total = parseInt(firstNum) / parseInt(secondNum);
            firstNum = total;
            secondNum =''
            typed = ''
            document.getElementById('display').innerHTML = total.toFixed(5);
        } else if (equacao == 'x'){
            secondNum = typed;
            total = parseInt(firstNum) * parseInt(secondNum);
            firstNum = total;
            secondNum =''
            typed = ''
            document.getElementById('display').innerHTML = total;
        } else if (equacao == '%'){
            if (tempEquacao == '-'){
                total = parseInt(firstNum) - parseInt(porcento);
                firstNum = total;
                secondNum =''
                document.getElementById('display').innerHTML = total;
                typed = ''
            }else if (tempEquacao == '+'){
                total = parseInt(firstNum) + parseInt(porcento);
                firstNum = total;
                secondNum =''
                document.getElementById('display').innerHTML = total;
                typed = ''
            } else if (tempEquacao == '/'){
                total = parseInt(firstNum) + parseInt(porcento);
                firstNum = total;
                secondNum =''
                document.getElementById('display').innerHTML = total;
                typed = ''
            } else if (tempEquacao == 'x'){
                total = parseInt(firstNum) + parseInt(porcento);
                firstNum = total;
                secondNum =''
                document.getElementById('display').innerHTML = total;
                typed = ''
            }             
        } 
    }
}

//Calculates the percentage
function percent(){
        equacao = '%'
        secondNum = typed;
        porcento = (secondNum/100) * firstNum;
        console.log('porcento: ' + porcento);
        document.getElementById('display').innerHTML = porcento;
    }   

//Allows us to use the keyboard keys to type the numbers of our calculation
function keydown(event){
    var x = event.which || event.keyCode;
    switch (x){
        case 96:
            typed += '0';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 97:
            typed += '1';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 98:
            typed += '2';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 99:
            typed += '3';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 100:
            typed += '4';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 101:
            typed += '5';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 102:
            typed += '6';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 103:
            typed += '7';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 104:
            typed += '8';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 105:
            typed += '9';
            document.getElementById('display').innerHTML = typed;
            console.log('Typed = '+typed);
        break;
        case 107:
            plus()
        break;
        case 109:
            minus()
        break;
        case 106:
            multiply()
        break;
        case 111:
            split()
        break;
        case 13:
            result()
        break;
        case 27:
            ac()
        break;    
    }


    /*
    if (x == 97){
        typed += '1'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 98){
        typed += '2'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 99){
        typed += '3'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 100){
        typed += '4'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 101){
        typed += '5'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 102){
        typed += '6'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 103){
        typed += '7'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 104){
        typed += '8'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 105){
        typed += '9'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    } else if(x == 96){
        typed += '0'
        document.getElementById('display').innerHTML = typed;
        console.log('Typed = '+typed);
    }else if(x == 107){
        plus()
    }else if(x == 109){
        minus()
    }else if(x == 111){
        split()
    }else if(x == 106){
        multiply()
    }
     else if(x == 13){
        result();
    } else if(x == 27){
        ac()
    }
    */
}

// Changes the number to positive or negative number.
function abs(){
    if (typed =='' && total == ''){
        document.getElementById('display').innerHTML = '0';
    } else {
        if (total !=''){
            var myAbs = parseInt(total);
            if (myAbs >= 0){
               total = '-'+ total;
                console.log(total);
                document.getElementById('display').innerHTML = total;
            } else {
                total = Math.abs(myAbs);
                document.getElementById('display').innerHTML = total;
            }
        }else {
                 var myAbs = parseInt(typed);
            if (myAbs >= 0){
                typed = '-'+ typed;
                console.log(typed);
                document.getElementById('display').innerHTML = typed;
            } else {
                typed = Math.abs(myAbs);
                document.getElementById('display').innerHTML = typed;
            }
        }
    }   
  }