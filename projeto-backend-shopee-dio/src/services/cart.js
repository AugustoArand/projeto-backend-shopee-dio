// Arquivo que lida com o carrinho

// Adicionar item no carrinho
async function addItem(userCart, itemName) {
    userCart.push(itemName);
}

// Deletar o item
async function deleteItem(userCart, itemName) {
    const index = userCart.findIndex((item) => item.
        name === itemName)

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// Remover item
async function removeItem(userCart, index) {
    //Transforma o indice visual do usuário, para o índice do backend
    const deleteIndex = index - 1;
    if (index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

//Calcular o total
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(result);
}

async function displayCart(userCart) {
    console.log("Shopee Cart List:\n")

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal R$: ${item.subtotal()}`);
    })
}

async function displayWishList(userCart) {
    console.log("Shopee Wishlist:\n")

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x | Subtotal R$: ${item.subtotal()}`);
    })
}


// Exportação de Arquivos
export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart,
    displayWishList,
};