export function create(tag, classes = [], id = '') {
  const element = document.createElement(tag);
  addClass(element, classes);
  addId(element, id);
  return element;
}

function addClass(element, classes = []) {
  if (classes && classes.length > 0) {
    if (typeof classes === 'string') {
      let delimiter = '';
      if (classes.includes(', ')) delimiter = ', ';
      else if (classes.includes(' ')) delimiter = ' ';
      else if (classes.includes(',')) delimiter = ',';
      // classList.push(...classes.split(delimiter));
      classes = classes.split(delimiter);
    }
    element.classList.add(...classes);
  }
}

function addId(element, id = '') {
  if (id != '') {
    element.id = id;
  }
}

function DIV(classes = [], id = '') {
  const div = document.createElement('div');
  div.id = id;
  addClass(div, classes);
  return div;
}

function SPAN(classes = [], id = '') {}
