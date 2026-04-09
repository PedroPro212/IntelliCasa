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
// SLIDER INTERATIVO AUTOMÁTICO
// ===============================
const slider = document.getElementById("slider");
const overlay = document.getElementById("overlay");
const divider = document.getElementById("divider");
const textOverlay = document.getElementById("textOverlay");
const textBase = document.getElementById("textBase");

// Atualiza posição do slider
function updatePosition(x) {
    const rect = slider.getBoundingClientRect();
    let position = x - rect.left;

    position = Math.max(0, Math.min(position, rect.width));

    // imagem overlay
    overlay.style.clipPath = `inset(0 ${rect.width - position}px 0 0)`;

    // texto azul acompanha
    textOverlay.style.clipPath = `inset(0 ${rect.width - position}px 0 0)`;

    // texto cinza acompanha lado oposto
    textBase.style.clipPath = `inset(0 0 0 ${position}px)`;

    // divisor acompanha mouse
    divider.style.left = position + "px";
}

// Movimento automático ao passar mouse
slider.addEventListener("mousemove", (e) => {
    updatePosition(e.clientX);
});

// Suporte para touch mobile
slider.addEventListener("touchmove", (e) => {
    updatePosition(e.touches[0].clientX);
});

// Posição inicial no centro
window.addEventListener("load", () => {
    const rect = slider.getBoundingClientRect();
    const middle = rect.left + rect.width / 2;
    updatePosition(middle);
});