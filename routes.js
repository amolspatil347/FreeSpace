module.exports = function(app) {

    try {

        const stock = require('./controllers/stock.js');
        app.post('/api/login', stock.login);
        app.get('/api/stock', stock.login);
        app.put('/api/stock', stock.updateStocks);


    } catch (e) {
        console.log('error in routes.js--->>', e);
    }
};