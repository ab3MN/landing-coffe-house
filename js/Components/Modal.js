import { allowScroll, blockScroll } from '../helpers/scroll';
export default class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.backdrop = '';
  }

  genereateModal(content) {
    this.backdrop = this.createDomNode('div', 'backdrop');
    this.modal = this.createDomNode('div', 'modal');
    this.modalContent = this.createDomNode('div', 'modal__content');

    this.setContent(content);
    this.appendModalElements();
    this.handleOpen();
  }
  createDomNode(el = 'div', ...classes) {
    const domElement = document.createElement(el);
    domElement.classList.add(...classes);
    return domElement;
  }

  setContent(content) {
    typeof content === 'string'
      ? (this.modalContent.innerHTML = content)
      : ((this.modalContent.innerHTML = ''), this.modalContent.append(content));
  }

  handleKeyPress(e) {
    e.code !== 'Escape' ? undefined : this.handleClose();
  }
  handleBackdropClick(e) {
    e.target !== e.currentTarget ? undefined : this.handleClose();
  }

  handleClose() {
    this.backdrop.remove();
    window.removeEventListener('keydown', this.handleKeyPress.bind(this));

    this.backdrop.removeEventListener(
      'click',
      this.handleBackdropClick.bind(this)
    );

    allowScroll();
  }

  handleOpen() {
    document.body.append(this.backdrop);
    window.addEventListener('keydown', this.handleKeyPress.bind(this));

    this.backdrop.addEventListener(
      'click',
      this.handleBackdropClick.bind(this)
    );
    blockScroll();
  }

  appendModalElements() {
    this.modal.append(this.modalContent);
    this.backdrop.append(this.modal);
  }
}
