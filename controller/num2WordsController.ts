import { num2Words } from "../view/num2Words";

export const num2WordsController = (inputNumber:string): object => {
    const convetedNumber = num2Words(inputNumber);

    const convertedObj = {
        number: inputNumber,
        writtenNumber: convetedNumber

    }

    return convertedObj
}
