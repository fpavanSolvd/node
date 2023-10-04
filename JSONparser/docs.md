# JSON Parser
The parseJson function is a custom JSON parser written in JavaScript. It takes a JSON-formatted string as input and parses it to return a JavaScript object. The code is designed to follow the JSON specification and handle various JSON data types, including objects, arrays, strings, numbers, booleans, and null values.


## 1. Initialization

The parseJson function starts by initializing an index variable to keep track of the current position within the input string str. This index is used to scan and process characters in the string as the parsing progresses.

## 2. Parsing Functions

The code defines several nested parsing functions to handle different JSON data types:

- skipWhitespace: This function is responsible for skipping over any whitespace characters (spaces, tabs, newlines) in the input string. It uses a regular expression to find and skip whitespace.

- parseString: This function parses JSON strings enclosed in double quotes (") and returns the parsed string.

- parseNumber: This function parses JSON numbers, including integers and floating-point numbers. It uses a regular expression to identify valid number formats and converts them to JavaScript numbers.

- parseArray: This function parses JSON arrays, including handling empty arrays and arrays with multiple elements. It recursively calls parseValue to parse the elements within the array.

- parseObject: This function parses JSON objects, including handling empty objects and objects with key-value pairs. It recursively calls parseValue to parse the values associated with object keys.

- parseKeyword: This function handles the three JSON keywords: true, false, and null. It returns their corresponding JavaScript values.

- parseValue: This function determines the type of JSON value to parse next based on the current position in the input string. It calls the appropriate parsing function based on the detected value type.

## 3. Parsing Values
The parseValue function is the core of the parsing process. It:

- Skips over leading whitespace.
- Inspects the current character in the input string to determine the type of JSON value.
- Calls the appropriate parsing function based on the detected type.

## 4. Error Handling
Throughout the parsing process, the code includes error handling. If it encounters unexpected characters or formatting issues in the input string, it throws descriptive error messages, indicating the position where the error occurred.

## 5. Test Cases
At the end of the code, there are several test cases that demonstrate how the JSON parser handles various scenarios, including valid and invalid JSON inputs. These test cases help verify the correctness of the parser's behavior.

--- 
## Process and Reflection
This was surely the hardest task in the course so far, at first I was a little lost and didn't know where to start. I decided to do some more reading about JSON and found [this page](https://www.json.org/json-en.html) to be very useful, especially the diagrams that are similar to the ones Mikhail used to explain regex in class. That helped me plan out how my parser was supposed to work. During the development process something that was on my mind was how to keep track of the parts of the string that had already been parsed so that I didn't analyze them in my regular expressions. While reading a little more about regex, specifically regex flags, I came across [this webpage](https://javascript.info/regexp-sticky) explaining how the sticky flag works, that helped me a lot. Additionally, the linked sent by a classmate to the channel talking about lazy quantifiers also helped me solve some issues I was having with string parsing.

Overall it was a nice challenge, it had it's hard moments, but I'm happy with the result.