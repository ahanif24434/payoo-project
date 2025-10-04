
const validPin = 1234
const transectionData = []
// function to get input value in parseIn
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
   // console.log(inputFieldValueNumber)
    return inputFieldValueNumber
}
// function to getinput value without parseInt
function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}
// function to get innerText
function getInnerTextValue(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    //console.log(elementValueNumber)
    return elementValueNumber
}
// funtion to set innerText
function setInnerText(id, value){
const availableBalanceElement = document.getElementById(id)
 availableBalanceElement.innerText = value
}
// function toggle feature
function handleToggle(id){
    const forms = document.getElementsByClassName("form")
    for(const form of forms){
        form.style.display = "none"
    }
    document.getElementById(id).style.display ="block"
}
document.getElementById("add-money-btn").addEventListener('click', function(e){ 
    e.preventDefault()
    const bank = getInputValue("bank_name")
    const accountNumber = document.getElementById("account-number").value
    const addAmount = getInputValueNumber("add-amount")
    const addPin = getInputValueNumber("add-pin")
    const availableBalance = getInnerTextValue("available_balance")
    if(accountNumber.length <11){
         alert("please provide valid Accountnumber")
         return // যোগ করা ঠেকাও
    }
    if(addPin !== validPin){
        alert("please valid pin Number")
        return
    }
    const totalNewAvailableBalance = addAmount + availableBalance
   setInnerText('available_balance', totalNewAvailableBalance)  
    document.getElementById("add-amount").value ="";
    const  data = {
        name : "add money",
        date : new Date().toLocaleTimeString() 
    }
    transectionData.push(data)
        console.log(transectionData)
})
// cash out feature
document.getElementById("withdraw-money-btn").addEventListener('click', function(e){
    e.preventDefault()
     const getAmount = getInputValueNumber("withdraw-amount")
     const availableBalance = getInnerTextValue("available_balance")
     // ভ্যালিডেশন চেক
     if(isNaN(getAmount) || getAmount <= 0){
        alert("please Enter a Valid Number!");
        return
     }
     // ব্যালেন্স চেক
     if(getAmount > availableBalance){
        alert("Insuficient Balance")
        return
     }
     const totalNewAvailableBalance = availableBalance - getAmount
     setInnerText('available_balance', totalNewAvailableBalance)  
     document.getElementById("withdraw-amount").value ="";
     const  data = {
        name : "Cash out",
        date : new Date().toLocaleTimeString() 
    }
    transectionData.push(data)
        console.log(transectionData)
})
document.getElementById("transection-button").addEventListener('click', function(e){
    const transectionContainer = document.getElementById("transection-container")
    transectionContainer.innerText = ""
    for(const data of transectionData){
        const div = document.createElement('div')
        div.innerHTML = `<div class="bg-white mt-3 rounded-xl p-3 flex justify-between items-center">
        <div class="flex justify-center items-center">
      <div class=" rounded-xl p-3 bg-[#f4f5f7]"> 
        <img src="./assets/wallet1.png" alt="" class="mx-auto">
      </div>
      <div class="ml-3">
        <h3> ${data.name}</h3>
      <p>${data.date}</p>
      </div>
      </div>
<i class="fa-solid fa-ellipsis"></i>
    </div>`
        transectionContainer.appendChild(div)
    }
})
//toggling feature
function handleToggle(id){
   const forms = document.getElementsByClassName("form")
   for(const form of forms){
     form.style.display ="none"
   } 
  document.getElementById(id).style.display ="block" 
}
// function to handle toggle buttons
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName("form-btn")
    for(const btn of formBtns){
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add("border-gray-400")
    }
document.getElementById(id).classList.remove("border-gray-400")
document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")
}
document.getElementById("add-button").addEventListener("click", function(e){
    handleToggle("add-money-parent")
     handleButtonToggle("add-button")
    
})
document.getElementById("cash-out-button").addEventListener("click", function(e){
    handleToggle("cash-out-parent")
     handleButtonToggle("cash-out-button")
})
document.getElementById("transfer-money").addEventListener("click", function(e){
    handleToggle("transfer-parent")
     handleButtonToggle("transfer-money")
})
document.getElementById("get-bonus").addEventListener("click", function(e){
   handleToggle("bonus-parent")
     handleButtonToggle("get-bonus") 
})
document.getElementById("pay-bill-button").addEventListener("click", function(e){
    handleToggle("pay-bill-parent")
     handleButtonToggle("pay-bill-button") 
    
})
document.getElementById("transection-button").addEventListener("click", function(e){
    handleToggle("transection-parent")
     handleButtonToggle("transection-button") 
    
})