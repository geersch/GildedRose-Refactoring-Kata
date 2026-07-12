import { GildedItem } from "./gilded-item";

export class LegendaryItem extends GildedItem {
  applyDailyUpdate(): void {
    // legendary items never change
  }
}
