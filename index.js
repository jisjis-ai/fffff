document.addEventListener('DOMContentLoaded', function() {
    // Obter o ID do afiliado da URL
    const urlParams = new URLSearchParams(window.location.search);
    const affiliateId = urlParams.get('id');

    // Verificar se o afiliado existe no Firebase
    if (affiliateId) {
        const affiliateRef = db.ref(`afiliados/${affiliateId}`);

        affiliateRef.once('value').then(snapshot => {
            const affiliateData = snapshot.val();

            if (affiliateData) {
                // Atualizar o código de convite na tela
                const invitationCodeElement = document.getElementById('affiliate-code');
                invitationCodeElement.innerText = affiliateId;

                // Atualizar o número de cliques no Firebase
                const clicksRef = affiliateRef.child('cliques');
                clicksRef.transaction(currentClicks => (currentClicks || 0) + 1);

                console.log(`Código de convite atualizado para ${affiliateId}. Cliques atualizados.`);
            } else {
                console.log('Afiliado não encontrado.');
            }
        }).catch(error => {
            console.error('Erro ao buscar afiliado:', error);
        });
    }

    function copyCode() {
        const invitationCode = document.getElementById("affiliate-code").innerText;
        navigator.clipboard.writeText(invitationCode);
        alert("Código copiado com sucesso!");
    }

    function downloadApk() {
        const apkFileUrl = "app/Bezcrypto.apk";
        const link = document.createElement('a');
        link.href = apkFileUrl;
        link.download = 'Bezcrypto.apk';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
