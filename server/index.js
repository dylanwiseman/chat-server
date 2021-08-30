const express = require("express");
const msgCtrl = require("./controllers/messages_controller");

const app = express();

app.use(express.json());
app.use(express.static(__dirname + "/../public/build"));

app.get("/api/messages", msgCtrl.read);
app.post("/api/messages", msgCtrl.create);
app.put("/api/messages/:id", msgCtrl.update);
app.delete("/api/messages/:id", msgCtrl.delete);

const port = 3001;

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
