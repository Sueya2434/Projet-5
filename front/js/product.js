let params = new URL(document.location).searchParams;
let id = params.get("id");

fetch(`http://localhost:3000/api/products/${id}`)
.then((response) => {
    return response.json();
})
.then((product) => {
    const item__img = document.getElementsByClassName("item__img");
        item__img[0].innerHTML += `
        <img src="${product.imageUrl}" alt="${product.altTxt}"></img>
        `;
    const name = document.getElementById("title");
        name.innerHTML += product.name;
    const price = document.getElementById("price");
        price.innerHTML += product.price;
    const description = document.getElementById("description")
        description.innerHTML += product.description;
    const select = document.getElementById("colors")
        product.colors.forEach(color => {
            console.log(color)
            select.innerHTML += `
            <option value="${color}">${color}</option>
            `;
        });
    const addToCart = document.getElementById("addToCart");
    console.log(addToCart)
    addToCart.addEventListener("click",function(){

        const colorSelect = select.value;
        const quantity = document.getElementById("quantity");
        const quantitySelect = quantity.value;

/* créer objet produit qui contient l'identifiant du produit , la quantité selectionnée et la couleur selectionnée */
/* cet objet le mettre dans un Array = pour crée un tableau vide déclarer variable avec crochet vides , insérer element avec push */
/* utiliser localStorage */ 

        if (quantitySelect < 1) {
            alert('Veuillez sélectionner une couleur et une quantitée comprise entre 1 et 100');
            return;
        }

        const cart = JSON.parse(localStorage.getItem('cart')) ?? [];

        const item = cart.find(item => product.id === item.id && colorSelect === item.colorSelect);
  
            
            if (item) {
                item.quantitySelect += quantitySelect;
            }
            else {
                cart.push ({
                    id,
                    colorSelect,
                    quantitySelect
                });
            }
            localStorage.setItem('cart', JSON.stringify(cart));
    })
});
