var intervalo;

function imprimirCoches() {
    document.getElementById("pista").innerHTML = "";
    document.getElementById("pista").innerHTML += "<div class='flex'><img src='images/ferrari.gif' class='coche relative h-48' id='coche1' /></div>";
    document.getElementById("pista").innerHTML += "<div class='flex'><img src='images/mercedes.gif' class='coche relative h-48' id='coche1' /></div>";
    document.getElementById("pista").innerHTML += "<div class='flex'><img src='images/formulae.gif' class='coche relative h-48' id='coche1' /></div>";
}

function carrera() {
    let coches = document.getElementsByClassName("coche");
    for (let i = 0; i < coches.length; i++) {
        if (coches[i].offsetLeft >= document.getElementById("pista").offsetWidth - 50) {
            console.log("Ganó la " + i);
            clearInterval(intervalo);
        } else {
            let random = Math.floor(Math.random() * 50);
            coches[i].style.left = coches[i].offsetLeft + random + "px";
            console.log(coches[i].offsetLeft + random + "px");
        }

        if (coches[0].offsetLeft >= document.getElementById("pista").offsetWidth - 50) {
           alert("Ganó el Ferrari");
            clearInterval(intervalo);
            break;
        }
        else if (coches[1].offsetLeft >= document.getElementById("pista").offsetWidth - 50) {
            alert("Ganó el Mercedes");
            clearInterval(intervalo);
            break;
        }
        else if (coches[2].offsetLeft >= document.getElementById("pista").offsetWidth - 50) {
           alert("Ganó el Formula E");
            clearInterval(intervalo);
            break;
        }
    }


}


function iniciar() {
    imprimirCoches();
    intervalo = setInterval(carrera, 100);
}





