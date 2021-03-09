export default {
  mongoUrl:
    process.env.MONGO_URL ||
    'mongodb://goshift:banana@localhost:27027/UserData',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'teste',
};
