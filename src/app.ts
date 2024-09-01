import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes';
import { connectDB } from './utils/database';

dotenv.config();

const app = express();
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Mount the API routes
app.use('/api', bookRoutes);

// Serve HTML files for different features
app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/borrow', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'borrow.html'));
});

app.get('/return', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'return.html'));
});

app.get('/available', (_req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'available.html'));
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

startServer();
