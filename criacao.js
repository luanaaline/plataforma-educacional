// criacao.js — versão final, consistente
document.addEventListener("DOMContentLoaded", () => {
  const temaEl = document.getElementById("temaRedacao");
  const tipoEl = document.getElementById("tipoRedacao");
  const generoEl = document.getElementById("generoRedacao");
  const textarea = document.getElementById("writing-area");
  const linhasEl = document.getElementById("qtdLinhas");
  const paragrafosEl = document.getElementById("qtdParagrafos");
  const timerEl = document.getElementById("timer");
  const btnSalvar = document.getElementById("btnSalvarRedacao");
  const btnVoltarLista = document.getElementById("btnVoltarLista");

  function primeiraMaiuscula(texto) {
    if (!texto) return "";
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  // Carrega metadados
  const tema = localStorage.getItem("temaEscolhido") || "Nenhum tema selecionado";
  const tipo = localStorage.getItem("tipoTexto") || "Não selecionado";
  const genero = localStorage.getItem("genero") || "Não selecionado";

  if (temaEl) temaEl.textContent = tema;
  if (tipoEl) tipoEl.textContent = primeiraMaiuscula(tipo);
  if (generoEl) generoEl.textContent = genero;

  // Modo e id
  const modo = localStorage.getItem("modoRedacao") || "create";
  const idRedacao = localStorage.getItem("idRedacao");

  // Timer
  let segundos = 0;
  let intervalo = null;

  function formatarHHMMSS(s) {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  }

  function atualizarTimerVisual() {
    timerEl.textContent = formatarHHMMSS(segundos);
  }

  function iniciarTimer() {
    if (intervalo) return;
    intervalo = setInterval(() => {
      segundos++;
      atualizarTimerVisual();
    }, 1000);
  }

  function pararTimer() {
    if (intervalo) {
      clearInterval(intervalo);
      intervalo = null;
    }
  }

  // ======================= CONTADOR DE LINHAS (AJUSTADO) =======================
function contarLinhasVisiveis(textElem) {
    const texto = textElem.value;

    // Se não escreveu nada → 0
    if (texto.trim() === "") return 0;

    const estilo = window.getComputedStyle(textElem);

    // Criar espelho
    const espelho = document.createElement("div");
    espelho.style.position = "absolute";
    espelho.style.visibility = "hidden";
    espelho.style.whiteSpace = "pre-wrap";
    espelho.style.wordWrap = "break-word";

    // Copiar estilos críticos
    espelho.style.width = estilo.width;
    espelho.style.fontFamily = estilo.fontFamily;
    espelho.style.fontSize = estilo.fontSize;
    espelho.style.lineHeight = estilo.lineHeight;

    // IMPORTANTE: sem padding!
    espelho.style.padding = "0";
    espelho.style.border = "none";

    // Coloca o texto
    espelho.textContent = texto;

    document.body.appendChild(espelho);

    // Calcular altura do texto puro
    const alturaTexto = espelho.offsetHeight;

    let alturaLinha = parseFloat(estilo.lineHeight);
    if (isNaN(alturaLinha)) alturaLinha = parseFloat(estilo.fontSize) * 1.2;

    const linhas = Math.ceil(alturaTexto / alturaLinha);

    espelho.remove();

    return linhas;
}



  // ============================================================================

  // ========== CONTADOR DE PARÁGRAFOS ==========
  function contarParagrafos(textElem) {
    return textElem.value
      .split("\n")
      .filter(l => l.trim() !== "")
      .length;
  }

  function atualizarContagem() {
    linhasEl.textContent = contarLinhasVisiveis(textarea);
    paragrafosEl.textContent = contarParagrafos(textarea);
  }

  btnVoltarLista.addEventListener("click", () => {
    localStorage.removeItem("modoRedacao");
    localStorage.removeItem("idRedacao");
    window.location.href = "redacoessalvas.html";
  });

  const todas = JSON.parse(localStorage.getItem("redacoes") || "[]");

  if ((modo === "edit" || modo === "view") && idRedacao) {
    const r = todas.find(x => String(x.id) === String(idRedacao));
    if (r) {
      textarea.value = r.texto || "";
      segundos = Number(r.segs || r.tempoSegs || 0);

      if (typeof segundos !== "number" || isNaN(segundos)) segundos = 0;

      atualizarTimerVisual();
      atualizarContagem();

      if (modo === "view") {
        textarea.setAttribute("readonly", "readonly");
        btnSalvar.style.display = "none";
      } else {
        iniciarTimer();
      }
    } else {
      localStorage.removeItem("modoRedacao");
      localStorage.removeItem("idRedacao");
      textarea.value = "";
      segundos = 0;
      atualizarTimerVisual();
      atualizarContagem();
    }
  } else {
    textarea.value = "";
    segundos = 0;
    atualizarTimerVisual();
    atualizarContagem();
  }

  textarea.addEventListener("input", () => {
    if (modo === "create" || modo === "edit") iniciarTimer();
    atualizarContagem();
  });

  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter") setTimeout(atualizarContagem, 0);
  });

  btnSalvar.addEventListener("click", () => {
    const texto = textarea.value;
    if (!texto.trim()) {
      alert("Escreva algo antes de salvar a redação!");
      return;
    }

    let arr = JSON.parse(localStorage.getItem("redacoes") || "[]");

    const tempoSegs = segundos;
    const tempoHH = formatarHHMMSS(segundos);

    const obj = {
      tema,
      tipo,
      genero,
      texto,
      tempo: tempoHH,
      tempoSegs,
      linhas: contarLinhasVisiveis(textarea),
      paragrafos: contarParagrafos(textarea)
    };

    if (modo === "edit" && idRedacao) {
      const idx = arr.findIndex(x => String(x.id) === String(idRedacao));
      if (idx > -1) {
        arr[idx] = { ...arr[idx], ...obj };
      } else {
        obj.id = Date.now();
        arr.push(obj);
      }
    } else {
      obj.id = Date.now();
      arr.push(obj);
    }

    localStorage.setItem("redacoes", JSON.stringify(arr));

    localStorage.removeItem("modoRedacao");
    localStorage.removeItem("idRedacao");
    pararTimer();

    alert("Redação salva com sucesso!");
    window.location.href = "redacoessalvas.html";
  });
});
