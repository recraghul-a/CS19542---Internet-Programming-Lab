function lookupTaxRate() {
    const productCategory = document.getElementById("productCategory").value;


    let taxRate = 0;
    if (productCategory === "electronics") {
        taxRate = 18;
    } else if (productCategory === "food") {
        taxRate = 5;
    } else if (productCategory === "clothing") {
        taxRate = 5;
    } else if (productCategory === "services") {
        taxRate = 18;
    }

    document.getElementById("taxRateResult").textContent = `Tax Rate: ${taxRate}%`;
}