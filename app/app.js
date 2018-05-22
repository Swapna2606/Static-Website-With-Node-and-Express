var express = require('express');
var app = express();
var dataFile = require('./data/data.json');

app.set('port',process.env.PORT || 3000);
app.set('appData' , dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('./public'))
app.use(require('./routes/index.js'));
app.use(require('./routes/speakers.js'));



app.listen(app.get('port'));
