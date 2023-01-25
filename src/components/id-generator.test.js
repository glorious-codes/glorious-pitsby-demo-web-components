import { render, screen, pause } from '@src/services/testing';

describe('ID Generator', () => {
  function mount(){
    return render('<id-generator />');
  }

  it('should generate an UUID', async () => {
    const { user } = mount();
    const input = await screen.findByShadowLabelText(/generated id/i);
    const button = await screen.getByShadowText(/generate/i);
    expect(input.value).toHaveLength(0);
    user.click(button);
    await pause(50);
    expect(input.value).toHaveLength(36);
  });
});
