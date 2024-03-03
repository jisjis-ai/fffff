// Assumindo que você já inicializou o Firebase em js/firebase.js

function enviarLink() {
    const email = document.getElementById('email').value;

    // Enviar o link de redefinição de senha usando Firebase Authentication
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('Link de redefinição de senha enviado para o seu e-mail.');
            // Redirecionar para a página de login ou outra página desejada
            window.location.href = 'login.html';
        })
        .catch((error) => {
            alert(`Erro ao enviar o link: ${error.message}`);
        });
}
