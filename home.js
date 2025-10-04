const validPin = 1234
const transectionData = []
document.getElementById("add-money-btn").addEventListener('click', function(e){ 
    e.preventDefault()
    
    const bank = document.getElementById("bank_name").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    if(addAmount <=0){
        alert("invalid credential")
        return
    }
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
     const getAmount = parseInt(document.getElementById("withdraw-amount").value)
     const availableBalance = parseInt(document.getElementById("available_balance").innerText)
     // ভ্যালিডেশন চেক
     if(isNaN(getAmount) || getAmount <= 0){
        alert("please Enter a Valid Number!");
        return
     }
     // ব্যালেন্স চেক
     if(getAmount > availableBalance){
        alert(transectionData)
        return
     }
     const totalNewAvailableBalance = availableBalance - getAmount
     document.getElementById("available_balance").innerText = totalNewAvailableBalance
     document.getElementById("withdraw-amount").value ="";
     const  data = {
        name : "cash out",
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
    document.getElementById("add-button").addEventListener('click', function(){
        document.getElementById('add-money-parent').style.display ='block'
        document.getElementById("cash-out-parent").style.display ='none'
        document.getElementById('transfer-parent').style.display ='none'
        document.getElementById('bonus-parent').style.display ='none'
        document.getElementById('pay-bill-parent').style.display ='none'
        document.getElementById('transection-parent').style.display ='none'
    })
    document.getElementById("cash-out-button").addEventListener('click', function(){
         document.getElementById('cash-out-parent').style.display ='block'
        document.getElementById('add-money-parent').style.display ='none'
       document.getElementById('transfer-parent').style.display ='none'
       document.getElementById('bonus-parent').style.display ='none'
       document.getElementById('pay-bill-parent').style.display ='none'
       document.getElementById('transection-parent').style.display ='none'
    })
    document.getElementById("transfer-money").addEventListener('click', function(){
         document.getElementById('transfer-parent').style.display ='block'
        document.getElementById('add-money-parent').style.display ='none'
        document.getElementById("cash-out-parent").style.display ='none'
       document.getElementById('bonus-parent').style.display ='none'
       document.getElementById('pay-bill-parent').style.display ='none'
       document.getElementById('transection-parent').style.display ='none'
    })
    document.getElementById("get-bonus").addEventListener('click', function(){
         document.getElementById('bonus-parent').style.display ='block'
        document.getElementById('add-money-parent').style.display ='none'
        document.getElementById("cash-out-parent").style.display ='none'
         document.getElementById('transfer-parent').style.display ='none'
       document.getElementById('pay-bill-parent').style.display ='none'
       document.getElementById('transection-parent').style.display ='none'
    })
    document.getElementById("pay-bill-button").addEventListener('click', function(){
         document.getElementById('pay-bill-parent').style.display ='block'
        document.getElementById('add-money-parent').style.display ='none'
        document.getElementById("cash-out-parent").style.display ='none'
         document.getElementById('transfer-parent').style.display ='none'
       document.getElementById('bonus-parent').style.display ='none'
        document.getElementById('transection-parent').style.display ='none'
    })
    document.getElementById("transection-button").addEventListener('click', function(){
         document.getElementById('transection-parent').style.display ='block'
        document.getElementById('add-money-parent').style.display ='none'
        document.getElementById("cash-out-parent").style.display ='none'
         document.getElementById('transfer-parent').style.display ='none'
       document.getElementById('bonus-parent').style.display ='none'
       document.getElementById('pay-bill-parent').style.display ='none'
    })
    // colours toggle
    document.getElementById("add-button").addEventListener('click', function(e){
const formBtns = document.getElementsByClassName("form-btn")
    //console.log(formBtns)
    for(const btn of formBtns){
   //console.log(btn)
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
    btn.classList.add('border-gray-400')
    }
    const addBtn = document.getElementById("add-button")
    addBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]")
     addBtn.classList.remove("border-gray-400")
    })
     document.getElementById("cash-out-button").addEventListener('click', function(e){
const formBtns = document.getElementsByClassName("form-btn") //প্রতিটি বাটনকে ধরা হয়েছে।
    //console.log(formBtns)
    for(const btn of formBtns){ // লুপ চালানো  হয়েছে
   //console.log(btn)
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]") // সবগুলো রিমুভ করা হয়েছে।
    btn.classList.add('border-gray-400')
    }
    const addBtn = document.getElementById("cash-out-button")
    addBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]") // পুনরায়  যে বাটনে ক্লিক করবো শুধু সেখানে আবার নিয়ে আসা হয়েছে।
     addBtn.classList.remove("border-gray-400") // সরানো হয়েছে
    })
    document.getElementById("transfer-money").addEventListener('click', function(e){
const formBtns = document.getElementsByClassName("form-btn") //প্রতিটি বাটনকে ধরা হয়েছে।
    //console.log(formBtns)
    for(const btn of formBtns){ // লুপ চালানো  হয়েছে
   //console.log(btn)
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]") // সবগুলো রিমুভ করা হয়েছে।
    btn.classList.add('border-gray-400') // আবার যোগ করা হয়েছে।
    }
    const addBtn = document.getElementById("transfer-money")
    addBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]") // পুনরায়  যে বাটনে ক্লিক করবো শুধু সেখানে আবার নিয়ে আসা হয়েছে।
     addBtn.classList.remove("border-gray-400")
    })
    document.getElementById("get-bonus").addEventListener('click', function(e){
const formBtns = document.getElementsByClassName("form-btn") //প্রতিটি বাটনকে ধরা হয়েছে।
    //console.log(formBtns)
    for(const btn of formBtns){ // লুপ চালানো  হয়েছে
   //console.log(btn)
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]") // সবগুলো রিমুভ করা হয়েছে।
    btn.classList.add('border-gray-400')
    }
    const addBtn = document.getElementById("get-bonus")
    addBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]") // পুনরায়  যে বাটনে ক্লিক করবো শুধু সেখানে আবার নিয়ে আসা হয়েছে।
     addBtn.classList.remove("border-gray-400")
    })
    document.getElementById("pay-bill-button").addEventListener('click', function(e){
const formBtns = document.getElementsByClassName("form-btn") //প্রতিটি বাটনকে ধরা হয়েছে।
    //console.log(formBtns)
    for(const btn of formBtns){ // লুপ চালানো  হয়েছে
   //console.log(btn)
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]") // সবগুলো রিমুভ করা হয়েছে।
    btn.classList.add('border-gray-400')
    }
    const addBtn = document.getElementById("pay-bill-button")
    addBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]") // পুনরায়  যে বাটনে ক্লিক করবো শুধু সেখানে আবার নিয়ে আসা হয়েছে।
     addBtn.classList.remove("border-gray-400")
    })
    document.getElementById("transection-button").addEventListener('click', function(e){
const formBtns = document.getElementsByClassName("form-btn") //প্রতিটি বাটনকে ধরা হয়েছে।
    //console.log(formBtns)
    for(const btn of formBtns){ // লুপ চালানো  হয়েছে
   //console.log(btn)
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]") // সবগুলো রিমুভ করা হয়েছে।
    btn.classList.add('border-gray-400')
    }
    const addBtn = document.getElementById("transection-button")
    addBtn.classList.add("border-[#0874f2]", "bg-[#0874f20d]") // পুনরায়  যে বাটনে ক্লিক করবো শুধু সেখানে আবার নিয়ে আসা হয়েছে।
     addBtn.classList.remove("border-gray-400")
    })

    