( function(w){
  const list = new ShoppingList();
  list.render();

  w.add_to_shopping_list = function() {
    let content = document.getElementById("content");
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let new_shopping_list_item = new ShoppingListItem(title.value, description.value);

    list.addItem(new_shopping_list_item);
    content.innerHTML = list.render();
  }

})(window);