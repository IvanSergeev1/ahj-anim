export default class CallbackChat {
  constructor(container) {
    this.container = container;
    this.form = null;
    this.button = null;
    this.close = null;
  }

  init() {
    this.draw();
    this.action();
  }

  draw() {
    const chatButton = document.createElement('button');
    chatButton.type = 'button';
    chatButton.className = 'chat-button';
    const chatForm = document.createElement('form');
    chatForm.className = 'chat-form chat-form-hide';
    chatForm.innerHTML = `
      <button id="close_button" class="close-button" type="button">X</button>
      <span class="chat-form-header">Напишите нам</span>
      <textarea class="chat-area"></textarea>
      <button class="submit-button" type="button">Отправить</button>
    `;
    this.container.appendChild(chatForm);
    this.container.appendChild(chatButton);
    this.form = chatForm;
    this.button = chatButton;
    this.close = document.getElementById('close_button');
  }

  action() {
    this.button.addEventListener('click', () => {
      this.form.classList.remove('chat-form-hide');
      this.button.classList.add('chat-button-hide');
    });
    this.close.addEventListener('click', () => {
      this.form.classList.add('chat-form-hide');
      this.button.classList.remove('chat-button-hide');
    });
  }
}
