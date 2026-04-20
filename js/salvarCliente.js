function salvarCliente() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let email = document.getElementById("email").value;

    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    let cliente = {
        nome,
        telefone,
        email
    };

    clientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    listarClientes();
}