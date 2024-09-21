// add money 
//step:1  add Event haandler to the add money in side the form ...
document.getElementById('btn-add-money').addEventListener('click',function(event){
    //privent page relode after form submite
    event.preventDefault();

//    stape:2 get money to bo adds to the account
  const addMoneyInput = document.getElementById('input-add-money').value;
  console.log(addMoneyInput);

//   get the pin number provided 
  const addPinNumber = document.getElementById('input-pin-number').value;
  console.log(addPinNumber);
 //stape:3 varify pin number....
      //wrong way
  if(addPinNumber === '123'){
    console.log('adding money to your account');
    //   step:4- get the currentblance... 
    const balance = document.getElementById('account-blance').innerText;
    console.log(balance)
     //step-5: add addMoneyInput with balance..
     const addMoneyNumber = parseFloat(addMoneyInput);
     const blanceNumber = parseFloat( balance);
     console.log(addMoneyNumber,blanceNumber);
     const newBalance = addMoneyNumber + blanceNumber;
     console.log(newBalance);
    //  step-6: update the balance>>>
    document.getElementById('account-blance').innerText = newBalance ;
  }
  else{
    alert('invaild adding money')
  }


});