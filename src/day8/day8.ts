import { State } from './State';
import { Instruction, parseInstruction } from './Instruction';

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
  let state = new State();

  while (
    !visitedInstructions[state.currentPosition] &&
    state.currentPosition < instructions.length
  ) {
    visitedInstructions[state.currentPosition] = true;
    state = state.applyInstruction(instructions[state.currentPosition]);
  }

  return state;
}
