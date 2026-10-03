const display = document.getElementById("display");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

const btnSoma = document.getElementById("btnSoma");
const btnSub = document.getElementById("btnSub");
const btnDiv = document.getElementById("btnDiv");
const btnMult = document.getElementById("btnMult");
const btnC = document.getElementById("btnC");
const btnIgual = document.getElementById("btnIgual");

let valorAtual = "";
let vaalorAnterior = "";
let operacao = null;

function atualizaDisplay(){
    if(valorAtual === ""){
        display.value = "0";
    }

    else{
        display.value = valorAtual;
    }
}

function escreveDisplay(numero){
    valorAtual += numero;
    atualizaDisplay();

}

btn9.addEventListener("click", function(){
    escreveDisplay("9");
})