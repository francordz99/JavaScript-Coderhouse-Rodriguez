
function Marcas(nombre, precio, stock, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.cantidad = cantidad;
}

const marca1 = new Marcas("Pirelli", 100, 50, 0);
const marca2 = new Marcas("Kumho", 125, 50, 0);
const marca3 = new Marcas("Toyo", 150, 50, 0);
const marca4 = new Marcas("Goodyear", 175, 50, 0);
const marca5 = new Marcas("Yokohama", 200, 50, 0);
const marca6 = new Marcas("Michelin", 225, 50, 0);

let input = prompt("Escribe la marca que deseas agregar a tu carrito y al finalizar escribe 0 para salir.");

function shoppingCart() {
    while (input != 0) {

        if (input == marca1.nombre) {
            alert("Elegiste la marca " + marca1.nombre + " , su costo por unidad es de " + marca1.precio + " dolares");
            marca1.cantidad = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca2.nombre) {
            alert("Elegiste la marca " + marca2.nombre + " , su costo por unidad es de " + marca2.precio + " dolares");
            marca2.cantidad = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca3.nombre) {
            alert("Elegiste la marca " + marca3.nombre + " , su costo por unidad es de " + marca3.precio + " dolares");
            marca3.cantidad = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca4.nombre) {
            alert("Elegiste la marca " + marca4.nombre + " , su costo por unidad es de " + marca4.precio + " dolares");
            marca4.cantidad = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca5.nombre) {
            alert("Elegiste la marca " + marca5.nombre + " , su costo por unidad es de " + marca5.precio + " dolares");
            marca5.cantidad = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else if (input == marca6.nombre) {
            alert("Elegiste la marca " + marca6.nombre + " , su costo por unidad es de " + marca6.precio + " dolares");
            marca6.cantidad = prompt("Ingresa la cantidad de neumaticos que quieres ordenar");
        }
        else {
            alert("Lo sentimos , no contamos con esa marca de neumaticos o hiciste click en cancelar");
        }

        input = prompt("Ingresa otra marca de neumaticos o escribe 0 para salir y terminar la compra.");
    }

    let nombrecompleto = prompt("Porfavor ingresa tu nombre y apellido");

    alert("Gracias por elegirnos " + nombrecompleto + " , tu compra ha sido confirmada y sera procesada a la brevedad");
}

shoppingCart();

function finalprice() {

    const finalq = [marca1.cantidad, marca2.cantidad, marca3.cantidad, marca4.cantidad, marca5.cantidad, marca6.cantidad]
    const finalp = [marca1.precio, marca2.precio, marca3.precio, marca4.precio, marca5.precio, marca6.precio]

    let suma = 0;
    for (let i = 0; i < finalq.length; i++) {
        suma += finalq[i] * finalp[i];
    }
    alert("El importe final de tu compra es de " + suma + " dolares");
}

finalprice();