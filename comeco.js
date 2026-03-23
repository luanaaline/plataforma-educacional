const userSection = document.getElementById('user-section');
const avatarModal = document.getElementById('avatar-modal');
const closeModalBtn = document.getElementById('close-modal');
const avatarOptions = document.querySelectorAll('.avatar-option');
const currentAvatar = document.getElementById('current-avatar');
const userNameDisplay = document.getElementById('userNameDisplay');

// ===========================
// APLICAR DADOS SALVOS AO CARREGAR
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  const savedAvatar = localStorage.getItem('selectedAvatar');
  const savedName = localStorage.getItem('userName');
  const savedTheme = localStorage.getItem('theme') || 'light';

  if (savedAvatar) currentAvatar.src = savedAvatar;
  if (savedName) userNameDisplay.textContent = savedName;

  applyTheme(savedTheme);
});

// ===========================
// AVATAR
// ===========================

userSection.addEventListener('click', () => {
  avatarModal.classList.remove('hidden');
});

closeModalBtn.addEventListener('click', () => {
  avatarModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === avatarModal) {
    avatarModal.classList.add('hidden');
  }
});

avatarOptions.forEach(option => {
  option.addEventListener('click', () => {
    const selectedSrc = option.src;
    currentAvatar.src = selectedSrc;
    localStorage.setItem('selectedAvatar', selectedSrc);
    avatarModal.classList.add('hidden');
  });
});

// ===========================
// NOME DO USUÁRIO
// ===========================
const nameModal = document.getElementById('name-modal');
const closeNameModal = document.getElementById('close-name-modal');
const saveNameBtn = document.getElementById('save-name-btn');
const nameInput = document.getElementById('name-input');

userNameDisplay.addEventListener('click', (event) => {
  event.stopPropagation();
  nameModal.classList.remove('hidden');
  nameInput.value = userNameDisplay.textContent;
});

closeNameModal.addEventListener('click', () => {
  nameModal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === nameModal) {
    nameModal.classList.add('hidden');
  }
});

saveNameBtn.addEventListener('click', () => {
  const newName = nameInput.value.trim();
  if (newName !== "") {
    userNameDisplay.textContent = newName;
    localStorage.setItem('userName', newName);
    nameModal.classList.add('hidden');
  }
});

// ===========================
// MODAL DE CONFIGURAÇÕES
// ===========================
const configModal = document.getElementById("config-modal");
const openConfigBtn = document.getElementById("open-config");
const closeConfigBtn = document.querySelector(".close-config");

const btnAparencia = document.getElementById("change-theme");
const btnSair = document.getElementById("logout");

const contentAparencia = document.getElementById("content-aparencia");
const contentSair = document.getElementById("content-sair");

openConfigBtn.addEventListener("click", () => {
  configModal.classList.remove("hidden");
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
});

closeConfigBtn.addEventListener("click", () => {
  configModal.classList.add("hidden");
});

btnAparencia.addEventListener("click", () => {
  showSection("aparencia");
});

btnSair.addEventListener("click", () => {
  showSection("sair");
});

function showSection(section) {
  document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));

  if (section === "aparencia") {
    contentAparencia.classList.add("active");
  } else if (section === "sair") {
    contentSair.classList.add("active");
  }
}

// ===========================
// MODO CLARO / ESCURO
// ===========================
const lightModeRadio = document.getElementById("lightMode");
const darkModeRadio = document.getElementById("darkMode");

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (darkModeRadio) darkModeRadio.checked = true;
  } else {
    document.body.classList.remove("dark-mode");
    if (lightModeRadio) lightModeRadio.checked = true;
  }
  localStorage.setItem("theme", theme);
}

if (lightModeRadio && darkModeRadio) {
  lightModeRadio.addEventListener("change", () => {
    applyTheme("light");
  });

  darkModeRadio.addEventListener("change", () => {
    applyTheme("dark");
  });
}

// ===========================
// BOTÃO DE SAIR
// ===========================
const sairBtn = document.querySelector(".sair");
const cancelarBtn = document.querySelector(".cancelar");

sairBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.href = "saida.html";
});

cancelarBtn.addEventListener("click", () => {
  configModal.classList.add("hidden");
});
