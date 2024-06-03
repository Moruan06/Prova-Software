function montarTabela() {
  var name = document.getElementById("name").value
  var mat = document.getElementById("matricula").value
  var nota1 = parseFloat(document.getElementById("nota1").value)
  var nota2 = parseFloat(document.getElementById("nota2").value)

  if(name !== "" && mat !== "" && !isNaN(nota1) && !isNaN(nota2)) {
    var media = (nota1 + nota2) / 2
    var situacao = media >= 5 ? "Aprovado" : "Reprovado"

    var table = document.getElementById("Tabela")
    var linha = table.insertRow(-1)
    var cell1 = linha.insertCell(0)
    var cell2 = linha.insertCell(1)
    var cell3 = linha.insertCell(2)
    var cell4 = linha.insertCell(3)
    var cell5 = linha.insertCell(4)
    var cell6 = linha.insertCell(5)
    cell1.innerHTML = name
    cell2.innerHTML = mat
    cell3.innerHTML = nota1
    cell4.innerHTML = nota2
    cell5.innerHTML = media.toFixed(2)
    cell6.innerHTML = situacao

    document.getElementById("Form").reset()
  }
}