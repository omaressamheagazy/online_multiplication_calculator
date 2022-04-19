import { twosComplement } from "./twoComplment.js";
import { addBinary } from "./addBinary.js";
import * as helper from "./helper.js";

let multiplicand = 0,
  multiplier = 0,
  bitUsed,
  NumberOfproductBit;
let product;
let form = document.querySelector("form");
let button = document.getElementById("calcButton");
let multiplicandInput = document.getElementById("multiplicand");
let multipilierInput = document.getElementById("multiplier");
let numberOfBitsInput = document.getElementById("numberOfBits");
let table = document.createElement("table");
form.onclick = (e) => {
  e.preventDefault();
  if (e.target == button) {
    multiplicand = multiplicandInput.value;
    multiplier = multipilierInput.value;
    bitUsed = +numberOfBitsInput.value;
    if (isNaN(parseInt(multiplicand)) || isNaN(parseInt(multiplier))) {
      return;
    }
    NumberOfproductBit = bitUsed * 2;
    if (multiplier < 0) {
      multiplier *= -1;
      multiplicand *= -1;
    }
    multiplicand = twosComplement(+multiplicand, NumberOfproductBit);
    multiplier = twosComplement(+multiplier, bitUsed);
    product = twosComplement(0, NumberOfproductBit);
    table.innerHTML = helper.makeTableHeader(
      multiplier,
      multiplicand,
      product
    );
    document.body.append(table);
    let tableBody = document.createElement("tbody");
    for (let index = 0; index < bitUsed; index++) {
      let firstRow = document.createElement("tr");
      let secondRow = document.createElement("tr");
      let thirdRow = document.createElement("tr");
      let lasBit = helper.getLastBit(multiplier);
      let copyOfMultipler = multiplier;
      product =
        product.length > NumberOfproductBit
          ? helper.truncateOverflowBit(product)
          : product;
      product =
        lasBit == 1 ? addBinary(product, multiplicand) : product;
      multiplicand = twosComplement(
        helper.shiftBitToLeft(multiplicand),
        NumberOfproductBit
      );
      multiplier = twosComplement(
        helper.shiftBitToRight(multiplier),
        bitUsed
      );

      firstRow.innerHTML = `
              <td rowspan="3">${index + 1}</td>
              <td>${helper.displayOperaiton(lasBit)}</td>
              <td rowspan="2">${copyOfMultipler}</td>
              <td></td>
              <td>${product}</td>
          `;
      secondRow.innerHTML = `
                <td>Shift MC left</td>
                <td>${multiplicand}</td>
                <td></td>
          `;
      thirdRow.innerHTML = `
                <td>Shit MP right</td>
                <td>${multiplier}</td>
                <td></td>
                <td></td>
          `;
      table.appendChild(tableBody);
      tableBody.appendChild(firstRow);
      tableBody.appendChild(secondRow);
      tableBody.appendChild(thirdRow);
    }
    console.log(helper.convertToDecimal(product))
  }
};
