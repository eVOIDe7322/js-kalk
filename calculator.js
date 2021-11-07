const basicCalcs = {
    /**
     * @description Multiplyes the product a by the other product b
     * @param {number} a - coefficient
     * @param {number} b - coefficient
     * @returns {number} a * b -> product
     */
    multiplycation(a, b) {
        return a * b
    },

    /**
     * @description Divides a per b
     * @param {number} a - dividend
     * @param {number} b - divisor
     * @returns {number} { floatQuotient: a / b -> quotient, intQuotient: quotient when have rest -> quotient, rest: a % b -> rest }
     */
    division(a, b) {
        let floatResult = a / b
        let intResult = Math.floor(a / b)

        if (floatResult == intResult) {
            return { quotient: floatResult, rest: 0 }
        } else {
            return { floatQuotient: floatResult, intQuotient: intResult, rest: a % b };
        }
    },

    /**
     * @description Sum of a and b
     * @param {number} a - parcel 
     * @param {number} b - parcel
     * @returns {number} a + b -> amount
     */
    sum(a, b) {
        return a + b;
    },

    /**
     * @description Subtracts a by b
     * @param {number} a - minundo 
     * @param {number} b - subtrahend
     * @returns {number} a - b -> difference
     */
    subtraction(a, b) {
        return a - b
    },
}

const advancedCalcs = {
    /**
     * @description Calcs a to b
     * @param {number} a - expoent 
     * @param {number} b - base
     * @returns {number} b^a -> potency
     */
    potentiation(a, b) {
        return b ** a;
    },

    /**
     * @description Makes root of b with index a
     * @param {number} a - index
     * @param {number} b - rooting
     * @returns {number} -> a^√b -> root
     */
    rooting(a, b) {
        for (i = 1; i <= b; i++) {
            var result = 1;
            for (j = 1; j <= a; j++) {
                result *= i
                        
                if (j == a) {
                    if (result == b) {
                        return i
                    }
                }
            }
        }
    }
}

module.exports = { basicCalcs, advancedCalcs }
