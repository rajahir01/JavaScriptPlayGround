// function vs method

let apiCalculation = function(year){
    let age = 2023 - year
    return age;
}
apiCalculation();

// when there is object inside function thats called method

let person ={
    agecalculate : function (birthyear =2000){
        let age = 2023- birthyear;
        return age;
    }
}

// agecalculate is method

console.log(person.agecalculate(2023))