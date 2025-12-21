import { loadKurser, toggleAktiv } from "./firebase.js";

const container = document.getElementById("kurser");

async function renderKurser() {
  container.innerHTML = "";

  const kurser = await loadKurser();

  kurser.forEach(kurs => {
    const div = document.createElement("div");
    div.className = "kurs";

    div.innerHTML = `
      <div>
        <strong>${kurs.name}</strong><br>
        <span class="${kurs.aktiv ? "aktiv" : "ejaktiv"}">
          ${kurs.aktiv ? "Aktiv" : "Ej aktiv"}
        </span>
      </div>
      <button>Toggle</button>
    `;

    div.querySelector("button").onclick = async () => {
      await toggleAktiv(kurs.id, !kurs.aktiv);
      renderKurser();
    };

    container.appendChild(div);
  });
}

renderKurser();
