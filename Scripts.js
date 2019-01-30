// Javascript, primo esercizio;
// Il punto e virgola in JS è opzionale, tuttavia è sempre buona norma metterlo, evita bug;

// DOM, document object model, rappresentazione ad oggetti del documento;
// getElementeBy... Name, TagName, Class ecc... Permette di ottenere elementi da un'altro file (HTML in questo caso);
// .querySelectorAll("button") ritorna un array di elementi "button" tramite JQuerY;

"use strict";   // Clausola che impedisce di utilizzare delle variabili non dichiarate;

let b = document.querySelectorAll("button");
let p = document.getElementById("s");
//b.addEventListener("click", myFunc);

b[0].addEventListener("click", CactusFunc);
b[1].addEventListener("click", PalmTreeFunc);
b[2].addEventListener("click", BaobabFunc);


function CactusFunc() {
   document.getElementById("MyImage").src = "/image/cactus.png";
   p.innerHTML="A cactus (plural: cacti, cactuses, or cactus) is a member" +
   " of the plant family Cactaceae, a family comprising about 127 genera with" +
   " some 1750 known species of the order Caryophyllales.";
}
function PalmTreeFunc() {
    document.getElementById("MyImage").src = "/image/palm tree.png";
    p.innerHTML="The Arecaceae are a botanical family of perennial plants." +
    " Their growth form can be climbers, shrubs, trees and stemless plants," +
    " all commonly known as palms. Those having a tree form are colloquially called palm trees.";
}
function BaobabFunc() {
    document.getElementById("MyImage").src = "/image/baobab.png";
    p.innerHTML="Adansonia is a genus of deciduous trees known as baobabs." +
    " They are found in arid regions of Madagascar, mainland Africa, Arabia," +
    " and Australia. The generic name honours Michel Adanson, the French naturalist" +
    " and explorer who described Adansonia digitata.";
}