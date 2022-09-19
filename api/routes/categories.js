const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  try {
    // await Promise.all
    Category.insertMany(
      req.body.map((category, idx) => ({ name: category })),
      (err) => {
        if(err) return err
      }
    );
   

    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
