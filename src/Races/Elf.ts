import Race from './Race';

export default class Elf extends Race {
  private static elfCount = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._name = n;
    this._dexterity = d;
  }
  
  maxLifePoints = 99;

  public static createdRacesInstances() :number {
    Elf.elfCount += 1;
    return Elf.elfCount;
  }
}
