function calculateITC() {

    const sellerProduct = document.getElementById("sellerProduct").value;
    const sellerGST = parseFloat(document.getElementById("sellerGST").value);
    const sellerAmount = parseFloat(document.getElementById("sellerAmount").value);
    const businessProduct = document.getElementById("businessProduct").value;
    const businessGST = parseFloat(document.getElementById("businessGST").value);
    const businessAmount = parseFloat(document.getElementById("businessAmount").value);


    const sellerGSTAmount = (sellerAmount * sellerGST) / 100;
    const businessGSTAmount = (businessAmount * businessGST) / 100;


    const itc = businessGSTAmount-sellerGSTAmount;


    document.getElementById("itcResult").textContent = `ITC: ${itc.toFixed(2)}`;
}