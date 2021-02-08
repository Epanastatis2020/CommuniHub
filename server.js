import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './routes/index.js';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5001;

// Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Bodyparser middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(express.static('public'));
// DB Config
const mongoURI = 'mongodb+srv://trilogy:trilogy@cluster0.u8m9s.mongodb.net/mernlogin?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || mongoURI, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log(err));

// Routes
app.use(routes);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
