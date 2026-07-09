

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");

// فتح وإغلاق القائمة
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});

// إغلاق القائمة عند الانتقال إلى شاشة كبيرة
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
        mobileMenu.classList.add("hidden");
    }
});

// تأثير الـ Navbar أثناء التمرير
window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add(
            "backdrop-blur-xl",
            "bg-slate-950/80",
            "shadow-2xl",
            "border-b",
            "border-white/5"
        );

    } else {

        navbar.classList.remove(
            "backdrop-blur-xl",
            "bg-slate-950/80",
            "shadow-2xl",
            "border-b",
            "border-white/5"
        );

    }

});

