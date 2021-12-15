import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  it('has a hover state', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    await page.hover('my-component')
    await page.waitForTimeout(1000)
    const results = await page.compareScreenshot()
    await page.waitForTimeout(3000)
    expect(results).toMatchScreenshot()
  });
});
