document.addEventListener("DOMContentLoaded", () => {
    const upBtn = document.getElementById("scrollUpBtn");
    const downBtn = document.getElementById("scrollDownBtn");
    
    // Configures how far a click scrolls up/down (based on view height)
    const scrollAmount = window.innerHeight * 0.7; 

    // Handle scroll state changes (Hiding / Showing buttons dynamically)
    window.addEventListener("scroll", () => {
        // Current distance from the top of the document
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        // Maximum scrollable limit
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        // Toggle Up button
        if (scrollTop > 200) {
            upBtn.classList.add("visible");
        } else {
            upBtn.classList.remove("visible");
        }

        // Toggle Down button
        if (scrollTop < totalHeight - 50) {
            downBtn.classList.add("visible");
        } else {
            downBtn.classList.remove("visible");
        }
    });

    // Execute scrolling actions smoothly on interaction
    upBtn.addEventListener("click", () => {
        window.scrollBy({
            top: -scrollAmount,
            behavior: "smooth"
        });
    });

    downBtn.addEventListener("click", () => {
        window.scrollBy({
            top: scrollAmount,
            behavior: "smooth"
        });
    });

    // Fire event once immediately to correctly set button visibilities on initial page load
    window.dispatchEvent(new Event('scroll'));
});