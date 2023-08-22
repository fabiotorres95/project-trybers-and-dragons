export default abstract class Race {
  abstract maxLifePoints: number;

  constructor(protected _name: string, protected _dexterity: number) {}

  public get name() {
    return this._name;
  }

  public get dexterity() {
    return this._dexterity;
  }

  public static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}