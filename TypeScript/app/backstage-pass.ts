import { GildedItem } from "./gilded-item";

export class BackstagePass extends GildedItem {
  applyDailyUpdate(): void {
    this.decrementSellIn();
    if (this.isExpired) {
      this.quality = 0;
    } else {
      let amount = 1;
      if (this.sellIn <= 4) {
        amount = 3;
      } else if (this.sellIn <= 9) {
        amount = 2;
      }
      this.increaseQuality(amount);
    }
  }
}
