const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.connect(process.env.mongoURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log('Database Connection Successful');
	} catch (err) {
		console.log(err.message);
		console.log('Some problem occured while connecting to database');
	}
};

module.exports = connectDB;
