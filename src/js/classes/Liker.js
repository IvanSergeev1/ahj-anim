export default class Liker {
  constructor(container) {
    this.container = container;
    this.button = null;
  }

  init() {
    this.draw();
    this.action();
  }

  draw() {
    const likerButton = document.createElement('button');
    likerButton.type = 'button';
    likerButton.classList = 'liker-button';
    likerButton.innerText = 'Like';
    this.container.appendChild(likerButton);
    this.button = likerButton;
  }

  action() {
    this.button.addEventListener('click', () => {
      const like = document.createElement('div');
      like.className = 'like';
      like.style.animationName = `direction${Math.floor(Math.random() * 4) + 1}`;
      this.container.appendChild(like);
      like.addEventListener('animationend', () => {
        this.container.removeChild(like);
      });
    });
  }
}
