// Quering currency rates using ES8 async/await

function getUSD() {
  return new Promise(resolve => {
    setTimeout(() => {
    resolve(65);
    }, 2000)
  })
}

function getBTCWithError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    reject('Bad Gateway');
    }, 3000)
  })
}

// Catching error for every of the await calls
async function getRates() {
  let usd = await getUSD().catch(e => console.log(`USD query failed with error: ${e}`));
  let btc = await getBTCWithError().catch(e => console.log(`BTC query failed with error: ${e}`));

  if (!usd || !btc) {
    console.log('Query failed for some rates');
    return;
  }

  console.log(`${usd}, ${btc}`); // Success
}
  
getRates();