import { InnerContentPage } from './app.po';

describe('inner-content App', () => {
  let page: InnerContentPage;

  beforeEach(() => {
    page = new InnerContentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
