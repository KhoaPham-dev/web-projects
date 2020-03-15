let inputBill = document.getElementById("bill");
let choosingFeeling = document.getElementById("service");
let people = document.getElementById("people");
let button = document.getElementById("button");
function calculate(bill, feeling, numPeople){

    return total = bill*(feeling/100)/numPeople;
};
function checkFilled(bill, feeling, numPeople){
    if(bill >= 0 && feeling > 0 && numPeople > 0) return true;
    return false;
};
function result(e){
    
    let bill = parseInt(inputBill.value);
    let feeling = parseInt(choosingFeeling.value);
    let numPeople = parseInt(people.value);
    let check1 = checkFilled(bill, feeling, numPeople);
    if(check1){
        let total = calculate(bill, feeling, numPeople);
        total = Math.round(total);
        total = total.toFixed(2);
        document.getElementById("total").textContent = total;
        document.getElementById("total-tip").style.display = "block";
        if(numPeople <= 1)document.getElementsByTagName(small)[0].style.display = "none";
    }
    else{
        document.getElementById("total-tip").style.display = "none";
        if(e){
        window.alert("Please input correct values!");
        }
    }
    console.log(e);
}
result();
button.addEventListener("click", result);