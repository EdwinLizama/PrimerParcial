const Indumentaria = (name, id, precio, stock) =>{
    this.name = name;
    this.id = id;
    this.precio = precio;
    this.stock = stock;
    return{ name, id, precio, stock };
};
const Camisa = (name, id, precio, stock) =>{
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}
const Pantalon = (name, id, precio, stock) =>{
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}
const Zapato = (name, id, precio, stock) =>{
    const prototype = Indumentaria(name, id, precio, stock);
    return Object.assign({},prototype);
}

let camisa1 = Camisa("Camisa1", 1, 10, 2);
let pantalon1 = Camisa("Camisa1", 1, 20, 2);
let zapato1 = Camisa("Camisa1", 1, 15, 2);



const tienda = (() =>{ 
    let inventario = [ 
        camisa1, pantalon1, zapato1
    ]

    let carritoCompras = []

    const agregarProducto = (producto) =>{
        carritoCompras.push(producto)
        actualizarInventario(producto)
        //mensaje
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

    return {inventario, carritoCompras, agregarProducto, realizarPago}
})();

let div1 = document.getElementById("inventario")
let div2 = document.getElementById("carrito")
//caja camisa
let cajaCamisa = document.createElement("cajita")
cajita.setAttribute("class", "camisa")
//caja pantalon
let cajaPantalon = document.createElement("cajita")
cajita.setAttribute("class", "pantalon")
//caja zapato
let cajaZapato = document.createElement("cajita")
cajita.setAttribute("class", "zapato")

//botones
let botonAgregarCamisa = document.createElement("btn1")
let botonAgregarPantalon = document.createElement("btn2")
let botonAgregarZapato = document.createElement("btn3")

function mostrar(){
    tienda.inventario.foreach(producto =>{
        for (let index = 0; index < producto.stock; index++) {
            if(producto.name == "camisa"){
            div1.appendChild(cajaCamisa)
            }
            if(producto.name == "pantalon"){
            div1.appendChild(cajaPantalon)
            }
            if(producto.name == "zapato"){
            div1.appendChild(cajaZapato)
            }
        }
    })
    
    tienda.carrito.foreach(producto =>{
        for (let index = 0; index < producto.stock; index++) {
            if(producto.name == "camisa"){
            div2.appendChild(cajaCamisa)
            }
            if(producto.name == "pantalon"){
            div2.appendChild(cajaPantalon)
            }
            if(producto.name == "zapato"){
            div2.appendChild(cajaZapato)
            }
        }
    })
}
mostrar()



botonAgregarCamisa.addEventListener("click", () =>{
    agregarProducto(inventario[0])
    div1.innerHTML=''
    div2.innerHTML=''
    mostrar()
})
botonAgregarPantalon.addEventListener("click", () =>{
    agregarProducto(inventario[1])
    div1.innerHTML=''
    div2.innerHTML=''
    mostrar()
})
botonAgregarZapato.addEventListener("click", () =>{ 
    agregarProducto(inventario[2])
    div1.innerHTML=''
    div2.innerHTML=''
    mostrar()
})


 





