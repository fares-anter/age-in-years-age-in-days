const AGE_IN_YEARS = '365.25';
let userinput=prompt("please add your age here⬇");
let ageinyears = Number(userinput);

if(typeof ageinyears ==='number' && !Number.isNaN(ageinyears)&&ageinyears>0){

    let ageindayes = Math.floor(ageinyears*AGE_IN_YEARS);
    alert("your age is dayes is =>" +ageindayes + 'day');
}else{
    alert("you are wrong  in somthing thry agine with rely number")
}