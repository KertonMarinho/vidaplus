//tela de login
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');
const appointmentScheduling = document.querySelector('title')

// Senha e usuário
const userCorreto = 'kerton';
const senhaCorreta = '123';

// evento para o envio do formulário
loginForm.addEventListener('submit', function(event) {
    // Impede o comportamento padrão do formulário de recarregar a página
    event.preventDefault();

    // Obtém os valores digitados pelo usuário
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Limpa a mensagem de erro anterior
    errorMessage.textContent = '';

    // validação
    if (username === userCorreto && password === senhaCorreta) {
        // Se  estiverem corretas
        alert('Login bem-sucedido! Bem-vindo(a)!');
        
        // ...existing code...

if (username === userCorreto && password === senhaCorreta) {
    alert('Login bem-sucedido! Bem-vindo(a)!');
    
    // Redireciona para páginas diferentes conforme o usuário
    if (appointmentScheduling === 'AREA CLIENTE') {
        window.location.href = "vidaplus_paciente.html";
    } else if (appointmentScheduling === 'AREA MEDICA') {
        window.location.href = "vidaplus_medico.html";
    } else if(appointmentScheduling === 'AREA ENFERMAGEM'){
        window.location.href = "vidaplus_técnico.html";
    }
} else {
    errorMessage.textContent = 'Usuário ou senha inválidos. Tente novamente.';
}
        
         
        
    } else {
        // Se estiverem incorretas
        errorMessage.textContent = 'Usuário ou senha inválidos. Tente novamente.';
    }

});