document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validação simples (usuário e senha não podem estar vazios)
    if (username && password) {
        // Redireciona para a página home.html após 1 segundo (simulando um login)
        setTimeout(() => {
            window.location.href = "../home/home.html"; // Caminho corrigido
        }, 1000);
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});