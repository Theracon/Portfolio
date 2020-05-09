var express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.render('landing');
});

app.get('/samples', function(req, res) {
    res.render('index');
});

app.get('/samples/:id', function(req, res) {
    res.render('show');
});

app.listen(process.env.PORT, function() {
    console.log('Server started!');
});