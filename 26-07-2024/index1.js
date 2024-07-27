const categoryFilter = document.getElementById('category-filter');

const fillterData = (event) => {
    console.log(event.target.value);
    const selectedMobileType = event.target.value;
    const productsList = document.querySelectorAll(".product");
    console.log(productsList);

    productsList.forEach(element => {
        console.log(element);
        console.log(element.getAttribute("data-category"));
        if (element.getAttribute("data-category") == selectedMobileType || selectedMobileType == "all") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
}

categoryFilter.addEventListener('change', fillterData);