const inputTag = document.querySelector('#search');
const divTag = document.querySelector('#suggestions');
let networkCallCount = 0;

// Debouncing
function debounce(fun) {
    let timerId = null;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => fun(...args), 1000);
    }
}
// 0s
// ls=0s, Date.now() => 0.1 ===> subtransaction will give you 100ms
// 1s => Date.now() => 1s ==>

function throttle(fun, limit = 2000) {
    let lastRun = null;
    let timerId = null;
    return function (...args) {
        if (!lastRun) {
            fun(...args);
            lastRun = Date.now();
        } else {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                if (Date.now() - lastRun >= limit) {
                    fun(...args);
                    lastRun = Date.now();
                }
            }, limit - (Date.now() - lastRun));
        }
    }
}

// a => 0s
// => Dn 100ms | 1900ms
// ab

// a 0s   => 1s => suggestionCallback will be invoked
// b 0.1s => 1.1s => suggestionCallback will be invoked
// c 0.2s => 1.2s => suggestionCallback will be invoked

// 2frd => 8pm dinner 
// 3rd frd => 8:15 dinner
// 4th frd => 8:30 dinner
// 
// 5th frd => 10 dinner => NO

const suggestionCallback = async (event) => {
    const suggestions = await giveSuggestion(event.target.value);
    const pTag = document.createElement('p');
    pTag.textContent = suggestions;
    divTag.appendChild(pTag);
}

async function giveSuggestion(inputValue) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(" Input Value is " + inputValue + " | Here are suggestion : " + ++networkCallCount), 2_000);
    });
}

const optimzedSuggestionCallback = throttle(suggestionCallback);

inputTag.addEventListener('keyup', optimzedSuggestionCallback);