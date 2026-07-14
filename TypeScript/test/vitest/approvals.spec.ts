import { execSync } from 'node:child_process';
import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose Approval', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items).toMatchSnapshot();
  });

  it('should thirtyDays', () => {
    const consoleOutput = execSync(
      'ts-node test/golden-master-text-test.ts 30',
      { encoding: 'utf-8' }
    );
    expect(consoleOutput).toMatchSnapshot();
  });
});
