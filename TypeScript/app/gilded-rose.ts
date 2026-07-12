import { Item } from "./item";
import { GildedItem } from "./gilded-item";

export class GildedRose {
  items: Array<Item>;

  constructor(items: GildedItem[]) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items as GildedItem[]) {
      item.applyDailyUpdate();
    }
    return this.items;
  }
}
