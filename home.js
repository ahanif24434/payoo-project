const validPin = 1234
document.getElementById("add-money-btn").addEventListener('click', function(e){ 
    e.preventDefault()
    
    const bank = document.getElementById("bank_name").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const addPin = parseInt(document.getElementById("add-pin").value)
    const availableBalance = parseInt(document.getElementById("available_balance").innerText)
    if(accountNumber.length <11){
         alert("please provide valid Accountnumber")
         return // যোগ করা ঠেকাও
    }
    if(addPin != validPin){
        alert("please valid pin Number")
        return
    }
    const totalNewAvailableBalance = addAmount + availableBalance
    document.getElementById("available_balance").innerText = totalNewAvailableBalance

    
})
//toggling feature
    document.getElementById("add-button").addEventListener('click', function(){
        document.getElementById("cash-out-parent").style.display ='none'
        document.getElementById('add-money-parent').style.display ='block'
    })
    document.getElementById("cash-out-button").addEventListener('click', function(){
        document.getElementById('add-money-parent').style.display ='none'
        document.getElementById('cash-out-parent').style.display ='block'
    })