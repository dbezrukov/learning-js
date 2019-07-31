// Quering currency rates in parallel

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

// Running async tasks in parallel using Promise.All
async function getRates() {
  const rates = await Promise.all([getUSD(), getBTC()]);
  return rates;
}

const rates = await getRates(); // after 3 (!) sec
console.log(rates);