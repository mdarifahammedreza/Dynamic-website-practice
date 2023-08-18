document
  .getElementById("Deposit-submit")
  .addEventListener("click", function () {
    const depositAmount = document.getElementById("Deposit");
    const depositAmountValueString = depositAmount.value;
    depositAmount.value = "";
    var depositAmountValueFloat = parseFloat(depositAmountValueString);
    // const a = isNaN(depositAmountValueFloat);
    // console.log(a);
    // if (!a) {
    //   depositAmountValueFloat = 0;
    //   alert("Please Enter Valid Number");
    // }
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
  });
