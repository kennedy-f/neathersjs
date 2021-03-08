import App from './config/app';

const PORT: number | string = process.env.PORT || 3000;
const app = App;

const server = async () => {
  try {
    await app.listen(PORT, '0.0.0.0');
  } catch (e) {
    app.log.error(e);
    process.exit(1);
  }
};

server();
