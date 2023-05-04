const types = [
    'Bowman',
    'Swordsman',
    'Magician',
    'Daemon',
    'Undead',
    'Zombie'
  ];
  
  class Character {
    constructor(name, type) {
      if (name.length < 2 || name.length > 10) {
        throw new Error('Некорректное имя');
      }
      if (!types.includes(type)) {
        throw new Error('Неизвестный тип персонажа');
      }
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      switch (type) {
        case 'Bowman':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Swordsman':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Magician':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Undead':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Zombie':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Daemon':
          this.attack = 10;
          this.defence = 40;
          break;
      }
    }
  }
  
  class Bowerman extends Character {
    constructor(name) {
      super(name, 'Bowman');
    }
  }
  
  class Swordsman extends Character {
    constructor(name) {
      super(name, 'Swordsman');
    }
  }
  
  class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
    }
  }
  
  class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
    }
  }
  
  class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
    }
  }
  
  class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
    }
  }
  
  module.exports = {
    Character,
    Bowerman,
    Swordsman,
    Magician,
    Daemon,
    Undead,
    Zombie
  };