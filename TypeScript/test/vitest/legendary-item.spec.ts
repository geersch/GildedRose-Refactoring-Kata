import { LegendaryItem } from '@/legendary-item';

describe('LegendaryItem', () => {
  it('never changes quality', () => {
    const item = new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80);
    item.applyDailyUpdate();
    expect(item.quality).toBe(80);
  });

  it('never changes sellIn', () => {
    const item = new LegendaryItem('Sulfuras, Hand of Ragnaros', 0, 80);
    item.applyDailyUpdate();
    expect(item.sellIn).toBe(0);
  });
});
