import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';
import App from '../client/App';
import template from './htmlTemplate';

const router = express.Router();

router.get("/", async (req, res) => {
  const hbsTemplate = hbs.compile(template);
  const reactComponent = renderToString(<App />);
  const finalHtml = hbsTemplate({ content: reactComponent });

  res.status(200).send(finalHtml);
});

export default router;
