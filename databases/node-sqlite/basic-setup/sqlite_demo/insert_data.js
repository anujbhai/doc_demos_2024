const db = require("./db")

function insert_row() {
  const [name, color, weight] = process.argv.slice(2)

  db.run(
    `INSERT INTO sharks (name, color, weight) VALUES (?, ?, ?)`,
    [name, color, weight],
    function (err) {
      if (err) {
        console.error(err.message)
      }

      console.log(`Inserted a row with the ID: ${this.lastID}`)
    }
  )
}

insert_row()

