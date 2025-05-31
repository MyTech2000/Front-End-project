document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const logo = document.getElementById("logo");
    let darkMode = false;

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        toggleButton.classList.toggle("dark");
        document.querySelector(".header1").classList.toggle("dark-header1");
        document.querySelectorAll(".activation_button").forEach(button => {
            button.classList.toggle("dark");
        });
        console.log("0000");
        document.querySelectorAll(".button").forEach(btn =>
            btn.classList.toggle("dark-button")
        );

        document.querySelectorAll(".card").forEach(card =>
            card.classList.toggle("dark-card")
        );

        if (!darkMode) {
            toggleButton.innerHTML = '<img src="images/icon-sun.svg" alt="Dark Mode">';
            logo.src = "images/logo2.png";
        } else {
            toggleButton.innerHTML = '<img src="images/icon-moon.svg" alt="Light Mode">';
            logo.src = "images/logo.svg";
        }

        darkMode = !darkMode;
    });

    document.querySelectorAll(".activation_button").forEach(button => {
        button.addEventListener("click", function () {
            const image = button.querySelector(".activation_image");
            const filename = image.src.split("/").pop();
            if (filename === "on.png") {
                image.src = "images/off.png";
            } else {
                image.src = "images/on.png";
            }
        });
    });
    document.getElementById("show-all").addEventListener("click", function () {
        document.querySelectorAll(".card").forEach(card => {
            card.style.display = "block";
        });
    });
    
    document.getElementById("show-active").addEventListener("click", function () {
        document.querySelectorAll(".card").forEach(card => {
            const img = card.querySelector(".activation_image");
            if (img && img.src.includes("on.png")) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    
    document.getElementById("show-inactive").addEventListener("click", function () {
        document.querySelectorAll(".card").forEach(card => {
            const img = card.querySelector(".activation_image");
            if (img && img.src.includes("off.png")) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-button")) {
            const card = e.target.closest(".card");
            if (card) {
                const confirmDelete = confirm("Are you sure you want to remove this card?");
                if (confirmDelete) {
                    card.remove();
                }
            }
        }
    });
    const filterButtons = document.querySelectorAll(".button");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove 'selected' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("selected"));

            // Add 'selected' class to the clicked one
            button.classList.add("selected");

        });
    });
    
    
});
