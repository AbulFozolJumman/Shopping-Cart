// Phone
// Phone minus 
document.getElementById('phone-minus').addEventListener('click', function () {
    // Phone count
    const phoneCountField = document.getElementById("phone-count");
    const phoneCountString = phoneCountField.value;
    const phoneCount = parseInt(phoneCountString);
    const newPhoneCount = phoneCount - 1;
    phoneCountField.value = newPhoneCount;

    // Phone total price
    const phoneTotalPriceElement = document.getElementById("phone-total-price");
    const newPhoneTotalPrice = 1219 * newPhoneCount;
    phoneTotalPriceElement.innerText = newPhoneTotalPrice;

    // Sub-Total
    const subtotalPriceElement = document.getElementById('subtotal-price');
    const subtotalPriceString = subtotalPriceElement.innerText;
    const subtotalPrice = parseInt(subtotalPriceString);
    const newSubtotalPrice = subtotalPrice - 1219;
    subtotalPriceElement.innerText = newSubtotalPrice;

    // 10% Tax
    const taxAmountElement = document.getElementById('tax');
    const taxAmount = newSubtotalPrice * 0.1;
    const tax = taxAmount.toFixed(2);
    taxAmountElement.innerText = tax;

    // Total price
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = Math.round(newSubtotalPrice + parseFloat(tax));
    totalPriceElement.innerText = totalPrice;
});

// Phone plus
document.getElementById('phone-plus').addEventListener('click', function () {
    // Phone count
    const phoneCountField = document.getElementById("phone-count");
    const phoneCountString = phoneCountField.value;
    const phoneCount = parseInt(phoneCountString);
    const newPhoneCount = phoneCount + 1;
    phoneCountField.value = newPhoneCount

    // Phone total price
    const phoneTotalPriceElement = document.getElementById("phone-total-price");
    // const phoneTotalPriceString = phoneTotalPriceElement.innerText;
    // const phoneTotalPrice = parseInt(phoneTotalPriceString);
    const newPhoneTotalPrice = 1219 * newPhoneCount;
    phoneTotalPriceElement.innerText = newPhoneTotalPrice;

    // Sub-Total
    const subtotalPriceElement = document.getElementById('subtotal-price');
    const subtotalPriceString = subtotalPriceElement.innerText;
    const subtotalPrice = parseInt(subtotalPriceString);
    const newSubtotalPrice = subtotalPrice + 1219;
    subtotalPriceElement.innerText = newSubtotalPrice;

    // 10% Tax
    const taxAmountElement = document.getElementById('tax');
    const taxAmount = newSubtotalPrice * 0.1;
    const tax = taxAmount.toFixed(2);
    taxAmountElement.innerText = tax;

    // Total price
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = Math.round(newSubtotalPrice + parseFloat(tax));
    totalPriceElement.innerText = totalPrice;
});

// Case minus
document.getElementById('case-minus').addEventListener('click', function () {
    // Case count
    const caseCountField = document.getElementById("case-count");
    const caseCountString = caseCountField.value;
    const caseCount = parseInt(caseCountString);
    const newCaseCount = caseCount - 1;
    caseCountField.value = newCaseCount

    // Case total price
    const caseTotalPriceElement = document.getElementById("case-total-price");
    // const caseTotalPriceString = caseTotalPriceElement.innerText;
    // const caseTotalPrice = parseInt(caseTotalPriceString);
    const newCaseTotalPrice = 59 * newCaseCount;
    caseTotalPriceElement.innerText = newCaseTotalPrice;

    // Sub-Total
    const subtotalPriceElement = document.getElementById('subtotal-price');
    const subtotalPriceString = subtotalPriceElement.innerText;
    const subtotalPrice = parseInt(subtotalPriceString);
    const newSubtotalPrice = subtotalPrice - 59;
    subtotalPriceElement.innerText = newSubtotalPrice;

    // 10% Tax
    const taxAmountElement = document.getElementById('tax');
    const taxAmount = newSubtotalPrice * 0.1;
    const tax = taxAmount.toFixed(2);
    taxAmountElement.innerText = tax;

    // Total price
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = Math.round(newSubtotalPrice + parseFloat(tax));
    totalPriceElement.innerText = totalPrice;
});

// Case plus
document.getElementById('case-plus').addEventListener('click', function () {
    // Case count
    const caseCountField = document.getElementById("case-count");
    const caseCountString = caseCountField.value;
    const caseCount = parseInt(caseCountString);
    const newCaseCount = caseCount + 1;
    caseCountField.value = newCaseCount

    // Case total price
    const caseTotalPriceElement = document.getElementById("case-total-price");
    // const caseTotalPriceString = caseTotalPriceElement.innerText;
    // const caseTotalPrice = parseInt(caseTotalPriceString);
    const newCaseTotalPrice = 59 * newCaseCount;
    caseTotalPriceElement.innerText = newCaseTotalPrice;

    // Sub-Total
    const subtotalPriceElement = document.getElementById('subtotal-price');
    const subtotalPriceString = subtotalPriceElement.innerText;
    const subtotalPrice = parseInt(subtotalPriceString);
    const newSubtotalPrice = subtotalPrice + 59;
    subtotalPriceElement.innerText = newSubtotalPrice;

    // 10% Tax
    const taxAmountElement = document.getElementById('tax');
    const taxAmount = newSubtotalPrice * 0.1;
    const tax = taxAmount.toFixed(2);
    taxAmountElement.innerText = tax;

    // Total price
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = Math.round(newSubtotalPrice + parseFloat(tax));
    totalPriceElement.innerText = totalPrice;
});