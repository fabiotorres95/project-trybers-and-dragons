import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

function randomStat(): number {
  return (Math.floor(Math.random()) * 10) + 1;
}

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  name: string;

  constructor(n: string) {
    this.name = n;
    this._dexterity = randomStat();
    this._race = new Elf(n, this._dexterity);
    this._archetype = new Mage(n);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomStat();
    this._defense = randomStat();
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomStat(),
    };
  }

  public get race() { return this._race; }

  public get archetype() { return this._archetype; }

  public get lifePoints() { return this._lifePoints; }

  public get strength() { return this._strength; }

  public get defense() { return this._defense; }

  public get dexterity() { return this._dexterity; }

  public get energy() { return this._energy; }
}