
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts')
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
             "author": "Kim",
          "created_at": "2018-12-10 17:28:54",
          "title":"1 Title By Kim",
           "content":"This is where my blog goes",
           "topic":"computer science",
           "user_id":"1"
           
       },
        {
          "author": "Kim",
          "created_at": "2018-10-10 17:28:54",
          "title":"New Title By Kim",
           "content":"This is where the details are",
           "topic":"design",
           "user_id":"1"
        },
        {
          "author": "Colleen",
          "created_at": "2020-12-10 17:15:54",
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
          "author": "Dana",
          "created_at": "2019-06-10 15:28:54",
          "title":"New Title By Dana",
           "content":"I love my family",
           "topic":"Family",
           "user_id":"3"
       },
        {
          "author": "Dana",
          "created_at": "2019-02-10 15:28:54",
          "title":"Title By Dana",
           "content":"Importing never ends",
           "topic":"business",
           "user_id":"3"
       },
        {
          "author": "Shanna",
          "created_at": "2020-02-10 01:28:54",
          "title":"Title By Shanna",
           "content":"Passive Aggressive Defense ",
           "topic":"psychology",
           "user_id":"4"
       },
        {
          "author": "Shanna",
          "created_at": "2020-02-08 01:28:54",
          "title":"New Title By Shanna",
           "content":"I love gardening",
           "topic":"landscaping",
           "user_id":"4"
       }
      ]);
    });
};
