import { initializeApp } from "firebase/app";
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

// Your web app's Firebase configuration

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYFRgN9-F7tryf2K6E8FnGBwINfjwoyEs",
  authDomain: "test-firebase-firestore-6676a.firebaseapp.com",
  projectId: "test-firebase-firestore-6676a",
  storageBucket: "test-firebase-firestore-6676a.appspot.com",
  messagingSenderId: "887572395039",
  appId: "1:887572395039:web:dfb69e8525f5ccdcd6512a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });
  

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export const getTask = (id) => getDoc(doc(db, "tasks", id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);

export const getTasks = () => getDocs(collection(db, "tasks"));
