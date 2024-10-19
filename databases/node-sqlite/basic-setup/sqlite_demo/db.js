const fs = require("fs")
const sqlite3 = require("sqlite3").verbose()
const filepath = "./fish.db"

function create_db_connection() {
  if (fs.existsSync(filepath)) {
    console.log("Connection already established with SQLite database.")

    return new sqlite3.Database(filepath)
  } else {
    const db = new sqlite3.Database(filepath, (err) => {
      if (err) {
        return console.error(err.message)
      }

      create_table(db)
    })

    console.log("Connection successfully established with SQLite database.")

    return db
  }
}

function create_table(db) {
  db.exec(`
  CREATE TABLE sharks
  (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    color VARCHAR(50) NOT NULL,
    weight INTEGER NOT NULL
  )
  `)
}

module.exports = create_db_connection()

