const prompt = require("prompt-sync")();
// let produits = [
//   {
//     id: 1,
//     nom: "Casque Bluetooth",
//     prix: 0,
//     stock: 12,
//   },
//   {
//     id: 2,
//     nom: "Clavier Mécanique",
//     prix: 1,
//     stock: 5,
//   },
//   {
//     id: 3,
//     nom: "Souris Gamer",
//     prix: 199,
//     stock: 8,
//   },
//   {
//     id: 4,
//     nom: "T-shirt Noir",
//     prix: 99,
//     stock: 20,
//   },
// ];
let produits = [];
let compteur = 1;
// let const var
// let somme = 0;
function ajouterproduit() {
  let nom = prompt("enter nom : ");
  let prix = prompt("enter prix : ");
  let stock = prompt("enter stock : ");
  let data = {
    id: compteur++,
    nom: nom,
    prix: prix,
    stock: stock,
  };
  produits.push(data);
  console.table(produits);
}
ajouterproduit();

// //  ajouterAuPanier
// let cart = [];
// function ajouterAuPanier() {
//   let ID = Number(prompt("enter id produit"));
//   let prodExist = produits.find((el) => el.id === ID);
//   if (prodExist) {
//     // produits.stock=
//     let quantity = parseFloat(prompt("enter quantity"));
//     if (quantity > 0 && quantity < prodExist.stock) {
//       let datapanier = {
//         productId: ID,
//         nom: prodExist.nom,
//         quantity: quantity,
//         price: prodExist.prix,
//       };
//       cart.push(datapanier);
//       console.table(cart);
//       return;
//     } else {
//       console.log("quantity doit etre s4r men Stock");
//       return;
//     }
//   }
//   console.log("Erreur : le produit que vous essayez d’ajouter n’existe pas");
// }
// function afficherPanier() {
//   console.log(cart);
// }

// function supprimerDuPanier() {
//   let Id = Number(prompt("enter ID "));
//   // let arrayFilter = cart.indexOf(Id);
//   const cartToDelete = cart.find((cart) => cart.productId === Id);
//   let index = cart.indexOf(cartToDelete);
//   console.log(index);

//   if (index >= 0) {
//     cart.splice(index, 1);
//     console.table(cart);
//     return;
//   }
//   console.log("error index < 0");

//   // console.log(arrayFilter);
// }
// // Supprimerproduit();
// function produistpanier() {
//   console.log(produits);
// }
// //passer commande
// function passerCommand() {
//   let total_HT = 0;
//   for (let i = 0; i < cart.length; i++) {
//     total_HT = total_HT + cart[i].price * cart[i].quantity;
//   }
//   let TVA = total_HT * 0.2;
//   let TTC = TVA + total_HT;
//   // console.log(`Total HT : ${total_HT} €`);
//   // console.log(`TVA (20%) : ${TVA} €`);
//   // console.log(`Total TTC : ${TTC} €`);
//   // console.log("Merci pour votre achat !");
//   console.log(total_HT + "" + " " + TVA);
// }
// function updateStockAfterAddToCart() {
//   let Id = Number(prompt("enter Id : "));
//   let produit = produits.find((ele) => ele.id === Id);
//   let item = cart.find((c) => c.id === Id);

//   if (produit && item) {
//     produit.stock = produit.stock - item.quantity;
//   }
// }

// // function produistWpanier(){

// // }
// // passerCommand();
// let menu = `
// ==== MENU ====
// 1. Ajouter un produit 
// 2. AjouterAuPanier
// 3. afficherPanier
// 4. supprimer un produit sur cart
// 5. passer un Commande
// 6. affichage new array produit 
// `;
// while (true) {
//   console.log(menu);
//   const quiter = Number(prompt("ach b4iti dir : "));
//   if (quiter === 0) {
//     break;
//   }
//   switch (quiter) {
//     case 0:
//       break;
//     case 1:
//       ajouterproduit();
//       break;
//     case 2:
//       ajouterAuPanier();
//       break;
//     case 3:
//       afficherPanier();
//       break;
//     case 4:
//       supprimerDuPanier();
//       break;
//     case 5:
//       passerCommand();
//       break;
//     case 6:
//       updateStockAfterAddToCart();
//       break;
//     default:
//       break;
//   }
// }
