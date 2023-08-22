import Race from './Race';

export default class Halfling extends Race {
  private static halflingCount = 0;

  constructor(n: string, d: number) {
    super(n, d);
    this._name = n;
    this._dexterity = d;
  }
  
  maxLifePoints = 60;

  public static createdRacesInstances() :number {
    Halfling.halflingCount += 1;
    return Halfling.halflingCount;
  }
}