//let number1=prompt ("enter the first number");

//let number2=prompt ("enter the second number");
//let number3=prompt("enter the third number");

//if (isNaN(number1) ||isNaN(number2) || isNaN(number3)){
//console.log("please enter valid numbers");
//}else {
// largest= max(number1, number2,number3);
//let smallest= min(number1, number2, number3);
//console.log("largest:", largest);
//console.log("smallest:", smallest);
//}


//let userName= prompt("please enter your name here...");
//let password=prompt("please enter your password here...");
//let namePattern = /^[A-Z]{5,10}$/;
//let passwordPattern = /^[a-zA-Z]+[0-9_]+$/;
//let isNameValid= namePattern.test(userName);
//let isPasswordValid= passwordPattern.test(password);
//if(isNameValid && isPasswordValid){
    //console.log("validation successful, both name and password are valid");
//}else{
    //console.log("validation failed");
    //if (!isNameValid){
       // console.log("name must be in capital letter and must be 10 characters or less");
   // }
    //if(!isPasswordValid){
        //console.log("password must start with letters followed by numbers/underscores");
   // }
//}

let name=prompt("please enter your name here")
let hour=9;
let peiod="PM";
let greeting= ""
if(hour>=5 && hour<12){
    console.log("Good morning")
}else if(hour>=12&& hour<17){
    console.log("Good afternoon")
}else if(hour>=17 && hour<21){
    console.log ("Good evening")
}

let email= prompt("please enter your email here")
let emailPattern= /^[A-Z0-9+_.-]+@[A-Z0-9.-]+Z/;   
if(emailPattern.test(email)){
    alert("This email address is valid.");fl
} else{
    alert("This email address is invalid!.")
}