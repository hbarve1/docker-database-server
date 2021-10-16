/** @format */

const redis = require("redis");
const client = redis.createClient({
  host: "172.105.48.158",
});

client.on("error", function (error) {
  console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);
