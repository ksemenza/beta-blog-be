
exports.up = function(knex, Promise) {
    return   knex.schema
    
    /**USERS Table Columns
     *  user_id 
     *  first_name 
     *  last_name 
     *  username 
     *  email 
     *  password
     */
    .createTable('users', tbl => {
        tbl.increments('user_id').index()
        tbl.string('first_name', 255).notNullable();
        tbl.string('last_name', 255).notNullable();
        tbl.string('username', 255).notNullable().unique();
        tbl.string('email', 255).notNullable().unique();
        tbl.string('password', 255).notNullable()       
    })

      /**POSTS Table Column
       *    post_id 
       *    created_at 
       *    author -> username in users 
       *    title 
       *    topic 
       *    content 
       *    Ref = user_id in users
       */
      .createTable('posts', tbl => {
        tbl.integer('post_id').index()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 
        tbl.integer('author').unsigned().notNullable();
        tbl.string('title', 255).notNullable()
        tbl.string('topic', 255)
        tbl.string('content').notNullable()
        tbl.foreign('author').references('username').inTable('users')
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id').inTable('users').onUpdate('CASCADE').onDelete('RESTRICT')
    })

    /* COMMENTS Table Columns
        commenter
        create_at 
        comment 
        Ref = post_id
        Foreign = commenter -> user_id in users Table 
    */
    .createTable('comments', tbl => {
        tbl.increments();
        tbl.string('commenter').notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 
        tbl.string('comment').notNullable()
        tbl.foreign('commenter').references('username').inTable('users')
        tbl.string('name', 255).notNullable().index()
        tbl.integer('post_id')
        .unsigned()
        .notNullable()
        .references('post_id').inTable('posts').onUpdate('CASCADE').onDelete('RESTRICT')
    })

    /**NOTIFICATION Table Columns
     *  user -> author in posts 
     *  created_at
     *  reaction
     *  created_by -> commenter in comments table 
     *  Ref = post_id in posts table
     */
    .createTable('notifications', tbl => {
        tbl.increments();
        tbl.string('user').notNullable()
        tbl.string('created_by').notNullable()
        tbl.timestamp('created_at').defaultTo(knex.fn.now()) 
        tbl.string('reaction').notNullable()
        tbl.string('name', 255).notNullable().index()
        tbl.integer('post_id')
        .unsigned()
        .notNullable()
        .references('post_id').inTable('posts').onUpdate('CASCADE').onDelete('RESTRICT')
        tbl.foreign('user').references('author').inTable('posts')
        tbl.foreign('created_by').references('commenter').inTable('comments')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema
     .dropTableIfExists('users')
     .dropTableIfExists('posts')
     .dropTableIfExists('comments')
     .dropTableIfExists('notifications')

};

