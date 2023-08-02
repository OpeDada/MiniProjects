const input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // console.log(`input index is ${inputIndex}`);

  if (input[inputIndex] === "e" || input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]);
  }
  for (let vIndex = 0; vIndex < vowels.length; vIndex++) {
    // console.log(`vIndex is ${vIndex}`);
    if (input[inputIndex] === vowels[vIndex]) {
      resultArray.push(input[inputIndex]);
    }
  }
}
const resultString = resultArray.join("").toUpperCase();

console.log(resultString);
