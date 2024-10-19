const db = require("./db")

function select_rows() {
  db.each(`SELECT * FROM sharks`, (err, row) => {
    if (err) {
      throw new Error(err.message)
    }

    console.log(row)
  })
}

select_rows()

