const express = require('express');
const fetch   = require('node-fetch');
const app = express();
const port = process.env.PORT || 5007;
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, 'Home Page');
    data = data.replace(/\$OG_DESCRIPTION/g, "Home page description");
    result = data.replace(/\$OG_IMAGE/g, 'https://i.imgur.com/V7irMl8.png');
    response.send(result);
  });
});

app.get('/Publications/:category/:id', function(request, response) {
  const category = request.params.category;
  const id = request.params.id;
  let articleInfoJson={};
  console.log(id);
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://new.tyzhden.ua/api/publications/${id}`)
    .then(res => res.json())
    .then(json => {articleInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, articleInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, articleInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, articleInfoJson.tags);
    data = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/${articleInfoJson.journal.persistentname}/${id}`);
    result = data.replace(/\$OG_IMAGE/g, articleInfoJson.image1);

    response.send(result);
  });
  });
});
app.get('/Columns/:id', function(request, response) {

  const id = request.params.id;
  let articleInfoJson={};
  console.log(id);
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://new.tyzhden.ua/api/columns/${id}`)
    .then(res => res.json())
    .then(json => {columnInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, columnInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, columnInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, columnInfoJson.tags);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Columns/${id}`);
   

    response.send(result);
  });
  });
});
app.get('/News/:id', function(request, response) {
  
  const id = request.params.id;
  let newsInfoJson={};
  console.log(id);
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://new.tyzhden.ua/api/news/${id}`)
    .then(res => res.json())
    .then(json => {columnInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, newsInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, newsInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, newsInfoJson.tags);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/News/${id}`);
    

    response.send(result);
  });
  });
});
;


app.use(express.static(path.resolve(__dirname, './build')));



app.listen(port, () => console.log(`Listening on port ${port}`));
