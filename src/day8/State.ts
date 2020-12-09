import { Instruction } from './Instruction';

export class State {
  constructor(readonly currentPosition = 0, readonly accumulator = 0) {}

  applyInstruction(instruction: Instruction): State {
    if (instruction.code === 'jmp') {
      return new State(
        this.currentPosition + instruction.value,
        this.accumulator,
      );
    }
    if (instruction.code === 'acc') {
      return new State(
        this.currentPosition + 1,
        this.accumulator + instruction.value,
      );
    }

    return new State(this.currentPosition + 1, this.accumulator);
  }
}
