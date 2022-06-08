import { Calculator } from './calculator';

/**
 * describe('suite name', function)
 */
describe('Calculator', () => {
  /**
   * it define a particular test
   */
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  describe('Test for #multiply', () => {
    it('#multiply should return a nine', () => {
      // Arrange
      const calculator = new Calculator();
      // Act
      const res = calculator.multiply(3, 3);
      // Assert
      expect(res).toEqual(9);
    });

    it('#multiply should return a four', () => {
      // Arrange
      const calculator = new Calculator();
      // Act
      const res = calculator.multiply(1, 4);
      // Assert
      expect(res).toEqual(4);
    });
  });

  describe('Test for #divide', () => {
    it('#divide should return a some numbers', () => {
      const calculator = new Calculator();

      expect(calculator.divide(6, 3)).toEqual(2);
      expect(calculator.divide(5, 2)).toEqual(2.5);
    });

    it('#divide for zero should return null', () => {
      const calculator = new Calculator();

      expect(calculator.divide(6, 0)).toBeNull();
      expect(calculator.divide(5, 0)).toBeNull();
      expect(calculator.divide(0, 0)).toBeNull();
      expect(calculator.divide(7, 0)).toBeNull();
    });
  });

  it('test matchers', () => {
    const name = 'Erick';
    let name2;

    expect(name).toBeDefined();
    expect(name2).toBeUndefined();

    expect(1 + 3 === 4).toBeTruthy();
    expect(1 + 1 === 3).toBeFalsy();

    expect(5).toBeLessThan(10);
    expect(20).toBeGreaterThan(10);

    expect('12345').toMatch(/123/);
    expect(['apples', 'oranges', 'pears']).toContain('oranges');
  });
});
