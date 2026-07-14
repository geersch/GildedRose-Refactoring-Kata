import { Item } from '@/gilded-rose';
import { BackstagePassStrategy } from '@/backstage-pass-strategy';

describe('BackstagePassStrategy', () => {
  const update = (sellIn: number, quality: number) => {
    const item = new Item('Backstage pass', sellIn, quality);
    new BackstagePassStrategy().applyDailyUpdate(item);
    return item;
  };

  it('increases quality by 1 when more than 10 days remain', () => {
    expect(update(11, 10).quality).toBe(11);
  });

  it('increases quality by 2 when 10 days or fewer remain', () => {
    expect(update(10, 10).quality).toBe(12);
  });

  it('increases quality by 2 when 6 days remain', () => {
    expect(update(6, 10).quality).toBe(12);
  });

  it('increases quality by 3 when 5 days or fewer remain', () => {
    expect(update(5, 10).quality).toBe(13);
  });

  it('increases quality by 3 on the last day', () => {
    expect(update(1, 10).quality).toBe(13);
  });

  it('quality drops to 0 after the concert', () => {
    expect(update(0, 10).quality).toBe(0);
  });

  it('quality never exceeds 50 when more than 10 days remain', () => {
    expect(update(11, 50).quality).toBe(50);
  });

  it('quality never exceeds 50 when 10 days or fewer remain', () => {
    expect(update(10, 49).quality).toBe(50);
  });

  it('quality never exceeds 50 when 5 days or fewer remain', () => {
    expect(update(5, 49).quality).toBe(50);
  });

  it('decreases sellIn by 1 each day', () => {
    expect(update(15, 10).sellIn).toBe(14);
  });
});
