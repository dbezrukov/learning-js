// Traversing a tree using generator

class Comment {
	constructor(content, children) {
  	this.content = content;
    this.children = children;
  }
  
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
    	yield* child;
    }
  }
}

const childrenForComment2 = [
	new Comment('Comment 21', []),
  new Comment('Comment 21', []),
]

const children = [
	new Comment('Comment 1', []),
  new Comment('Comment 2', childrenForComment2),
  new Comment('Comment 3', [])
]

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
	values.push(value);
}

// We've iterated through all 'content' values
values; // ["Great post!","Comment 1","Comment 2","Comment 21","Comment 21","Comment 3"]