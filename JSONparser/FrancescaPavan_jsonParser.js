function parseJson(str){
    this.index = 0 ;

    // Function that skips over any whitespace
    function skipWhitespace(){
        const whitespaceRegex = /\s+/y;
        whitespaceRegex.lastIndex = this.index;
        whitespaceRegex.exec(str);
        if (whitespaceRegex.lastIndex > 0) {
            this.index = whitespaceRegex.lastIndex;
        }
    }

    // Function that parses Strings
    function parseString(){
        const stringRegex = /".*?"/y;
        stringRegex.lastIndex = this.index;
        const regexEval = stringRegex.exec(str);
        if (regexEval) {
            this.index = stringRegex.lastIndex;
            return regexEval[0].replace(/^"(.+(?="$))"$/, '$1'); // Removes double quotes ""
        } else {
            throw new Error("Invalid String at position " + this.index);
        }
        
    }

    // Function that parses numbers
    function parseNumber(){
        const numberRegex = /-?([1-9]\d*|0)(.\d+)*([Ee][-\+]?\d+)*/y
        numberRegex.lastIndex = this.index;
        const regexEval = numberRegex.exec(str);
        if (regexEval) {
            this.index = numberRegex.lastIndex;
            return parseFloat(regexEval[0]); // So that numbers dont show up as '0'
        } else {
            throw new Error("Invalid Number at position " + this.index);
        }
    }

    // Function that parses a JSON array
    function parseArray() {
        let newArray = []
        this.index++; // skip opening bracket [
        if (str[this.index] === ']') { // check for empty array
            this.index++; // skip closing bracket ]
            return newArray;
        }
        while (true) {
            skipWhitespace();
            newArray.push(parseValue());
            skipWhitespace();
            if (str[this.index] !== ',') { // if there is no comma after an array item, it means there are no more items in an array
                if (str[this.index] === ']') {
                    this.index++; // skip closing bracket ]
                    break;
                } else {
                    throw new Error(`Expected , or ] at position ${this.index} but received ${str[this.index]} instead`);
                }
                
            } else { 
                this.index++; // skip comma ,
            }
        }
        return newArray;
    }

    // Function that parses a JSON object
    function parseObject() {
        let newObject = {};
        this.index++; // skip opening curly bracket {
        skipWhitespace();
        if (str[this.index] === '}') { // check for empty object
            this.index++; // skip closing curly bracket }
            return newObject;
        }
        while (true) {

            skipWhitespace();
            if (str[this.index] !== '"') {
                throw new Error("Key must be a string at position ", this.index);
            }

            let key = parseString();
            skipWhitespace();

            if (str[this.index] !== ':') {
                throw new Error(`Expected : at position ${this.index} but received ${str[this.index]} instead`);
            }
            this.index++ // skip colon :

            skipWhitespace();
            let value = parseValue();
            newObject[key] = value;
            skipWhitespace();

            if (str[this.index] !== ',') { // if there is no comma after a JSON object key-value pair, it means there are no more key-value pairs in the object
                if (str[this.index] === '}') {
                    this.index++; // skip closing curly bracket }
                    break;
                } else {
                    throw new Error(`Expected , or } at position ${this.index} but received ${str[this.index]} instead`);
                }  
            } else { 
                this.index++; // skip comma ,
            }
        }
        return newObject;
    }

    // Function that parses the three keywords allowed by JSON
    function parseKeyword() {
        const keywordRegex = /true|false|null/y
        keywordRegex.lastIndex = this.index;
        let regexEval = keywordRegex.exec(str);
        if (regexEval) {
            this.index = keywordRegex.lastIndex;
            switch (regexEval[0].replace(/^"(.+(?="$))"$/, '$1')) {
                case 'true':
                    return true;
                case 'false':
                    return false;
                case 'null':
                    return null;
            }
        } else {
            throw new Error(`Illegal symbol ${str[this.index]} at position ${this.index}`)
        }
    }

    // Function that decides what type of JSON value is going to be parsed next
    function parseValue() {
        skipWhitespace();
        if (str[this.index] === '{') {
            return parseObject();
          } else if (str[this.index] === '[') {
            return parseArray();
          } else if (str[this.index] === '"') {
            return parseString();
          } else if (str[this.index] === '-' || /[0-9]/.test(str[this.index])) {
            return parseNumber();
          } else {
            return parseKeyword();
          }
    }

// Call to begin parsing the string
return parseValue();

}

// Test 1 : missing comma:
let test1 = '{"name": "John Doe" "age": 30}';

// Test 2: extra comma:
let test2 = '{"name": "Jane Smith", "age": 25, }';

// Test 3: unquoted keys:
let test3 = '{name: "Alice", age: 28}';

// Test 4: unclosed array:
let test4 = '{ "numbers": [1, 2, 3  "letters": ["A", "B", "C"] ';

// Test 5: correct example
let test5 = '{"name": "John Doe", "age": 30, "city": "New York", "isStudent": false, "hobbies": ["reading", "cooking", "hiking"], "address": {"street": "123 Main Street","zipCode": "10001"}}';

console.dir(parseJson(test5), { depth: null });