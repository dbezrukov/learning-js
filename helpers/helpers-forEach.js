var posts = [
  { id: 23, title: 'Daily JS News' },
  { id: 52, title: 'Code Refactor City' },
  { id: 105, title: 'The Brightest Ruby' }
];

// Writing a 'for' loop can go wrong, don't use it
for (var i = 0; i < posts.length; i++) {
  savePost(posts[i]);
}

// Use ES6 forEach helper instead
posts.forEach(savePost);

// Coding convention: plural name for array and singular for element
images.forEach(function(image) {
  areas.push(image.height * image.width);
})