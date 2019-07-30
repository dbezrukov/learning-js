// Fetch in a nice native wrapper around AJAX but it doesn't
// behave in a way you expect, so it's recomended to use
// Axios or Superagent

// Fetch doesn't enter the rejected state when 404 arrives
// which is absolutely dissimilar from how every other Ajax library behaves 
url = "https://newsfeed.com/posts676some887crazy87ty8id";
fetch (url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error)); // Doesn't get called

// Fetch enters the regected state only when the request is failed to be made 
url = "https://some34missing34543url.com/posts";
fetch (url)
  .then(response => console.log(response))
  .catch(error => console.log('BAD', error)); // Gets called

// So with fetch you have to reinvent the wheel when handling API request errors.
// It's better to use Axios or Superagent 
