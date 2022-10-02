import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/treeRoutes.js';

const app = express();
const PORT = 3300;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/treesDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// URL routes
routes(app);

app.get('/', (req, res) => {
    res.send(`Hello World! ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
