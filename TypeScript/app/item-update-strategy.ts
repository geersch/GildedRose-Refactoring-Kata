import type { Item } from "./gilded-rose";

export abstract class ItemUpdateStrategy {
  abstract applyDailyUpdate(item: Item): void;

  protected isExpired(item: Item): boolean {
    return item.sellIn < 0;
  }

  protected decrementSellIn(item: Item): void {
    item.sellIn -= 1;
  }

  protected increaseQuality(item: Item, amount = 1): void {
    item.quality = Math.min(50, item.quality + amount);
  }

  protected decreaseQuality(item: Item, amount = 1): void {
    item.quality = Math.max(0, item.quality - amount);
  }
}
