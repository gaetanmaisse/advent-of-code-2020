import { State } from './State';

describe('State', () => {
  describe('applyInstruction', () => {
    let state: State;

    beforeEach(() => {
      state = new State(4, 15);
    });

    it('apply jmp', () => {
      expect(state.applyInstruction({ code: 'jmp', value: 2 })).toEqual({
        currentPosition: 6,
        accumulator: 15,
      });
      expect(state.applyInstruction({ code: 'jmp', value: -3 })).toEqual({
        currentPosition: 1,
        accumulator: 15,
      });
    });

    it('apply acc', () => {
      expect(state.applyInstruction({ code: 'acc', value: 2 })).toEqual({
        currentPosition: 5,
        accumulator: 17,
      });
      expect(state.applyInstruction({ code: 'acc', value: -3 })).toEqual({
        currentPosition: 5,
        accumulator: 12,
      });
    });

    it('apply nop', () => {
      expect(state.applyInstruction({ code: 'nop', value: 0 })).toEqual({
        currentPosition: 5,
        accumulator: 15,
      });
    });
  });
});
