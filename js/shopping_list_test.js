const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function() {
  it('should be a Class', function() {
    (new ShoppingListItem().constructor === ShoppingListItem.prototype.constructor).should.equal(true);
  });

  it('should have a property named "name"', function() {
    (new ShoppingListItem()).hasOwnProperty('name').should.equal(true);
  });
});
