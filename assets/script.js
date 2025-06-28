document.addEventListener('DOMContentLoaded', () => {
    // Dados de exemplo: Estados e suas cidades.
    const cidadesPorEstado = {
        "Distrito Federal": ["Brasília"],
        "Minas Gerais": ["Belo Horizonte", "Uberlândia", "Caxambu", "Juiz de Fora"],
        "Paraná": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Lapa"],
        "Rio de Janeiro": ["Rio de Janeiro"],
        "Rio Grande do Sul": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas"],
        "Santa Catarina": ["Florianópolis", "Joinville", "Blumenau", "São José"],
        "São Paulo": ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo"],
    };

    const estadoSelect = document.getElementById('state');
    const cidadeSelect = document.getElementById('city');

    // 1. estado/cidade
    for (const estado in cidadesPorEstado) {
        const option = document.createElement('option');
        option.value = estado;
        option.textContent = estado;
        estadoSelect.appendChild(option);
    }

    // 2. Adicionar evento para quando o estado mudar
    estadoSelect.addEventListener('change', function() {
        const estadoSelecionado = this.value;

        // Limpar opções anteriores das cidades
        cidadeSelect.innerHTML = '<option value="">Selecione a cidade</option>';

           if (estadoSelecionado && cidadesPorEstado[estadoSelecionado]) {
    const listaDeCidades = cidadesPorEstado[estadoSelecionado];

            for (let i = 0; i < listaDeCidades.length; i++) {
                const nomeDaCidadeAtual = listaDeCidades[i];
                const novaOpcaoDeCidade = document.createElement('option');
                novaOpcaoDeCidade.value = nomeDaCidadeAtual;
                novaOpcaoDeCidade.textContent = nomeDaCidadeAtual;
                cidadeSelect.appendChild(novaOpcaoDeCidade);
            }
            cidadeSelect.disabled = false;
        } else {
            cidadeSelect.disabled = true;
        }
    });
    });
    // cadastro_paciente
    // Variável global para o formulário
let form = document.querySelector('.validator');

let validator = {
    handleSubmit: (event) => {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário

        let send = true;

        let inputs = form.querySelectorAll('input, select'); // Inclui select para validação

        validator.clearErrors(); // Limpa os erros anteriores

        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let check = validator.checkInput(input); // Verifica as regras de validação para cada input
            if (check !== true) {
                send = false;
                validator.showError(input, check);
            }
        }

        // Validação de senhas
        let senha = document.getElementById('senha');
        let confirmaSenha = document.getElementById('confirmaSenha');
        if (senha && confirmaSenha && senha.value !== confirmaSenha.value) {
            send = false;
            validator.showError(confirmaSenha, 'As senhas não coincidem.');
        }

        if (send) {
            form.submit(); // Envia o formulário se tudo estiver válido
        }
    },
    checkInput: (input) => {
        let rules = input.getAttribute('data-rules');

        if (rules !== null) {
            rules = rules.split('|');
            for (let k in rules) {
                let rDetails = rules[k].split('=');
                let ruleName = rDetails[0];

                switch (ruleName) {
                    case 'required':
                        if (input.value.trim() === '') { // Usar trim() para remover espaços em branco
                            input.placeholder = 'Campo não pode ser vazio.'; // Mensagem no placeholder
                             // Ainda retorna para controle interno
                        }
                        break;
                    case 'min':
                        if (input.value.length < parseInt(rDetails[1])) {
                            return 'Campo tem que ter pelo menos ' + rDetails[1] + ' caracteres.';
                        }
                        break;
                    case 'max':
                        if (input.value.length > parseInt(rDetails[1])) {
                            return 'Campo tem que ter no máximo ' + rDetails[1] + ' caracteres.';
                        }
                        break;
                    case 'email':
                        if (input.value !== '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if (!regex.test(input.value.toLowerCase())) {
                                return 'E-mail digitado não é válido!';
                            }
                        }
                        break;
                }
            }
        }
        return true;
    },
    showError: (input, error) => {
        input.style.border = "2px solid #ff0000"; // Define a borda vermelha para o input com erro

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = error;

        // Adiciona a mensagem de erro depois do input
        input.parentElement.insertBefore(errorElement, input.nextElementSibling);
    },
    clearErrors: () => {
        let inputs = form.querySelectorAll('input, select'); // Inclui select para limpar estilos
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.border = ''; // Remove o estilo de borda
        }
        let errorElements = document.querySelectorAll('.error');
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].remove(); // Remove as mensagens de erro
        }
    }
};

// Adiciona o event listener para o formulário
form.addEventListener('submit', validator.handleSubmit);

// Função para avançar com a tecla Enter
function handleEnterTab(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Previne o envio do formulário ao pressionar Enter
        const formElements = Array.from(form.querySelectorAll('input, select, textarea, button[type="submit"]'));
        const currentIndex = formElements.indexOf(event.target);
        if (currentIndex > -1 && currentIndex < formElements.length - 1) {
            formElements[currentIndex + 1].focus();
        } else if (currentIndex === formElements.length - 1) {
            // Se for o último elemento, pode-se decidir se envia o formulário ou foca no primeiro campo
            form.querySelector('button[type="submit"]').click(); // Simula o clique no botão de submit
        }
    }
}

//tela de login
const loginForm = document.querySelector('#login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const errorMessage = document.querySelector('#error-message');

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
        alert('Login bem-sucedido! Bem-vindo(a), estagiário(a)!');
        
        // direciona para página
        window.location.href = "vidaplus_paciente.html"; 
        
    } else {
        // Se estiverem incorretas
        errorMessage.textContent = 'Usuário ou senha inválidos. Tente novamente.';
    }

});