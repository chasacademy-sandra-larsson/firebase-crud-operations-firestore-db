
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js"; //from "firebase/app";
// CDN from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
// Mer om Cloud Firestore och dokumentation av funktioner => https://firebase.google.com/docs/firestore

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//from 'firebase/firestore';
// CDN from 

// Your web app's Firebase configuration
const firebaseConfig = {
 // CREDENTIALS
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/*Obs! Här används colletion "task" - se till att du skapar en ny collection med 
* samma namn Firebase console -> Build -> Firestore Database -> Start collection
*/

/**
 * Sparar en ny uppgift i Firestore
 * @param {string} title uppgiftens titel
 * @param {string} description beskrivning av uppgift
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });
  

// Lyssnar på förändringar och uppdaterar dem i collection
export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 * Tar bort en ny uppgift 
 * @param {string} id uppgiftens id
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

/**
 * Hämtar en ny uppgift
 * @param {string} uppgiftens id
 */
export const getTask = (id) => getDoc(doc(db, "tasks", id));

/**
 * Uppdaterar en ny uppgift
 * @param {string} id uppgiftens id
 * @param {string} newFields uppdaterad data
 */
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);


/**
 * Hämtar alla uppgifter
 */
export const getTasks = () => getDocs(collection(db, "tasks"));
