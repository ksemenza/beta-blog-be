
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {
          "reaction":"Likes",
          "comment_id":"1"
      }
      ]);
    });
};
