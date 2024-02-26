import express from "express";
import axios from "axios";
import client from "./client.js";
import NodeCache from 'node-cache'

const myCache = new NodeCache();

const app = new express();

const port = 3000;

app.get("/", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return res.json(data);
});

app.get("/cache", async (req, res) => {
  const cachedData = await client.get("data");
  if (cachedData)
    return res.json({ isCached: true, data: JSON.parse(cachedData) });
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  await client.set("data", JSON.stringify(data));
  // await client.expire("data");
  return res.json(data);
});

app.get("/node_cache", async (req, res) => {
  const cachedData = await myCache.get("data");
  if (cachedData)
    return res.json({ nodeCache: true, data: JSON.parse(cachedData) });
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  await myCache.set("data", JSON.stringify(data));
  // await client.expire("data");
  return res.json(data);
});

app.listen(port, () => {
  console.log("server listening on port", port);
});
