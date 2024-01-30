(async() => {

    const productContainer = document.getElementById("productContainer");
    const searchInput = document.getElementById("searchInput");
    
    const url = "https://fakestoreapi.com/products";
    const fetchProduct = async () => {
        try {
            const res = await fetch(url);
            return await res.json();
    
        } catch (error) {
            return error;
        }
    };

    const products = await fetchProduct();
    const generateProduct = (products) => {
        return `<div class="product-card">
        <div class="image-container">
            <img src="${products.image}" alt="">
        </div>
        <div class="product-content">
            <h2>${products.title}</h2>
            <p>${products.description}</p>
            <button>${products.price}  $</button>
        </div>
    </div>`;
    };

    const renderProducts = (products) => {
        productContainer.innerHTML="";
        products.forEach(product => {
            productContainer.innerHTML += generateProduct(product);
        })
    };

    const checkTextContain=(text, searchText)=>{
        return text.toString().toLowerCase().includes(searchText);
    }
    const filterHandler = (event) => {
        const searchText=event.target.value.toLowerCase();
        const filterProducts = products.filter((product)=>{
           // return product.title.toLowerCase().includes(searchText)

            return( checkTextContain(product.description, searchText)
            ||checkTextContain(product.title, searchText)
            || checkTextContain(product.price, searchText));
        })
        renderProducts(filterProducts);
    }

    searchInput.addEventListener("keyup", filterHandler)
    renderProducts(products);
})();
