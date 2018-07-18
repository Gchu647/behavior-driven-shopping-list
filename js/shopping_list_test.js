describe("ShoppingListItem", function(){
  function isClass(func) {
    return typeof func === 'function'
      && /^class\s/.test(Function.prototype.toString.call(func));
  }

  this.before(function() {
    let shopList = new ShoppingListItem();
  });

  it("should be a Class", function() {
    isClass(shopList).should.equal(true);
  });

});