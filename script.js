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
let valorAnterior = "";
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

btnC.addEventListener("click", function(){
    valorAtual = "";
    valorAnterior = "";
    operacao = null;
    atualizaDisplay();
    
});

btn9.addEventListener("click", function(){
    escreveDisplay("9");
});

btn8.addEventListener("click", function(){
    escreveDisplay("8");
});

btn7.addEventListener("click", function(){
    escreveDisplay("7");
});

btn6.addEventListener("click", function(){
    escreveDisplay("6");
});

btn5.addEventListener("click", function(){
    escreveDisplay("5");
});

btn4.addEventListener("click", function(){
    escreveDisplay("4");
});

btn3.addEventListener("click", function(){
    escreveDisplay("3");
});

btn2.addEventListener("click", function(){
    escreveDisplay("2");
});

btn1.addEventListener("click", function(){
    escreveDisplay("1");
});

btn0.addEventListener("click", function(){
    escreveDisplay("0");
});

function selecionarOperacao(op){

    if(valorAtual === ""){
        return;
    }

    valorAnterior = valorAtual;
    operacao = op;
    valorAtual = "";
}


btnSoma.addEventListener("click", function(){
    selecionarOperacao("+");
});

btnSub.addEventListener("click", function(){
    selecionarOperacao("-")
})


btnMult.addEventListener("click", function(){
    selecionarOperacao("*")
})

btnDiv.addEventListener("click", function(){
    selecionarOperacao("/")
})


function calcular(){
    
    const numAnterior = Number(valorAnterior);
    const numAtual = Number(valorAtual);

    let resultado;

    if(operacao === "+"){
        resultado = numAnterior + numAtual;   
    }
    else if(operacao === "-"){
        resultado = numAnterior - numAtual;   
    }
    else if(operacao === "*"){
        resultado = numAnterior * numAtual;   
    }
    else if(operacao === "/"){
        resultado = numAnterior / numAtual;   
    }

    valorAtual = String(resultado);
    valorAnterior = "";
    operacao = null;

    atualizaDisplay();
}

btnIgual.addEventListener("click", calcular);
btnSub.addEventListener("click", calcular);
btnMult.addEventListener("click", calcular);
btnDiv.addEventListener("click", calcular);