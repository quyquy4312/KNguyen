
// Sign in form 

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFtnhZtvrVjTtxt_6PLAxzs4zL1ynp4S8",
  authDomain: "tidy-elf-379311.firebaseapp.com",
  projectId: "tidy-elf-379311",
  storageBucket: "tidy-elf-379311.appspot.com",
  messagingSenderId: "1044738629305",
  appId: "1:1044738629305:web:78c3ef7b15c6d486560568",
  measurementId: "G-RS0DHBX5PQ",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpSubmitButton = document.getElementById("signSubmit");

signUpSubmitButton.addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent the default form submission behavior


  signUpSubmitButton.classList.add("disabled-button");
  signUpSubmitButton.disabled = true;


  const email = document.getElementById("signUpEmail").value;
  const password = document.getElementById("signUpPassword").value;
  const confirmPassword = document.getElementById("signUpPassword1").value;
  const name = document.getElementById("signUpName").value;

  if (password !== confirmPassword) {
    // Display a password mismatch error message
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "Passwords do not match.";
    errorMessage.className = "error-message";
    document
      .getElementById("signSubmit")
      .insertAdjacentElement("afterend", errorMessage);

    setTimeout(function () {
      errorMessage.remove();
    }, 3000);
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Store additional user data in Firebase (if needed)
    // Example: await setDoc(doc(db, "users", user.uid), { name: name, email: email });

    alert("Signup complete");
  } catch (error) {
    // Display an error message
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "Error creating user: " + error.message;
    errorMessage.className = "error-message";
    document
      .getElementById("signSubmit")
      .insertAdjacentElement("afterend", errorMessage);

    setTimeout(function () {
      errorMessage.remove();
    }, 3000);

    console.error("Error creating user:", error.code, error.message);
  }
});




