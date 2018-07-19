(function(w) {
  const list = new ShoppingList();

  w.add_to_shopping_list = function() {
    let content = document.getElementById('content');
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let new_shopping_list_item = new ShoppingListItem(title.value, description.value);

    list.addItem(new_shopping_list_item);
    content.innerHTML = list.render();
  };

  w.changeCheckedStatus = function(event, idx) {
    let item = list.items[idx];
    if (event.target.checked) {
      item.check();
    } else {
      item.uncheck();
    }

    content.innerHTML = list.render();
  };

  w.removeItemButtonClicked = function(idx) {
    list.items.splice(idx, 1);
    content.innerHTML = list.render();
  };
})(window);
