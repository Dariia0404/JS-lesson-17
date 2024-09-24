/*
function randomDelayPrint(message) {
    for (let i = 0; i < message.length; i++) {
        let randomDelay = Math.random() * 1000; 
        setTimeout(() => {
            console.log(message[i]);
        }, randomDelay * i);
    }
}

randomDelayPrint("Hello"); 
*/

/*
function debounce(callback, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const expensiveOperation = () => console.log("Виконую складну операцію..."); const debouncedExpensiveOperation = debounce(expensiveOperation, 1000);
debouncedExpensiveOperation();
debouncedExpensiveOperation();
debouncedExpensiveOperation();
*/


function intervalRace(functions, t) {
    return new Promise((resolve) => {
        let results = [];
        let index = 0;

        function executeFunction() {
            if (index < functions.length) {
                console.log(`Викликається функція ${index + 1}`);
                let result = functions[index];
                results.push(result);
                index++;
                setTimeout(executeFunction, t);
            } else {
                return(results);
            }
        }

        executeFunction();
    });
}

let func1 = () => "Result 1";
let func2 = () => "Result 2";
let func3 = () => "Result 3";

intervalRace([func1, func2, func3], 1000).then((results) => {
    console.log(results);
});