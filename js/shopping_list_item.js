class ShoppingListItem {
  constructor(name, description, is_done) {
    this.name = name;
    this.description = description;
    this.is_done = is_done;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render() {
    let str = `<li class="completed_${this.is_done}"><span>${this.name}</span> <span>${this.description}</span></li>`;

    return str;
  }
}