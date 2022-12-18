const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb+srv://finalP:ym9TsvaCQwzsuu17@cluster0.ywfj6da.mongodb.net/finalProject");
console.log("mongo");
}