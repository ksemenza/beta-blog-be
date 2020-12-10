
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        { "author":"Kim",
          "comment":"Computers are Cool",
          "post_id":"1"
      },
        {
          "author": "Colleen",
          "created_at": "2018-12-10 17:28:54",
          "comment":"Teaching is hard",
          "post_id":"3"
      },
        {
          "author": "Dana",
          "created_at": "2020-11-10 17:28:54",
          "comment":"Kids are wonderful",
          "post_id":"5"
      },
        {
           "author": "Shanna",
          "created_at": "2020-12-01 17:28:54",
          "comment":"DBT techniques",
          "post_id":"7"
      },
      ]);
    });
};
