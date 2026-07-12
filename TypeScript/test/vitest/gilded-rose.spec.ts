import { GildedRose } from '@/gilded-rose';
import { DepreciatingItem } from '@/depreciating-item';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new DepreciatingItem('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});
