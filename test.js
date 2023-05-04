const { Character, Bowerman, Swordsman, Magician, Daemon, Undead, Zombie } = require('./character');

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
});

it('should create a new character with default values', () => {
const character = new Character('Alice', 'Bowman');
expect(character.name).toBe('Alice');
expect(character.type).toBe('Bowman');
expect(character.health).toBe(100);
expect(character.level).toBe(1);
expect(character.attack).toBe(25);
expect(character.defence).toBe(25);
});
});

describe('Bowerman', () => {
it('should create a new Bowerman with default values', () => {
const bowerman = new Bowerman('Bob');
expect(bowerman.name).toBe('Bob');
expect(bowerman.type).toBe('Bowman');
expect(bowerman.health).toBe(100);
expect(bowerman.level).toBe(1);
expect(bowerman.attack).toBe(25);
expect(bowerman.defence).toBe(25);
});
});

describe('Swordsman', () => {
it('should create a new Swordsman with default values', () => {
const swordsman = new Swordsman('Charlie');
expect(swordsman.name).toBe('Charlie');
expect(swordsman.type).toBe('Swordsman');
expect(swordsman.health).toBe(100);
expect(swordsman.level).toBe(1);
expect(swordsman.attack).toBe(40);
expect(swordsman.defence).toBe(10);
});
});

describe('Magician', () => {
it('should create a new Magician with default values', () => {
const magician = new Magician('David');
expect(magician.name).toBe('David');
expect(magician.type).toBe('Magician');
expect(magician.health).toBe(100);
expect(magician.level).toBe(1);
expect(magician.attack).toBe(10);
expect(magician.defence).toBe(40);
});
});

describe('Undead', () => {
it('should create a new Undead with default values', () => {
const undead = new Undead('Edward');
expect(undead.name).toBe('Edward');
expect(undead.type).toBe('Undead');
expect(undead.health).toBe(100);
expect(undead.level).toBe(1);
expect(undead.attack).toBe(25);
expect(undead.defence).toBe(25);
});
});

describe('Zombie', () => {
it('should create a new Zombie with default values', () => {
const zombie = new Zombie('Frank');
expect(zombie.name).toBe('Frank');
expect(zombie.type).toBe('Zombie');
expect(zombie.health).toBe(100);
expect(zombie.level).toBe(1);
expect(zombie.attack).toBe(40);
expect(zombie.defence).toBe(10);
});
});

describe('Daemon', () => {
it('should create a new Daemon with default values', () => {
const daemon = new Daemon('George');
expect(daemon.name).toBe('George');
expect(daemon.type).toBe('Daemon');
expect(daemon.health).toBe(100);
expect(daemon.level).toBe(1);
expect(daemon.attack).toBe(10);
expect(daemon.defence).toBe(40);
});
});