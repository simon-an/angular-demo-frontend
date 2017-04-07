import { KnowledgeFrontendPage } from './app.po';

describe('knowledge-frontend App', () => {
  let page: KnowledgeFrontendPage;

  beforeEach(() => {
    page = new KnowledgeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
