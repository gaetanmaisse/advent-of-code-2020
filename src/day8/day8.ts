export function getAccumulatorValueForFixedCode(input: string): State {
  const instructions = input.split('\n').map(parseInstruction);

  let state = applyInstructions(instructions);
  let replacementIndex = -1;

  while (state.currentPosition < instructions.length) {
    replacementIndex = instructions.findIndex(
      (instruction, index) =>
        index > replacementIndex &&
        (instruction.code === 'jmp' || instruction.code === 'nop'),
    );

    const updatedInstructions = [...instructions];
    updatedInstructions[replacementIndex] = {
      code: instructions[replacementIndex].code === 'nop' ? 'jmp' : 'nop',
      value: instructions[replacementIndex].value,
    };

    state = applyInstructions(updatedInstructions);
  }

  return state;
}

export function getAccumulatorValueBeforeInfiniteLoop(input: string): State {
  const instructions = input.split('\n').map(parseInstruction);
  return applyInstructions(instructions);
}

function applyInstructions(instructions: Instruction[]) {
  const visitedInstructions: boolean[] = new Array(instructions.length).fill(
    false,
  );
  let state: State = {
    currentPosition: 0,
    accumulator: 0,
  };

  while (
    !visitedInstructions[state.currentPosition] &&
    state.currentPosition < instructions.length
  ) {
    visitedInstructions[state.currentPosition] = true;
    state = applyInstruction(state, instructions[state.currentPosition]);
  }

  return state;
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
