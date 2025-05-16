// Import required Firebase modules
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

// Sign Up function
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed up successfully: ", user);
      alert("Signup successful!");
      // Redirect to another page after signup
      window.location.href = "order.html"; // Or another page you want
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("Error during signup: ", errorMessage);
      alert(errorMessage);
    });
}

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in successfully: ", user);
      alert("Login successful!");
      // Redirect to another page after login
      window.location.href = "order.html"; // Or another page you want
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log("Error during login: ", errorMessage);
      alert(errorMessage);
    });
}
