document
  .getElementById("Withdraw-submit")
  .addEventListener("click", function () {
    const WithdrawAmount = document.getElementById("Withdraw");
    var WithdrawAmountValueFloat = parseFloat(WithdrawAmount.value);
    WithdrawAmount.value = "";

    if (isNaN(WithdrawAmountValueFloat)) {
      WithdrawAmountValueFloat = 0;
      alert("Please Enter a Valid Number");
    }

    const previousWithdrawAmount = document.getElementById(
      "previousWithdrawAmount"
    );
    const previousWithdrawamountValueFloat = parseFloat(
      previousWithdrawAmount.innerText
    );

    const updatedWithdrawAmountValue =
      previousWithdrawamountValueFloat + WithdrawAmountValueFloat;
    previousWithdrawAmount.innerText = updatedWithdrawAmountValue;

    const TotalAmount = document.getElementById("total-balance");
    const TotalAmountFloat = parseFloat(TotalAmount.innerText);

    const UpdatedTotalAmountFloat = TotalAmountFloat - WithdrawAmountValueFloat;

    if (UpdatedTotalAmountFloat < 0) {
      alert("You can't withdraw more than your balance");
      WithdrawAmountValueFloat = 0;
    } else TotalAmount.innerText = UpdatedTotalAmountFloat;
  });
