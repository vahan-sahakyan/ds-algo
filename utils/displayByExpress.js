/**
 *
 * @param {object} objToDisplay
 * An object you want to be displayed formatted in the browser
 * @param {number} PORT
 * The PORT for Express to listen on, default is 3000
 * @param {number} INDENT_SIZE
 * The number of spaces for JSON indentation, default is 2
 */
module.exports = function displayByExpress(objToDisplay, PORT = 3000, INDENT_SIZE = 2) {
  const express = require('express');
  const app = express();
  const filename = process.argv[1].split('/').at(-1);
  const objectStr = JSON.stringify(objToDisplay, undefined, INDENT_SIZE);
  app.get('/', (req, res) => {
    res.send(`
      <html><head><title>${filename}</title></head>
      <pre>
<strong class="filename">${filename}</strong>
${objectStr.replace(/"(\w+)": \{?(\w*)(\,)?/g, (m, ...args) =>
  m.includes('{')
    ? //
      `<strong class="prior">${args[0]}</strong>: {`
    : `<strong>${args[0]}</strong>: <span class="${args[1].includes('null') ? 'null' : ''}">${args[1]}</span>${
        args[2] ? ',' : ''
      }`
)}
      </pre>
      <style>
      pre{
        // font-family: 'system-ui';
        // letter-spacing: 3;
      }
        body {
          background: #202124;
          color: #9da3a9;
          font-size: 1.2rem;
        }
        strong {
          color:#5eb0d7;
          color: #81878b;
        }
        .filename {
          color: #81878b;
          color: #a184dd;
        }
        .prior {
          color: #37cec3;
          color:#5eb0d7;
        }
        span {
          color: #a184dd;
        }
        span.null {
          color: #61676b;
        }
      </style>
      </html>
    `);
  });
  app.listen(PORT, (req, res) => {
    console.log('\n  CTRL + Click 🟢\x1b[1;34m http://localhost:' + PORT + '/\x1b[0m\n');
  });
};
