// Write your solution in this file!
// Write your solution in this file!
var customerName="bob";
const leastFavoriteCustomer = "least";

function upperCaseCustomerName(){

   
    return  customerName.toUpperCase(); ;
}

console.log(upperCaseCustomerName());

function setBestCustomer(customer ="not bob"){
    bestCustomer = customer;
    return bestCustomer;
}

function overwriteBestCustomer(customer){

    return setBestCustomer(customer);
}

function changeLeastFavoriteCustomer(name){
    leastFavoriteCustomer = name;
    return leastFavoriteCustomer;
}
