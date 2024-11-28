// Inicialize o EmailJS com seu User ID
emailjs.init('u9xtgjdhrW341Eyoq'); // Substitua pelo seu User ID real

// Função para desabilitar opções duplicadas
function atualizarOpcoes() {
    // Obtenha todos os campos de seleção de materiais
    const selects = document.querySelectorAll('select[id^="material_"]');
    const valoresSelecionados = Array.from(selects).map(select => select.value);

    selects.forEach(select => {
        const options = select.querySelectorAll('option');

        options.forEach(option => {
            if (valoresSelecionados.includes(option.value) && option.value !== select.value) {
                option.disabled = true; // Desabilita a opção se já foi selecionada em outro campo
            } else {
                option.disabled = false; // Habilita a opção se não está selecionada
            }
        });
    });
}

// Adicionar evento de alteração a todos os campos de seleção
document.querySelectorAll('select[id^="material_"]').forEach(select => {
    select.addEventListener('change', atualizarOpcoes);
});

// Evento de envio do formulário
document.getElementById('pedido-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o comportamento padrão de envio do formulário

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

    const emailParams = {
        polo: formData.polo,
        nome: formData.nome,
        pedido: `
            Material: ${formData.material_1} | Quantidade: ${formData.quantidade_1}\n
            Material: ${formData.material_2} | Quantidade: ${formData.quantidade_2}\n
            Material: ${formData.material_3} | Quantidade: ${formData.quantidade_3}\n
            Material: ${formData.material_4} | Quantidade: ${formData.quantidade_4}
        `
    };

    emailjs.send('service_q7wuixh', 'template_g8bhdup', emailParams)
        .then(function (response) {
            Swal.fire({
                title: 'Pedido Enviado!',
                text: 'Seu pedido foi enviado com sucesso!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });

            document.getElementById('pedido-form').reset();
            atualizarOpcoes(); // Atualiza as opções após o reset
        })
        .catch(function (error) {
            Swal.fire({
                title: 'Erro!',
                text: 'Ocorreu um erro ao enviar o pedido. Tente novamente.',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            console.error('Erro ao enviar o email:', error);
        });
});
