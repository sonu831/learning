import express from 'express';
import sequelize from './config/database';
import User from './models/User';

const app = express();
app.use(express.json());

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
    // Sync models with database (creates tables if they don't exist)
    return sequelize.sync();
  })
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Routes
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password // Note: In production, hash this password!
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Error fetching users' });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Error fetching user' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});