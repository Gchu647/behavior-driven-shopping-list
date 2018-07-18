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
    let str = `<li class="completed_${this.is_done}"><input type="checkbox" onchange="changeCheckedStatus(event, ${idx})"><span>${this.name}</span> <span>${this.description}</span></li>`;
    console.log('status: ' + this.is_done);
    return str;
  }
}