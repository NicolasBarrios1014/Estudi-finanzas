// main.js - Activar enlace del menú según la página actual

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el nombre del archivo actual
    const path = window.location.pathname;
    const page = path.split('/').pop(); // Obtiene el nombre del archivo
    
    // Seleccionar todos los enlaces del menú
    const navLinks = document.querySelectorAll('.main-nav a');
    
    // Quitar la clase 'active' de todos los enlaces
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Activar el enlace según la página
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Para la página de inicio
        if (page === '' || page === 'index.html' || path.endsWith('/')) {
            if (href === './index.html' || href.includes('index')) {
                link.classList.add('active');
            }
        }
        
        // Para la página de Modificación
        else if (page.includes('correcciones')) {
            if (href.includes('correcciones')) {
                link.classList.add('active');
            }
        }
        
        // Para la página de Conceptos
        else if (page.includes('conceptos')) {
            if (href.includes('conceptos')) {
                link.classList.add('active');
            }
        }
        
        // Para la página de Libros de ayuda
        else if (page.includes('librosyplantillas')) {
            if (href.includes('librosyplantillas')) {
                link.classList.add('active');
            }
        }
        
        // Para la página de Contacto
        else if (page.includes('contacto')) {
            if (href.includes('contacto')) {
                link.classList.add('active');
            }
        }
    });
});

//botones de contaste y botones de mas y menos fuente

(()=>{
    const btnAumentar = document.querySelector("#aumentarfuente");
    const btnDisminuir = document.querySelector("#disminuirfuente");
    const btnContrate = document.querySelector("#contraste");

    //Tamaño base de fuente
    let tamañofuente =16;
    let contrasteActivo =false;

    if (btnAumentar && btnDisminuir && btnContrate){
        //asociar evento click
        btnAumentar.addEventListener("click",()=>{
            if (tamañofuente <25){
                tamañofuente +=1; // tamañoFuente = tamañofuente +1
                document.body.style.fontSize = `${tamañofuente}px`;
                document.querySelectorAll("label").forEach(label=>{
                    let fontSize = parseFloat(window.getComputedStyle(label).fontSize);
                    if(fontSize<=24){
                        label.style.fontSize = (fontSize + 1) + "px";
                    }
                });
            }        
        });

         btnDisminuir.addEventListener("click", () => {
            if (tamañoFuente >= 12) { // Evita que la fuente sea demasiado pequeña
                tamañoFuente -= 1;
                document.body.style.fontSize = `${tamañoFuente}px`;
                document.querySelectorAll("label").forEach(label => {
                    let fontSize = parseFloat(window.getComputedStyle(label).fontSize);
                    if (fontSize >=12){
                    label.style.fontSize = (fontSize - 1) + "px";
                    }
                });
            }
        }); 
    
         btnContrate.addEventListener("click", () => {
            contrasteActivo = !contrasteActivo;
            document.body.classList.toggle("modo-contraste", contrasteActivo);
        });
            }

})()
