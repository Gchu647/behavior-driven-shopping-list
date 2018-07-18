const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function() {
  it('should be a Class', function() {
    (new ShoppingListItem().constructor === ShoppingListItem.prototype.constructor).should.equal(true);
  });

  it('should have a property named "name"', function() {
    (new ShoppingListItem()).hasOwnProperty('name').should.equal(true);
  });

  it('should have a property named "description"', function() {
    (new ShoppingListItem()).hasOwnProperty('description').should.equal(true);
  });

  it('should have a property named "is_done"', function() {
    (new ShoppingListItem()).hasOwnProperty('is_done').should.equal(true);
  });

  it('should accept 2 arguments: name and description', function() {
    const item = new ShoppingListItem('Apple', 'Sweet');

    item.name.should.equal('Apple');
    item.description.should.equal('Sweet');
  });

  it('should only accept strings as arguments', function() {
    const itemNull = new ShoppingListItem('Apple', null);
    const itemObject = new ShoppingListItem('Apple', {});

    itemNull.name.should.be.a('string');
    itemObject.description.should.not.be.a('string');
  });
});
