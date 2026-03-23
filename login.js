const inputEmail = document.querySelector(".input-email");
const inputSenha = document.querySelector(".input-senha");
const botaoLogin = document.querySelector(".botao-login");

botaoLogin.addEventListener("click", function (event) {
    event.preventDefault();

    const email = inputEmail.value.trim().toLowerCase();
    const senha = inputSenha.value.trim();

    // Pega os usuários do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se algum usuário bate com email e senha
    const usuarioValido = usuarios.find(
        usuario => usuario.email === email && usuario.senha === senha
    );

    if (usuarioValido) {
        // Salva info do usuário logado
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioValido));
        alert("Login realizado com sucesso!");
        window.location.href = "inicio2.html";
    } else {
        alert("Email ou senha incorretos!");
    }
});
