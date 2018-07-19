class ShoppingListItem {
  constructor(name, description) {
    if (!name) { throw new Error('Item name must not be empty.'); }
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
    let descStr = this.description ? `<span>(<em>${this.description}</em>)</span>` : '';
    let checkedStr = this.is_done ? 'checked' : '';
    let str = (
`<li class="completed_${this.is_done}">
  <input type="checkbox" ${checkedStr} onchange="changeCheckedStatus(event, ${idx})">
  <span>${this.name}</span>${descStr}
  <button onclick="removeItemButtonClicked(${idx})">
    <span class="remove-button">X</span>
  </button>
</li>`
);

    return str;
  }
}
