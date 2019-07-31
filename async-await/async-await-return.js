// Quering currency rates

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

// Async function returns a promise
async function getRates() {
  let usd = await getUSD();
  let btc = await getBTC();

  return [usd, btc];
}

getRates().then(rates => console.log(rates)); // after 5 sec

const rates = await getRates(); // after 5 sec
console.log(rates);