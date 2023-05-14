import Character from '../character';

describe('Character', () => {
    it('should throw error if name length < 2', () => {
      expect(() => {
        new Character('a', 'Bowman');
      }).toThrowError('Некорректное имя');
    });
  
    it('should throw error if name length > 10', () => {
      expect(() => {
        new Character('12345678901', 'Bowman');
      }).toThrowError('Некорректное имя');
    });
  
    it('should throw error if type is not in the list', () => {
      expect(() => {
        new Character('Bob', 'Programmer');
      }).toThrowError('Неизвестный тип персонажа');
  })
})