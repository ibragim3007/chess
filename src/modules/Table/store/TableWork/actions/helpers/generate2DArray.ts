export function generateEmptyArray(rows = 8, cols = 8) {
  const array = [];

  for (let i = 0; i < rows; i++) {
    const row = [];

    for (let j = 0; j < cols; j++) {
      row.push(0);
    }

    array.push(row);
  }

  return array;
}
