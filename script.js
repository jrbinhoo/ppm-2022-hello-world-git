document.querySelector('#clique-aqui').onclick = () => {
    const nome = document.querySelector('#campo-nome').value;
    if (nome) {
        alert(`Hello word, ${nome}!`);
    }
}

document.querySelector('#limpa').onclick = () => {
    document.querySelector('#campo-nome').value = '';
}