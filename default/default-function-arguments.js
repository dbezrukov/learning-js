function makeRequest(url, method = 'GET') {
  return method;
}

makeRequest('google.com'); // GET
makeRequest('google.com', 'POST'); // POST
makeRequest('google.com', null); // NULL!
