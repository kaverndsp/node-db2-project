
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();

      tbl.string('vin', 255).notNullable().unique().index();
      tbl.string('make', 80).notNullable();
      tbl.string('model', 80).notNullable();
      tbl.integer('mileage').notNullable();
      tbl.string('transmission', 80).notNullable();
      tbl.string('titleStatus', 80).notNullable();

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
