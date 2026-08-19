/* Page System*/
let currentPage = 1;
const totalPages = 5;
const bgMusic = document.getElementById("bgMusic");
function showPage(pageNumber) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(function (page) {
        page.classList.remove("active");
    });
    const selectedPage =
        document.getElementById("page" + pageNumber);
    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}
/* Next Page*/
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
        createHeartBurst();
        if (currentPage === 2) {
          bgMusic.volume = 0.4;
          bgMusic.play();
        }
    }
}
/* Restart */
function restart() {
    currentPage = 1;
    showPage(currentPage);
}
/* Floating Hearts*/
const heartsContainer =
    document.getElementById("heartsContainer");
function createHeart() {
    const heart =
        document.createElement("div");
    heart.classList.add("heart");
    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "✨"
    ];
    heart.innerText =
        hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left =
        Math.random() * 100 + "%";
    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";
    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";
    heartsContainer.appendChild(heart);
    setTimeout(function () {
        heart.remove();
    }, 12000);
}

/* Heart Burst*/

function createHeartBurst() {
    for (let i = 0; i < 15; i++) {
        setTimeout(function () {
            createHeart();
        }, i * 100);
    }
}

/* Continuous Heart*/

setInterval(function () {
    createHeart();
}, 1000);

/* Keyboard Support*/

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowRight") {
        nextPage();
    }
});
