// ARQUIVO DE PREPARAÇÃO DE TABELA DINÂMICA

// Array com os dados iniciais da tabela
var dadosTabela = [
  {
    numero: 1,
    dataAbertura: "01/01/2022",
    codigo: "00000001",
    naoConformidade: "Produto fora da especificação",
    autor: "Isaque",
  },
  {
    numero: 2,
    dataAbertura: "02/01/2022",
    codigo: "00000002",
    naoConformidade: "Entrega atrasada",
    autor: "Samuel",
  },
  {
    numero: 3,
    dataAbertura: "03/01/2022",
    codigo: "00000003",
    naoConformidade: "Produto danificado",
    autor: "Paulo",
  },
  {
    numero: 4,
    dataAbertura: "04/01/2022",
    codigo: "00000004",
    naoConformidade: "Produto não conforme",
    autor: "Ailton",
  },
  {
    numero: 5,
    dataAbertura: "05/01/2022",
    codigo: "00000005",
    naoConformidade: "Produto fora da especificação",
    autor: "José",
  },
];

// Função para criar a tabela dinâmica
function listaTabela() {
  var tbody = document.getElementById("tbody");
  tbody.innerText = "";

  // Preenche a tabela com os dados
  for (var i = 0; i < dadosTabela.length; i++) {
    var tr = tbody.insertRow();

    var tdNumero = tr.insertCell();
    var tdDataAbertura = tr.insertCell();
    var tdCodigo = tr.insertCell();
    var tdNaoConformidade = tr.insertCell();
    var tdAutor = tr.insertCell();

    tdNumero.textContent = dadosTabela[i].numero;
    tdDataAbertura.textContent = dadosTabela[i].dataAbertura;
    tdCodigo.textContent = dadosTabela[i].codigo;
    tdNaoConformidade.textContent = dadosTabela[i].naoConformidade;
    tdAutor.textContent = dadosTabela[i].autor;
  }
}
