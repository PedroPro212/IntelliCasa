// ===============================
// ELEMENTOS GERAIS
// ===============================
const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

// ===============================
// NAVBAR SCROLL
// ===============================
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("bg-black/70", "backdrop-blur-xl", "shadow-lg");
    } else {
        navbar.classList.remove("bg-black/70", "backdrop-blur-xl", "shadow-lg");
    }
});

// ===============================
// MENU MOBILE
// ===============================
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// ===============================
// FORMULÁRIO WHATSAPP
// ===============================
document.getElementById("whatsappForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const numeroWhatsApp = "5535997444848";

    const texto =
        `Olá! Meu nome é ${nome}%0A` +
        `WhatsApp: ${telefone}%0A%0A` +
        `Tenho interesse nas seguintes automações:%0A${mensagem}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
    window.open(url, "_blank");
});

// ===============================
// SLIDER INTERATIVO
// ===============================
const slider = document.getElementById("slider");
const overlay = document.getElementById("overlay");
const divider = document.getElementById("divider");
const textOverlay = document.getElementById("textOverlay");
const textBase = document.getElementById("textBase");

let isDragging = false;

// Atualiza posição do slider
function updatePosition(x) {
    const rect = slider.getBoundingClientRect();
    let position = x - rect.left;

    position = Math.max(0, Math.min(position, rect.width));

    // imagem overlay
    overlay.style.clipPath = `inset(0 ${rect.width - position}px 0 0)`;

    // texto azul acompanha
    textOverlay.style.clipPath = `inset(0 ${rect.width - position}px 0 0)`;

    // texto cinza mostra lado direito
    textBase.style.clipPath = `inset(0 0 0 ${position}px)`;

    divider.style.left = position + "px";
}

// Mouse down
slider.addEventListener("mousedown", () => {
    isDragging = true;
});

// Mouse up
window.addEventListener("mouseup", () => {
    isDragging = false;
});

// Mouse move
window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
});

// Posição inicial
window.addEventListener("load", () => {
    const rect = slider.getBoundingClientRect();
    const middle = rect.left + rect.width / 2;
    updatePosition(middle);
});