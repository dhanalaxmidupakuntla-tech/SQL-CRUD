import dotenv from "dotenv";
dotenv.config();

const { default: app } = await import("./app.js");

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
