import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  updateDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJsZ4LZVrBucavpTdhXbKxyE_BFeZFFKs",
  authDomain: "fir-console-df3e9.firebaseapp.com",
  projectId: "fir-console-df3e9",
  storageBucket: "fir-console-df3e9.appspot.com",
  messagingSenderId: "750795336412",
  appId: "1:750795336412:web:abfd0c06941a9418abe219"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function loadKurser() {
  const snap = await getDocs(collection(db, "kurser"));
  return snap.docs.map(d => ({
    id: d.id,
    ...d.data()
  }));
}

export async function saveAktiv(id, aktiv) {
  const ref = doc(db, "kurser", id);
  await updateDoc(ref, { aktiv });
}

export async function saveGroup(name, data) {
  await setDoc(doc(db, "groups", name), data);
}
