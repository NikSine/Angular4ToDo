import { AngularTaskAppPage } from './app.po';

describe('angular-task-app App', () => {
  let page: AngularTaskAppPage;

  beforeEach(() => {
    page = new AngularTaskAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
