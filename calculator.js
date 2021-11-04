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
     * @returns {number} { floatResult= a / b -> quotient, intResult= quotient when have rest -> quotient, rest= a % b -> rest }
     */
    division(a, b) {
        return { floatResult: a / b, intResult: Math.floor(a / b), rest: a % b };
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
     * @param {number} a - base 
     * @param {number} b - expoent
     * @returns {number} a^b -> potency
     */
    potentiation(a, b) {
        return a ** b;
    },

    /**
     * @description Makes root of b with index a
     * @param {number} a - index
     * @param {number} b - rooting
     * @returns {number} -> a^√b -> root
     */
    rooting(a, b) {
        //c = result
        let c;

        if (1 ** a == b) {
            c = 1
            return c
        } if (2 ** a == b) {
            c = 2
            return c
        } else if (3 ** a == b) {
            c = 3
            return c
        } else {
            for (i = 1; i <= b; i++) {
                var result = 1;
                for (j = 1; j <= a; j++) {
                    result *= i
                         
                    if (j == a) {
                        if (result == b) {
                            c = i
                            return c   
                        }
                    }
                }
            }
        }
    }
}

export { basicCalcs, advancedCalcs }