var input = document.getElementById('input')
const operadores = ['/', '*', '+', '-', '.']
var operador = false
var calculo = ''

function verificar(s){
    if (calculo == '' && !operadores.find(operadores => operadores === s)) return;

}

function limpar(){
    calculo = ''
    input.innerHTML = `${calculo}`
}

function add(s){
    verificar(s)
    calculo += s
    input.innerHTML = `${calculo}`
}

function calcular(){
    try {
        let result = eval(calculo)
        if(result == undefined){ return }
        
        input.innerHTML = `${result}`
    } catch (error) {
        input.innerHTML = `Sintaxe errada`
    }
    calculo = '' 
}
