const companies = [
  'Google',
  'Facebook',
  'Uber'
]

const [ firstCompany,, thirdCompany ] = companies; // Google, Uber

const [ firstCompany, ...restCompanies ] = companies; // Google, [Facebook, Uber]
