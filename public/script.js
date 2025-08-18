let price = document.getElementById("price");
let totalPrice = document.getElementById("total-price");
let dphPrice = document.getElementById("dph-price");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let discountPrice = document.getElementById("discount-price");
let discountBtn35 = document.getElementById("discount-btn35");
let discountBtn40 = document.getElementById("discount-btn40");
let discountBtn45 = document.getElementById("discount-btn45");

if (!price || !totalPrice || !dphPrice || !discountPrice || !discountBtn35 || !discountBtn40 || !discountBtn45) {
  console.error("Některé elementy se nenašly!");
}

const fmt = new Intl.NumberFormat("cs-CZ", { style: "currency", currency: "CZK" });

function refreshDisplay() {
  const total = Number(totalPrice.value) || 0;
  const dph = Number(dphPrice.value) || 0;
  const disc = Number(discountPrice.value) || 0;

  const totalSpan = document.querySelector(".total-formatted");
  const dphSpan = document.querySelector(".dph-formatted");
  const discSpan = document.querySelector(".discount-formatted");

  if (totalSpan) totalSpan.textContent = fmt.format(total);
  if (dphSpan) dphSpan.textContent = fmt.format(dph);
  if (discSpan) discSpan.textContent = fmt.format(disc);
}

plus.addEventListener("click", () => {
  let currentTotal = Number(totalPrice.value) || 0;
  let priceValue = Number(price.value) || 0;

  totalPrice.value = (currentTotal + priceValue).toFixed(2);
  dphPrice.value = (totalPrice.value * 1.21).toFixed(2);
  price.value = null;

  refreshDisplay();
});

minus.addEventListener("click", () => {
  if (price.value && Number(price.value) > 0) {
    let currentTotal = Number(totalPrice.value) || 0;
    let priceValue = Number(price.value) || 0;

    totalPrice.value = Math.max(0, currentTotal - priceValue).toFixed(2);
    dphPrice.value = (totalPrice.value * 1.21).toFixed(2);
    price.value = null;

    refreshDisplay();
  }
});

discountBtn35.addEventListener("click", () => {
  let dphValue = Number(dphPrice.value) || 0;
  discountPrice.value = (dphValue * 0.65).toFixed(2);
  refreshDisplay();
});

discountBtn40.addEventListener("click", () => {
  let dphValue = Number(dphPrice.value) || 0;
  discountPrice.value = (dphValue * 0.6).toFixed(2);
  refreshDisplay();
});

discountBtn45.addEventListener("click", () => {
  let dphValue = Number(dphPrice.value) || 0;
  discountPrice.value = (dphValue * 0.55).toFixed(2);
  refreshDisplay();
});

refreshDisplay();
