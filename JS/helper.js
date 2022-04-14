export function shiftBitToRight(number) {
  return convertToDecimal(number) >> 1;
}
export function shiftBitToLeft(number) {
  return convertToDecimal(number) << 1;
}
export function getLastBit(number) {
  return number[number.length - 1];
}
export function convertToDecimal(number) {
  let firstBitPosition = number.length - 1;
  return parseInt(number.slice(1), 2) + -(number[0] * 2 ** firstBitPosition);
}
export function fixNumberOfBits(number) {
  return (number = number.slice(1));
}
/**
 * This function is used to diplay the operation, if the last bit is zero, otherwise it will display no operation
 * @param {int} lastBit 
 * @returns string
 */
export function displayOperaiton(lastBit) {
  return +lastBit == 1 ? "P= P + MC" : "No Operation";
}
/**
 * @param {string} multiplierInTwoForm 
 * @param {string} multiplicandInTwoFrom 
 * @param {string} product 
 * @returns string
 */
export function makeTableHeader(multiplierInTwoForm,multiplicandInTwoFrom,product) {
  return `
    <thead>
      <tr>
        <th>Iteration</th>
        <th>Step</th>
        <th>Multplier(MP)</th>
        <th>Multiplicand(MC)</th>
        <th>Product(P)</th>
      </tr>
      <tr>
        <th>0</th>
        <th>Initial Value</th>
        <th>${multiplierInTwoForm}</th>
        <th>${multiplicandInTwoFrom}</th>
        <th>${product}</th>
      </tr>
    </thead>
  `;
}
