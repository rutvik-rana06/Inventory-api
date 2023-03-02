const pkg = require("pg");
const {Client} = pkg;

const client = new Client({
    user: "postgres",
    host: "localhost",
    database: "InventoryManagement",
    password: "Rutvik@123",
    port: 5433,
})
client.connect()
console.log("Connected")

module.exports = client