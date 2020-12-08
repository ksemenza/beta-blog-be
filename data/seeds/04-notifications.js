
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('notifications').del()
    .then(function () {
      // Inserts seed entries
      return knex('notifications').insert([
        {
          "reaction":"Likes",
          "comment_id":"1"
      },
        {
          "reaction":"Favorite",
          "comment_id":"1"
      },
        {
          "reaction":"Share",
          "comment_id":"1"
      },
        {
          "reaction":"Dislike",
          "comment_id":"1"
      },
        {
          "reaction":"Likes",
          "comment_id":"3"
      },
        {
          "reaction":"Favorite",
          "comment_id":"3"
      },
        {
          "reaction":"Share",
          "comment_id":"3"
      },
        {
          "reaction":"Dislike",
          "comment_id":"3"
      },
        {
          "reaction":"Likes",
          "comment_id":"5"
      },
        {
          "reaction":"Favorite",
          "comment_id":"5"
      },
        {
          "reaction":"Share",
          "comment_id":"5"
      },
        {
          "reaction":"Dislike",
          "comment_id":"5"
      },
        {
          "reaction":"Likes",
          "comment_id":"7"
      },
        {
          "reaction":"Favorite",
          "comment_id":"7"
      },
        {
          "reaction":"Share",
          "comment_id":"7"
      },
        {
          "reaction":"Dislike",
          "comment_id":"7"
      },
      ]);
    });
};
