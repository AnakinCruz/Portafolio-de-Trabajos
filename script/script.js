//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_habilidades = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Trabajoequip");
        habilidades[1].classList.add("Liderazgo");
        habilidades[2].classList.add("Creatividad");
        habilidades[3].classList.add("Dedicación");
        habilidades[4].classList.add("Responsabilidad");
    }
}


window.onscroll = function(){
    efectoHabilidades();
} 


document.querySelectorAll(".circle").forEach((circle) => {
    const progressBar = circle.querySelector(".progress-bar");
    const percentage = parseInt(circle.getAttribute("data-percent"));
    const number = circle.querySelector(".num");

    const radius = 70; // Radio del círculo
    const circumference = 2 * Math.PI * radius; // Perímetro del círculo

    progressBar.style.strokeDasharray = circumference; // Longitud del trazo total

    let counter = 0;
    const interval = setInterval(() => {
        counter++;
        const offset = circumference - (counter / 100) * circumference; // Cálculo del offset
        progressBar.style.strokeDashoffset = offset; // Aplica el progreso
        number.innerHTML = `${counter}%`; // Actualiza el texto

        if (counter === percentage) {
            clearInterval(interval);
        }
    }, 20); // Velocidad de animación
});
