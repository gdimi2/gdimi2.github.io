function checkPassword() {
    const correctPassword = "amor"; // Defina a senha desejada aqui
    const userPassword = document.getElementById("password").value;

    // Lista de mensagens românticas
    const messages = [
        "Você é linda de todas as maneiras! 💖",
        "Você é incrível. ❤️",
        "Seu sorriso é mais que perfeito. 💕",
        "Você é guerreira. 😊",
        "Você é meu sonho. ✨",
	"Eu te amo demais e quero que o mundo saiba disso. ❤️",
	"Quero sempre que ver você conquistando tudo. ❤️"
    ];

    if (userPassword === correctPassword) {
        // Escolhe uma mensagem aleatória da lista
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById("message").textContent = randomMessage;
        document.getElementById("message").style.display = "block";
        
        // Limpa o campo de senha
        document.getElementById("password").value = "";
    } else {
        alert("Senha incorreta. Tente novamente!");
    }
}
