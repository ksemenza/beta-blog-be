
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          "title":"1 Title By Kim",
           "content":"This is where my blog goes",
           "topic":"computer science",
           "user_id":"1"
       },
        {
          "title":"New Title By Kim",
           "content":"This is where the details are",
           "topic":"design",
           "user_id":"1"
        },
        {
          "title":"Title By Colleen",
           "content":"My boss is Crazy",
           "topic":"education",
           "user_id":"2"
       },
        {
          "title":"New Title By Colleen",
           "content":"Poop in my shoe",
           "topic":"House and Garden",
           "user_id":"2"
       },
        {
          "title":"New Title By Dana",
           "content":"I love my family",
           "topic":"Family",
           "user_id":"3"
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
       },
        {
          "title":"New Title By Shanna",
           "content":"I love gardening",
           "topic":"landscaping",
           "user_id":"4"
       }
      ]);
    });
};
