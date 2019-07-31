// Quering currency rates using ES8 async/await

function getUSD() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(65);
    }, 2000)
  })
}

function getBTC() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(65000);
    }, 3000)
  })
}

async function getRates() {
  let usd = await getUSD();
  let btc = await getBTC();
  console.log(`${usd}, ${btc}`);
}

getRates(); // after 5 sec