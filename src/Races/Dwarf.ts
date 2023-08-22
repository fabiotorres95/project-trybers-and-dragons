import Race from './Race';

export default class Dwarf extends Race {
  private static dwarfCount = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._name = n;
    this._dexterity = d;
  }
  
  maxLifePoints = 80;

  public static createdRacesInstances() :number {
    Dwarf.dwarfCount += 1;
    return Dwarf.dwarfCount;
  }
}