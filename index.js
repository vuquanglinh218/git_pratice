const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded())


app.get("/", (req, res) => {

})

app.listen(3000, () => {
  console.log("server is running on port 3000")
})