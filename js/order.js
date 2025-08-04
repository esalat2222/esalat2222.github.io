let selectsPizza = document.querySelectorAll(".box-select-pizza img");
let currentPizza = document.querySelector(".order-pizza");

selectsPizza.forEach((selectPizza) => {
  selectPizza.addEventListener("click", (select) => {
    let pizzaSelected = select.target;
    currentPizza.src = pizzaSelected.src;
  });
});
