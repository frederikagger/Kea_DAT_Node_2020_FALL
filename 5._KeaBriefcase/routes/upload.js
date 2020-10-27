const router = require('express').Router();

const crypto = require('crypto');

const uploads = [];

router.post("/form", (req, res) => {
    const id = crypto.randomBytes(18).toString("hex");
    uploads.push({ ...req.body, id });
    console.log(uploads);
    return res.send({ id });
});

module.exports = router;
