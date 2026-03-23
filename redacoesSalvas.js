// redacoessalvas.js — usa a chave 'redacoes'
document.addEventListener("DOMContentLoaded", () => {
  const listaEl = document.getElementById("listaRedacoes");
  const busca = document.getElementById("buscaRedacoes");
  const modal = document.getElementById("modalConfirmacao");
  const btnCancelar = document.getElementById("cancelarExclusao");
  const btnConfirmar = document.getElementById("confirmarExclusao");

  let redacoes = JSON.parse(localStorage.getItem("redacoes") || "[]");
  let idParaExcluir = null;

  function segsParaHHMMSS(s) {
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  }

  function render(lista) {
    listaEl.innerHTML = "";
    if (!lista || lista.length === 0) {
      listaEl.innerHTML = "<p>Nenhuma redação salva ainda.</p>";
      return;
    }
    lista.forEach(r => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${r.tema || "(sem título)"}</h3>
        <p>${r.tipo || "—"} • ${r.genero || "—"} • Tempo: ${r.tempo || (r.tempoSegs ? segsParaHHMMSS(r.tempoSegs) : "00:00:00")}</p>
        <div class="botoes">
          <button class="btn-visualizar" data-id="${r.id}">visualizar 👀</button>
          <button class="btn-editar" data-id="${r.id}">editar ✏️</button>
          <button class="btn-excluir" data-id="${r.id}">excluir ✖️</button>
        </div>
      `;
      listaEl.appendChild(card);
    });

    // attach events
    listaEl.querySelectorAll(".btn-visualizar").forEach(b => {
      b.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        localStorage.setItem("modoRedacao", "view");
        localStorage.setItem("idRedacao", id);
        window.location.href = "criacao.html";
      });
    });

    listaEl.querySelectorAll(".btn-editar").forEach(b => {
      b.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.id;
        localStorage.setItem("modoRedacao", "edit");
        localStorage.setItem("idRedacao", id);
        window.location.href = "criacao.html";
      });
    });

    listaEl.querySelectorAll(".btn-excluir").forEach(b => {
      b.addEventListener("click", (e) => {
        idParaExcluir = e.currentTarget.dataset.id;
        modal.style.display = "flex";
      });
    });
  }

  // search
  busca && busca.addEventListener("input", () => {
    const termo = busca.value.trim().toLowerCase();
    if (!termo) return render(redacoes);
    const filtradas = redacoes.filter(r => (`${r.tema} ${r.tipo} ${r.genero} ${r.texto}`).toLowerCase().includes(termo));
    render(filtradas);
  });

  btnCancelar && btnCancelar.addEventListener("click", () => {
    modal.style.display = "none";
    idParaExcluir = null;
  });

  btnConfirmar && btnConfirmar.addEventListener("click", () => {
    if (idParaExcluir) {
      redacoes = redacoes.filter(r => String(r.id) !== String(idParaExcluir));
      localStorage.setItem("redacoes", JSON.stringify(redacoes));
      render(redacoes);
    }
    modal.style.display = "none";
    idParaExcluir = null;
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  // apply theme
  if (localStorage.getItem("theme") === "dark") document.body.classList.add("dark-mode");

  // initial render
  render(redacoes);
});