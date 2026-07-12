import { GildedItem } from "./gilded-item";

export class AppreciatingItem extends GildedItem {
  protected get appreciationRate(): number {
    return 1;
  }

  applyDailyUpdate(): void {
    this.decrementSellIn();
    this.increaseQuality(this.isExpired ? this.appreciationRate * 2 : this.appreciationRate);
  }
}
