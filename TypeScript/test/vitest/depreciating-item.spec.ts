import { DepreciatingItem } from '@/depreciating-item';

describe('DepreciatingItem', () => {
  it('decreases quality by 1 each day', () => {
    const item = new DepreciatingItem('foo', 5, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(9);
  });

  it('decreases sellIn by 1 each day', () => {
    const item = new DepreciatingItem('foo', 5, 10);
    item.applyDailyUpdate();
    expect(item.sellIn).toBe(4);
  });

  it('decreases quality by 2 once expired', () => {
    const item = new DepreciatingItem('foo', 0, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(8);
  });

  it('quality never goes below 0', () => {
    const item = new DepreciatingItem('foo', 5, 0);
    item.applyDailyUpdate();
    expect(item.quality).toBe(0);
  });

  it('quality never goes below 0 when expired', () => {
    const item = new DepreciatingItem('foo', 0, 1);
    item.applyDailyUpdate();
    expect(item.quality).toBe(0);
  });
});
