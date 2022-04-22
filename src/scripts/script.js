export async function fetchFromAPI() {
  const response = await fetch(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json',
  );

  const data = await response.json();

  const rates = data.map((item) => {
    return {code: item.cc, rate: item.rate}
  });

  return rates;
};


// functions for finding rate that needed
function directRate(rates, curr) {
  const rate = rates.find((rate) => {
    return rate.code === curr;
  });

  return rate.rate;
};

function reverseRate(rates, curr) {
  const rate = rates.find((rate) => {
    return rate.code === curr;
  });
  console.log(rate);
  return 1 / rate.rate;
};

function complexRate(rates, from, to) {
  const fromRate = directRate(rates, from);
  const toRate = directRate(rates, to);

  return fromRate / toRate;
};

// // main rate function
export function getRate(rates, from, to) {
  console.log(from+" "+to);
  if (from === to) {
    return 1;
  } else if (to === "UAH") {
    return directRate(rates, from);
  } else if (from === "UAH") {
    return reverseRate(rates, to);
  } else {
    return complexRate(rates, from, to);
  }
};

export default fetchFromAPI;
