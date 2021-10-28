const cors = require("cors");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
const port = 8081;

// CITY
app.post("/api/city", (request, response) => {
  const region = request.body.region_id;
  const city = request.body.city;
  console.log(region);
  console.log(city);
  if (region == 2 || region == 3 || region == 4) {
    if (city == "мос") {
      response.status(200).send({
        result: true,
        city: ["г Иваново", "г Приволжск", "д Вшивково"]
      });
    } else {
      response.status(200).send({ result: false });
    }
  } else {
    response.status(200).send({ result: false });
  }
});

// REGISTRATION
app.post("/api/registration", (request, response) => {
  const name = request.body.name;
  const lastName = request.body.lastName;
  const middleName = request.body.middleName;
  const email = request.body.email;
  const phone = request.body.phone;
  const age = request.body.age;
  const region = request.body.region;
  const city = request.body.city;
  const rules = request.body.rules;
  const politic = request.body.politic;

  console.log("++++++++++++++++++++++++++++++++++++++++");
  console.log(request.body);
  console.log(name);
  console.log(lastName);
  console.log(middleName);
  console.log(email);
  console.log(phone);
  console.log(age);
  console.log(region);
  console.log(city);
  console.log(rules);
  console.log(politic);

  if (
    name &&
    lastName &&
    middleName &&
    email &&
    phone &&
    age &&
    region &&
    city &&
    rules &&
    politic
  ) {
    // response.status(200).send({ status: true });
    response.status(200).send({ status: false, error: ["end_registred"] });
  }
});

// RECOVERY
app.post("/api/recovery", (request, response) => {
  const email = request.body.email;
  console.log(email);

  if (email === "test@mail.com") {
    response.status(200).send({ result: true });
  } else {
    response.status(200).send({ result: false, error: "email not found" });
    // response.status(200).send({ result: false, error: "limit send password" });
  }
});

// LOGIN
app.post("/api/login", (request, response) => {
  const email = request.body.email;
  const passw = request.body.passw;
  console.log(email);
  console.log(passw);

  if (email === "test@mail.com" && passw === "123456") {
    response.status(200).send({ result: true });
  } else {
    // response.status(200).send({ result: false, error: "no_user" });
    // response.status(200).send({ result: false, error: "user_block" });
    response.status(200).send({ result: false, error: "email_validate" });
  }
});

// CONFIRM
app.post("/api/confirm", (request, response) => {
  const email = request.body.email;
  console.log(email);

  if (email === "test@mail.com") {
    response.status(200).send({ result: true });
  } else {
    response.status(200).send({ result: false, error: "email confirmed" });
    // response.status(200).send({ result: false, error: "email not found" });
    // response.status(200).send({ result: false, error: "time_limit" });
  }
});

// HAND
app.post("/api/hand", (request, response) => {
  const fn = request.body.fn;
  const fd = request.body.fd;
  const fp = request.body.fp;
  const date = request.body.date;
  const time = request.body.time;
  const summ = request.body.summ;

  console.log(fn);
  console.log(fd);
  console.log(fp);
  console.log(date);
  console.log(time);
  console.log(summ);

  if (fn === "12345" && fd && fp && date && time && summ) {
    response.status(200).send({ result: true });
  } else {
    response.status(200).send({ result: false, error: "email confirmed" });
    // response.status(200).send({ result: false, error: "email not found" });
    // response.status(200).send({ result: false, error: "time_limit" });
  }
});

// FEEDBACK
app.post("/api/feedback", (request, response) => {
  const name = request.body.name;
  const email = request.body.email;
  const message = request.body.message;

  console.log(name);
  console.log(email);
  console.log(message);

  if (name && email && message) {
    response.status(200).send({ result: true });
  } else {
    response.status(200).send({ result: false, error: "email confirmed" });
    // response.status(200).send({ result: false, error: "email not found" });
    // response.status(200).send({ result: false, error: "time_limit" });
  }
});

app.listen(port, () => {
  console.log("We are live on " + port);
});
