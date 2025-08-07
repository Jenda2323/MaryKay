let price = document.getElementById("price");
let totalPrice = document.getElementById("total-price");
let dphPrice = document.getElementById("dph-price");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let discountPrice = document.getElementById("discount-price");
let discountBtn35 = document.getElementById("discount-btn35");
let discountBtn40 = document.getElementById("discount-btn40");
let discountBtn45 = document.getElementById("discount-btn45");

if (!price || !totalPrice || !dphPrice) {
  console.error("Některé elementy se nenašly!");
}

plus.addEventListener("click", () => {
  let currentTotal = Number(totalPrice.value) || 0;
  let priceValue = Number(price.value) || 0;

  totalPrice.value = (currentTotal + priceValue).toFixed(2);
  dphPrice.value = (totalPrice.value * 1.21).toFixed(2);
  price.value = null;
});

minus.addEventListener("click", () => {
  if (price.value > 0) {
    let currentTotal = Number(totalPrice.value) || 0;
    let priceValue = Number(price.value) || 0;

    totalPrice.value = Math.max(0, currentTotal - priceValue).toFixed(2);
    dphPrice.value = (totalPrice.value * 1.21).toFixed(2);
    price.value = null;
  }
});

discountBtn35.addEventListener("click", () => {
  let dphValue = Number(dphPrice.value) || 0;

  discountPrice.value = (dphValue * 0.65).toFixed(2);
});

discountBtn40.addEventListener("click", () => {
  let dphValue = Number(dphPrice.value) || 0;

  discountPrice.value = (dphValue * 0.6).toFixed(2);
});

discountBtn45.addEventListener("click", () => {
  let dphValue = Number(dphPrice.value) || 0;

  discountPrice.value = (dphValue * 0.55).toFixed(2);
});
