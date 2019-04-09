// console.log("Hello from app.js")
// create buttons
// listener for deposit button 
// do not overdraft (balance will not reach negative balance)
// input dollar amount 
//color of bant account to reflect balance
// accounts are independent of each other


//  $('deposit').on("click", sumMeduimOfExchange)
//  $('depositSavingExchange').on("click", sumMeduimOfExchange)

// // listener for withdrawal button

// $('withdrawCheckingExchange').bind("click", minusMeduimOfExchange)
// $('withdrawSavingExchange').bind("click", minusMeduimOfExchange)
let checkingBalance= 0;
let savingsBalance= 0;
//deposit will take value from input then add to value and show sum
$(function(){
    $("#checking .deposit").on('click', function(){
        let userInput = document.querySelector("#checking .input").value;
         // console.log(userInput)
        checkingDeposit= Number(userInput);
        checkingBalance = checkingBalance + checkingDeposit;
       console.log(checkingBalance)

     display = $('#checking .balance').html("$" + checkingBalance)

    })

    // Let newValue = newInput + balance (
    //     return (newValue))
    }
       
)  
$(function(){
    $("#checking .withdraw").on('click', function(){
        let userInput = document.querySelector("#checking .input").value;
         // console.log(userInput)
        checkingDeposit= Number(userInput);
        checkingBalance = checkingBalance + checkingDeposit;
       console.log(checkingBalance)

       let display = $('#checking .balance').html("$" + checkingBalance)

    })

    // Let newValue = newInput + balance (
    //     return (newValue))
    }
       
)  
$(function(){
    $("#savings .deposit").on('click', function(){
        let userInput = document.querySelector("#savings .input").value;
         // console.log(userInput)
        savingsDeposit= Number(userInput);
        savingsBalance = savingsBalance + savingsDeposit;
       console.log(savingsBalance)

       let display = $('#savings .balance').html("$" + savingsBalance)

    })

    // Let newValue = newInput + balance (
    //     return (newValue))
    }
       
)
$(function(){
    $("#savings.withdraw").on('click', function(){
        let userInput = document.querySelector("#savings.input").value;
         // console.log(userInput)
        savingsDeposit= Number(userInput);
        savingsBalance = savingsBalance + savingsDeposit;
       console.log(savingsBalance)

       let display = $('#savings.balance').html("$" + savingsBalance)

    })

    // Let newValue = newInput + balance (
    //     return (newValue))
    }
       
) 
