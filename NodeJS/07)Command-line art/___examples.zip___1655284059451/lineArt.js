var figlet = require("figlet");

figlet.text(
  "Develhope!",
  {
    font: "3D diagonal",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 200,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.error("error");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
