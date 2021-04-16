//--FUNÇÃO POP-UP QUANDO CARREGA A PÁGINA CERTIFICADOS--
function load() {
    alert("Para ampliar os certificados, clique nas imagens!");
}
//--FORMULÁRIO DA PÁGINA CONTATO
function Enviar() {

    var nome = document.getElementById("nomeid");

    if (nome.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}