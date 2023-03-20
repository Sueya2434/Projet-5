const cart = JSON.parse(localStorage.getItem('cart'))


const promises = [];

cart.forEach(item => {
    promises.push(fetch(`http://localhost:3000/api/products/${item.id}`).then(res => res.json()));
});


const productPrices = {};

function totalQuantity() {
    let total = 0;

    cart.forEach((item) => {
        total += item.quantity
    })
    document.querySelector('#totalQuantity').textContent = total;
};

function totalPrice() {
    let total = 0;

    cart.forEach((item) => {
        total += item.quantity * productPrices[item.id]
    })
    document.querySelector('#totalPrice').textContent = total;
};

Promise.all(promises).then(products => {
    products.forEach(product => {
        productPrices[product.id] = product.price;
    });

    cart.forEach((item, index) => {
        const product = products[index];
    });


let productArticle = document.createElement("article");
    productArticle.className = "cart__item"
    

let productDivImg = document.createElement("div");
    productDivImg.className = "cart__item__img"; 

let productImg = document.createElement("img");
    
let productItemContent = document.createElement("div");   
    productItemContent.className = "cart__item__content";

let productItemContentTitlePrice = document.createElement("div");
    productItemContentTitlePrice.className = "cart__item__content__description";

let productTitle = document.createElement("h2");    

let productColor = document.createElement("p");
 
let productPrice = document.createElement("p");   

let productItemContentSettings = document.createElement("div");
    productItemContentSettings.className = "cart__item__content__settings";

let productItemContentSettingsQuantity = document.createElement("div");
    productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";

let productQty = document.createElement("p"); 
    productQty.innerHTML = "Qté : ";

let productQuantity = document.createElement("input"); 
    productQuantity.className = "itemQuantity";

let productItemContentSettingsDelete = document.createElement("div");
    productItemContentSettingsDelete.className = "cart__item__content__settings__delete";


    document.querySelector("#cart__items").appendChild(productArticle);
    productArticle.appendChild(productDivImg);
    productDivImg.appendChild(productImg);
    productArticle.appendChild(productItemContent);
    productItemContent.appendChild(productItemContentTitlePrice);
    productItemContentTitlePrice.appendChild(productTitle);
    productTitle.appendChild(productColor);
    productItemContentTitlePrice.appendChild(productPrice);
    productItemContent.appendChild(productItemContentSettings);
    productItemContentSettings.appendChild(productItemContentSettingsQuantity);
    productItemContentSettingsQuantity.appendChild(productQty);
    productItemContentSettingsQuantity.appendChild(productQuantity);
    productItemContentSettings.appendChild(productItemContentSettingsDelete);

// implémentation totalquantity (ressemble beaucoup à total price sans l'utilisation de l'objet productPrices)

// création du DOM pour chaque produit (ne pas utiliser l'interpolation mais favoriser le document.createElement) (createElement article...)

// modif quantity produit (gérer un event listener sur j4) mettre a jour la quantité totale 

// suppression dans Products aussi que J7

// penser a supprimer le DOM du produit avec "remove"

// sauvegarde du localstorage


    totalQuantity();
    totalPrice();

});