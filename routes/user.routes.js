const { Router } = require("express");
const mailer = require("../nodemailer");
const User = require("../models/User");

const router = Router();

router.post("/send", async (req, res) => {
  try {
    if (!req.body.firstname || !req.body.tel) {
      return res.status(400).json({ message: "Не все данные указаны" });
    }

    const { firstname, tel } = req.body;

    const user = new User({ firstname, tel });

    await user.save();

    const message = {
      to: "olegderyabin22@gmail.com, vassilyev.com@gmail.com", // list of receivers
      subject: "Новая заявка!!!", // Subject line
      text: `Данные человека
      
      Имя: ${firstname}
      Телефон: ${tel}
      Дата заявки: ${new Date().toLocaleDateString()}`, // plain text body
    };

    mailer(message);

    res.status(200).json({ message: "Заявка отправлена" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "что-то пошло не так" });
  }
});

module.exports = router;
