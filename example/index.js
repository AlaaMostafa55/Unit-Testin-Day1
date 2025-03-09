/**
 *
 * @returns {Number} The result of summation.
 * @param {Number} a first number to add.
 * @param {Number} b second number to add.
 **/
exports.sum = (a, b) => {
  if(typeof a!="number" || typeof b!="number")
    throw new Error("wrong parameters")
  else
    return a+b
}

/**
 * @return {Array<number>} an array with the specified length. the array elements will be from 0 to the length(value of length not included) .
 * @param {number} length number of elements
 * @example createArray(3) => [0,1,2]
 * @example createArray(5) => [0,1,2,3,4]
 */

exports.createArray = (length) => {
  return Array.from(Array(length).keys());
};




