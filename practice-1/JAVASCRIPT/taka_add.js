document
  .getElementById("Deposit-submit")
  .addEventListener("click", function () {
    const depositAmount = document.getElementById("Deposit");
    const depositAmountValueString = depositAmount.value;
    depositAmount.value = "";
    var depositAmountValueFloat = parseFloat(depositAmountValueString);
    if (isNaN(depositAmountValueFloat)) {
      depositAmountValueFloat = 0;
      alert("Please Enter a Valid Number");
    }
    const previousDepositamount = document.getElementById(
      "previousDepositamount"
    );

    const previousDepositamountValueString = previousDepositamount.innerText;
    const previousDepositamountValueFloat = parseFloat(
      previousDepositamountValueString
    );
    const updatedDepositAmountValue =
      previousDepositamountValueFloat + depositAmountValueFloat;
    previousDepositamount.innerText = updatedDepositAmountValue;

    const totalBalance = document.getElementById("total-balance");
    const totalBalancefloat = parseFloat(totalBalance.innerText);

    const newTotalBalancefloat = totalBalancefloat + depositAmountValueFloat;
    totalBalance.innerText = newTotalBalancefloat;
  });
