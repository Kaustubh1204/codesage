import express from "express"
import repoRoutes from "./routes/repoRoutes.js"

const app = express()

app.use(express.json())

// routes
app.use("/repo", repoRoutes)

app.get("/", (req, res) => {
  res.send("CodeSage AI running")
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})