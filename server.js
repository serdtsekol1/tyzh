const express = require('express');
const fetch   = require('node-fetch');
const app = express();
const port = process.env.PORT || 5000;
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
    data = data.replace(/\$OG_TITLE/g, `Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі`);
    data = data.replace(/\$OG_DESCRIPTION/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/`);
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
    .then(json => {newsInfoJson = json;

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
app.get('/Gallery/:id', function(request, response) {
  
  const id = request.params.id;
  let galleryInfoJson={};

  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://new.tyzhden.ua/api/galleries/${id}`)
    .then(res => res.json())
    .then(json => {galleryInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
  
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, galleryInfoJson.title);
    data = data.replace(/\$OG_DESCRIPTION/g, galleryInfoJson.abstract);
    data = data.replace(/\$OG_KEYWORDS/g, galleryInfoJson.tags);
    data = data.replace(/\$OG_IMAGE/g, galleryInfoJson.image1);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery/${id}`);
    

    response.send(result);
  });
  });
});
app.get('/Magazine/:id', function(request, response) {
  
  const id = request.params.id;
  let magazineInfoJson={};
  console.log(id);
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://new.tyzhden.ua/api/magazine/${id}`)
    .then(res => res.json())
    .then(json => {magazineInfoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
   
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, `Український тиждень № ${magazineInfoJson.localnum} (${magazineInfoJson.num})`);
    data = data.replace(/\$OG_DESCRIPTION/g, `Український тиждень № ${magazineInfoJson.localnum} (${magazineInfoJson.num})`);
    data = data.replace(/\$OG_KEYWORDS/g, `Український тиждень № ${magazineInfoJson.localnum} (${magazineInfoJson.num})`);
    data = data.replace(/\$OG_IMAGE/g, magazineInfoJson.image1);
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery/${id}`);
    

    response.send(result);
  });
  });
});
app.get('/Author/:id', function(request, response) {
  
  const id = request.params.id;
  let infoJson={};
  console.log(id);
  const filePath = path.resolve(__dirname, './build', 'index.html');
  fetch(`https://new.tyzhden.ua/api/authors/page/${id}`)
    .then(res => res.json())
    .then(json => {infoJson = json;

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, infoJson.fullname2ua);
    data = data.replace(/\$OG_DESCRIPTION/g, infoJson.fullname2ua);
    data = data.replace(/\$OG_KEYWORDS/g, infoJson.fullname2ua);
    data = data.replace(/\$OG_IMAGE/g, infoJson.image1url);
    
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Author/${id}`);
    

    response.send(result);
  });
  });
});
app.get('/Publications', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    
    result = data.replace(/\$CANONICAL/g, `https://new.tyzhden.ua/Publications`);
    

    response.send(result);
  });
});
app.get('/Publications/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    
    result = data.replace(/\$CANONICAL/g, `https://new.tyzhden.ua/Publications`);
    

    response.send(result);
  });
});
app.get('/Publications/:category', function(request, response) {
  const category = request.params.category;
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    
    result = data.replace(/\$CANONICAL/g, `https://new.tyzhden.ua/${category}`);
    

    response.send(result);
  });
});
app.get('/Publications/:category/page=:page', function(request, response) {
  
  const category = request.params.category;
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_DESCRIPTION/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Ексклюзивні статті зарубіжних партнерів, статті міжнародних експертів, ключові події в Європі, Росії, Америці, на Близькому Сході, новини в світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    
    result = data.replace(/\$CANONICAL/g, `https://new.tyzhden.ua/${category}`);
    

    response.send(result);
  });
});

app.get('/News/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, `Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі`);
    data = data.replace(/\$OG_DESCRIPTION/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/News`);
    response.send(result);
  });
});
app.get('/News', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, `Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі`);
    data = data.replace(/\$OG_DESCRIPTION/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_KEYWORDS/g, "Новини в Україні, економіка, політика, культура, новини в світі, об'єктивно та ексклюзивно про головні події в Україні та світі");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/News`);
    response.send(result);
  });
});
app.get('/Columns/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_DESCRIPTION/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_KEYWORDS/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Columns`);
    response.send(result);
  });
});
app.get('/Columns', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_DESCRIPTION/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_KEYWORDS/g, "Думки впливових людей, колонки закордонних експертів");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Columns`);
    response.send(result);
  });
});
app.get('/Gallery', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_DESCRIPTION/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_KEYWORDS/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery`);
    response.send(result);
  });
});
app.get('/Gallery/page=:page', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_DESCRIPTION/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_KEYWORDS/g, "Фоторепортажі, фотогалереї, фото дня, новини у фото, подорожі у фото");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Gallery`);
    response.send(result);
  });
});
app.get('/Magazines', function(request, response) {
  
 
  const filePath = path.resolve(__dirname, './build', 'index.html');

  // read in the index.html file
  fs.readFile(filePath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    console.log(articleInfoJson);
    // replace the special strings with server generated strings
    data = data.replace(/\$OG_TITLE/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_DESCRIPTION/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_KEYWORDS/g, "Випуски журналу &laquo;Український тиждень&raquo;, &laquo;Український тиждень&raquo; онлайн-версія, &laquo;Український тиждень&raquo; онлайн");
    data = data.replace(/\$OG_IMAGE/g, 'https://tyzhden.ua/main2/images/logo.jpg');
    result = data.replace(/\$CANONICAL/g, `https://tyzhden.ua/Magazines`);
    response.send(result);
  });
});


app.use(express.static(path.resolve(__dirname, './build')));



app.listen(port, () => console.log(`Listening on port ${port}`));
