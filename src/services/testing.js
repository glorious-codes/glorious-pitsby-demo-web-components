import userEvent from '@testing-library/user-event';
export * from '@testing-library/dom';

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
