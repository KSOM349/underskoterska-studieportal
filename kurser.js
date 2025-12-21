import { db } from "./firebase.js";
import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const container = document.getElementById("kurser");

async function loadKurser() {
  const snapshot = await getDocs(collection(db, "kurser"));
  return snapshot.docs.map(doc => doc.data());
}

async function renderKurser() {
  if (!container) return;

  container.innerHTML = "";

  const kurser = await loadKurser();

  kurser.forEach(kurs => {
    const div = document.createElement("div");
    div.className = "kurs";

    div.innerHTML = `
      <strong>${kurs.name}</strong>
    `;

    container.appendChild(div);
  });
}

renderKurser();
