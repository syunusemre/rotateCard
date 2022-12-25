function Kayakingfunc() {
    let kayaking = document.getElementById("kano-card");
    let camping = document.getElementById("camp-card");
    let kano = document.getElementById("kano");
    let camp = document.getElementById("camp");
    let fire = document.getElementById("fire");
    kayaking.style.transform = "rotateY(180deg)";
    kayaking.style.transition = "1s";
    kayaking.style.opacity = "0";
	kayaking.style.cursor="pointer";
    camping.style.transform = "rotateY(360deg)";
    camping.style.opacity = "1";
    kano.style.top = "-180px";
    kano.style.left = "-70px";
    camp.style.transform = "scale(1, 1)";
    fire.style.transform = "scale(1, 1)";
}

function Campingfunc() {
    let kayaking = document.getElementById("kano-card");
    let camping = document.getElementById("camp-card");
    let kano = document.getElementById("kano");
    let camp = document.getElementById("camp");
    let fire = document.getElementById("fire");
    camping.style.transform = "rotateY(180deg)";
    camping.style.opacity = "0";
    kayaking.style.transform = "rotateY(360deg)";
    kayaking.style.transition = "1s";
    kayaking.style.opacity = "1";
    kano.style.top = "-90px";
    kano.style.transform = "scale(1.1, 1.1)";
    camp.style.transform = "scale(0, 0)";
    fire.style.transform = "scale(0, 0)";
}