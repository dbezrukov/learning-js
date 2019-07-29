//           Status      Callback
//      
//           resolved    then
//  Promise
//           rejected    catch

promise = new  Promise((resolve, reject) => {
  reject();
})

// registering one or many 'then' callbacks for resolved state
// registering one 'catch' callback for rejected state
promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('i was also ran!'))
  .catch(() => console.log('uh oh!')) // Should be also defined

// In case Promise gets rejected and catch callback is undefined
// you would get an 'Uncaught promise' error