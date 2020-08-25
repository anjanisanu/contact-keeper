const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const connectDB = require('./config/db');

const app = express();

dotenv.config({ path: './config.env' });

//DATABASE CONNECTION
connectDB();

app.use(express.json({ extended: false }));

app.use(express.static(path.join(__dirname, '../build')));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, './client/build'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
