export const average = (numbers) => {
  if (numbers.length === 0) {
    return 0; // Return 0 for an empty array
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};
