const cartFunction = () => {
    cartContainer.innerHTML = "";
    cartContainer.style.display = "flex";
    const cartHeader = document.createElement("div");
    cartHeader.classList = "cartHeader";
    cartHeader.innerHTML = `
    <h3 class="cart-title">Tu Carrito<h3>
    `;
    cartContainer.append(cartHeader);

    const cartButton = document.createElement("button");
    cartButton.innerText = "❌";
    cartButton.className = "cartButton";
    cartButton.addEventListener("click", () => {
        cartContainer.style.display = "none";
    })

    cartHeader.append(cartButton);

    cart.forEach((product) => {
        let cartContent = document.createElement("div");
        cartContent.classList = "cartContent";
        cartContent.innerHTML = `
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <span class="substract">-</span>
        <p>Cantidad : ${product.quantity}</p>
        <span class="add">+</span>
        <p>Total : ${product.quantity * product.price}</p>
        <span class="delete-product">❌</span>
        `;

        cartContainer.append(cartContent);

        let substract = cartContent.querySelector(".substract")
        substract.addEventListener("click", () => {
            if (product.quantity !== 1) {
                product.quantity--;
            }
            saveLocal();
            cartFunction();
        });

        let add = cartContent.querySelector(".add")
        add.addEventListener("click", () => {
            product.quantity++;
            saveLocal();
            cartFunction();
        });

        let deleteItem = cartContent.querySelector(".delete-product");
        deleteItem.addEventListener("click", () => {
            deleteItems(product.id);
        });

    });

    const finalPrice = cart.reduce((acc, el) => acc + el.price * el.quantity, 0);
    const finalPriceShown = document.createElement("div")
    finalPriceShown.className = "total-content"
    finalPriceShown.innerHTML = `El total a pagar es de: ${finalPrice} $`;
    cartContainer.append(finalPriceShown);
};

viewcart.addEventListener("click", cartFunction);

const deleteItems = (id) => {
    const foundId = cart.find((element) => element.id === id);
    cart = cart.filter((cartId) => {
        return cartId !== foundId;
    });
    cartCounter();
    saveLocal();
    cartFunction();
};

const cartCounter = () => {
    cartQuantity.style.display = "block";

    const cartLength = cart.length;
    localStorage.setItem("cartLength", JSON.stringify(cartLength));

    cartQuantity.innerText = JSON.parse(localStorage.getItem("cartLength"));
};

cartCounter();