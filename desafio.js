/* Desafío: javaScript

Nombre de Desafío: control_de_errores_js

Instrucciones */


/* Crea una funcion la cual devuelva un error con un mensaje personalizado

- Registra el error en un archivo a través de un try...catch */

// No cambies los nombres de las funciones.

function crearGato (nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
    let obj = {
        nombre,
        edad,
        new(){
            return "Meow!";
        },
    };
    return obj;
  }
  
  function agregarPropiedad (objeto, property) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
    // Tu código:
    objeto[property] = null
    return obj;
  }
  
  function invocarMetodo (objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("returned")
    // Tu código:
    objeto [metodo]()
  }
  
  function multiplicarNumeroDesconocidoPorCinco (objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
  let multiplicar = objetoMisterioso[numeroMisterioso] * 5;
  return multiplicar;
  }
  
  function eliminarPropiedad (objeto, unaPropiedad) {
    // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad
    // tip: tenes que usar bracket notation
    // Devuelve el objeto
    // Tu código:
    delete objeto[unaPropiedad]
  }
  
  function nuevoUsuario (nombre, email, password) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
  let objeto = {
    nombre,
    email,
    password,
  };
  return obj;
  }
  
  function tieneEmail (usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:
  
    return usuario['email'];
  }

  
  function tienePropiedad (objeto, propiedad) {
    // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:
    if(objeto[propiedad]){
      return true;
    }else{
      return false;
    }
  }
  
  function verificarPassword (usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // Tu código:
    return usuario['password'] === password; 
  }
  
  function actualizarPassword (usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
    // Devuelve el objeto
    // Tu código:
    usuario['Password']= nuevaPassword;
    return usuario
  }
  
  function agregarAmigo (usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // Tu código:

array.amigos.push('nuevoAmigo');
return array
  }
  
  function pasarUsuarioAPremium (usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
  for (let i = 0; i < usuarios.length; i++) {
    usuarios[i].premium = true;
  }
  return usuarios
  }
  
  function sumarLikesDeUsuario (usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    let suma = 0
    for (let i = 0; i < usuario.posts.lengt; i++) {
      suma += usuario.posts[i].likes
      
    }
    return suma
  }
  
  function agregarMetodoCalculoDescuento (producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
  
producto.agregarMetodoCalculoDescuento = function(){
  return this.precio - (this.precio * this.porcentajeDeDescuento);
}
return producto;
  }