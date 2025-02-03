// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const productId = URLSearchParams.get("id");

const productId = new URLSearchParams(window.location.search).get("id");

console.log("productId", productId);

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    document.querySelector(".product-container").innerHTML = `
          <div class="product-image">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="Sahara Team India Fanwear Jersey" />
      </div>

      <!-- Middle Section: Product Details -->
      <div class="product-info">
        <h2>${data.brandname}</h2>
        <div class="info-grid">
          <p><strong>Model name</strong></p>
          <p>${data.productdisplayname}</p>

          <p><strong>Color</strong></p>
          <p>${data.basecolour}</p>

          <p><strong>Price</strong></p>
          <p>${data.price} kr</p>
        </div>

        <h3>Brand</h3>
        <p>${data.brandname}</p>
      </div>

      <!-- Right Section: Purchase Box -->
      <aside class="purchase-box">
        <h2>${data.productdisplayname}</h2>
        <p class="brand-info">${data.category} | ${data.articletype}</p>
        <p for="size">Choose a size</p>
        <select id="size">
          <option>S</option>
          <option>M</option>
          <option>L</option>
          <option>XL</option>
        </select>
        <button class="add-to-basket">Add to basket</button>
      </aside>`;
  });
