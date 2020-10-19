const express = require('express');
const fetch   = require('node-fetch');
const app = express();
const port = process.env.PORT || 4999;  
const path = require('path');
const fs = require('fs')

app.get('/', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
   
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, `Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі`);
    data = data.replace(/\$OG_DESCRIPTION/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/`);
    response.send(result);
  });
});

app.get('/Publications', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
 
  
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Publications`);
    

    response.send(result);
  });
});
app.get('/Publications/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
  

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Publications`);
    

    response.send(result);
  });
} );
app.get('/Tag/:tag', function(request, response) {
  
  const tag = request.params.tag;
 
 
 const filePath = path.resolve(__dirname, './build', 'index.html');
 

 // read in the index.html file
 fs.readFile(filePath, 'utf8', function (err,data) {
  
  
   // replace the special strings with server generated strings
   data = data.replace(/\$OG_TITLE/g, `${tag}`);
   data = data.replace(/\$OG_DESCRIPTION/g, `Усі матеріали за тегом: ${tag}`);
   data = data.replace(/\$OG_KEYWORDS/g, `Усі матеріали за тегом: ${tag}`);
   data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
   data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
   data = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Tag/${tag}`);
   result = data

   response.send(result);

 });
});
app.get('/Columns/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
  
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_DESCRIPTION/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_KEYWORDS/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Columns`);
    response.send(result);
  });
});

app.get('/News/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, `Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі`);
    data = data.replace(/\$OG_DESCRIPTION/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/News`);
    response.send(result);
  });
});
app.get('/Magazines', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_DESCRIPTION/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_KEYWORDS/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Magazines`);
    response.send(result);
  });
});
app.get('/Magazines/:year', function(request, response) {
  const year = request.params.year;
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_DESCRIPTION/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_KEYWORDS/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Magazines/${year}`);
    response.send(result);
  });
});

app.get('/Columns', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
  
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_DESCRIPTION/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_KEYWORDS/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Columns`);
    response.send(result);
  });
});
app.get('/Gallery', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_DESCRIPTION/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_KEYWORDS/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery`);
    response.send(result);
  });
});
app.get('/Gallery/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
   
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_DESCRIPTION/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_KEYWORDS/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery`);
    response.send(result);
  });
});
app.get('/Columns/50/:id', function(request, response) {

  const id = request.params.id;
  let articleInfoJson={};

  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/columns/${id}`)
    .then(res => res.json())
    .then(json => {columnInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, columnInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, columnInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, columnInfoJson.tags);
    data = data.replace(/\$OG_IMAGE/g, columnInfoJson.author.image1url);
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Columns/50/${id}`);
   

    response.send(result);
  });
  });
});
app.get('/Columns/:id', function(request, response) {

  const id = request.params.id;
  let articleInfoJson={};

  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/columns/${id}`)
    .then(res => res.json())
    .then(json => {columnInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, columnInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, columnInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, columnInfoJson.tags);
    data = data.replace(/\$OG_IMAGE/g, columnInfoJson.author.image1url);
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Columns/50/${id}`);
   

    response.send(result);
  });
  });
});
app.get('/News/:id', function(request, response) {

    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;

    const id = request.params.id;
  let newsInfoJson={};

  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/news/${id}`)
    .then(res => res.json())
    .then(json => {newsInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {

      let dom = new JSDOM(`<!DOCTYPE html>`);
      let tmp = dom.window.document.createElement('div');
      tmp.innerHTML = newsInfoJson.content;
      let src=[],img = tmp.getElementsByTagName('img');
      if(img && img.length > 0) {
          for (let i = 0; i < img.length; i++) {
              src.push(img[i].src);
          }
      }
      newsImage = src[0]?src[0]:'https://tyzhden.ua/main2/images/logo2.jpg';


    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, newsInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, newsInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, newsInfoJson.tags);
    data = data.replace(/\$OG_IMAGE/g, newsImage);

    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/News/${id}`);
    

    response.send(result);
  });
  });
});
app.get('/Gallery/:id', function(request, response) {
  
  const id = request.params.id;
  let galleryInfoJson={};

  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/galleries/${id}`)
    .then(res => res.json())
    .then(json => {galleryInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
 
  
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, galleryInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, galleryInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, galleryInfoJson.tags);
    data = data.replace(/\$OG_IMAGE/g, galleryInfoJson.image1);
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery/${id}`);
    

    response.send(result);
  });
  });
});
app.get('/Magazine/:id', function(request, response) {
  
  const id = request.params.id;
  let magazineInfoJson={};
  
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/magazines/${id}`)
    .then(res => res.json())
    .then(json => {magazineInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
   
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, `Український тиждень № ${magazineInfoJson.localnum} (${magazineInfoJson.num})`);
    data = data.replace(/\$OG_DESCRIPTION/g, `Український тиждень № ${magazineInfoJson.localnum} (${magazineInfoJson.num})`);
    data = data.replace(/\$OG_KEYWORDS/g, `Український тиждень № ${magazineInfoJson.localnum} (${magazineInfoJson.num})`);
    data = data.replace(/\$OG_IMAGE/g, magazineInfoJson.image1);
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery/${id}`);
    

    response.send(result);
  });
  });
});

app.get('/Author/:id', function(request, response) {
  
  const id = request.params.id;
  let infoJson={};
 
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/authors/page/${id}`)
    .then(res => res.json())
    .then(json => {infoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, infoJson.fullname2ua);
    data = data.replace(/\$OG_DESCRIPTION/g, infoJson.fullname2ua);
    data = data.replace(/\$OG_KEYWORDS/g, infoJson.fullname2ua);
    data = data.replace(/\$OG_IMAGE/g, infoJson.image1url);
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Author/${id}`);
    

    response.send(result);
  });
  });
});

app.get('/Politics', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Politics`);
    

    response.send(result);
  });
});

