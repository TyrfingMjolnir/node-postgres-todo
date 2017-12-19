const { Pool } = require('pg')

const pool = new Pool({
  host:     'localhost',
  port:      5432,
  database: 'todo',
  user:     'user',
  password: 'secretpassword',
})

pool.query( 'CREATE TABLE items( id SERIAL PRIMARY KEY, text TEXT not null, complete BOOLEAN )', ( err, res ) => {
  console.log( err, res )
  pool.end();
})
