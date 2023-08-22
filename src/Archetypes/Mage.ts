import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  energyType: EnergyType;
  private static mageCount = 0;

  constructor(n: string) {
    super(n);
    this.energyType = 'mana';
  }

  public static createdArchetypeInstances(): number {
    Mage.mageCount += 1;
    return Mage.mageCount;
  }
}