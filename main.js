let Carrito = 0

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let camiseta = new Producto("Camiseta", 15000);
let campera = new Producto("Campera", 30000);
let remera = new Producto("Remera", 5000);
let buzo = new Producto("Buzo", 20000);

const RopaNueva = [camiseta,campera,remera,buzo];

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea llevar una ${RopaNueva[0].nombre} por $${RopaNueva[0].precio}\nPulse 2 si desea llevar una ${RopaNueva[1].nombre} por $${RopaNueva[1].precio}\nPulse 3 si desea llevar una ${RopaNueva[2].nombre} por $${RopaNueva[2].precio}\nPulse 4 si desea llevar un ${RopaNueva[3].nombre} por $${RopaNueva[3].precio}`))
    
    while (opciones < 1 || opciones > 4){
        opciones = parseInt(prompt(`Pulse 1 si desea llevar un ${RopaNueva[0].nombre} por $${RopaNueva[0].precio}\nPulse 2 si desea llevar un ${RopaNueva[1].nombre} por $${RopaNueva[1].precio}\nPulse 3 si desea llevar un ${RopaNueva[2].nombre} por $${RopaNueva[2].precio}\nPulse 4 si desea llevar un ${RopaNueva[3].nombre} por $${RopaNueva[3].precio}`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = RopaNueva[0]
        Carrito += RopaNueva[0].precio 
    }
    else if (opciones == 2){
        productoElegido = RopaNueva[1]
        Carrito += RopaNueva[1].precio
    }
    else if (opciones == 3){
        productoElegido = RopaNueva[2]
        Carrito += RopaNueva[2].precio
    }
    else if (opciones == 4){
        productoElegido = RopaNueva[3]
        Carrito += RopaNueva[3].precio
    }

    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio}, desea agregarlo al carrito?`);
    if (confirmacion == true){
        let agregar = confirm("El producto se agregó al carrito, desea comprar algo más?")
        if (agregar == true){
            comprar();
        } else{
            let pagar = confirm(`El total es de $${Carrito}, desea pagar?`)
            if (pagar == true){
                alert("Gracias por su compra, en breve enviaremos su pedido");
            } else{
                alert("Saludos, Esperamos su visita nuevamente");
            }
        }
    }
}
comprar();