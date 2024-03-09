function isOldEnoughToDrink(age) {
    // your code here
    if(age >= 21){
        return true;
    }else if(age <= 19){
        return false
    }else{
        console.log("no puede tomar alochol")
    }
}
isOldEnoughToDrink(21);
