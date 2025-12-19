// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

// إعداد Firebase
const firebaseConfig = {
  apiKey: "PUT_YOUR_KEY",
  authDomain: "fir-console-df3e9.firebaseapp.com",
  projectId: "fir-console-df3e9",
  storageBucket: "fir-console-df3e9.appspot.com",
  messagingSenderId: "750795336412",
  appId: "1:750795336412:web:abfd0c06941a9418abe219"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// جلب الكورسات
export async function loadKurser() {
  const snap = await getDocs(collection(db, "kurser"));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// تغيير حالة الكورس
export async function saveAktiv(id, aktiv) {
  await updateDoc(doc(db, "kurser", id), { aktiv });
}

// حفظ uppgift
export async function saveUppgift(data) {
  await addDoc(collection(db, "uppgifter"), {
    ...data,
    createdAt: new Date()
  });
}

console.log("Firebase connected");
