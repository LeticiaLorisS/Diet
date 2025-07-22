
document.addEventListener('DOMContentLoaded', () => {
    
    // Pega todos os botões e todos os cardápios uma única vez
    const botoes = document.querySelectorAll('.menu-dias button');
    const cardapios = document.querySelectorAll('.cardapio');

    function mostrarCardapio(diaSelecionado) {
        // Esconde todos os cardápios
        cardapios.forEach(cardapio => {
            cardapio.style.display = 'none';
        });

        // Remove a classe 'active' de todos os botões
        botoes.forEach(botao => {
            botao.classList.remove('active');
        });

        // Mostra o cardápio do dia selecionado
        const cardapioParaMostrar = document.getElementById(diaSelecionado);
        if (cardapioParaMostrar) {
            cardapioParaMostrar.style.display = 'block';
        }

        // Adiciona a classe 'active' ao botão clicado
        const botaoAtivo = document.querySelector(`button[data-dia="${diaSelecionado}"]`);
        if (botaoAtivo) {
            botaoAtivo.classList.add('active');
        }
    }

    // Adiciona o evento de clique a cada botão
    botoes.forEach(botao => {
        botao.addEventListener('click', () => {
            // Pega o valor do atributo 'data-dia' do botão clicado
            const dia = botao.dataset.dia;
            mostrarCardapio(dia);
        });
    });

    // Por padrão, mostra o cardápio de segunda-feira ao carregar a página
    mostrarCardapio('segunda');
});