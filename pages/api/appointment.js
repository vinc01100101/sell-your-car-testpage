//SAMPLE API USED IN APPOINTMENT CONFIRMATION FORM

export default (req, res) => {
  console.log(req.method);
  if (req.method === "POST") {
    res.json(req.body);
  } else {
    res.status(404).send("Page Not Found");
  }
};
