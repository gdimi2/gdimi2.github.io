// Inicialize o EmailJS com seu user_id (substitua pelo seu User ID real)
emailjs.init('u9xtgjdhrW341Eyoq'); // Substitua com o seu User ID real

// Adiciona um evento de envio de formulário
document.getElementById('pedido-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

    // Captura os valores do formulário
    const formData = {
        polo: document.getElementById('polo').value.trim(),
        nome: document.getElementById('nome').value.trim(),
        material_1: document.getElementById('material_1').value.trim() || 'Não informado',
        quantidade_1: document.getElementById('quantidade_1').value.trim() || 'Não informado',
        material_2: document.getElementById('material_2').value.trim() || 'Não informado',
        quantidade_2: document.getElementById('quantidade_2').value.trim() || 'Não informado',
        material_3: document.getElementById('material_3').value.trim() || 'Não informado',
        quantidade_3: document.getElementById('quantidade_3').value.trim() || 'Não informado',
        material_4: document.getElementById('material_4').value.trim() || 'Não informado',
        quantidade_4: document.getElementById('quantidade_4').value.trim() || 'Não informado',
    };

    // Estrutura os parâmetros para o EmailJS
    const emailParams = {
        polo: formData.polo,
        nome: formData.nome,
        pedido: `
            Material 1: ${formData.material_1} | Quantidade: ${formData.quantidade_1}<br>
            Material 2: ${formData.material_2} | Quantidade: ${formData.quantidade_2}<br>
            Material 3: ${formData.material_3} | Quantidade: ${formData.quantidade_3}<br>
            Material 4: ${formData.material_4} | Quantidade: ${formData.quantidade_4}
        `
    };

    // Log para depuração (opcional)
    console.log('Dados enviados ao EmailJS:', emailParams);

    // Envia os dados para o EmailJS
    emailjs.send('service_q7wuixh', 'template_g8bhdup', emailParams)
        .then(function (response) {
            // Exibe um alerta de sucesso
            Swal.fire({
                title: 'Pedido Enviado!',
                text: 'Seu pedido foi enviado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });

            // Reseta o formulário após o envio
            document.getElementById('pedido-form').reset();
        })
        .catch(function (error) {
            // Exibe um alerta de erro
            Swal.fire({
                title: 'Erro!',
                text: 'Ocorreu um erro ao enviar o pedido. Tente novamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.error('Erro ao enviar o email:', error);
        });
});
