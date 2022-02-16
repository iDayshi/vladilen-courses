const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' },
];

class CustomSelect {
  #id;
  #options;
  #currentSelectedOption;
  constructor(id, options) {
    this.#id = id;
    this.#options = options;
    this.#currentSelectedOption = '';
  }

  get getId() {
    return this.#id;
  }

  get getOptions() {
    return this.#options;
  }

  get getContainer() {
    return this.#container();
  }

  get getCurrentSelectedOption() {
    return this.#currentSelectedOption;
  }

  set editCurrentSelectedOption(value) {
    this.#currentSelectedOption = value;
  }

  #container() {
    const divContainer = document.createElement('div');
    divContainer.className = `select-dropdown select-dropdown--${this.getId}`;
    const buttonCreate = document.createElement('button');
    buttonCreate.className = `select-dropdown__button select-dropdown__button--${this.getId}`;
    const spanCreate = document.createElement('span');
    spanCreate.className = `select-dropdown select-dropdown--${this.getId}`;
    spanCreate.innerText = 'Выберите элемент';
    buttonCreate.append(spanCreate);
    divContainer.append(buttonCreate);
    const ulContainer = document.createElement('ul');
    ulContainer.className = `select-dropdown__list select-dropdown__list--${this.getId}`;
    this.getOptions.forEach((element) => {
      const liContainer = document.createElement('li');
      liContainer.className = 'select-dropdown__list-item';
      liContainer.setAttribute('data-value', `${element.value}`);
      liContainer.innerHTML = `${element.text}`;
      ulContainer.append(liContainer);
    });
    divContainer.append(ulContainer);
    return divContainer;
  }

  render(container) {
    container.append(this.getContainer);
  }

  elementSelection() {
    const editElem = document.querySelector('span');
    this.getCurrentSelectedOption.classList.add('selected');
    const selectValue = this.getOptions.find((obj) => {
      return obj.value === Number(this.getCurrentSelectedOption.dataset.value);
    });
    ulContainerOut.classList.remove('active');
    editElem.innerHTML = selectValue.text;
  }
}

const customSelect = new CustomSelect('test', options);
const mainContainer = document.querySelector('#container');
customSelect.render(mainContainer);

const buttonOpen = document.querySelector('.select-dropdown__button');
const ulContainerOut = document.querySelector('ul');

buttonOpen.addEventListener('click', () => {
  ulContainerOut.classList.toggle('active');
});

const asd = ulContainerOut.addEventListener('click', (event) => {
  customSelect.editCurrentSelectedOption = event.target;
  document.querySelectorAll('li').forEach((element) => {
    element.classList.remove('selected');
  });
  customSelect.elementSelection();
});
