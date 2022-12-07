

let stockGoodyear = 100;
let precioGoodyear = 180;

let stockPirelli = 100;
let precioPirelli = 200;

let stockKumho = 100;
let precioKumho = 150;

let stockToyo = 100;
let precioToyo = 165;

let stockMichelin = 100;
let precioMichelin = 210;

let stockYokohama = 100;
let precioYokohama = 170;

let stockSailun = 100;
let precioSailun = 130;

let stockDunlop = 100;
let precioDunlop = 155;

alert("Has ingresado a la web de TireShop Montevideo , contamos con las siguientes marcas en stock actualmente en varias medidas y rodados. (Goodyear , Pirelli , Kumho , Toyo , Michelin , Yokohama , Sailun , Dunlop).");

let nombreCompleto = prompt("Porfavor ingresa tu nombre y apellido para realizar tu pedido");

let marcaOrdenada = prompt("¿Que Marca Te Gustaria Ordenar?");

switch (marcaOrdenada) {
    case "Goodyear":
        alert("Contamos con " + stockGoodyear + " " + marcaOrdenada + " y su costo unitario es de " + precioGoodyear);
        break;
    case "Pirelli":
        alert("Contamos con " + stockPirelli + " " + marcaOrdenada + " y su costo unitario es de " + precioPirelli);
        break;
    case "Kumho":
        alert("Contamos con " + stockKumho + " " + marcaOrdenada + " y su costo unitario es de " + precioKumho);
        break;
    case "Toyo":
        alert("Contamos con " + stockToyo + " " + marcaOrdenada + " y su costo unitario es de " + precioToyo);
        break;
    case "Michelin":
        alert("Contamos con " + stockMichelin + " " + marcaOrdenada + " y su costo unitario es de " + precioMichelin);
        break;
    case "Yokohama":
        alert("Contamos con " + stockYokohama + " " + marcaOrdenada + " y su costo unitario es de " + precioYokohama);
        break;
    case "Sailun":
        alert("Contamos con " + stockSailun + " " + marcaOrdenada + " y su costo unitario es de " + precioSailun);
        break;
    case "Dunlop":
        alert("Contamos con " + stockDunlop + " " + marcaOrdenada + " y su costo unitario es de " + precioDunlop);
        break;
    default:
        alert("No contamos con la marca " + marcaOrdenada);
}

let cantidadOrdenada = prompt("Vemos que elegiste la marca " + marcaOrdenada + " , porfavor ingresa la cantidad que te gustaria recibir");

if (cantidadOrdenada < 1) {
    alert("Lo sentimos , pero no puedes ordenar 0 cubiertas");
} else {
    alert("Perfecto , tu pedido de " + cantidadOrdenada + " cubiertas " + marcaOrdenada + " sera confirmado a la brevedad");
}

let precioTotal = 1;

if (marcaOrdenada = "Goodyear") {
    precioTotal = cantidadOrdenada * precioGoodyear;
}

if (marcaOrdenada = "Pirelli") {
    precioTotal = cantidadOrdenada * precioPirelli;
}

if (marcaOrdenada = "Kumho") {
    precioTotal = cantidadOrdenada * precioKumho;
}

if (marcaOrdenada = "Toyo") {
    precioTotal = cantidadOrdenada * precioToyo;
}

if (marcaOrdenada = "Michelin") {
    precioTotal = cantidadOrdenada * precioMichelin;
}

if (marcaOrdenada = "Yokohama") {
    precioTotal = cantidadOrdenada * precioYokohama;
}

if (marcaOrdenada = "Sailun") {
    precioTotal = cantidadOrdenada * precioSailun;
}

if (marcaOrdenada = "Dunlop") {
    precioTotal = cantidadOrdenada * precioDunlop;
}

alert("El precio final de tu orden es de " + precioTotal + " dolares , muchas gracias " + nombreCompleto + " por confiar en nosotros");