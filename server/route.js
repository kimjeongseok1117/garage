const express = require("express");
const router = express.Router();
const controller = require("./controller");

const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: "./public/images/",
  filename: (req, file, callback) => {
    callback(null, "imgfile" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});

// 상품 페이지 관련 라우트
router.get("/sales/items", controller.sales.items);

router.post("/sales/detail", controller.sales.detail);

router.post("/sales/image", upload.single("img"), (req, res, next) => {
  console.log(req.file);
  res.send({
    fileName: req.file.filename,
  });
});

router.post("/sales/write", controller.sales.write);

// 로그인 페이지 라우트
router.post("/users/user", controller.users.user);

module.exports = router;
