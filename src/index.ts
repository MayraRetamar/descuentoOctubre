let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
rotulo1.innerHTML = "Ingrese precio por unidad";
let rotulo2 = document.getElementById("rotulo2");
rotulo2.innerHTML = "Ingrese la cantidad de productos";
let rotulo3 = document.getElementById("rotulo3");
rotulo3.innerHTML = "Ingrese el mes de la compra";

btnEnviar.addEventListener("click", () => {
  let precio: number = Number(dato1.value);
  let cantidad: number = Number(dato2.value);
  let mes: string = dato3.Value;
  let descuento: number = precio * cantidad;
  if (mes == octubre) {
  }
});