app.get('/Economics', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Economics`);
    

    response.send(result);
  });
});

app.get('/World', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/World`);
    

    response.send(result);
  });
});

app.get('/Society', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Society`);
    

    response.send(result);
  });
});

app.get('/Culture', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Culture`);
    

    response.send(result);
  });
});


app.get('/History', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/History`);
    

    response.send(result);
  });
});


app.get('/Science', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Science`);
    

    response.send(result);
  });
});


app.get('/Pandemic', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Pandemic`);
    

    response.send(result);
  });
});


app.get('/Election', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Election`);
    

    response.send(result);
  });
});

app.get('/Publications/:category/:id', function(request, response) {
  const category = request.params.category;
  const id = request.params.id;
  let articleInfoJson={};
  
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/publications/${id}`)
    .then(res => res.json())
    .then(json => {articleInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
   
    
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, articleInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, articleInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, articleInfoJson.tags);
    data = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/${articleInfoJson.journal.persistentname}/${id}`);
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$OG_IMAGE/g, articleInfoJson.image1);

    response.send(result);
  });
  });
});

app.get('/Politics/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Politics`);
    

    response.send(result);
  });
});

app.get('/Economics/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Economics`);
    

    response.send(result);
  });
});

app.get('/World/page=:page', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/World`);
    

    response.send(result);
  });
});

app.get('/Society/page=:page', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Society`);
    

    response.send(result);
  });
});

app.get('/Culture/page=:page', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Culture`);
    

    response.send(result);
  });
});


app.get('/History/page=:page', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/History`);
    

    response.send(result);
  });
});


app.get('/Science/page=:page', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Science`);
    

    response.send(result);
  });
});


app.get('/Pandemic/page=:page', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Pandemic`);
    

    response.send(result);
  });
});


app.get('/Election/page:=page', function(request, response) {
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    

    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Election`);
    

    response.send(result);
  });
});

app.get('/PressReleases', function(request, response) {

  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {


    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_DESCRIPTION/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_KEYWORDS/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/PressReleases`);


    response.send(result);
  });
});

app.get('/PressReleases/page=:page', function(request, response) {


  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {


    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_DESCRIPTION/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_KEYWORDS/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_IMAGE/g, 'http://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/PressReleases`);


    response.send(result);
  });
});


app.get('/PressReleases/:id', function(request, response) {
  const filePath = path.resolve(__dirname, './build', 'index.html');
  const id = request.params.id;
  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {


    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_DESCRIPTION/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_KEYWORDS/g, "Прес-релізи - Український тиждень");
    data = data.replace(/\$OG_IMAGE/g, 'http://tyzhden.ua/main2/images/logo.jpg');
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/PressReleases/${id}`);
    response.send(result);
  });
});

app.get('/:category/:id', function(request, response) {
  const category = request.params.category;
  const id = request.params.id;
  let articleInfoJson={};

  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://tyzhden.ua/api/publications/${id}`)
    .then(res => res.json())
    .then(json => {articleInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {


    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, articleInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, articleInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, articleInfoJson.tags);
    data = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/${articleInfoJson.journal.persistentname}/${id}`);
    data = data.replace(/\$OG_URL/g, request.protocol + '://' + request.get('host') + request.originalUrl);
    result = data.replace(/\$OG_IMAGE/g, articleInfoJson.image1);

    response.send(result);
  });
  });
});


app.use(express.static(path.resolve(__dirname, './build')));



app.listen(port, () => console.log(`Listening on port ${port}`));
