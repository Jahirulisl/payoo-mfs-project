// console.log('button clicking file added');

// document.getElementById('id).addEvenListener('click', function(){
//})
// document.getElementById('btn-login').addEventListener('click',function(){})



// set -1 set event handler
// document.getElementById('btn-login').addEventListener('click',function(event){
//     // step-2:prevent default behavior(prevent reloding browser) 
//     event.preventDefault();//vagal to biginner......
//   console.log('login button click');
//   //step- 3:get the phone number and the pin number;
//   const phoneNumber = document.getElementById('phone-number').value;
//   const pinNumber = document.getElementById('pin-number').value;
//   console.log(phoneNumber,pinNumber);
// // stape 4: valid phone or pin (this is tampoery precties)
//    if(phoneNumber === '5'&& pinNumber === '234'){
//     console.log('you are logged in');
//    } //    step:5 alow user to use the website 
//    else{
//     alert('wring phone or pin');
//    }
// })

// re practise >>>>>>>>>>>>>>>>>>>>
document.getElementById('btn-login')
.addEventListener('click',function(event){
 event.preventDefault();

//  get phoneNumber or pin ...
 const phoneNumber =document.getElementById('phone-number').value;
 const pinNumber = document.getElementById('pin-number').value;
//  console.log(phoneNumber, pinNumber);

//bad way valided...

if(phoneNumber ==='567'&& pinNumber === '12345'){
   console.log('you are login');
   window.location.href = '/home.html'
}
else{
    alert('wrong pnone or pin')
}

});