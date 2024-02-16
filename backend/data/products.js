const fs = require("node:fs/promises");

async function readData() {
  const data = await fs.readFile("products.json", "utf8");
  return JSON.parse(data);
}

async function getAll() {
  const storedData = await readData();
  if (!storedData.products) {
    throw new Error("Products were not found");
  }
  return storedData.products;
}

exports.getAll = getAll;
