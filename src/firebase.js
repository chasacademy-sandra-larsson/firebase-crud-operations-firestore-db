 // Import the functions you need from the SDKs you need
 import { initializeApp } from 'firebase/app';
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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
  } from 'firebase/firestore';
// eller from 'firebase/firestore/'; men då kommer inte onSnapshot med


 // Your web app's Firebase configuration
 const firebaseConfig = {
   // Din config som du hittar i din registrerade app på Firebase Console
 };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 const db = getFirestore();


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




