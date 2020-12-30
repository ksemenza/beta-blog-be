
exports.up = function(knex, Promise) {
    return   knex.schema
    
    .createTable('users', tbl => {
        tbl.increments('id').primary().unique()
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.timestamp('updated_at')
        tbl.string('first_name', 255).notNullable();
        tbl.string('last_name', 255).notNullable();
        tbl.string('username', 255).notNullable().unique();
        tbl.string('email', 255).notNullable().unique();
        tbl.string('password', 255).notNullable()  
             
    })

      .createTable('posts', tbl => {
        tbl.increments('id').primary().unique()
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.timestamp('updated_at')
        tbl.string('author').notNullable()
        tbl.string('title', 255).notNullable()
        tbl.string('content').notNullable()
        tbl.string('topic', 255)
          .references('id').inTable('topics').onUpdate('CASCADE')
        tbl.string('user_id').unsigned().notNullable()
          .references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
    })

    .createTable('comments', tbl => {
        tbl.increments('id').primary().unique()
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.timestamp('updated_at')
        tbl.string('author').notNullable()
        tbl.string('comment').notNullable()
        tbl.string('post_id').unsigned().notNullable()
        .references('id').inTable('posts').onUpdate('CASCADE').onDelete('CASCADE')
    })
        

    .createTable('notifications', tbl => {
      tbl.increments().index()
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.timestamp('updated_at')
        tbl.integer('likes').unsigned()
        tbl.integer('dislikes').unsigned()
        tbl.integer('love').unsigned()
        tbl.integer('funny').unsigned()
        tbl.integer('favorite').unsigned()
        tbl.integer('flag').unsigned()
      
      tbl.string('user_id')
        .references('id').inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        
        tbl.string('post_id').unsigned()
          .references('id').inTable('comments').onUpdate('CASCADE').onDelete('CASCADE')
        tbl.string('comment_id').unsigned()
          .references('id').inTable('comments').onUpdate('CASCADE').onDelete('CASCADE')
    })
  
      .createTable('topics', tbl => {
        tbl.increments('id').index().unique()
        tbl.string('subject').notNullable()
        tbl.string('post_id').unsigned()
          .references('id').inTable('posts').onUpdate('CASCADE').onDelete('CASCADE')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
     .dropTableIfExists('users')
     .dropTableIfExists('posts')
     .dropTableIfExists('comments')
     .dropTableIfExists('notifications')
     .dropTableIfExists('topics')

};

