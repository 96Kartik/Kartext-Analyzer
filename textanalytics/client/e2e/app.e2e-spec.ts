import { kartAnalyticsCliUpdatePage } from './app.po';

describe('kart-analytics-cli-update App', () => {
  let page: KartAnalyticsPage;

  beforeEach(() => {
    page = new KartAnalyticsUpdatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
