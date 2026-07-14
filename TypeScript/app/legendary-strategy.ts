import type { Item } from "./gilded-rose";
import { ItemUpdateStrategy } from "./item-update-strategy";

export class LegendaryStrategy extends ItemUpdateStrategy {
  applyDailyUpdate(_item: Item): void {
    // legendary items never change
  }
}
