// Shubh Recipe Website JavaScript

console.log("Welcome to Shubh Recipe!");

// सभी "पूरा पढ़ें" बटन चुनें
const buttons = document.querySelectorAll(".card button");

buttons.forEach((button) => {
    button.addEventListener("click", function () {
        alert("यह डेमो वेबसाइट है। जल्द ही पूरी रेसिपी उपलब्ध होगी।");
    });
});

// Footer में वर्तमान वर्ष अपने आप दिखाएँ
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} Shubh Recipe | All Rights Reserved`;
}