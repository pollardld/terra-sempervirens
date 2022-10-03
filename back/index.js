import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/treeRoutes.js';
import citizenRoutes from './routes/citizenRoutes.js';

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

// CORS setup
app.use(cors());

// URL routes
routes(app);
citizenRoutes(app);

app.get('/', (req, res) => {
    res.send(`Hello World! ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
