function checkPassword() {
    const userPassword = document.getElementById("password").value.trim();

    // Mensagens específicas para datas especiais
    const specialMessages = {
	"amor": "Já adianto logo, tive que pedir ajuda ao amigo GPT pq não sei html nem css viu amor. Só o básico do básico. Então nem repara nos erros. Meu amor sabe que não sou bom em escrever, mas sou bom em jogar. Então meu amor vai jogar um pouquinho agora. Cada data tem um mini-texto. Quero saber depois qts vezes meu amor tentou 👀",
        "14/03/2019": "O dia em que te dei o primeiro beijo foi como se o tempo tivesse parado por um instante só nosso. Ali, vendo aquele sorriso tão lindo e o rosto brilhando, com o vento balançando esse cabelo, um misto de nervosismo e felicidade tomou conta de mim. Um beijo que foi muito mais que um gesto — foi o início de tudo que ainda viria. 😊",
        "27/06/2019": "Aqui foi o dia, né? Não lembro de onde a gente vinha, mas lembro que estávamos com roupa de treino. Acho que era do muay thai. Enfim, um dia que marcou, simplesmente por um pedido tão simples. Mas um simples com um peso tão grande... O nosso dia. E que venham muitos. ✨",
        "06/07/2019": "E aqui sim, duvido que vá acertar esse. Mas esse foi um dos melhores dias. O dia que meu amor finalmente falou que me amava. E eu lembro perfeitamente pois foi um dia antes do meu amor me deixar 😔. Mas tudo bem amor, já tava comprada a passagem mesmo... ouvir aquele eu te amo foi como voltar no primeiro beijo. E lembro também que teve outra coisa ali na sala mesmo 👀 assunto pra dps... Eu te amo muito amor! 💖"
    };

    // Mensagens aleatórias padrão
    const messages = [
        "Meu amor é linda de todas as maneiras! 💖",
        "Meu amor é incrível. ❤️",
        "Meu amor é guerreira. 😊",
        "Meu amor é meu sonho. ✨",
        "Eu te amo muito. ❤️",
        "Quero estar sempre ao seu lado. ❤️"
    ];

    const messageElement = document.getElementById("message");

    if (specialMessages[userPassword]) {
        // Se for uma das datas especiais
        messageElement.textContent = specialMessages[userPassword];
        messageElement.style.display = "block";
    } else if (userPassword !== "") {
        // Qualquer outra senha correta (não vazia)
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        messageElement.textContent = randomMessage;
        messageElement.style.display = "block";
    } else {
        // Senha incorreta
        alert("Senha incorreta. Tente novamente!");
    }

    // Limpa o campo de senha
    document.getElementById("password").value = "";
}
