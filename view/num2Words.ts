const extenso = require('extenso')

export const num2Words = (number:string): string => {

    const convetedNumber = extenso(number,{ mode: 'currency' })
    
    return convetedNumber
}
