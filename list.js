import client from "./client.js";

const pushToList = async (list, data, n = 0) => {
  // LPUSH adds a new element to the head of a list; RPUSH adds to the tail.
  if (n === 0) {
    const res = await client.lpush(list, data);
  } else {
    const res = await client.rpush(list, data);
  }

  console.log("Push to list");
};

const getFromList = async (list) => {
  const res = await client.lrange(list, 0, -1);
  console.log("res = " + res);
};

const delFromList = async (list, n = 0) => {
  if (!n) {
    const res = await client.lpop(list);
    console.log("popped from left = " + res);
  } else {
    const res = await client.rpop(list);
    console.log("popped from right = " + res);
  }
};

const deleteList = async (list) => {
  const res = await client.del(list);
  console.log(res);
  console.log(`delete the list ${list} successfully`);
};

const list = "alpha";

deleteList(list);
getFromList(list);

delFromList(list);
