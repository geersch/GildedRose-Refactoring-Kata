import { GildedRose } from '../app/gilded-rose';
import { AppreciatingItem } from '../app/appreciating-item';
import { BackstagePass } from '../app/backstage-pass';
import { ConjuredItem } from '../app/conjured-item';
import { DepreciatingItem } from '../app/depreciating-item';
import { LegendaryItem } from '../app/legendary-item';

console.log("OMGHAI!")

const items = [
  new DepreciatingItem("+5 Dexterity Vest", 10, 20),
  new AppreciatingItem("Aged Brie", 2, 0),
  new DepreciatingItem("Elixir of the Mongoose", 5, 7),
  new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80),
  new LegendaryItem("Sulfuras, Hand of Ragnaros", -1, 80),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 10, 49),
  new BackstagePass("Backstage passes to a TAFKAL80ETC concert", 5, 49),
  new ConjuredItem("Conjured Mana Cake", 3, 6)];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days + 1; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);

  });
  console.log();
  gildedRose.updateQuality();
}
