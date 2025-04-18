// Lidar com os itens do carrinho

// Criar um item com subtotal
async function createItem(name, price, quantity) {

    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;

