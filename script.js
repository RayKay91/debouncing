//Imagine a scenario where a customer is about to purchase something from the website.

// assigning the buy button in an imaginary HTMl document to a variable called button.
const buyButton = document.getElementById('purchase')


// adding an click event listener to the buy button. In a real world scenarion this would make a request to the server. For demo purposes this will just log to the console 'Customer Purchased Item'.
// the callback function named (debounceFunction() takes in 2 arguments - the function that we want to run upon the clicking of the button, and the time delay we would like.)
buyButton.addEventListener('click', debounceFunction(() => {
    console.log('Customer Purchased Item')
}, 1000))


// The debounce function
// TimeoutID is initialised but not assigned a value.
// The debounce function returns a function that will check if the variable timeoutID has been assigned anything. If so then it will clear the timeout.
// After clicking on the button once, the debounceFunction runs, timeoutID is checked and it doesn't have a value assigned, so no clearTimeout function is run.
// TimeoutID is then assigned setTimeout() which will run the function that we passed into the debounceFunction() after the delay we specified is over.
// If we click the button again before the delay has finished the inner function that is being returned will run again.
// This time timeoutID has a value and is therefore truthy and so clearTimeout(timeoutID) will run, clearing the delay.
// Then the setTimeout will run again delaying our intended function by the specified time. If the button is clicked before the delay is up, it will reset the delay.
// If it is not pressed it will eventually run after the delay is up.


function debounceFunction(fn, delay) {
    let timeoutID;

    return function(...args){
        if (timeoutID) {
            clearTimeout(timeoutID)
        }
        timeoutID = setTimeout(() => fn(...args), delay)
    }
}
