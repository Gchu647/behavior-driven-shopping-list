const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function() {
  let item;

  beforeEach(function() {
    item = new ShoppingListItem('Apple', 'Sweet');
  });

  // Testing if ShoppingListItem instance is created using the ShoppingListItem class
  it('should be a Class', function() {
    (item.constructor === ShoppingListItem.prototype.constructor).should.equal(true);
  });

  it('should have a property named "name"', function() {
    item.hasOwnProperty('name').should.equal(true);
  });

  it('should have a property named "description"', function() {
    item.hasOwnProperty('description').should.equal(true);
  });

  it('should have a property named "is_done"', function() {
    item.hasOwnProperty('is_done').should.equal(true);
  });

  it('should accept 2 arguments: name and description', function() {
    item.name.should.equal('Apple');
    item.description.should.equal('Sweet');
  });

  it('should only accept strings as arguments', function() {
    const itemNull = new ShoppingListItem('Apple', null);
    const itemObject = new ShoppingListItem('Apple', {});

    expect(itemNull.description).to.not.be.a('string');
    expect(itemObject.description).to.not.be.a('string');
  });

  it('should have a method named "check"', function() {
    item.check.should.be.a('function'); // expect(item).to.respondTo('check')
    item.check();
    item.is_done.should.equal(true);
  });

  it('should have a method named "uncheck"', function() {
    item.uncheck.should.be.a('function');
    item.uncheck();
    item.is_done.should.equal(false);
  });

  it('should have a method named "render" that constructs HTML string with <li> tags', function() {
    item.render.should.be.a('function');
    item.render().should.equal('<li class="completed_false">\n  <input type="checkbox"  onchange="changeCheckedStatus(event, undefined)">\n  <span>Apple</span><span>(<em>Sweet</em>)</span>\n  <button onclick="removeItemButtonClicked(undefined)">\n    <span class="remove-button">X</span>\n  </button>\n</li>');
    item.check();
    item.render().should.equal('<li class="completed_true">\n  <input type="checkbox" checked onchange="changeCheckedStatus(event, undefined)">\n  <span>Apple</span><span>(<em>Sweet</em>)</span>\n  <button onclick="removeItemButtonClicked(undefined)">\n    <span class="remove-button">X</span>\n  </button>\n</li>');
  });
});

describe('ShoppingList', function() {
  let list;
  let apple;
  let donut;

  beforeEach(function() {
    list = new ShoppingList();
    apple = new ShoppingListItem('Apple', 'Sweet');
    donut = {}; // Not Shopping List Item
  });

  it('should be a Class', function() {
    (list.constructor === ShoppingList.prototype.constructor).should.equal(true);
  });

  it('should have a property named "items"', function() {
    list.hasOwnProperty('items').should.equal(true);
  });

  it('should initialize "items" as an empty Array', function() {
    Array.isArray(list.items).should.equal(true); // Testing if it is an Array (check chai tools)
    list.items.should.be.empty;
  });

  it('should have an "addItem" method', function() {
    // Test if obj pushed in is a ShoppingList item
    list.addItem(apple);
    let itemLastIndex = list.items[list.items.length - 1];
    (itemLastIndex instanceof ShoppingListItem).should.equal(true);

    // Test if obj throws error
    expect(() => list.addItem()).to.throw('Invalid item.');
  });

  it('should have a "removeItem" method', function() {
    // Test if obj pushed in is a ShoppingList item
    list.addItem(apple);
    list.addItem(apple);
    list.addItem(apple);
    list.items.length.should.equal(3);
    list.removeItem();
    list.items.length.should.equal(2);
    list.removeItem(apple);
    list.items.length.should.equal(1);

    // Test if obj throws error
    expect(() => list.removeItem(donut)).to.throw('Invalid item.');
  });

  it('should have render method that lists items in <ul> format', function() {
    list.addItem(apple);
    list.addItem(apple);
    list.addItem(apple);

    list.render().should.equal(`<ul>${list.items[0].render(0)}${list.items[1].render(1)}${list.items[2].render(2)}</ul>`);
  });
});
