import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {
    const {id, nombre, precio} = producto
    // Comprando 
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito,
            producto
        ]);
    }

    // Eliminar un producto del carrito 
    const EliminarProducto = id  => {

        const producto = carrito.filter (producto => producto.id !== id);

        //colocar los productos en el state
        agregarProducto(producto);
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>

            { productos
            ?  (<button type="button" onClick={ () => seleccionarProducto(id) }>Comprar</button>)

            : ( <button type="button" onClick={() => EliminarProducto(id)}>Eliminar</button>)
            
            }
        </div>
    );
}
export default Producto;   