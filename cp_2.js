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