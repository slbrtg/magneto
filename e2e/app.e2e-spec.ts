import { MagnetoPage } from './app.po';

describe('magneto App', () => {
  let page: MagnetoPage;

  beforeEach(() => {
    page = new MagnetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
