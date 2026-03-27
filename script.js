function enviarWhats(produto, campoId) {

  var qtd = document.getElementById(campoId).value;

  if(qtd === "") {
    alert("Digite a quantidade!");
    return;
  }

  var numero = "556296528915"; // SEU NÚMERO AQUI

  var mensagem = "Olá, gostaria de consultar um orçamento:\n\n" +
                 "Produto: " + produto + "\n" +
                 "Quantidade: " + qtd;

  var link = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem);

  window.open(link, "_blank");
}