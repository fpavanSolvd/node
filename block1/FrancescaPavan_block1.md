# Task 1

```javascript
    const translations = {
        en: {
        greet: "Hello",
        intro: "Welcome to our website"
        },
        fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
        },

    };
    
    const language = "fr"; // Change to "en" for English
    const greeting = "greet";
    const introduction = "intro";
    
    // Define the localize function
    function localize(strings, ...values) {
        const translationKey = values.join("");
        return translations[language][translationKey];
    }
    
    // Perform the translations using the localize function
    const localizedGreeting = localize`${greeting}`;
    const localizedIntroduction = localize`${introduction}`;
    
    console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")
    console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr") 
```

# Task 2

```javascript
function highlightKeywords(strings, ...values) {
    strings = strings.split(/\${\d+}/)
    const keywords = values[0];
    let result = '';

    strings.forEach((str, index) => {
        result += str;
        if (index < keywords.length) {
            result += `<span class='highlight'>${keywords[index]}</span>`;
        }
    });

    return result;
}

const keywords = ["JavaScript", "template", "tagged"];
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";

const highlighted = highlightKeywords(template, keywords);

console.log(highlighted);
```

# Task 3
```javascript 
function multiline(strings, ...values) {
    const lines = strings[0].split('\n');
    
    const formattedLines = lines.map((line, index) => {
        const lineNumber = (index + 1).toString();
        return `${lineNumber} ${line}`;
    });
    
    return formattedLines.join('\n');
}

const code = multiline`function add(a, b) {  
return a + b;  
}`;  
  
console.log(code);  
// Expected:  
// "1 function add(a, b) {  
// 2 return a + b;  
// 3 }"
```

# Task 4

```javascript
function debounce(func, delay) {
    let timer;

    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay)
    };
  }
  
function debouncedSearch(query) {  
// Perform search operation with the query  
console.log("Searching for:", query);  
}  
      
const debouncedSearchHandler = debounce(debouncedSearch, 300); 
```

# Task 5

```javascript
function throttle(func, interval) {
    let lastExecutionTime = 0;
    let timeout;

    return function (...args) {
        const context = this;
        const currentTime = Date.now();

        if (currentTime - lastExecutionTime >= interval) {
            func.apply(context, args);
            lastExecutionTime = currentTime;
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(context, args);
                lastExecutionTime = Date.now();
            }, interval - (currentTime - lastExecutionTime));
        }
    };
}

function onScroll(event) {
    // Handle scroll event
    console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);
```

# Task 6

```javascript
function curry(func, arity) {
    return function curried(...args) {
        if (args.length >= arity) {
            return func(...args);
        } else {
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

function multiply(a, b, c, d) {
    return a * b * c + d;
}

const curriedMultiply = curry(multiply, 4);

const step1 = curriedMultiply(2);
const step2 = step1(3);
const step3 = step2(4);
const result = step3(1);

console.log("Result:", result); // Expected: 25
```