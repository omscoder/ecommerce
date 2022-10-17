import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxkxf3QpIQebljENyQXUqtBOCVwEyyFZo",
  authDomain: "fitshop-1b7e4.firebaseapp.com",
  projectId: "fitshop-1b7e4",
  storageBucket: "fitshop-1b7e4.appspot.com",
  messagingSenderId: "382617976427",
  appId: "1:382617976427:web:5a17f4e1e9b336a863fb2e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

