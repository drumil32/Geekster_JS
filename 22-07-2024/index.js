function preparATea(callabckFunction) {
    console.log(callabckFunction);
    console.log("preparing a tea");
    
    console.log("tea is prepared");
    callabckFunction();
}

const returnedValue = preparATea(serverTea); // we can pass a function as argument to another function
console.log(returnedValue);
//  we are passing serverTea function to the prepareTea function

// preparATea(serverTea()); // here we are passing returned value of serverTea function to the prepareTea function

function serverTea(){
    console.log("servering tea");
}