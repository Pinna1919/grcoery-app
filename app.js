// Import required Firebase modules (modular Firebase SDK for v10+)
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Initialize Firebase Authentication
const auth = getAuth();

// Sign Up function
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if email and password are provided
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Signed up successfully: ", user);
      alert("Signup successful!");
      // Redirect to another page after signup
      window.location.href = "order.html"; // Or another page you want
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during signup: ", errorCode, errorMessage);
      alert(`Signup failed: ${errorMessage}`); // Display the error message
    });
}

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if email and password are provided
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Logged in successfully: ", user);
      alert("Login successful!");
      // Redirect to another page after login
      window.location.href = "order.html"; // Or another page you want
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error during login: ", errorCode, errorMessage);
      alert(`Login failed: ${errorMessage}`); // Display the error message
    });
}
