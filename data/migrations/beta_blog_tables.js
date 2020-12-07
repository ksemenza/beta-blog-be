
exports.up = function(knex, Promise) {
    return   knex.schema.createTable('users', tbl => {
        tbl.increments('id').index()
        tbl.string('first_name', 255).notNullable();
        tbl.string('last_name', 255).notNullable();
        tbl.string('username', 255).notNullable().unique();
        tbl.string('email', 255).notNullable().unique();
        tbl.string('password', 255).notNullable()       
    })

      .createTable('posts', tbl => {
        tbl.increments('id').index()
        // tbl.timestamp('created_at').defaultTo(knex.fn.now()) 
        tbl.string('title', 255).notNullable()
        tbl.string('topic', 255)
        tbl.string('content').notNullable()
        tbl.string('user_id').unsigned().notNullable()
        .references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')

        
    })

    .createTable('comments', tbl => {
        tbl.increments()
        tbl.string('commenter').notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 
        tbl.string('comment').notNullable()
        tbl.foreign('commenter').references('user_id').inTable('users')
        tbl.string('post_id').unsigned().notNullable()
        .references('id').inTable('posts').onUpdate('CASCADE').onDelete('RESTRICT')
      

        

    })
    .createTable('notifications', tbl => {
        tbl.increments()
        tbl.string('user').notNullable()
        tbl.string('created_by').notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 
        tbl.string('reaction').notNullable()
        tbl.foreign('user').references('author').inTable('posts')
        tbl.foreign('created_by').references('commenter').inTable('comments')
        tbl.string('post_id').unsigned().notNullable()
        .references('id').inTable('posts').onUpdate('CASCADE').onDelete('RESTRICT')
       
        

    })
  
};

exports.down = function(knex, Promise) {
    return knex.schema
     .dropTableIfExists('users')
     .dropTableIfExists('posts')
     .dropTableIfExists('comments')
     .dropTableIfExists('notifications')

};

