import { db } from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const container = document.getElementById("kurser");

async function loadKurser() {
  const snap = await getDocs(collection(db, "kurser"));
  return snap.docs.map(doc => doc.data());
}

async function renderKurser() {
  if (!container) return;

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
    `;

    container.appendChild(div);
  });
}

renderKurser();
