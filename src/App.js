import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  // Crear listado de productos - State productos
  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa de React', precio:10},
    { id: 2, nombre: 'Camisa de Angular', precio:20},
    { id: 3, nombre: 'Camisa de Vue', precio:30},
    { id: 4, nombre: 'Camisa de NodeJs', precio:40},
  ]);

  // State para el carrito de compras
  const [ carrito, agregarProducto ] = useState([]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();


  return (
    <Fragment>
      <Header 
        titulo = 'Tienda virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto =>(
         <Producto 
          key = {producto.id}
          producto = {producto}
          carrito = {carrito}
          productos = {productos}
          agregarProducto = {agregarProducto}
         />
      ))}

      <Carrito 
      
        carrito = {carrito}
        agregarProducto = {agregarProducto}
      />

      <Footer 
        fecha = {fecha}
      />
    </Fragment>
  );
}

 
export default App;
