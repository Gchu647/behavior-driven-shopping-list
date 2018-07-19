class ShoppingList {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof ShoppingListItem) {
      this.items.push(item);
    } else {
      throw new Error('Invalid item.');
    }
  }

  removeItem(item) {
    if (item && item instanceof ShoppingListItem) {
      var index = this.items.indexOf(item);
      this.items.splice(index, 1);
    } else if (!item) {
      this.items.pop();
    } else {
      throw new Error('Invalid item.');
    }
  }

  render() {
    let str = '<ul>';

    this.items.forEach((item, idx) => {
      str += item.render(idx);
    });

    str += '</ul>';

    return str;
  }
}
