const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const {renderToString} = require('react-dom/server')
const {SheetsRegistry} = require('react-jss/lib/jss');
const JssProvider = require('react-jss/lib/JssProvider');
const {create} = require('jss');
const preset =  require ('jss-preset-default');
// import rtl from 'jss-rtl'; // in-case you're supporting rtl
const {MuiThemeProvider} = require('material-ui/styles');
const {createMuiTheme} = require('material-ui/styles');
const createGenerateClassName = require('material-ui/styles/createGenerateClassName');
const {green} = require('material-ui/colors');

function handleRender(req, res) {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Create a theme instance.
  const theme = createMuiTheme({
    palette: {
      primary: green,
      accent: green,
      type: 'light',
    },
  });

  // Configure JSS
  const jss = create(preset());
  // const jss = create({ plugins: [...preset().plugins, rtl()] }); // in-case you're supporting rtl

  jss.options.createGenerateClassName = createGenerateClassName;

  // Render the component to a string.
  const html = renderToString(
  `<JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <App />
      </MuiThemeProvider>
    </JssProvider>`
  )

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString()

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css))
}


  function renderFullPage(html, css) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Material-UI</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <style id="jss-server-side">${css}</style>
        </body>
      </html>
    `;
  }

app.prepare()
.then(() => {
  const server = express();

  server.use(handleRender);

  server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
