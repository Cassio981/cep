//Importe do arquivo de dados para manipular a busca do CEP
import { dadosCep } from "./dados.js"
//Recebe o botão pesquisar do HTML no JS
const botaoPesquisar = document.getElementById('pesquisar')

function validarDados () {
    //receba a caixa de texto do HTMl
    let caixaCep = String(document.getElementById('input-cep').value)
    // cria uma varieavel do tipo boolean (true ou false)
    let status = false

    //Validação de entrada em branco
    if(caixaCep == ''){
        alert('não e possivel validar o CEP, se a caixa estiver vazia.')
        status = true
        //Validação de quantidade de caracteres
    }else if(caixaCep.length() > 9){
        alert('o CEP informado não tem a quantidade de caracteres corretamente.')
        status = true
    }

    return
}
//Função anonima
const getBuscarCep = function(){

    dadosCep.dados.forEach(function(item){
         console.log(item.logradouro)
    })
}


// Adicioma um evento (click) no botão Pesquisa
botaoPesquisar.addEventListener('click', function(){
    //validação para verificar se a função validardados()
    //retornar false, ai vamos pesquisar o cep
  if(!validarDados()){
      getBuscarCep()
  }
})