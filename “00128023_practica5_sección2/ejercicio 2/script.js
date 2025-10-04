const carrito = {
    productos: [{
        nombre: 'Papel Higienico',
        unidades: 4, 
        precio: 5,
    },
    {
        nombre: 'Chocolate',
        unidades: 2,
        precio: 1.5
    }],
    get precioTotal(){
        let precio = 0;
        for(let i = 0; i < this.productos.length; i++){
            precio += this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    }
}

console.log(carrito.precioTotal);