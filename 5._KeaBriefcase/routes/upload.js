const router = require('express').Router();

router.post("/form", (req, res) => {
    return res.send({ data: req.body });
});

module.exports = router;
