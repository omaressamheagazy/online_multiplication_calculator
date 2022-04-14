function twosComplement(value, bitCount) {
  let binaryStr;

  if (value >= 0) {
    let twosComp = value.toString(2);
    binaryStr = padAndChop(twosComp, "0", bitCount || twosComp.length);
  } else {
    binaryStr = (Math.pow(2, bitCount) + value).toString(2);

    if (Number(binaryStr) < 0) {
      return undefined;
    }
  }

  return `${binaryStr}`;
}
function padAndChop(str, padChar, length) {
  return (Array(length).fill(padChar).join("") + str).slice(length * -1);
}

export { twosComplement };
