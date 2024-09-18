const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
app.use(cors({
  origin: "https://leaderboard-overall-qss1.vercel.app/",
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(express.json());

// Connect to SQLite database
const db = new sqlite3.Database('./database.db'); // Store the database in a file for persistence
 // Use a file-based database for persistence

// Create table and insert sample data
// Create table if it doesn't exist and insert sample data
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, rank INTEGER, prize TEXT, points INTEGER)');

  // Check if table is empty before inserting sample data
  db.get('SELECT COUNT(*) AS count FROM users', (err, row) => {
      if (err) {
          console.error('Error checking users table:', err);
      } else if (row.count === 0) {
          const stmt = db.prepare('INSERT INTO users (name, rank, prize, points) VALUES (?, ?, ?, ?)');
          stmt.run('Manoj', 4, '₹7', 0);
          stmt.run('AMIT', 5, '₹6', 0);
          stmt.run('Karan', 6, '₹5', 0);
          stmt.run('Jaga', 7, '₹4', 0);
          stmt.run('Ashish', 2, '₹111', 0);
          stmt.run('Mahak', 1, '₹21', 0);
          stmt.run('Tejas', 3, '₹10', 0);
          stmt.run('Sonu', 2, '₹111', 0);
          stmt.run('Kaushik', 1, '₹21', 0);
          stmt.run('Suraj', 3, '₹10', 0);
          stmt.finalize();
      }
  });
});


// API endpoint to get user data
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users ORDER BY points DESC, rank ASC', [], (err, rows) => {
      if (err) {
          console.error('Error fetching users:', err);
          return res.status(500).json({ message: 'Server Error', error: err.message });
      }
      res.json(rows);
  });
});


// API endpoint to claim points
app.post('/api/claim-points', (req, res) => {
    const { id } = req.body; // Use id instead of rank
    const pointsToAdd = Math.floor(Math.random() * 10) + 1; // Random points between 1 and 10
  
    // Update user points in the database
    db.run('UPDATE users SET points = points + ? WHERE id = ?', [pointsToAdd, id], function (err) {
      if (err) {
        res.status(500).send(err.message);
      } else {
        // Fetch the updated user data
        db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
          if (err) {
            res.status(500).send(err.message);
          } else {
            res.json({ success: true, pointsAdded: pointsToAdd, updatedUser: row });
          }
        });
      }
    });
  });

app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
