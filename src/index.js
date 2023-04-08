// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector(".price span").textContent);
  const quantity = product.querySelector(".quantity input").value;

  let totalAmount = price * quantity;
  product.querySelector(".subtotal span").innerHTML = totalAmount.toFixed(2);
  // return totalAmount;
}

function calculateAll() {
  let total = 0;
  // ITERATION 2
  const products = document.querySelectorAll(".product");
  products.forEach((product) => {
    updateSubtotal(product);
    total += parseFloat(product.querySelector(".subtotal span").textContent);
  });
  // ITERATION 3
  let totalValue = document.querySelector("#total-value span");
  totalValue.textContent = total.toFixed(2);
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  const product = target.parentNode.parentNode;
  product.remove();
  calculateAll();
}
// ITERATION 5
const addItemButton = document.getElementById("create");
addItemButton.addEventListener("click", createProduct);
function createProduct(event) {
  //... your code goes here
  // const newProduct = document.querySelector(".create-product");
  const newItemName = document.querySelector(".buttonNewName").value;
  const newItemPrice = document.querySelector(".buttonNewPrice").value;
  if (!newItemName || !newItemPrice) {
    return false;
  } else {
    const myElement = document.createElement("tr");
    myElement.className = "product";
    myElement.innerHTML = `
    <td class="name">
      <span>${newItemName}</span>
    </td>
    <td class="price">$<span>${parseInt(newItemPrice).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span></span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
    myElement
      .querySelector("button.btn-remove")
      .addEventListener("click", removeProduct);
    const parentElement = document.querySelector("tbody");
    parentElement.append(myElement);
  }
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  let removeItemsButtons = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeItemsButtons.length; i++) {
    let button = removeItemsButtons[i];
    button.addEventListener("click", function (event) {
      let buttonClicked = event.target;
      buttonClicked.parentNode.parentNode.remove();
      calculateAll();
    });
  }
});
