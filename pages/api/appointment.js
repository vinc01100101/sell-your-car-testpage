//SAMPLE API USED IN APPOINTMENT CONFIRMATION FORM

export default (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const method = req.method;
  console.log(method + " FROM " + ip);
  if (method === "POST") {
    const body = req.body;

    // res.status(201).json(body);
    // res.status(404).json(body);
    res.status(502).json(body);
  } else {
    res.status(404).send("Page Not Found");
  }
};
