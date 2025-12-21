import { loadKurser, saveAktiv } from "./firebase.js";

const container = document.getElementById("kurser-list");

async function renderKurser() {
  container.innerHTML = "";

  const kurser = await loadKurser();

  kurser.forEach(kurs => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${kurs.name}</h3>
      <p>Status: ${kurs.aktiv ? "Aktiv" : "Ej aktiv"}</p>
      <button>Ändra status</button>
    `;

    div.querySelector("button").onclick = async () => {
      await saveAktiv(kurs.id, !kurs.aktiv);
      renderKurser();
    };

    container.appendChild(div);
  });
}

renderKurser();
