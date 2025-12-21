import { loadKurser, saveAktiv } from "./firebase.js";

const container = document.getElementById("kurser-list");

async function renderKurser() {
  const kurser = await loadKurser();
  container.innerHTML = "";

  kurser.forEach(kurs => {
    const div = document.createElement("div");
    div.className = "kurs";

    div.innerHTML = `
      <div>
        <div><strong>${kurs.name}</strong></div>
        <div class="status ${kurs.aktiv ? "aktiv" : "ejaktiv"}">
          ${kurs.aktiv ? "Aktiv" : "Ej aktiv"}
        </div>
        ${kurs.teacherEmail ? `<div>E-post: <a href="mailto:${kurs.teacherEmail}">${kurs.teacherEmail}</a></div>` : ""}
        ${kurs.deadline ? `<div>Deadline: ${kurs.deadline}</div>` : ""}
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
