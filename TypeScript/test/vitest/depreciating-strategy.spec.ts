import { Item } from '@/gilded-rose';
import { DepreciatingStrategy } from '@/depreciating-strategy';

describe('DepreciatingStrategy', () => {
  const update = (sellIn: number, quality: number, rate?: number) => {
    const item = new Item('foo', sellIn, quality);
    new DepreciatingStrategy(rate).applyDailyUpdate(item);
    return item;
  };

  it('decreases quality by 1 each day', () => {
    expect(update(5, 10).quality).toBe(9);
  });

  it('decreases sellIn by 1 each day', () => {
    expect(update(5, 10).sellIn).toBe(4);
  });

  it('decreases quality by 2 once expired', () => {
    expect(update(0, 10).quality).toBe(8);
  });

  it('quality never goes below 0', () => {
    expect(update(5, 0).quality).toBe(0);
  });

  it('quality never goes below 0 when expired', () => {
    expect(update(0, 1).quality).toBe(0);
  });

  describe('with rate 2 (conjured)', () => {
    it('decreases quality by 2 each day', () => {
      expect(update(5, 10, 2).quality).toBe(8);
    });

    it('decreases quality by 4 once expired', () => {
      expect(update(0, 10, 2).quality).toBe(6);
    });

    it('quality never goes below 0', () => {
      expect(update(5, 1, 2).quality).toBe(0);
    });

    it('quality never goes below 0 when expired', () => {
      expect(update(0, 3, 2).quality).toBe(0);
    });
  });
});
