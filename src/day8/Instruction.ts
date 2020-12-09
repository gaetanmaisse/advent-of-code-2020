export class Instruction {
  constructor(readonly code: 'jmp' | 'nop' | 'acc', readonly value: number) {}
}

export function parseInstruction(input: string): Instruction {
  const [code, valueAsString] = input.split(' ');

  if (code !== 'jmp' && code !== 'nop' && code !== 'acc') {
    throw new Error('Invalid instruction');
  }

  return new Instruction(code, Number(valueAsString));
}
