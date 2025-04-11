// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOSk3FSsk5dYMH0MytFL4EcGAaQqu5CPg",
    authDomain: "hexademo-3cea3.firebaseapp.com",
    projectId: "hexademo-3cea3",
    storageBucket: "hexademo-3cea3.firebasestorage.app",
    messagingSenderId: "887845219321",
    appId: "1:887845219321:web:1c189e8732972b736dab28",
    measurementId: "G-7HFQ1QWKRB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
