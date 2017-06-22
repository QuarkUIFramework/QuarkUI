import { QuarkUIPage } from './app.po';

describe('quark-ui App', () => {
  let page: QuarkUIPage;

  beforeEach(() => {
    page = new QuarkUIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
