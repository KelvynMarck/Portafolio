AOS.init({duration: 1200});

var menuVisible = false;
//Funcion que oculta o muestre el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function seleccionar(){
    //ocular el menu una vez selecionado una opcion
    document.getElementById("nav").classList="";
    menuVisible=false;
}

//Funcion que aplica las animaciones a los elementos
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Csharp");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("MySQL");
        habilidades[3].classList.add("git");
        habilidades[4].classList.add("bootstrap");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoColaborativo");
        habilidades[7].classList.add("creativo");
        habilidades[7].classList.add("dedicacion");
        habilidades[8].classList.add("responsabilidad");
    }
}


//Detecto el scrolling para aplicar la animacion de la habilidades
window.onscroll = function(){

    efectoHabilidades();
}
