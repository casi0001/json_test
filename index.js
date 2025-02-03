const categoryList = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showCategory(data));

function showCategory(data) {
  const markup = data
    .map(
      (element) => `
        <a href="productlist.html?category=${element.category}" class="box"><p>${element.category}</p></a>
    `
    )
    .join("");

  console.log("min markup er", markup);

  document.querySelector(".category_list_container").innerHTML = markup;
}
