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

 