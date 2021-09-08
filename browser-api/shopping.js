/* const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if (!name) {
        return;
    }
    // display in the ui
    displayProduct(name);

    // add to local storage
    addProductToCart(name);

    //clear
    nameField.value = '';
}
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}
const addProductToCart = name => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = cart[name] + 1;
    }
    else {
        cart[name] = 1;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const placeOrder = () => {
    document.getElementById('products').textContent = '';
    localStorage.removeItem('cart');
}

displayLocalStorageCart(); */

const addItem = () =>{
    const name = document.getElementById('product-name');
    const nameValue = name.value;
    const itemContainer = document.getElementById('products');
    const li =  document.createElement('li');
    li.innerText = nameValue;
    itemContainer.appendChild(li);

    addToCart(nameValue);
}

const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObj ;
    if(cart){
        cartObj = JSON.parse(cart);
    }else{
        cartObj = {};
    }
    return cartObj;
}

const addToCart = (name) => {
    const cart = getCart();
    cart[name] = 1;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart' , cartStringify);
    
}