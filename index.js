function isPowerOfThree(number) {
  if (number === 1) {
    return true;
  }

  let power = 0;
  let result = 1;

  while (result < number) {
    result = Math.pow(3, power);
    power++;
  }

  return result === number;
}

const numberToCheck = 5;
const canBeObtained = isPowerOfThree(numberToCheck);

alert(`${numberToCheck} можна отримати зведенням числа 3 в деякий ступінь: ${canBeObtained}`);
