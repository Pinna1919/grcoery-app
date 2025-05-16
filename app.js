// Check if user is logged in
auth.onAuthStateChanged(user => {
  const onIndex = window.location.pathname.includes("index.html");
  const onLogin = window.location.pathname.includes("login.html");

  if (!user && onIndex) {
    window.location.href = "login.html";
  }
  if (user && onLogin) {
    window.location.href = "index.html";
  }
});

// Sign up function
function signup() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert("Sign up successful!");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
}

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert("Logged in!");
      window.location.href = "index.html";
    })
    .catch(error => {
      alert(error.message);
    });
}

// Logout
function logout() {
  auth.signOut()
    .then(() => {
      alert("Logged out!");
      window.location.href = "login.html";
    });
}

// Place order
function placeOrder() {
  const product = document.getElementById("product").value;
  const quantity = parseInt(document.getElementById("quantity").value);

  const user = auth.currentUser;
  if (!user) {
    alert("Please log in first.");
    return;
  }

  db.collection("orders").add({
    userId: user.uid,
    email: user.email,
    product,
    quantity,
    timestamp: new Date().toISOString()
  }).then(() => {
    alert("Order placed!");
  }).catch(err => {
    alert("Error placing order: " + err.message);
  });
}
