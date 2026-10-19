const display=document.getAnimations('display');

    function appendToDisplay(input){
        display.value +=input ;
    }
    
function clearDisplay(){
    display.value ='';
}

function calculate() {
   try {
    if(display.value.trim() !==""){
        display.value = eval(display.value);
    }
} catch (error){
    display.value ='Error';
}
}
