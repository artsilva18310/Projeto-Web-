function listarClientes() {
    let lista = document.getElementById("listaClientes");
    lista.innerHTML = "";

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    clientes.forEach(c => {
        let li = document.createElement("li");
        li.innerHTML = `
            <strong>${c.nome}</strong><br>
            📞 ${c.telefone}<br>
            📧 ${c.email}
        `;
        lista.appendChild(li);
    });
}


function listarClientes() {
    let lista = document.getElementById("listaClientes");
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