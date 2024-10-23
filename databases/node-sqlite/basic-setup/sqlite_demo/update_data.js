const db = require("./db")

function update_row() {
  const [id, name] = process.argv.slice(2)

  db.run(
    `UPDATE sharks SET name = ? WHERE id = ?`,
    [name, id],
    function (err) {
      if (err) {
        console.error(err.message)
      }

      console.log(`Row ${id} has been updated`)
    }
  )
}
update_row()

