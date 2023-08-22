import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  private static warriorCount = 0;

  constructor(n: string) {
    super(n);
    this.energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    Warrior.warriorCount += 1;
    return Warrior.warriorCount;
  }
}