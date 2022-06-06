const order = {
  customer: 'Pie Oss',
  address: 'Corso dei corsi',
  city: 'Tretre'
};

const city = order?.customer?.address?.city;

if (city !== undefined) {
  console.log('City is required');
} 

console.log(order?.customer?.address?.city);
console.log(order);
