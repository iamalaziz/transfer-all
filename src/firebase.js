// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// since it is in test mode, i didn't hide my credentials

const firebaseConfig = {
  apiKey: "AIzaSyD504h6zFA2hB0N6Iiw-UzbRPbX0poFbPU",
  authDomain: "transfer-all.firebaseapp.com",
  projectId: "transfer-all",
  storageBucket: "transfer-all.appspot.com",
  messagingSenderId: "568075505190",
  appId: "1:568075505190:web:25ab31f2925a5fe01e60e7",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

