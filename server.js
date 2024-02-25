import express from "express";
import axios from "axios";
import client from "./client.js";

const app = new express();

const port = 3000;

app.get("/", async (req, res) => {
  const cachedData = await client.get("data");
  if (cachedData)
    return res.json({ data: JSON.parse(cachedData), isCached: true });
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  await client.set("data", JSON.stringify(data));
  // await client.expire("data");
  return res.json(data);
});

app.listen(port, () => {
  console.log("server listening on port", port);
});
