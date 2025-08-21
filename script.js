document.addEventListener('DOMContentLoaded', function () {
    // Acessibilidade: Botão para abrir/fechar as opções
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    botaoDeAcessibilidade.addEventListener('click', function () {
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
    });

    // Acessibilidade: Controle de tamanho da fonte
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const botaoResetFonte = document.createElement('button'); // Cria um novo botão de reset

    // Configura o novo botão
    botaoResetFonte.id = 'reset-fonte';
    botaoResetFonte.className = 'btn btn-primary fw-bold';
    botaoResetFonte.textContent = 'A 0';
    opcoesDeAcessibilidade.appendChild(botaoResetFonte); // Adiciona o botão à lista de opções

    // Define os limites para o tamanho da fonte
    const TAMANHO_MINIMO = 0.8;
    const TAMANHO_MAXIMO = 1.5;
    const TAMANHO_PADRAO = 1.0;
    let tamanhoAtualFonte = parseFloat(localStorage.getItem('fontSize')) || TAMANHO_PADRAO;

    // Aplica o tamanho da fonte salvo no localStorage ao carregar a página
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;

    function updateFontSize(change) {
        let novoTamanho = tamanhoAtualFonte + change;
        if (novoTamanho >= TAMANHO_MINIMO && novoTamanho <= TAMANHO_MAXIMO) {
            tamanhoAtualFonte = novoTamanho;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('fontSize', tamanhoAtualFonte); // Salva a preferência do usuário
        }
    }

    aumentaFonteBotao.addEventListener('click', function () {
        updateFontSize(0.1);
    });

    diminuiFonteBotao.addEventListener('click', function () {
        updateFontSize(-0.1);
    });

    botaoResetFonte.addEventListener('click', function () {
        tamanhoAtualFonte = TAMANHO_PADRAO;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        localStorage.setItem('fontSize', tamanhoAtualFonte);
    });

});
