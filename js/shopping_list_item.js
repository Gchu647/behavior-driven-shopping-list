class ShoppingListItem {
  constructor(name, description) {
    if (name.length > 0) {
      this.name = name;
      this.description = description;
      this.is_done = false;
    } else {
      alert('Input must not be empty!');
    }
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render(idx) {
    let str = '';
    console.log(this.description);
    if (!this.description) {
      str = `<li class="completed_${this.is_done}"><input type="checkbox" ${setChecked(this.is_done)} onchange="changeCheckedStatus(event, ${idx})"><span>${this.name}</span> <button onclick="removeItemButtonClicked(${idx})"><span class="remove-button">X</span></button></li>`;
    } else {
      str = `<li class="completed_${this.is_done}"><input type="checkbox" ${setChecked(this.is_done)} onchange="changeCheckedStatus(event, ${idx})"><span>${this.name}</span> <span>(<em>${this.description}</em>)</span> <button onclick="removeItemButtonClicked(${idx})"><span class="remove-button">X</span></button></li>`;
    }

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
