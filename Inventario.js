function indumentaria(name, id, precio, stock){
    this.name = name
    this.id = id
    this.precio = precio
    this.stock = stock
    
}

function camisa(name, id, precio, stock){
    indumentaria.call(this, name, id, precio, stock)
}

function pantalon(name, id, precio, stock){
    indumentaria.call(this, name, id, precio, stock)
}

function zapato(name, id, precio, stock){
    indumentaria.call(this, name, id, precio, stock)
}

camisa.prototype = Object.create(indumentaria.prototype)
camisa.prototype.constructor = camisa

pantalon.prototype = Object.create(indumentaria.prototype)
pantalon.prototype.constructor = pantalon

zapato.prototype = Object.create(indumentaria.prototype)
zapato.prototype.constructor = zapato

let camisa1 = new camisa("camisa", 1, 10, 2)
let pantalon1 = new pantalon("pantalon", 2, 20, 2)
let zapato1 = new zapato("zapato", 3, 30, 2)

const tienda = (() =>{ 
    let inventario = [ 
        camisa1, pantalon1, zapato1
    ]

    let carritoCompras = []

    const agregarProducto = (producto) =>{
        carritoCompras.push(producto)
        actualizarInventario(producto)
    }
    
    const realizarPago = (carrito) =>{
        let sum = 0
        carrito.foreach(compra =>{
            sum += compra.precio
        })
    }

    const actualizarInventario = (producto) =>{
        if(producto.stock > 0){
        producto.stock--
        }
    }

    return {agregarProducto, realizarPago}
})();





