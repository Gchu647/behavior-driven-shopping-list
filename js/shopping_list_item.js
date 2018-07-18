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
    let str = `<li class="completed_${this.is_done}"><input type="checkbox" checked="${getCheckedStatus(this.is_done)}" onchange="changeCheckedStatus(event, ${idx})"><span>${this.name}</span> <span>${this.description}</span></li>`;
    return str;
  }
}

function getCheckedStatus(is_done) {
  if (is_done === false) {
    console.log('getCheckedStatus = false');
    return false;
  } else {
    console.log('getCheckedStatus = true');
    return true;
  }
}