function capitalize(value) {
  let resultValue = ''

  for (let i = 0; i < value.length; i++) {

    if ( i === 0 ) {
       resultValue = resultValue + value[i].toUpperCase()
    }
    else {
      resultValue = resultValue + value[i]
    }
  }

  return resultValue
};

const btns = document.querySelectorAll(".petrol-cat-btn");

const inptLiter = document.querySelector("#inptLiter");
const inptAmount = document.querySelector("#inptAmount");

const paymentTypeBtns = document.querySelectorAll('.payment-type-btn');
const reportBtn = document.querySelector('.report-btn');
const checkWrapper = document.querySelector('.check-wrapper');

let petrolPrice = 1;
let paymentType = "cash";

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

inptLiter.addEventListener('input', () => {
  let liter = +inptLiter.value;
  inptAmount.value = liter * petrolPrice;
});

paymentTypeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    paymentTypeBtns.forEach((item) => {
      item.classList.remove("active");
    });

    paymentType = btn.value;
    btn.classList.add("active");
  })
})



reportBtn.addEventListener("click", () => {
  const liter = +inptLiter.value;
  const priceString = `${petrolPrice.toFixed(2)} AZN`
  const literString = `${liter.toFixed(2)} Liter`
  const totalPriceString = `${(liter * petrolPrice).toFixed(2)} AZN`
  const paymentTypeString = `${capitalize(paymentType)}`
  const currentDate = new Date();
  const dateString = `${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()}`;


  checkWrapper.innerHTML = `
    <ul>
      <li>Price: ${priceString}</li>
      <li>Liter: ${literString}</li>
      <li>Total: ${totalPriceString}</li>
      <li>Payment Type: ${paymentTypeString}</li>
      <li>Date: ${dateString}</li>
    </ul>
  `
});