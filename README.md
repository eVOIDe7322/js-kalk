# Calcs
Trying to do all type of calcs that I know in JS...

<br/>

# Instalation
```
$ npm i js-math --save
```

### Then

<br/>

## Basic Calcs
```js
import { basicCalcs } from 'js-math'

//Sum
basicCalcs.sum(1, 2) // => 3
basicCalcs.sum(1, -2) // => -1

//Subtraction
basicCalcs.subtraction(2, 1) // => 1
basicCalcs.subtraction(8, 10) // => -2

//Multiplycation
basicCalcs.multyplication(2, 2) // => 4
basicCalcs.multyplycation(4, 2) // => 8

//Division
basicCalcs.division(10,10) // => { quotient: 1, rest: 0 }
basicCalcs.division(5, 4) // => { floatQuotient: 1.25, intQuotient: 1, rest: 1 }
```

## Advanced Calcs
```js
import { advancedCalcs } from 'js-math'

//Potentiation
advancedCalcs.potentiation(2, 3) // => 9
advancedCalcs.potentiation(2, 4) // => 16

//Rooting
advancedCalcs.rooting(2, 9) // => 3
advancedCalcs.rooting(3, 8) // => 2
```

<br/>

## TODOS:

- Advanced Calcs - **NEED MORE CALCS**