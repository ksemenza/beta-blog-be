
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          "comment":"Computers are Cool",
          "post_id":"1"
      }
      ]);
    });
};
