String.prototype.add = function (operand) {
    const num1 = this.trim();
    const num2 = operand.trim();
    let result = "";
    let carry = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        const digit1 = i >= 0 ? Number(num1[i]) : 0;
        const digit2 = j >= 0 ? Number(num2[j]) : 0;
        const sum = (digit1 + digit2 + carry).toString();

        if (sum.length > 1) {
            result = sum[1] + result;
            carry = Number(sum[0]);
        } else {
            result = sum[0] + result;
            carry = 0;
        }
        
        i--;
        j--;
    }

    return result;
}

String.prototype.subtract = function (operand) {
    const num1 = this.trim();
    const num2 = operand.trim();
    let result = "";
    let borrow = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0) {
        const digit1 = Number(num1[i]);
        const digit2 = j >= 0 ? Number(num2[j]) : 0;
        
        let diff = digit1 - digit2 - borrow;
        
        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        result = diff.toString() + result;
        i--;
        j--;
    }

    result = result.replace(/^0+/, '');
    return result;
};

String.prototype.divide = function (operand) {
    const num1 = this.trim();
    const num2 = operand.trim();
    let result = "";
    let dividend = "";

    for (let i = 0; i < num1.length; i++) {
        dividend += num1[i];
        let multiple = 0;

        while ((dividend.length > num2.length) || (dividend.length == num2.length && dividend >= num2)) {
            dividend = dividend.subtract(num2);
            multiple++;
        }

        result += multiple;
    }

    result = result.replace(/^0+/, '');
    return result;
}

String.prototype.multiply = function (operand) {
    const num1 = this.trim();
    const num2 = operand.trim();
    let result = "";

    for (let i = num2.length - 1 ; i >= 0; i--) {
        let temp = "";
        let carry = 0;

        for (let j = num1.length - 1; j >= 0; j--){
            const digit1 = Number(num1[j]);
            const digit2 = Number(num2[i]);
            const product = (digit1 * digit2 + carry).toString();

            if (product.length > 1) {
                temp = product[1] + temp;
                carry = Number(product[0]);
            } else {
                temp = product[0] + temp;
                carry = 0;
            }
        }

        if (carry > 0) {
            temp = carry + temp;
        }

        for (let x = 0; x < num2.length - i - 1; x++) {
            temp += 0;
        }

        result = result.add(temp);
    }

    return result;
}