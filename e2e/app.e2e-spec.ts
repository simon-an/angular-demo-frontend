import { browser, by, element } from 'protractor';
import { KnowledgeFrontendPage } from './app.po';

describe('knowledge-frontend App', () => {
  let page: KnowledgeFrontendPage;

  beforeEach(() => {
    page = new KnowledgeFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toBe('Welcome to my App');
  });
});
