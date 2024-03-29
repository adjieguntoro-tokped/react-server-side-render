import express from 'express';
import compression from 'compression';
import renderer from './renderer';

const app = express();

app.use(compression());
app.use(express.static('public'));

app.use(renderer);

const port = process.env.PORT || 3030;

app.listen(port, function listenHandler() {
  console.info(`Running on port ${port}`);
});
