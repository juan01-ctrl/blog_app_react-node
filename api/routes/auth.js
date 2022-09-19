const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt")


// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)

    const newUser = new User({
      username,
      email,
      password:hashPassword,
    });

    const user = await newUser.save();
    res.status(201).json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login

router.post("/login",async (req,res)=>{
  try {
   

    const user = await User.findOne({username:req.body.username})

     if(!user) return res.status(400).json("Invalid Credentials!")

    const validated = await bcrypt.compare(req.body.password, user.password)
    if(!validated) return res.status(400).json("Invalid Credentials!")

    const {password, ...others} = user._doc;
    res.status(200).json(others)
  } catch (err) {
    res.status(500).json(err);
  
  }
})



module.exports = router