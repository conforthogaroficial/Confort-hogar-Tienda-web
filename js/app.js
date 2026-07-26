
// CONFORT HOGAR - FUNCIONES PRINCIPALES


// Pantalla de ingreso +18

function ingresarTienda(){

    localStorage.setItem("edadConfirmada", "si");

    document.getElementById("pantallaEdad").style.display = "none";

}




function salirTienda(){

    alert("Debes ser mayor de 18 aÃ±os para ingresar a la tienda.");

    window.location.href = "https://www.google.com";

}




// Revisar si ya confirmÃ³ la edad

window.onload = function(){

    let confirmado = localStorage.getItem("edadConfirmada");


    if(confirmado === "si"){

        document.getElementById("pantallaEdad").style.display = "none";

    }


};





// Carrito bÃ¡sico

let carrito = [];



function agregarProducto(nombre, precio){


    carrito.push({

        nombre:nombre,

        precio:precio

    });


    mostrarCarrito();


}




function mostrarCarrito(){


    let caja = document.getElementById("carrito");


    if(!caja){

        return;

    }



    if(carrito.length === 0){

        caja.innerHTML = `

        <h3>ðŸ›’ Carrito</h3>

        <p>No hay productos agregados.</p>

        `;


        return;

    }



    let contenido = `

    <h3>ðŸ›’ Carrito</h3>

    `;



    carrito.forEach(producto => {


        contenido += `

        <p>
        ${producto.nombre}
        <br>
        $${producto.precio}
        </p>

        `;


    });



    caja.innerHTML = contenido;


}





// AnimaciÃ³n simple al cargar

document.addEventListener("DOMContentLoaded",()=>{


    document.body.style.opacity="0";


    setTimeout(()=>{

        document.body.style.transition="0.5s";

        document.body.style.opacity="1";


    },100);



});
      
