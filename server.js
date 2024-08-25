const express = require('express');
const app = express();
app.use(express.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    let numbers = [];
    let alphabets = [];
    let highestLowercase = "";

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && (!highestLowercase || item > highestLowercase)) {
                highestLowercase = item;
            }
        }
    });

    res.json({
        "is_success": true,
        "user_id": "your_name_ddmmyyyy",
        "email": "your_email@domain.com",
        "roll_number": "your_roll_number",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercase ? [highestLowercase] : []
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({ "operation_code": 1 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
