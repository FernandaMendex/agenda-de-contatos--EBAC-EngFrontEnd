const form = document.getElementById('formAgenda');

let contatos = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaContato();
    atualizaAgenda();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('tel-contato');

    let novoContato = '<tr>';
    novoContato += `<td>${inputNomeContato.value}</td>`;
    novoContato += `<td>${inputTelContato.value}</td>`;

    contatos += novoContato;

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = contatos;
}