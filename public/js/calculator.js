window.onload = function() {
  $("#price").on("change", calculatePriceAfterTax)
  $("#taxRate").on("change", calculatePriceAfterTax)
  $("#priceAfterTaxed").on("change", calculateTotalCost)
  $("#exchangeRate").on("change", calculateTotalCost)
  $("#logistics").on("change", calculateTotalCost)
  calculatePriceAfterTax()
}

function calculatePriceAfterTax(){
  console.log(parseFloat($("#price").val()))
  console.log(parseFloat($("#taxRate").val()))
  var priceAfterTaxed = parseFloat($("#price").val()) 
  priceAfterTaxed *= (parseFloat(1) + parseFloat($("#taxRate").val()))
  $('#priceAfterTaxed').text(priceAfterTaxed.toFixed(2))
  calculateTotalCost()
}

function calculateTotalCost(){
  var totalCost = parseFloat($("#priceAfterTaxed").html());
  totalCost += (parseFloat($("#logistics").val()))
  totalCost *= (parseFloat($("#exchangeRate").val()))
  console.log("totalCost " + String(totalCost))
  $("#totalCost").text(totalCost.toFixed(2))
}
