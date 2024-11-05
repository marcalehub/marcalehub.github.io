document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    const observerOptions = {
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    }, observerOptions);
    cards.forEach(card => {
        observer.observe(card);
    })
});