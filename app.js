const btns = document.querySelectorAll(".petrol-cat-btn");

const inptLiter = document.querySelector("#inptLiter");
const inptAmount = document.querySelector("#inptAmount");

let petrolPrice = 1;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    inptAmount.value = '';
    inptLiter.value = '';
    btns.forEach((item) => {
      item.classList.remove("active");
    });

    petrolPrice = +btn.value;
    btn.classList.add("active");
  });
});

inptAmount.addEventListener('input', () => {
  let amount = +inptAmount.value;
  inptLiter.value = amount / petrolPrice;
});
