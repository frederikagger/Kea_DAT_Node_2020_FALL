const router = require('express').Router();

const crypto = require('crypto');

const uploads = [];

router.get("/uploads/:id", (req, res) => {
    const foundUpload = uploads.find(upload => upload.id === req.params.id);
    return res.send({ data: foundUpload });
});

router.post("/uploads", (req, res) => {
    const id = crypto.randomBytes(18).toString("hex");
    uploads.push({ ...req.body, id });
    return res.send({ id });
});

module.exports = router;
