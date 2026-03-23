// Seleciona os elementos
const inputEmail = document.querySelector(".input-email");
const inputSenha = document.querySelector(".input-senha");
const botaoCadastrar = document.querySelector(".botao-cadastrar");

// Recupera usuários salvos no localStorage (ou inicia vazio)
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

botaoCadastrar.addEventListener("click", () => {
  const email = inputEmail.value.trim().toLowerCase();
  const senha = inputSenha.value.trim();

  if (!email || !senha) {
    alert("Preencha todos os campos!");
    return;
  }

  // Verifica se o e-mail já está cadastrado
  const existente = usuarios.find(u => u.email === email);
  if (existente) {
    alert("Este e-mail já está cadastrado!");
    return;
  }

  // Adiciona o novo usuário
  usuarios.push({ email, senha });

  // Salva no localStorage
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Cadastro realizado com sucesso!");

  // Limpa os campos
  inputEmail.value = "";
  inputSenha.value = "";

  // Redireciona para o login
  window.location.href = "login.html";
});
