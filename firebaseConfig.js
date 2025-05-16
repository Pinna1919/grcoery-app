// Replace the values below with your actual Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCrxEvrpp1EWc4IaDZQAYrRlKzcMWlDRhs",
  authDomain: "my-groceryapp-sk.firebaseapp.com",
  projectId: "my-groceryapp-sk",
  storageBucket: "my-groceryapp-sk.firebasestorage.app",
  messagingSenderId: "485195742598",
  appId: "1:485195742598:web:7c1b0dc6e2d38895040007",
  measurementId: "G-TCM8FC8822"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
