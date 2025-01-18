function detectUserLanguage() {
    console.log(`get lang ${navigator.language}`)
    // return navigator.language.split("-")[0] || "zh-TW";
    return navigator.language || "zh-TW";
}

function applyLanguage(lang) {
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.style.display = el.getAttribute("data-lang") === lang ? "block" : "none";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const lang = detectUserLanguage();
    console.log(`detect lang ${lang}`)
    applyLanguage(lang);
    return;
});