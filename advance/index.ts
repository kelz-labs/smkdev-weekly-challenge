function advance() {
  let result = "";

  for (let i = 1; i < 5; i++) {
    for (let j = 5; j > i; j--) {
      result += `${j - i} `;
    }
    result += "\n";
  }

  return result;
}

console.log(advance());
/**
 * Expected result:
 *
 * 5 4 3 2 1
 * 4 3 2 1
 * 3 2 1
 * 2 1
 * 1
 */
