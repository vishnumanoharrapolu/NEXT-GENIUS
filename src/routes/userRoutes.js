const express = require('express');
const verifyToken = require('../middleware/authMiddleware');
const router = express.Router();
const authorizeRoles = require('../middleware/roleMiddleware');
//only admin can acess this route
router.get("/administrator",verifyToken,authorizeRoles("Administartor"), (req, res) => {
    res.json({message:"Welcome Administrator "});
});

router.get("/Student",verifyToken,authorizeRoles("Student"), (req, res) => {
    res.json({message:"Welcome Student "});
});
router.get("/Teacher", verifyToken,authorizeRoles("Teacher"),(req, res) => {
    res.json({message:"Welcome  Teacher"});
});

module.exports = router;