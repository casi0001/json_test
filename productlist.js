const myCategory = new URLSearchParams(window.location.search).get("category");
console.log("productliste loader... med categori:", myCategory);

const productContainer = document.querySelector(".container");
const overskrift = document.querySelector("h2");

overskrift.innerHTML = myCategory;

fetch(`https://kea-alt-del.dk/t7/api/products?category=${myCategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) => `<a href="product.html?id=${product.id}" class="product-link">
<div class="product">
<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Product 2" />
<div class="details">
<h3>${product.productdisplayname}</h3>
<p class="price">${product.brandname}</p>
<p>${product.category} | ${product.articletype}</p>
<p>DKK ${product.price},-</p>

</div>
<div class="discount"><p>-${product.discount}%</p></div>
</div>
</a>`
    )
    .join("");
  productContainer.innerHTML = markup;
}
