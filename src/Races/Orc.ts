import Race from './Race';

export default class Orc extends Race {
  private static orcCount = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._name = n;
    this._dexterity = d;
  }
  
  maxLifePoints = 74;

  public static createdRacesInstances() :number {
    Orc.orcCount += 1;
    return Orc.orcCount;
  }
}