document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Form validation (you can add more validation checks)
        const name = form.elements["name"].value;
        const email = form.elements["email"].value;
        const message = form.elements["message"].value;

        if (!name || !email || !message) {
            responseMessage.textContent = "Please fill in all fields.";
            return;
        }

        // Simulate form submission (replace this with actual submission logic)
        responseMessage.textContent = "Thank you for your message!";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.getElementById("animatedText");
    const colorButton = document.getElementById("colorButton");

    // Fading Animation
    function fadeInOut(element, duration) {
        element.style.opacity = 0;
        let start = null;

        function animate(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            element.style.opacity = progress / duration;

            if (progress < duration) {
                requestAnimationFrame(animate);
            }
        }

        requestAnimationFrame(animate);
    }

    // Interactive Button Color Change
    colorButton.addEventListener("mouseover", function () {
        colorButton.style.backgroundColor = "#FF5733";
    });

    colorButton.addEventListener("mouseout", function () {
        colorButton.style.backgroundColor = "#FFC0CB";
    });

    // Initiate the fading animation
    fadeInOut(animatedText, 2000);
});
