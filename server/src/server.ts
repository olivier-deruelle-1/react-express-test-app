import * as dotenv from 'dotenv';
import express from 'express'
import type { Request, Response } from 'express'
import cors from 'cors';
import type { CorsOptions } from 'cors';

const env = process.env.ENVIRONMENT  ?? 'dev';
console.log(`env: ${env}`);
console.log('Current directory: ' + process.cwd());

const configPath =  `./config/.env.${env}`; 
dotenv.config({ path: configPath });

const frontEndURL: string = process.env.FRONTEND_URL  ?? 'http://localhost:5000';
console.log('frontEndURL: ' + frontEndURL);

const corsOptions: CorsOptions = {
    origin: [frontEndURL],
};

const app = express(); 
app.use(cors(corsOptions));

// Convert port to a number, defaulting to 3001 if not specified
const port: number = parseInt(process.env.SERVER_PORT ?? '3000', 10);

interface Book {
    id: string;
    title: string;
}

// Use the interface to type the books array
const books: Book[] = [
    { id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p', title: '2001: A Space Odyssey' },
    { id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q', title: 'Rendezvous with Rama' },
    { id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r', title: 'The City and the Stars' },
];

// Type the Express request and response objects
app.get('/api/books', (req: Request, res: Response<Book[]>) => {
    // res.json is automatically aware that it is sending an array of Book objects
    res.json(books);
});

// --- Server Start ---
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
