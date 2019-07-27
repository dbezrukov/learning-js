// ES6 provides a shorthand syntax for initializing properties from variables
// ES6 provides a shorthand syntax for defining function methods
// ES6 enables the ability to have computed property names in an object literal definition

function createBookShop(inventory) {
  return {
    inventory, // in case key and value are identical, they can be condensed down to a single word
    priceForTitle(title) { // defining function method
      return this.inventory.find(book => book.title === title).price;
    }
  }
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'JavaScript Ninja', price: 15 }
]

const bookShop = createBookShop(inventory);