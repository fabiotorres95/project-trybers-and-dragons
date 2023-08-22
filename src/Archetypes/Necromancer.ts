import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  energyType: EnergyType;
  private static necromancerCount = 0;

  constructor(n: string) {
    super(n);
    this.energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    Necromancer.necromancerCount += 1;
    return Necromancer.necromancerCount;
  }
}