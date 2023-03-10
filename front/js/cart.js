const cart = [];

const promises = [];

cart.forEach(item => {
    promises.push(fetch(`http://localhost:3000/api/products/${id}`).then(res => res.json()));
});

const productPrices = {};

function totalPrice() {
    let total = 0;

    cart.forEach((item) => {
        total += item.quantity * productPrices[item.id]
    })
    document.querySelector('#totalPrice').textContent = total;
}

Promise.all(promises).then(products => {
    products.forEach(product => {
        productPrices[product.id] = product.price;
    });

    cart.forEach((item, index) => {
        const product = products[index];
    });

    totalPrice();

});

