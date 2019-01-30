// Punto e virgola opzionale anche se dimenticarsene può generare bugs;
//alert('Hello World'); 

// DOM, document object model, rappresentazione ad oggetti del documento;
// getElementeBy... Name, TagName, Class ecc... Permette di ottenere elementi da un'altro file (HTML in questo caso);
// .querySelectorAll("button") ritorna un array di elementi "button" tramite JQuerY;

"use strict";   // Clausola

let b = document.querySelectorAll("button");
//b.addEventListener("click", myFunc);

b[0].addEventListener("click", CactusFunc);
b[1].addEventListener("click", PalmTreeFunc);
b[2].addEventListener("click", BaobabFunc);
 
function CactusFunc() {
   document.getElementById("MyImage").src = "cactus.jpg";
}
function PalmTreeFunc() {
    document.getElementById("MyImage").src = "palm tree.jpg";
}
function BaobabFunc() {
    document.getElementById("MyImage").src = "baobab.jpg";
}