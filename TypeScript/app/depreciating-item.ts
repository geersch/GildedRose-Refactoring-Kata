import { GildedItem } from "./gilded-item";

export class DepreciatingItem extends GildedItem {
  protected get degradationRate(): number {
    return 1;
  }

  applyDailyUpdate(): void {
    this.decrementSellIn();
    this.decreaseQuality(this.isExpired ? this.degradationRate * 2 : this.degradationRate);
  }
}
