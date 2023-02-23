/*    /**
 * Retrieves the catalog of products from the API
 * @returns Array

async function getData() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();

    return products;
};
/**
 * Displays the catalog of products on the homepage
 * @param {Array} products 

async function displayData(products) {
    console.log(products);
    const items = document.getElementById("items");
    products.forEach((product) => {
        items.innerHTML += `
        <a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.atlTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
        </a>
        `;
    });
};

async function init() {
    const products = await getData();
    displayData(products);
};

init();
*/

fetch('http://localhost:3000/api/products')
.then((response) => {
    return response.json();
})
.then((products) => {
    console.log(products);
    const items = document.getElementById("items");
    products.forEach((product) => {
        items.innerHTML += `
        <a href="./product.html?id=${product._id}">
            <article>
              <img src="${product.imageUrl}" alt="${product.atlTxt}">
              <h3 class="productName">${product.name}</h3>
              <p class="productDescription">${product.description}</p>
            </article>
        </a>
        `;
    });
});


