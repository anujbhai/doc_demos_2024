const db = require("./db")

function delete_row() {
  const [id] = process.argv.slice(2)

  db.run(`DELETE FROM sharks WHERE id = ?`, [id], function (err) {
    if (err) {
      return console.error(err.message)
    }

    console.log(`Row with the ID ${id} deleted`)
  })
}

delete_row()

