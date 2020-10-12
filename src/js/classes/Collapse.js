export default class Collapse {
  constructor(container) {
    this.container = container;
    this.button = null;
    this.collapsible = null;
  }

  init() {
    this.draw();
    this.action();
  }

  draw() {
    const collapseContainer = document.createElement('div');
    collapseContainer.className = 'collapse-container';
    const collapseButton = document.createElement('button');
    collapseButton.type = 'button';
    collapseButton.className = 'collapse-button';
    collapseButton.innerText = 'Collapse';
    const collapseText = document.createElement('p');
    collapseText.className = 'collapse-text';
    collapseText.innerText = 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.';
    this.container.appendChild(collapseContainer);
    collapseContainer.appendChild(collapseButton);
    collapseContainer.appendChild(collapseText);
    this.collapsible = collapseContainer;
    this.button = collapseButton;
  }

  action() {
    this.button.addEventListener('click', () => {
      this.collapsible.classList.toggle('collapse-container-show');
    });
  }
}
