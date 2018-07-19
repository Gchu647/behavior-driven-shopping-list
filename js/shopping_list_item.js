class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render(idx) {
    let str = `<li class="completed_${this.is_done}"><input type="checkbox" ${setChecked(this.is_done)} onchange="changeCheckedStatus(event, ${idx})"><span>${this.name}</span> <span>(<em>${this.description}</em>)</span> <button onclick="removeItemButtonClicked(${idx})"><span class="remove-button">X</span></button></li>`;
    return str;
  }
}

function setChecked(is_done) {
  if (is_done === true) {
    return 'checked';
  } else {
    return '';
  }
}