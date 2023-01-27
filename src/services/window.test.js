import windowService from './window';

describe('Window Service', () => {
  it('should get user agent', () => {
    expect(windowService.getUserAgent()).toEqual(window.navigator.userAgent);
  });
});
