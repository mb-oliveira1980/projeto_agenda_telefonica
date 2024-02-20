let form = document.getElementById("form_agenda")
let listaNome = []
let listaFone = []
let input_nome = document.getElementById("inputNome")
let input_tel = document.getElementById("inputFone")  
let input_ddd = document.getElementById("inputDDD")  

let linhas = " "

function cadastrar() {
    
    if(listaNome.includes(input_nome.value) || listaFone.includes(input_tel.value)){

        alert("Nome ou telefone já cadastrado. Verifique!")

    }else if(input_ddd.value.length > 3 || input_ddd.value.length < 2){

        alert("Número de DDD inválido. Verifique!")   

    }else if(input_tel.value.length > 9 || input_tel.value.length < 8) {

        alert("Número de telefone inválido. Verifique!")

    } else {
        
        listaNome.push(input_nome.value)
        listaFone.push(input_tel.value)

        linha = "<tr>"
        linha += `<td>${input_nome.value}</td>`
        linha += `<td>${input_ddd.value} - ${input_tel.value}</td>`
        linha += "</tr>"

        linhas += linha
    }
    input_nome.value = ""
    input_ddd.value = ""
    input_tel.value = ""
}

function atualizaTabela() {
    let linhasTabela = document.querySelector("tbody")
    linhasTabela.innerHTML = linhas
}

form.addEventListener('submit', function(evento){
    evento.preventDefault()

    cadastrar()
    atualizaTabela()
})

