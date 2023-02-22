var intervalo;

function imprimirCoches() {
    document.getElementById("pista").innerHTML = "";
    document.getElementById("pista").innerHTML += "<div class='flex'><img src='images/ferrari.gif' class='coche relative h-48' id='coche1' /></div>";
    document.getElementById("pista").innerHTML += "<div class='flex'><img src='images/mercedes.gif' class='coche relative h-48' id='coche1' /></div>";
    document.getElementById("pista").innerHTML += "<div class='flex'><img src='images/formulae.gif' class='coche relative h-48' id='coche1' /></div>";
    document.getElementById("pista").innerHTML += "<div class='flex'><img src='images/mclaren.gif' class='coche relative h-16 mb-12' id='coche1' /></div>";

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

        if (coches[0].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value == "1") {
            alert("Enhorabuena! Ganó el Ferrari");
            clearInterval(intervalo);
            break;
        }
        else if (coches[0].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value != "1") {
            alert("Mala suerte... Ganó el Ferrari");
            clearInterval(intervalo);
            break;
        }

        if (coches[1].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value == "2") {
            alert("Enhorabuena! Ganó el Mercedes");
            clearInterval(intervalo);
            break;
        }
        else if (coches[1].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value != "2") {
            alert("Mala suerte... Ganó el Mercedes");
            clearInterval(intervalo);
            break;
        }


        if (coches[2].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value == "3") {
            alert("Enhorabuena! Ganó el Formula E");
            clearInterval(intervalo);
            break;
        }
        else if (coches[2].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value != "3") {
            alert("Mala suerte... Ganó el Formula E");
            clearInterval(intervalo);
            break;
        }

        if (coches[3].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value == "4") {
            alert("Enhorabuena! Ganó el Renault");
            clearInterval(intervalo);
            break;
        }
        else if (coches[3].offsetLeft >= document.getElementById("pista").offsetWidth - 50 && document.getElementById("opcion").value != "4") {
            alert("Mala suerte... Ganó el Renault");
            clearInterval(intervalo);
            break;

        }

    }


}


function iniciar() {
    imprimirCoches();
    intervalo = setInterval(carrera, 100);
}





