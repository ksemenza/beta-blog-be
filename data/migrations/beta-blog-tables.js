
exports.up = function(knex, Promise) {
    return   knex.schema.createTable('users', tbl => {
        tbl.uuid('user_id').primary()
        tbl.string('first_name', 255).notNullable();
        tbl.string('last_name', 255).notNullable();
        tbl.string('username', 255).notNullable().unique();
          tbl.string('email', 255).notNullable().unique();
          tbl.string('password', 255).notNullable()       
          tbl.timestamp('created_at').defaultTo(knex.fn.now()) 

          
      })

      .createTable('posts', tbl => {
        tbl.integer('post_id').index()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 

        tbl.integer('author').unsigned().notNullable();
        tbl.string('title', 255).notNullable()
        tbl.string('topic', 255)
        tbl.string('content').notNullable()
        tbl.foreign('author').references('user_id').inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');

        
    })

    .createTable('comments', tbl => {
        tbl.string('commenter').notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 

        tbl.string('comment').notNullable()
        .references('post_id').inTable('post').onUpdate('CASCADE').onDelete('CASCADE')
        tbl.foreign('commenter').references('username').inTable('users')

        

    })
    .createTable('notifications', tbl => {
        tbl.string('user').notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 

        tbl.string('reaction').notNullable()
        .references('post_id').inTable('post').onUpdate('CASCADE').onDelete('CASCADE')
        tbl.foreign('user').references('username').inTable('users')
        

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
     .dropTableIfExists('users')
     .dropTableIfExists('posts')
     .dropTableIfExists('comments')
     .dropTableIfExists('notifications')

};

