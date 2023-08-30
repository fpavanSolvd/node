function addValues (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    } else if (typeof a === 'boolean' && typeof b === 'boolean') {
        return a || b;
    } else {
        throw new Error('Addition not possible for the given types.');  
    }
}
  
function stringifyValue (value) {
    if (typeof value === 'object') {
        return JSON.stringify(value);
    } else if (typeof value === 'string') {
        return value;
    } else {
        return String(value);
    }
}
  
function invertBoolean (value) {
    if (typeof value !== 'boolean') {
        throw new Error('Input is not a boolean.');
    }
        return !value;
}
  
function convertToNumber (value) {
    if (typeof value === 'number') {
        return value;
    } else if (typeof value === 'string') {
        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
            throw new Error('String cannot be converted to a number.');
        }
        return parsedValue;
    } else if (typeof value === 'boolean') {
        return value ? 1 : 0;
    } else {
        throw new Error('Conversion to number not possible for the given type.');
    }
}
  
function coerceToType (value, type) {
    switch (type) {
        case 'number':
            return this.convertToNumber(value);
        case 'string':
            return this.stringifyValue(value);
        case 'boolean':
            if (typeof value === 'boolean') {
                return value; 
            } else if (typeof value === 'number') {
                return value !== 0; 
            } else if (typeof value === 'string') {
                return value.length > 0;
            } else {
                throw new Error('Coercion to boolean not possible for the given type.');
            }
        default:
            throw new Error('Invalid type for coercion.');
    }
}

function convertBinary (value) {
    if (typeof value === 'number') {
        return value.toString(2);
    } else if (typeof value === 'string') {
        if (/^[01]+$/.test(value)) {
            return parseInt(value, 2);
        } else {
            throw new Error('Cannot convert String to integer representation.');
        }
    } else {
        throw new Error('Invalid type for binary conversion.')
    }
}

export {addValues, stringifyValue, invertBoolean, convertToNumber, coerceToType, convertBinary}