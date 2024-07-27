let categoryFilter = document.getElementById("category-filter");
let productList = document.getElementById("product-list");
console.log(categoryFilter, productList);

let products = productList.querySelectorAll(".product");

categoryFilter.addEventListener('change', function () {
    let selectedCategory = categoryFilter.value;
    console.log(selectedCategory);

    // let products = productList.querySelectorAll(".product");
    console.log(products);

    products.forEach(function (product) {
        let productAttribute = product.getAttribute('data-category');
        console.log(productAttribute);

        if (selectedCategory === productAttribute || selectedCategory == 'all') {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
})
