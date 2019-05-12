const theHtmlTemplate = `
<!DOCTYPE html>
<html>
  <head>
    <title> Awesome SSR Web App </title>
  </head>
  <body>
    <div id="content">{{{content}}}</div>
    <script src="/app.js" charset="utf-8"></script>
    <script src="/vendor.js" charset="utf-8"></script>
  </body>
</html>
`;

export default theHtmlTemplate;
