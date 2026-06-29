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