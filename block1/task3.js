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