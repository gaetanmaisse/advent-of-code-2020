import { parseInstruction } from './Instruction';

describe('Instruction', () => {
  describe('parseInstruction', () => {
    it('return the parsed instruction', () => {
      expect(parseInstruction('jmp +4')).toEqual({
        code: 'jmp',
        value: 4,
      });

      expect(parseInstruction('nop +0')).toEqual({
        code: 'nop',
        value: 0,
      });

      expect(parseInstruction('acc -1')).toEqual({
        code: 'acc',
        value: -1,
      });
    });
  });
});
