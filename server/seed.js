const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
const dotenv = require('dotenv');

dotenv.config();

const createAdmin = async () => {
  await mongoose.connect(process.env.MONGO_URI);
  
  const hashedPassword = await bcrypt.hash("admin123", 10);
  
  const admin = new User({
    name: "System Admin",
    email: "admin@movie.com",
    password: hashedPassword,
    role: "admin"
  });

  await admin.save();
  console.log("Admin account created: admin@movie.com / admin123");
  process.exit();
};

createAdmin();