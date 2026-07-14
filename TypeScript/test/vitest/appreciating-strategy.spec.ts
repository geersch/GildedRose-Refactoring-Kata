import { Item } from '@/gilded-rose';
import { AppreciatingStrategy } from '@/appreciating-strategy';

describe('AppreciatingStrategy', () => {
  const update = (sellIn: number, quality: number) => {
    const item = new Item('Aged Brie', sellIn, quality);
    new AppreciatingStrategy().applyDailyUpdate(item);
    return item;
  };

  it('increases quality by 1 each day', () => {
    expect(update(5, 10).quality).toBe(11);
  });

  it('decreases sellIn by 1 each day', () => {
    expect(update(5, 10).sellIn).toBe(4);
  });

  it('increases quality by 2 once expired', () => {
    expect(update(0, 10).quality).toBe(12);
  });

  it('quality never exceeds 50', () => {
    expect(update(5, 50).quality).toBe(50);
  });

  it('quality never exceeds 50 when expired', () => {
    expect(update(0, 50).quality).toBe(50);
  });
});
