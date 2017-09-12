import { CFDrelloPage } from './app.po';

describe('cfdrello App', () => {
  let page: CFDrelloPage;

  beforeEach(() => {
    page = new CFDrelloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
