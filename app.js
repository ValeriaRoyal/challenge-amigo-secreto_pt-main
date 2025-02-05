function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const errorMessage = document.getElementById('error-message');
    const nome = input.value.trim();

    // Validação do campo
    if (!nome) {
        input.setAttribute('aria-invalid', 'true');
        errorMessage.textContent = 'Por favor, digite um nome válido';
        errorMessage.style.display = 'block';
        input.focus();
        return;
    }

    // Adiciona à lista
    const lista = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    lista.appendChild(novoItem);

    // Limpa e reseta o campo
    input.value = '';
    input.setAttribute('aria-invalid', 'false');
    errorMessage.style.display = 'none';
    input.focus();
}

// Validação em tempo real
document.getElementById('amigo').addEventListener('input', function() {
    const botaoAdicionar = document.querySelector('.button-add');
    const errorMessage = document.getElementById('error-message');
    const nome = this.value.trim();

    if (nome) {
        botaoAdicionar.disabled = false;
        botaoAdicionar.setAttribute('aria-disabled', 'false');
        this.setAttribute('aria-invalid', 'false');
        errorMessage.style.display = 'none';
    } else {
        botaoAdicionar.disabled = true;
        botaoAdicionar.setAttribute('aria-disabled', 'true');
        this.setAttribute('aria-invalid', 'true');
    }
});

function sortearAmigo() {
    const lista = document.getElementById('listaAmigos');
    const itens = lista.getElementsByTagName('li');
    const resultado = document.getElementById('resultado');
    
    // Verifica se há nomes na lista
    if(itens.length < 2) {
        alert('Adicione pelo menos 2 nomes para sortear!');
        return;
    }

    // Esconde a lista de nomes
    lista.style.display = 'none';
    
    // Sorteia um nome aleatório
    const indiceSorteado = Math.floor(Math.random() * itens.length);
    const amigoSorteado = itens[indiceSorteado].textContent;

    // Exibe o resultado
    resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultado.style.display = 'block';
}


// Validação ao pressionar Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        adicionarAmigo();
    }
});