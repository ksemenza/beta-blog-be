
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "first_name":"Kim",
          "last_name":"Semenza",
          "username":"ksemenza",
          "email":"ksemenza@gmail.com",
          "password":"123456"
      },
        {
          "first_name":"Colleen",
          "last_name":"Finn",
          "username":"cfinn",
          "email":"cfinn@gmail.com",
          "password":"123456"
      },
        {
          "first_name":"Dana",
          "last_name":"Robinson",
          "username":"drobinson",
          "email":"drobinson@gmail.com",
          "password":"123456"
      },
        {
          "first_name":"Shanna",
          "last_name":"Blaney",
          "username":"sblaney",
          "email":"sblaney@gmail.com",
          "password":"123456"
      }
      ]);
    });
};
