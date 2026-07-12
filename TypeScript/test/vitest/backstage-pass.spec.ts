import { BackstagePass } from '@/backstage-pass';

describe('BackstagePass', () => {
  it('increases quality by 1 when more than 10 days remain', () => {
    const item = new BackstagePass('Backstage pass', 11, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(11);
  });

  it('increases quality by 2 when 10 days or fewer remain', () => {
    const item = new BackstagePass('Backstage pass', 10, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(12);
  });

  it('increases quality by 2 when 6 days remain', () => {
    const item = new BackstagePass('Backstage pass', 6, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(12);
  });

  it('increases quality by 3 when 5 days or fewer remain', () => {
    const item = new BackstagePass('Backstage pass', 5, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(13);
  });

  it('increases quality by 3 on the last day', () => {
    const item = new BackstagePass('Backstage pass', 1, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(13);
  });

  it('quality drops to 0 after the concert', () => {
    const item = new BackstagePass('Backstage pass', 0, 10);
    item.applyDailyUpdate();
    expect(item.quality).toBe(0);
  });

  it('quality never exceeds 50 when more than 10 days remain', () => {
    const item = new BackstagePass('Backstage pass', 11, 50);
    item.applyDailyUpdate();
    expect(item.quality).toBe(50);
  });

  it('quality never exceeds 50 when 10 days or fewer remain', () => {
    const item = new BackstagePass('Backstage pass', 10, 49);
    item.applyDailyUpdate();
    expect(item.quality).toBe(50);
  });

  it('quality never exceeds 50 when 5 days or fewer remain', () => {
    const item = new BackstagePass('Backstage pass', 5, 49);
    item.applyDailyUpdate();
    expect(item.quality).toBe(50);
  });

  it('decreases sellIn by 1 each day', () => {
    const item = new BackstagePass('Backstage pass', 15, 10);
    item.applyDailyUpdate();
    expect(item.sellIn).toBe(14);
  });
});
