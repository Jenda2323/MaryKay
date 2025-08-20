const price = document.getElementById("price");
const totalPrice = document.getElementById("total-price");
const dphPrice = document.getElementById("dph-price");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const discountPrice = document.getElementById("discount-price");
const discountBtn35 = document.getElementById("discount-btn35");
const discountBtn40 = document.getElementById("discount-btn40");
const discountBtn45 = document.getElementById("discount-btn45");

if (
  !price ||
  !totalPrice ||
  !dphPrice ||
  !plus ||
  !minus ||
  !discountPrice ||
  !discountBtn35 ||
  !discountBtn40 ||
  !discountBtn45
) {
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
  const currentTotal = Number(totalPrice.value) || 0;
  const priceValue = Number(price.value) || 0;

  totalPrice.value = (currentTotal + priceValue).toFixed(2);
  dphPrice.value = (totalPrice.value * 1.21).toFixed(2);
  price.value = null;

  refreshDisplay();
});

minus.addEventListener("click", () => {
  if (price.value && Number(price.value) > 0) {
    const currentTotal = Number(totalPrice.value) || 0;
    const priceValue = Number(price.value) || 0;

    totalPrice.value = Math.max(0, currentTotal - priceValue).toFixed(2);
    dphPrice.value = (totalPrice.value * 1.21).toFixed(2);
    price.value = null;

    refreshDisplay();
  }
});

discountBtn35.addEventListener("click", () => {
  const dphValue = Number(dphPrice.value) || 0;
  discountPrice.value = (dphValue * 0.65).toFixed(2);
  refreshDisplay();
});

discountBtn40.addEventListener("click", () => {
  const dphValue = Number(dphPrice.value) || 0;
  discountPrice.value = (dphValue * 0.6).toFixed(2);
  refreshDisplay();
});

discountBtn45.addEventListener("click", () => {
  const dphValue = Number(dphPrice.value) || 0;
  discountPrice.value = (dphValue * 0.55).toFixed(2);
  refreshDisplay();
});

refreshDisplay();
