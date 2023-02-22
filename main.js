function imprimirCoches() {
    document.getElementById("pista").innerHTML = "";
    document.getElementById("pista").innerHTML += "<img src='images/ferrari.gif' class='coche h-48' id='coche1' />";
    document.getElementById("pista").innerHTML += "<img src='images/mercedes.gif' class='coche h-48' id='coche2' />";
    document.getElementById("pista").innerHTML += "<img src='images/formulae.gif' class='coche h-48' id='coche3' />";
}

function carrera() {
    let coches = document.getElementsByClassName("coche");
    for (let i = 0; i < coches.length; i++) {
        if (coches[i].offsetLeft >= document.getElementById("pista").offsetWidth - 50) {
            console.log("Ganó la " + i);
            break;
        } else {
            let random = Math.random() * 50;
            coches[i].style.left = coches[i].offsetLeft + random + "px";
            console.log(coches[i].offsetLeft);

        }
    }


}





