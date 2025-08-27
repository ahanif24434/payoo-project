// console.log('hellow javascript')
document.getElementById('log-in-button')
.addEventListener('click', function(e){ 
    e.preventDefault()
    //  console.log('login button is activated')
    // console.log(e)
   const mobileNumber = 12345678910
   const pinNumber = 1234
   const mobileNumberValue =document.getElementById("mobile-number").value
   const mobileNumberValueConverted = parseInt(mobileNumberValue)
   const pinNumberValue =document.getElementById("pin-number").value
   const pinNumberValueConverted =parseInt(pinNumberValue)
   console.log(mobileNumberValueConverted, pinNumberValueConverted)
   if(mobileNumberValueConverted === mobileNumber 
    && pinNumberValueConverted === pinNumber){
        // console.log("all values matched")
        window.location.href ="./home.html"
    }
    else{
        alert("Invalid credentials")
    }
})