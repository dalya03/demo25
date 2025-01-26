import express from 'express';
import HTTP_CODES from './utils/httpCodes.mjs';

const server = express();
const port = process.env.PORT || 3000;

// إعداد الخادم
server.set('port', port);
server.use(express.static('public'));

// دالة الجذر
server.get("/", (req, res) => {
    res.status(HTTP_CODES.SUCCESS.OK).send('Hello World').end();
});

// النقطة: /tmp/poem لإرجاع قصيدة
server.get('/tmp/poem', (req, res) => {
    const poem = `
        Roses are red,
        Violets are blue,
        Programming is fun,
        And so are you!
    `;
    res.status(HTTP_CODES.SUCCESS.OK).send(poem).end();
});

// النقطة: /tmp/quote لإرجاع اقتباس عشوائي
const quotes = [
    "The journey of a thousand miles begins with one step.",
    "Life is what happens when you're busy making other plans.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

server.get('/tmp/quote', (req, res) => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(HTTP_CODES.SUCCESS.OK).send(randomQuote).end();
});

// النقطة: /tmp/sum/:a/:b لإرجاع مجموع الرقمين باستخدام POST
server.post('/tmp/sum/:a/:b', (req, res) => {
    const a = parseFloat(req.params.a);
    const b = parseFloat(req.params.b);

    // التحقق من أن القيم هي أرقام
    if (isNaN(a) || isNaN(b)) {
        return res.status(HTTP_CODES.CLIENT_ERROR.BAD_REQUEST).send('Both parameters must be numbers.').end();
    }

    const sum = a + b;
    res.status(HTTP_CODES.SUCCESS.OK).send(`The sum of ${a} and ${b} is ${sum}`).end();
});

// تشغيل الخادم
server.listen(server.get('port'), () => {
    console.log(`Server is running on http://localhost:${server.get('port')}`);
});