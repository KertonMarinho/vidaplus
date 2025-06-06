let dataSelecionada = null;
let mesAtual = (new Date()).getMonth();
let anoAtual = (new Date()).getFullYear();

function renderizarCalendario(mes, ano) {
    const diasCalendario = document.getElementById('dias-calendario');
    const mesAno = document.getElementById('mes-ano');
    const nomesMeses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    mesAno.innerHTML = `
        <button id="anterior" style="float:left;">&#8592;</button>
        ${nomesMeses[mes]} ${ano}
        <button id="proximo" style="float:right;">&#8594;</button>
    `;

    const primeiroDia = new Date(ano, mes, 1);
    const ultimoDia = new Date(ano, mes + 1, 0);
    const totalDias = ultimoDia.getDate();

    diasCalendario.innerHTML = '';

    let dataAtual = 1;
    for (let i = 0; i < 6; i++) {
        let linha = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            let celula = document.createElement('td');
            if (i === 0 && j < primeiroDia.getDay()) {
                celula.innerHTML = '';
            } else if (dataAtual > totalDias) {
                celula.innerHTML = '';
            } else {
                celula.textContent = dataAtual;
                // Fim de semana
                if (j === 0 || j === 6) {
                    celula.classList.add('fim-de-semana');
                }
                // Seleção de data
                if (
                    dataSelecionada &&
                    dataSelecionada.getDate() === dataAtual &&
                    dataSelecionada.getMonth() === mes &&
                    dataSelecionada.getFullYear() === ano
                ) {
                    celula.classList.add('dia-atual');
                }
                celula.style.cursor = "pointer";
                celula.addEventListener('click', function() {
                    dataSelecionada = new Date(ano, mes, Number(this.textContent));
                    renderizarCalendario(mes, ano);
                });
                dataAtual++;
            }
            linha.appendChild(celula);
        }
        diasCalendario.appendChild(linha);
        if (dataAtual > totalDias) break;
    }

    // Botões de navegação
    document.getElementById('anterior').onclick = function() {
        if (mesAtual === 0) {
            mesAtual = 11;
            anoAtual--;
        } else {
            mesAtual--;
        }
        renderizarCalendario(mesAtual, anoAtual);
    };
    document.getElementById('proximo').onclick = function() {
        if (mesAtual === 11) {
            mesAtual = 0;
            anoAtual++;
        } else {
            mesAtual++;
        }
        renderizarCalendario(mesAtual, anoAtual);
    };
}

// Inicializa com o mês atual
renderizarCalendario(mesAtual, anoAtual);

 document.querySelectorAll('.doctor-buttons button').forEach(btn => {
                    btn.addEventListener('click', function() {
                        document.querySelectorAll('.doctor-buttons button').forEach(b => b.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });