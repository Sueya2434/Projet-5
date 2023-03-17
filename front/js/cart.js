const cart = JSON.parse(localStorage.getItem('cart'))


const promises = [];

cart.forEach(item => {
    promises.push(fetch(`http://localhost:3000/api/products/${item.id}`).then(res => res.json()));
});


const productPrices = {};

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

function totalQuantity() {
    let total = 0;

    cart.forEach((item) => {
        total += item.quantity
    })
    document.querySelector('#totalQuantity').textContent = total;
};

let productArticle = document.createElement("article");
    productArticle.className = "cart__item"
    document.querySelector("#cart__items").appendChild(productArticle);


let productDivImg = document.createElement("div");
    productArticle.appendChild(productDivImg);
    productDivImg.className = "cart__item__img";

// implémentation totalquantity (ressemble beaucoup à total price sans l'utilisation de l'objet productPrices)

// création du DOM pour chaque produit (ne pas utiliser l'interpolation mais favoriser le document.createElement) (createElement article...)

// modif quantity produit (gérer un event listener sur j4) mettre a jour la quantité totale 

// suppression dans Products aussi que J7

// penser a supprimer le DOM du produit avec "remove"

// sauvegarde du localstorage


    totalQuantity();
    totalPrice();

});