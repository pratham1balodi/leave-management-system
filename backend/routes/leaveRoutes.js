import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ message: "Leaves route working" })
})

router.post("/", (req, res) => {
  res.json({ message: "Leave created" })
})

router.put("/:id", (req, res) => {
  res.json({ message: "Leave updated" })
})

export default router;