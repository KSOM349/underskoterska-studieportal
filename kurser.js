import { loadKurser, saveAktiv } from "./firebase.js";

const container = document.getElementById("kurser-list");

async function renderKurser() {
  const kurser = await loadKurser();
  container.innerHTML = "";

  kurser.forEach(kurs => {
    const div = document.createElement("div");
    div.className = "kurs";

    div.innerHTML = `
      <h3>${kurs.name}</h3>
      <p>
        Status:
        <strong style="color:${kurs.aktiv ? "green" : "gray"}">
          ${kurs.aktiv ? "Aktiv" : "Ej aktiv"}
        </strong>
      </p>
      <button>Ändra status</button>
      ${kurs.teacherEmail ? `<p>E-post: <a href="mailto:${kurs.teacherEmail}">${kurs.teacherEmail}</a></p>` : ""}
      ${kurs.deadline ? `<p>Deadline: ${kurs.deadline}</p>` : ""}
    `;

    const btn = div.querySelector("button");
    btn.onclick = async () => {
      await saveAktiv(kurs.id, !kurs.aktiv);
      renderKurser();
    };

    container.appendChild(div);
  });
}

renderKurser();

