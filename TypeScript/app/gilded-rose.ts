import { ItemUpdateStrategy } from "./item-update-strategy";
import { DepreciatingStrategy } from "./depreciating-strategy";
import { AppreciatingStrategy } from "./appreciating-strategy";
import { BackstagePassStrategy } from "./backstage-pass-strategy";
import { LegendaryStrategy } from "./legendary-strategy";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  private readonly conjuredStrategy = new DepreciatingStrategy(2);
  private readonly defaultStrategy = new DepreciatingStrategy();
  private readonly strategiesByName: Record<string, ItemUpdateStrategy> = {
    "Aged Brie": new AppreciatingStrategy(),
    "Sulfuras, Hand of Ragnaros": new LegendaryStrategy(),
    "Backstage passes to a TAFKAL80ETC concert": new BackstagePassStrategy(),
  };

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      this.strategyFor(item).applyDailyUpdate(item);
    }
    return this.items;
  }

  private strategyFor(item: Item): ItemUpdateStrategy {
    if (item.name.startsWith("Conjured")) {
      return this.conjuredStrategy;
    }
    return this.strategiesByName[item.name] ?? this.defaultStrategy;
  }
}
