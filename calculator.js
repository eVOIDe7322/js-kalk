const basicCalcs = {

    /**
     * @description Multiply the product a by the other product b
     * @param {number} a - coefficient
     * @param {number} b - coefficient
     * @returns a * b -> product
     */
    multiplycation(a, b) {
        return a * b
    },

    /**
     * @description Divide a per b
     * @param {number} a - dividend
     * @param {number} b - divisor
     * @returns {-floatResult= a / b -> quotient, intResult= quotient when have rest -> quotient, rest= a % b -> rest }
     */
    division(a, b) {
        return { floatResult: a / b, intResult: Math.floor(a / b) | 0, rest: a % b };
    },

    /**
     * @description Sum of a and b
     * @param {number} a - parcel 
     * @param {number} b - parcel
     * @returns a + b -> amount
     */
    sum(a, b) {
        return a + b;
    },

    /**
     * @description Subtract a by b
     * @param {number} a - minundo 
     * @param {number} b - subtrahend
     * @returns a - b -> difference
     */
    subtraction(a, b) {
        return a - b
    },
}

console.log(basicCalcs.division(14, 8))