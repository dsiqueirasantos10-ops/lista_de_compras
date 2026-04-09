// =================================================================================================================================
// ARRAY PRINCIPAL DA APLICAÇÃO
// =================================================================================================================================

// Array que armazena todos os produtos adicionados
const listaProdutos = [];


// =================================================================================================================================
// CAPTURANDO ELEMENTOS DO HTML
// =================================================================================================================================

// Container onde os produtos serão exibidos na tela
let lista_container = document.getElementById('listaProdutos');

// Formulário usado para adicionar novos produtos
let formProduto = document.getElementById('formProduto');

// Botão responsável por limpar toda a lista
let btnLimpar = document.getElementById("btnLimpar");


// =================================================================================================================================
// EVENTO DE ENVIO DO FORMULÁRIO
// =================================================================================================================================

// Escuta quando o formulário é enviado (clique no botão ADD)
formProduto.addEventListener("submit", function(event){

    // Impede o recarregamento da página
    event.preventDefault();

    // Adiciona o produto ao array
    addListaProdutos();

    // Atualiza a lista exibida na tela
    listarProdutos();
});


// =================================================================================================================================
// FUNÇÃO PARA ADICIONAR PRODUTO
// =================================================================================================================================

function addListaProdutos(){

    // Pega o valor digitado e remove espaços extras
    let produto = document.getElementById('produto').value.trim();

    // Se o campo estiver vazio, não adiciona nada
    if(produto === "") return;

    // Adiciona o produto no array
    listaProdutos.push(produto);

    // Limpa o campo de input após adicionar
    document.getElementById('produto').value = "";
}


// =================================================================================================================================
// FUNÇÃO PARA EXIBIR PRODUTOS
// =================================================================================================================================

function listarProdutos(){

    // Limpa o conteúdo atual da tela antes de renderizar novamente
    lista_container.innerHTML = "";

    // Percorre todo o array de produtos
    for(let i = 0; i < listaProdutos.length; i++){

        // Adiciona cada produto como um alerta do Bootstrap
        lista_container.innerHTML += `
        <div class="alert alert-success d-flex justify-content-between align-items-center" role="alert">
            
            <!-- Nome do produto -->
            <strong>${listaProdutos[i]}</strong>
            
            <!-- Botão X que remove o item -->
            <button 
                type="button" 
                class="btn-close" 
                onclick="removerProduto(${i})">
            </button>

        </div>`;
    }
}


// =================================================================================================================================
// FUNÇÃO PARA REMOVER UM PRODUTO
// =================================================================================================================================

function removerProduto(indice){

    // Remove 1 item do array na posição informada
    listaProdutos.splice(indice, 1);

    // Atualiza a tela após remover
    listarProdutos();
}


// =================================================================================================================================
// EVENTO PARA LIMPAR TODA A LISTA
// =================================================================================================================================

btnLimpar.addEventListener("click", function () {

    // Zera completamente o array
    listaProdutos.length = 0;

    // Atualiza a tela para refletir a mudança
    listarProdutos();
});