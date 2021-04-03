//SAMPLE API ENDPOINT FOR APPOINTMENT "POST"

export default (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const method = req.method;
  console.log(method + " FROM " + ip);
  if (method === "POST") {
    const body = req.body;
    console.log(body);

    res.status(201).json(body); //success
    // res.status(404).send(); //simulate Not Found
    // res.status(502).send(); //simulate Bad Gateway
  } else {
    res.status(404).send("Page Not Found");
  }
};
