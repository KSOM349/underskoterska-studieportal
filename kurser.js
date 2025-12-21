import { loadKurser, saveAktiv } from "./firebase.js";

const container = document.getElementById("kurser-list");

async function renderKurser() {
  container.innerHTML = "";

  const kurser = await loadKurser();

  kurser.forEach(kurs => {
    const div = document.createElement("div");
    div.className = "kurs";

    div.innerHTML = `
      <div>
        <div><strong>${kurs.name}</strong></div>
        <div class="${kurs.aktiv ? "aktiv" : "ejaktiv"}">
          ${kurs.aktiv ? "Aktiv" : "Ej aktiv"}
        </div>
      </div>
      <button>Ändra</button>
    `;

    div.querySelector("button").onclick = async () => {
      await saveAktiv(kurs.id, !kurs.aktiv);
      renderKurser();
    };

    container.appendChild(div);
  });
}

renderKurser();

