var hero = document.getElementById("hero");
var virus = document.getElementById("virus");
var counter = 0;

function jump() {
    if (hero.classList == "jump") { return }
    hero.classList.add("jump");
    setTimeout(function() {
        hero.classList.remove("jump");
    }, 300);
}
var checkDead = setInterval(function() {
    let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue("top"));
    let virusLeft = parseInt(window.getComputedStyle(virus).getPropertyValue("left"));
    if (virusLeft < 10 && virusLeft > -10 && heroTop == 140) {
        virus.style.animation = "none";
        var ans = confirm("Game Over. score: " + Math.floor(counter / 100) + "\nPLAY AGAIN");
        if (!ans) {
            window.location = "F:/Escape/Front.html";
        }
        counter = 0;
        virus.style.animation = "virus 2s infinite linear";

    } else {
        counter++;
        document.getElementById("scoreCont").innerHTML = "Your Score " +
            Math.floor(counter / 100);
    }
}, 10);