var users = [
  { name: 'Alex' },
  { name: 'Bill' },
  { name: 'Joe' },
  { name: 'Bill' }
]

// Find returns an Object - the first 'Bill' occurrence
var user = users.find(function(user) {
  return user.name === 'Bill';
});

// findWhere helper
function findWhere(array, criteria) {
  var criteriaKeys = Object.keys(criteria);
    
  return array.find(function(item) {
    var itemKeys = Object.keys(item);
    var sameKeys = itemKeys.filter(function(key) { 
      return criteriaKeys.includes(key);
    })
    
    var sameValue = sameKeys.find(function(key) {
        return item[key] === criteria[key];
    })
    
    return !!sameValue;
  })
}