import type { Item } from "./gilded-rose";
import { ItemUpdateStrategy } from "./item-update-strategy";

export class BackstagePassStrategy extends ItemUpdateStrategy {
  applyDailyUpdate(item: Item): void {
    this.decrementSellIn(item);
    if (this.isExpired(item)) {
      item.quality = 0;
    } else {
      let amount = 1;
      if (item.sellIn <= 4) {
        amount = 3;
      } else if (item.sellIn <= 9) {
        amount = 2;
      }
      this.increaseQuality(item, amount);
    }
  }
}
