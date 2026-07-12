import { ConjuredItem } from '@/conjured-item';

describe('ConjuredItem', () => {
  it('decreases quality by 2 each day', () => {
    const item = new ConjuredItem('Conjured foo', 5, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(8);
  });

  it('decreases sellIn by 1 each day', () => {
    const item = new ConjuredItem('Conjured foo', 5, 10);
    item.applyDailyUpdate();
    expect(item.sellIn).toBe(4);
  });

  it('decreases quality by 4 once expired', () => {
    const item = new ConjuredItem('Conjured foo', 0, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(6);
  });

  it('quality never goes below 0', () => {
    const item = new ConjuredItem('Conjured foo', 5, 1);
    item.applyDailyUpdate();
    expect(item.quality).toBe(0);
  });

  it('quality never goes below 0 when expired', () => {
    const item = new ConjuredItem('Conjured foo', 0, 3);
    item.applyDailyUpdate();
    expect(item.quality).toBe(0);
  });
});
