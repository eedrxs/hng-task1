const express = require("express")
const dotenv = require("dotenv")

dotenv.config()

const app = express()
const port = process.env.PORT

const slackUsername = 'eedris'
const backend = true
const age = 22
const bio = 'Aspiring fullstack developer.'

app.get("/", (req, res) => res.json({ slackUsername, backend, age, bio }))

app.listen(port, () => console.log(`[server]: Server is running at https://localhost:${port}`))
