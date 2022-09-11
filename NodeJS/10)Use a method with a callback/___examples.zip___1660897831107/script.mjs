import { writeFile } from "node:fs";

writeFile("message.txt", "this is content of message.txt", (error) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log("The file has been saved!");
});
