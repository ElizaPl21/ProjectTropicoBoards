//Esto es como lo tuyo solamente que no me funciona, no se si me equivoque en algo
/*const cuentaCarritoElement = document.getElementById("cuenta-carrito");
function agregarAlCarrito(producto){
  const memoria = JSON.parse(localStorage.getItem("patinetas"));
  let cuenta=0;
  if(!memoria) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto)
    localStorage.setItem("patinetas", JSON.stringify([nuevoProducto]));
    cuenta=1;
  }else {
    const indiceProducto = memoria.findIndex(patinetas => patinetas.id === producto.id)
    const nuevaMemoria = memoria;
    if(indiceProducto === -1){
      nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
      cuenta = 1;
    } else {
      nuevaMemoria[indiceProducto].cantidad ++;
      cuenta = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("patinetas",JSON.stringify(nuevaMemoria));
  }
  actualizarNumeroCarrito();
  return cuenta;
}

function restarAlCarrito(producto){
  const memoria = JSON.parse(localStorage.getItem("patinetas"));
  const indiceProducto = memoria.findIndex(patinetas => patinetas.id === producto.id)
  if(memoria[indiceProducto].cantidad===1){
    memoria.splice(indiceProducto,1);
  }else{
  memoria[indiceProducto].cantidad--;
}
  localStorage.setItem("patinetas",JSON.stringify(memoria));
  actualizarNumeroCarrito();
}

function getNuevoProductoParaMemoria(producto){
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}


function actualizarNumeroCarrito(){
  const memoria = JSON.parse(localStorage.getItem("patinetas"));
  if( cuenta && cuenta.length > 0){
   const cuenta = memoria.reduce((acum, current)=>acum+current.cantidad,0)
    return cuentaCarritoElement.innerText = cuenta;
  }
  cuentaCarritoElement.innerText = 0;
}

actualizarNumeroCarrito();
*/

//Esta es otra función funciona solo el refresh
const cuentaCarritoElement = document.getElementById("cuenta-carrito");


function agregarAlCarrito(producto){

  let memoria = JSON.parse(localStorage.getItem("patinetas"));
  let cantidadProductoFinal;
 
  if(!memoria || memoria.length === 0) {
    const nuevoProducto = getNuevoProductoParaMemoria(producto)
    localStorage.setItem("patinetas",JSON.stringify([nuevoProducto]));
    actualizarNumeroCarrito();
    cantidadProductoFinal = 1;
  }
  else {
   
    const indiceProducto = memoria.findIndex(patinetas => patinetas.id === producto.id)
    const nuevaMemoria = memoria;

    if(indiceProducto === -1){
      const nuevoProducto = getNuevoProductoParaMemoria(producto);
      nuevaMemoria.push(nuevoProducto);
      cantidadProductoFinal = 1;
    } else {
  
      nuevaMemoria[indiceProducto].cantidad ++;
      cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
    }
    localStorage.setItem("patinetas",JSON.stringify(nuevaMemoria));
    actualizarNumeroCarrito();
    return cantidadProductoFinal;
  }
}

function restarAlCarrito(producto){
  let memoria = JSON.parse(localStorage.getItem("patinetas"));
  let cantidadProductoFinal = 0;
  const indiceProducto = memoria.findIndex(patinetas => patinetas.id === producto.id)
  let nuevaMemoria = memoria;
  nuevaMemoria[indiceProducto].cantidad--;
  cantidadProductoFinal = nuevaMemoria[indiceProducto].cantidad;
  if(cantidadProductoFinal === 0){
    nuevaMemoria.splice(indiceProducto,1)
  };
  localStorage.setItem("patinetas",JSON.stringify(nuevaMemoria));
  actualizarNumeroCarrito();
  return cantidadProductoFinal;
}


function getNuevoProductoParaMemoria(producto){
  const nuevoProducto = producto;
  nuevoProducto.cantidad = 1;
  return nuevoProducto;
}


function actualizarNumeroCarrito(){
  let cuenta = 0;
  const memoria = JSON.parse(localStorage.getItem("patinetas"));
  if(memoria && memoria.length > 0){
    cuenta = memoria.reduce((acum, current)=>acum+current.cantidad,0)
    return cuentaCarritoElement.innerText = cuenta;
  }
  cuentaCarritoElement.innerText = 0;
}


function reiniciarCarrito(){
  localStorage.removeItem("patinetas");
  actualizarNumeroCarrito();
}


actualizarNumeroCarrito();