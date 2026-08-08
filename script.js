const input = document.getElementById("input");
const message = document.getElementById("message");

let heartInterval = null;

input.addEventListener("keydown", function(event) {

    if (event.key === "ILOVEYOU") {

        message.style.display = "block";

        input.style.display = "none";

        if (!heartInterval) {

            heartInterval =
                setInterval(createHeart, 150);

        }
    }

});

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random() * 100 + "vw";

    const size =
        Math.random() * 35 + 15;

    heart.style.fontSize =
        size + "px";

    const duration =
        Math.random() * 4 + 3;

    heart.style.animationDuration =
        duration + "s";

    document.body.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, duration * 1000);
}
