import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const container = document.getElementById("kurser-container");

async function loadKurser() {
  const snapshot = await getDocs(collection(db, "kurser"));

  snapshot.forEach(doc => {
    const data = doc.data();

    const div = document.createElement("div");
    div.className = "kurs";

    div.innerHTML = `
      <strong>${data.name}</strong>
      <div class="${data.aktiv ? "aktiv" : "ejaktiv"}">
        ${data.aktiv ? "Aktiv" : "Ej aktiv"}
      </div>
    `;

    container.appendChild(div);
  });
}

loadKurser();
