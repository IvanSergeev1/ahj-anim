import Collapse from './classes/Collapse';
import CallbackChat from './classes/CallbackChat';
import Liker from './classes/Liker';

const menu = document.getElementById('menu');
const container = document.getElementById('container');

menu.addEventListener('click', (event) => {
  if (event.target.classList.contains('menu-button')) {
    container.innerHTML = '';
    if (event.target.classList.contains('collapse')) {
      const collapse = new Collapse(container);
      collapse.init();
    }
    if (event.target.classList.contains('callback-chat')) {
      const callbackChat = new CallbackChat(container);
      callbackChat.init();
    }
    if (event.target.classList.contains('liker')) {
      const liker = new Liker(container);
      liker.init();
    }
  }
});
