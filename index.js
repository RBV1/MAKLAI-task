document.getElementById('main-form').addEventListener('submit', calcForm);

function calcForm(event) {
    event.preventDefault();
    var el = document.getElementById('main-form');
    var num1 = parseFloat(el.Num1.value);
    var num2 = parseFloat(el.Num2.value);

    var error = "";
    var sign = el.sign.value;
    var rez;
    
    switch(sign)
    {
        case "sum": {rez = Math.trunc(num1 + num2);}
        break;
        case "difference": {rez = Math.trunc(num1 - num2);}
        break;
        case "multiplication": {rez = Math.trunc(num1 * num2);}
        break;
        case "division": {rez = Math.trunc(num1 / num2);}
        break;
        default: {
            error = "Невiдома операцiя!"
            document.getElementById('message').innerHTML = error;
        }
    }
    if(!isNaN(rez) && num1 && num2){rez;}else{error = "У полях мають бути тiльки числа";}
    if(error !=""){
        document.getElementById('message').innerHTML = error;
    }else {
        document.getElementById('message').innerHTML = rez.toString();
    }
}
