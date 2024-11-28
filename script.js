document.getElementById('pedido-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    console.log('Formulário enviado'); // Confirma que o evento foi acionado

    // Coleta os dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        material: document.getElementById('material').value,
        quantidade: document.getElementById('quantidade').value
    };

    console.log('Dados coletados:', formData); // Exibe os dados coletados

    // Envia os dados para o Google Sheets
    fetch('https://script.google.com/macros/s/AKfycbxGO8ZKRkZbtY2kT875Yftq0Z6_2Glot9QYMgFWiJYn4EkEwhd6z-n7F1fCeR6pwEm9/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        console.log('Resposta recebida:', response); // Exibe a resposta do servidor
        if (response.ok) {
            Swal.fire({
                title: 'Pedido Enviado!',
                text: 'Seu pedido foi enviado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            document.getElementById('pedido-form').reset(); // Limpa o formulário após o envio
        } else {
            console.error('Erro na resposta do servidor:', response.statusText);
            throw new Error('Erro ao enviar os dados.');
        }
    })
    .catch(error => {
        console.error('Erro capturado:', error);
        Swal.fire({
            title: 'Erro!',
            text: 'Ocorreu um erro ao enviar o pedido. Tente novamente.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    });
});
