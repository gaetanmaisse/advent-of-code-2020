export function findFreeSeats(input: string): number[] {
  const seatIds = input.split('\n').map(convertToSeatId); // ?
  const max = Math.max(...seatIds);
  const isFreeSeats = new Array(max).fill(true);

  seatIds.forEach(id => (isFreeSeats[id] = false));

  return isFreeSeats
    .map((seat, index) => {
      return seat === true ? index : -1;
    })
    .filter(seat => seat !== -1);
}

export function findHighestSeatId(input: string): number {
  const seatIds = input.split('\n').map(convertToSeatId);
  return Math.max(...seatIds);
}

export function convertToSeatId(input: string): number {
  const encodedRow = input.substring(0, 7);
  const encodedColumn = input.substring(7, 10);

  return 8 * decodeRow(encodedRow) + decodeColumn(encodedColumn);
}

export function decodeRow(encodedRow: string, min = 0, max = 127): number {
  const currentChar = encodedRow.charAt(0);

  if (encodedRow.length === 0) {
    return max;
  }

  const nextString = encodedRow.length >= 1 ? encodedRow.substring(1) : '';
  const mean = Math.floor((max + min) / 2);

  if (currentChar === 'F') {
    return decodeRow(nextString, min, mean);
  } else if (currentChar === 'B') {
    return decodeRow(nextString, mean, max);
  } else {
    throw new Error('Invalid char');
  }
}

export function decodeColumn(encodedRow: string, min = 0, max = 7): number {
  const currentChar = encodedRow.charAt(0);

  if (encodedRow.length === 0) {
    return max;
  }

  const nextString = encodedRow.length >= 1 ? encodedRow.substring(1) : '';
  const mean = Math.floor((max + min) / 2);

  if (currentChar === 'L') {
    return decodeColumn(nextString, min, mean);
  } else if (currentChar === 'R') {
    return decodeColumn(nextString, mean, max);
  } else {
    throw new Error('Invalid char');
  }
}
