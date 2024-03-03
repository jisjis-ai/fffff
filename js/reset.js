// Assumindo que você já inicializou o Firebase em js/firebase.js

function resetSenha() {
    const novaSenha = document.getElementById('novaSenha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (novaSenha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, tente novamente.');
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get('oobCode');
    
    // Use o código Firebase para redefinir a senha
    firebase.auth().verifyPasswordResetCode(oobCode)
        .then((email) => {
            // Atualize a senha para o email fornecido
            return firebase.auth().confirmPasswordReset(oobCode, novaSenha);
        })
        .then(() => {
            alert('Senha redefinida com sucesso!');
            // Redirecionar para a página de login ou outra página desejada
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert(`Erro ao redefinir senha: ${error.message}`);
        });
}
