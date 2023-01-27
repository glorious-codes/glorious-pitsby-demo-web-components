import windowService from './window';
import * as browserService from './browser';

describe('Browser Service', () => {
  beforeEach(() => {
    window.alert = jest.fn();
  });

  it('should alert that Safari doesn\'t fully support the docs', () => {
    mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15');
    browserService.init();
    expect(window.alert).toHaveBeenCalledWith('This browser may have no support for all the features required to run this website. Please, use Chrome or Firefox.');
  });

  it('should not alert missing support if browser is other than Safari', () => {
    mockUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36');
    browserService.init();
    expect(window.alert).not.toHaveBeenCalled();
  });

  function mockUserAgent(userAgent){
    windowService.getUserAgent = jest.fn(() => userAgent);
  }
});
