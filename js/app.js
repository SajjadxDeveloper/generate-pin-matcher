function getpin(){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';

    if(pinString.length == 4){
        return pin;
    }
    else{
        return getpin();
    }
};

function generatePin(){
    document.getElementById('display-pin').value = getpin();
};

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const  calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
         calcInput.value = '';
        }
    }
    else{
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;        
    }

})

function verifyPin(){
   const pin = document.getElementById('display-pin').value;
   const typedNumber = document.getElementById('typed-numbers').value;
   const successNotification = document.getElementById('notify-success');
   const failNotification = document.getElementById('notify-fail');

   if(pin == typedNumber){
    successNotification.style.display = 'block';
    failNotification.style.display = 'none';
   }
   else{
    successNotification.style.display = 'none';
    failNotification.style.display = 'block';
   }
}