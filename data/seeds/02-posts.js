
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          "title":"Title By Kim",
           "content":"This is where my blog goes",
           "topic":"computer science",
           "user_id":"1"
       },
        {
          "title":"Title By Colleen",
           "content":"My boss is Crazy",
           "topic":"education",
           "user_id":"2"
       },
        {
          "title":"Title By Dana",
           "content":"Importing never ends",
           "topic":"business",
           "user_id":"3"
       },
        {
          "title":"Title By Shanna",
           "content":"Passive Aggressive Defense ",
           "topic":"psychology",
           "user_id":"4"
       }
      ]);
    });
};
