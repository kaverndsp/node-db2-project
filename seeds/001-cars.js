
exports.seed = async function(knex) {
  const testData = [
    {vin: '1234567890', make: 'Volkswagen', model: 'Jetta', mileage: '60000', transmission: 'automatic', titleStatus: 'clean'},
    {vin: '0987654321', make: 'Porsche', model: 'Cayman', mileage: '10000', transmission: 'automatic', titleStatus: 'clean'},
    {vin: '5432167890', make: 'Audi', model: 'R8', mileage: '12000', transmission: 'automatic', titleStatus: 'clean'}
    ]
  
  await knex('cars').truncate();
       
  return knex('cars').insert(testData);
};
