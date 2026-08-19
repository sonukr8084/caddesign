// Simple scroll effect

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Current year in footer

const year = new Date().getFullYear();

console.log("Portfolio loaded - " + year);