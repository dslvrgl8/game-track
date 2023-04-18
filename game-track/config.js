
const DATABASE_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@sei.dwh9fqs.mongodb.net/gamesDB?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY

const JWT_KEY_SECRET = process.env.JWT_KEY_SECRET;

module.exports = { DATABASE_URL, PORT, JWT_KEY_SECRET, API_KEY };
//bc the key and value are the same