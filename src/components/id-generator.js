import uuid from 'uuid';

export class IdGenerator extends HTMLElement {
  constructor() {
    super();
    this.html = this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.html.innerHTML = `${buildStyle()}${buildMarkup()}`;
    this.html.querySelector('button').addEventListener('click', () => generateId(this.html));
  }
}

function buildStyle(){
  return `<style>
  span {
    position: relative;
    display: inline-flex;
    align-items: stretch;
    width: 100%;
    max-width: 400px;
    background-color: #000;
    border-radius: 6px;
    overflow: hidden;
  }

  span:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 20px;
    background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(34,34,34,1) 100%);
  }

  button {
    padding: 0 20px;
    background-color: transparent;
    color: #f1f1f1;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    border: 0;
    -webkit-appearance: none;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background-color: #333;
  }

  input {
    flex: 1;
    padding: 0 0 0 10px;
    background-color: #222;
    color: #c6c6c6;
    text-align: center;
    line-height: 48px;
    border: 0;
  }
</style>`;
}

function buildMarkup(){
  return '<span><button>generate</button><input aria-label="generated id" disabled /></span>';
}

function generateId(html){
  html.querySelector('input').value = uuid();
}
