// fetchProductsThen()
function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        console.log("Product name:", item.fields.name);
      });
    })
    .catch(error => {
      console.log("Fetch error:", error);
    });
}

// fetchProductsAsync()
async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

// displayProducts(products)
function displayProducts(products) {
  const container = document.getElementById("product-container");

  const firstFive = products.slice(0, 5);

  firstFive.forEach(item => {
    const { name, price, image } = item.fields;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${image[0].url}" alt="${name}">
      <div class="product-name">${name}</div>
      <div class="product-price">$${(price / 100).toFixed(2)}</div>
    `;

    container.appendChild(card);
  });
}

// reusable handleError(error)
function handleError(error) {
  console.log(`An error occurred: ${error.message}`);
}