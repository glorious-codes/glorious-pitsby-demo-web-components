import { v4 as uuid } from 'uuid';

export class IdGenerator extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = this.buildMarkup();
    this.querySelector('button').addEventListener('click', () => this.generateId());
  }
  buildMarkup(){
    return '<div><button>generate</button><input aria-label="generated id" disabled /></div>';
  }
  generateId(){
    this.querySelector('input').value = uuid();
  }
}
