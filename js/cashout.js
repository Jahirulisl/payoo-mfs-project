// stap 1 
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
 console.log('cash out file connected') 
const cashOutMoney =document.getElementById('input-cash-out-money').value;
const pinNumber = document.getElementById('input-cash-out-pin').value;
console.log(cashOutMoney, pinNumber);
// wring way varify 
if(pinNumber === '111'){
    const balance = document.getElementById('account-blance').innerText;
    // number a convert 
const balanceNumber = parseFloat( balance);
const cashOutNumber = parseFloat(cashOutMoney);
///reduce new balance...
const newBalance =balanceNumber- cashOutNumber;
//update the ui ....
document.getElementById('account-blance').innerText = newBalance;

}
else{
    alert('faield to cash out.pelase tray agin')
}

});