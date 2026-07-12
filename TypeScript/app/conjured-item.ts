import { DepreciatingItem } from "./depreciating-item";

export class ConjuredItem extends DepreciatingItem {
  protected get degradationRate(): number {
    return 2;
  }
}
