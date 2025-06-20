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
    let validator  = {
    handleSubmit:(event)=> {
        event.preventDefault(); /*previna o comportamento padrão(para o enviar)*/

        let send = true;

        let inputs =  form.querySelectorAll('input');

        validator.clearErrors();//limpar os erros

        for(let i=0;i<inputs.length;i++) {
            let input = inputs[i];
            let check =validator.checkInput(input);  //ver todos tem o campo(data-rules) estão preecnhidos no input
            if (check !== true) {
                send = false;
                validator.showError(input, check);
            }
        }
        if(send) {
            form.submit();""
        }
    },
    checkInput:(input) => { /*vai checar se tem alguma regra e conferi as regras*/
        let rules = input.getAttribute('data-rules'); //DATA RULES É NOME CRIADO POR MIN PARA ARMAZENAR UM VALOR E RETORNA ESTE VALOR

        

        function EnterTab(Input,Evento){

            if(Evento.keyCode == 13){       

            document.getElementById(Input).focus();

        }

    }
        if(rules !== null){
            rules = rules.split('|'); //separa as regras
            for(let k in rules) {//VERIFICA AS REGRAS
                let rDetails = rules[k].split('=');
                switch (rDetails[0]) { //ITEM DA REGRA  
                    case'required': //VER SO O REQUIERD ESTÁ COMPLETADO
                        if(input.value == '') {
                            return 'Campo não pode ser vazio.';
                        }

                    break;
                    case 'min':  //validar o numero de caracteres
                        if(input.value.length < rDetails[1]) {
                            return 'Campo tem que ter pelo menos ' +rDetails[1]+' caracteres';
                        }
                    break;
                    case 'email':
                        if(input.value != '') {
                            let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                            if(!regex.test(input.value.toLowerCase())) {
                                return 'E-mail digitado não é válido!';
                            }
                        }
                    break;
                }
            }
        }
        return true;
    },
    showError:(input, error) => {

        document.querySelector('input').style.border="2px solid #ff0000";

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML =error;

        /*não existe uma funçao especifica no js que adiciona depois do elemento,somente antes do elemento (insertBefore)
        soluçao:pegar o item depois dele(elementsibling)*/
        input.parentElement.insertBefore(errorElement, input.Elementsibling);
    },
    clearErrors:() => {
        let inputs = form.querySelectorAll('input');
        for(let i=0;i<inputs.length;i++) {
            inputs[i].style = '';
        }
        let errorElements = document.querySelectorAll('.error');
        for(let i=0;i<errorElements.length;i++) {   //ir em cada elemento e remover
            errorElements[i].remove();
        }
    }
};
function EnterTab(Input,Evento){

    if(Evento.keyCode == 13){       

    document.querySelectorAll('Input').focus();

}

let form = document.querySelector('.validator');
form.addEventListener('submit',validator.handleSubmit);

}

 function confirmarCadastro() {
    // Pega os valores dos inputs
    //const nome = document.getElementById("nome").value.trim();
    //const email = document.getElementById("email").value.trim();

    // Verifica se todos os campos estão preenchidos
    //if (nome === "" || email === "") {
      //alert("Por favor, preencha todos os campos antes de cadastrar.");
      //return;
    //}
    // Mensagem da janela
    const mensagem = "<h2>Cadastro realizado com sucesso!</h2><p><h4>Volte a página inicial</h4></p>";
    
    // Abre uma nova janela (popup)
    const novaJanela = window.open("", "popup", "width=300,height=150");
    
    // Escreve a mensagem na nova janela
    novaJanela.document.write(`
          <html>
      <head>
        <title>Sucesso</title>
      </head>
      <body style="font-family: Arial; text-align: center; padding-top: 30px; background-color: rgba(85,156, 160, 100);">
        ${mensagem}
      </body>
      </html>
    `);
  }
