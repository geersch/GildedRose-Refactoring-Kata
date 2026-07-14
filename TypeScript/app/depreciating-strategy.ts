import type { Item } from "./gilded-rose";
import { ItemUpdateStrategy } from "./item-update-strategy";

export class DepreciatingStrategy extends ItemUpdateStrategy {
  constructor(private readonly rate = 1) {
    super();
  }

  applyDailyUpdate(item: Item): void {
    this.decrementSellIn(item);
    this.decreaseQuality(item, this.isExpired(item) ? this.rate * 2 : this.rate);
  }
}
