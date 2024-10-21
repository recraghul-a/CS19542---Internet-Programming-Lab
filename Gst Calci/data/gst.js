
const form = document.getElementById('gstForm');
const amountInput = document.getElementById('amount');
const gstPercentageInput = document.getElementById('gstPercentage');
const taxTypeSelect = document.getElementById('taxType');
const resultDiv = document.createElement('div');


form.after(resultDiv);


form.addEventListener('submit', (event) => {
  event.preventDefault();


  const amount = parseFloat(amountInput.value);
  const gstPercentage = parseFloat(gstPercentageInput.value);
  const taxType = taxTypeSelect.value;

  let gstAmount, totalAmount, scgstAmount;

  if (taxType === 'inclusive') {
    gstAmount = (amount * gstPercentage) / (100 + gstPercentage);
    totalAmount = amount;
  } else {
    gstAmount = (amount * gstPercentage) / 100;
    totalAmount = amount + gstAmount;
  }
   scgstAmount = gstAmount/2

  resultDiv.innerHTML = `
    <div id="resultDiv">
    <style>
     #resultDiv {
     display: flex;
     align-content: center;
     width: 100%;
     }
    .result-item {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: center;
  padding: 20px;
  padding-top: 20px;
  margin-right:0;
}

.label {
  font-size: 18px;
  margin-right: 10px;
}

.value {
  font-size: 24px;
  font-weight: bold;
}
    </style>
  <p class="result-item">
    <span class="label">GST Amount:</span>
    <span class="value" style="color: green;">${gstAmount.toFixed(2)}</span>
  </p>
  <p class="result-item">
    <span class="label">Total Amount:</span>
    <span class="value" style="color: blue;">${totalAmount.toFixed(2)}</span>
  </p>
  <p class="result-item">
    <span class="label">SGST Amount:</span>
    <span class="value" style="color: orange;">${scgstAmount.toFixed(2)}</span>
  </p>
  <p class="result-item">
    <span class="label">CGST Amount:</span>
    <span class="value" style="color: purple;">${scgstAmount.toFixed(2)}</span>
  </p>
</div>
  `;
});