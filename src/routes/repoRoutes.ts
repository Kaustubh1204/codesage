import express from "express"
import {connectRepo} from "../controllers/repoController.js"

const router = express.Router()

router.post("/connect",connectRepo)

export default router