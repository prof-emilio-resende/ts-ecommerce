import { main } from "../index";

describe('for regular execution', () => {
  describe('should call method main', () => {
    test('main has been called', () => {
      const result = main();
      expect(result).toBe(0);
    });
  });
});
