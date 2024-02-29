let balance = 100000;
let Pin = 1234;
let today = new Date();
InsertYourAtm()

function InsertYourAtm(){
    alert(today + "Welcome to Mercy's Bank \n Please Insert Your ATM Card")
    let userInputPin1 = prompt("Enter your 4-digit pin")
    
    if(userInputPin1 == Pin) {
        return bankLogic();
    }else if(userInputPin1 != Pin) {
        alert("Invalid Password \n Please Input Correct Password");
    }else{
        alert("You have entered an invalid input")
      }
}

function bankLogic() {
    let userInput = prompt("Do you want to perform a cashless transaction? \n What would you like to do? \n 1.Withdrawal \n 2. Deposit \n 3.Balance check \n 4.Transfer \n 5.Exit")
    if (userInput == 1) {
        Withdrawal();
    } else if(userInput == 2){
        Deposit();
    }else if(userInput == 3){
        CheckBalance();
    }else if(userInput == 4){
        Transfer();
    }else if(userInput == 5){
        Exit();
    }else{
        alert("You've entered a wrong option")
        return bankLogic()
    }
}

function Withdrawal() {
    
    let userInputWithdraw = prompt("How much do you want withdraw?");
    if (userInputWithdraw > balance) {
        alert("Insufficient Balance \n Please try again")
    }else if(userInputWithdraw < balance) {
        alert("Transaction Successful \n Please Take Your cash")
    }
}

function Deposit() {
    let userInputDeposit = prompt("How much do you want to deposit?");
    if (userInputDeposit > balance) {
        alert("Insufficient Funds \n Please try again!")
    }else if(userInputDeposit < balance) {
        alert("Transaction Successful \n Your Deposit has been completed")
    }
}

function CheckBalance() {
    let userInputCheckBalance = prompt("1.Savings \n 2.Current");
    if (userInputCheckBalance == 1) {
        alert("Your Balance is 100000")
    }else if(userInputCheckBalance == 2){
        alert("Your Balance is 100000")
    }else{
        alert("You've selected an invalid option")
    }
}

function Transfer() {
    let userInputTransfer = prompt("Input Account Number");
    let AccountNumber = Math.random() * 10;
    let userInputTransfer1 = prompt ("Enter Bank Name");
    let userInputTransfer2 = prompt ("How much do you want to transfer? \n 1. 10000 \n 2. 20000 \n 3.50000 \n 4. Others");
    if (userInputTransfer2 == 1 ) {
        alert("Transfer Successful")
    }if (userInputTransfer2 == 2) {
        alert("Transfer Successful")
    }if (userInputTransfer2 == 3) {
        alert("Transfer Successful")
    }if (userInputTransfer2 == 4){
        prompt ("Input the Amount You want to Transfer");
    }
      {    alert("Transfer Successful")
    }if (userInputTransfer2 > balance) {
        alert("Insufficient Funds")
    }
    }
    
        
function Exit() {
    let userInputExit = alert("Thank you for Banking with Us.")
}



