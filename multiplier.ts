const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
}

const a: number = Number(process.argv[2])
const b: number = Number(process.argv[3])

multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);

// multiplicator(2, 4, 'The result of multiplying 2 and 4 is:');

// const multiplicator = (a: number, b: number, printText: string) => {
//   console.log(printText,  a * b);
// }

// multiplicator('how about a string?', 4, 'Multiplied a string and 4, the result is:');
