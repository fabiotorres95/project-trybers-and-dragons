import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  energyType: EnergyType;
  private static rangerCount = 0;

  constructor(n: string) {
    super(n);
    this.energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number {
    Ranger.rangerCount += 1;
    return Ranger.rangerCount;
  }
}