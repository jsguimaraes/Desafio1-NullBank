    
document.getElementById('enviar').addEventListener('click', function () {
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const formMessage = document.getElementById('formMessage');

    let errorMessage = '';

    // Validação dos campos
    if (!nome) {
        errorMessage += 'O campo "Nome" é obrigatório.<br>';
    }
    if (!sobrenome) {
        errorMessage += 'O campo "Sobrenome" é obrigatório.<br>';
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        errorMessage += 'Informe um e-mail válido.<br>';
    }
    if (!mensagem) {
        errorMessage += 'O campo "Mensagem" é obrigatório.<br>';
    }

    if (errorMessage) {
        formMessage.innerHTML = errorMessage;
        return;
    }

    // Armazenando os dados no LocalStorage
    const formData = {
        nome,
        sobrenome,
        email,
        mensagem
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    formMessage.style.color = 'green';
    formMessage.innerHTML = 'Mensagem enviada com sucesso!';

    // Limpar os campos após enviar
    document.getElementById('contactForm').reset();
});