const express = require("express");
const app = express();
const path = require("path");
const { seedDB, checkCredentials } = require("./database");

seedDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "./public")));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, "./index.html"));
});

app.post("/", (req, res) => {
  const { username, password } = req.body;
  // Check valid username and password
  checkCredentials(username, password).then((result) => {
    console.log("Result", result);
    if (result.success) {
      res
        .status(200)
        .setHeader("Content-Type", "text/html")
        .send(
          `<h1>
          ${result.details.name}'s Details
          </h1>
          <ul>
            ${createDetails(result.details)}
          </ul>`
        );
    } else {
      res.status(401).sendFile(path.resolve(__dirname, "./index.html"));
    }
  });
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send(
      "<h1>404 Page not found</h1><p>Please make yourself comfortable somewhere else.</p>"
    );
});

const port = app.listen(5000, () => console.log("App is listening..."));

function createDetails(data) {
  let details = "";
  for (const detail in data) {
    details += "<li><strong>" + detail + "</strong>: " + data[detail] + "</li>";
  }
  return details;
}
