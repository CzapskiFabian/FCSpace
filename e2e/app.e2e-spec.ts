import { FCSpacePage } from './app.po';

describe('fcspace App', () => {
  let page: FCSpacePage;

  beforeEach(() => {
    page = new FCSpacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
