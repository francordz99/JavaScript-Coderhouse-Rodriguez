
const marca1 = "Pirelli";
const marca2 = "Michelin";
const marca3 = "Kumho";
const marca4 = "Toyo";
const marca5 = "Goodyear";
const marca6 = "Yokohama";

const precio1 = 100;
const precio2 = 125;
const precio3 = 150;
const precio4 = 175;
const precio5 = 200;
const precio6 = 225;

let cantidad1 = 0;
let cantidad2 = 0;
let cantidad3 = 0;
let cantidad4 = 0;
let cantidad5 = 0;
let cantidad6 = 0;

let input = prompt("Bienvenido a Tire Shop , contamos con neumaticos Pirelli , Michelin , Kumho , Toyo , Goodyear y Yokohama , escribe la marca que deseas agregar a tu carrito y al finalizar escribe 0 para salir.");

function shoppingCart() {
    while (input != 0) {

        if (input == marca1) {
            alert("Elegiste la marca " + marca1 + " , su costo por unidad es de " + precio1 + " dolares");
            cantidad1 = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca2) {
            alert("Elegiste la marca " + marca2 + " , su costo por unidad es de " + precio2 + " dolares");
            cantidad2 = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca3) {
            alert("Elegiste la marca " + marca3 + " , su costo por unidad es de " + precio3 + " dolares");
            cantidad3 = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca4) {
            alert("Elegiste la marca " + marca4 + " , su costo por unidad es de " + precio4 + " dolares");
            cantidad4 = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca5) {
            alert("Elegiste la marca " + marca5 + " , su costo por unidad es de " + precio5 + " dolares");
            cantidad5 = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca6) {
            alert("Elegiste la marca " + marca6 + " , su costo por unidad es de " + precio6 + " dolares");
            cantidad6 = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else {
            alert("Lo sentimos , no contamos con esa marca de neumaticos o hiciste click en cancelar");
        }

        input = prompt("Ingresa otra marca de neumaticos o escribe 0 para salir y terminar la compra.");
    }

    let nombreCompleto = prompt("Porfavor ingresa tu nombre y apellido para terminar tu pedido");

    alert("Gracias por elegirnos " + nombreCompleto + " , tu compra ha sido confirmada y sera procesada a la brevedad");
}

shoppingCart();

function finalPrice() {
    let final1 = cantidad1 * precio1;
    let final2 = cantidad2 * precio2;
    let final3 = cantidad3 * precio3;
    let final4 = cantidad4 * precio4;
    let final5 = cantidad5 * precio5;
    let final6 = cantidad6 * precio6;
    let precioFinal = final1 + final2 + final3 + final4 + final5 + final6;
    alert("El importe final de tu compra es de " + precioFinal + " dolares");
}

finalPrice();