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
}
// ITERATION 5

function createProduct() {
  //... your code goes here
  const createButton = document.getElementById("#create");
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  let removeItemsButtons = document.querySelectorAll(".btn-remove");
  console.log(removeItemsButtons);
  for (let i = 0; i < removeItemsButtons.length; i++) {
    let button = removeItemsButtons[i];
    console.log(button);
    button.addEventListener("click", function (event) {
      console.log("clicked");
      let buttonClicked = event.target;
      buttonClicked.parentNode.parentNode.remove();
      calculateAll();
    });
  }

  //... your code goes here
});
