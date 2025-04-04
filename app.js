// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGwHSXSox6hSbrBQdm60vwY37r69aWKik",
    authDomain: "the-2crazy-blog.firebaseapp.com",
    projectId: "the-2crazy-blog",
    storageBucket: "the-2crazy-blog.firebasestorage.app",
    messagingSenderId: "423860344499",
    appId: "1:423860344499:web:cbb06e74fbf8a1837f02c6",
    measurementId: "G-JBPVRF5XH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Show Sign Up Form
document.getElementById('toggleToSignUp').addEventListener('click', () => {
    document.getElementById('loginForm').style.display = "none";
    document.getElementById('signUpForm').style.display = "block";
});

// Show Login Form
document.getElementById('toggleToLogin').addEventListener('click', () => {
    document.getElementById('signUpForm').style.display = "none";
    document.getElementById('loginForm').style.display = "block";
});

// Sign Up Functionality
document.getElementById('signUp').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    console.log("Attempting sign up with email: ", email);

    // Firebase sign up
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign-up successful
            console.log("Sign up successful:", userCredential);
            alert("Sign-Up Successful!");
            window.location.href = "index.html"; // Redirect to homepage
        })
        .catch((error) => {
            // Error during sign-up
            console.log("Sign up error:", error);
            alert("Error: " + error.message);
        });
});

// Login Functionality
document.getElementById('login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    console.log("Attempting login with email: ", email);

    // Firebase login
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Login successful
            console.log("Login successful:", userCredential);
            alert("Login Successful!");
            window.location.href = "index.html"; // Redirect to homepage
        })
        .catch((error) => {
            // Error during login
            console.log("Login error:", error);
            alert("Error: " + error.message);
        });
});
