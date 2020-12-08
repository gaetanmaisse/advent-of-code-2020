export function getAccumulatorValueBeforeInfiniteLoop(input: string): number {
  const instructions = input.split('\n').map(parseInstruction);

  const visitedInstructions: boolean[] = new Array(instructions.length).fill(
    false,
  );
  let state: State = {
    currentPosition: 0,
    accumulator: 0,
  };

  while (!visitedInstructions[state.currentPosition]) {
    visitedInstructions[state.currentPosition] = true;
    state = applyInstruction(state, instructions[state.currentPosition]);
  }

  return state.accumulator;
}

export function parseInstruction(input: string): Instruction {
  const [code, valueAsString] = input.split(' ');

  if (code !== 'jmp' && code !== 'nop' && code !== 'acc') {
    throw new Error('Invalid instruction');
  }

  return { code, value: Number(valueAsString) };
}

export function applyInstruction(
  state: State,
  instruction: Instruction,
): State {
  if (instruction.code === 'jmp') {
    return {
      ...state,
      currentPosition: state.currentPosition + instruction.value,
    };
  }
  if (instruction.code === 'acc') {
    return {
      ...state,
      accumulator: state.accumulator + instruction.value,
      currentPosition: state.currentPosition + 1,
    };
  }

  return {
    ...state,
    currentPosition: state.currentPosition + 1,
  };
}

interface State {
  currentPosition: number;
  accumulator: number;
}

interface Instruction {
  code: 'jmp' | 'nop' | 'acc';
  value: number;
}
