function calculateTip () {
    var totalBill = document.getElementById('totalBill').value;
    var tipPercentage = document.getElementById('tipPercentage').value;

    //console.log("Total Bill: ", totalBill);
    //console.log("Tip Percentage", tipPercentage);

    var percentAsdecimal = tipPercentage / 100;
    //console.log("% as Decimal: ", percentAsdecimal);

    var tip = percentAsdecimal * totalBill;
    //console.log("Tip", tip);

    var billWithTip = Number(totalBill) + tip;
    //console.log(billWithTip.toFixed(2));

    document.getElementById('totalOutput').innerHTML = billWithTip.toFixed(2);
    document.getElementById('tipOutput').innerHTML = tip.toFixed(2);

    document.getElementById('outputCards').style.display = "block";
}


// Reloads the page to clear relevant inputs
function clearInputs () {
    location.reload();
}