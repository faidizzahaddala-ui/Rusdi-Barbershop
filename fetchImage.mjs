import https from 'https';
https.get('https://html.duckduckgo.com/html/?q=Brandon+Curington', res => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => {
    let m = body.match(/src="\/\/([^"]+)"/);
    if(m) console.log('https://' + m[1]);
    else console.log('not found');
  });
});
