
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {
          "comment":"Computers are Cool",
          "post_id":"1"
      },
        {
          "comment":"Teaching is hard",
          "post_id":"3"
      },
        {
          "comment":"Kids are wonderful",
          "post_id":"5"
      },
        {
          "comment":"DBT techniques",
          "post_id":"7"
      },
      ]);
    });
};
