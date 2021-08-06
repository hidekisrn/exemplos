export function pow(number: bigint, power: bigint) {
  let quantityOfCalls = 0n;

  function multiplier(currentNumber: bigint): bigint {
    quantityOfCalls += 1n;

    if (quantityOfCalls >= power) {
      return currentNumber;
    }

    return multiplier(currentNumber * number);
  }

  return multiplier(number);
}
