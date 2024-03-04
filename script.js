function verificarFormulario() {
    var formElements = document.getElementById("affiliateForm").elements;
    var formFilled = true;
  
    for (var i = 0; i < formElements.length - 1; i++) {
      if (formElements[i].value === "") {
        formFilled = false;
        break;
      }
    }
  
    if (formFilled) {
      exibirDialog();
    } else {
      alert("Preencha todos os campos do formulário.");
    }
  }
  
  function exibirDialog() {
    var dialog = document.getElementById("dialog");
    dialog.style.display = "block";
  }
  
  function redirectToMoz() {
    window.location.href = "base.apk";
  }
  
