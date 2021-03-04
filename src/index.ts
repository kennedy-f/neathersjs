import app from './app';
import configuration from './config'; 

const config = configuration();
const server = app.listen(config.port);

app.get('/', (req, res) => {
  res.json({ version: process.env.npm_package_version });
});

server.on('listening', () => {
  console.log(
    'Go Shift Profiles service started on http://%s:%d',
    config.host,
    config.port,
  );
});
