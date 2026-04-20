function salvarCliente() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;

    if (!nome || !telefone || !email) {
        alert("Preencha todos os campos!");
        return;
    }

    let cliente = { nome, telefone, email };

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    clientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    // Limpar campos
    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";

    listarClientes();
}

function listarClientes() {
    let lista = document.getElementById("listaClientes");
    if (!lista) return;
    lista.innerHTML = "";

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    clientes.forEach((c, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${c.nome}</strong><br>
            📞 ${c.telefone}<br>
            📧 ${c.email}<br>
            <button onclick="removerCliente(${index})">Excluir</button>
        `;
        lista.appendChild(li);
    });
}

function removerCliente(index) {
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
    clientes.splice(index, 1);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    listarClientes();
}

function salvarServico() {
    let nome = document.getElementById("servico").value;
    let valor = document.getElementById("valor").value;

    if (!nome || !valor) {
        alert("Preencha todos os campos!");
        return;
    }

    let servico = { nome, valor };

    let servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    servicos.push(servico);

    localStorage.setItem("servicos", JSON.stringify(servicos));

    // Limpar campos
    document.getElementById("servico").value = "";
    document.getElementById("valor").value = "";

    listarServicos();
}

function listarServicos() {
    let lista = document.getElementById("listaServicos");
    if (!lista) return;
    lista.innerHTML = "";

    let servicos = JSON.parse(localStorage.getItem("servicos")) || [];

    servicos.forEach((s, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${s.nome}</strong><br>
            💰 R$ ${s.valor}<br>
            <button onclick="removerServico(${index})">Excluir</button>
        `;
        lista.appendChild(li);
    });
}

function removerServico(index) {
    let servicos = JSON.parse(localStorage.getItem("servicos")) || [];
    servicos.splice(index, 1);
    localStorage.setItem("servicos", JSON.stringify(servicos));
    listarServicos();
}


function salvarOS() {
    let descricao = document.getElementById("descricao").value;

    if (!descricao) {
        alert("Preencha a descrição!");
        return;
    }

    let ordem = { descricao };

    let ordens = JSON.parse(localStorage.getItem("ordens")) || [];

    ordens.push(ordem);

    localStorage.setItem("ordens", JSON.stringify(ordens));

    // Limpar campo
    document.getElementById("descricao").value = "";

    listarOS();
}

function listarOS() {
    let lista = document.getElementById("listaOS");
    if (!lista) return;
    lista.innerHTML = "";

    let ordens = JSON.parse(localStorage.getItem("ordens")) || [];

    ordens.forEach((o, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>OS:</strong> ${o.descricao}<br>
            <button onclick="removerOS(${index})">Excluir</button>
        `;
        lista.appendChild(li);
    });
}

function removerOS(index) {
    let ordens = JSON.parse(localStorage.getItem("ordens")) || [];
    ordens.splice(index, 1);
    localStorage.setItem("ordens", JSON.stringify(ordens));
    listarOS();
}

// Inicializar listas ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('listaClientes')) listarClientes();
    if (document.getElementById('listaServicos')) listarServicos();
    if (document.getElementById('listaOS')) listarOS();
});