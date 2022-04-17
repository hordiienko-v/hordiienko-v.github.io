async function fetchRates() {
  const response = await fetch(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json',
  );

  const rates = await response.json();
  return rates;
};

// functions for finding rate that needed
function directRate(curr) {
  const rate = rates.find((rate) => {
    return rate.cc === curr;
  });

  return rate.rate;
};

function reverseRate(curr) {
  const rate = rates.find((rate) => {
    return rate.cc === curr;
  });

  return 1 / rate.rate;
};

function complexRate(from, to) {
  const fromRate = directRate(from);
  const toRate = directRate(to);

  return fromRate / toRate;
};

// main rate function
function getRate(from, to) {
  if (from === to) {
    return 1;
  } else if (to === "UAH") {
    return directRate(from);
  } else if (from === "UAH") {
    return reverseRate(to);
  } else {
    return complexRate(from, to);
  }
};
