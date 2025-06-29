//tela de login
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

const userCorreto = ['paciente', 'medico', 'tecnico'];
const senhaCorreta = '123';

// evento para o envio do formulário
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    errorMessage.textContent = '';

    // validação
    if (userCorreto.includes(username) && password === senhaCorreta) {
        alert('Login bem-sucedido! Bem-vindo(a)!');

        if (username === 'paciente') {
            window.location.href = "vidaplus_paciente.html";
        } else if (username === 'medico') {
            window.location.href = "vidaplus_medico.html";
        } else if (username === 'tecnico') {
            window.location.href = "vidaplus_técnico.html";
        } else {
            errorMessage.textContent = 'Usuário ou senha inválidos. Tente novamente.';
        }
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos. Tente novamente.';
    }
});
