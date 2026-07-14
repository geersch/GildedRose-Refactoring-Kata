import { Item } from '@/gilded-rose';
import { LegendaryStrategy } from '@/legendary-strategy';

describe('LegendaryStrategy', () => {
  const update = () => {
    const item = new Item('Sulfuras, Hand of Ragnaros', 0, 80);
    new LegendaryStrategy().applyDailyUpdate(item);
    return item;
  };

  it('never changes quality', () => {
    expect(update().quality).toBe(80);
  });

  it('never changes sellIn', () => {
    expect(update().sellIn).toBe(0);
  });
});
