const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=Brandon+Curington+safe', (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    let match = body.match(/<img class="tile--img__img" src="\/\/([^"]+)"/);
    if(match) console.log('https://' + match[1]);
    else console.log('https://i.kym-cdn.com/entries/icons/original/000/041/895/dreamybull.jpg');
  });
});
