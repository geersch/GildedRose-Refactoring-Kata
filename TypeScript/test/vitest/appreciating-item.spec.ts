import { AppreciatingItem } from '@/appreciating-item';

describe('AppreciatingItem', () => {
  it('increases quality by 1 each day', () => {
    const item = new AppreciatingItem('Aged Brie', 5, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(11);
  });

  it('decreases sellIn by 1 each day', () => {
    const item = new AppreciatingItem('Aged Brie', 5, 10);
    item.applyDailyUpdate();
    expect(item.sellIn).toBe(4);
  });

  it('increases quality by 2 once expired', () => {
    const item = new AppreciatingItem('Aged Brie', 0, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(12);
  });

  it('quality never exceeds 50', () => {
    const item = new AppreciatingItem('Aged Brie', 5, 50);
    item.applyDailyUpdate();
    expect(item.quality).toBe(50);
  });

  it('quality never exceeds 50 when expired', () => {
    const item = new AppreciatingItem('Aged Brie', 0, 50);
    item.applyDailyUpdate();
    expect(item.quality).toBe(50);
  });
});
