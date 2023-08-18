document
  .getElementById("Withdraw-submit")
  .addEventListener("click", function () {
    const WithdrawAmount = document.getElementById("Withdraw");
    const WithdrawAmountValueString = WithdrawAmount.value;
    WithdrawAmount.value = "";
  });
