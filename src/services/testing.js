import userEvent from '@testing-library/user-event';
export * from 'shadow-dom-testing-library';

export async function pause(timeout){
  await new Promise(resolve => setTimeout(resolve, timeout));
}

export function render(html){
  document.body.innerHTML = html;
  return {
    element: document.body.firstChild,
    user: userEvent.setup()
  };
}

export function teardown(){
  document.body.firstChild.remove();
}
