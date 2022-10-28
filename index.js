const express = require("express")
const dotenv = require("dotenv").config()

const app = express()
const port = process.env.PORT || 3000

const slackUsername = 'eedris'
const backend = true
const age = 22
const bio = 'Aspiring fullstack developer.'

app.get("/", (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.status(200).json({ slackUsername, backend, age, bio })
})

app.listen(port, () => console.log(`[server]: Server is running at https://localhost:${port}`))
