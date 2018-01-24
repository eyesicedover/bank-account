var newAccount;

function BankAccount(name, initDepo) {
  this.name = name;
  if (initDepo === "") {
    initDepo = 0;
  } else {
    initDepo = parseFloat(initDepo);
  }
  this.amount = initDepo;
}

function checkInput(amount) {
  if (amount === "") {
    amount = 0;
  } else {
    amount = parseFloat(amount);
  }
  return amount;
}

function resetFields() {
  $("input#acctName").val("");
  $("input#acctInitDeposit").val("");
  $("input#acctDeposit").val("");
  $("input#acctWithdrawal").val("");
}

$(document).ready(function() {
  $("#newAcctForm").submit(function(event) {
    event.preventDefault();
    var name = $("input#acctName").val();
    var initDepo = $("input#acctInitDeposit").val();
    newAccount = new BankAccount(name, initDepo);
    console.log(newAccount);
    $("#balance").text(newAccount.name + ", your current balance is $" + newAccount.amount.toFixed(2));
    $("#newAcct").hide();
    $("#myCarousel").hide();
    $("#columns").hide();
    $("#balance").show();
    $("#acctManage").show();
  });

  $("#manageAcctForm").submit(function(event) {
    event.preventDefault();
    var depo = $("input#acctDeposit").val();
    var withdraw = $("input#acctWithdrawal").val();

    newAccount.amount = newAccount.amount + checkInput(depo);
    newAccount.amount = newAccount.amount - checkInput(withdraw);

    $("#balance").text(newAccount.name + ", your current balance is $" + newAccount.amount.toFixed(2));
  });

  $("button#logout").click(function() {
    $("#newAcct").show();
    $("#myCarousel").show();
    $("#columns").show();
    $("#balance").hide();
    $("#acctManage").hide();
    resetFields();

  });
});
