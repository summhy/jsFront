let h1Color = document.getElementById("color");
let pRGB = document.getElementById("rgb");
let imgColor = document.getElementById("imgColor");
let tarjeta = document.getElementById("tarjeta");

let color = {
  nombre: "verde",
  color: "(0,255,0)",
  img: "./img/yin-yang.jpg",
};

let arregloColores = [];
arregloColores["verde"] = {
                            nombre: "verde",
                            codigo: "(0,255,0)",
                            img: "./img/yin-yang.jpg",
                            };
arregloColores["amarillo"] = "(50,255,48)";
arregloColores["rojo"] = "(255,0,0)";
arregloColores["azul"] = "(0,0,255)";
arregloColores["violeta"] = "(10,15,255)";

console.dir(tarjeta);
tarjeta.hidden = true;

function indicaColor(elemento) {
  tarjeta.hidden = false;
  h1Color.innerText = arregloColores[elemento.title].nombre;
  pRGB.innerText = arregloColores[elemento.title].codigo;
  imgColor.src  = arregloColores[elemento.title].img
  /* if (elemento.title == "verde") {
    imgColor.src = "./img/yin-yang.jpg";
  } else {
    imgColor.src = "";
  } */
}

function ocultar() {
  tarjeta.hidden = true;
}
