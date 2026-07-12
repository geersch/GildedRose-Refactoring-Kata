import { Item } from "./item";

export abstract class GildedItem extends Item {
  abstract applyDailyUpdate(): void;

  protected get isExpired(): boolean {
    return this.sellIn < 0;
  }

  protected decrementSellIn(): void {
    this.sellIn -= 1;
  }

  protected increaseQuality(amount = 1): void {
    this.quality = Math.min(50, this.quality + amount);
  }

  protected decreaseQuality(amount = 1): void {
    this.quality = Math.max(0, this.quality - amount);
  }
}
