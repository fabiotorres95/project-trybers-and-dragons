export default abstract class Race {
  abstract maxLifePoints: number;

  constructor(private _name: string, private _dexterity: number) {
    Race.createdRacesInstances();
  }

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