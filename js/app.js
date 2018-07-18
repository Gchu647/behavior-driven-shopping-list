( function(w){
  const list = new ShoppingList();
  list.render();

  w.add_to_shopping_list = function() {
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    let new_shopping_list_item = new ShoppingListItem(title, description);

    list.addItem(new_shopping_list_item);
    console.log(list.render());
  }

})(window);