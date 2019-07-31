// Quering currency rates using ES8 async/await

function getUSD() {
  return new Promise(resolve => {
    setTimeout(() => {
    resolve(65);
    }, 2000)
  })
}
  
function getBTC() {
  return new Promise((resolve) => {
    setTimeout(() => {
    resolve(65000);
    }, 3000)
  })
}

function getBTCWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    reject('Bad Gateway');
    }, 3000)
  })
}

// Catching error for multiple operations in 'try' block
async function getRates() {
  try {
    let usd = await getUSD();
    //let btc = await getBTC();
    let btc = await getBTCWithError();

    console.log(`${usd}, ${btc}`); // Success
  }
  catch (e) {
    console.log(`Query failed with error: ${e}`); // Catching query error
  }
}
  
getRates();