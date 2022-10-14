const addToDatabase = (id) => {

    const exist = getDatabase()
    let shopping_cart = {};
    if (!exist) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exist);
        if (shopping_cart[id]) {
            const newCount = shopping_cart[id] + 1;
            shopping_cart[id] = newCount;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDatabase(shopping_cart)
    // console.log(id);
}
const updateDatabase = (cart) => {
    localStorage.setItem('shopping_cart', JSON.stringify(cart));
}
const getDatabase = () => localStorage.getItem('shopping_cart');

const removeFromDatabase = (id) => {
    // console.log(id);
    const exists = getDatabase();
    if (!exists) {
    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDatabase(shopping_cart);
    }

}

export { addToDatabase, removeFromDatabase };