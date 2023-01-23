import { render, screen, waitFor } from '@src/services/testing';

describe('ID Generator', () => {
  function mount(){
    return render('<id-generator />');
  }

  it('should generate an UUID', async () => {
    const { user } = mount();
    const input = screen.getByLabelText(/generated id/i);
    expect(input.value).toHaveLength(0);
    user.click(screen.getByText(/generate/i));
    await waitFor(() => {
      expect(input.value).toHaveLength(36);
    });
  });
});
