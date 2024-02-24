import client from "./client.js";

const getVal = async (key) => {
  const res = await client.get(key);
  console.log("res -> ", res);
};

const setVal = async (key, val) => {
  const res = await client.set(key, val);
  console.log(`successfully set the value of ${key} to ${val}`);
};

const expireKey = async (key, sec) => {
  const res = await client.expire(key, sec);
  console.log("====================================");
  console.log(`wait for ${sec} seconds`);
  console.log("====================================");
};




