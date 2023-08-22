import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  abstract energyType: EnergyType;

  constructor(n: string) {
    this._name = n;
    this._special = 0;
    this._cost = 0;
  }

  public static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  public get name() {
    return this._name;
  }

  public get special() {
    return this._special;
  }

  public get cost() {
    return this._cost;
  }
}