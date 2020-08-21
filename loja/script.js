
var totalProdutos = 0



function criaTitulo() {
  var divPaiDoTitulo = document.getElementById("numeroCarrinho") // <div id="numeroCarrinho"></div>
  var titulo = document.createElement('h1') // <h1></h1>
  titulo.innerHTML = 'PRODUTOS NO CARRINHO: ' // <h1> PRODUTOS NO CARRINHO: </h1>
  var span = document.createElement('span') //<span></span>
  span.innerHTML = totalProdutos //<span> 3 </span>
  span.setAttribute("class", "numero")//<span class="numero"> 3 </span>
  titulo.appendChild(span) // <h1> PRODUTOS NO CARRINHO: <span class="numero"> 3 </span> </h1>
  titulo.setAttribute("class", "titulo principal")  //titulo = <h1 class="titulo principal">'PRODUTOS NO CARRINHO: 0'</h1>
  divPaiDoTitulo.appendChild(titulo) //injeta titulo dentro do divpai <div>  <h1> PRODUTOS NO CARRINHO: <span class="numero"> 3 </span> </h1> </div>
}

function adicionarNoCarrinho() {
  //criaTitulo()

  if (totalProdutos < 10) {
    totalProdutos = totalProdutos + 1
  } else {
    alert('MAXIMO DE PRODUTOS ATINGIDOS')
  }

  document.getElementById('numero').innerHTML = totalProdutos


  // NOVO PROCESSO

}

function removerDoCarrinho() {
  if (totalProdutos > 0) {
    totalProdutos = totalProdutos - 1
  } else {
    alert('NAO DA PRA COMPRAR NEGATIVO')
  }

  document.getElementById('numero').innerHTML = totalProdutos
}


