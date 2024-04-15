function verificarIdade() {
    var idade = parseInt(document.getElementById("idadeInput").value);
    
    if (idade >= 18) {
      document.getElementById("resultado").innerText = "Você é maior de idade.";
    } else {
      document.getElementById("resultado").innerText = "Você é menor de idade.";
    }
  }
  