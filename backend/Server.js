import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contactRoutes.js';

const PORT = 9000;
const app = express();

const corsOptions = {
    origin: [
        'https://windeepfinance.com',
        'https://www.windeepfinance.com',
        'https://test.windeepfinance.com',
        'http://localhost:3000',
        'http://localhost:9000'
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Disposition'],
    credentials: true,  
    preflightContinue: false,  
    optionsSuccessStatus: 204  
};

app.use(cors(corsOptions));

app.options('*', cors(corsOptions));

app.use((req, res, next) => {
    console.log('Incoming Request:', {
        origin: req.headers.origin,
        method: req.method,
        headers: req.headers,
    });
    next();
});


app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    console.log('Origin:', req.headers.origin);
    console.log('Headers:', req.headers);
    next();
});
app.use((req, res, next) => {
    console.log('CORS Debug:');
    console.log('Origin:', req.headers.origin);
    console.log('Method:', req.method);
    console.log('Headers:', req.headers);
    next();
});


app.use("/contact", contactRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
});
