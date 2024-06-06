function openLocation() {
    window.open("https://www.google.com/maps/place/Lotrioara+Sibiu", "_blank");
}

function openReservation() {
    window.location.href = "pagina-de-rezervari.html";
}

function openContact() {
    window.location.href = "contact.html";
}

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getFirestore, addDoc, getDoc, collection } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP-uI2CSVW-WvAOTZsstCebLV9ieZyxVo",
    authDomain: "cabanalotrioara.firebaseapp.com",
    projectId: "cabanalotrioara",
    storageBucket: "cabanalotrioara.appspot.com",
    messagingSenderId: "648139353740",
    appId: "1:648139353740:web:0d0210d1fdca32b4f215a9",
    measurementId: "G-7EWHXV6C4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const openLocationBtn = document.getElementById("openLocation")
if (openLocationBtn)
    openLocationBtn.addEventListener('click', openLocation)

const openReservationBtn = document.getElementById("openReservation")
if (openReservationBtn)
    openReservationBtn.addEventListener('click', openReservation)

const openContactBtn = document.getElementById("openContact")
if (openContactBtn)
    openContactBtn.addEventListener('click', openContact)

const butonSubmit = document.getElementById("butonSubmit")
if (butonSubmit) {
    butonSubmit.addEventListener('click', (e) => {
        var nume = document.getElementById("nume").value;
        var telefon = document.getElementById("telefon").value;
        var data = document.getElementById("data").value;

        addDoc(collection(db, "rezervari"), {
            Nume: nume,
            Telefon: telefon,
            Data: data,
        });
        alert("Rezervare efectuata cu succes!");
    });
}