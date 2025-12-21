import { loadKurser, saveAktiv } from "./firebase.js";

const container = document.getElementById("kurser-list");

async function renderKurser() {
  const kurser = await loadKurser();
  container.innerHTML = "";

  kurser.forEach(kurs => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div>
        <strong>${kurs.name}</strong><br>
        Status: ${kurs.aktiv ? "Aktiv" : "Ej aktiv"}
        <button>Ändra</button>
      </div>
    `;

    div.querySelector("button").onclick = async () => {
      await saveAktiv(kurs.id, !kurs.aktiv);
      renderKurser();
    };

    container.appendChild(div);
  });
}

renderKurser();
