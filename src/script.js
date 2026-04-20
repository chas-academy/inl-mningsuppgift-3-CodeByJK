// hämtar element från HTML
const productNameInput = document.getElementById('productInput');
const productPriceInput = document.getElementById('priceInput');
const addToCartButton = document.getElementById('addButton');
const cartItemsList = document.getElementById('cartList');

// lägga till objekt i en array för att hålla koll på kundvagnens innehåll
let cartItems = [];

// funktion för att lägga till en produkt i kundvagnen
function addToCart() {
    
// kod för att lägga till produkten i kundvagnen
    const productName = productNameInput.value;
    const productPrice = Number(productPriceInput.value);
    
    const newCartItem = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1
    };

    let itemExist = false;

    for (item of cartItems)
        if (item.productName === productName) {
            item.quantity++;
            itemExist = true;
        }

    if (!itemExist) {
        cartItems.push(newCartItem);
    }

// Rensa input-fälten efter att produkten har lagts till i kundvagnen
    productNameInput.value = '';
    productPriceInput.value = '';   

    renderCartItems();

}

function renderCartItems() {

    cartItemsList.innerHTML = '';

    for (item of cartItems) {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`;
        cartItemsList.appendChild(li);
    }
}

// lägger till event listener på "Lägg till i kundvagn"-knappen
addToCartButton.addEventListener('click', () => {
    addToCart();
});