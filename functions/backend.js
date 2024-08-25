const express = require('express');
const app = express();
app.use(express.json());

app.get('/.netlify/functions/backend/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.post('/.netlify/functions/backend/bfhl', (req, res) => {
    const { data } = req.body;

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(char => char === char.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.sort().slice(-1);

    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy",
        email: "your_email@college.com",
        roll_number: "your_roll_number",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

module.exports.handler = (event, context, callback) => {
    const server = app.listen(3000, () => {
        console.log('Server running');
    });
    const response = {
        statusCode: 200,
        body: JSON.stringify('Backend running'),
    };
    server.close();
    callback(null, response);
};
